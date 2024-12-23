const talentsData = {
    commonTalents: [
        {
            name: "Adapt And Overcome",
            description: "While Above 50% Maximum Health, Increase Punch Damage By 6%. While Belov 50% Maximum Health, Increase Strike Defense By 15%",
            image: "../images/common-1.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Body Proportions",
            description: "Increase Critical Hit Damage For High Kicks And Elbow Strikes By 35%",
            image: "../images/common-2.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Bone Breaker",
            description: "High Kicks, Low Kicks And Knee Strikes Ignore 12% Of The Opponent's Kick Defense And Knee Defense.",
            image: "../images/common-3.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Caveman Strength",
            description: "Decrease The Ratio Of Permanent Damage For Critical Hit Attacks Suffered By 100% And Increase Mitigated Critical Hit Damage By 80%",
            image: "../images/common-4.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Combo Fighter",
            description: "After Succesfully Landing A Critical Hit, Increase Initiative By 2% And Damage For Low Kicks By 12% For 10 Seconds",
            image: "../images/common-5.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Composure",
            description: "Increase Submission Defense By 25%, AND By Additional 50% Each Time You Suffer A Takedown",
            image: "../images/common-21.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Defensive Posture",
            description: "Increase takedown defense and knee defense by 15%",
            image: "../images/common-22.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Firm Grasp",
            description: "Increase Efficensy Of The Submission Skill By 15%",
            image: "../images/common-23.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Ground & Pound",
            description: "Increase Ground Grappling And Combo Chance While On The Ground By 6%.",
            image: "../images/common-6.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Hardened Steel Knee",
            description: "Knee Strikes Have 2% Increased Chance Of Combo And Success.",
            image: "../images/common-7.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Lightning Fast Reflex",
            description: "Increase Initiative By 1%.",
            image: "../images/common-8.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Mob Brawler",
            description: "After Suffering A Critical Hit, Increase Health Recovery Speed By 70%, Can Be Stacked Up To 3 Times.",
            image: "../images/common-9.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Momentum",
            description: "After The Fighter Successfully Dodges An Attack, Increase Critical Hit Chance By 10% And Critical Damage By 50% For 12 Seconds.",
            image: "../images/common-10.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Muscle Memory",
            description: "After Performing A Successfull Takedown, Increase Takedown Damage By 100% And Ignore 40% Of The Opponent's Takedown Defense",
            image: "../images/common-20.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "No Remorse",
            description: "Increase Critical Hit Chance For All Ground Attacks By 20%.",
            image: "../images/common-19.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Plan Ahead",
            description: "Increase Chance Of Blocking Standing Attacks By 2% (Not In Clinch)",
            image: "../images/common-24.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Retalliation",
            description: "After Successfuly Escaping A Clinch, Increase Initiative By 4% And Damage By 12%, Can Be Stacked Up To 5 Times",
            image: "../images/common-11.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Savage",
            description: "Increase Critical Hit Damage For Standing Attacks By 20% (Not In Clinch)",
            image: "../images/common-12.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Steady Feet",
            description: "Increase Combo Chance By 10% While Standing (Not In Clinch)",
            image: "../images/common-13.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Strong Mentality",
            description: "Increase Initiative Proportionally To Missing Health Up To Max 3% Increase",
            image: "../images/common-14.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Thai Master",
            description: "Increase Damage Of All Clinchwork Moves By 15%.",
            image: "../images/common-15.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Trained Too Hard",
            description: "Increase Strength By 5% And Agility 1%.",
            image: "../images/common-16.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Unimpressionable",
            description: "Mitigate 70% Of All Damage From Combo Moves.",
            image: "../images/common-17.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here
        {
            name: "Wrestling Effiency",
            description: "Increase Chance To Stand Up While On The Ground By 30% AND An Additional 60% While Below 50% Maximum Health",
            image: "../images/common-18.jpg",
            color: "#808080" // Gray color for Common Talents
        },
        // Add more common talents here

    ],
    rareTalents: [
        {
            name: "Aggressive Temper",
            description: "If The Fighter Hasn't Taken Damage For 3 seconds, Increase The Combo Chance By 30% For 10 Seconds.",
            image: "../images/rare-15.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Back On Its Feet",
            description: "After The Fighter Suffers A Takedown, Increae Chance To Successfulyl Stand Up By 100% For 12 Seconds.",
            image: "../images/rare-16.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Chained Kicks",
            description: "After The Fighter Successfully Lands 2 Consecutive Identical Attacks, Increase Kick Damage By 50% For 12 Seconds.",
            image: "../images/rare-17.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Eight Limbs Expert",
            description: "Increase Damage For Knee Strikes And Elbow Strikes By 12%.",
            image: "../images/rare-18.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Escape Artist",
            description: "Increase The Chance Of Dodging Attacks By 2%, And Chance To Escape Submission By 12%.",
            image: "../images/rare-19.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Feet Agility",
            description: "Increase Damage For High Kicks And Low Kicks By 15%",
            image: "../images/rare-20.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Flawless Defense",
            description: "Increase Kick Defense And Knee Defense Proportionally To Missing Health, up to 40%.",
            image: "../images/rare-21.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Flexible Fighter",
            description: "While Above 50% Maximum Health Increase Damage For Low Kicks By 30%. While Below 50% Maximum Health Increase Kick Defense By 70%.",
            image: "../images/rare-22.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Formidable Force",
            description: "After The Fighter Misses An Attac, Increase Chance Of Critical Hit By 12% For 6 Seconds. After The Fighter Lands a Critical Hit, Increase Chances Of Success By 12% For 6 Seconds.",
            image: "../images/rare-9.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Frenzied Beating",
            description: "Each Successive Different Attack That The Fighter Performs Increase The Next Attack's Damage By 5%, Can Be Stacked 5 Times.",
            image: "../images/rare-10.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Good Endurance",
            description: "After The Fighter Successfully Dodges An Attack, Increase Health Recovery Speed By 60% And Initiative By 6% For 6 Seconds.",
            image: "../images/rare-11.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Ground Elbows",
            description: "Increase Damage And Critical Hit Chance By 20% For Elbow Strikes While On The Ground.",
            image: "../images/rare-12.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Hard Bones",
            description: "Increase Mitigated Critical Hit Damage By 90%.",
            image: "../images/rare-13.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Last Breath",
            description: "After The Opponent Successfully Stands Up, Increase Damage Mitigation By 50% For 12 Seconds.",
            image: "../images/rare-14.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Lower Strikes Master",
            description: "Increase Critical Hit Chance For Knee Strikes And Low Kicks By 21%",
            image: "../images/rare-23.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Mind Games",
            description: "Increase The Fighter's Damage By 3% Every Seconds While Not Dealing Damage. Resets After The Fighter Lands A Successful Attack.",
            image: "../images/rare-24.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "No Limit",
            description: "Successful Attacks While On The Ground Increase The Next Ground Attack's Damage By 50% And Reduce The Opponent's Health Recovery Rate By 100%.",
            image: "../images/rare-1.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "No Pain No Gain",
            description: "After The Fighter Suffers A Successful Combo Or Takedown, Increase Chance Of Success For Attack Moves (Except Takedowns) By 20% For 6 Seconds.",
            image: "../images/rare-2.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Perfect Strikes",
            description: "Increase The Damage For Combo Moves By 75%, And Their Permanent Damage By 100%.",
            image: "../images/rare-3.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Quick Initiative",
            description: "Increase Chance Of Critical Hit And Combo By 12% For Elbow Strikes And Punches.",
            image: "../images/rare-4.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Slamming",
            description: "Increase Damage For Takedowns By 15% And Their Chance Of Success By 5%.",
            image: "../images/rare-5.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Staggering Strikes",
            description: "All Successful Attacks Decrease The Opponent's Health Recovery Speed By 25%, Can Be Stacked Up To 4 Times.",
            image: "../images/rare-6.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Suprising Angles",
            description: "After The Fighter Misses An Attack, Increase Critical Hit Chances By 15%. Can Be Stacked Up To 4 Times.",
            image: "../images/rare-7.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        {
            name: "Trained Reflexes",
            description: "After The Fighter Suffers A Successful Combo, Increase Chance Of Dodging And Blocking Attacks By 3%. Can Be Stacked Up To 5 Times.",
            image: "../images/rare-8.jpg",
            color: "#007BFF" // Blue color for Rare Talents
        },
        // Add more rare talents here
        

    ],
    epicTalents: [
        {
            name: "Accurate Impact",
            description: "Increase Permanent Damage From Successful Attacks By 40%.",
            image: "../images/epic-1.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Back And Stronger",
            description: "The First Time The Fighter's Health Goes Below 50%, Increase Initiative By 15% For 15 Seconds.",
            image: "../images/epic-2.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Chrushing High Kicks",
            description: "Increae Damage, Chance Of Success, Combo And Critical Hit For High Kicks By 5%.",
            image: "../images/epic-10.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Fighter And Dancer",
            description: "After The Fighter Successfully Escapes Clinchwork Or Submission, Increase Initiative By 50% For 12 Seconds.",
            image: "../images/epic-15.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Force Of Nature",
            description: "Decrease The Ratio Of Permanent Damage For All Attacks Suffered By 70%.",
            image: "../images/epic-14.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Ground Expert",
            description: "Increase Hit Chance And Combo ChanceBy 20% For All Ground Attacks Except Submission.",
            image: "../images/epic-5.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Ground Gamble",
            description: "In The Standing Stance, Increase Strike Defense By 50% And Ignore 25% Of The Opponent's Takedown Defense.",
            image: "../images/epic-7.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Hard Guard",
            description: "Increase Damage Mitigation By 15%.",
            image: "../images/epic-8.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Hit Where It Hurts",
            description: "Increase All Critical Hit Damage By 100%.",
            image: "../images/epic-4.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "It's Personal",
            description: "Increase Damage For All Attack Moves Proportionally To Missing Health, Up To 50%.",
            image: "../images/epic-3.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Rage Fist",
            description: "Increae damage For Punches And Combo Chance For Punches By 10%",
            image: "../images/epic-11.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Sadism",
            description: "Heal The Fighter For 50% Of All Damage The Fighter Deals.",
            image: "../images/epic-12.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Steadfast Pose",
            description: "When In Clinch, Increase Defense And Strike Defense By 50% And Takedown Defense by 70%.",
            image: "../images/epic-13.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Strategist",
            description: "After The Fighter Lands A Successful Critical Hit, Increase Mitigated Damage By 12%, Can Be Stacked Up To 5 Times.",
            image: "../images/epic-60.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Treacherous Sweep",
            description: "Low Kicks Have A 8% Increased Hit Chance And Combo Chance.",
            image: "../images/epic-16.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here
        {
            name: "Vengeful Strikes",
            description: "Increase Critical Hit Chance And Critical Hit Damage Proportionally To Missing Health, Up To 45%.",
            image: "../images/epic-9.jpg",
            color: "#6F42C1" // Purple color for Epic Talents
        },
        // Add more epic talents here

    ]
};
