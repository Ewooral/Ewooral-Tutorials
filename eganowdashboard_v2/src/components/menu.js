export const menuItems = [
    {
        id: 1,
        label: "Navigation",
        isTitle: true
    },
    {
        label: 'Back to biz collect',
        icon: 'ri-home-5-line',
        isMenuCollapsed: false,
        link: '/'
    },
    {
        id: 2,
        label: "Biz collect",
        isTitle: true
    },
    {
        id: 20,
        label: 'Transactions',
        icon: 'ri-mail-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 21,
                label: 'Account balance',
                link: '/business/services'
            },
            {
                id: 22,
                label: 'Account transactions',
                link: '/business/accounttransaction'
            },
            {
                id: 23,
                label: 'Acct To Acct Trans',
                link: '/business/accounttoaccount'
            }
        ]
    },
    {
        id: 25,
        label: 'Merchant Customers',
        icon: 'ri-task-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 26,
                label: 'View customers',
                link: '/merchant/viewcustomers'
            },
            {
                id: 27,
                label: 'Pending customers',
                link: '/merchant/pendingcustomers'
            },
            {
                id: 28,
                label: 'Pin reset request',
                link: '/merchant/pinrequest'
            },
            {
                id: 29,
                label: 'Termination request',
                link: '/merchant/terminate'
            },
            {
                id: 30,
                label: 'Approve term. request',
                link: '/merchant/approvetermination'
            }
        ]
    },
    {
        id: 31,
        label: 'Merchant Services',
        icon: 'ri-profile-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 32,
                label: 'Create merchant service',
                link: '/merchant/createmerchantservice'
            },
            {
                id: 33,
                label: 'Add service package',
                link: '/merchant/addservicepackage'
            },
            {
                id: 34,
                label: 'Edit service package',
                link: '/merchant/editservicepackage'
            },
            {
                id: 35,
                label: 'my merchant services',
                link: '/merchant/mymerchantservice'
            }
        ]
    },
    {
        id: 36,
        label: 'Merchant Users',
        icon: 'ri-shield-user-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 37,
                label: 'View Users',
                link: '/merchant/viewuser'
            },
            {
                id: 38,
                label: 'Create user',
                link: '/merchant/createuser'
            },
            {
                id: 39,
                label: 'Assign user role',
                link: '/merchant/assignuserrole'
            },
            {
                id: 40,
                label: 'Limit',
                link: '/merchant/limit'
            },
        ]
    },
];

