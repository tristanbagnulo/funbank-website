<template>
    <header id="headerCreditCards">
        <h1>Credit Cards</h1>
        <p>Which credit card suits you?</p>
        <p></p>
    </header>

    <H2>View our verious cards</H2>
    <div id=creditCardCard-1>
        <img width="120"
        src="@/assets/images/creditCardsImages/credit-cards-pink.png">
        <h3>High Point cards</h3>
        <p>Accumulate more points for greater use.</p>
    </div>
    <div id=creditCardCard-2>
        <img width="120"
        src="@/assets/images/creditCardsImages/credit-cards-green.png">
        <h3>Minimal Flare cards</h3>
        <p>Simple credit cards without all the extras.</p>
    </div>
    <div id=creditCardCard-3>
        <img width="120"
        src="@/assets/images/creditCardsImages/credit-cards-orange.png">
        <h3>No Interest cards</h3>
        <p>Pay no interest on money borrowed and instead pay a monthly fee.</p>
    </div>
    <div id=creditCardCard-4>
        <img width="120"
        src="@/assets/images/creditCardsImages/credit-cards-blue.png">
        <h3>Premium cards</h3>
        <p>Exclusive access to the most luxurious perks redeemable globally.</p>
    </div>
    
</template>


<style scoped>
    #headerCreditCards {
        background: #73b15a;
        padding: 5px 0%;
    }

    #creditCardCard-1,#creditCardCard-2,
    #creditCardCard-3,#creditCardCard-4 {
        display:inline-table;
        padding: 0px 4px;
        border: 2px solid grey;
        margin: 5px;
        border-radius: 3px;
        max-width: 220px;
        min-width: 100px;
        height:270px;

    }

</style>
