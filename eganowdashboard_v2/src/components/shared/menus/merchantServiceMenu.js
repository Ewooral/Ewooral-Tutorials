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
        link: '/',
        color :"#c92d4b"
    },
        // {
        //     id: 31,
        //         label: 'Merchant Services',
        //     icon: 'ri-profile-line',
        //     isMenuCollapsed: false,
        //     subItems: [
        //     {
        //         id: 32,
        //         label: 'Create merchant service',
        //         link: '/bizcollect/merchant/createmerchantservice'
        //     },
        //     {
        //         id: 33,
        //         label: 'Add service package',
        //         link: '/bizcollect/merchant/addservicepackage'
        //     },
        //     {
        //         id: 34,
        //         label: 'Edit service package',
        //         link: '/bizcollect/merchant/editservicepackage'
        //     },
        //     {
        //         id: 35,
        //         label: 'my merchant services',
        //         link: '/bizcollect/merchant/mymerchantservice'
        //     }
        //     ]
        // },
    {
        id: 36,
        label: 'Merchant Users',
        icon: 'ri-shield-user-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 37,
                label: 'View Users',
                link: '/bizcollect/merchant/viewuser'
            },
            {
                id: 38,
                label: 'Create user',
                link: '/bizcollect/merchant/createuser'
            },
        ]
    },
    {
        id: 39,
        label: 'Merchant Accounts',
        icon: 'ri-profile-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 40,
                label: 'Request List',
                link: '/bizcollect/merchant/merchantrequestlist'
            },
            {
                id: 41,
                label: 'Request Account',
                link: '/bizcollect/merchant/merchantrequest'
            }
        ]
    },
]