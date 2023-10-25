export default [
    {
        id: 1,
        label: "Navigation",
        isTitle: true
    },
    {
        label: 'Back to dashboard',
        icon: 'ri-home-5-line',
        isMenuCollapsed: false,
        link: '/'
    },
    {
        id: 2,
        label: "Group contribution",
        isTitle: true
    },
    {
        id: 3,
        label: 'Groups project',
        icon: 'ri-home-5-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 4,
                label: 'Projects',
                link: '/groupcontribution/business/groupdetails'
            },

        ]
    },

]