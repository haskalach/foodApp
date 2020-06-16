import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer rDurys8vh3q8o5eE-yAggk11dlexmZrA6hi4AoDWCMuN_XisXUZGVe4Buvc__n6MQEPPZVN1N1OUa85VIHwEAgi98_F80Y2mTtGTQkI6wWkOH8CsOltgCzj2Ig_hXnYx'
    }
})