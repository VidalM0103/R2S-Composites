const CustomFlowbiteReact = {
    customForm: {
        textInputCustom: {
            "field": {
                "input": {
                    "sizes": {
                        "md": "p-2.5 text-base",
                    },
                    "colors": {
                        "primary": "bg-white ring-1 focus:ring-primary  focus:border-primary text-gray-800",
                    }
                }
            }
        },
        textAreaInputCustom: {
            "base": "block w-full rounded-lg border text-base disabled:cursor-not-allowed disabled:opacity-50",
            "colors": {
                "primary": "bg-white ring-1 focus:ring-primary  focus:border-primary text-gray-800",
            }
        },
        labelCustom: {
            "root": {
                "base": "text-base font-medium text-white",
                "colors": {
                    "default": "text-white",
                }
            }
        },
        galeryCustom: {
            "root": {
                "base": "relative h-full w-full",
                "leftControl": "leftControl fixed lg:absolute left-0 top-[calc(50%)] lg:top-0 flex lg:h-full lg:items-center lg:justify-center px-4 focus:outline-none",
                "rightControl": "rightControl fixed lg:absolute right-0 top-[calc(50%)] lg:top-0 flex lg:h-full lg:items-center lg:justify-center px-4 focus:outline-none"
            },
            "indicators": {
                "active": {
                    "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                    "on": "bg-white dark:bg-gray-800"
                },
                "base": "h-3 w-3 rounded-full",
                "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
            },
            "item": {
                "base": "item-photo absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
                "wrapper": {
                    "off": "w-full flex-shrink-0 transform cursor-default snap-center",
                    "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
                }
            },
            "control": {
                "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
                "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            },
            "scrollContainer": {
                "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
                "snap": "snap-x"
            }
        }
    }
}

export default CustomFlowbiteReact;