import { computed } from 'vue'

interface tableItemProps {
    align: string
    width?: string | number
    label?: string
}

export const tableItemProps = {
    width: [String, Number],
    align: {
        type: String,
        default: 'start',
        validator: (val: string) => ['start', 'center', 'end'].includes(val),
    },
}

export default (props: tableItemProps) => {
    const justifyContent = computed(() => {
        if (['start', 'end'].includes(props.align)) {
            return `flex-${props.align}`
        }

        return props.align
    })

    const styles = computed(() => {
        return {
            ...(props.width && { width: props.width + 'px', flexShrink: 0 }),
            ...(justifyContent.value && {
                justifyContent: justifyContent.value,
            }),
        }
    })

    return {
        styles,
    }
}
