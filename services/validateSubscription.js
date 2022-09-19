const {Subscription} = require("../models/subscription");
const User = require("../models/user")
const Item = require("../models/item")

let validateSubscription = async () => {
    const sellers = await User.find({ subStatus : 1})
    // console.log(sellers);

    today = new Date()
    for(let i = 0; i < sellers.length; i++){
        const subscriptions = await Subscription.find({ sellerId: sellers[i]._id }).sort({ subDate : -1});
        if(subscriptions[0].endDate < today){
            await Item.updateMany({ sellerId : sellers[i]._id},{ status: 0 })
        }
    }
};

module.exports = validateSubscription;
