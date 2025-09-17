// =====================
// 移动端：侧栏开合逻辑
// =====================
document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('menuBtn');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');
    if (!menuBtn || !sidebar || !overlay) {
        return;
    }

    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        document.body.classList.add('no-scroll');
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }

    menuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    overlay.addEventListener('click', closeSidebar);

    // 视口扩大到桌面端时，确保关闭抽屉
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });
});
// 力扣题目数据
const problems = [
    {
        id: 1,
        number: "0001",
        title: "两数之和",
        difficulty: "easy",
        description: "给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。\n你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。\n你可以按任意顺序返回答案。",
        example: "示例 1：\n输入：nums = [2,7,11,15], target = 9\n输出：[0,1]\n解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。\n示例 2：\n输入：nums = [3,2,4], target = 6\n输出：[1,2]\n示例 3：\n输入：nums = [3,3], target = 6\n输出：[0,1]",
        solutions: [
            {
                code: `func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, x := range nums {
		y := target - x
		if _, ok := m[y]; ok {
			return []int{m[y], i}
		}
		m[x] = i
	}
	return nil
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 2,
        number: "0002",
        title: "两数相加",
        difficulty: "medium",
        description: "给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。\n请你将两个数相加，并以相同形式返回一个表示和的链表。\n你可以假设除了数字0之外，这两个数都不会以0开头。",
        example: "示例 1：\n输入：l1 = [2,4,3], l2 = [5,6,4]\n输出：[7,0,8]\n解释：342 + 465 = 807\n示例 2：\n输入：l1 = [0], l2 = [0]\n输出：[0]\n示例 3：\n输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n输出：[8,9,9,9,0,0,0,1]",
        solutions: [
            {
                code:`/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    head := &ListNode{}
    t, cur := 0, head
    for l1 != nil || l2 != nil || t != 0 {
        if l1 != nil {
            t += l1.Val
            l1 = l1.Next
        }
        if l2 != nil {
            t += l2.Val
            l2 = l2.Next
        }
        cur.Next = &ListNode{Val: t % 10}
        cur = cur.Next
        t /= 10
    }
    return head.Next
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 3,
        number: "0003",
        title: "无重复字符的最长子串",
        difficulty: "medium",
        description: "给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。",
        example: "示例 1：\n输入: s = \"abcabcbb\"\n输出: 3\n解释: 因为无重复字符的最长子串是 \"abc\"，所以其长度为 3\n示例 2：\n输入: s = \"bbbbb\"\n输出: 1\n解释: 因为无重复字符的最长子串是 \"b\"，所以其长度为 1\n示例 3：\n输入: s = \"pwwkew\"\n输出: 3\n解释: 因为无重复字符的最长子串是 \"wke\"，所以其长度为 3",
        solutions: [
            {
                name: "解法一",
                code: `func lengthOfLongestSubstring(s string) (res int) {
    a := make(map[byte]int)
    for i, j := 0, 0; i < len(s); i++ {
        a[s[i]]++
        for a[s[i]] > 1 {
            a[s[j]]--
            j++
        }
        res = max(res, i - j + 1)
    }
    return res
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            },
            {
                name: "解法二",
                code: `func lengthOfLongestSubstring(s string) (res int) {
    a, l := make(map[byte]int), 0
    for i := 0; i < len(s); i++ {
        l = max(l, a[s[i]])
        res = max(res, i - l + 1)
        a[s[i]] = i + 1
    }
    return res
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 4,
        number: "0004",
        title: "寻找两个正序数组的中位数",
        difficulty: "hard",
        description: "给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。\n算法的时间复杂度应该为 O(log (m+n))。",
        example: "示例 1：\n输入：nums1 = [1,3], nums2 = [2]\n输出：2.00000\n解释：合并数组 = [1,2,3] ，中位数 2\n示例 2：\n输入：nums1 = [1,2], nums2 = [3,4]\n输出：2.50000\n解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5",
        solutions: [
            {
                code: `func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    n := len(nums1) + len(nums2)
    r := find(nums1, nums2, 0, 0, n / 2 + 1)
    if n % 2 == 1 {
        return float64(r)
    }
    return float64(find(nums1, nums2, 0, 0, n / 2) + r) / 2
}

func find(nums1, nums2 []int, i, j, k int) int {
    n1, n2 := len(nums1), len(nums2)
    if n1 - i > n2 - j {
        return find(nums2, nums1, j, i, k)
    }
    if n1 == i {
        return nums2[j + k - 1]
    }
    if k == 1 {
        return min(nums1[i], nums2[j])
    }
    si, sj := min(n1, i + k / 2), j + k - k / 2
    if nums1[si - 1] > nums2[sj - 1] {
        return find(nums1, nums2, i, sj, k / 2)
    }
    return find(nums1, nums2, si, j, k - (si - i))
}`,
                timeComplexity: "O(log(m+n))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 5,
        number: "0005",
        title: "最长回文子串",
        difficulty: "medium",
        description: "给你一个字符串 s，找到 s 中最长的回文子串。",
        example: "示例 1：\n输入：s = \"babad\"\n输出：\"bab\"\n解释：\"aba\" 同样是符合题意的答案\n示例 2：\n输入：s = \"cbbd\"\n输出：\"bb\"",
        solutions: [
            {
                name: "解法一",
                code: `func longestPalindrome(s string) (a string) {
    n := len(s)
    for i := 0; i < n; i++ {
        l, r := i - 1, i + 1
        for l >= 0 && r < n && s[l] == s[r] {
            l--
            r++
        }
        if len(a) < r - l - 1 {
            a = s[l + 1 : r]
        }
        l, r = i, i + 1
        for l >= 0 && r < n && s[l] == s[r] {
            l--
            r++
        }
        if len(a) < r - l - 1 {
            a = s[l + 1 : r]
        }
    }
    return
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)"
            },
            {
                name: "解法二：Manacher",
                code: `func longestPalindrome(s string) string {
    builder := strings.Builder{}

    builder.WriteString("$#")
    for _, c := range s {
        builder.WriteRune(c)
        builder.WriteByte('#')
    }
    builder.WriteByte('^')
    a := builder.String()

    n, mr, mid := len(a), 0, 0
    p := make([]int, n)
    for i := 1; i < n - 1; i++ {
        if i < mr {
            p[i] = min(p[mid * 2 - i], mr - i)
        } else {
            p[i] = 1
        }
        for a[i - p[i]] == a[i + p[i]] {
            p[i]++
        }
        if i + p[i] > mr {
            mr, mid = i + p[i], i
        }
    }
    m, k := 0, 0
    for i := 0; i < n; i++ {
        if p[i] > m {
            m, k = p[i], i
        }
    }
    k = (k - m) / 2
    return s[k : k + m - 1]
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 6,
        number: "0006",
        title: "Z字形变换",
        difficulty: "medium",
        description: "将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。\n比如输入字符串为 \"PAYPALISHIRING\" 行数为 3 时，排列如下：\nP   A   H   N\nA P L S I I G\nY   I   R\n之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：\"PAHNAPLSIIGYIR\"。",
        example: "示例 1：\n输入：s = \"PAYPALISHIRING\", numRows = 3\n输出：\"PAHNAPLSIIGYIR\"\n示例 2：\n输入：s = \"PAYPALISHIRING\", numRows = 4\n输出：\"PINALSIGYAHRPI\"\n示例 3：\n输入：s = \"A\", numRows = 1\n输出：\"A\"",
        solutions: [
            {
                code: `func convert(s string, n int) string {
    if n == 1 {
        return s
    }
    m := n * 2 - 2
    builder := strings.Builder{}
    for i := 0; i < n; i++ {
        if i == 0 || i == n - 1 {
            for j := i; j < len(s); j += m {
                builder.WriteByte(s[j])
            }
        } else {
            for j, k := i, m - i; j < len(s); j, k = j + m, k + m {
                builder.WriteByte(s[j])
                if k < len(s) {
                    builder.WriteByte(s[k])
                }
            }
        }
    }
    return builder.String()
}`,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 7,
        number: "0007",
        title: "整数反转",
        difficulty: "easy",
        description: "给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。\n如果反转后整数超过 32 位的有符号整数的范围 [−2³¹, 2³¹ − 1] ，就返回 0。\n假设环境不允许存储 64 位整数（有符号或无符号）。",
        example: "示例 1：\n输入：x = 123\n输出：321\n示例 2：\n输入：x = -123\n输出：-321\n示例 3：\n输入：x = 120\n输出：21",
        solutions: [
            {
                code: `func reverse(x int) int {
    r := 0
    for x != 0 {
        if r > 0 && r > ((1 << 31 - 1) - x % 10) / 10 {
            return 0
        }
        if r < 0 && r < (-(1 << 31) - x % 10) / 10 {
            return 0
        }
        r = r * 10 + x % 10
        x /= 10
    }
    return r
}`,
        timeComplexity: "O(log|x|)",
        spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 8,
        number: "0008",
        title: "字符串转换整数 (atoi)",
        difficulty: "medium",
        description: "请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。\n函数 myAtoi(string s) 的算法如下：\n1. 读入字符串并丢弃无用的前导空格\n2. 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。\n3. 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。\n4. 将前面步骤读入的这些数字转换为整数（即 \"123\" -> 123， \"0032\" -> 32）。如果没有读入数字，则整数为 0。必要时更改符号（从步骤 2 开始）。\n5. 如果整数数超过 32 位有符号整数范围 [−2³¹, 2³¹ − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −2³¹ 的整数应该被固定为 −2³¹ ，大于 2³¹ − 1 的整数应该被固定为 2³¹ − 1。\n6. 返回整数作为最终结果。",
        example: "示例 1：\n输入：s = \"42\"\n输出：42\n示例 2：\n输入：s = \"   -42\"\n输出：-42\n示例 3：\n输入：s = \"4193 with words\"\n输出：4193",
        solutions: [
            {
                code: `func myAtoi(s string) (res int) {
    k, n := 0, len(s)
    for k < n && s[k] == ' ' {
        k++
    }
    if k == n {
        return 0
    }

    minus := 1
    if s[k] == '-' {
        minus = -1
        k++
    } else if s[k] == '+' {
        k++
    }

    max, min := 1 << 31 - 1, -(1 << 31)
    for k < n && s[k] >= '0' && s[k] <= '9' {
        x := int(s[k] - '0')
        if minus > 0 && res > (max - x) / 10 {
            return max
        }
        if minus < 0 && -res < (min + x) / 10 {
            return min
        }
        if -res * 10 - x == min {
            return min
        }
        res = res * 10 + x
        k++
    }
    res *= minus

    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 9,
        number: "0009",
        title: "回文数",
        difficulty: "easy",
        description: "给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false。\n回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。\n例如，121 是回文，而 123 不是。",
        example: "示例 1：\n输入：x = 121\n输出：true\n示例 2：\n输入：x = -121\n输出：false\n解释：从左向右读, 为 -121。 从右向左读, 为 121-。因此它不是一个回文数\n示例 3：\n输入：x = 10\n输出：false\n解释：从右向左读, 为 01。因此它不是一个回文数",
        solutions: [
            {
                name: "解法一",
                code: `func isPalindrome(x int) bool {
    if (x < 0 || x > 0 && x % 10 == 0) {
        return false
    }
    s := strconv.Itoa(x)
    for i, j := 0, len(s) - 1; i < j; i, j = i + 1, j - 1 {
        if s[i] != s[j] {
            return false
        }
    }
    return true
}`,
                timeComplexity: "O(logx)",
                spaceComplexity: "O(1)"
            },
            {
                name: "解法二",
                code: `func isPalindrome(x int) bool {
    if (x < 0 || x > 0 && x % 10 == 0) {
        return false
    }
    y, res := x, 0
    for x != 0 {
        res = res * 10 + x % 10
        x /= 10
    }
    return res == y
}`,
                timeComplexity: "O(logx)",
                spaceComplexity: "O(1)"
            },
                            {
                name: "解法三",
                code: `func isPalindrome(x int) bool {
    if (x < 0 || x > 0 && x % 10 == 0) {
        return false
    }
    s := 0
    for s <= x {
        s = s * 10 + x % 10
        if s == x || s == x / 10 {
            return true
        }
        x /= 10
    }
    return false
}`,
                timeComplexity: "O(logx)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 10,
        number: "0010",
        title: "正则表达式匹配",
        difficulty: "hard",
        description: "给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。\n'.' 匹配任意单个字符\n'*' 匹配零个或多个前面的那一个元素\n所谓匹配，是要涵盖整个字符串 s 的，而不是部分字符串。",
        example: "示例 1：\n输入：s = \"aa\", p = \"a\"\n输出：false\n解释：\"a\" 无法匹配 \"aa\" 整个字符串\n示例 2：\n输入：s = \"aa\", p = \"a*\"\n输出：true\n解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 \"aa\" 可被视为 'a' 重复了一次\n示例 3：\n输入：s = \"ab\", p = \".*\"\n输出：true\n解释：\".*\" 表示可匹配零个或多个（'*'）任意字符（'.'）",
        solutions: [
            {
                code: `func isMatch(s string, p string) bool {
    n, m := len(s), len(p)
    s, p = " " + s, " " + p
    f := make([][]bool, n + 1)
    for i := range f {
        f[i] = make([]bool, m + 1)
    }
    f[0][0] = true
    for i := 0; i <= n; i++ {
        for j := 1; j <= m; j++ {
            if j + 1 <= m && p[j + 1] == '*' {
                continue
            }
            if i != 0 && p[j] != '*' {
                f[i][j] = f[i - 1][j - 1] && (s[i] == p[j] || p[j] == '.')
            } else if p[j] == '*' {
                f[i][j] = f[i][j - 2] || i != 0 && f[i - 1][j] && (s[i] == p[j - 1] || p[j - 1] == '.')
            }
        }
    }
    return f[n][m]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            }
        ]
    },
    {
        id: 11,
        number: "0011",
        title: "盛最多水的容器",
        difficulty: "medium",
        description: "给定一个长度为 n 的整数数组 height。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i])。\n找出其中的两条线，使得它们与 x 轴构成的容器可以容纳最多的水。\n返回容器可以储存的最大水量。\n说明：你不能倾斜容器。",
        example: "示例 1：\n输入：[1,8,6,2,5,4,8,3,7]\n输出：49\n解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49\n示例 2：\n输入：height = [1,1]\n输出：1",
        solutions: [
            {
                code: `func maxArea(height []int) (res int) {
    for i, j := 0, len(height) - 1; i < j; {
        res = max(res, min(height[i], height[j]) * (j - i))
        if height[i] > height[j] {
            j--
        } else {
            i++
        }
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 12,
        number: "0012",
        title: "整数转罗马数字",
        difficulty: "medium",
        description: "罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。\n字符          数值\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。\n通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：\nI 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。\nX 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。\nC 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。\n给你一个整数，将其转为罗马数字。",
        example: "示例 1：\n输入: num = 3\n输出: \"III\"\n示例 2：\n输入: num = 4\n输出: \"IV\"\n示例 3：\n输入: num = 9\n输出: \"IX\"\n示例 4：\n输入: num = 58\n输出: \"LVIII\"\n解释: L = 50, V= 5, III = 3\n示例 5：\n输入: num = 1994\n输出: \"MCMXCIV\"\n解释: M = 1000, CM = 900, XC = 90, IV = 4",
        solutions: [
            {
                code: `func intToRoman(num int) (res string) {
    values := []int{
        1000,
        900, 500, 400, 100,
        90, 50, 40, 10,
        9, 5, 4, 1
    }
    reps := []string{
        "M",
        "CM", "D", "CD", "C",
        "XC", "L", "XL", "X",
        "IX", "V", "IV", "I"
    }

    for i := range values {
        for num >= values[i] {
            num -= values[i]
            res += reps[i]
        }
    }
    return
}`,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 13,
        number: "0013",
        title: "罗马数字转整数",
        difficulty: "easy",
        description: "罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。\n字符          数值\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。\n通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：\nI 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。\nX 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。\nC 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。\n给定一个罗马数字，将其转换成整数。",
        example: "示例 1：\n输入: s = \"III\"\n输出: 3\n示例 2：\n输入: s = \"IV\"\n输出: 4\n示例 3：\n输入: s = \"IX\"\n输出: 9\n示例 4：\n输入: s = \"LVIII\"\n输出: 58\n解释: L = 50, V= 5, III = 3\n示例 5：\n输入: s = \"MCMXCIV\"\n输出: 1994\n解释: M = 1000, CM = 900, XC = 90, IV = 4",
        solutions: [
            {
                code: `func romanToInt(s string) (res int) {
    h := map[byte]int{
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for i := range s {
        x := h[s[i]]
        if i + 1 < len(s) && x < h[s[i + 1]] {
            res -= x
        } else {
            res += x
        }
    }

    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 14,
        number: "0014",
        title: "最长公共前缀",
        difficulty: "easy",
        description: "编写一个函数来查找字符串数组中的最长公共前缀。\n如果不存在公共前缀，返回空字符串 \"\"。",
        example: "示例 1：\n输入：strs = [\"flower\",\"flow\",\"flight\"]\n输出：\"fl\"\n示例 2：\n输入：strs = [\"dog\",\"racecar\",\"car\"]\n输出：\"\"\n解释：输入不存在公共前缀",
        solutions: [
            {
                name: "解法一",
                code: `func longestCommonPrefix(strs []string) (res string) {
    for i := 0; i < len(strs[0]); i++ {
        c := strs[0][i]
        for _, str := range strs {
            if len(str) <= i || str[i] != c {
                return res
            }
        }
        res += string(c)
    }
    return
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(1)"
            },
                        {
                name: "解法二",
                code: `func longestCommonPrefix(strs []string) (res string) {
    sort.Strings(strs)
    for i := 0; i < min(len(strs[0]), len(strs[len(strs) - 1])); i++ {
        if (strs[0][i] == strs[len(strs) - 1][i]) {
            res += string(strs[0][i])
        } else {
            break
        }
    }
    return
}`,
                timeComplexity: "O(mnlogn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 15,
        number: "0015",
        title: "三数之和",
        difficulty: "medium",
        description: "给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。\n注意：答案中不可以包含重复的三元组。",
        example: "示例 1：\n输入：nums = [-1,0,1,2,-1,-4]\n输出：[[-1,-1,2],[-1,0,1]]\n示例 2：\n输入：nums = [0,1,1]\n输出：[]\n示例 3：\n输入：nums = [0,0,0]\n输出：[[0,0,0]]",
        solutions: [
            {
                code: `func threeSum(nums []int) (res [][]int) {
    sort.Ints(nums)
    for i, x := range nums {
        if i > 0 && x == nums[i - 1] {
            continue
        }
        for j, k := i + 1, len(nums) - 1; j < k; j++ {
            y := nums[j]
            if j > i + 1 && y == nums[j - 1] {
                continue
            }
            for j < k - 1 && x + y + nums[k] > 0 {
                k--
            }
            z := nums[k]
            if x + y + z == 0 {
                res = append(res, []int{x, y, z})
            }
        }
    }

    return
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 16,
        number: "0016",
        title: "最接近的三数之和",
        difficulty: "medium",
        description: "给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。\n返回这三个数的和。\n假定每组输入只存在恰好一个解。",
        example: "示例 1：\n输入：nums = [-1,2,1,-4], target = 1\n输出：2\n解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2)\n示例 2：\n输入：nums = [0,0,0], target = 1\n输出：0",
        solutions: [
            {
                name: "解法一",
                code: `func threeSumClosest(nums []int, target int) int {
    a, b := math.MaxInt, math.MaxInt
    sort.Ints(nums)
    for i, x := range nums {
        for j, k := i + 1, len(nums) - 1; j < k; j++ {
            y := nums[j]
            for k - 1 > j && x + y + nums[k - 1] >= target {
                k--
            }
            s := x + y + nums[k]
            if a > abs(s - target) {
                a, b = abs(s - target), s
            }
            if k - 1 > j {
                s = x + y + nums[k - 1]
                if a > target - s {
                    a, b = target - s, s
                }
            }
        }
    }
    return b
}

func abs(x int) int {
    if x >= 0 {
        return x
    }
    return -x
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)"
            },
            {
                name: "解法二",
                code: `func threeSumClosest(nums []int, target int) int {
    a, b := math.MaxInt, math.MaxInt
    sort.Ints(nums)
    for i, x := range nums {
        for j, k := i + 1, len(nums) - 1; j < k; j++ {
            y := nums[j]
            for j < k - 1 && x + y + nums[k - 1] >= target {
                k--
            }
            if x + y + nums[k] >= target {
                a = min(a, x + y + nums[k] - target)
            } else {
                b = min(b, target - x - y - nums[k])
            }
            if j < k - 1 {
                b = min(b, target - x - y - nums[k - 1])
            }
        }
    }

    if a < b {
        return target + a
    }
    return target - b
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 17,
        number: "0017",
        title: "电话号码的字母组合",
        difficulty: "medium",
        description: "给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。\n给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。\n2: abc\n3: def\n4: ghi\n5: jkl\n6: mno\n7: pqrs\n8: tuv\n9: wxyz",
        example: "示例 1：\n输入：digits = \"23\"\n输出：[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]\n示例 2：\n输入：digits = \"\"\n输出：[]\n示例 3：\n输入：digits = \"2\"\n输出：[\"a\",\"b\",\"c\"]",
        solutions: [
            {
                name: "解法一",
                code: `func letterCombinations(digits string) (res []string) {
    strs := [10]string{
        "", "", "abc", "def",
        "ghi", "jkl", "mno",
        "pqrs", "tuv", "wxyz",
    }
    if len(digits) == 0 {
        return res
    }

    var dfs func(digits string, u int, path string)
    dfs = func(digits string, u int, path string) {
        if u == len(digits) {
            res = append(res, path)
        } else {
            for _, c := range strs[int(digits[u] - '0')] {
                dfs(digits, u + 1, path + string(c))
            }
        }
    }

    dfs(digits, 0, "")

    return
}`,
                timeComplexity: "O(3ᵐ4ⁿ)",
                spaceComplexity: "O(m+n)"
            },
            {
                name: "解法二",
                code: `func letterCombinations(digits string) (res []string) {
    if len(digits) == 0 {
        return res
    }

    strs := [10]string{
        "", "", "abc", "def",
        "ghi", "jkl", "mno",
        "pqrs", "tuv", "wxyz",
    }
    for _, c := range strs[int(digits[0] - '0')] {
        res = append(res, string(c))
    }
    for i := 1; i < len(digits); i++ {
        n := len(res)
        for j := 0; j < n; j++ {
            for _, c := range strs[int(digits[i] - '0')] {
                res = append(res, res[j] + string(c))
            }
        }
        res = res[n:]
    }
    return
}`,
                timeComplexity: "O(3ᵐ4ⁿ)",
                spaceComplexity: "O(m+n)"
            },
            {
                name: "解法三",
                code: `func letterCombinations(digits string) (res []string) {
    if len(digits) == 0 {
        return []string{}
    }

    strs := map[byte][]string{
        '2': []string{"a", "b", "c"},
        '3': []string{"d", "e", "f"},
        '4': []string{"g", "h", "i"},
        '5': []string{"j", "k", "l"},
        '6': []string{"m", "n", "o"},
        '7': []string{"p", "q", "r", "s"},
        '8': []string{"t", "u", "v"},
        '9': []string{"w", "x", "y", "z"},
    }
    res = append(res, strs[digits[0]]...)
    for i := 1; i < len(digits); i++ {
        n := len(res)
        for j := 0; j < n; j++ {
            for _, c := range strs[digits[i]] {
                res = append(res, res[j] + c)
            }
        }
        res = res[n:]
    }
    return
}`,
                timeComplexity: "O(3ᵐ4ⁿ)",
                spaceComplexity: "O(m+n)"
            }
        ]
    },
    {
        id: 18,
        number: "0018",
        title: "四数之和",
        difficulty: "medium",
        description: "给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：\n0 <= a, b, c, d < n\na、b、c 和 d 互不相同\nnums[a] + nums[b] + nums[c] + nums[d] == target\n你可以按 任意顺序 返回答案。",
        example: "示例 1：\n输入：nums = [1,0,-1,0,-2,2], target = 0\n输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]\n示例 2：\n输入：nums = [2,2,2,2,2], target = 8\n输出：[[2,2,2,2]]",
        solutions: [
            {
                code: `func fourSum(nums []int, target int) (res [][]int) {
    sort.Ints(nums)
    for i, x := range nums {
        if i > 0 && nums[i] == nums[i - 1] {
            continue
        }
        for j := i + 1; j < len(nums); j++ {
            if j > i + 1 && nums[j] == nums[j - 1] {
                continue
            }
            y := nums[j]
            for k, u := j + 1, len(nums) - 1; k < u; k++ {
                if k > j + 1 && nums[k] == nums[k - 1] {
                    continue
                }
                z := nums[k]
                for u > k + 1 && x + y + z + nums[u] > target {
                    u--
                }
                w := nums[u]
                if x + y + z + w == target {
                    res = append(res, []int{x, y, z, w})
                }
            }
        }
    }
    return
}`,
                timeComplexity: "O(n³)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 19,
        number: "0019",
        title: "删除链表的倒数第N个结点",
        difficulty: "medium",
        description: "给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。",
        example: "示例 1：\n输入：head = [1,2,3,4,5], n = 2\n输出：[1,2,3,5]\n示例 2：\n输入：head = [1], n = 1\n输出：[]\n示例 3：\n输入：head = [1,2], n = 1\n输出：[1]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, k int) *ListNode {
    dummy := &ListNode{}
    dummy.Next = head

    n := 0
    for p := dummy; p != nil; p = p.Next {
        n++
    }

    p := dummy
    for i := 0; i < n - k - 1; i++ {
        p = p.Next
    }
    p.Next = p.Next.Next

    return dummy.Next
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 20,
        number: "0020",
        title: "有效的括号",
        difficulty: "easy",
        description: "给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。\n有效字符串需满足：\n左括号必须用相同类型的右括号闭合。\n左括号必须以正确的顺序闭合。\n每个右括号都有一个对应的相同类型的左括号。",
        example: "示例 1：\n输入：s = \"()\"\n输出：true\n示例 2：\n输入：s = \"()[]{}\"\n输出：true\n示例 3：\n输入：s = \"(]\"\n输出：false\n示例 4：\n输入：s = \"([)]\"\n输出：false\n示例 5：\n输入：s = \"{[]}\"\n输出：true",
        solutions: [
            {
                code: `func isValid(s string) bool {
    stk := []rune{}

    for _, c := range s {
        if c == '(' || c == '[' || c == '{' {
            stk = append(stk, c)
        } else if len(stk) > 0 && c > stk[len(stk) - 1] && c - stk[len(stk) - 1] <= 2 {
            stk = stk[:len(stk) - 1]
        } else {
            return false
        }
    }

    return len(stk) == 0
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 21,
        number: "0021",
        title: "合并两个有序链表",
        difficulty: "easy",
        description: "将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。",
        example: "示例 1：\n输入：l1 = [1,2,4], l2 = [1,3,4]\n输出：[1,1,2,3,4,4]\n示例 2：\n输入：l1 = [], l2 = []\n输出：[]\n示例 3：\n输入：l1 = [], l2 = [0]\n输出：[0]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    dummy := &ListNode{}
    tail := dummy
    for list1 != nil && list2 != nil {
        if list1.Val < list2.Val {
            tail.Next = list1
            tail = list1
            list1 = list1.Next
        } else {
            tail.Next = list2
            tail = list2
            list2 = list2.Next
        }
    }
    if list1 != nil {
        tail.Next = list1
    }
    if list2 != nil {
        tail.Next = list2
    } 
    return dummy.Next
}`,
                timeComplexity: "O(m+n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 22,
        number: "0022",
        title: "括号生成",
        difficulty: "medium",
        description: "数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。",
        example: "示例 1：\n输入：n = 3\n输出：[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]\n示例 2：\n输入：n = 1\n输出：[\"()\"]",
        solutions: [
            {
                code: `func generateParenthesis(n int) []string {
    res := []string{}

    var dfs func(n, lc, rc int, seq string)
    dfs = func(n, lc, rc int, seq string) {
        if lc == n && rc == n {
            res = append(res, seq)
        } else {
            if lc < n {
                dfs(n, lc + 1, rc, seq + "(")
            }
            if rc < n && lc > rc {
                dfs(n, lc, rc + 1, seq + ")")
            }
        }
    }

    dfs(n, 0, 0, "")

    return res
}`,
                timeComplexity: "O(4ⁿ/√n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 23,
        number: "0023",
        title: "合并K个升序链表",
        difficulty: "hard",
        description: "给你一个链表数组，每个链表都已经按升序排列。\n请你将所有链表合并到一个升序链表中，返回合并后的链表。",
        example: "示例 1：\n输入：lists = [[1,4,5],[1,3,4],[2,6]]\n输出：[1,1,2,3,4,4,5,6]\n解释：链表数组如下：\n[\n  1->4->5,\n  1->3->4,\n  2->6\n]\n将它们合并到一个有序链表中得到。\n1->1->2->3->4->4->5->6\n示例 2：\n输入：lists = []\n输出：[]\n示例 3：\n输入：lists = [[]]\n输出：[]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
type minHeap []*ListNode

func (h *minHeap) Len() int {
    return len(*h)
}

func (h *minHeap) Less(i, j int) bool {
    return (*h)[i].Val < (*h)[j].Val
}

func (h *minHeap) Swap(i, j int) {
    (*h)[i], (*h)[j] = (*h)[j], (*h)[i]
}

func (h *minHeap) Push(x interface{}) {
    *h = append(*h, x.(*ListNode))
}

func (h *minHeap) Pop() interface{} {
    n := len(*h)
    x := (*h)[n - 1]
    *h = (*h)[:n - 1]
    return x
}

func mergeKLists(lists []*ListNode) *ListNode {
    h := &minHeap{}
    heap.Init(h)
    for _, l := range lists {
        if l != nil {
            heap.Push(h, l)
        }
    }

    dummy := &ListNode{}
    tail := dummy
    for h.Len() != 0 {
        t := heap.Pop(h).(*ListNode)
        tail.Next = t
        tail = t
        if t.Next != nil {
            heap.Push(h, t.Next)
        }
    }

    return dummy.Next
}`,
                timeComplexity: "O(nlogk)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 24,
        number: "0024",
        title: "两两交换链表中的节点",
        difficulty: "medium",
        description: "给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。",
        example: "示例 1：\n输入：head = [1,2,3,4]\n输出：[2,1,4,3]\n示例 2：\n输入：head = []\n输出：[]\n示例 3：\n输入：head = [1]\n输出：[1]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
    dummy := &ListNode{}
    dummy.Next = head
    p.Next := dummy
    for p.Next != nil && p.Next.Next != nil {
        a := p.Next
        b := a.Next
        p.Next = b
        a.Next = b.Next
        b.Next = a
        p = a
    }

    return dummy.Next
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 25,
        number: "0025",
        title: "K个一组翻转链表",
        difficulty: "hard",
        description: "给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。\nk 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，最后剩余的节点保持原有顺序。\n你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。",
        example: "示例 1：\n输入：head = [1,2,3,4,5], k = 2\n输出：[2,1,4,3,5]\n示例 2：\n输入：head = [1,2,3,4,5], k = 3\n输出：[3,2,1,4,5]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseKGroup(head *ListNode, k int) *ListNode {
    dummy := &ListNode{}
    dummy.Next = head
    p := dummy
    for {
        q := p
        for i := 0; i < k && q != nil; i++ {
            q = q.Next
        }
        if q == nil {
            break
        }
        a := p.Next
        b := a.Next
        for i := 0; i < k - 1; i++ {
            b.Next, a, b = a, b, b.Next
        }

        p.Next, p.Next.Next, p = a, b, p.Next
    }
    return dummy.Next
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 26,
        number: "0026",
        title: "删除有序数组中的重复项",
        difficulty: "easy",
        description: "给你一个升序排列的数组 nums ，请你原地删除重复出现的元素，使每个元素只出现一次，返回删除后数组的新长度。元素的相对顺序应该保持一致。然后返回 nums 中唯一元素的个数。\n考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：\n更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。\n返回 k 。",
        example: "示例 1：\n输入：nums = [1,1,2]\n输出：2, nums = [1,2,_]\n解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。\n示例 2：\n输入：nums = [0,0,1,1,1,2,2,3,3,4]\n输出：5, nums = [0,1,2,3,4]\n解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。",
        solutions: [
            {
                code: `func removeDuplicates(nums []int) (k int) {
    for i := range nums {
        if i == 0 || nums[i] != nums[i - 1] {
            nums[k] = nums[i]
            k++
        }
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 27,
        number: "0027",
        title: "移除元素",
        difficulty: "easy",
        description: "给你一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。\n不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。\n元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。",
        example: "示例 1：\n输入：nums = [3,2,2,3], val = 3\n输出：2, nums = [2,2]\n解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。\n示例 2：\n输入：nums = [0,1,2,2,3,0,4,2], val = 2\n输出：5, nums = [0,1,4,0,3]\n解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。",
        solutions: [
            {
                code: `func removeElement(nums []int, val int) (k int) {
    for i := range nums {
        if nums[i] != val {
            nums[k] = nums[i]
            k++
        }
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 28,
        number: "0028",
        title: "找出字符串中第一个匹配项的下标",
        difficulty: "easy",
        description: "给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回 -1。",
        example: "示例 1：\n输入：haystack = \"sadbutsad\", needle = \"sad\"\n输出：0\n解释：\"sad\" 在下标 0 和 6 处匹配。\n第一个匹配项的下标是 0 ，所以返回 0\n示例 2：\n输入：haystack = \"leetcode\", needle = \"leeto\"\n输出：-1\n解释：\"leeto\" 没有在 \"leetcode\" 中出现，所以返回 -1",
        solutions: [
            {
                code: `func strStr(s string, p string) int {
    n, m := len(s), len(p)
    s, p = " " + s, " " + p

    ne := make([]int, m + 1)
    for i, j := 2, 0; i <= m; i++ {
        for j != 0 && p[i] != p[j + 1] {
            j = ne[j]
        }
        if p[i] == p[j + 1] {
            j++
        }
        ne[i] = j
    }

    for i, j := 1, 0; i <= n; i++ {
        for j != 0 && s[i] != p[j + 1] {
            j = ne[j]
        }
        if s[i] == p[j + 1] {
            j++
        }
        if j == m {
            return i - m
        }
    }

    return -1
}`,
                timeComplexity: "O(m+n)",
                spaceComplexity: "O(m)"
            }
        ]
    },
    {
        id: 29,
        number: "0029",
        title: "两数相除",
        difficulty: "medium",
        description: "给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。\n整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2。\n返回被除数 dividend 除以除数 divisor 得到的商。\n假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2³¹, 2³¹ − 1] 。本题中，如果除法结果溢出，则返回 2³¹ − 1。",
        example: "示例 1：\n输入：dividend = 10, divisor = 3\n输出：3\n解释：10/3 = 3.33333.. ，向零截断得到 3\n示例 2：\n输入：dividend = 7, divisor = -3\n输出：-2\n解释：7/-3 = -2.33333.. ，向零截断得到 -2",
        solutions: [
            {
                code: `func divide(x int, y int) (res int) {
    if x == math.MinInt32 && y == -1 {
        return math.MaxInt32
    }
    a, b := []int{}, []int{}
    is_minus := false
    if x < 0 && y > 0 || x > 0 && y < 0 {
        is_minus = true
    }

    x, y = abs(x), abs(y)
    for i, j := y, 1; i <= x; i, j = i + i, j + j {
        a, b = append(a, i), append(b, j)
    }

    for i := len(a) - 1; i >= 0; i-- {
        if x >= a[i] {
            x -= a[i]
            res += b[i]
        }
    }

    if is_minus {
        res = -res
    }

    return
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}`,
                timeComplexity: "O(logn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 30,
        number: "0030",
        title: "串联所有单词的子串",
        difficulty: "hard",
        description: "给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串长度相同。\ns 中的串联子串是指一个包含 words 中所有字符串以任意顺序排列连接起来的子串。\n例如，如果 words = [\"ab\",\"cd\",\"ef\"]， 那么 \"abcdef\"， \"abefcd\"，\"cdabef\"， \"cdefab\"，\"efabcd\"， 和 \"efcdab\" 都是串联子串。 \"acdbef\" 不是串联子串，因为他不是任何 words 排列的连接。\n返回所有串联子串在 s 中的开始索引。你可以以任意顺序返回答案。",
        example: "示例 1：\n输入：s = \"barfoothefoobarman\", words = [\"foo\",\"bar\"]\n输出：[0,9]\n解释：因为 words.length == 2 且 words[i].length == 3，连接的子字符串的长度必须为 6。\n子串 \"barfoo\" 开始位置是 0。它是 words 中 [\"bar\",\"foo\"] 的连接。\n子串 \"foobar\" 开始位置是 9。它是 words 中 [\"foo\",\"bar\"] 的连接。\n输出顺序无关紧要。返回 [9,0] 也是正确的。\n示例 2：\n输入：s = \"wordgoodgoodgoodbestword\", words = [\"word\",\"good\",\"best\",\"word\"]\n输出：[]\n解释：因为 words.length == 4 且 words[i].length == 4，连接的子字符串的长度必须为 16。\n子串 \"wordgoodgoodgoodbestword\" 长度是 27，不是 16。\n示例 3：\n输入：s = \"barfoobarfoobar\", words = [\"bar\",\"foo\"]\n输出：[6]\n解释：子串 \"foobar\" 开始位置是 6。它是 words 中 [\"foo\",\"bar\"] 的连接。",
        solutions: [
            {
                code: `func findSubstring(s string, words []string) (res []int) {
    n, m, w := len(s), len(words), len(words[0])
    tot := map[string]int{}
    for _, word := range words {
        tot[word]++
    }

    for i := 0; i < w; i++ {
        wd := map[string]int{}
        cnt := 0
        for j := i; j + w <= n; j += w {
            if j >= i + m * w {
                word := s[j - m * w : j - m * w + w]
                wd[word]--
                if wd[word] < tot[word] {
                    cnt--
                }
            }
            word := s[j : j + w]
            wd[word]++
            if wd[word] <= tot[word] {
                cnt++
            }
            if cnt == m {
                res = append(res, j - (m - 1) * w)
            }
        }
    }

    return
}`,
                timeComplexity: "O((n+m)w)",
                spaceComplexity: "O(mw)"
            }
        ]
    },
    {
        id: 31,
        number: "0031",
        title: "下一个排列",
        difficulty: "medium",
        description: "整数数组的一个排列就是将其所有成员以序列或线性顺序排列。\n例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 和 [2,1,3] 。\n整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。\n例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。\n类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。\n而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。\n给你一个整数数组 nums ，找出 nums 的下一个排列。\n必须 原地 修改，只允许使用额外常数空间。",
        example: "示例 1：\n输入：nums = [1,2,3]\n输出：[1,3,2]\n示例 2：\n输入：nums = [3,2,1]\n输出：[1,2,3]\n示例 3：\n输入：nums = [1,1,5]\n输出：[1,5,1]",
        solutions: [
            {
                code: `func nextPermutation(nums []int)  {
    n := len(nums)
    k := n - 1
    for k > 0 && nums[k - 1] >= nums[k] {
        k--
    }
    if k <= 0 {
        for i, j := 0, n - 1; i < j; i, j = i + 1, j - 1 {
            nums[i], nums[j] = nums[j], nums[i]
        }
    } else {
        t := k
        for t < n && nums[t] > nums[k - 1] {
            t++
        }
        nums[t - 1], nums[k - 1] = nums[k - 1], nums[t - 1]
        for i, j := k, n - 1; i < j; i, j = i + 1, j - 1 {
            nums[i], nums[j] = nums[j], nums[i]
        }
    }
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 32,
        number: "0032",
        title: "最长有效括号",
        difficulty: "hard",
        description: "给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。",
        example: "示例 1：\n输入：s = \"(()\"\n输出：2\n解释：最长有效括号子串是 \"()\"\n示例 2：\n输入：s = \")()())\"\n输出：4\n解释：最长有效括号子串是 \"()()\"\n示例 3：\n输入：s = \"\"\n输出：0",
        solutions: [
            {
                code: `func longestValidParentheses(s string) (res int) {
    stk := []int{}

    for i, start := 0, -1; i < len(s); i++ {
        if s[i] == '(' {
            stk = append(stk, i)
        } else {
            if len(stk) != 0 {
                stk = stk[:len(stk) - 1]
                if len(stk) != 0 {
                    res = max(res, i - stk[len(stk) - 1])
                } else {
                    res = max(res, i - start)
                }
            } else {
                start = i
            }
        }
    }

    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 33,
        number: "0033",
        title: "搜索旋转排序数组",
        difficulty: "medium",
        description: "整数数组 nums 按升序排列，数组中的值 互不相同 。\n在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。\n给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。\n你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。",
        example: "示例 1：\n输入：nums = [4,5,6,7,0,1,2], target = 0\n输出：4\n示例 2：\n输入：nums = [4,5,6,7,0,1,2], target = 3\n输出：-1\n示例 3：\n输入：nums = [1], target = 0\n输出：-1",
        solutions: [
            {
                code: `func search(nums []int, target int) int {
    l, r := 0, len(nums) - 1
    for l < r {
        m := l + (r - l + 1) >> 1
        if nums[m] >= nums[0] {
            l = m
        } else {
            r = m - 1
        }
    }

    if target >= nums[0] {
        l = 0
    } else {
        l, r = r + 1, len(nums) - 1
    }

    for l < r {
        m := l + (r - l) >> 1
        if nums[m] >= target {
            r = m
        } else {
            l = m + 1
        }
    }

    if nums[r] == target {
        return r
    }
    return -1
}`,
                timeComplexity: "O(logn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 34,
        number: "0034",
        title: "在排序数组中查找元素的第一个和最后一个位置",
        difficulty: "medium",
        description: "给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。\n如果数组中不存在目标值 target，返回 [-1, -1]。\n你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。",
        example: "示例 1：\n输入：nums = [5,7,7,8,8,10], target = 8\n输出：[3,4]\n示例 2：\n输入：nums = [5,7,7,8,8,10], target = 6\n输出：[-1,-1]\n示例 3：\n输入：nums = [], target = 0\n输出：[-1,-1]",
        solutions: [
            {
                code: `func searchRange(nums []int, target int) (res []int) {
    l, r := 0, len(nums) - 1
    for l < r {
        m := l + (r - l) >> 1
        if nums[m] >= target {
            r = m
        } else {
            l = m + 1
        }
    }
    if len(nums) == 0 || nums[r] != target {
        return []int{-1, -1}
    }
    res = append(res, r)

    r = len(nums) - 1
    for l < r {
        m := l + (r - l + 1) >> 1
        if nums[m] <= target {
            l = m
        } else {
            r = m - 1
        }
    }
    res = append(res, r)
    return
}`,
                timeComplexity: "O(logn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 35,
        number: "0035",
        title: "搜索插入位置",
        difficulty: "easy",
        description: "给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。\n请必须使用时间复杂度为 O(log n) 的算法。",
        example: "示例 1：\n输入: nums = [1,3,5,6], target = 5\n输出: 2\n示例 2：\n输入: nums = [1,3,5,6], target = 2\n输出: 1\n示例 3：\n输入: nums = [1,3,5,6], target = 7\n输出: 4",
        solutions: [
            {
                code: `func searchInsert(nums []int, target int) int {
    l, r := 0, len(nums)
    for l < r {
        m := l + (r - l) >> 1
        if nums[m] >= target {
            r = m
        } else {
            l = m + 1
        }
    }
    return r
}`,
                timeComplexity: "O(logn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 36,
        number: "0036",
        title: "有效的数独",
        difficulty: "medium",
        description: "请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。\n数字 1-9 在每一行只能出现一次。\n数字 1-9 在每一列只能出现一次。\n数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）\n注意：\n一个有效的数独（部分已被填充）不一定是可解的。\n只需要根据以上规则，验证已经填入的数字是否有效即可。\n空白格用 '.' 表示。",
        example: "示例 1：\n输入：board = \n[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"]\n,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"]\n,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"]\n,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"]\n,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"]\n,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"]\n,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"]\n,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"]\n,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\n输出：true\n示例 2：\n输入：board = \n[[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"]\n,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"]\n,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"]\n,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"]\n,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"]\n,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"]\n,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"]\n,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"]\n,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\n输出：false",
        solutions: [
            {
                code: `func isValidSudoku(board [][]byte) bool {
    for i := 0; i < 9; i++ {
        st := [9]bool{}
        for j := 0; j < 9; j++ {
            if board[i][j] != '.' {
                t := int(board[i][j] - '1')
                if st[t] {
                    return false
                }
                st[t] = true
            }
        }
    }

    for i := 0; i < 9; i++ {
        st := [9]bool{}
        for j := 0; j < 9; j++ {
            if board[j][i] != '.' {
                t := int(board[j][i] - '1')
                if st[t] {
                    return false
                }
                st[t] = true
            }
        }
    }

    for i := 0; i < 9; i += 3 {
        for j := 0; j < 9; j += 3 {
            st := [9]bool{}
            for x := 0; x < 3; x++ {
                for y := 0; y < 3; y++ {
                    if board[i + x][j + y] != '.' {
                        t := int(board[i + x][j + y] - '1')
                        if st[t] {
                            return false
                        }
                        st[t] = true
                    }
                }
            }
        }
    }

    return true
}`,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 37,
        number: "0037",
        title: "解数独",
        difficulty: "hard",
        description: "编写一个程序，通过填充空格来解决数独问题。\n数独的解法需 遵循如下规则：\n数字 1-9 在每一行只能出现一次。\n数字 1-9 在每一列只能出现一次。\n数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）\n数独部分空格内已填入了数字，空白格用 '.' 表示。",
        example: "示例 1：\n输入：board = [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\n输出：[[\"5\",\"3\",\"4\",\"6\",\"7\",\"8\",\"9\",\"1\",\"2\"],[\"6\",\"7\",\"2\",\"1\",\"9\",\"5\",\"3\",\"4\",\"8\"],[\"1\",\"9\",\"8\",\"3\",\"4\",\"2\",\"5\",\"6\",\"7\"],[\"8\",\"5\",\"9\",\"7\",\"6\",\"1\",\"4\",\"2\",\"3\"],[\"4\",\"2\",\"6\",\"8\",\"5\",\"3\",\"7\",\"9\",\"1\"],[\"7\",\"1\",\"3\",\"9\",\"2\",\"4\",\"8\",\"5\",\"6\"],[\"9\",\"6\",\"1\",\"5\",\"3\",\"7\",\"2\",\"8\",\"4\"],[\"2\",\"8\",\"7\",\"4\",\"1\",\"9\",\"6\",\"3\",\"5\"],[\"3\",\"4\",\"5\",\"2\",\"8\",\"6\",\"1\",\"7\",\"9\"]]",
        solutions: [
            {
                name: "解法一",
                code: `func solveSudoku(board [][]byte)  {
    row, col, cell := [9][9]bool{}, [9][9]bool{}, [3][3][9]bool{}

    for i := 0; i < 9; i++ {
        for j := 0; j < 9; j++ {
            if board[i][j] != '.' {
                t := int(board[i][j] - '1')
                row[i][t], col[j][t], cell[i / 3][j / 3][t] = true, true, true
            }
        }
    }

    var dfs func(board [][]byte, x, y int) bool
    dfs = func(board [][]byte, x, y int) bool {
        if y == 9 {
            x++
            y = 0
        }
        if x == 9 {
            return true
        }

        if board[x][y] != '.' {
            return dfs(board, x, y + 1)
        }
        for i := 0; i < 9; i++ {
            if !row[x][i] && !col[y][i] && !cell[x / 3][y / 3][i] {
                board[x][y] = '1' + byte(i)
                row[x][i], col[y][i], cell[x / 3][y / 3][i] = true, true, true
                if dfs(board, x, y + 1) {
                    return true
                }
                row[x][i], col[y][i], cell[x / 3][y / 3][i] = false, false, false
                board[x][y] = '.'
            }
        }

        return false
    }

    dfs(board, 0, 0)
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(n²)"
            },
            {
                name: "解法二",
                code: `func solveSudoku(board [][]byte)  {
    row, col, cell := [9][9]bool{}, [9][9]bool{}, [3][3][9]bool{}

    for i := 0; i < 9; i++ {
    	for j := 0; j < 9; j++ {
    		if board[i][j] != '.' {
    			t := int(board[i][j] - '1')
    			row[i][t], col[j][t], cell[i / 3][j / 3][t] = true, true, true
    		}
    	}
    }

	res := [][]byte{}
    var dfs func(int, int)
    dfs = func(x, y int) {
		if y == 9 {
			x++
			y = 0
		}
		if x == 9 {
			res = make([][]byte, 9)
			for i := range res {
				res[i] = make([]byte, 9)
				copy(res[i], board[i])
			}
			return
		}
		
		if board[x][y] != '.' {
			dfs(x, y + 1)
		} else {
	        for i := 0; i < 9; i++ {
				if !row[x][i] && !col[y][i] && !cell[x / 3][y / 3][i] {
					board[x][y] = '1' + byte(i)
					row[x][i], col[y][i], cell[x / 3][y / 3][i] = true, true, true
					dfs(x, y + 1)
					row[x][i], col[y][i], cell[x / 3][y / 3][i] = false, false, false
					board[x][y] = '.'
				}
			}
	    }
    }
    dfs(0, 0)
    
    for i := range board {
    	copy(board[i], res[i])
    }
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(n²)"
            }
        ]
    },
    {
        id: 38,
        number: "0038",
        title: "外观数列",
        difficulty: "medium",
        description: "给定一个正整数 n ，输出外观数列的第 n 项。\n「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。\n你可以将其视作是由递归公式定义的数字字符串序列：\ncountAndSay(1) = \"1\"\ncountAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。\n前五项如下：\n1.     1\n2.     11\n3.     21\n4.     1211\n5.     111221\n第一项是数字 1\n描述前一项，这个数是 1 即 \" 一 个 1 \"，记作 \"11\"\n描述前一项，这个数是 11 即 \" 二 个 1 \" ，记作 \"21\"\n描述前一项，这个数是 21 即 \" 一 个 2 + 一 个 1 \" ，记作 \"1211\"\n描述前一项，这个数是 1211 即 \" 一 个 1 + 一 个 2 + 二 个 1 \" ，记作 \"111221\"",
        example: "示例 1：\n输入：n = 1\n输出：\"1\"\n解释：这是一个基本样例。\n示例 2：\n输入：n = 4\n输出：\"1211\"\n解释：\ncountAndSay(1) = \"1\"\ncountAndSay(2) = 读 \"1\" = 一 个 1 = \"11\"\ncountAndSay(3) = 读 \"11\" = 二 个 1 = \"21\"\ncountAndSay(4) = 读 \"21\" = 一 个 2 + 一 个 1 = \"12\" + \"11\" = \"1211\"",
        solutions: [
            {
                code: `func countAndSay(n int) string {
    s := "1"
    for i := 0; i < n - 1; i++ {
        t := ""
        for j := 0; j < len(s); j++ {
            k := j
            for k < len(s) && s[k] == s[j] {
                k++
            }
            t += strconv.Itoa(k - j) + string(s[j])
            j = k - 1
        }
        s = t
    }
    return s
}`,
                timeComplexity: "O(2ⁿ)",
                spaceComplexity: "O(2ⁿ)"
            }
        ]
    },
    {
        id: 39,
        number: "0039",
        title: "组合总和",
        difficulty: "medium",
        description: "给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。\ncandidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。\n对于给定的输入，保证和为 target 的不同组合数少于 150 个。",
        example: "示例 1：\n输入：candidates = [2,3,6,7], target = 7\n输出：[[2,2,3],[7]]\n解释：\n2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。\n7 也是一个候选， 7 = 7 。\n仅有这两种组合。\n示例 2：\n输入: candidates = [2,3,5], target = 8\n输出: [[2,2,2,2],[2,3,3],[3,5]]\n示例 3：\n输入: candidates = [2], target = 1\n输出: []",
        solutions: [
            {
                code: `func combinationSum(c []int, target int) (res [][]int) {
    path := []int{}

    var dfs func(int, int)
    dfs = func(u, target int) {
    if target == 0 {
            t := make([]int, len(path))
            copy(t, path)
            res = append(res, t)
            return
        }
        if u == len(c) {
            return
        }

        for i := 0; c[u] * i <= target; i++ {
            dfs(u + 1, target - c[u] * i)
            path = append(path, c[u])
        }

        path = path[:len(path) - target / c[u] - 1]
    }

    dfs(0, target)
    
    return res
}`,
                timeComplexity: "O(2^target)",
                spaceComplexity: "O(target)"
            }
        ]
    },
    {
        id: 40,
        number: "0040",
        title: "组合总和 II",
        difficulty: "medium",
        description: "给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。\ncandidates 中的每个数字在每个组合中只能使用 一次 。\n注意：解集不能包含重复的组合。",
        example: "示例 1：\n输入: candidates = [10,1,2,7,6,1,5], target = 8,\n输出:\n[\n[1,1,6],\n[1,2,5],\n[1,7],\n[2,6]\n]\n示例 2：\n输入: candidates = [2,5,2,1,2], target = 5,\n输出:\n[\n[1,2,2],\n[5]\n]",
        solutions: [
            {
                code: `func combinationSum2(c []int, target int) (res [][]int) {
    path := []int{}
    sort.Ints(c)
    
    var dfs func(int, int)
    dfs = func(u, target int) {
        if target == 0 {
            t := make([]int, len(path))
            copy(t, path)
            res = append(res, t)
            return
        }
        if u == len(c) {
            return
        }

        k := u + 1
        for k < len(c) && c[k] == c[u] {
            k++
        }
        cnt := k - u

        for i := 0; c[u] * i <= target && i <= cnt; i++ {
            dfs(k, target - c[u] * i)
            path = append(path, c[u])
        }

        for i := 0; c[u] * i <= target && i <= cnt; i++ {
            path = path[:len(path) - 1]
        }
    }

    dfs(0, target)

    return
}`,
                timeComplexity: "O(2ⁿ)",
                spaceComplexity: "O(target)"
            }
        ]
    },
    {
        id: 41,
        number: "0041",
        title: "缺失的第一个正数",
        difficulty: "hard",
        description: "给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。\n请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。",
        example: "示例 1：\n输入：nums = [1,2,0]\n输出：3\n示例 2：\n输入：nums = [3,4,-1,1]\n输出：2\n示例 3：\n输入：nums = [7,8,9,11,12]\n输出：1",
        solutions: [
            {
                code: `func firstMissingPositive(nums []int) int {
    n := len(nums)
    for i := range nums {
        nums[i]--
    }
    for i := range nums {
        for nums[i] >= 0 && nums[i] < n && nums[i] != i && nums[i] != nums[nums[i]] {
            nums[i], nums[nums[i]] = nums[nums[i]], nums[i]
        }
    }

    for i := 0; i < n; i++ {
        if nums[i] != i {
            return i + 1
        }
    }

    return n + 1
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 42,
        number: "0042",
        title: "接雨水",
        difficulty: "hard",
        description: "给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。",
        example: "示例 1：\n输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]\n输出：6\n解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。\n示例 2：\n输入：height = [4,2,0,3,2,5]\n输出：9",
        solutions: [
            {
                code: `func trap(height []int) (res int) {
    stk := []int{}
    for i := range height {
        last := 0
        for len(stk) != 0 && height[stk[len(stk) - 1]] <= height[i] {
            res += (height[stk[len(stk) - 1]] - last) * (i - stk[len(stk) - 1] - 1)
            last = height[stk[len(stk) - 1]]
            stk = stk[:len(stk) - 1]
        }

        if len(stk) != 0 {
            res += (i - stk[len(stk) - 1] - 1) * (height[i] - last)
        }
        stk = append(stk, i)
    }

    return res
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 43,
        number: "0043",
        title: "字符串相乘",
        difficulty: "medium",
        description: "给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。\n注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。",
        example: "示例 1：\n输入: num1 = \"2\", num2 = \"3\"\n输出: \"6\"\n示例 2：\n输入: num1 = \"123\", num2 = \"456\"\n输出: \"56088\"",
        solutions: [
            {
                code: `func multiply(num1 string, num2 string) (res string) {
    A, B := []int{}, []int{}
    n, m := len(num1), len(num2)
    for i := n - 1; i >= 0; i-- {
        A = append(A, int(num1[i] - '0'))
    }
    for i := m - 1; i >= 0; i-- {
        B = append(B, int(num2[i] - '0'))
    }

    C := make([]int, n + m)
    for i := range num1 {
        for j := range num2 {
            C[i + j] += A[i] * B[j]
        }
    }

    for i, t := 0, 0; i < len(C); i++ {
        t += C[i]
        C[i] = t % 10
        t /= 10
    }

    for i := len(C) - 1; i >= 0; i-- {
        if C[i] != 0 {
            for j := i; j >= 0; j-- {
                res += strconv.Itoa(C[j])
            }
            return
        }
    }

    return "0"
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(m+n)"
            }
        ]
    },
    {
        id: 44,
        number: "0044",
        title: "通配符匹配",
        difficulty: "hard",
        description: "给你一个字符串 s 和一个字符模式 p ，请你来实现一个支持 '?' 和 '*' 的通配符匹配。\n'?' 可以匹配任何单个字符。\n'*' 可以匹配任意字符串（包括空字符串）。\n两个字符串完全匹配才算匹配成功。",
        example: "示例 1：\n输入：s = \"aa\", p = \"a\"\n输出：false\n解释：\"a\" 无法匹配 \"aa\" 整个字符串。\n示例 2：\n输入：s = \"aa\", p = \"*\"\n输出：true\n解释：'*' 可以匹配任意字符串。\n示例 3：\n输入：s = \"cb\", p = \"?a\"\n输出：false\n解释：'?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。",
        solutions: [
            {
                code: `func isMatch(s string, p string) bool {
    n, m := len(s), len(p)
    s, p = " " + s, " " + p
    f := make([][]bool, n + 1)
    for i := range f {
        f[i] = make([]bool, m + 1)
    }
    f[0][0] = true

    for i := 0; i <= n; i++ {
        for j := 1; j <= m; j++ {
            if p[j] == '*' {
                f[i][j] = f[i][j - 1] || i != 0 && f[i - 1][j]
            } else {
                f[i][j] = (s[i] == p[j] || p[j] == '?') && i != 0 && f[i - 1][j - 1]
            }
        }
    }

    return f[n][m]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            }
        ]
    },
    {
        id: 45,
        number: "0045",
        title: "跳跃游戏 II",
        difficulty: "medium",
        description: "给你一个非负整数数组 nums ，你最初位于数组的第一个位置。\n数组中的每个元素代表你在该位置可以跳跃的最大长度。\n你的目标是使用最少的跳跃次数到达数组的最后一个位置。\n假设你总是可以到达数组的最后一个位置。",
        example: "示例 1：\n输入: nums = [2,3,1,1,4]\n输出: 2\n解释: 跳到最后一个位置的最小跳跃数是 2。\n     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。\n示例 2：\n输入: nums = [2,3,0,1,4]\n输出: 2",
        solutions: [
            {
                code: `func jump(nums []int) int {
    n := len(nums)
    f := make([]int, n)

    for i, j := 1, 0; i < n; i++ {
        for j + nums[j] < i {
            j++
        }
        f[i] = f[j] + 1
    }

    return f[n - 1]
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 46,
        number: "0046",
        title: "全排列",
        difficulty: "medium",
        description: "给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。",
        example: "示例 1：\n输入：nums = [1,2,3]\n输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n示例 2：\n输入：nums = [0,1]\n输出：[[0,1],[1,0]]\n示例 3：\n输入：nums = [1]\n输出：[[1]]",
        solutions: [
            {
                code: `func permute(nums []int) (res [][]int) {
    path := make([]int, len(nums))
    st := make([]bool, len(nums))

    var dfs func(int)
    dfs = func(u int) {
        if u == len(nums) {
            t := make([]int, len(path))
            copy(t, path)
            res = append(res, t)
            return
        }

        for i := range nums {
            if st[i] == false {
                path[u] = nums[i]
                st[i] = true
                dfs(nums, u + 1)
                st[i] = false
            }
        }
    }

    dfs(nums, 0)

    return
}`,
                timeComplexity: "O(n!n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 47,
        number: "0047",
        title: "全排列 II",
        difficulty: "medium",
        description: "给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。",
        example: "示例 1：\n输入：nums = [1,1,2]\n输出：\n[[1,1,2],\n [1,2,1],\n [2,1,1]]\n示例 2：\n输入：nums = [1,2,3]\n输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        solutions: [
            {
                code: `func permuteUnique(nums []int) (res [][]int) {
    sort.Ints(nums)
    path := make([]int, len(nums))
    st := make([]bool, len(nums))

    var dfs func(int)
    dfs = func(u int) {
        if u == len(nums) {
            t := make([]int, len(path))
            copy(t, path)
            res = append(res, t)
            return
        }

        for i := range nums {
            if st[i] == false {
                if i != 0 && nums[i - 1] == nums[i] && st[i - 1] == false {
                    continue
                }
                st[i] = true
                path[u] = nums[i]
                dfs(nums, u + 1)
                st[i] = false
            }
        }
    }

    dfs(nums, 0)

    return
}`,
                timeComplexity: "O(n!n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 48,
        number: "0048",
        title: "旋转图像",
        difficulty: "medium",
        description: "给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。\n你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。",
        example: "示例 1：\n输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]\n输出：[[7,4,1],[8,5,2],[9,6,3]]\n示例 2：\n输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
        solutions: [
            {
                code: `func rotate(m [][]int)  {
    for i := range m {
        for j := 0; j < i; j++ {
            m[i][j], m[j][i] = m[j][i], m[i][j]
        }
    }

    for i := range m {
        for j, k := 0, len(m) - 1; j < k; j, k = j + 1, k - 1 {
            m[i][j], m[i][k] = m[i][k], m[i][j]
        }
    }
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 49,
        number: "0049",
        title: "字母异位词分组",
        difficulty: "medium",
        description: "给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。\n字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。",
        example: "示例 1：\n输入: strs = [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]\n输出: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\n示例 2：\n输入: strs = [\"\"]\n输出: [[\"\"]]\n示例 3：\n输入: strs = [\"a\"]\n输出: [[\"a\"]]",
        solutions: [
            {
                code: `func groupAnagrams(strs []string) (res [][]string) {
    m := map[string][]string{}
    for _, str := range strs {
        s := str
        bytes := []byte(s)
        sort.Slice(bytes, func(i, j int) bool {
            return bytes[i] < bytes[j]
        })
        s = string(bytes)
        m[s] = append(m[s], str)
    }

    for _, v := range m {
        res = append(res, v)
    }

    return
}`,
                timeComplexity: "O(nklogk)",
                spaceComplexity: "O(nk)"
            }
        ]
    },
    {
        id: 50,
        number: "0050",
        title: "Pow(x, n)",
        difficulty: "medium",
        description: "实现 pow(x, n) ，即计算 x 的整数 n 次幂函数（即，xⁿ）。",
        example: "示例 1：\n输入：x = 2.00000, n = 10\n输出：1024.00000\n示例 2：\n输入：x = 2.10000, n = 3\n输出：9.26100\n示例 3：\n输入：x = 2.00000, n = -2\n输出：0.25000\n解释：2⁻² = 1/2² = 1/4 = 0.25",
        solutions: [
            {
                code: `func myPow(x float64, n int) float64 {
    is_minus := n < 0
    res := 1.0
    for k := abs(n); k > 0; k >>= 1 {
        if k & 1 == 1 {
            res *= x
        }
        x *= x
    }
    if is_minus {
        res = 1 / res
    }
    return res
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}`,
                timeComplexity: "O(logn)",
                spaceComplexity: "O(logn)"
            }
        ]
    },
    {
        id: 51,
        number: "0051",
        title: "N皇后",
        difficulty: "hard",
        description: "按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。\nn 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。\n给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。\n每一种解法包含一个不同的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。",
        example: "示例 1：\n输入：n = 4\n输出：[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]\n解释：如上图所示，4 皇后问题存在两个不同的解法。\n示例 2：\n输入：n = 1\n输出：[[\"Q\"]]",
        solutions: [
            {
                code: `func solveNQueens(n int) (res [][]string) {
    col := make([]bool, n)
    dg, udg := make([]bool, n * 2 - 1), make([]bool, n * 2 - 1)

    path := make([][]byte, n)
    for i := range path {
        path[i] = make([]byte, n)
        for j := range path[i] {
            path[i][j] = '.'
        }
    }

    var dfs func(int)
    dfs = func(u int) {
        if u == n {
            t := make([]string, n)
            for i := range t {
                t[i] = string(path[i])
            }
            res = append(res, t)
            return
        }

        for i := 0; i < n; i++ {
            if !col[i] && !dg[u - i + n - 1] && !udg[u + i] {
                col[i], dg[u - i + n - 1], udg[u + i] = true, true, true
                path[u][i] = 'Q'
                dfs(u + 1)
                path[u][i] = '.'
                col[i], dg[u - i + n - 1], udg[u + i] = false, false, false
            }
        }
    }

    dfs(0)

    return
}`,
                timeComplexity: "O(n!)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 52,
        number: "0052",
        title: "N皇后 II",
        difficulty: "hard",
        description: "n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。\n给你一个整数 n ，返回 n 皇后问题 不同的解决方案的数量。",
        example: "示例 1：\n输入：n = 4\n输出：2\n解释：如上图所示，4 皇后问题存在两个不同的解法。\n示例 2：\n输入：n = 1\n输出：1",
        solutions: [
            {
                code: `func totalNQueens(n int) int {
    col := make([]bool, n)
    dg, udg := make([]bool, n * 2 - 1), make([]bool, n * 2 - 1)

    var dfs func(int) int
    dfs = func(u int) int {
        if u == n {
            return 1
        }

        res := 0
        for i := 0; i < n; i++ {
            if !col[i] && !dg[u - i + n - 1] && !udg[u + i] {
                col[i], dg[u - i + n - 1], udg[u + i] = true, true, true
                res += dfs(u + 1)
                col[i], dg[u - i + n - 1], udg[u + i] = false, false, false
            }
        }

        return res
    }

    return dfs(0)
}`,
                timeComplexity: "O(n!)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 53,
        number: "0053",
        title: "最大子数组和",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。\n子数组 是数组中的一个连续部分。",
        example: "示例 1：\n输入：nums = [-2,1,-3,4,-1,2,1,-5,4]\n输出：6\n解释：连续子数组 [4,-1,2,1] 的和最大，为 6\n示例 2：\n输入：nums = [1]\n输出：1\n示例 3：\n输入：nums = [5,4,-1,7,8]\n输出：23",
        solutions: [
            {
                name: "解法一",
                code: `func maxSubArray(nums []int) int {
    res, last := math.MinInt, 0
    for _, x := range nums {
        last = x + max(last, 0)
        res = max(res, last)
    }
    return res
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            },
            {
                name: "解法二：SegmentTree",
                code: `type Node struct {
    sum, s, ls, rs int
}

func maxSubArray(nums []int) int {
    res := math.MinInt
    for _, x := range nums {
        res = max(res, x)
    }
    if res < 0 {
        return res
    }
    var build func(int, int) Node
    build = func(l, r int) Node {
        if l == r {
            v := max(nums[l], 0)
            return Node{nums[l], v, v, v}
        }

        m := l + (r - l) >> 1
        L, R := build(l, m), build(m + 1, r)
        var res Node
        res.sum = L.sum + R.sum
        res.s = max(max(L.s, R.s), L.rs + R.ls)
        res.ls = max(L.ls, L.sum + R.ls)
        res.rs = max(R.rs, R.sum + L.rs)
        return res
    }
    res = build(0, len(nums) - 1).s
    return res
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(logn)"
            }
        ]
    },
    {
        id: 54,
        number: "0054",
        title: "螺旋矩阵",
        difficulty: "medium",
        description: "给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。",
        example: "示例 1：\n输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]\n输出：[1,2,3,6,9,8,7,4,5]\n示例 2：\n输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n输出：[1,2,3,4,8,12,11,10,9,5,6,7]",
        solutions: [
            {
                code: `func spiralOrder(matrix [][]int) (res []int) {
    n, m := len(matrix), len(matrix[0])

    dx, dy := []int{0, 1, 0, -1}, []int{1, 0, -1, 0}
    st := make([][]bool, n)
    for i := range st {
        st[i] = make([]bool, m)
    }
    
    for i, x, y, d := 0, 0, 0, 0; i < n * m; i++ {
        res = append(res, matrix[x][y])
        st[x][y] = true

        a, b := x + dx[d], y + dy[d]
        if a < 0 || a >= n || b < 0 || b >= m || st[a][b] {
            d = (d + 1) % 4
            a, b = x + dx[d], y + dy[d]
        }

        x, y = a, b
    }

    return
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 55,
        number: "0055",
        title: "跳跃游戏",
        difficulty: "medium",
        description: "给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。\n判断你是否能够到达最后一个下标。",
        example: "示例 1：\n输入：nums = [2,3,1,1,4]\n输出：true\n解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。\n示例 2：\n输入：nums = [3,2,1,0,4]\n输出：false\n解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。",
        solutions: [
            {
                code: `func canJump(nums []int) bool {
    for i, j := 0, 0; i < len(nums); i++ {
        if j < i {
            return false
        }
        j = max(j, i + nums[i])
    }
    return true
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 56,
        number: "0056",
        title: "合并区间",
        difficulty: "medium",
        description: "以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。",
        example: "示例 1：\n输入：intervals = [[1,3],[2,6],[8,10],[15,18]]\n输出：[[1,6],[8,10],[15,18]]\n解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]\n示例 2：\n输入：intervals = [[1,4],[4,5]]\n输出：[[1,5]]\n解释：区间 [1,4] 和 [4,5] 可被视为重叠区间",
        solutions: [
            {
                code: `func merge(a [][]int) (res [][]int) {
    sort.Slice(a, func(i, j int) bool {
        return a[i][0] < a[j][0]
    })
    l, r := a[0][0], a[0][1]
    for i := 1; i < len(a); i++ {
        if a[i][0] > r {
            res = append(res, []int{l, r})
            l, r = a[i][0], a[i][1]
        } else {
            r = max(r, a[i][1])
        }
    }

    res = append(res, []int{l, r})
    return
}`,
                timeComplexity: "O(nlogn)",
                spaceComplexity: "O(logn)"
            }
        ]
    },
    {
        id: 57,
        number: "0057",
        title: "插入区间",
        difficulty: "medium",
        description: "给你一个 无重叠的 ，按照区间起始端点排序的区间列表。\n在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。",
        example: "示例 1：\n输入：intervals = [[1,3],[6,9]], newInterval = [2,5]\n输出：[[1,5],[6,9]]\n示例 2：\n输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\n输出：[[1,2],[3,10],[12,16]]\n解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。",
        solutions: [
            {
                code: `func insert(a [][]int, b []int) (res [][]int) {
    k := 0
    for k < len(a) && a[k][1] < b[0] {
        res = append(res, a[k])
        k++
    }

    if k < len(a) {
        b[0] = min(b[0], a[k][0])
        for k < len(a) && a[k][0] <= b[1] {
            b[1] = max(b[1], a[k][1])
            k++
        }
    }
    
    res = append(res, b)

    for k < len(a) {
        res = append(res, a[k])
        k++
    }
    return res
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 58,
        number: "0058",
        title: "最后一个单词的长度",
        difficulty: "easy",
        description: "给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。\n单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。",
        example: "示例 1：\n输入：s = \"Hello World\"\n输出：5\n解释：最后一个单词是 \"World\"，长度为 5\n示例 2：\n输入：s = \"   fly me   to   the moon  \"\n输出：4\n解释：最后一个单词是 \"moon\"，长度为 4\n示例 3：\n输入：s = \"luffy is still joyboy\"\n输出：6\n解释：最后一个单词是 \"joyboy\"，长度为 6",
        solutions: [
            {
                code: `func lengthOfLastWord(s string) int {
    for i := len(s) - 1; i >= 0; i-- {
        if s[i] == ' ' {
            continue
        }
        j := i - 1
        for j >= 0 && s[j] != ' ' {
            j--
        }
        return i - j
    }

    return -1
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 59,
        number: "0059",
        title: "螺旋矩阵 II",
        difficulty: "medium",
        description: "给你一个正整数 n ，生成一个包含 1 到 n² 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。",
        example: "示例 1：\n输入：n = 3\n输出：[[1,2,3],[8,9,4],[7,6,5]]\n示例 2：\n输入：n = 1\n输出：[[1]]",
        solutions: [
            {
                code: `func generateMatrix(n int) [][]int {
    res := make([][]int, n)
    for i := range res {
        res[i] = make([]int, n)
    }
    
    dx, dy := []int{0, 1, 0, -1}, []int{1, 0, -1, 0}
    for i, x, y, d := 1, 0, 0, 0; i <= n * n; i++ {
        res[x][y] = i
        a, b := x + dx[d], y + dy[d]
        if a < 0 || a >= n || b < 0 || b >= n || res[a][b] != 0 {
            d = (d + 1) % 4
            a, b = x + dx[d], y + dy[d]
        }
        x, y = a, b
    }
    
    return res
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 60,
        number: "0060",
        title: "排列序列",
        difficulty: "hard",
        description: "给出集合 [1,2,3,...,n]，其所有元素共有 n! 种排列。\n按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：\n\"123\"\n\"132\"\n\"213\"\n\"231\"\n\"312\"\n\"321\"\n给定 n 和 k，返回第 k 个排列。",
        example: "示例 1：\n输入：n = 3, k = 3\n输出：\"213\"\n示例 2：\n输入：n = 4, k = 9\n输出：\"2314\"\n示例 3：\n输入：n = 3, k = 1\n输出：\"123\"",
        solutions: [
            {
                code: `func getPermutation(n int, k int) (res string) {
    st := [10]bool{}
    for i := 0; i < n; i++ {
        fact := 1
        for j := 1; j <= n - i - 1; j++ {
            fact *= j
        }

        for j := 1; j <= n; j++ {
            if !st[j] {
                if k > fact {
                    k -= fact
                } else {
                    res += strconv.Itoa(j)
                    st[j] = true
                    break
                }
            }
        }
    }

    return
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 61,
        number: "0061",
        title: "旋转链表",
        difficulty: "medium",
        description: "给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。",
        example: "示例 1：\n输入：head = [1,2,3,4,5], k = 2\n输出：[4,5,1,2,3]\n示例 2：\n输入：head = [0,1,2], k = 4\n输出：[2,0,1]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func rotateRight(head *ListNode, k int) *ListNode {
    if head == nil {
        return head
    }
    n := 0
    tail := &ListNode{}
    for p := head; p != nil; p = p.Next {
        tail = p
        n++
    }
    k %= n

    if k == 0 {
        return head
    }

    p := head
    for i := 0; i < n - k - 1; i++ {
        p = p.Next
    }
    tail.Next = head
    head = p.Next
    p.Next = nil
    return head
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 62,
        number: "0062",
        title: "不同路径",
        difficulty: "medium",
        description: "一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 \"Start\" ）。\n机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 \"Finish\" ）。\n问总共有多少条不同的路径？",
        example: "示例 1：\n输入：m = 3, n = 7\n输出：28\n示例 2：\n输入：m = 3, n = 2\n输出：3\n解释：\n从左上角开始，总共有 3 条路径可以到达右下角。\n1. 向右 -> 向下 -> 向下\n2. 向下 -> 向下 -> 向右\n3. 向下 -> 向右 -> 向下\n示例 3：\n输入：m = 7, n = 3\n输出：28\n示例 4：\n输入：m = 3, n = 3\n输出：6",
        solutions: [
            {
                name: "解法一",
                code: `func uniquePaths(m int, n int) int {
    f := make([][]int, n)
    for i := range f {
        f[i] = make([]int, m)
    }
    for i := range f {
        for j := range f[i] {
            if i == 0 && j == 0 {
                f[i][j] = 1
            } else {
                if i != 0 {
                    f[i][j] += f[i - 1][j]
                }
                if j != 0 {
                    f[i][j] += f[i][j - 1]
                }
            }
        }
    }
    return f[n - 1][m - 1]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            },
            {
                name: "解法二",
                code: `func uniquePaths(m int, n int) int {
    f := make([][]int, n)
    for i := range f {
        f[i] = make([]int, m)
    }
    for i := range f {
        for j := range f[i] {
            if i == 0 || j == 0 {
                f[i][j] = 1
            } else {
                f[i][j] = f[i - 1][j] + f[i][j - 1]
            }
        }
    }
    return f[n - 1][m - 1]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            },
            {
                name: "解法三",
                code: `func uniquePaths(m int, n int) int {
    f := make([]int, m)
    f[0] = 1
    for i := 0; i < n; i++ {
        for j := 1; j < m; j++ {
            f[j] += f[j - 1]
        }
    }
    return f[m - 1]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(m)"
            }
        ]
    },
    {
        id: 63,
        number: "0063",
        title: "不同路径 II",
        difficulty: "medium",
        description: "一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 \"Start\" ）。\n机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 \"Finish\"）。\n现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？\n网格中的障碍物和空位置分别用 1 和 0 来表示。",
        example: "示例 1：\n输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]\n输出：2\n解释：3x3 网格的正中间有一个障碍物。\n从左上角到右下角一共有 2 条不同的路径：\n1. 向右 -> 向右 -> 向下 -> 向下\n2. 向下 -> 向下 -> 向右 -> 向右\n示例 2：\n输入：obstacleGrid = [[0,1],[0,0]]\n输出：1",
        solutions: [
            {
                name: "解法一",
                code: `func uniquePathsWithObstacles(a [][]int) int {
    n, m := len(a), len(a[0])
    f := make([][]int, n)
    for i := range f {
        f[i] = make([]int, m)
    }
    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            if a[i][j] == 0 {
                if i == 0 && j == 0 {
                    f[i][j] = 1
                } else {
                    if i != 0 {
                        f[i][j] += f[i - 1][j]
                    }
                    if j != 0 {
                        f[i][j] += f[i][j - 1]
                    }
                }
            }
        }
    }
    return f[n - 1][m - 1]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            },
            {
                name: "解法二",
                code: `func uniquePathsWithObstacles(a [][]int) int {
    n, m := len(a), len(a[0])
    f := make([]int, m)
    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            if a[i][j] == 1 {
                f[j] = 0
            } else if i == 0 && j == 0 {
                f[j] = 1
            } else if j != 0 {
                f[j] += f[j - 1]
            }
        }
    }
    return f[m - 1]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(m)"
            }
        ]
    },
    {
        id: 64,
        number: "0064",
        title: "最小路径和",
        difficulty: "medium",
        description: "给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。\n说明：每次只能向下或者向右移动一步。",
        example: "示例 1：\n输入：grid = [[1,3,1],[1,5,1],[4,2,1]]\n输出：7\n解释：因为路径 1→3→1→1→1 的总和最小\n示例 2：\n输入：grid = [[1,2,3],[4,5,6]]\n输出：12",
        solutions: [
            {
                name: "解法一",
                code: `func minPathSum(g [][]int) int {
    n, m := len(g), len(g[0])
    f := make([][]int, n)
    for i := range f {
        f[i] = make([]int, m)
    }
    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            f[i][j] = math.MaxInt
            if i == 0 && j == 0 {
                f[i][j] = g[i][j]
            } else {
                if i != 0 {
                    f[i][j] = f[i - 1][j] + g[i][j]
                }
                if j != 0 {
                    f[i][j] = min(f[i][j], f[i][j - 1] + g[i][j])
                }
            }
        }
    }
    return f[n - 1][m - 1]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            },
            {
                name: "解法二",
                code: `func minPathSum(g [][]int) int {
    n, m := len(g), len(g[0])
    f := make([]int, m)
    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            f[j] += g[i][j]
            if j != 0 {
                if i == 0 {
                    f[j] += f[j - 1]
                } else {
                    f[j] = min(f[j], f[j - 1] + g[i][j])
                }
            }
        }
    }
    return f[m - 1]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(m)"
            }
        ]
    },
    {
        id: 65,
        number: "0065",
        title: "有效数字",
        difficulty: "hard",
        description: "有效数字（按顺序）可以分成以下几个部分：\n1. 一个 小数 或者 整数\n2. （可选）一个 'e' 或 'E' ，后面跟着一个 整数\n小数（按顺序）可以分成以下几个部分：\n1. （可选）一个符号字符（'+' 或 '-'）\n2. 下述格式之一：\n   至少一位数字，后面跟着一个点 '.'\n   至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字\n   一个点 '.' ，后面跟着至少一位数字\n整数（按顺序）可以分成以下几个部分：\n1. （可选）一个符号字符（'+' 或 '-'）\n2. 至少一位数字\n部分有效数字列举如下：[\"2\", \"0089\", \"-0.1\", \"+3.14\", \"4.\", \"-.9\", \"2e10\", \"-90E3\", \"3e+7\", \"+6e-1\", \"53.5e93\", \"-123.456e789\"]\n部分无效数字列举如下：[\"abc\", \"1a\", \"1e\", \"e3\", \"99e2.5\", \"--6\", \"-+3\", \"95a54e53\"]\n给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true。",
        example: "示例 1：\n输入：s = \"0\"\n输出：true\n示例 2：\n输入：s = \"e\"\n输出：false\n示例 3：\n输入：s = \".\"\n输出：false",
        solutions: [
            {
                code: `func isNumber(s string) bool {
    if s[0] == '+' || s[0] == '-' {
        s = s[1:]
    }
    if len(s) == 0 {
        return false
    }

    if s[0] == '.' && (len(s) == 1 || s[1] == 'e' || s[1] == 'E') {
        return false
    }

    dot, e := 0, 0
    for i := 0; i < len(s); i++ {
        if s[i] == '.' {
            if dot > 0 || e > 0 {
                return false
            }
            dot++
        } else if s[i] == 'e' || s[i] == 'E' {
            if i == 0 || i == len(s) - 1 || e > 0 {
                return false
            }
            if s[i + 1] == '+' || s[i + 1] == '-' {
                if i == len(s) - 2 {
                    return false
                }
                i++
            }
            e++
        } else if s[i] < '0' || s[i] > '9' {
            return false
        }
    }
    return true
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            },
            {
                code: `func isNumber(s string) (n bool) {
    d, e := false, false
    for i, c := range s {
        if (c == '+' || c == '-') && (i == 0 || s[i - 1] == 'e' || s[i - 1] == 'E') {
            continue
        } else if (c == 'e' || c == 'E') && !e && n {
            e = true
            n = false
        } else if c == '.' && !d && !e {
            d = true
        } else if c >= '0' && c <= '9' {
            n = true
        } else {
            return false
        }
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 66,
        number: "0066",
        title: "加一",
        difficulty: "easy",
        description: "给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。\n最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。\n你可以假设除了整数 0 之外，这个整数不会以零开头。",
        example: "示例 1：\n输入：digits = [1,2,3]\n输出：[1,2,4]\n解释：输入数组表示数字 123。\n示例 2：\n输入：digits = [4,3,2,1]\n输出：[4,3,2,2]\n解释：输入数组表示数字 4321。\n示例 3：\n输入：digits = [0]\n输出：[1]",
        solutions: [
            {
                code: `func plusOne(digits []int) []int {
    for i := len(digits) - 1; i >= 0; i-- {
        digits[i]++
        if digits[i] != 10 {
            return digits
        }
        digits[i] = 0
    }
    digits = make([]int, len(digits) + 1)
    digits[0] = 1
    return digits
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 67,
        number: "0067",
        title: "二进制求和",
        difficulty: "easy",
        description: "给你两个二进制字符串，返回它们的和（用二进制表示）。\n输入为 非空 字符串且只包含数字 1 和 0。",
        example: "示例 1：\n输入: a = \"11\", b = \"1\"\n输出: \"100\"\n示例 2：\n输入: a = \"1010\", b = \"1011\"\n输出: \"10101\"",
        solutions: [
            {
                code: `func addBinary(a string, b string) (c string) {
    for i, j, t := len(a) - 1, len(b) - 1, 0; i >= 0 || j >= 0 || t != 0; i, j = i - 1, j - 1 {
        if i >= 0 {
            t += int(a[i] - '0')
        }
        if j >= 0 {
            t += int(b[j] - '0')
        }
        c = strconv.Itoa(t % 2) + c
        t /= 2
    }
    return
}`,
                timeComplexity: "O(max(m,n))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 68,
        number: "0068",
        title: "文本左右对齐",
        difficulty: "hard",
        description: "给定一个单词数组 words 和一个长度 maxWidth ，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。\n你应该使用 \"贪心算法\" 来放置单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。\n要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。\n文本的最后一行应为左对齐，且单词之间不插入额外的空格。\n注意:\n单词是指由非空格字符组成的字符序列。\n每个单词的长度大于 0，小于等于 maxWidth。\n输入单词数组 words 至少包含一个单词。",
        example: "示例 1：\n输入: words = [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"], maxWidth = 16\n输出:\n[\n   \"This    is    an\",\n   \"example  of text\",\n   \"justification.  \"\n]\n示例 2：\n输入:words = [\"What\",\"must\",\"be\",\"acknowledgment\",\"shall\",\"be\"], maxWidth = 16\n输出:\n[\n  \"What   must   be\",\n  \"acknowledgment  \",\n  \"shall be        \"\n]\n示例 3：\n输入:words = [\"Science\",\"is\",\"what\",\"we\",\"understand\",\"well\",\"enough\",\"to\",\"explain\",\"to\",\"a\",\"computer.\",\"Art\",\"is\",\"everything\",\"else\",\"we\",\"do\"]，maxWidth = 20\n输出:\n[\n  \"Science  is  what we\",\n  \"understand      well\",\n  \"enough to explain to\",\n  \"a  computer.  Art is\",\n  \"everything  else  we\",\n  \"do                  \"\n]",
        solutions: [
            {
                code: `func fullJustify(words []string, maxWidth int) (res []string) {
    for i := 0; i < len(words); i++ {
        j, l := i + 1, len(words[i])
        for j < len(words) && l + 1 + len(words[j]) <= maxWidth {
            l += 1 + len(words[j])
            j++
        }
        line := words[i]
        if j == len(words) || j == i + 1 {
            for k := i + 1; k < j; k++ {
                line += " " + words[k]
            }
            line += strings.Repeat(" ", maxWidth - len(line))
        } else {
            cnt := j - i - 1
            r, k := maxWidth - l + cnt, 0
            for k < r % cnt {
                line += strings.Repeat(" ", r / cnt + 1) + words[i + k + 1]
                k++
            }
            for k < cnt {
                line += strings.Repeat(" ", r / cnt) + words[i + k + 1]
                k++
            }
        }

        res = append(res, line)
        i = j - 1
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 69,
        number: "0069",
        title: "x 的平方根",
        difficulty: "easy",
        description: "给你一个非负整数 x ，计算并返回 x 的 算术平方根 。\n由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。\n注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。",
        example: "示例 1：\n输入：x = 4\n输出：2\n示例 2：\n输入：x = 8\n输出：2\n解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。",
        solutions: [
            {
                code: `func fullJustify(words []string, maxWidth int) (res []string) {
    for i := 0; i < len(words); i++ {
        j, l := i + 1, len(words[i])
        for j < len(words) && l + 1 + len(words[j]) <= maxWidth {
            l += 1 + len(words[j])
            j++
        }
        line := words[i]
        if j == len(words) || j == i + 1 {
            for k := i + 1; k < j; k++ {
                line += " " + words[k]
            }
            line += strings.Repeat(" ", maxWidth - len(line))
        } else {
            cnt := j - i - 1
            r, k := maxWidth - l + cnt, 0
            for k < r % cnt {
                line += strings.Repeat(" ", r / cnt + 1) + words[i + k + 1]
                k++
            }
            for k < cnt {
                line += strings.Repeat(" ", r / cnt) + words[i + k + 1]
                k++
            }
        }

        res = append(res, line)
        i = j - 1
    }
    return
}`,
                timeComplexity: "O(logx)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 70,
        number: "0070",
        title: "爬楼梯",
        difficulty: "easy",
        description: "假设你正在爬楼梯。需要 n 阶你才能到达楼顶。\n每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？",
        example: "示例 1：\n输入：n = 2\n输出：2\n解释：有两种方法可以爬到楼顶。\n1. 1 阶 + 1 阶\n2. 2 阶\n示例 2：\n输入：n = 3\n输出：3\n解释：有三种方法可以爬到楼顶。\n1. 1 阶 + 1 阶 + 1 阶\n2. 1 阶 + 2 阶\n3. 2 阶 + 1 阶",
        solutions: [
            {
                code: `func climbStairs(n int) int {
    a, b := 1, 1
    for i := 0; i < n - 1; i++ {
        a, b = b, a + b
    }
    return b
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 71,
        number: "0071",
        title: "简化路径",
        difficulty: "medium",
        description: "给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。\n在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。\n请注意，返回的 规范路径 必须遵循下述格式：\n始终以斜杠 '/' 开头。\n两个目录名之间必须只有一个斜杠 '/' 。\n最后一个目录名（如果存在）不能 以 '/' 结尾。\n此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。\n返回简化后得到的 规范路径。",
        example: "示例 1：\n输入：path = \"/home/\"\n输出：\"/home\"\n解释：注意，最后一个目录名后面没有斜杠。\n示例 2：\n输入：path = \"/../\"\n输出：\"/\"\n解释：从根目录向上一级是不可行的，因为根目录是你可以到达的最高级。\n示例 3：\n输入：path = \"/home//foo/\"\n输出：\"/home/foo\"\n解释：在规范路径中，多个连续斜杠需要用一个斜杠替换。\n示例 4：\n输入：path = \"/a/./b/../../c/\"\n输出：\"/c\"",
        solutions: [
            {
                code: `func simplifyPath(path string) (res string) {
    name := ""
    if path[len(path) - 1] != '/' {
        path += "/"
    }
    for _, c := range path {
        if c != '/' {
            name += string(c)
        } else {
            if name == ".." {
                for len(res) != 0 && res[len(res) - 1] != '/' {
                    res = res[:len(res) - 1]
                }
                if len(res) != 0 {
                    res = res[:len(res) - 1]
                }
            } else if name != "." && name != "" {
                res += "/" + name
            }
            name = ""
        }
    }

    if len(res) == 0 {
        res = "/"
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 72,
        number: "0072",
        title: "编辑距离",
        difficulty: "hard",
        description: "给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数 。\n你可以对一个单词进行如下三种操作：\n插入一个字符\n删除一个字符\n替换一个字符",
        example: "示例 1：\n输入：word1 = \"horse\", word2 = \"ros\"\n输出：3\n解释：\nhorse -> rorse (将 'h' 替换为 'r')\nrorse -> rose (删除 'r')\nrose -> ros (删除 'e')\n示例 2：\n输入：word1 = \"intention\", word2 = \"execution\"\n输出：5\n解释：\nintention -> inention (删除 't')\ninention -> enention (将 'i' 替换为 'e')\nenention -> exention (将 'n' 替换为 'x')\nexention -> exection (将 'n' 替换为 'c')\nexection -> execution (插入 'u')",
        solutions: [
            {
                code: `func minDistance(a string, b string) int {
    n, m := len(a), len(b)
    a, b = " " + a, " " + b
    f := make([][]int, n + 1)
    for i := range f {
        f[i] = make([]int, m + 1)
    }

    for i := 0; i <= n; i++ {
        f[i][0] = i
    }
    for i := 0; i <= m; i++ {
        f[0][i] = i
    }

    for i := 1; i <= n; i++ {
        for j := 1; j <= m; j++ {
            f[i][j] = min(f[i - 1][j], f[i][j - 1]) + 1
            t := 0
            if a[i] != b[j] {
                t = 1
            }
            f[i][j] = min(f[i][j], f[i - 1][j - 1] + t)
        }
    }

    return f[n][m]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            }
        ]
    },
    {
        id: 73,
        number: "0073",
        title: "矩阵置零",
        difficulty: "medium",
        description: "给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。",
        example: "示例 1：\n输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]\n输出：[[1,0,1],[0,0,0],[1,0,1]]\n示例 2：\n输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
        solutions: [
            {
                code: `func setZeroes(matrix [][]int)  {
    n, m := len(matrix), len(matrix[0])

    r0, c0 := 1, 1
    for i := 0; i < m; i++ {
        if matrix[0][i] == 0 {
            r0 = 0
        }
    }
    for i := 0; i < n; i++ {
        if matrix[i][0] == 0 {
            c0 = 0
        }
    }

    for i := 1; i < m; i++ {
        for j := 0; j < n; j++ {
            if matrix[j][i] == 0 {
                matrix[0][i] = 0
            }
        }
    }

    for i := 1; i < n; i++ {
        for j := 0; j < m; j++ {
            if matrix[i][j] == 0 {
                matrix[i][0] = 0
            }
        }
    }

    for i := 1; i < m; i++ {
        if matrix[0][i] == 0 {
            for j := 1; j < n; j++ {
                matrix[j][i] = 0
            }
        }
    }

    for i := 1; i < n; i++ {
        if matrix[i][0] == 0 {
            for j := 1; j < m; j++ {
                matrix[i][j] = 0
            }
        }
    }

    if r0 == 0 {
        for i := 0; i < m; i++ {
            matrix[0][i] = 0
        }
    }
    if c0 == 0 {
        for i := 0; i < n; i++ {
            matrix[i][0] = 0
        }
    }
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 74,
        number: "0074",
        title: "搜索二维矩阵",
        difficulty: "medium",
        description: "编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：\n每行中的整数从左到右按升序排列。\n每行的第一个整数大于前一行的最后一个整数。",
        example: "示例 1：\n输入：matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 5\n输出：true\n示例 2：\n输入：matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 3\n输出：false",
        solutions: [
            {
                code: `func searchMatrix(matrix [][]int, target int) bool {
    n, m := len(matrix), len(matrix[0])
    l, r := 0, n * m - 1
    for l < r {
        mid := l + (r - l) >> 1
        if matrix[mid / m][mid % m] >= target {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return matrix[r / m][r % m] == target
}`,
                timeComplexity: "O(log(mn))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 75,
        number: "0075",
        title: "颜色分类",
        difficulty: "medium",
        description: "给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。\n我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。\n必须在不使用库的sort函数的情况下解决这个问题。",
        example: "示例 1：\n输入：nums = [2,0,2,1,1,0]\n输出：[0,0,1,1,2,2]\n示例 2：\n输入：nums = [2,0,1]\n输出：[0,1,2]",
        solutions: [
            {
                code: `func sortColors(nums []int)  {
    i, j, k := 0, 0, len(nums) - 1
    for i <= k {
        if nums[i] == 0 {
            nums[i], nums[j] = nums[j], nums[i]
            i++
            j++
        } else if nums[i] == 2 {
            nums[i], nums[k] = nums[k], nums[i]
            k--
        } else {
            i++
        }
    }
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 76,
        number: "0076",
        title: "最小覆盖子串",
        difficulty: "hard",
        description: "给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 \"\"。\n注意：\n对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。\n如果 s 中存在这样的子串，我们保证它是唯一的答案。",
        example: "示例 1：\n输入：s = \"ADOBECODEBANC\", t = \"ABC\"\n输出：\"BANC\"\n解释：最小覆盖子串 \"BANC\" 包含来自字符串 t 的 'A'、'B' 和 'C'。\n示例 2：\n输入：s = \"a\", t = \"a\"\n输出：\"a\"\n示例 3：\n输入: s = \"a\", t = \"aa\"\n输出: \"\"\n解释: t 中两个字符 'a' 均应包含在 s 的子串中，\n因此没有符合条件的子字符串，返回空字符串。",
        solutions: [
            {
                code: `func minWindow(s string, t string) (res string) {
    ms, mt := make(map[byte]int), make(map[byte]int)
    for i := 0; i < len(t); i++ {
        mt[t[i]]++
    }

    cnt := 0
    for i, j := 0, 0; i < len(s); i++ {
        ms[s[i]]++
        if ms[s[i]] <= mt[s[i]] {
            cnt++
        }

        for j <= i && ms[s[j]] > mt[s[j]] {
            ms[s[j]]--
            j++
        }
        if cnt == len(t) {
            if res == "" || i - j + 1 < len(res) {
                res = s[j : i + 1]
            }
        }
    }

    return
}`,
                timeComplexity: "O(m+n)",
                spaceComplexity: "O(m+n)"
            }
        ]
    },
    {
        id: 77,
        number: "0077",
        title: "组合",
        difficulty: "medium",
        description: "给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。\n你可以按 任何顺序 返回答案。",
        example: "示例 1：\n输入：n = 4, k = 2\n输出：\n[\n  [2,4],\n  [3,4],\n  [2,3],\n  [1,2],\n  [1,3],\n  [1,4],\n]\n示例 2：\n输入：n = 1, k = 1\n输出：[[1]]",
        solutions: [
            {
                name: "解法一",
                code: `func combine(n int, k int) (res [][]int) {
    path := []int{}

    var dfs func(int, int)
    dfs = func(u, start int) {
        if u == 0 {
            t := make([]int, k)
            copy(t, path)
            res = append(res, t)
            return
        }

        for i := start; i + u - 1 <= n; i++ {
            path = append(path, i)
            dfs(u - 1, i + 1)
            path = path[:len(path) - 1]
        }
    }
    dfs(k, 1)
    return
}`,
                timeComplexity: "O(C(n,k))",
                spaceComplexity: "O(k)"
            },
            {
                name: "解法二",
                code: `func combine(n int, k int) (res [][]int) {
    path := make([]int, k)
    var dfs func(int)
    dfs = func(u int) {
        if u == k {
            t := make([]int, len(path))
            copy(t, path)
            res = append(res, t)
            return
        }
        for i := path[u - 1] + 1; i + u - 1 < n - k; i++ {
            path[u] = i
            dfs(u + 1)
        }
    }
    for i := 1; i <= n - k + 1; i++ {
        path[0] = i
        dfs(1)
    }
    return
}`,
                timeComplexity: "O(C(n,k))",
                spaceComplexity: "O(k)"
            },
            {
                name: "解法三",
                code: `func combine(n int, k int) (res [][]int) {
    path := []int{}
    var dfs func(int)
    dfs = func(u int) {
        if len(path) + n - u + 1 < k {
            return
        }

        if len(path) == k {
            t := make([]int, k)
            copy(t, path)
            res = append(res, t)
            return
        }

        dfs(u + 1)
        path = append(path, u)
        dfs(u + 1)
        path = path[:len(path) - 1]
    }
    dfs(1)

    return
}`,
                timeComplexity: "O(C(n,k))",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 78,
        number: "0078",
        title: "子集",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。\n解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。",
        example: "示例 1：\n输入：nums = [1,2,3]\n输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n示例 2：\n输入：nums = [0]\n输出：[[],[0]]",
        solutions: [
            {
                name: "解法一",
                code: `func subsets(nums []int) (res [][]int) {
    n := len(nums)
    for i := 0; i < 1 << n; i++ {
        path := []int{}
        for j := 0; j < n; j++ {
            if i >> j & 1 == 1 {
                path = append(path, nums[j])
            }
        }
        res = append(res, path)
    }

    return
}`,
                timeComplexity: "O(2ⁿ)",
                spaceComplexity: "O(2ⁿ)"
            },
            {
                name: "解法二",
                code: `func subsets(nums []int) (res [][]int) {
    path := []int{}
    var dfs func(int)
    dfs = func(u int) {
        if u == len(nums) {
            t := make([]int, len(path))
            copy(t, path)
            res = append(res, t)
            return
        }

        dfs(u + 1)
        path = append(path, nums[u])
        dfs(u + 1)
        path = path[:len(path) - 1]
    }
    dfs(0)

    return
}`,
                timeComplexity: "O(2ⁿ)",
                spaceComplexity: "O(2ⁿ)"
            }
        ]
    },
    {
        id: 79,
        number: "0079",
        title: "单词搜索",
        difficulty: "medium",
        description: "给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。\n单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中\"相邻\"单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。",
        example: "示例 1：\n输入：board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"\n输出：true\n示例 2：\n输入：board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"\n输出：true\n示例 3：\n输入：board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\"\n输出：false",
        solutions: [
            {
                code: `func exist(board [][]byte, word string) bool {
    n, m := len(board), len(board[0])
    dx, dy := []int{0, 1, 0, -1}, []int{-1, 0, 1, 0}
    var dfs func(int, int, int) bool
    dfs = func(u, x, y int) bool {
        if board[x][y] != word[u] {
            return false
        }
        if u == len(word) - 1 {
            return true
        }

        t := board[x][y]
        for i := 0; i < 4; i++ {
            a, b := x + dx[i], y + dy[i]
            if a < 0 || a >= n || b < 0 || b >= m || board[a][b] == '.' {
                continue
            }
            board[x][y] = '.'
            if dfs(u + 1, a, b) {
                return true
            }
            board[x][y] = t
        }
        return false
    }
    for i := range board {
        for j := range board[0] {
            if dfs(0, i, j) {
                return true
            }
        }
    }
    return false
}`,
                timeComplexity: "O(mn4ᵏ)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 80,
        number: "0080",
        title: "删除有序数组中的重复项 II",
        difficulty: "medium",
        description: "给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。\n不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。",
        example: "示例 1：\n输入：nums = [1,1,1,2,2,3]\n输出：5, nums = [1,1,2,2,3]\n解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。\n示例 2：\n输入：nums = [0,0,1,1,1,1,2,3,3]\n输出：7, nums = [0,0,1,1,2,3,3]\n解释：函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3。 不需要考虑数组中超出新长度后面的元素。",
        solutions: [
            {
                code: `func removeDuplicates(nums []int) (k int) {
    for _, x := range nums {
        if k < 2 || nums[k - 2] != x {
            nums[k] = x
            k++
        }
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 81,
        number: "0081",
        title: "搜索旋转排序数组 II",
        difficulty: "medium",
        description: "已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。\n在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。\n给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。\n你必须尽可能减少整个操作步骤。",
        example: "示例 1：\n输入：nums = [2,5,6,0,0,1,2], target = 0\n输出：true\n示例 2：\n输入：nums = [2,5,6,0,0,1,2], target = 3\n输出：false",
        solutions: [
            {
                code: `func search(nums []int, target int) bool {
    R := len(nums) - 1
    for R >= 0 && nums[R] == nums[0] {
        R--
    }
    if R < 0 {
        return nums[0] == target
    }

    l, r := 0, R
    for l < r {
        m := l + (r - l + 1) >> 1
        if nums[m] >= nums[0] {
            l = m
        } else {
            r = m - 1
        }
    }

    if target >= nums[0] {
        l = 0
    } else {
        l, r = l + 1, R
    }

    for l < r {
        m := l + (r - l) >> 1
        if nums[m] >= target {
            r = m
        } else {
            l = m + 1
        }
    }

    return nums[r] == target
}`,
                timeComplexity: "O(logn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 82,
        number: "0082",
        title: "删除排序链表中的重复元素 II",
        difficulty: "medium",
        description: "给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。",
        example: "示例 1：\n输入：head = [1,2,3,3,4,4,5]\n输出：[1,2,5]\n示例 2：\n输入：head = [1,1,1,2,3]\n输出：[2,3]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    dummy := &ListNode{}
    dummy.Next = head
    p := dummy
    for p.Next != nil {
        q := p.Next.Next
        for q != nil && q.Val == p.Next.Val {
            q = q.Next
        }
        if p.Next.Next == q {
            p = p.Next
        } else {
            p.Next = q
        }
    }
    return dummy.Next
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 83,
        number: "0083",
        title: "删除排序链表中的重复元素",
        difficulty: "easy",
        description: "给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。",
        example: "示例 1：\n输入：head = [1,1,2]\n输出：[1,2]\n示例 2：\n输入：head = [1,1,2,3,3]\n输出：[1,2,3]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    if head == nil {
        return nil
    }
    cur := head
    for p := head.Next; p != nil; p = p.Next {
        if p.Val != cur.Val {
            cur, cur.Next = p, p
        }
    }

    cur.Next = nil
    return head
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 84,
        number: "0084",
        title: "柱状图中最大的矩形",
        difficulty: "hard",
        description: "给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。\n求在该柱状图中，能够勾勒出来的矩形的最大面积。",
        example: "示例 1：\n输入：heights = [2,1,5,6,2,3]\n输出：10\n解释：最大的矩形为图中红色区域，面积为 10\n示例 2：\n输入： heights = [2,4]\n输出： 4",
        solutions: [
            {
                name: "解法一",
                code: `func largestRectangleArea(h []int) int {
    n := len(h)
    l, r := make([]int, n), make([]int, n)
    stk := []int{}

    for i := 0; i < n; i++ {
        for len(stk) != 0 && h[stk[len(stk) - 1]] >= h[i] {
            stk = stk[:len(stk) - 1]
        }
        if len(stk) == 0 {
            l[i] = -1
        } else {
            l[i] = stk[len(stk) - 1]
        }
        stk = append(stk, i)
    }

    stk = []int{}
    for i := n - 1; i >= 0; i-- {
        for len(stk) != 0 && h[stk[len(stk) - 1]] >= h[i] {
            stk = stk[:len(stk) - 1]
        }
        if len(stk) == 0 {
            r[i] = n
        } else {
            r[i] = stk[len(stk) - 1]
        }
        stk = append(stk, i)
    }

    res := 0
    for i := 0; i < n; i++ {
        res = max(res, h[i] * (r[i] - l[i] - 1))
    }

    return res
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            },
            {
                name: "解法二",
                code: `func largestRectangleArea(h []int) (res int) {
    n := len(h)
    stk := []int{}

    h = append(h, 0)
    for r := 0; r <= n; r++ {
        for len(stk) > 0 && h[stk[len(stk) - 1]] >= h[r] {
            x := h[stk[len(stk) - 1]]
            stk = stk[:len(stk) - 1]
            l := -1
            if len(stk) > 0 {
                l = stk[len(stk) - 1]
            }
            res = max(res, x * (r - l - 1))
        }
        stk = append(stk, r)
    }

    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 85,
        number: "0085",
        title: "最大矩形",
        difficulty: "hard",
        description: "给定一个仅包含 0 和 1 、大小为 rows x cols 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。",
        example: "示例 1：\n输入：matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]\n输出：6\n解释：最大矩形如上图所示。\n示例 2：\n输入：matrix = []\n输出：0\n示例 3：\n输入：matrix = [[\"0\"]]\n输出：0\n示例 4：\n输入：matrix = [[\"1\"]]\n输出：1\n示例 5：\n输入：matrix = [[\"0\",\"0\"]]\n输出：0",
        solutions: [
            {
                code: `func maximalRectangle(matrix [][]byte) int {
    n, m := len(matrix), len(matrix[0])

    h := make([][]int, n)
    for i := range h {
        h[i] = make([]int, m)
    }
    for i := 0; i < n; i++ {
        for j := 0; j < m; j++ {
            if matrix[i][j] == '1' {
                h[i][j] = 1
                if i > 0 {
                    h[i][j] += h[i - 1][j]
                }
            }
        }
    }

    res := 0
    for i := 0; i < n; i++ {
        res = max(res, largestRectangleArea(h[i]))
    }
}

func largestRectangleArea(h []int) int {
    n := len(h)
    l, r := make([]int, n), make([]int, n)
    stk := []int{}

    for i := 0; i < n; i++ {
        for len(stk) != 0 && h[stk[len(stk) - 1]] >= h[i] {
            stk = stk[:len(stk) - 1]
        }
        if len(stk) == 0 {
            l[i] = -1
        } else {
            l[i] = stk[len(stk) - 1]
        }
        stk = append(stk, i)
    }

    stk = []int{}
    for i := n - 1; i >= 0; i-- {
        for len(stk) != 0 && h[stk[len(stk) - 1]] >= h[i] {
            stk = stk[:len(stk) - 1]
        }
        if len(stk) == 0 {
            r[i] = n
        } else {
            r[i] = stk[len(stk) - 1]
        }
        stk = append(stk, i)
    }

    res := 0
    for i := 0; i < n; i++ {
        res = max(res, h[i] * (r[i] - l[i] - 1))
    }

    return res
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 86,
        number: "0086",
        title: "分隔链表",
        difficulty: "medium",
        description: "给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。\n你应当 保留 两个分区中每个节点的初始相对位置。",
        example: "示例 1：\n输入：head = [1,4,3,2,5,2], x = 3\n输出：[1,2,2,4,3,5]\n示例 2：\n输入：head = [2,1], x = 2\n输出：[1,2]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func partition(head *ListNode, x int) *ListNode {
    lh, rh := &ListNode{}, &ListNode{}
    lt, rt := lh, rh

    for p := head; p != nil; p = p.Next {
        if p.Val < x {
            lt, lt.Next = p, p
        } else {
            rt, rt.Next = p, p
        }
    }

    lt.Next = rh.Next
    rt.Next = nil

    return lh.Next
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 87,
        number: "0087",
        title: "扰乱字符串",
        difficulty: "hard",
        description: "使用下面描述的算法可以扰乱字符串 s 得到字符串 t ：\n如果字符串的长度为 1 ，算法停止\n如果字符串的长度 > 1 ，执行下述步骤：\n在一个随机下标处将字符串分割成两个非空的子字符串。即，如果已知字符串 s ，则可以将其分成两个子字符串 x 和 y ，且满足 s = x + y 。\n随机 决定是要「交换两个子字符串」还是要「保持这两个子字符串的顺序不变」。即，在这一步之后，s 可能是 s = x + y 或者 s = y + x 。\n在 x 和 y 这两个子字符串上继续从步骤 1 开始递归执行此算法。\n给你两个 长度相等 的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。如果是，返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：s1 = \"great\", s2 = \"rgeat\"\n输出：true\n解释：s1 上可能发生的一种情形是：\n\"great\" --> \"gr/eat\" // 在一个随机下标处分割得到两个子字符串\n\"gr/eat\" --> \"gr/eat\" // 随机决定：「保持这两个子字符串的顺序不变」\n\"gr/eat\" --> \"g/r + e/at\" // 在子字符串上递归执行此算法。两个子字符串分别在随机下标处进行一轮分割\n\"g/r + e/at\" --> \"r/g + e/at\" // 随机决定：第一组「交换两个子字符串」，第二组「保持这两个子字符串的顺序不变」\n\"r/g + e/at\" --> \"r/g + e/a/t\" // 继续递归执行此算法，将 \"at\" 分割得到 \"a/t\"\n\"r/g + e/a/t\" --> \"r/g + a/e/t\" // 随机决定：「保持这两个子字符串的顺序不变」\n算法终止，结果字符串和 s2 相同，都是 \"rgeat\"\n这是一种能够扰乱 s1 得到 s2 的情形，可以认为 s2 是 s1 的扰乱字符串，返回 true\n示例 2：\n输入：s1 = \"abcde\", s2 = \"caebd\"\n输出：false\n示例 3：\n输入：s1 = \"a\", s2 = \"a\"\n输出：true",
        solutions: [
            {
                name: "解法一",
                code: `func isScramble(s1 string, s2 string) bool {
    if s1 == s2 {
        return true
    }
    bs1, bs2 := []rune(s1), []rune(s2)
    sort.Slice(bs1, func(i, j int) bool {
        return bs1[i] < bs1[j]
    })
    sort.Slice(bs2, func(i, j int) bool {
        return bs2[i] < bs2[j]
    })

    if string(bs1) != string(bs2) {
        return false
    }

    n := len(s1)
    for i := 1; i < n; i++ {
        if isScramble(s1[0 : i], s2[0 : i]) && isScramble(s1[i:], s2[i:]) {
            return true
        }
        if isScramble(s1[0 : i], s2[n - i:]) && isScramble(s1[i:], s2[0 : n - i]) {
            return true
        }
    }

    return false
}`,
                timeComplexity: "O(5ⁿ)",
                spaceComplexity: "O(n)"
            },
            {
                name: "解法二",
                code: `func isScramble(s1 string, s2 string) bool {
    n := len(s1)
    f := make([][][]bool, n)
    for i := range f {
        f[i] = make([][]bool, n)
        for j := range f[i] {
            f[i][j] = make([]bool, n + 1)
        }
    }
    for k := 1; k <= n; k++ {
        for i := 0; i + k - 1 < n; i++ {
            for j := 0; j + k - 1 < n; j++ {
                if k == 1 {
                    f[i][j][k] = s1[i] == s2[j]
                } else {
                    for u := 1; u < k; u++ {
                        if f[i][j][u] && f[i + u][j + u][k - u] || f[i][j + k - u][u] && f[i + u][j][k - u] {
                            f[i][j][k] = true
                            break
                        }
                    }
                }
            }
        }
    }
    return f[0][0][n]
}`,
                timeComplexity: "O(n⁴)",
                spaceComplexity: "O(n³)"
            }
        ]
    },
    {
        id: 88,
        number: "0088",
        title: "合并两个有序数组",
        difficulty: "easy",
        description: "给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。\n请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。\n注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。",
        example: "示例 1：\n输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\n输出：[1,2,2,3,5,6]\n解释：需要合并 [1,2,3] 和 [2,5,6] 。\n合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。\n示例 2：\n输入：nums1 = [1], m = 1, nums2 = [], n = 0\n输出：[1]\n解释：需要合并 [1] 和 [] 。\n合并结果是 [1] 。\n示例 3：\n输入：nums1 = [0], m = 0, nums2 = [1], n = 1\n输出：[1]\n解释：需要合并的数组是 [] 和 [1] 。\n合并结果是 [1] 。\n注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。",
        solutions: [
            {
                code: `func merge(nums1 []int, m int, nums2 []int, n int)  {
    k, i, j := n + m - 1, n - 1, m - 1
    for i >= 0 && j >= 0 {
        if nums1[i] >= nums2[j] {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }

    for j >= 0 {
        nums1[k] = nums2[j]
        j--
        k--
    }
}`,
                timeComplexity: "O(m+n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 89,
        number: "0089",
        title: "格雷编码",
        difficulty: "medium",
        description: "n 位格雷码序列 是一个由 2n 个整数组成的序列，其中：\n每个整数都在范围 [0, 2n - 1] 内（含 0 和 2n - 1）\n第一个整数是 0\n一个整数在序列中出现 不超过一次\n每对 相邻 整数的二进制表示 恰好一位不同 ，且\n第一个 和 最后一个 整数的二进制表示 恰好一位不同\n给你一个整数 n ，返回任一有效的 n 位格雷码序列。",
        example: "示例 1：\n输入：n = 2\n输出：[0,1,3,2]\n解释：\n[0,1,3,2] 的二进制表示是 [00,01,11,10] 。\n- 00 和 01 有一位不同\n- 01 和 11 有一位不同\n- 11 和 10 有一位不同\n- 10 和 00 有一位不同\n[0,2,3,1] 也是一个有效的格雷码序列，其二进制表示是 [00,10,11,01] 。\n- 00 和 10 有一位不同\n- 10 和 11 有一位不同\n- 11 和 01 有一位不同\n- 01 和 00 有一位不同\n示例 2：\n输入：n = 1\n输出：[0,1]",
        solutions: [
            {
                code: `func grayCode(n int) []int {
    res := []int{0, 1}
    for i := 0; i < n - 1; i++ {
        for j := len(res) - 1; j >= 0; j-- {
            res[j] *= 2
            res = append(res, res[j] + 1)
        }
    }
    return res
}`,
                timeComplexity: "O(2ⁿ)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 90,
        number: "0090",
        title: "子集 II",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。\n解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。",
        example: "示例 1：\n输入：nums = [1,2,2]\n输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]\n示例 2：\n输入：nums = [0]\n输出：[[],[0]]",
        solutions: [
            {
                code: `func subsetsWithDup(nums []int) (res [][]int) {
    sort.Ints(nums)
    path := []int{}
    var dfs func(int)
    dfs = func(u int) {
        if u == len(nums) {
            t := make([]int, len(path))
            copy(t, path)
            res = append(res, t)
            return
        }

        k := u + 1
        for k < len(nums) && nums[k] == nums[u] {
            k++
        }

        for i := 0; i <= k - u; i++ {
            dfs(k)
            path = append(path, nums[u])
        }

        path = path[:len(path) - (k - u + 1)]
    }
    dfs(0)
    return
}`,
                timeComplexity: "O(2ⁿ)",
                spaceComplexity: "O(2ⁿ)"
            }
        ]
    },
    {
        id: 91,
        number: "0091",
        title: "解码方法",
        difficulty: "medium",
        description: "一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：\n'A' -> \"1\"\n'B' -> \"2\"\n...\n'Z' -> \"26\"\n要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如 \"11106\" 可以映射为：\n\"AAJF\" ，将消息分组为 (1 1 10 6)\n\"KJF\" ，将消息分组为 (11 10 6)\n注意，消息不能分组为  (1 11 06) ，因为 \"06\" 不能映射为 \"F\" ，这是由于 \"6\" 和 \"06\" 在映射中并不等价。\n给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。\n题目数据保证答案肯定是一个 32 位 的整数。",
        example: "示例 1：\n输入：s = \"12\"\n输出：2\n解释：它可以解码为 \"AB\"（1 2）或者 \"L\"（12）。\n示例 2：\n输入：s = \"226\"\n输出：3\n解释：它可以解码为 \"BZ\" (2 26), \"VF\" (22 6), 或者 \"BBF\" (2 2 6) 。\n示例 3：\n输入：s = \"0\"\n输出：0\n解释：没有字符映射到以 0 开头的数字。\n含有 0 的有效映射是 'J' -> \"10\" 和 'T'-> \"20\" 。\n由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。",
        solutions: [
            {
                code: `func numDecodings(s string) int {
    n := len(s)
    s = " " + s
    f := make([]int, n + 1)
    f[0] = 1
    for i := 1; i <= n; i++ {
        if s[i] != '0' {
            f[i] = f[i - 1]
        }
        if i > 1 {
            t := (s[i - 1] - '0') * 10 + (s[i] - '0')
            if t >= 10 && t <= 26 {
                f[i] += f[i - 2]
            }
        }
    }
    return f[n]
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 92,
        number: "0092",
        title: "反转链表 II",
        difficulty: "medium",
        description: "给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表。",
        example: "示例 1：\n输入：head = [1,2,3,4,5], left = 2, right = 4\n输出：[1,4,3,2,5]\n示例 2：\n输入：head = [5], left = 1, right = 1\n输出：[5]",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseBetween(head *ListNode, left int, right int) *ListNode {
    dummy := &ListNode{}
    dummy.Next = head
    a := dummy
    for i := 0; i < left - 1; i++ {
        a = a.Next
    }
    b := a.Next
    c := b.Next
    for i := 0; i < right - left; i++ {
        c.Next, b, c = b, c, c.Next
    }
    a.Next.Next, a.Next = c, b
    return dummy.Next
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 93,
        number: "0093",
        title: "复原 IP 地址",
        difficulty: "medium",
        description: "有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。\n例如：\"0.1.2.201\" 和 \"192.168.1.1\" 是 有效 IP 地址，但是 \"0.011.255.245\"、\"192.168.1.312\" 和 \"192.168@1.1\" 是 无效 IP 地址。\n给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。",
        example: "示例 1：\n输入：s = \"25525511135\"\n输出：[\"255.255.11.135\",\"255.255.111.35\"]\n示例 2：\n输入：s = \"0000\"\n输出：[\"0.0.0.0\"]\n示例 3：\n输入：s = \"101023\"\n输出：[\"1.0.10.23\",\"1.0.102.3\",\"10.1.0.23\",\"10.10.2.3\",\"101.0.2.3\"]",
        solutions: [
            {
                code: `func restoreIpAddresses(s string) (res []string) {
    var dfs func(int, int, string)
    dfs = func(u, k int, path string) {
        if u == len(s) {
            if k == 4 {
                res = append(res, path[:len(path) - 1])
            }
            return
        }
        if k == 4 {
            return
        }
        for i, t := u, 0; i < len(s); i++ {
            if i > u && s[u] == '0' {
                break
            }
            t = t * 10 + int(s[i] - '0')
            if t <= 255 {
                dfs(i + 1, k + 1, path + strconv.Itoa(t) + ".")
            } else {
                break
            }
        }
    }
    dfs(0, 0, "")
    return
}`,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 94,
        number: "0094",
        title: "二叉树的中序遍历",
        difficulty: "easy",
        description: "给定一个二叉树的根节点 root ，返回 它的 中序 遍历。",
        example: "示例 1：\n输入：root = [1,null,2,3]\n输出：[1,3,2]\n示例 2：\n输入：root = []\n输出：[]\n示例 3：\n输入：root = [1]\n输出：[1]",
        solutions: [
            {
                name: "解法一",
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) (res []int) {
    var dfs func(*TreeNode)
    dfs = func(root *TreeNode) {
        if root == nil {
            return
        }
        dfs(root.Left)
        res = append(res, root.Val)
        dfs(root.Right)
    }
    dfs(root)
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            },
            {
                name: "解法二",
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type pair struct {
    state bool
    Node *TreeNode
}

func inorderTraversal(root *TreeNode) (res []int) {
    stk := []pair{pair{false, root}}
    for len(stk) != 0 {
        p := stk[len(stk) - 1]
        stk = stk[:len(stk) - 1]
        if p.Node == nil {
            continue
        }
        if p.state {
            res = append(res, p.Node.Val)
        } else {
            stk = append(stk, pair{false, p.Node.Right})
            stk = append(stk, pair{true, p.Node})
            stk = append(stk, pair{false, p.Node.Left})
        }
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            },
            {
                name: "解法三",
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type pair struct {
    Node *TreeNode
    State int
}

func inorderTraversal(root *TreeNode) (res []int) {
    stk := []pair{}
    stk = append(stk, pair{root, 0})
    for len(stk) != 0 {
        if stk[len(stk) - 1].Node == nil {
            stk = stk[:len(stk) - 1]
            continue
        }
        t := stk[len(stk) - 1].State
        if t == 0 {
            stk[len(stk) - 1].State = 1
            stk = append(stk, pair{stk[len(stk) - 1].Node.Left, 0})
        } else if t == 1 {
            res = append(res, stk[len(stk) - 1].Node.Val)
            stk[len(stk) - 1].State = 2
            stk = append(stk, pair{stk[len(stk) - 1].Node.Right, 0})
        } else {
            stk = stk[:len(stk) - 1]
        }
    }
    return res
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            },
            {
                name: "解法四",
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) (res []int) {
    stk := []*TreeNode{}

    for root != nil || len(stk) != 0 {
        for root != nil {
            stk = append(stk, root)
            root = root.Left
        }
        
        root = stk[len(stk) - 1]
        stk = stk[:len(stk) - 1]
        res = append(res, root.Val)
        root = root.Right
    }

    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            },
            {
                name: "解法五：Morris",
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) (res []int) {
    for root != nil {
        if root.Left == nil {
            res = append(res, root.Val)
            root = root.Right
        } else {
            p := root.Left
            for p.Right != nil && p.Right != root {
                p = p.Right
            }
            if p.Right == nil {
                p.Right, root = root, root.Left
            } else {
                p.Right = nil
                res = append(res, root.Val)
                root = root.Right
            }
        }
    }

    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 95,
        number: "0095",
        title: "不同的二叉搜索树 II",
        difficulty: "medium",
        description: "给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。",
        example: "示例 1：\n输入：n = 3\n输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]\n示例 2：\n输入：n = 1\n输出：[[1]]",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func generateTrees(n int) []*TreeNode {
    var dfs func(int, int) []*TreeNode
    dfs = func(l, r int) (res []*TreeNode) {
        if l > r {
            return []*TreeNode{nil}
        }

        for i := l; i <= r; i++ {
            left, right := dfs(l, i - 1), dfs(i + 1, r)
            for j := range left {
                for k := range right {
                    root := &TreeNode{Val: i, Left: left[j], Right: right[k]}
                    res = append(res, root)
                }
            }
        }

        return
    }

    return dfs(1, n)
}`,
                timeComplexity: "O(4ⁿ/√n)",
                spaceComplexity: "O(4ⁿ/√n)"
            }
        ]
    },
    {
        id: 96,
        number: "0096",
        title: "不同的二叉搜索树",
        difficulty: "medium",
        description: "给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。",
        example: "示例 1：\n输入：n = 3\n输出：5\n示例 2：\n输入：n = 1\n输出：1",
        solutions: [
            {
                code: `func numTrees(n int) int {
    f := make([]int, n + 1)
    f[0] = 1
    for i := 1; i <= n; i++ {
        for j := 1; j <= i; j++ {
            f[i] += f[j - 1] * f[i - j]
        }
    }
    return f[n]
}`,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 97,
        number: "0097",
        title: "交错字符串",
        difficulty: "medium",
        description: "给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。\n两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：\ns = s1 + s2 + ... + sn\nt = t1 + t2 + ... + tm\n|n - m| <= 1\n交错 是 s1 + t1 + s2 + t2 + ... 或 t1 + s1 + t2 + s2 + ...\n注意：a + b 意味着字符串 a 和 b 连接。",
        example: "示例 1：\n输入：s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"\n输出：true\n示例 2：\n输入：s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\"\n输出：false\n示例 3：\n输入：s1 = \"\", s2 = \"\", s3 = \"\"\n输出：true",
        solutions: [
            {
                code: `func isInterleave(s1 string, s2 string, s3 string) bool {
    n, m := len(s1), len(s2)
    if len(s3) != n + m {
        return false
    }

    f := make([][]bool, n + 1)
    for i := range f {
        f[i] = make([]bool, m + 1)
    }
    s1, s2, s3 = " " + s1, " " + s2, " " + s3
    for i := 0; i <= n; i++ {
        for j := 0; j <= m; j++ {
            if i == 0 && j == 0 {
                f[i][j] = true
            } else {
                if i != 0 && s1[i] == s3[i + j] {
                    f[i][j] = f[i - 1][j];
                }
                if j != 0 && s2[j] == s3[i + j] {
                    f[i][j] = f[i][j] || f[i][j - 1]
                }
            }
        }
    }

    return f[n][m]
}`,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            }
        ]
    },
    {
        id: 98,
        number: "0098",
        title: "验证二叉搜索树",
        difficulty: "medium",
        description: "给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。\n有效 二叉搜索树定义如下：\n节点的左子树只包含 小于 当前节点的数。\n节点的右子树只包含 大于 当前节点的数。\n所有左子树和右子树自身必须也是二叉搜索树。",
        example: "示例 1：\n输入：root = [2,1,3]\n输出：true\n示例 2：\n输入：root = [5,1,4,null,null,3,6]\n输出：false\n解释：根节点的值是 5 ，但是右子节点的值是 4。",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isValidBST(root *TreeNode) bool {
    var dfs func(*TreeNode) []int
    dfs = func(root *TreeNode) []int {
        res := []int{1, root.Val, root.Val}
        if root.Left != nil {
            t := dfs(root.Left)
            if t[0] == 0 || t[2] >= root.Val {
                res[0] = 0
            }
            res[1] = min(res[1], t[1])
        }
        if root.Right != nil {
            t := dfs(root.Right)
            if t[0] == 0 || t[1] <= root.Val {
                res[0] = 0
            }
            res[2] = max(res[2], t[2])
        }
        return res
    }

    return dfs(root)[0] == 1
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 99,
        number: "0099",
        title: "恢复二叉搜索树",
        difficulty: "hard",
        description: "给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树。",
        example: "示例 1：\n输入：root = [1,3,null,null,2]\n输出：[3,1,null,null,2]\n解释：3 不能是 1 的左子节点，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。\n示例 2：\n输入：root = [3,1,4,null,null,2]\n输出：[2,1,4,null,null,3]\n解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func recoverTree(root *TreeNode)  {
    var first, second, last *TreeNode
    for root != nil {
        if root.Left == nil {
            if last != nil && last.Val > root.Val {
                if first == nil {
                    first, second = last, root
                } else {
                    second = root
                }
            }
            last, root = root, root.Right
        } else {
            p := root.Left
            for p.Right != nil && p.Right != root {
                p = p.Right
            }
            if p.Right == nil {
                p.Right, root = root, root.Left
            } else {
                p.Right = nil
                if last != nil && last.Val > root.Val {
                    if first == nil {
                        first, second = last, root
                    } else {
                        second = root
                    }
                }
                last, root = root, root.Right
            }
        }
    }

    first.Val, second.Val = second.Val, first.Val
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 100,
        number: "0100",
        title: "相同的树",
        difficulty: "easy",
        description: "给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。\n如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。",
        example: "示例 1：\n输入：p = [1,2,3], q = [1,2,3]\n输出：true\n示例 2：\n输入：p = [1,2], q = [1,null,2]\n输出：false\n示例 3：\n输入：p = [1,2,1], q = [1,1,2]\n输出：false",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSameTree(p *TreeNode, q *TreeNode) bool {
    if p == nil && q == nil {
        return true
    }
    if p == nil || q == nil || p.Val != q.Val {
        return false
    }
    return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
}`,
                timeComplexity: "O(min(m,n))",
                spaceComplexity: "O(min(m,n))"
            }
        ]
    },
    {
        id: 101,
        number: "0101",
        title: "对称二叉树",
        difficulty: "easy",
        description: "给你一个二叉树的根节点 root ， 检查它是否轴对称。",
        example: "示例 1：\n输入：root = [1,2,2,3,4,4,3]\n输出：true\n示例 2：\n输入：root = [1,2,2,null,3,null,3]\n输出：false",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    var dfs func(p, q *TreeNode) bool
    dfs = func(p, q *TreeNode) bool {
        if p == nil && q == nil {
            return true
        }
        if p == nil || q == nil || p.Val != q.Val {
            return false
        }
        return dfs(p.Left, q.Right) && dfs(p.Right, q.Left)
    }
    return dfs(root.Left, root.Right)
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 102,
        number: "0102",
        title: "二叉树的层序遍历",
        difficulty: "medium",
        description: "给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。",
        example: "示例 1：\n输入：root = [3,9,20,null,null,15,7]\n输出：[[3],[9,20],[15,7]]\n示例 2：\n输入：root = [1]\n输出：[[1]]\n示例 3：\n输入：root = []\n输出：[]",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) (res [][]int) {
    q := []*TreeNode{}
    if root != nil {
        q = append(q, root)
    }

    for len(q) != 0 {
        level := []int{}
        l := len(q)

        for i := 0; i < l; i++ {
            t := q[0]
            q = q[1:]
            level = append(level, t.Val)
            if t.Left != nil {
                q = append(q, t.Left)
            }
            if t.Right != nil {
                q = append(q, t.Right)
            }
        }

        res = append(res, level)
    }

    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 103,
        number: "0103",
        title: "二叉树的锯齿形层序遍历",
        difficulty: "medium",
        description: "给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。",
        example: "示例 1：\n输入：root = [3,9,20,null,null,15,7]\n输出：[[3],[20,9],[15,7]]\n示例 2：\n输入：root = [1]\n输出：[[1]]\n示例 3：\n输入：root = []\n输出：[]",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func zigzagLevelOrder(root *TreeNode) (res [][]int) {
    q := []*TreeNode{}
    if root != nil {
        q = append(q, root)
    }

    cnt := 0
    for len(q) != 0 {
        level := []int{}
        l := len(q)

        for i := 0; i < l; i++ {
            t := q[0]
            q = q[1:]
            level = append(level, t.Val)
            if t.Left != nil {
                q = append(q, t.Left)
            }
            if t.Right != nil {
                q = append(q, t.Right)
            }
        }

        cnt++
        if cnt % 2 == 0 {
            for j, k := 0, len(level) - 1; j < k; j, k = j + 1, k - 1 {
                level[j], level[k] = level[k], level[j]
            }
        }
        res = append(res, level)
    }

    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 104,
        number: "0104",
        title: "二叉树的最大深度",
        difficulty: "easy",
        description: "给定一个二叉树，找出其最大深度。\n二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。\n说明: 叶子节点是指没有子节点的节点。",
        example: "示例：\n给定二叉树 [3,9,20,null,null,15,7]，\n    3\n   / \\\n  9  20\n    /  \\\n   15   7\n返回它的最大深度 3。",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    return max(maxDepth(root.Left), maxDepth(root.Right)) + 1
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 105,
        number: "0105",
        title: "从前序与中序遍历序列构造二叉树",
        difficulty: "medium",
        description: "给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历，inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。",
        example: "示例 1：\n输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\n输出: [3,9,20,null,null,15,7]\n示例 2：\n输入: preorder = [-1], inorder = [-1]\n输出: [-1]",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func buildTree(preorder []int, inorder []int) *TreeNode {
    pos := map[int]int{}
    for i, x := range inorder {
        pos[x] = i
    }
    var build func(int, int, int, int) *TreeNode
    build = func(pl, pr, il, ir int) *TreeNode {
        if pl > pr {
            return nil
        }
        root := &TreeNode{Val: preorder[pl]}
        k := pos[root.Val]
        root.Left = build(pl + 1, pl + k - il, il, k - 1)
        root.Right = build(pl + k - il + 1, pr, k + 1, ir)
        return root
    }
    return build(0, len(preorder) - 1, 0, len(inorder) - 1)
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 106,
        number: "0106",
        title: "从中序与后序遍历序列构造二叉树",
        difficulty: "medium",
        description: "给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树。",
        example: "示例 1：\n输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]\n输出：[3,9,20,null,null,15,7]\n示例 2：\n输入：inorder = [-1], postorder = [-1]\n输出：[-1]",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func buildTree(inorder []int, postorder []int) *TreeNode {
    pos := map[int]int{}
    for i, x := range inorder {
        pos[x] = i
    }
    var build func(int, int, int, int) *TreeNode
    build = func(il, ir, pl, pr int) *TreeNode {
        if il > ir {
            return nil
        }
        root := &TreeNode{Val: postorder[pr]}
        k := pos[root.Val]
        root.Left = build(il, k - 1, pl, pl + k - 1 - il)
        root.Right = build(k + 1, ir, pl + k - il, pr - 1)
        return root
    }
    return build(0, len(inorder) - 1, 0, len(postorder) - 1)
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 107,
        number: "0107",
        title: "二叉树的层序遍历 II",
        difficulty: "medium",
        description: "给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）",
        example: "示例 1：\n输入：root = [3,9,20,null,null,15,7]\n输出：[[15,7],[9,20],[3]]\n示例 2：\n输入：root = [1]\n输出：[[1]]\n示例 3：\n输入：root = []\n输出：[]",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrderBottom(root *TreeNode) (res [][]int) {
    q := []*TreeNode{}
    if root != nil {
        q = append(q, root)
    }
    for len(q) != 0 {
        level := []int{}
        l := len(q)
        for i := 0; i < l; i++ {
            t := q[0]
            q = q[1:]
            level = append(level, t.Val)
            if t.Left != nil {
                q = append(q, t.Left)
            }
            if t.Right != nil {
                q = append(q, t.Right)
            }
        }
        res = append([][]int{level}, res...)
    }
    return
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 108,
        number: "0108",
        title: "将有序数组转换为二叉搜索树",
        difficulty: "easy",
        description: "给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。\n高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。",
        example: "示例 1：\n输入：nums = [-10,-3,0,5,9]\n输出：[0,-3,9,-10,null,5]\n解释：[0,-10,5,null,-3,null,9] 也将被视为正确答案：\n示例 2：\n输入：nums = [1,3]\n输出：[3,1]\n解释：[1,null,3] 和 [3,1] 都是高度平衡二叉搜索树。",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
    var build func(int, int) *TreeNode
    build = func(l, r int) *TreeNode {
        if l > r {
            return nil
        }
        m := (l + r) >> 1
        root := &TreeNode{Val: nums[m]}
        root.Left = build(l, m - 1)
        root.Right = build(m + 1, r)
        return root
    }
    return build(0, len(nums) - 1)
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(logn)"
            }
        ]
    },
    {
        id: 109,
        number: "0109",
        title: "有序链表转换二叉搜索树",
        difficulty: "medium",
        description: "给定一个单链表的头节点 head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。\n高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。",
        example: "示例 1：\n输入: head = [-10,-3,0,5,9]\n输出: [0,-3,9,-10,null,5]\n解释: 一个可能的答案是 [0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。\n示例 2：\n输入: head = []\n输出: []",
        solutions: [
            {
                code: `/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedListToBST(head *ListNode) *TreeNode {
    if head == nil {
        return nil
    }
    n := 0
    for p := head; p != nil; p = p.Next {
        n++
    }
    if n == 1 {
        return &TreeNode{Val: head.Val}
    }
    cur := head
    for i := 0; i < n / 2 - 1; i++ {
        cur = cur.Next
    }
    root := &TreeNode{Val: cur.Next.Val}
    root.Right = sortedListToBST(cur.Next.Next)
    cur.Next = nil
    root.Left = sortedListToBST(head)
}`,
                timeComplexity: "O(nlogn)",
                spaceComplexity: "O(logn)"
            }
        ]
    },
    {
        id: 110,
        number: "0110",
        title: "平衡二叉树",
        difficulty: "easy",
        description: "给定一个二叉树，判断它是否是高度平衡的二叉树。\n本题中，一棵高度平衡二叉树定义为：\n一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。",
        example: "示例 1：\n输入：root = [3,9,20,null,null,15,7]\n输出：true\n示例 2：\n输入：root = [1,2,2,3,3,null,null,4,4]\n输出：false\n示例 3：\n输入：root = []\n输出：true",
        solutions: [
            {
                code: `/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isBalanced(root *TreeNode) bool {
    res := true
    var dfs func(*TreeNode) int
    dfs = func(root *TreeNode) int {
        if root == nil {
            return 0
        }
        lh, rh := dfs(root.Left), dfs(root.Right)
        if abs(lh - rh) > 1 {
            res = false
        }
        return max(lh, rh) + 1
    }
    dfs(root)
    return res
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}`,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    }
]

// 当前选中的题目
let currentProblem = null;

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderProblemList();
    showWelcomeMessage();
    setupSearch();
    setupHomeLinks();
});



// 设置首页和标题链接
function setupHomeLinks() {
    const homeLink = document.getElementById('homeLink');
    const logoLink = document.getElementById('logoLink');
    
    // 点击首页链接返回主页
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        showWelcomeMessage();
        document.getElementById('problemTitle').textContent = 'Hello';
        
        // 清除题目列表的选中状态
        document.querySelectorAll('.problem-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // 重置当前选中的题目
        currentProblem = null;
    });
    
    // 点击网站标题返回主页
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        showWelcomeMessage();
        document.getElementById('problemTitle').textContent = 'Hello';
        
        // 清除题目列表的选中状态
        document.querySelectorAll('.problem-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // 重置当前选中的题目
        currentProblem = null;
    });
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim();
        if (query === '') {
            renderProblemList();
        } else {
            searchProblems(query);
        }
    });
}

// 渲染题目列表
function renderProblemList() {
    const problemList = document.getElementById('problemList');

    // 确保所有题目都有有效的ID
    problems.forEach((problem, index) => {
        if (problem.id === undefined || problem.id === null || problem.id === 0) {
            problem.id = index + 1;
        }
    });

    // 按题目编号排序
    const sortedProblems = [...problems].sort((a, b) => {
        return parseInt(a.number) - parseInt(b.number);
    });
    
    console.log('题目总数:', sortedProblems.length);
    console.log('最后一题:', sortedProblems[sortedProblems.length - 1]);

    let html = '';

    // 按顺序渲染所有题目，确保所有题目都被显示
    sortedProblems.forEach(problem => {
        html += createProblemItem(problem);
    });

    problemList.innerHTML = html;
}

// 创建题目项HTML
function createProblemItem(problem) {
    // 确保题目ID是有效的
    const problemId = problem.id !== undefined ? problem.id : 0;
    return `
        <div class="problem-item" onclick="selectProblem(${problemId})" data-id="${problemId}">
            <div class="problem-number">${problem.number}</div>
            <div class="problem-title">${problem.title}</div>
            <div class="problem-difficulty difficulty-${problem.difficulty}">${problem.difficulty}</div>
        </div>
    `;
}

// 选择题目
function selectProblem(problemId) {
    // 确保problemId是数字
    problemId = Number(problemId);
    
    // 查找题目
    const problem = problems.find(p => p.id === problemId);
    if (!problem) {
        console.error(`未找到ID为${problemId}的题目`);
        return;
    }

    currentProblem = problem;
    console.log(`选中题目: ${problem.number}. ${problem.title} (ID: ${problem.id})`);

    // 更新题目列表选中状态
    document.querySelectorAll('.problem-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // 渲染题目内容
    renderProblemContent(problem);
}

// 渲染题目内容
function renderProblemContent(problem, solutionIndex = 0) {
    const problemTitle = document.getElementById('problemTitle');
    const problemContent = document.getElementById('problemContent');

    // 显示题解时启用滚动
    document.body.classList.remove('no-scroll');
    document.querySelector('.main-content').classList.remove('no-scroll');
    
    problemTitle.textContent = `${problem.number}. ${problem.title}`;

    // 检查是否有多个解法
    const hasMultipleSolutions = problem.solutions && problem.solutions.length > 1;
    const currentSolution = hasMultipleSolutions ? problem.solutions[solutionIndex] : problem.solutions[0];

    // 渲染题目内容
    problemContent.innerHTML = `
        <div class="problem-section">
            <h3>题目</h3>
            <div class="problem-description">
                <p>${problem.description.replace(/\n/g, '<br>')}</p>
            </div>
        </div>

        <div class="problem-section">
            <h3>示例</h3>
            <div class="example">
                <pre>${problem.example}</pre>
            </div>
        </div>

        ${hasMultipleSolutions ? `
        <div class="problem-section">
            <h3>解法选择</h3>
            <div class="solution-tabs">
                ${problem.solutions.map((solution, index) => `
                    <button class="solution-tab ${index === solutionIndex ? 'active' : ''}" 
                            onclick="switchSolution(${problem.id}, ${index})">
                        <span class="solution-name">${solution.name}</span>
                    </button>
                `).join('')}
            </div>
        </div>
        ` : ''}

        <div class="problem-section">
            <h3>复杂度</h3>
            <div class="complexity">
                <div class="complexity-item">
                    <div class="label">时间复杂度</div>
                    <div class="value">${currentSolution ? currentSolution.timeComplexity : problem.timeComplexity}</div>
                </div>
                <div class="complexity-item">
                    <div class="label">空间复杂度</div>
                    <div class="value">${currentSolution ? currentSolution.spaceComplexity : problem.spaceComplexity}</div>
                </div>
            </div>
        </div>

        <div class="problem-section">
            <h3>代码</h3>
            <div class="code-section">
                <div class="code-header">
                    <span class="language">Go</span>
                </div>
                <div class="code-content">
                    <pre><code class="language-go">${currentSolution ? currentSolution.code : '// 暂无代码实现'}</code></pre>
                </div>
            </div>
        </div>
    `;

    // 重新高亮代码
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

// 切换解法
function switchSolution(problemId, solutionIndex) {
    const problem = problems.find(p => p.id === problemId);
    if (!problem) return;

    // 更新当前选中的解法
    currentProblem = problem;

    // 重新渲染题目内容
    renderProblemContent(problem, solutionIndex);
}


// 显示欢迎消息
function showWelcomeMessage() {
    const problemContent = document.getElementById('problemContent');
    // 设置为欢迎页面时禁用滚动
    document.body.classList.add('no-scroll');
    document.querySelector('.main-content').classList.add('no-scroll');
    
    problemContent.innerHTML = `
        <div class="welcome-message">
            <p>👋欢迎来到小衡的Go力扣题解网站！</p>
            <p>从左侧选择一道题目开始查看题解。</p>
        </div>
    `;
}

// 搜索功能
function searchProblems(query) {
    // 确保所有题目都有有效的ID
    problems.forEach((problem, index) => {
        if (problem.id === undefined || problem.id === null || problem.id === 0) {
            problem.id = index + 1;
        }
    });

    const filteredProblems = problems.filter(problem => 
        problem.title.toLowerCase().includes(query.toLowerCase()) ||
        problem.number.includes(query)
    );

    // 按题目编号排序搜索结果
    const sortedProblems = filteredProblems.sort((a, b) => {
        return parseInt(a.number) - parseInt(b.number);
    });

    // 重新渲染过滤后的题目列表
    const problemList = document.getElementById('problemList');
    let html = '';

    sortedProblems.forEach(problem => {
        html += createProblemItem(problem);
    });

    problemList.innerHTML = html;
}

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'k':
                e.preventDefault();
                // 可以添加搜索功能
                break;
        }
    }
});
