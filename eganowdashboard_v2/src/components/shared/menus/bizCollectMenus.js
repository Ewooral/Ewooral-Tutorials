export default [
    {
        id: 1,
        label: "biz_collect.navigation",
        isTitle: true
    },
    {
        label: 'biz_collect.main_dashboard',
        icon: 'ri-home-5-line',
        isMenuCollapsed: false,
        link: '/',
        color :"#c92d4b"
    },
    {
        id: 2,
        label: "biz_collect.biz_collect_menu",
        isTitle: true
    },
    {
        id: 18,
        label: 'biz_collect.transactions',
        icon: 'ri-mail-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 19,
                label: 'biz_collect.account_balalnce',
                link: '/bizcollect/business/services'
            },
            {
                id: 20,
                label: 'biz_collect.account_transaction',
                link: '/bizcollect/business/accounttransaction'
            },
            {
                id: 21,
                label: 'biz_collect.account_to_account_trans',
                link: '/bizcollect/business/accounttoaccount'
            },
            {
                id: 22,
                label: 'biz_collect.fund_transfer',
                link: '/bizcollect/business/fundtransfer'
            },
            {
                id: 23,
                label: 'biz_collect.fund_transfer_history',
                link: '/bizcollect/business/fundtransferhistory'
            },
            {
                id: 24,
                label: 'Account statements',
                link: '/bizcollect/business/glstatement'
            }
        ]
    },
    {
        id: 25,
        label: 'biz_collect.merchant_customer',
        icon: 'ri-task-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 26,
                label: 'biz_collect.view_customer',
                link: '/bizcollect/merchant/viewcustomers'
            },
            {
                id: 27,
                label: 'biz_collect.pending_customer',
                link: '/bizcollect/merchant/pendingcustomers'
            },
            {
                id: 28,
                label: 'biz_collect.pin_reset_request',
                link: '/bizcollect/merchant/pinrequest'
            },
            {
                id: 29,
                label: 'biz_collect.termination_request',
                link: '/bizcollect/merchant/terminate'
            },
            {
                id: 30,
                label: 'biz_collect.approve_term_request',
                link: '/bizcollect/merchant/approvetermination'
            }
        ]
    },
    {
        id: 31,
        label: 'Payment Link',
        icon: 'ri-profile-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 32,
                label: 'Generate payment link',
                link: '/bizcollect/merchant/payment-link'
            },
            {
                id: 33,
                label: 'Get payment list',
                link: '/bizcollect/merchant/get-payments-list'
            },
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
                link: '/bizcollect/merchant/viewuser'
            },
            {
                id: 38,
                label: 'Create user',
                link: '/bizcollect/merchant/createuser'
            },
            // {
            //     id: 39,
            //     label: 'Assign user role',
            //     link: '/bizcollect/merchant/assignuserrole'
            // },
            // {
            //     id: 40,
            //     label: 'Limit',
            //     link: '/bizcollect/merchant/limit'
            // },
        ]
    },
]