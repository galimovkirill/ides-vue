import { computed } from 'vue'

export const tableItemProps = {
    width: [String, Number],
    align: {
        type: String,
        default: 'start',
        validator: (val) => ['start', 'center', 'end'].includes(val),
    },
}

export default (props) => {
    const justifyContent = computed(() => {
        if (['start', 'end'].includes(props.align)) {
            return `flex-${props.align}`
        }

        return props.align
    })

    return {
        justifyContent,
    }
}
