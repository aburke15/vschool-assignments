var techGiants = {
    company: "Samsung",
    popularProduct: "Cell-Phones",
    yearlyRevenue: 10000000000,
    goodCustomerService: false,
    active: true,
    isActive: function () {
        if (techGiants.active === true) {
            console.log("This company is alive and well.");
        } else {
            console.log("This company is history.");
        }
    },
    daysOpen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    companyPartners: [
        {
            company: "LG",
            popularProduct: "TV's",
            yearlyRevenue: 5000000000,
            goodCustomerService: true,
            active: true,
            isActive: function () {
                if (techGiants.active === true) {
                    console.log("This company is alive and well.");
                } else {
                    console.log("This company is history.");
                }
            },
            daysOpen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],

            companyPartners: [
                {
                    company: "Huawei",
                    popularProduct: "Cell-Phones",
                    yearlyRevenue: 0,
                    goodCustomerService: true,
                    active: false,
                    isActive: function () {
                        if (techGiants.active === true) {
                            console.log("This company is alive and well.");
                        } else {
                            console.log("This company is history.");
                        }
                    },
                    companyPartners: false,
                    daysPreviouslyOpen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                }
            ]
        }
    ]
}

console.log(techGiants);