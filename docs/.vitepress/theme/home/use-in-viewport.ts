
import { readonly, ref, isRef, watchEffect, onUnmounted } from 'vue'
import type { Ref, ComponentPublicInstance, WatchSource } from 'vue'
type TargetType = HTMLElement | Element | Window | Document | ComponentPublicInstance;
type TargetValue<T> = T | undefined | null;
type BasicTarget<T extends TargetType = Element> =
    | (() => TargetValue<T>)
    | TargetValue<T>
    | Ref<TargetValue<T>>;
type EffectCallback = () => void
type DependencyList = WatchSource | any[] | any
interface UseInViewportOptions {
    /**
     * Margin around the root
     */
    rootMargin?: string

    /**
     * Either a single number or an array of numbers which indicate at what percentage of the target's visibility the ratio should be executed
     */
    threshold?: number | number[]

    /**
     * The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.
     */
    root?: BasicTarget<Element>
}

function depsAreSame(oldDeps: DependencyList, deps: DependencyList): boolean {
    if (oldDeps === deps) return true
    for (let i = 0; i < oldDeps.length; i++) {
        if (!Object.is(oldDeps[i], deps[i])) return false
    }
    return true
}


const createEffectWithTarget = (useEffectType: typeof watchEffect) => {
    /**
     *
     * @param effect
     * @param deps
     * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
     */
    const useEffectWithTarget = (
        effect: EffectCallback,
        deps: WatchSource[] | any,
        target: BasicTarget<any> | BasicTarget<any>[],
    ) => {
        const hasInitRef = ref(false)

        const lastElementRef = ref<(Element | null)[]>([])
        const lastDepsRef = ref<DependencyList>([])

        const unLoadRef = ref<any>()

        useEffectType(() => {
            const targets = Array.isArray(target) ? target : [target]
            const els = targets.map(item => getTargetElement(item))

            // init run
            if (!hasInitRef.value) {
                hasInitRef.value = true
                lastElementRef.value = els
                lastDepsRef.value = deps

                unLoadRef.value = effect()
                return
            }

            if (
                els.length !== lastElementRef.value.length ||
                !depsAreSame(els, lastElementRef.value) ||
                !depsAreSame(deps, lastDepsRef.value)
            ) {
                unLoadRef.value?.()
                lastElementRef.value = els
                lastDepsRef.value = deps
                unLoadRef.value = effect()
            }
        })

        onUnmounted(() => {
            unLoadRef.value?.()
            hasInitRef.value = false
        })
    }

    return useEffectWithTarget
}
const useEffectWithTarget = createEffectWithTarget(watchEffect);
const isBrowser = !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);

 function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T) {
    if (!isBrowser) {
        return undefined;
    }

    if (!target) {
        return defaultElement;
    }

    let targetElement: TargetValue<T>;
    if (typeof target === 'function') {
        targetElement = target();
    } else if (isRef(target)) {
        targetElement = (target.value as ComponentPublicInstance)?.$el ?? target.value;
    } else {
        targetElement = target;
    }
    return targetElement;
}
function useInViewport(target: BasicTarget, options?: UseInViewportOptions) {
    const state = ref<boolean>()
    const ratio = ref<number>()

    useEffectWithTarget(
        () => {
            const el = getTargetElement(target)
            if (!el) {
                return
            }

            const observer = new IntersectionObserver(
                entries => {
                    for (const entry of entries) {
                        state.value = entry.isIntersecting
                        ratio.value = entry.intersectionRatio
                    }
                },
                {
                    ...options,
                    root: getTargetElement(options?.root),
                },
            )

            observer.observe(el)

            return () => {
                observer.disconnect()
            }
        },
        [],
        target,
    )

    return [readonly(state), readonly(ratio)] as const
}

export { useInViewport }
