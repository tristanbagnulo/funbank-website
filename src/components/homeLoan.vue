<template>
    <header id="headerHomeLoan">
        <h1>How to secure a homeloan</h1>
        <p>Reach out to one of our representitives
            for homeloan advice
        </p>
        <p></p>
    </header>
    <div class="row">   
        <div id = "icon-1">
            <img width="150"
            src="@/assets/images/homeLoanMenu/financeToolKit.png"/>
            <p>Finance Tool Kit</p> 
        </div>
        <div id="icon-2">
            <img width="150" 
            src="@/assets/images/homeLoanMenu/applicationGuide.png"/>
            <p>Application Guide</p>
        </div>
        <div id = "icon-3">
            <img width="150"
            src="@/assets/images/homeLoanMenu/loansAndInterest.png"/>
            <p>Loans and Interest</p>
        </div>
        <div id = "icon-4">
            <img width="150"
            src="@/assets/images/homeLoanMenu/planningYourFinance.png"/>
            <p>Planning Your Finance</p>
        </div>
    </div>
    
    
</template>

<style scoped>
    #headerHomeLoan {
        background: #73b15a;
        padding: 5px 0%;
    }

    /* #icon-box-1 {
        margin: 10px 0%;
    } */

    /* #row {
        display: flex;
        justify-content: space-between;
    } */

    #icon-1, #icon-2, #icon-3, #icon-4 {
        /* display: table-cell;  */
        display: inline-block;
        margin: 1% 1%;
        border: 1px solid black;
        padding: 2% 2%;
        border-radius: 4px;
    }
</style>