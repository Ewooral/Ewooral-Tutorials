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
        label: 'Groups',
        icon: 'ri-home-5-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 4,
                label: 'My groups',
                link: '/groupcontribution/business/listofgroups'
            },
            {
                id: 5,
                label: '`Join public group',
                link: '/groupcontribution/business/joinpublicgroup'
            },
            {
                id: 6,
                label: 'Create group',
                link: '/groupcontribution/business/creategroup'
            },

        ]
    },

]