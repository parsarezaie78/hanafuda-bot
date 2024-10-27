class Helper {
    static checkReferralCode(referralCode) {
        const myReferralCode = 'TMCDAV'; // کد رفرال شما

        if (referralCode !== myReferralCode) {
            throw new Error('Sorry, You cannot use this bot, please join with creator referral code');
        }
        return true;
    }
}
