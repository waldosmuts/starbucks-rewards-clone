let rewardSelected;

$(document).ready(function () {
    rewardSelected = 25;
    displayReward(rewardSelected);
});

const rewardsStore = [
    {
        id: 25,
        title: "Customize your drink",
        description: "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
        preview: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"
    },
    {
        id: 50,
        title: "Brewed hot coffee, bakery item or hot tea",
        description: "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
        preview: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png"
    },
    {
        id: 150,
        title: "Handcrafted drink, hot breakfast or parfait",
        description: "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
        preview: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png"
    },
    {
        id: 200,
        title: "Salad, sandwich or protein box",
        description: "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
        preview: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png"
    },
    {
        id: 400,
        title: "Select merchandise or at-home coffee",
        description: "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
        preview: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png"
    }
]

$(".select__tier").click(function (e) {
    displayReward(parseInt($(this).val()));
});

function displayReward(tier) {
    if ($(".reward__selected").length) {
        $(".display__content").fadeOut("fast", function () {
            const rewardIndex = rewardsStore.findIndex(x => x.id === tier);
            $(".select__tier").removeClass("reward__selected");
            $(".select__tier").eq(rewardIndex).addClass("reward__selected");
            $(".display__content").fadeIn("fast");
            $(".reward__img").attr("src", rewardsStore[rewardIndex].preview);
            $(".reward__title").text(rewardsStore[rewardIndex].title);
            $(".reward__desc").text(rewardsStore[rewardIndex].description);
        });
    } else {
        const rewardIndex = rewardsStore.findIndex(x => x.id === tier);
        $(".select__tier").removeClass("reward__selected");
        $(".select__tier").eq(rewardIndex).addClass("reward__selected");
        $(".display__content").fadeIn("fast");
        $(".reward__img").attr("src", rewardsStore[rewardIndex].preview);
        $(".reward__title").text(rewardsStore[rewardIndex].title);
        $(".reward__desc").text(rewardsStore[rewardIndex].description);
    }
}

$("#star-code").submit(function (e) {
    e.preventDefault();
});