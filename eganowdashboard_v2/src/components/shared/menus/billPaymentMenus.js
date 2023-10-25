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
        label: "Pay bills",
        isTitle: true
    },
    {
        id: 20,
        label: 'Merchant trans',
        icon: 'ri-mail-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 21,
                label: 'Account balance',
                link: '/billpayment/business/services'
            },
            {
                id: 22,
                label: 'Account transactions',
                link: '/billpayment/business/accounttransaction'
            },
            {
                id: 23,
                label: 'Acct To Acct Trans',
                link: '/billpayment/business/accounttoaccount'
            }
        ]
    },

]