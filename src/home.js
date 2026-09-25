// Addition trick definitions populate the learn view and its step-by-step panels.
const additionTricks = [
	{
		id: "add-left-right",
		title: "Left-to-right addition",
		label: "Start here",
		duration: "4 min",
		tint: "saffron",
		description:
			"Process numbers from left to right to match how your mind reads digits. Add the highest place values first, then finish with the ones.",
		formula: "456 + 328 = 700 + 70 + 14 = 784",
		steps: ["Add the hundreds: 400 + 300 = 700.", "Add the tens: 50 + 20 = 70.", "Add the ones and combine: 6 + 8 = 14, so 700 + 70 + 14 = 784."],
	},
	{
		id: "add-making-tens",
		title: "Making tens",
		label: "Friendly pairs",
		duration: "4 min",
		tint: "coral",
		description: "Scan a vertical column for pairs that make 10. Count each pair as one clean ten, then add any digits left over.",
		formula: "7 + 4 + 3 + 6 = (7+3) + (4+6) = 20",
		steps: ["Look for friendly pairs: 7 + 3 and 4 + 6.", "Treat each pair as 10.", "Combine the tens: 10 + 10 = 20."],
	},
	{
		id: "add-compensation",
		title: "Compensation method",
		label: "Round and adjust",
		duration: "5 min",
		tint: "blue",
		description: "Round a number to a nearby multiple of 10 or 100, add the easy number, then subtract the extra amount you added.",
		formula: "464 + 298 = 464 + 300 - 2 = 762",
		steps: ["Round 298 up to 300.", "Add 464 + 300 = 764.", "Subtract the extra 2: 764 - 2 = 762."],
	},
	{
		id: "add-dot-method",
		title: "Dot method for multi-row addition",
		label: "Tall columns",
		duration: "5 min",
		tint: "saffron",
		description:
			"When a vertical column has many single digits, keep only the ones digit in the column and mark a dot whenever a new ten is formed.",
		formula: "7 + 6 + 5 + 8 = 26",
		steps: [
			"Add down the column and mark a dot after each group of ten.",
			"Keep the remaining ones digit visible as you continue.",
			"Two dots mean two tens; the remaining 6 makes 26.",
		],
	},
	{
		id: "add-partial-sums",
		title: "Partial sums method",
		label: "No instant carrying",
		duration: "5 min",
		tint: "coral",
		description: "Add each place-value column independently, write the partial sums below the line, and combine them in one final step.",
		formula: "687 + 549 = 16 + 120 + 1100 = 1236",
		steps: [
			"Add ones: 7 + 9 = 16.",
			"Add tens: 80 + 40 = 120; add hundreds: 600 + 500 = 1100.",
			"Combine the partial sums: 16 + 120 + 1100 = 1236.",
		],
	},
	{
		id: "add-column-splitting",
		title: "Column splitting",
		label: "Two-digit blocks",
		duration: "5 min",
		tint: "blue",
		description: "Treat four- or six-digit numbers as two-digit blocks. Add the right block first, then the left block and any block carry.",
		formula: "42|35 + 18|24 = 60|59 = 6059",
		steps: [
			"Split each number into two-digit blocks: 42|35 and 18|24.",
			"Add the right blocks: 35 + 24 = 59.",
			"Add the left blocks: 42 + 18 = 60, giving 60|59 = 6059.",
		],
	},
	{
		id: "add-double-adjust",
		title: "Double and adjust",
		label: "Near doubles",
		duration: "4 min",
		tint: "saffron",
		description: "For adjacent or nearly equal numbers, double the smaller number and add the small difference.",
		formula: "68 + 71 = (68 × 2) + 3 = 139",
		steps: ["Notice that 71 is 3 more than 68.", "Double the smaller number: 68 × 2 = 136.", "Add the difference: 136 + 3 = 139."],
	},
	{
		id: "add-cast-nines",
		title: "Cast out nines",
		label: "Check your work",
		duration: "4 min",
		tint: "coral",
		description: "Verify an addition without repeating it. Reduce each number to its digit root, add those roots, and compare the result's root.",
		formula: "432 → 9 → 0   |   516 → 12 → 3   |   948 → 21 → 3",
		steps: [
			"Reduce each addend to a single digit by adding its digits.",
			"Add the reduced digits: 0 + 3 = 3.",
			"Reduce the answer too: 9 + 4 + 8 = 21 → 3. The roots match.",
		],
	},
	{
		id: "add-fractions",
		title: "Vertical fractional addition",
		label: "Mixed numbers",
		duration: "6 min",
		tint: "blue",
		description:
			"Align whole numbers on the left and fractions on the right. Find a common denominator, then carry a whole if the fraction becomes improper.",
		formula: "4 2/3 + 2 1/2 = 6 7/6 = 7 1/6",
		steps: ["Add the whole numbers: 4 + 2 = 6.", "Use sixths: 2/3 + 1/2 = 4/6 + 3/6 = 7/6.", "Carry one whole from 7/6: 6 + 1 = 7, leaving 1/6."],
	},
	{
		id: "add-balanced",
		title: "Base-10 complement",
		label: "Balanced add",
		duration: "5 min",
		tint: "saffron",
		description: "Shift a small value between addends so the second number becomes a tidy multiple of 10, without changing the total.",
		formula: "57 + 38 = 54 + 40 = 94",
		steps: ["Take 3 from 57, making 54.", "Give that 3 to 38, making 40.", "Add the tidy numbers: 54 + 40 = 94."],
	},
];

// Subtraction uses the same card model as addition, with topic-specific examples.
const subtractionTricks = [
	{
		id: "sub-base",
		title: "All from 9 and the last from 10",
		label: "Base subtraction",
		duration: "5 min",
		tint: "blue",
		description: "For subtraction from a power of 10, subtract every digit from 9 except the rightmost non-zero digit, which comes from 10.",
		formula: "10000 - 4637 = 5363",
		steps: [
			"Subtract the first digits from 9: 9 - 4 = 5, 9 - 6 = 3, 9 - 3 = 6.",
			"Use 10 for the last non-zero digit: 10 - 7 = 3.",
			"Read the result directly: 5363, with no chain borrowing.",
		],
	},
	{
		id: "sub-equal-addition",
		title: "Equal addition method",
		label: "Constant difference",
		duration: "5 min",
		tint: "saffron",
		description: "Add the same small amount to the top and bottom numbers so the bottom becomes a clean multiple of 10.",
		formula: "83 - 38 = 85 - 40 = 45",
		steps: ["38 needs 2 to become 40.", "Add 2 to both numbers: 83 + 2 = 85 and 38 + 2 = 40.", "Subtract the friendly numbers: 85 - 40 = 45."],
	},
	{
		id: "sub-left-right",
		title: "Left-to-right subtraction",
		label: "Vedic method",
		duration: "5 min",
		tint: "coral",
		description:
			"Work through the columns from left to right. Look ahead when a top digit is smaller and use the complement to finish the next column.",
		formula: "734 - 482 = 252",
		steps: [
			"Start with hundreds: 7 - 4 = 3, then look ahead to the tens.",
			"Because 3 is less than 8, adjust the running result to 2.",
			"Use complements in the remaining columns: 13 - 8 = 5 and 4 - 2 = 2.",
		],
	},
	{
		id: "sub-nines-complement",
		title: "Nines complement method",
		label: "Turn it into add",
		duration: "5 min",
		tint: "blue",
		description: "Convert subtraction into addition with the 9s complement, then apply the end-around carry.",
		formula: "62 - 37 → 62 + 62 = 124 → 24 + 1 = 25",
		steps: [
			"Find the 9s complement of 37: 62.",
			"Add it to the top number: 62 + 62 = 124.",
			"Drop the leading 1 and add it back to the ones: 24 + 1 = 25.",
		],
	},
	{
		id: "sub-column-split",
		title: "Subtraction by parts",
		label: "Column split",
		duration: "5 min",
		tint: "saffron",
		description: "Split a multi-digit subtraction into two-digit blocks and subtract each block independently.",
		formula: "85|42 - 21|18 = 64|24 = 6424",
		steps: [
			"Partition the numbers into 85|42 and 21|18.",
			"Subtract each block: 85 - 21 = 64 and 42 - 18 = 24.",
			"Join the blocks to get 64|24 = 6424.",
		],
	},
	{
		id: "sub-near-benchmark",
		title: "Near benchmark adjustment",
		label: "Round and return",
		duration: "4 min",
		tint: "coral",
		description: "Round a number ending in 8 or 9 up to the nearest multiple of 10, subtract the clean number, then return the difference.",
		formula: "546 - 298 = 546 - 300 + 2 = 248",
		steps: ["Round 298 up to 300.", "Subtract 300 from 546: 546 - 300 = 246.", "Add back the 2 you rounded away: 246 + 2 = 248."],
	},
	{
		id: "sub-reversing",
		title: "Reversing digits",
		label: "Two-digit difference",
		duration: "4 min",
		tint: "blue",
		description: "When subtracting a two-digit number from its reverse, find the difference between the digits and multiply it by 9.",
		formula: "92 - 29 = |9 - 2| × 9 = 63",
		steps: ["Find the positive digit difference: |9 - 2| = 7.", "Multiply that difference by 9.", "7 × 9 = 63, so 92 - 29 = 63."],
	},
	{
		id: "sub-dot-chain",
		title: "Dot method for chain subtraction",
		label: "Borrowing guide",
		duration: "6 min",
		tint: "saffron",
		description:
			"For several stacked numbers, place a dot on the adjacent left digit whenever borrowing is needed. Each dot increases that digit's effective value by 1.",
		formula: "824 - 368 = 456",
		steps: [
			"Work column by column and mark a dot beside a digit that lends a ten.",
			"Ones: 14 - 8 = 6; tens: 11 - 6 = 5.",
			"Hundreds finish the result: 8 - 4 = 4, giving 456.",
		],
	},
	{
		id: "sub-fractions",
		title: "Vertical fractional subtraction",
		label: "Mixed numbers",
		duration: "6 min",
		tint: "coral",
		description: "Align the whole numbers and fractions. If the top fraction is smaller, borrow one whole and convert it into fractional parts.",
		formula: "7 1/4 - 3 3/4 = 3 2/4 = 3 1/2",
		steps: [
			"Borrow one whole from 7 1/4, making 6 5/4.",
			"Subtract the fractions: 5/4 - 3/4 = 2/4.",
			"Subtract the wholes: 6 - 3 = 3, so the answer is 3 1/2.",
		],
	},
	{
		id: "sub-add-up",
		title: "Add-up method",
		label: "Shopkeeper's algorithm",
		duration: "5 min",
		tint: "blue",
		description: "Count up from the bottom number to the top number in friendly jumps, then add those jumps to find the difference.",
		formula: "100 - 64 = +6 (to 70) + 30 = 36",
		steps: ["Start at 64 and add 6 to reach 70.", "Add 30 more to reach 100.", "Combine the jumps: 6 + 30 = 36."],
	},
];

// Subject metadata keeps navigation, copy, and trick lists in one place.
const subjects = {
	addition: {
		label: "Addition",
		kicker: "Addition foundations",
		copy: "Fast addition is knowing which place-value move to look for first.",
		tricks: additionTricks,
	},
	subtraction: {
		label: "Subtraction",
		kicker: "Subtraction foundations",
		copy: "Subtract with less borrowing by rounding, complementing, and working in friendly chunks.",
		tricks: subtractionTricks,
	},
	multiplication: {
		label: "Multiplication",
		kicker: "Multiplication foundations",
		copy: "Multiplication shortcuts are on their way.",
		tricks: [],
	},
};

// Keep every quiz item in a consistent shape for both fixed and generated questions.
function question(id, trickId, prompt, equation, choices, answer, explanation, difficulty) {
	return {
		id,
		trickId,
		prompt,
		equation,
		choices,
		answer,
		explanation,
		difficulty,
	};
}

// Fixed questions are used by the trick-specific quiz panels.
const quizQuestions = {
	"add-left-right": [
		question(
			"add-left-right-1",
			"add-left-right",
			"Add from the highest place value first.",
			"456 + 328",
			["774", "784", "794"],
			"784",
			"400 + 300, 50 + 20, and 6 + 8 make 784.",
			"warm-up",
		),
		question(
			"add-left-right-2",
			"add-left-right",
			"Use the left-to-right move.",
			"623 + 248",
			["861", "871", "881"],
			"871",
			"600 + 200, 20 + 40, and 3 + 8 make 871.",
			"stretch",
		),
	],
	"add-making-tens": [
		question(
			"add-making-tens-1",
			"add-making-tens",
			"Find the friendly pairs.",
			"7 + 4 + 3 + 6",
			["18", "20", "22"],
			"20",
			"7 + 3 and 4 + 6 are two tens.",
			"warm-up",
		),
		question(
			"add-making-tens-2",
			"add-making-tens",
			"Group the digits into pairs that make 10.",
			"8 + 5 + 2 + 5",
			["18", "20", "22"],
			"20",
			"8 + 2 and 5 + 5 make 20.",
			"stretch",
		),
	],
	"add-compensation": [
		question(
			"add-compensation-1",
			"add-compensation",
			"Round, add, then adjust.",
			"464 + 298",
			["752", "762", "772"],
			"762",
			"464 + 300 - 2 = 762.",
			"warm-up",
		),
		question(
			"add-compensation-2",
			"add-compensation",
			"Which friendly rewrite is correct?",
			"593 + 198",
			["593 + 200 - 2", "600 + 198 - 7", "593 + 190 + 8"],
			"593 + 200 - 2",
			"198 becomes 200, so subtract the extra 2.",
			"stretch",
		),
	],
	"add-dot-method": [
		question(
			"add-dot-method-1",
			"add-dot-method",
			"Keep the ones and count the tens.",
			"7 + 6 + 5 + 8",
			["24", "26", "28"],
			"26",
			"Two tens and 6 ones make 26.",
			"warm-up",
		),
		question(
			"add-dot-method-2",
			"add-dot-method",
			"How many tens and ones are in the column?",
			"9 + 8 + 7 + 6",
			["28", "30", "32"],
			"30",
			"The column makes three tens exactly.",
			"stretch",
		),
	],
	"add-partial-sums": [
		question(
			"add-partial-sums-1",
			"add-partial-sums",
			"Combine the independent column sums.",
			"687 + 549",
			["1226", "1236", "1246"],
			"1236",
			"16 + 120 + 1100 = 1236.",
			"warm-up",
		),
		question(
			"add-partial-sums-2",
			"add-partial-sums",
			"Add the hundreds, tens, and ones separately.",
			"432 + 257",
			["679", "689", "699"],
			"689",
			"400 + 200, 30 + 50, and 2 + 7 make 689.",
			"stretch",
		),
	],
	"add-column-splitting": [
		question(
			"add-column-splitting-1",
			"add-column-splitting",
			"Add the two-digit blocks.",
			"4235 + 1824",
			["5959", "6059", "6159"],
			"6059",
			"42 + 18 = 60 and 35 + 24 = 59.",
			"warm-up",
		),
		question(
			"add-column-splitting-2",
			"add-column-splitting",
			"Split into blocks before adding.",
			"5618 + 2437",
			["7955", "8055", "8155"],
			"8055",
			"56 + 24 = 80 and 18 + 37 = 55.",
			"stretch",
		),
	],
	"add-double-adjust": [
		question(
			"add-double-adjust-1",
			"add-double-adjust",
			"Double the smaller number and adjust.",
			"68 + 71",
			["129", "139", "149"],
			"139",
			"68 × 2 + 3 = 139.",
			"warm-up",
		),
		question(
			"add-double-adjust-2",
			"add-double-adjust",
			"Spot the near double.",
			"75 + 77",
			["142", "152", "162"],
			"152",
			"75 × 2 + 2 = 152.",
			"stretch",
		),
	],
	"add-cast-nines": [
		question(
			"add-cast-nines-1",
			"add-cast-nines",
			"Use digit roots to verify the sum.",
			"432 + 516",
			["938", "948", "958"],
			"948",
			"The digit roots are 0 + 3 = 3, and 948 also reduces to 3.",
			"warm-up",
		),
		question(
			"add-cast-nines-2",
			"add-cast-nines",
			"Which answer has the matching digit root?",
			"267 + 384",
			["641", "651", "661"],
			"651",
			"267 reduces to 6 and 384 to 6; 6 + 6 reduces to 3, as does 651.",
			"stretch",
		),
	],
	"add-fractions": [
		question(
			"add-fractions-1",
			"add-fractions",
			"Align the fractions and simplify.",
			"4 2/3 + 2 1/2",
			["6 5/6", "7 1/6", "7 5/6"],
			"7 1/6",
			"2/3 + 1/2 = 7/6, which carries one whole.",
			"warm-up",
		),
		question(
			"add-fractions-2",
			"add-fractions",
			"Find a common denominator.",
			"2 3/4 + 1 2/3",
			["4 1/12", "4 5/12", "3 5/12"],
			"4 5/12",
			"3/4 + 2/3 = 17/12, so the total is 4 5/12.",
			"stretch",
		),
	],
	"add-balanced": [
		question(
			"add-balanced-1",
			"add-balanced",
			"Shift value without changing the total.",
			"57 + 38",
			["84", "94", "104"],
			"94",
			"57 + 38 becomes 54 + 40 = 94.",
			"warm-up",
		),
		question(
			"add-balanced-2",
			"add-balanced",
			"Make the second addend a tidy ten.",
			"76 + 29",
			["95", "105", "115"],
			"105",
			"Move 1 from 76 to 29: 75 + 30 = 105.",
			"stretch",
		),
	],
	"sub-base": [
		question(
			"sub-base-1",
			"sub-base",
			"Use 9s and then 10.",
			"10000 - 4637",
			["5263", "5363", "5463"],
			"5363",
			"9-4, 9-6, 9-3, and 10-7 give 5363.",
			"warm-up",
		),
		question(
			"sub-base-2",
			"sub-base",
			"Subtract directly from the power of 10.",
			"1000 - 286",
			["704", "714", "724"],
			"714",
			"9-2, 9-8, and 10-6 give 714.",
			"stretch",
		),
	],
	"sub-equal-addition": [
		question(
			"sub-equal-addition-1",
			"sub-equal-addition",
			"Add the same amount to both numbers.",
			"83 - 38",
			["35", "45", "55"],
			"45",
			"Add 2: 85 - 40 = 45.",
			"warm-up",
		),
		question(
			"sub-equal-addition-2",
			"sub-equal-addition",
			"Round the bottom number to a ten.",
			"92 - 47",
			["35", "45", "55"],
			"45",
			"Add 3: 95 - 50 = 45.",
			"stretch",
		),
	],
	"sub-left-right": [
		question(
			"sub-left-right-1",
			"sub-left-right",
			"Work from the left and use complements.",
			"734 - 482",
			["242", "252", "262"],
			"252",
			"The left-to-right complement steps lead to 252.",
			"warm-up",
		),
		question(
			"sub-left-right-2",
			"sub-left-right",
			"Look ahead before subtracting each column.",
			"865 - 327",
			["528", "538", "548"],
			"538",
			"Hundreds, then the adjusted tens and ones, give 538.",
			"stretch",
		),
	],
	"sub-nines-complement": [
		question(
			"sub-nines-complement-1",
			"sub-nines-complement",
			"Use the 9s complement and end-around carry.",
			"62 - 37",
			["15", "25", "35"],
			"25",
			"The complement of 37 is 62; 62 + 62 = 124, then 24 + 1 = 25.",
			"warm-up",
		),
		question(
			"sub-nines-complement-2",
			"sub-nines-complement",
			"Turn the subtraction into an addition.",
			"74 - 28",
			["36", "46", "56"],
			"46",
			"The 9s complement of 28 is 71; 74 + 71 = 145, then 45 + 1 = 46.",
			"stretch",
		),
	],
	"sub-column-split": [
		question(
			"sub-column-split-1",
			"sub-column-split",
			"Subtract the blocks independently.",
			"8542 - 2118",
			["6324", "6424", "6524"],
			"6424",
			"85 - 21 = 64 and 42 - 18 = 24.",
			"warm-up",
		),
		question(
			"sub-column-split-2",
			"sub-column-split",
			"Use two-digit chunks.",
			"9736 - 4521",
			["5115", "5215", "5315"],
			"5215",
			"97 - 45 = 52 and 36 - 21 = 15.",
			"stretch",
		),
	],
	"sub-near-benchmark": [
		question(
			"sub-near-benchmark-1",
			"sub-near-benchmark",
			"Round the subtrahend and return the difference.",
			"546 - 298",
			["238", "248", "258"],
			"248",
			"546 - 300 + 2 = 248.",
			"warm-up",
		),
		question(
			"sub-near-benchmark-2",
			"sub-near-benchmark",
			"Use the nearby benchmark.",
			"803 - 397",
			["396", "406", "416"],
			"406",
			"803 - 400 + 3 = 406.",
			"stretch",
		),
	],
	"sub-reversing": [
		question(
			"sub-reversing-1",
			"sub-reversing",
			"Find the digit difference and multiply by 9.",
			"92 - 29",
			["53", "63", "73"],
			"63",
			"|9 - 2| × 9 = 7 × 9 = 63.",
			"warm-up",
		),
		question(
			"sub-reversing-2",
			"sub-reversing",
			"Use the reverse-digit shortcut.",
			"83 - 38",
			["35", "45", "55"],
			"45",
			"|8 - 3| × 9 = 5 × 9 = 45.",
			"stretch",
		),
	],
	"sub-dot-chain": [
		question(
			"sub-dot-chain-1",
			"sub-dot-chain",
			"Use dots to track each borrow.",
			"824 - 368",
			["446", "456", "466"],
			"456",
			"The dot-guided columns are 14-8, 11-6, and 8-4.",
			"warm-up",
		),
		question(
			"sub-dot-chain-2",
			"sub-dot-chain",
			"Borrow cleanly down the columns.",
			"932 - 487",
			["435", "445", "455"],
			"445",
			"The borrowed columns give 12-7 = 5, 12-8 = 4, and 8-4 = 4.",
			"stretch",
		),
	],
	"sub-fractions": [
		question(
			"sub-fractions-1",
			"sub-fractions",
			"Borrow one whole before subtracting.",
			"7 1/4 - 3 3/4",
			["3 1/2", "4 1/2", "4 3/4"],
			"3 1/2",
			"7 1/4 becomes 6 5/4; subtracting gives 3 2/4 = 3 1/2.",
			"warm-up",
		),
		question(
			"sub-fractions-2",
			"sub-fractions",
			"Align the fractional parts.",
			"5 1/3 - 2 5/6",
			["2 1/2", "3 1/2", "3 2/3"],
			"2 1/2",
			"Borrow to make 4 7/6, then subtract 2 5/6.",
			"stretch",
		),
	],
	"sub-add-up": [
		question(
			"sub-add-up-1",
			"sub-add-up",
			"Count up in friendly jumps.",
			"100 - 64",
			["26", "36", "46"],
			"36",
			"6 to 70 and 30 to 100 make 36.",
			"warm-up",
		),
		question(
			"sub-add-up-2",
			"sub-add-up",
			"Add the jumps from the smaller number.",
			"500 - 278",
			["212", "222", "232"],
			"222",
			"22 to 300, then 200 to 500, makes 222.",
			"stretch",
		),
	],
};

// HTML data attributes select the initial page and subject without duplicating app logic.
const pageName = document.body.dataset.page || "home";
const pageSubject = document.body.dataset.subject || "addition";

// Page defaults allow the shared script to power the landing, addition, and subtraction pages.
const initialState = {
	home: {
		screen: "landing",
		subject: "addition",
	},
	addition: {
		screen: "workspace",
		subject: "addition",
	},
	subtraction: {
		screen: "workspace",
		subject: "subtraction",
	},
};

// Mutable UI state is rendered into the app after each meaningful interaction.
const state = {
	screen: initialState[pageName]?.screen || "landing",
	view: "learn",
	subject: initialState[pageName]?.subject || pageSubject || "addition",
	expanded: "add-left-right",
	action: null,
	activeTrick: null,
	mobileNav: false,
	routine: false,
	hintLevel: 0,
	nudgeIndex: Math.floor(Math.random() * 3),
	answers: {},
	trickQuestionIndex: {},
	puzzleQuestion: null,
	round: 1,
	previousSubject: "addition",
	revealTrick: null,
};

if (state.subject === "subtraction") {
	state.expanded = "sub-base";
}

// Cache the app mount point and flatten questions for the puzzle room.
const app = document.getElementById("app");
const allQuestions = Object.values(quizQuestions).flat();
// Nudges rotate on reload and every minute, with different prompts per subject.
const nudgeSets = {
	addition: [
		{
			label: "Stretch question",
			equation: "8 + 7 + 2 = ?",
			hints: ["Look for a pair that makes 10.", "8 + 2 makes a clean ten.", "Now add the remaining 7."],
		},
		{
			label: "Quick estimate",
			equation: "387 + 214 = ?",
			hints: ["Round each number to a friendly hundred.", "The first number is 13 below 400.", "The second number is 14 above 200."],
		},
		{
			label: "Place-value move",
			equation: "456 + 328 = ?",
			hints: ["Start with 400 + 300.", "Add the tens next: 50 + 20.", "Finish with 6 + 8."],
		},
	],
	subtraction: [
		{
			label: "Stretch question",
			equation: "52 - 19 = ?",
			hints: ["19 is close to 20.", "52 - 20 is an easy step.", "Add 1 back because you subtracted one too many."],
		},
		{
			label: "Friendly jump",
			equation: "84 - 47 = ?",
			hints: ["Jump from 47 to 50 first.", "Then jump from 50 to 80.", "Finish with the jump from 80 to 84."],
		},
		{
			label: "Place-value move",
			equation: "735 - 218 = ?",
			hints: ["Start with 735 - 200.", "Now take away 18.", "Break 18 into 10 and 8."],
		},
	],
};

// Use a short exit animation before moving between the static HTML pages.
function navigateToPage(targetPage) {
	if (!targetPage) return;
	const shell = document.querySelector(".app-shell");
	if (shell) {
		shell.classList.add("page-leaving");
	}
	window.setTimeout(() => {
		window.location.href = targetPage;
	}, 220);
}

// Add crawlable structured data for the tricks available on the current topic page.
function injectStructuredData() {
	if (pageName === "home" || !subjects[pageSubject]) return;
	const data = subjects[pageSubject].tricks.map((trick) => ({
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: trick.title,
		description: trick.description,
		step: trick.steps.map((text, index) => ({
			"@type": "HowToStep",
			position: index + 1,
			text,
		})),
	}));
	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.textContent = JSON.stringify(data);
	document.head.appendChild(script);
}

// Escape dynamic text before inserting it into template-generated HTML.
function esc(value) {
	return String(value).replace(
		/[&<>"']/g,
		(character) =>
			({
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#039;",
			})[character],
	);
}

// Map the app's compact symbols to the Material Symbols font names.
const materialIconMap = {
	"✦": "auto_awesome",
	"▤": "routine",
	"◷": "schedule",
	"✣": "bolt",
	"♧": "tips_and_updates",
	"▱": "stacks",
	"⌁": "exercise",
	"♙": "grid_view",
	"+-": "calculate",
	"→": "arrow_forward",
	"›": "chevron_right",
	"◇": "quiz",
	"☷": "checklist",
	"↗": "north_east",
	"▶": "play_arrow",
	"✓": "check",
	"↻": "refresh",
	"⌄": "expand_more",
	ϟ: "auto_awesome",
	"+": "add",
	"♠": "lightbulb",
};

// Render one consistently styled icon, optionally with screen-reader text.
function icon(symbol, label = "") {
	const iconName = materialIconMap[symbol] || symbol;
	return `<span class="icon material-symbols-rounded" aria-hidden="true">${iconName}</span>${label ? `<span class="sr-only">${label}</span>` : ""}`;
}

// Build the shared brand mark for landing, desktop, and mobile navigation.
function brand(compact = false) {
	return `<div class="brand">
	<span class="brand-mark" aria-hidden="true"><img class="brand-mark-icon" src="public/favicon.png" alt="Trick-Ninza Logo"></span>
	<span><span class="brand-name">Trick-Ninza</span>${compact ? "" : '<span class="brand-sub">math, made friendly, faster & easy</span>'}</span>
</div>`;
}

// Resolve the currently selected subject from the shared subject registry.
function currentSubject() {
	return subjects[state.subject];
}

// Find a trick across all subjects for panels opened from the current view.
function trickById(id) {
	return Object.values(subjects)
		.flatMap((subject) => subject.tricks)
		.find((trick) => trick.id === id);
}

// Return the fixed quiz items associated with one trick.
function questionsForTrick(id) {
	return quizQuestions[id] || [];
}

// Generate an inclusive random integer for fresh puzzle values.
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Copy before shuffling so source question choices remain unchanged.
function shuffle(items) {
	const shuffled = [...items];
	for (let index = shuffled.length - 1; index > 0; index -= 1) {
		const swapIndex = randomInt(0, index);
		[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
	}
	return shuffled;
}

// Build four answer choices with the correct answer in a random position.
function generatedOptions(answer, offsets = [-1, 1, 2]) {
	const numericAnswer = Number(answer);
	const distractors = offsets.map((offset) => String(numericAnswer + offset));
	return shuffle([...new Set([String(answer), ...distractors])]).slice(0, 4);
}

// Apply the selected trick's rule to generate a new, solvable puzzle.
function generatedQuestion(trickId) {
	let prompt = "Use the trick rule to solve this fresh question.";
	let equation = "";
	let answer = "";
	let explanation = "Check the place values and apply the highlighted shortcut.";
	let offsets = [-1, 1, 2];

	switch (trickId) {
		case "add-left-right": {
			const left = randomInt(200, 800);
			const right = randomInt(100, 400);
			answer = String(left + right);
			equation = `${left} + ${right}`;
			prompt = "Add from the highest place value first.";
			explanation = `${Math.floor(left / 100) * 100} + ${Math.floor(right / 100) * 100}, then finish the tens and ones.`;
			break;
		}
		case "add-making-tens": {
			const pairs = [randomInt(1, 9), randomInt(1, 9)];
			const digits = [pairs[0], 10 - pairs[0], pairs[1], 10 - pairs[1]];
			answer = "20";
			equation = digits.join(" + ");
			prompt = "Group the digits into pairs that make 10.";
			explanation = `${digits[0]} + ${digits[1]} and ${digits[2]} + ${digits[3]} make two tens.`;
			offsets = [-2, 2, 4];
			break;
		}
		case "add-compensation": {
			const left = randomInt(200, 700);
			const rounded = randomInt(2, 9) * 100;
			const adjustment = randomInt(1, 9);
			const right = rounded - adjustment;
			answer = String(left + right);
			equation = `${left} + ${right}`;
			prompt = "Round, add, then adjust.";
			explanation = `${left} + ${rounded} - ${adjustment} = ${answer}.`;
			break;
		}
		case "add-dot-method": {
			const digits = Array.from({ length: 4 }, () => randomInt(3, 9));
			answer = String(digits.reduce((sum, digit) => sum + digit, 0));
			equation = digits.join(" + ");
			prompt = "Keep the ones and count the tens.";
			explanation = `${Math.floor(Number(answer) / 10)} tens and ${Number(answer) % 10} ones make ${answer}.`;
			break;
		}
		case "add-partial-sums": {
			const left = randomInt(200, 700);
			const right = randomInt(100, 400);
			answer = String(left + right);
			equation = `${left} + ${right}`;
			prompt = "Add the hundreds, tens, and ones separately.";
			explanation = `${left} + ${right} = ${answer} when the partial sums are combined.`;
			break;
		}
		case "add-column-splitting": {
			const leftBlock = randomInt(20, 80);
			const rightBlock = randomInt(10, 80);
			const left = leftBlock * 100 + randomInt(10, 40);
			const right = rightBlock * 100 + randomInt(10, 40);
			answer = String(left + right);
			equation = `${left} + ${right}`;
			prompt = "Add the two-digit blocks.";
			explanation = `${leftBlock} + ${rightBlock} on the left, then combine the right blocks.`;
			break;
		}
		case "add-double-adjust": {
			const smaller = randomInt(30, 90);
			const difference = randomInt(1, 5);
			answer = String(smaller * 2 + difference);
			equation = `${smaller} + ${smaller + difference}`;
			prompt = "Double the smaller number and adjust.";
			explanation = `${smaller} × 2 + ${difference} = ${answer}.`;
			break;
		}
		case "add-cast-nines": {
			const left = randomInt(100, 700);
			const right = randomInt(100, 300);
			answer = String(left + right);
			equation = `${left} + ${right}`;
			prompt = "Use digit roots to verify the sum.";
			explanation = `The digit root of ${left} + ${right} matches the digit root of ${answer}.`;
			break;
		}
		case "add-fractions": {
			const whole = randomInt(1, 5);
			const otherWhole = randomInt(1, 4);
			answer = `${whole + otherWhole} 1/2`;
			equation = `${whole} 1/4 + ${otherWhole} 1/4`;
			prompt = "Align the fractions and simplify.";
			explanation = `The quarters make one half, so the total is ${answer}.`;
			return makeGeneratedQuestion(trickId, prompt, equation, answer, explanation, [
				`${whole + otherWhole} 1/4`,
				`${whole + otherWhole} 3/4`,
				`${whole + otherWhole + 1} 1/2`,
			]);
		}
		case "add-balanced": {
			const left = randomInt(40, 80);
			const adjustment = randomInt(1, 9);
			const right = 30 + adjustment;
			answer = String(left + right);
			equation = `${left} + ${right}`;
			prompt = "Make the second addend a tidy ten.";
			explanation = `Move ${adjustment} from ${left} to ${right}: ${left - adjustment} + ${right + (10 - adjustment)} = ${answer}.`;
			break;
		}
		case "sub-base": {
			const subtrahend = randomInt(1000, 8000);
			answer = String(10000 - subtrahend);
			equation = `10000 - ${subtrahend}`;
			prompt = "Use 9s and then 10.";
			explanation = "Subtract each leading digit from 9 and the final digit from 10.";
			break;
		}
		case "sub-equal-addition": {
			const bottom = randomInt(20, 80);
			const adjustment = 10 - (bottom % 10);
			const top = bottom + randomInt(20, 60);
			answer = String(top - bottom);
			equation = `${top} - ${bottom}`;
			prompt = "Add the same amount to both numbers.";
			explanation = `Add ${adjustment} to both numbers so the bottom becomes ${bottom + adjustment}.`;
			break;
		}
		case "sub-left-right": {
			const top = randomInt(500, 900);
			const bottom = randomInt(100, 400);
			answer = String(top - bottom);
			equation = `${top} - ${bottom}`;
			prompt = "Work from the left and use complements.";
			explanation = "Look ahead when the next top digit is smaller, then use the complement.";
			break;
		}
		case "sub-nines-complement": {
			const bottom = randomInt(12, 68);
			const top = randomInt(bottom + 10, 90);
			answer = String(top - bottom);
			equation = `${top} - ${bottom}`;
			prompt = "Use the 9s complement and end-around carry.";
			explanation = `The 9s complement of ${bottom} turns the subtraction into addition.`;
			break;
		}
		case "sub-column-split": {
			const top = randomInt(40, 90);
			const bottom = randomInt(10, top - 10);
			const topOnes = randomInt(20, 80);
			const bottomOnes = randomInt(10, topOnes - 1);
			const topNumber = top * 100 + topOnes;
			const bottomNumber = bottom * 100 + bottomOnes;
			answer = String(topNumber - bottomNumber);
			equation = `${topNumber} - ${bottomNumber}`;
			prompt = "Subtract the blocks independently.";
			explanation = `${top} - ${bottom} and ${topOnes} - ${bottomOnes} give the two answer blocks.`;
			break;
		}
		case "sub-near-benchmark": {
			const top = randomInt(400, 900);
			const rounded = randomInt(2, 8) * 100;
			const adjustment = randomInt(1, 9);
			const bottom = rounded - adjustment;
			answer = String(top - bottom);
			equation = `${top} - ${bottom}`;
			prompt = "Round the subtrahend and return the difference.";
			explanation = `${top} - ${rounded} + ${adjustment} = ${answer}.`;
			break;
		}
		case "sub-reversing": {
			const tens = randomInt(4, 9);
			const ones = randomInt(1, tens - 1);
			answer = String((tens - ones) * 9);
			equation = `${tens}${ones} - ${ones}${tens}`;
			prompt = "Find the digit difference and multiply by 9.";
			explanation = `|${tens} - ${ones}| × 9 = ${answer}.`;
			break;
		}
		case "sub-dot-chain": {
			const top = randomInt(500, 900);
			const bottom = randomInt(100, top - 100);
			answer = String(top - bottom);
			equation = `${top} - ${bottom}`;
			prompt = "Use dots to track each borrow.";
			explanation = "Mark each digit that lends a ten before finishing the columns.";
			break;
		}
		case "sub-fractions": {
			const whole = randomInt(4, 8);
			const otherWhole = randomInt(1, whole - 2);
			answer = `${whole - otherWhole - 1} 1/2`;
			equation = `${whole} 1/4 - ${otherWhole} 3/4`;
			prompt = "Borrow one whole before subtracting.";
			explanation = `Borrow one whole to make ${whole - 1} 5/4, then subtract the fractional parts.`;
			return makeGeneratedQuestion(trickId, prompt, equation, answer, explanation, [
				`${whole - otherWhole} 1/2`,
				`${whole - otherWhole - 1} 1/4`,
				`${whole - otherWhole} 1/4`,
			]);
		}
		case "sub-add-up": {
			const bottom = randomInt(40, 300);
			const answerNumber = randomInt(20, 100);
			const top = bottom + answerNumber;
			answer = String(answerNumber);
			equation = `${top} - ${bottom}`;
			prompt = "Count up in friendly jumps.";
			explanation = `Count from ${bottom} to ${top} in friendly jumps to make ${answer}.`;
			break;
		}
	}

	return makeGeneratedQuestion(
		trickId,
		prompt,
		equation,
		answer,
		explanation,
		offsets.map((offset) => String(Number(answer) + offset)),
	);
}

// Package generated values into the same quiz shape used by fixed questions.
function makeGeneratedQuestion(trickId, prompt, equation, answer, explanation, distractors) {
	const options = shuffle([...new Set([String(answer), ...distractors])]).slice(0, 4);
	return question(`generated-${trickId}-${Date.now()}-${Math.random()}`, trickId, prompt, equation, options, String(answer), explanation, "fresh");
}

// Pick a different trick when the puzzle room requests another question.
function randomQuestion(excludeId = "") {
	const trickIds = Object.values(subjects)
		.flatMap((subject) => subject.tricks)
		.map((trick) => trick.id)
		.filter((id) => id !== excludeId);
	return generatedQuestion(trickIds[randomInt(0, trickIds.length - 1)] || "add-left-right");
}

// Render the public landing screen before the learner enters the workspace.
function landingView() {
	return `<main class="landing">
	<nav class="landing-nav">
	${brand()}
	<button class="outline-button btn-press" data-action="routine">${state.routine ? "Hide routine" : `${icon("▤")} See a 10-minute routine`}</button>
	</nav>
	${state.routine ? `<div class="routine"><strong>${icon("◷")} A tiny routine that sticks</strong><br><span class="small-note">4 min to learn a trick, 3 min to try it, 3 min to play with it. Stop while it still feels good.</span></div>` : ""}
	<section class="hero">
	<div>
		<div class="eyebrow">${icon("✦")} Your friendly pocket practice space</div>
		<h1 class="display">Think in <span>shortcuts.</span></h1>
		<p class="hero-copy">Trick-Ninza turns fast math methods into small, friendly moves you can actually remember. Start with addition, then make subtraction yours.</p>
		<div class="hero-actions">
		<a class="primary-button btn-press" href="addition.html" data-action="start">Get started ${icon("→")}</a>
		<span class="small-note">Give it a shot, no account needed.</span>
		</div>
	</div>
	<div class="hero-card-shell">
		<span class="sticker">less memorizing</span>
		<div class="hero-card">
		<div class="hero-card-top">
			<div><p class="hero-card-label">Today's warm-up</p><h2 class="display">One small shift</h2></div>
			<span class="wand">${icon("✣")}</span>
		</div>
		<div class="hero-example">
			<p>Instead of adding every digit in a line, place the numbers where your eyes have to less harmonize.</p>
			${equationStack(true)}
		</div>
		<a class="warmup btn-press" href="addition.html" data-action="start">Try this warm-up ${icon("›")}</a>
		</div>
	</div>
	</section>
	<section class="feature-row">
	<div class="feature"><span class="feature-icon">${icon("♧")}</span><div><p class="feature-title">Understand first</p><p class="feature-copy">Every trick starts with the why.</p></div></div>
	<div class="feature"><span class="feature-icon">${icon("▱")}</span><div><p class="feature-title">Build in layers</p><p class="feature-copy">One move, one example, one win.</p></div></div>
	<div class="feature"><span class="feature-icon">${icon("⌁")}</span><div><p class="feature-title">Practice lightly</p><p class="feature-copy">Puzzles that feel like play, not pressure.</p></div></div>
	</section>
</main>`;
}

// Render the reusable horizontal-versus-stacked equation comparison.
function equationStack(onDark = false, subject = "addition") {
	const operation = subject === "subtraction" ? "-" : "+";
	const answer = subject === "subtraction" ? "11" : "25";
	return `<div class="equation-stack">
	<div><p class="equation-label">horizontal</p><div class="equation-box">18 ${operation} 7 = ${answer}</div></div>
	<strong aria-hidden="true">→</strong>
	<div><p class="equation-label">stack it</p><div class="equation-box stacked">18<br>${operation} 7<br>──<br>${answer}</div></div>
</div>`;
}

// Render answer choices and preserve the selected result for a quiz item.
function quizCard(item, anotherLabel = "Another question", puzzle = false) {
	const picked = state.answers[item.id];
	return `<div class="quiz-card" data-quiz="${esc(item.id)}">
	<div class="quiz-meta"><span class="difficulty">${esc(item.difficulty)}</span><span>Try it without writing first</span></div>
	<p class="quiz-prompt">${esc(item.prompt)}<span class="quiz-equation">${esc(item.equation)} = ?</span></p>
	<div class="choices">${item.choices
		.map((choice) => {
			const className = picked
				? `${choice === item.answer ? "correct" : choice === picked ? "wrong" : ""} ${choice === picked ? "selected" : ""}`.trim()
				: "";
			return `<button class="choice ${className}" data-action="answer" data-question="${esc(item.id)}" data-choice="${esc(choice)}">${esc(choice)}</button>`;
		})
		.join("")}</div>
	${picked ? `<p class="feedback">${picked === item.answer ? icon("✓") + ` Nice. ${esc(item.explanation)}` : icon("↻") + " Almost. Look at the trick label and try the move again."}</p>` : ""}
	<button class="another" data-action="${puzzle ? "another-puzzle" : "another-trick"}" data-question="${esc(item.id)}">${icon("↻")} ${esc(anotherLabel)}</button>
</div>`;
}

// Render the currently selected learn, video, or quiz panel inside a trick card.
function actionPanel(trick) {
	if (!state.action || state.activeTrick !== trick.id) return "";
	const action = state.action;
	let body = "";
	if (action === "learn") {
		body = `<div class="steps">${trick.steps.map((step, index) => `<div class="step"><span class="step-number">${index + 1}</span><p>${esc(step)}</p></div>`).join("")}</div>`;
	} else if (action === "video") {
		body = `<div class="video-panel"><button class="play btn-press" data-action="play-video" aria-label="Play video overview">▶</button><p>Watch the 45-second overview</p><small>A calm walkthrough is ready when you are.</small></div>`;
	} else {
		const questions = questionsForTrick(trick.id);
		const index = state.trickQuestionIndex[trick.id] || 0;
		body = questions[index] ? quizCard(questions[index]) : `<p class="small-note">This trick is waiting for its first puzzle.</p>`;
	}
	return `<div class="action-panel" data-panel="${esc(action)}">
	<div class="panel-head"><div><p class="panel-kicker">${action === "learn" ? "Step-by-step" : action === "video" ? "Video overview" : "Quick puzzle"}</p><h3 class="panel-title">${esc(trick.title)}</h3></div><button class="close" data-action="close-action" aria-label="Close panel">×</button></div>
	${body}
</div>`;
}

// Render one expandable trick row and its optional detail content.
function trickRow(trick) {
	const isExpanded = state.expanded === trick.id;
	const iconClass = trick.tint === "coral" ? "coral" : trick.tint === "blue" ? "blue" : "";
	const symbol = trick.tint === "coral" ? "ϟ" : trick.tint === "blue" ? "↗" : "+";
	return `<article class="trick-row ${isExpanded ? "expanded" : ""}">
	<button class="trick-toggle" data-action="expand" data-trick="${esc(trick.id)}" aria-expanded="${isExpanded}">
	<span class="trick-icon ${iconClass}">${symbol}</span>
	<span class="trick-main"><span class="trick-title-line"><span class="trick-title">${esc(trick.title)}</span><span class="tag">${esc(trick.label)}</span></span><span class="trick-duration">${icon("◷")} ${esc(trick.duration)}</span></span>
	<span class="chevron">⌄</span>
	</button>
	${
		isExpanded
			? `<div class="trick-detail ${state.revealTrick === trick.id ? "revealing" : ""}">
	<p class="trick-description">${esc(trick.description)}</p>
	<div class="formula">${esc(trick.formula)}</div>
	<div class="action-buttons">
		<button class="action-button primary btn-press" data-action="open-action" data-trick="${esc(trick.id)}" data-panel-action="learn">${icon("▤")} Learn step-by-step</button>
		<button class="action-button btn-press" data-action="open-action" data-trick="${esc(trick.id)}" data-panel-action="video">${icon("▶")} Video overview</button>
		<button class="action-button btn-press" data-action="open-action" data-trick="${esc(trick.id)}" data-panel-action="quiz">${icon("◇")} Quiz / puzzle</button>
	</div>
	${actionPanel(trick)}
	</div>`
			: ""
	}
</article>`;
}

// Render the subject-aware nudge card shown beside the trick list.
function hintHelper() {
	const nudges = nudgeSets[state.subject] || nudgeSets.addition;
	const nudge = nudges[state.nudgeIndex % nudges.length];
	return `<aside class="surface hint">
	<div class="hint-head"><span class="hint-bulb">${icon("♧")}</span><div><p class="hint-title">Need a nudge?</p><p class="hint-sub">Hints, not answers.</p></div></div>
	<div class="hint-body">
	<div class="hint-label"><span data-nudge="label">${nudge.label}</span><span>Try, then refine</span></div>
	<div class="hint-equation">${nudge.equation}</div>
	${state.hintLevel ? `<p class="hint-copy page-in">${nudge.hints[state.hintLevel - 1]}</p>` : ""}
	<button class="hint-button" data-action="hint">${state.hintLevel === nudge.hints.length ? "↻ Start hint again" : state.hintLevel === 0 ? "💡 Show a hint" : "💡 One more hint"}</button>
	</div>
</aside>`;
}

// Update the nudge in place so the rest of the workspace keeps its scroll position.
function rotateNudge() {
	const nudges = nudgeSets[state.subject] || nudgeSets.addition;
	state.nudgeIndex = (state.nudgeIndex + 1) % nudges.length;
	state.hintLevel = 0;
	const hint = app.querySelector(".hint");
	if (!hint) return;
	const nudge = nudges[state.nudgeIndex];
	hint.querySelector('[data-nudge="label"]').textContent = nudge.label;
	hint.querySelector(".hint-equation").textContent = nudge.equation;
	hint.querySelector('[data-action="hint"]').textContent = "💡 Show a hint";
}

// Render the puzzle room around one generated question.
function puzzleRoom() {
	if (!state.puzzleQuestion) state.puzzleQuestion = randomQuestion();
	const item = state.puzzleQuestion;
	const trick = trickById(item.trickId);
	return `<section class="puzzle-room">
	<div class="puzzle-top"><div><p class="section-kicker">${icon("◇")} Random puzzle room</p><h1 class="display">Keep your<br><span class="accent">thinking nimble.</span></h1><p class="puzzle-copy">Every round checks a trick rule, creates fresh numbers, and shuffles four possible answers.</p></div><div class="round-pills"><span class="round-pill">Round ${state.round}</span><span class="round-pill secondary">${esc(item.difficulty)}</span></div></div>
	<div class="puzzle-card"><div class="puzzle-card-top"><div><p class="puzzle-label">From the trick shelf</p><p class="puzzle-trick">${esc(trick ? trick.title : "")}</p></div><span class="puzzle-icon">${icon("⌁")}</span></div>${quizCard(item, "Another random puzzle", true)}</div>
</section>`;
}

// Render the selected subject's trick shelf and supporting cards.
function learnView() {
	const subject = currentSubject();
	// Check if subject exists before accessing its properties
	if (!subject) {
		return `<div class="error">Subject not found.</div>`;
	}

	let tricks = subject.tricks;
	const comingSoon = state.subject === "multiplication";
	return `<div class="learn-grid">
	<section>
	<div class="section-head">
		<div><p class="section-kicker">${icon("♙")} ${esc(subject.kicker)}</p><h1 class="display">Pick a move.<br><span class="accent">Make it yours.</span></h1><p class="section-copy">${esc(subject.copy)}</p></div>
		<label class="select-wrap">${icon("+-")}<select data-action="subject" aria-label="Choose learning section"><option value="addition" ${state.subject === "addition" ? "selected" : ""}>Addition</option><option value="subtraction" ${state.subject === "subtraction" ? "selected" : ""}>Subtraction</option><option value="multiplication" ${state.subject === "multiplication" ? "selected" : ""}>Multiplication · soon</option></select></label>
	</div>
	${comingSoon ? `<div class="surface coming-soon"><div class="coming-icon">${icon("▱")}</div><h2 class="display">This shelf is still being stocked.</h2><p>For now, make addition and subtraction feel easy. Multiplication will join your nook soon.</p><button class="primary-button btn-press" data-action="return-subject">Continue with ${esc(subjects[state.previousSubject]?.label || "addition")}</button></div>` : `<div class="tricks-list"><div class="list-meta"><span>Choose your first trick</span><span class="mono">${tricks.length} tricks</span></div>${tricks.map(trickRow).join("")}</div>`}
	<div class="surface visual-card"><p class="section-kicker">See the shape of it</p><h2 class="display">${state.subject === "subtraction" ? "A difference can change outfits." : "A sum can change outfits."}</h2><p>Horizontal is familiar. Stacking lines up place values so your eyes do less work.</p>${equationStack(false, state.subject)}</div>
	</section>
	<div class="side-stack">${hintHelper()}<div class="surface next-win"><div class="next-top"><span class="next-icon">${icon("☷")}</span><div><p class="next-title">Your next tiny win</p><p class="next-sub">A 4-minute first pass</p></div></div><div class="next-progress"><div class="progress"><span></span></div><span>18%</span></div><button class="continue" data-action="continue">${state.subject === "subtraction" ? "Continue base subtraction" : "Continue left-to-right addition"} ${icon("↗")}</button></div></div>
</div>`;
}

// Render the persistent workspace shell, navigation, content, and footer.
function workspaceView() {
	return `<div class="workspace">
	<aside class="sidebar">${brand(true)}<p class="side-label">Your practice</p><nav class="side-nav">
	<button class="${state.view === "learn" ? "active" : ""}" data-action="learn">${icon("▤")} Learn tricks ${state.view === "learn" ? '<span class="count">●</span>' : ""}</button>
	<button class="${state.view === "puzzles" ? "active" : ""}" data-action="puzzles">${icon("◇")} Puzzles</button>
	</nav><div class="streak"><span class="accent">${icon("🏆")}</span><p class="streak-title">Tiny streak</p><p class="streak-copy">Two warm-ups this week. Keep it light.</p><div class="progress" style="margin-top:12px"><span></span></div></div></aside>
	<div class="workspace-main">
	<header class="topbar"><div class="mobile-brand">${brand(true)}<button class="mobile-menu-button" data-action="mobile-menu" aria-label="Open menu">${state.mobileNav ? "×" : "☰"}</button></div><div class="desktop-heading"><p class="top-kicker">A good day to try</p><p class="top-title">${state.view === "puzzles" ? "Your puzzle room" : "Your learning nook"}</p></div><div class="top-actions"><span class="status-pill">Practice</span><a class="welcome-button" href="index.html" data-action="exit">Welcome</a></div>${state.mobileNav ? `<nav class="mobile-nav"><button class="${state.view === "learn" ? "active" : ""}" data-action="learn">${icon("▤")} Learn tricks</button><button class="${state.view === "puzzles" ? "active" : ""}" data-action="puzzles">${icon("◇")} Puzzles</button></nav>` : ""}</header>
	<main class="workspace-content">
	${state.view === "puzzles" ? puzzleRoom() : learnView()}
	<footer class="workspace-footer"><span>${icon("✦")} Made for curious minds</span><span class="mono">practice / pause / repeat</span></footer>
	</main>
	</div>
</div>`;
}

// Rebuild the view while restoring the learner's current scroll position.
function render() {
	const previousContent = app.querySelector(".workspace-content");
	const previousScrollTop = previousContent?.scrollTop;
	const revealTrick = state.revealTrick;
	app.innerHTML = `<div class="grain app-shell">${state.screen === "landing" ? landingView() : workspaceView()}</div>`;
	state.revealTrick = null;
	const shell = app.querySelector(".app-shell");
	if (shell) {
		shell.classList.remove("page-leaving");
	}
	const nextContent = app.querySelector(".workspace-content");
	if (nextContent && previousScrollTop !== undefined) {
		nextContent.scrollTop = previousScrollTop;
	}
	if (revealTrick) {
		const toggle = app.querySelector(`[data-trick="${revealTrick}"]`);
		const detail = toggle?.nextElementSibling;
		if (detail) {
			window.requestAnimationFrame(() => detail.classList.remove("revealing"));
		}
	}
}

// Replace only the action panel when a trick action is opened.
function openAction(trickId, action) {
	state.expanded = trickId;
	state.activeTrick = trickId;
	state.action = action;
	const trick = trickById(trickId);
	const detail = app.querySelector(`[data-trick="${trickId}"]`)?.nextElementSibling;
	if (!trick || !detail) {
		render();
		return;
	}
	const currentPanel = detail.querySelector(".action-panel");
	if (currentPanel) {
		currentPanel.outerHTML = actionPanel(trick);
	} else {
		detail.insertAdjacentHTML("beforeend", actionPanel(trick));
	}
}

// Delegate all button interactions from the stable app mount point.
app.addEventListener("click", (event) => {
	const target = event.target.closest("[data-action]");
	if (!target) return;
	const action = target.dataset.action;
	if (action === "start") {
		event.preventDefault();
		if (pageName === "home") {
			navigateToPage("addition.html");
			return;
		}
		state.screen = "workspace";
		render();
	} else if (action === "routine") {
		state.routine = !state.routine;
		const routineButton = target;
		const landingNav = routineButton.closest(".landing-nav");
		const currentRoutine = landingNav?.nextElementSibling;
		if (state.routine) {
			routineButton.innerHTML = "Hide routine";
			landingNav?.insertAdjacentHTML(
				"afterend",
				`<div class="routine"><strong>${icon("◷")} A tiny routine that sticks</strong><br><span class="small-note">4 min to learn a trick, 3 min to try it, 3 min to play with it. Stop while it still feels good.</span></div>`,
			);
		} else {
			routineButton.innerHTML = `${icon("▤")} See a 10-minute routine`;
			if (currentRoutine?.classList.contains("routine")) {
				currentRoutine.classList.add("routine-closing");
				currentRoutine.addEventListener("animationend", () => currentRoutine.remove(), { once: true });
			}
		}
	} else if (action === "exit") {
		event.preventDefault();
		if (pageName !== "home") {
			navigateToPage("index.html");
			return;
		}
		state.screen = "landing";
		state.mobileNav = false;
		render();
		window.scrollTo(0, 0);
	} else if (action === "expand") {
		const isClosing = state.expanded === target.dataset.trick;
		state.expanded = isClosing ? null : target.dataset.trick;
		state.revealTrick = isClosing ? null : target.dataset.trick;
		state.activeTrick = null;
		state.action = null;
		render();
	} else if (action === "open-action") {
		openAction(target.dataset.trick, target.dataset.panelAction);
	} else if (action === "close-action") {
		state.action = null;
		state.activeTrick = null;
		const panel = target.closest(".action-panel");
		if (panel) {
			panel.classList.add("closing");
			window.setTimeout(() => panel.remove(), 280);
		} else {
			render();
		}
	} else if (action === "answer") {
		state.answers[target.dataset.question] = target.dataset.choice;
		const quiz = target.closest(".quiz-card");
		const item =
			state.view === "puzzles"
				? state.puzzleQuestion
				: questionsForTrick(state.activeTrick).find((questionItem) => questionItem.id === target.dataset.question);
		if (quiz && item) {
			quiz.outerHTML = quizCard(item, state.view === "puzzles" ? "Another random puzzle" : "Another question", state.view === "puzzles");
		} else {
			render();
		}
	} else if (action === "another-trick") {
		const trick = trickById(state.activeTrick);
		const questions = trick ? questionsForTrick(trick.id) : [];
		if (questions.length > 1) {
			const current = state.trickQuestionIndex[trick.id] || 0;
			state.trickQuestionIndex[trick.id] = (current + 1 + Math.floor(Math.random() * (questions.length - 1))) % questions.length;
		}
		const quiz = target.closest(".quiz-card");
		const nextQuestion = questions[state.trickQuestionIndex[trick.id] || 0];
		if (quiz && nextQuestion) {
			quiz.outerHTML = quizCard(nextQuestion);
		} else {
			render();
		}
	} else if (action === "another-puzzle") {
		state.puzzleQuestion = randomQuestion(target.dataset.question);
		state.round += 1;
		render();
	} else if (action === "puzzles") {
		state.view = "puzzles";
		state.mobileNav = false;
		render();
	} else if (action === "learn") {
		state.view = "learn";
		state.mobileNav = false;
		render();
	} else if (action === "mobile-menu") {
		state.mobileNav = !state.mobileNav;
		render();
	} else if (action === "hint") {
		const nudges = nudgeSets[state.subject] || nudgeSets.addition;
		const hints = nudges[state.nudgeIndex % nudges.length].hints;
		state.hintLevel = state.hintLevel >= hints.length ? 0 : state.hintLevel + 1;
		const hintBody = target.closest(".hint-body");
		if (hintBody) {
			hintBody.querySelector(".hint-copy")?.remove();
			if (state.hintLevel) {
				hintBody
					.querySelector(".hint-equation")
					.insertAdjacentHTML("afterend", `<p class="hint-copy page-in">${hints[state.hintLevel - 1]}</p>`);
			}
			target.textContent =
				state.hintLevel === hints.length ? "↻ Start hint again" : state.hintLevel === 0 ? "💡 Show a hint" : "💡 One more hint";
		} else {
			render();
		}
	} else if (action === "continue") {
		state.view = "learn";
		state.expanded = state.subject === "subtraction" ? "sub-base" : "add-left-right";
		state.activeTrick = state.expanded;
		state.action = "learn";
		render();
		window.scrollTo({ top: 260, behavior: "smooth" });
	} else if (action === "return-subject") {
		state.subject = state.previousSubject;
		state.expanded = state.subject === "subtraction" ? "sub-base" : "add-left-right";
		render();
	} else if (action === "play-video") {
		target.textContent = "✓";
		target.setAttribute("aria-label", "Video overview ready");
	}
});

// Handle subject selection separately because it can navigate to another HTML page.
app.addEventListener("change", (event) => {
	if (event.target.matches('[data-action="subject"]')) {
		const nextSubject = event.target.value;
		if (nextSubject === "subtraction") {
			navigateToPage("subtraction.html");
			return;
		}
		if (nextSubject === "multiplication") {
			state.previousSubject = state.subject;
			state.subject = "multiplication";
			state.expanded = null;
			state.action = null;
			render();
			return;
		}
		navigateToPage("addition.html");
	}
});

// Render immediately, then keep the nudge card fresh while the page is open.
injectStructuredData();
render();
window.setInterval(rotateNudge, 60_000);
