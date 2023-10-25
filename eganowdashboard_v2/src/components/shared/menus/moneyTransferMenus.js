export default [
    {
        id: 1,
        label: "money_transfer_menu.navigation",
        isTitle: true
    },
    {
        label: 'money_transfer_menu.main_dashboard',
        icon: 'ri-home-5-line',
        isMenuCollapsed: false,
        link: '/'
    },
    {
        id: 2,
        label: "money_transfer_menu.send_money_main",
        isTitle: true
    },
    {
        id: 20,
        label: 'money_transfer_menu.money_transfer',
        icon: 'ri-mail-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 21,
                label: 'money_transfer_menu.account_balance',
                link: '/moneytransfer/business/accountbalance'
            },
            {
                id: 22,
                label: 'money_transfer_menu.send_money',
                link: '/moneytransfer/business/sendmoney'
            },
            {
                id: 23,
                label: 'money_transfer_menu.transaction_history',
                link: '/moneytransfer/business/transactionhistory'
            },
            {
                id: 24,
                label: 'money_transfer_menu.beneficiaries',
                link: '/moneytransfer/business/getbeneficiaries'
            },
            {
                id: 24,
                label: 'money_transfer_menu.payment_account',
                link: '/moneytransfer/business/managesourceaccount'
            },
            {
                id: 25,
                label: 'money_transfer_menu.account_statement',
                link: '/moneytransfer/business/accountstatement'
            },

        ]
    },

]