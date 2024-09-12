const CustomFlowbiteReact = {
    customForm: {
        textInputCustom: {
            "field": {
                "input": {
                    "sizes": {
                        "md": "p-2.5 text-base",
                    },
                    "colors": {
                        "primary": "bg-white ring-1 focus:ring-yellow-300  focus:border-yellow-300 text-gray-800",
                    }
                }
            }
        },
        textAreaInputCustom: {
            "base": "block w-full rounded-lg border text-base disabled:cursor-not-allowed disabled:opacity-50",
            "colors": {
                "primary": "bg-white ring-1 focus:ring-yellow-300  focus:border-yellow-300 text-gray-800",
            }
        },
        labelCustom: {
            "root": {
                "base": "text-base font-medium text-white",
                "colors": {
                    "default": "text-white",
                },
            }
        }
    }
}

export default CustomFlowbiteReact;