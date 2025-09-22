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
    },
    {
        id: 111,
        number: "0111",
        title: "二叉树的最小深度",
        difficulty: "easy",
        description: "给定一个二叉树，找出其最小深度。\n\n最小深度是从根节点到最近叶子节点的最短路径上的节点数量。\n\n说明：叶子节点是指没有子节点的节点。",
        example: "示例 1：\n输入：root = [3,9,20,null,null,15,7]\n输出：2\n\n示例 2：\n输入：root = [2,null,3,null,4,null,5,null,6]\n输出：5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 112,
        number: "0112",
        title: "路径总和",
        difficulty: "easy",
        description: "给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。\n\n叶子节点 是指没有子节点的节点。",
        example: "示例 1：\n输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22\n输出：true\n解释：等于目标和的根节点到叶节点路径如上图所示。\n\n示例 2：\n输入：root = [1,2,3], targetSum = 5\n输出：false\n解释：树中存在两条根节点到叶子节点的路径：\n(1 --> 2): 和为 3\n(1 --> 3): 和为 4\n不存在 sum = 5 的根节点到叶子节点的路径。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 113,
        number: "0113",
        title: "路径总和 II",
        difficulty: "medium",
        description: "给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。\n\n叶子节点 是指没有子节点的节点。",
        example: "示例 1：\n输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22\n输出：[[5,4,11,2],[5,8,4,5]]\n\n示例 2：\n输入：root = [1,2,3], targetSum = 5\n输出：[]\n\n示例 3：\n输入：root = [1,2], targetSum = 0\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 114,
        number: "0114",
        title: "二叉树展开为链表",
        difficulty: "medium",
        description: "给你二叉树的根结点 root ，请你将它展开为一个单链表：\n\n展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。\n展开后的单链表应该与二叉树 先序遍历 顺序相同。",
        example: "示例 1：\n输入：root = [1,2,5,3,4,null,6]\n输出：[1,null,2,null,3,null,4,null,5,null,6]\n\n示例 2：\n输入：root = []\n输出：[]\n\n示例 3：\n输入：root = [0]\n输出：[0]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 115,
        number: "0115",
        title: "不同的子序列",
        difficulty: "hard",
        description: "给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。\n\n字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，\"ACE\" 是 \"ABCDE\" 的一个子序列，而 \"AEC\" 不是）\n\n题目数据保证答案符合 32 位带符号整数范围。",
        example: "示例 1：\n输入：s = \"rabbbit\", t = \"rabbit\"\n输出：3\n解释：\n如下图所示, 有 3 种可以从 s 中得到 \"rabbit\" 的方案。\nrabbbit\nrabbbit\nrabbbit\n\n示例 2：\n输入：s = \"babgbag\", t = \"bag\"\n输出：5\n解释：\n如下图所示, 有 5 种可以从 s 中得到 \"bag\" 的方案。 \nbabgbag\nbabgbag\nbabgbag\nbabgbag\nbabgbag",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 116,
        number: "0116",
        title: "填充每个节点的下一个右侧节点指针",
        difficulty: "medium",
        description: "给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：\n\nstruct Node {\n  int val;\n  Node *left;\n  Node *right;\n  Node *next;\n}\n\n填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。\n\n初始状态下，所有 next 指针都被设置为 NULL。",
        example: "示例 1：\n输入：root = [1,2,3,4,5,6,7]\n输出：[1,#,2,3,#,4,5,6,7,#]\n解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 117,
        number: "0117",
        title: "填充每个节点的下一个右侧节点指针 II",
        difficulty: "medium",
        description: "给定一个二叉树\n\nstruct Node {\n  int val;\n  Node *left;\n  Node *right;\n  Node *next;\n}\n\n填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。\n\n初始状态下，所有 next 指针都被设置为 NULL。",
        example: "示例 1：\n输入：root = [1,2,3,4,5,null,7]\n输出：[1,#,2,3,#,4,5,7,#]\n解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。\n\n示例 2：\n输入：root = []\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 118,
        number: "0118",
        title: "杨辉三角",
        difficulty: "easy",
        description: "给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。\n\n在「杨辉三角」中，每个数是它左上方和右上方的数的和。",
        example: "示例 1：\n输入：numRows = 5\n输出：[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\n\n示例 2：\n输入：numRows = 1\n输出：[[1]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(numRows^2)",
                spaceComplexity: "O(numRows^2)"
            }
        ]
    },
    {
        id: 119,
        number: "0119",
        title: "杨辉三角 II",
        difficulty: "easy",
        description: "给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。\n\n在「杨辉三角」中，每个数是它左上方和右上方的数的和。",
        example: "示例 1：\n输入：rowIndex = 3\n输出：[1,3,3,1]\n\n示例 2：\n输入：rowIndex = 0\n输出：[1]\n\n示例 3：\n输入：rowIndex = 1\n输出：[1,1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(rowIndex^2)",
                spaceComplexity: "O(rowIndex)"
            }
        ]
    },
    {
        id: 120,
        number: "0120",
        title: "三角形最小路径和",
        difficulty: "medium",
        description: "给定一个三角形 triangle ，找出自顶向下的最小路径和。\n\n每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。",
        example: "示例 1：\n输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]\n输出：11\n解释：如下面简图所示：\n   2\n  3 4\n 6 5 7\n4 1 8 3\n自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。\n\n示例 2：\n输入：triangle = [[-10]]\n输出：-10",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 121,
        number: "0121",
        title: "买卖股票的最佳时机",
        difficulty: "easy",
        description: "给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。\n\n你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。\n\n返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。",
        example: "示例 1：\n输入：[7,1,5,3,6,4]\n输出：5\n解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。\n注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。\n\n示例 2：\n输入：prices = [7,6,4,3,1]\n输出：0\n解释：在这种情况下, 没有交易完成, 所以最大利润为 0。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 122,
        number: "0122",
        title: "买卖股票的最佳时机 II",
        difficulty: "medium",
        description: "给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。\n\n在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。\n\n返回 你能获得的 最大 利润 。",
        example: "示例 1：\n输入：prices = [7,1,5,3,6,4]\n输出：7\n解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。\n随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。\n总利润为 4 + 3 = 7 。\n\n示例 2：\n输入：prices = [1,2,3,4,5]\n输出：4\n解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。\n总利润为 4 。\n\n示例 3：\n输入：prices = [7,6,4,3,1]\n输出：0\n解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 123,
        number: "0123",
        title: "买卖股票的最佳时机 III",
        difficulty: "hard",
        description: "给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。\n\n设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。\n\n注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。",
        example: "示例 1：\n输入：prices = [3,3,5,0,0,3,1,4]\n输出：6\n解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。\n随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。\n\n示例 2：\n输入：prices = [1,2,3,4,5]\n输出：4\n解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。\n注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。\n\n示例 3：\n输入：prices = [7,6,4,3,1]\n输出：0\n解释：在这种情况下, 没有交易完成, 所以最大利润为 0。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 124,
        number: "0124",
        title: "二叉树中的最大路径和",
        difficulty: "hard",
        description: "给定一个非空二叉树，返回其最大路径和。\n\n本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。",
        example: "示例 1：\n输入：[1,2,3]\n输出：6\n\n示例 2：\n输入：[-10,9,20,null,null,15,7]\n输出：42",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 125,
        number: "0125",
        title: "验证回文串",
        difficulty: "easy",
        description: "如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。\n\n字母和数字都属于字母数字字符。\n\n给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入: s = \"A man, a plan, a canal: Panama\"\n输出：true\n解释：\"amanaplanacanalpanama\" 是回文串。\n\n示例 2：\n输入：s = \"race a car\"\n输出：false\n解释：\"raceacar\" 不是回文串。\n\n示例 3：\n输入：s = \" \"\n输出：true\n解释：在移除非字母数字字符之后，s 是一个空字符串 \"\" 。\n由于空字符串正着反着读都一样，所以是回文串。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 126,
        number: "0126",
        title: "单词接龙 II",
        difficulty: "hard",
        description: "给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：\n\n每次转换只能改变一个字母。\n转换后得到的单词必须是字典中的单词。\n\n说明:\n如果不存在这样的转换序列，返回一个空列表。\n所有单词具有相同的长度。\n所有单词只由小写字母组成。\n字典中不存在重复的单词。\n你可以假设 beginWord 和 endWord 是非空的，且二者不相同。",
        example: "示例 1：\n输入：beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\n输出：[[\"hit\",\"hot\",\"dot\",\"dog\",\"cog\"],[\"hit\",\"hot\",\"lot\",\"log\",\"cog\"]]\n解释：存在 2 种最短的转换序列。\n\n示例 2：\n输入：beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]\n输出：[]\n解释：endWord \"cog\" 不在字典 wordList 中，所以不存在符合要求的转换序列。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*m^2)",
                spaceComplexity: "O(n*m)"
            }
        ]
    },
    {
        id: 127,
        number: "0127",
        title: "单词接龙",
        difficulty: "hard",
        description: "字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：\n\n序列中第一个单词是 beginWord 。\n序列中最后一个单词是 endWord 。\n每次转换只能改变一个字母。\n转换过程中的中间单词必须是字典 wordList 中的单词。\n给你两个单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。",
        example: "示例 1：\n输入：beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\n输出：5\n解释：一个最短转换序列是 \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\", 返回它的长度 5。\n\n示例 2：\n输入：beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]\n输出：0\n解释：endWord \"cog\" 不在字典中，所以无法进行转换。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*m^2)",
                spaceComplexity: "O(n*m)"
            }
        ]
    },
    {
        id: 128,
        number: "0128",
        title: "最长连续序列",
        difficulty: "medium",
        description: "给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。\n\n请你设计并实现时间复杂度为 O(n) 的算法解决此问题。",
        example: "示例 1：\n输入：nums = [100,4,200,1,3,2]\n输出：4\n解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。\n\n示例 2：\n输入：nums = [0,3,7,2,5,8,4,6,0,1]\n输出：9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 129,
        number: "0129",
        title: "求根节点到叶节点数字之和",
        difficulty: "medium",
        description: "给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。\n\n每条从根节点到叶节点的路径都代表一个数字：\n\n例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。\n计算从根节点到叶节点生成的 所有数字之和 。\n\n叶节点 是指没有子节点的节点。",
        example: "示例 1：\n输入：root = [1,2,3]\n输出：25\n解释：\n从根到叶子节点路径 1->2 代表数字 12\n从根到叶子节点路径 1->3 代表数字 13\n因此，数字总和 = 12 + 13 = 25\n\n示例 2：\n输入：root = [4,9,0,5,1]\n输出：1026\n解释：\n从根到叶子节点路径 4->9->5 代表数字 495\n从根到叶子节点路径 4->9->1 代表数字 491\n从根到叶子节点路径 4->0 代表数字 40\n因此，数字总和 = 495 + 491 + 40 = 1026",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 130,
        number: "0130",
        title: "被围绕的区域",
        difficulty: "medium",
        description: "给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。",
        example: "示例 1：\n输入：board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]\n输出：[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]\n解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是\"相连\"的。\n\n示例 2：\n输入：board = [[\"X\"]]\n输出：[[\"X\"]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 131,
        number: "0131",
        title: "分割回文串",
        difficulty: "medium",
        description: "给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。\n\n回文串 是正着读和反着读都一样的字符串。",
        example: "示例 1：\n输入：s = \"aab\"\n输出：[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]\n\n示例 2：\n输入：s = \"a\"\n输出：[[\"a\"]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*2^n)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 132,
        number: "0132",
        title: "分割回文串 II",
        difficulty: "hard",
        description: "给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。\n\n返回符合要求的 最少分割次数 。",
        example: "示例 1：\n输入：s = \"aab\"\n输出：1\n解释：只需一次分割就可将 s 分割成 [\"aa\",\"b\"] 这样两个回文子串。\n\n示例 2：\n输入：s = \"a\"\n输出：0\n\n示例 3：\n输入：s = \"ab\"\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 133,
        number: "0133",
        title: "克隆图",
        difficulty: "medium",
        description: "给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。\n\n图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。\n\nclass Node {\n    public int val;\n    public List<Node> neighbors;\n}",
        example: "示例 1：\n输入：adjList = [[2,4],[1,3],[2,4],[1,3]]\n输出：[[2,4],[1,3],[2,4],[1,3]]\n解释：\n图中有 4 个节点。\n节点 1 的值是 1，它有两个邻居：节点 2 和 4 。\n节点 2 的值是 2，它有两个邻居：节点 1 和 3 。\n节点 3 的值是 3，它有两个邻居：节点 2 和 4 。\n节点 4 的值是 4，它有两个邻居：节点 1 和 3 。\n\n示例 2：\n输入：adjList = [[]]\n输出：[[]]\n解释：输入包含一个空列表。该图仅仅只有一个值为 1 的节点，它没有任何邻居。\n\n示例 3：\n输入：adjList = []\n输出：[]\n解释：这个图是空的，它不含任何节点。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 134,
        number: "0134",
        title: "加油站",
        difficulty: "medium",
        description: "在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。\n\n你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。\n\n给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。",
        example: "示例 1:\n输入: gas = [1,2,3,4,5], cost = [3,4,5,1,2]\n输出: 3\n解释:\n从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油\n开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油\n开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油\n开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油\n开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油\n开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。\n因此，3 可为起始索引。\n\n示例 2:\n输入: gas = [2,3,4], cost = [3,4,3]\n输出: -1\n解释:\n你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。\n我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油\n开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油\n开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油\n你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。\n因此，无论怎样，你都不可能绕环路行驶一周。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 135,
        number: "0135",
        title: "分发糖果",
        difficulty: "hard",
        description: "n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。\n\n你需要按照以下要求，给这些孩子分发糖果：\n\n每个孩子至少分配到 1 个糖果。\n相邻两个孩子中，评分更高的那个会获得更多的糖果。\n\n请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。",
        example: "示例 1：\n输入：ratings = [1,0,2]\n输出：5\n解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。\n\n示例 2：\n输入：ratings = [1,2,2]\n输出：4\n解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。\n第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 136,
        number: "0136",
        title: "只出现一次的数字",
        difficulty: "easy",
        description: "给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。\n\n你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。",
        example: "示例 1：\n输入：nums = [2,2,1]\n输出：1\n\n示例 2：\n输入：nums = [4,1,2,1,2]\n输出：4\n\n示例 3：\n输入：nums = [1]\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 137,
        number: "0137",
        title: "只出现一次的数字 II",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。\n\n你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。",
        example: "示例 1：\n输入：nums = [2,2,3,2]\n输出：3\n\n示例 2：\n输入：nums = [0,1,0,1,0,1,99]\n输出：99",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 138,
        number: "0138",
        title: "复制带随机指针的链表",
        difficulty: "medium",
        description: "给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。\n\n构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。\n\n例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。\n\n返回复制链表的头节点。",
        example: "示例 1：\n输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\n输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]\n\n示例 2：\n输入：head = [[1,1],[2,1]]\n输出：[[1,1],[2,1]]\n\n示例 3：\n输入：head = [[3,null],[3,0],[3,null]]\n输出：[[3,null],[3,0],[3,null]]\n\n示例 4：\n输入：head = []\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 139,
        number: "0139",
        title: "单词拆分",
        difficulty: "medium",
        description: "给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。\n\n注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。",
        example: "示例 1：\n输入: s = \"leetcode\", wordDict = [\"leet\", \"code\"]\n输出: true\n解释: 返回 true 因为 \"leetcode\" 可以由 \"leet\" 和 \"code\" 拼接成。\n\n示例 2：\n输入: s = \"applepenapple\", wordDict = [\"apple\", \"pen\"]\n输出: true\n解释: 返回 true 因为 \"applepenapple\" 可以由 \"apple\" \"pen\" \"apple\" 拼接成。\n注意，你可以重复使用字典中的单词。\n\n示例 3：\n输入: s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]\n输出: false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 140,
        number: "0140",
        title: "单词拆分 II",
        difficulty: "hard",
        description: "给定一个字符串 s 和一个字符串字典 wordDict ，在字符串 s 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。以任意顺序 返回所有这些可能的句子。\n\n注意：词典中的同一个单词可能在分段中被重复使用多次。",
        example: "示例 1：\n输入:s = \"catsanddog\", wordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]\n输出:[\"cats and dog\",\"cat sand dog\"]\n\n示例 2：\n输入:s = \"pineapplepenapple\", wordDict = [\"apple\",\"pen\",\"applepen\",\"pine\",\"pineapple\"]\n输出:[\"pine apple pen apple\",\"pineapple pen apple\",\"pine applepen apple\"]\n解释: 注意你可以重复使用字典中的单词。\n\n示例 3：\n输入:s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]\n输出:[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^3)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 141,
        number: "0141",
        title: "环形链表",
        difficulty: "easy",
        description: "给你一个链表的头节点 head ，判断链表中是否有环。\n\n如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。\n\n如果链表中存在环 ，则返回 true 。 否则，返回 false 。",
        example: "示例 1：\n输入：head = [3,2,0,-4], pos = 1\n输出：true\n解释：链表中有一个环，其尾部连接到第二个节点。\n\n示例 2：\n输入：head = [1,2], pos = 0\n输出：true\n解释：链表中有一个环，其尾部连接到第一个节点。\n\n示例 3：\n输入：head = [1], pos = -1\n输出：false\n解释：链表中没有环。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 142,
        number: "0142",
        title: "环形链表 II",
        difficulty: "medium",
        description: "给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。\n\n如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。\n\n不允许修改 链表。",
        example: "示例 1：\n输入：head = [3,2,0,-4], pos = 1\n输出：返回索引为 1 的链表节点\n解释：链表中有一个环，其尾部连接到第二个节点。\n\n示例 2：\n输入：head = [1,2], pos = 0\n输出：返回索引为 0 的链表节点\n解释：链表中有一个环，其尾部连接到第一个节点。\n\n示例 3：\n输入：head = [1], pos = -1\n输出：返回 null\n解释：链表中没有环。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 143,
        number: "0143",
        title: "重排链表",
        difficulty: "medium",
        description: "给定一个单链表 L 的头节点 head ，单链表 L 表示为：\n\nL0 → L1 → … → Ln - 1 → Ln\n\n请将其重新排列后变为：\n\nL0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …\n\n不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。",
        example: "示例 1：\n输入：head = [1,2,3,4]\n输出：[1,4,2,3]\n\n示例 2：\n输入：head = [1,2,3,4,5]\n输出：[1,5,2,4,3]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 144,
        number: "0144",
        title: "二叉树的前序遍历",
        difficulty: "easy",
        description: "给你二叉树的根节点 root ，返回它节点值的 前序 遍历。",
        example: "示例 1：\n输入：root = [1,null,2,3]\n输出：[1,2,3]\n\n示例 2：\n输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]\n输出：[1,2,4,5,6,7,3,8,9]\n\n示例 3：\n输入：root = []\n输出：[]\n\n示例 4：\n输入：root = [1]\n输出：[1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 145,
        number: "0145",
        title: "二叉树的后序遍历",
        difficulty: "easy",
        description: "给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。",
        example: "示例 1：\n输入：root = [1,null,2,3]\n输出：[3,2,1]\n\n示例 2：\n输入：root = [1,2,3,4,5,null,8,null,null,6,7,9]\n输出：[4,6,7,5,2,9,8,3,1]\n\n示例 3：\n输入：root = []\n输出：[]\n\n示例 4：\n输入：root = [1]\n输出：[1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 146,
        number: "0146",
        title: "LRU 缓存",
        difficulty: "medium",
        description: "请你设计并实现一个满足 LRU (最近最少使用) 缓存约束的数据结构。\n\n实现 LRUCache 类：\n- LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存\n- int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。\n- void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。\n\n函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。",
        example: "示例：\n输入\n[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\n输出\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\n解释\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // 缓存是 {1=1}\nlRUCache.put(2, 2); // 缓存是 {1=1, 2=2}\nlRUCache.get(1);    // 返回 1\nlRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}\nlRUCache.get(2);    // 返回 -1 (未找到)\nlRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}\nlRUCache.get(1);    // 返回 -1 (未找到)\nlRUCache.get(3);    // 返回 3\nlRUCache.get(4);    // 返回 4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 147,
        number: "0147",
        title: "对链表进行插入排序",
        difficulty: "medium",
        description: "给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。\n\n插入排序 算法的步骤:\n1. 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。\n2. 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。\n3. 重复直到所有输入数据插入完为止。",
        example: "示例 1：\n输入: head = [4,2,1,3]\n输出: [1,2,3,4]\n\n示例 2：\n输入: head = [-1,5,3,4,0]\n输出: [-1,0,3,4,5]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 148,
        number: "0148",
        title: "排序链表",
        difficulty: "medium",
        description: "给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。",
        example: "示例 1：\n输入：head = [4,2,1,3]\n输出：[1,2,3,4]\n\n示例 2：\n输入：head = [-1,5,3,4,0]\n输出：[-1,0,3,4,5]\n\n示例 3：\n输入：head = []\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 149,
        number: "0149",
        title: "直线上最多的点数",
        difficulty: "hard",
        description: "给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。求最多有多少个点在同一条直线上。",
        example: "示例 1：\n输入：points = [[1,1],[2,2],[3,3]]\n输出：3\n\n示例 2：\n输入：points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]\n输出：4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 150,
        number: "0150",
        title: "逆波兰表达式求值",
        difficulty: "medium",
        description: "给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。\n\n请你计算该表达式。返回一个表示表达式值的整数。\n\n注意：\n- 有效的算符为 '+'、'-'、'*' 和 '/' 。\n- 每个操作数（运算对象）都可以是一个整数或者另一个表达式。\n- 两个整数之间的除法总是 向零截断 。\n- 表达式中不含除零运算。\n- 输入是一个根据逆波兰表示法表示的算术表达式。\n- 答案及所有中间计算结果可以用 32 位 整数表示。",
        example: "示例 1：\n输入：tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]\n输出：9\n解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9\n\n示例 2：\n输入：tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]\n输出：6\n解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6\n\n示例 3：\n输入：tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]\n输出：22\n解释：该算式转化为常见的中缀算术表达式为：\n  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / (12 * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 17 + 5\n= 22",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    }
,
    {
        id: 151,
        number: "0151",
        title: "反转字符串中的单词",
        difficulty: "medium",
        description: "给你一个字符串 s ，请你反转字符串中 单词 的顺序。\n\n单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。\n\n返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。\n\n注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。",
        example: "示例 1：\n输入：s = \"the sky is blue\"\n输出：\"blue is sky the\"\n\n示例 2：\n输入：s = \"  hello world  \"\n输出：\"world hello\"\n解释：反转后的字符串中不应包含额外的空格。\n\n示例 3：\n输入：s = \"a good   example\"\n输出：\"example good a\"\n解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 152,
        number: "0152",
        title: "乘积最大子数组",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。\n\n测试用例的答案是一个 32-位 整数。",
        example: "示例 1:\n输入: nums = [2,3,-2,4]\n输出: 6\n解释: 子数组 [2,3] 有最大乘积 6。\n\n示例 2:\n输入: nums = [-2,0,-1]\n输出: 0\n解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 153,
        number: "0153",
        title: "寻找旋转排序数组中的最小值",
        difficulty: "medium",
        description: "已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：\n若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]\n若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]\n注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。\n\n给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。\n\n你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。",
        example: "示例 1：\n输入：nums = [3,4,5,1,2]\n输出：1\n解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。\n\n示例 2：\n输入：nums = [4,5,6,7,0,1,2]\n输出：0\n解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。\n\n示例 3：\n输入：nums = [11,13,15,17]\n输出：11\n解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 154,
        number: "0154",
        title: "寻找旋转排序数组中的最小值 II",
        difficulty: "hard",
        description: "已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：\n若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]\n若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]\n注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。\n\n给你一个可能存在 重复 元素值的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。\n\n你必须尽可能减少整个过程的操作步骤。",
        example: "示例 1：\n输入：nums = [1,3,5]\n输出：1\n\n示例 2：\n输入：nums = [2,2,2,0,1]\n输出：0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 155,
        number: "0155",
        title: "最小栈",
        difficulty: "medium",
        description: "设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。\n\n实现 MinStack 类:\n\nMinStack() 初始化堆栈对象。\nvoid push(int val) 将元素val推入堆栈。\nvoid pop() 删除堆栈顶部的元素。\nint top() 获取堆栈顶部的元素。\nint getMin() 获取堆栈中的最小元素。",
        example: "示例 1:\n输入：\n[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\n输出：\n[null,null,null,null,-3,null,0,-2]\n\n解释：\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --> 返回 -3.\nminStack.pop();\nminStack.top();      --> 返回 0.\nminStack.getMin();   --> 返回 -2.",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 156,
        number: "0156",
        title: "上下翻转二叉树",
        difficulty: "medium",
        description: "给你一个二叉树的根节点 root ，请你将此二叉树上下翻转，并返回新的根节点。\n\n你可以按下面的步骤翻转一棵二叉树：\n\n1. 原来的左子节点变成新的根节点\n2. 原来的根节点变成新的右子节点\n3. 原来的右子节点变成新的左子节点\n\n上面的步骤逐层进行。题目数据保证每个右节点都有一个同级节点（即共享同一父节点的左节点）且不存在子节点。",
        example: "示例 1：\n输入：root = [1,2,3,4,5]\n输出：[4,5,2,null,null,3,1]\n\n示例 2：\n输入：root = []\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 157,
        number: "0157",
        title: "用 Read4 读取 N 个字符",
        difficulty: "easy",
        description: "给你一个文件，并且该文件只能通过给定的 read4 方法来读取，请实现一个方法使其能够读取 n 个字符。\n\nread4 方法：\n\nAPI read4 可以从文件中读取 4 个连续的字符，并且将它们写入缓存数组 buf 中。\n\n返回值为实际读取的字符个数。\n\n注意 read4() 自身拥有文件指针，很类似于 C 语言中的 FILE *fp 。\n\nread4 的定义：\n\n参数类型: char[] buf4\n返回类型: int\n\n注意: buf4[] 是目标缓存区不是源缓存区，read4 的返回结果将会复制到 buf4[] 当中。",
        example: "示例 1：\n输入：file = \"abc\", n = 4\n输出：3\n解释：当执行你的 read 方法后，buf 需要包含 \"abc\"。 文件一共 3 个字符，因此返回 3。 注意 \"abc\" 是文件的内容，不是 buf 的内容，buf 是你需要写入结果的目标缓存区。\n\n示例 2：\n输入：file = \"abcde\", n = 5\n输出：5\n解释：当执行你的 read 方法后，buf 需要包含 \"abcde\"。文件共 5 个字符，因此返回 5。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 158,
        number: "0158",
        title: "用 Read4 读取 N 个字符 II",
        difficulty: "hard",
        description: "给你一个文件，并且该文件只能通过给定的 read4 方法来读取，请实现一个方法使其能够读取 n 个字符。注意：你的 read 方法可能会被调用多次。\n\nread4 的定义：\n\n参数类型: char[] buf4\n返回类型: int\n\n注意: buf4[] 是目标缓存区不是源缓存区，read4 的返回结果将会复制到 buf4[] 当中。",
        example: "示例 1：\n输入：file = \"abc\", queries = [1,2,1]\n输出：[1,2,0]\n解释：测试用例表示以下场景:\n第一次调用 read 方法，读取 1 个字符，返回 \"a\"。\n第二次调用 read 方法，读取 2 个字符，返回 \"bc\"。\n第三次调用 read 方法，没有剩余字符，返回 0。\n\n示例 2：\n输入：file = \"abc\", queries = [4,1]\n输出：[3,0]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 159,
        number: "0159",
        title: "至多包含两个不同字符的最长子串",
        difficulty: "medium",
        description: "给定一个字符串 s ，找出 至多 包含两个不同字符的最长子串 t ，并返回该子串的长度。\n\n示例 1:\n输入: \"eceba\"\n输出: 3\n解释: t 是 \"ece\"，长度为3。\n\n示例 2:\n输入: \"ccaabbb\"\n输出: 5\n解释: t 是 \"aabbb\"，长度为5。",
        example: "示例 1:\n输入: \"eceba\"\n输出: 3\n解释: t 是 \"ece\"，长度为3。\n\n示例 2:\n输入: \"ccaabbb\"\n输出: 5\n解释: t 是 \"aabbb\"，长度为5。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 160,
        number: "0160",
        title: "相交链表",
        difficulty: "easy",
        description: "给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。\n\n题目数据 保证 整个链式结构中不存在环。\n\n注意，函数返回结果后，链表必须 保持其原始结构 。",
        example: "示例 1：\n输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3\n输出：Intersected at '8'\n解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。\n在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。\n\n示例 2：\n输入：intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1\n输出：Intersected at '2'\n解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。\n从各自的表头开始算起，链表 A 为 [1,9,1,2,4]，链表 B 为 [3,2,4]。\n在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。\n\n示例 3：\n输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2\n输出：No intersection\n解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。\n由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。\n这两个链表不相交，因此返回 null 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m+n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 161,
        number: "0161",
        title: "相隔为 1 的编辑距离",
        difficulty: "medium",
        description: "给定两个字符串 s 和 t，判断它们的编辑距离是否为 1。\n\n注意：\n\n满足编辑距离为 1 有三种可能的情形：\n\n1. 往 s 中插入一个字符得到 t\n2. 从 s 中删除一个字符得到 t\n3. 在 s 中替换一个字符得到 t",
        example: "示例 1：\n输入: s = \"ab\", t = \"acb\"\n输出: true\n解释: 可以将 'c' 插入字符串 s 来得到 t。\n\n示例 2：\n输入: s = \"cab\", t = \"ad\"\n输出: false\n解释: 无法通过 1 步操作将 s 转换为 t。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 162,
        number: "0162",
        title: "寻找峰值",
        difficulty: "medium",
        description: "峰值元素是指其值严格大于左右相邻值的元素。\n\n给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。\n\n你可以假设 nums[-1] = nums[n] = -∞ 。\n\n你必须实现时间复杂度为 O(log n) 的算法来解决此问题。",
        example: "示例 1：\n输入：nums = [1,2,3,1]\n输出：2\n解释：3 是峰值元素，你的函数应该返回其索引 2。\n\n示例 2：\n输入：nums = [1,2,1,3,5,6,4]\n输出：1 或 5 \n解释：你的函数可以返回索引 1，其峰值元素为 2；或者返回索引 5， 其峰值元素为 6。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 163,
        number: "0163",
        title: "缺失的区间",
        difficulty: "medium",
        description: "给定一个排序的整数数组 nums ，其中元素的范围在 闭区间 [lower, upper] 当中，返回不包含在数组中的缺失区间。",
        example: "示例：\n输入: nums = [0, 1, 3, 50, 75], lower = 0 和 upper = 99\n输出: [\"2\", \"4->49\", \"51->74\", \"76->99\"]\n\n解释：缺失的区间包括：\n\"2\"：表示缺少数字2\n\"4->49\"：表示缺少从4到49的连续数字\n\"51->74\"：表示缺少从51到74的连续数字\n\"76->99\"：表示缺少从76到99的连续数字",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 164,
        number: "0164",
        title: "最大间距",
        difficulty: "hard",
        description: "给定一个无序的数组 nums，返回 数组在排序之后，相邻元素之间最大的差值 。如果数组元素少于 2 个，则返回 0 。\n\n您必须编写一个在「线性时间」内运行并使用「线性额外空间」的算法。",
        example: "示例 1:\n输入: nums = [3,6,9,1]\n输出: 3\n解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都有最大差值 3。\n\n示例 2:\n输入: nums = [10]\n输出: 0\n解释: 数组元素少于 2 个，因此返回 0。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 165,
        number: "0165",
        title: "比较版本号",
        difficulty: "medium",
        description: "给你两个版本号 version1 和 version2 ，请你比较它们。\n\n版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。\n\n比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。\n\n返回规则如下：\n如果 version1 > version2 返回 1，\n如果 version1 < version2 返回 -1，\n除此之外返回 0。",
        example: "示例 1：\n输入：version1 = \"1.01\", version2 = \"1.001\"\n输出：0\n解释：忽略前导零，\"01\" 和 \"001\" 都表示相同的整数 \"1\"\n\n示例 2：\n输入：version1 = \"1.0\", version2 = \"1.0.0\"\n输出：0\n解释：version1 没有指定下标为 2 的修订号，即视为 \"0\"\n\n示例 3：\n输入：version1 = \"0.1\", version2 = \"1.1\"\n输出：-1\n解释：version1 中下标为 0 的修订号是 \"0\"，version2 中下标为 0 的修订号是 \"1\" 。0 < 1，所以 version1 < version2",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(max(m,n))",
                spaceComplexity: "O(max(m,n))"
            }
        ]
    },
    {
        id: 166,
        number: "0166",
        title: "分数到小数",
        difficulty: "medium",
        description: "给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。\n\n如果小数部分为循环小数，则将循环的部分括在括号内。\n\n如果存在多个答案，只需返回 任意一个 。\n\n对于所有给定的输入，保证 答案字符串的长度小于 104 。",
        example: "示例 1：\n输入：numerator = 1, denominator = 2\n输出：\"0.5\"\n\n示例 2：\n输入：numerator = 2, denominator = 1\n输出：\"2\"\n\n示例 3：\n输入：numerator = 2, denominator = 3\n输出：\"0.(6)\"\n\n示例 4：\n输入：numerator = 4, denominator = 333\n输出：\"0.(012)\"\n\n示例 5：\n输入：numerator = 1, denominator = 5\n输出：\"0.2\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 167,
        number: "0167",
        title: "两数之和 II - 输入有序数组",
        difficulty: "medium",
        description: "给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。\n\n以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。\n\n你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。\n\n你所设计的解决方案必须只使用常量级的额外空间。",
        example: "示例 1：\n输入：numbers = [2,7,11,15], target = 9\n输出：[1,2]\n解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。\n\n示例 2：\n输入：numbers = [2,3,4], target = 6\n输出：[1,3]\n解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。\n\n示例 3：\n输入：numbers = [-1,0], target = -1\n输出：[1,2]\n解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 168,
        number: "0168",
        title: "Excel表列名称",
        difficulty: "easy",
        description: "给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。\n\n例如：\nA -> 1\nB -> 2\nC -> 3\n...\nZ -> 26\nAA -> 27\nAB -> 28 \n...",
        example: "示例 1：\n输入：columnNumber = 1\n输出：\"A\"\n\n示例 2：\n输入：columnNumber = 28\n输出：\"AB\"\n\n示例 3：\n输入：columnNumber = 701\n输出：\"ZY\"\n\n示例 4：\n输入：columnNumber = 2147483647\n输出：\"FXSHRXW\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 169,
        number: "0169",
        title: "多数元素",
        difficulty: "easy",
        description: "给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。\n\n你可以假设数组是非空的，并且给定的数组总是存在多数元素。",
        example: "示例 1：\n输入：nums = [3,2,3]\n输出：3\n\n示例 2：\n输入：nums = [2,2,1,1,1,2,2]\n输出：2",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 170,
        number: "0170",
        title: "两数之和 III - 数据结构设计",
        difficulty: "easy",
        description: "设计一个接受整数流的数据结构，该数据结构支持检查是否存在两数之和等于特定值。\n\n实现 TwoSum 类：\n\nTwoSum() 初始化 TwoSum 对象\nvoid add(int number) 向数据结构添加一个数 number\nboolean find(int value) 寻找数据结构中是否存在一对整数，使得两数之和与给定的值相等。如果存在，返回 true ；否则，返回 false 。",
        example: "示例：\n输入：\n[\"TwoSum\", \"add\", \"add\", \"add\", \"find\", \"find\"]\n[[], [1], [3], [5], [4], [7]]\n输出：\n[null, null, null, null, true, false]\n\n解释：\nTwoSum twoSum = new TwoSum();\ntwoSum.add(1);   // [] --> [1]\ntwoSum.add(3);   // [1] --> [1,3]\ntwoSum.add(5);   // [1,3] --> [1,3,5]\ntwoSum.find(4);  // 1 + 3 = 4，返回 true\ntwoSum.find(7);  // 没有两个整数加起来等于 7 ，返回 false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 171,
        number: "0171",
        title: "Excel表列序号",
        difficulty: "easy",
        description: "给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回 该列名称对应的列序号 。\n\n例如：\nA -> 1\nB -> 2\nC -> 3\n...\nZ -> 26\nAA -> 27\nAB -> 28\n...",
        example: "示例 1:\n输入: columnTitle = \"A\"\n输出: 1\n\n示例 2:\n输入: columnTitle = \"AB\"\n输出: 28\n\n示例 3:\n输入: columnTitle = \"ZY\"\n输出: 701",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 172,
        number: "0172",
        title: "阶乘后的零",
        difficulty: "medium",
        description: "给定一个整数 n ，返回 n! 结果中尾随零的数量。\n\n提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1",
        example: "示例 1:\n输入: n = 3\n输出: 0\n解释: 3! = 6, 尾数中没有零。\n\n示例 2:\n输入: n = 5\n输出: 1\n解释: 5! = 120, 尾数中有 1 个零。\n\n示例 3:\n输入: n = 0\n输出: 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 173,
        number: "0173",
        title: "二叉搜索树迭代器",
        difficulty: "medium",
        description: "实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：\n\nBSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。\nboolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。\nint next()将指针向右移动，然后返回指针处的数字。\n\n注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。\n\n你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。",
        example: "示例：\n输入\n[\"BSTIterator\", \"next\", \"next\", \"hasNext\", \"next\", \"hasNext\", \"next\", \"hasNext\", \"next\", \"hasNext\"]\n[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]\n输出\n[null, 3, 7, true, 9, true, 15, true, 20, false]\n\n解释\nBSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);\nbSTIterator.next();    // 返回 3\nbSTIterator.next();    // 返回 7\nbSTIterator.hasNext(); // 返回 True\nbSTIterator.next();    // 返回 9\nbSTIterator.hasNext(); // 返回 True\nbSTIterator.next();    // 返回 15\nbSTIterator.hasNext(); // 返回 True\nbSTIterator.next();    // 返回 20\nbSTIterator.hasNext(); // 返回 False",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1) 均摊",
                spaceComplexity: "O(h) 其中h是树的高度"
            }
        ]
    },
    {
        id: 174,
        number: "0174",
        title: "地下城游戏",
        difficulty: "hard",
        description: "一些恶魔抓住了公主（P）并将她关在了地下城的右下角。地下城是由 M x N 个房间组成的二维网格。我们英勇的骑士（K）最初被安置在左上角的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。\n\n骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 0 或以下，他会立即死亡。\n\n有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；其他房间要么是空的（房间里的值为 0），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。\n\n为了尽快到达公主，骑士决定每次只向右或向下移动一步。\n\n编写一个函数来计算确保骑士能够拯救到公主所需的最低初始健康点数。",
        example: "示例 1：\n输入：dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]\n输出：7\n解释：如果骑士遵循最佳路径 右 -> 右 -> 下 -> 下，则骑士的初始健康点数至少为 7。\n\n示例 2：\n输入：dungeon = [[0]]\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 175,
        number: "0175",
        title: "组合两个表",
        difficulty: "easy",
        description: "表: Person\n+-------------+---------+\n| 列名         | 类型     |\n+-------------+---------+\n| PersonId    | int     |\n| FirstName   | varchar |\n| LastName    | varchar |\n+-------------+---------+\nPersonId 是该表的主键。\n该表包含一些人的 ID 和他们的姓和名的信息。\n\n表: Address\n+-------------+---------+\n| 列名         | 类型    |\n+-------------+---------+\n| AddressId   | int     |\n| PersonId    | int     |\n| City        | varchar |\n| State       | varchar |\n+-------------+---------+\nAddressId 是该表的主键。\n该表的每一行都包含一个 ID = PersonId 的人的城市和州的信息。\n\n编写一个SQL查询来报告 Person 表中每个人的姓、名、城市和州。如果 PersonId 的地址不在 Address 表中，则报告为空 null。",
        example: "示例：\n输入: \nPerson表:\n+----------+----------+-----------+\n| PersonId | FirstName | LastName  |\n+----------+----------+-----------+\n| 1        | Wang     | Allen     |\n| 2        | Alice    | Bob       |\n+----------+----------+-----------+\nAddress表:\n+-----------+----------+---------------+------------+\n| AddressId | PersonId | City          | State      |\n+-----------+----------+---------------+------------+\n| 1         | 2        | New York City | New York   |\n| 2         | 3        | Leetcode      | California |\n+-----------+----------+---------------+------------+\n输出: \n+-----------+----------+---------------+----------+\n| FirstName | LastName | City          | State    |\n+-----------+----------+---------------+----------+\n| Wang      | Allen    | Null          | Null     |\n| Alice     | Bob      | New York City | New York |\n+-----------+----------+---------------+----------+\n解释: \n地址表中没有 Wang Allen 的地址，所以他的城市和州返回 null。\nAddress 表中有 Alice Bob 的一条记录，所以我们返回 New York City 和 New York。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 176,
        number: "0176",
        title: "第二高的薪水",
        difficulty: "medium",
        description: "表: Employee\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| id          | int  |\n| salary      | int  |\n+-------------+------+\nid 是这个表的主键。\n表的每一行包含员工的工资信息。\n\n编写一个 SQL 查询，获取并返回 Employee 表中第二高的薪水 。如果不存在第二高的薪水，查询应该返回 null 。",
        example: "示例 1：\n输入: \nEmployee 表:\n+----+--------+\n| id | salary |\n+----+--------+\n| 1  | 100    |\n| 2  | 200    |\n| 3  | 300    |\n+----+--------+\n输出: \n+---------------------+\n| SecondHighestSalary |\n+---------------------+\n| 200                 |\n+---------------------+\n\n示例 2：\n输入: \nEmployee 表:\n+----+--------+\n| id | salary |\n+----+--------+\n| 1  | 100    |\n+----+--------+\n输出: \n+---------------------+\n| SecondHighestSalary |\n+---------------------+\n| null                |\n+---------------------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 177,
        number: "0177",
        title: "第N高的薪水",
        difficulty: "medium",
        description: "表: Employee\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| id          | int  |\n| salary      | int  |\n+-------------+------+\nid 是这个表的主键。\n表的每一行包含员工的工资信息。\n\n编写一个SQL查询来报告 Employee 表中第 n 高的工资。如果没有第 n 个最高工资，查询应该报告为 null 。",
        example: "示例 1:\n输入: \nEmployee table:\n+----+--------+\n| id | salary |\n+----+--------+\n| 1  | 100    |\n| 2  | 200    |\n| 3  | 300    |\n+----+--------+\nn = 2\n输出: \n+------------------------+\n| getNthHighestSalary(2) |\n+------------------------+\n| 200                    |\n+------------------------+\n\n示例 2:\n输入: \nEmployee 表:\n+----+--------+\n| id | salary |\n+----+--------+\n| 1  | 100    |\n+----+--------+\nn = 2\n输出: \n+------------------------+\n| getNthHighestSalary(2) |\n+------------------------+\n| null                   |\n+------------------------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 178,
        number: "0178",
        title: "分数排名",
        difficulty: "medium",
        description: "表: Scores\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| score       | decimal |\n+-------------+---------+\nid 是该表的主键。\n该表的每一行都包含了一场比赛的分数。Score 是一个有两位小数点的浮点值。\n\n编写 SQL 查询对分数进行排序。排名按以下规则计算:\n\n分数应按从高到低排列。\n如果两个分数相等，那么两个分数的排名应该相同。\n在排名相同的分数后，排名数应该是下一个连续的整数。换句话说，排名之间不应该有空缺的数字。\n按 score 降序返回结果表。",
        example: "示例 1:\n输入: \nScores 表:\n+----+-------+\n| id | score |\n+----+-------+\n| 1  | 3.50  |\n| 2  | 3.65  |\n| 3  | 4.00  |\n| 4  | 3.85  |\n| 5  | 4.00  |\n| 6  | 3.65  |\n+----+-------+\n输出: \n+-------+------+\n| score | rank  |\n+-------+------+\n| 4.00  | 1     |\n| 4.00  | 1     |\n| 3.85  | 2     |\n| 3.65  | 3     |\n| 3.65  | 3     |\n| 3.50  | 4     |\n+-------+------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 179,
        number: "0179",
        title: "最大数",
        difficulty: "medium",
        description: "给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。\n\n注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。",
        example: "示例 1：\n输入：nums = [10,2]\n输出：\"210\"\n\n示例 2：\n输入：nums = [3,30,34,5,9]\n输出：\"9534330\"\n\n示例 3：\n输入：nums = [1]\n输出：\"1\"\n\n示例 4：\n输入：nums = [10]\n输出：\"10\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(nlogn)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 180,
        number: "0180",
        title: "连续出现的数字",
        difficulty: "medium",
        description: "表：Logs\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| num         | varchar |\n+-------------+---------+\nid 是这个表的主键。\n\n编写一个 SQL 查询，查找所有至少连续出现三次的数字。\n\n返回的结果表中的数据可以按 任意顺序 排列。",
        example: "示例 1:\n输入：\nLogs 表：\n+----+-----+\n| id | num |\n+----+-----+\n| 1  | 1   |\n| 2  | 1   |\n| 3  | 1   |\n| 4  | 2   |\n| 5  | 1   |\n| 6  | 2   |\n| 7  | 2   |\n+----+-----+\n输出：\nResult 表：\n+-----------------+\n| ConsecutiveNums |\n+-----------------+\n| 1               |\n+-----------------+\n解释：1 是唯一连续出现至少三次的数字。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 181,
        number: "0181",
        title: "超过经理收入的员工",
        difficulty: "easy",
        description: "表：Employee\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| name        | varchar |\n| salary      | int     |\n| managerId   | int     |\n+-------------+---------+\nid是该表的主键。\n该表的每一行都表示雇员的ID、姓名、工资和经理的ID。\n\n编写一个SQL查询来查找收入比经理高的员工。",
        example: "示例：\n输入：\nEmployee表：\n+----+-------+--------+-----------+\n| id | name  | salary | managerId |\n+----+-------+--------+-----------+\n| 1  | Joe   | 70000  | 3         |\n| 2  | Henry | 80000  | 4         |\n| 3  | Sam   | 60000  | NULL      |\n| 4  | Max   | 90000  | NULL      |\n+----+-------+--------+-----------+\n输出：\n+----------+\n| Employee |\n+----------+\n| Joe      |\n+----------+\n解释：Joe是唯一挣得比经理多的员工，他的经理是Sam，Joe的工资是70000，而Sam的工资是60000。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 182,
        number: "0182",
        title: "查找重复的电子邮箱",
        difficulty: "easy",
        description: "表: Person\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| email       | varchar |\n+-------------+---------+\nid是该表的主键列。\n该表的每一行包含一封电子邮件。电子邮件将不包含大写字母。\n\n编写一个SQL查询来报告所有重复的电子邮件。\n\n注意，可以保证电子邮件字段不为NULL。",
        example: "示例：\n输入：\nPerson表：\n+----+---------+\n| id | email   |\n+----+---------+\n| 1  | a@b.com |\n| 2  | c@d.com |\n| 3  | a@b.com |\n+----+---------+\n输出：\n+---------+\n| Email   |\n+---------+\n| a@b.com |\n+---------+\n解释：a@b.com重复了两次。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 183,
        number: "0183",
        title: "从不订购的客户",
        difficulty: "easy",
        description: "表: Customers\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| name        | varchar |\n+-------------+---------+\nid是该表的主键。\n该表包含消费者的ID和名称。\n\n表: Orders\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| id          | int  |\n| customerId  | int  |\n+-------------+------+\nid是该表的主键。\ncustomerId是Customers表中ID的外键。\n该表包含订单的ID和订单的客户的ID。\n\n编写一个SQL查询，报告没有下过任何订单的所有客户的姓名。",
        example: "示例：\n输入：\nCustomers表：\n+----+-------+\n| id | name  |\n+----+-------+\n| 1  | Joe   |\n| 2  | Henry |\n| 3  | Sam   |\n| 4  | Max   |\n+----+-------+\nOrders表：\n+----+------------+\n| id | customerId |\n+----+------------+\n| 1  | 3          |\n| 2  | 1          |\n+----+------------+\n输出：\n+-----------+\n| Customers |\n+-----------+\n| Henry     |\n| Max       |\n+-----------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 184,
        number: "0184",
        title: "部门工资最高的员工",
        difficulty: "medium",
        description: "表： Employee\n+--------------+---------+\n| 列名          | 类型     |\n+--------------+---------+\n| id           | int     |\n| name         | varchar |\n| salary       | int     |\n| departmentId | int     |\n+--------------+---------+\nid是此表的主键列。\ndepartmentId是Department表中ID的外键。\n此表的每一行都表示员工的ID、姓名和工资。它还包含他们所在部门的ID。\n\n表： Department\n+-------------+---------+\n| 列名         | 类型    |\n+-------------+---------+\n| id          | int     |\n| name        | varchar |\n+-------------+---------+\nid是此表的主键列。\n此表的每一行都表示一个部门的ID及其名称。\n\n编写SQL查询以查找每个部门中薪资最高的员工。\n按 任意顺序 返回结果表。",
        example: "示例：\n输入：\nEmployee表：\n+----+-------+--------+--------------+\n| id | name  | salary | departmentId |\n+----+-------+--------+--------------+\n| 1  | Joe   | 70000  | 1            |\n| 2  | Jim   | 90000  | 1            |\n| 3  | Henry | 80000  | 2            |\n| 4  | Sam   | 60000  | 2            |\n| 5  | Max   | 90000  | 1            |\n+----+-------+--------+--------------+\nDepartment表：\n+----+-------+\n| id | name  |\n+----+-------+\n| 1  | IT    |\n| 2  | Sales |\n+----+-------+\n输出：\n+------------+----------+--------+\n| Department | Employee | Salary |\n+------------+----------+--------+\n| IT         | Jim      | 90000  |\n| Sales      | Henry    | 80000  |\n| IT         | Max      | 90000  |\n+------------+----------+--------+\n解释：Max和Jim在IT部门的工资都是最高的，Henry在销售部的工资最高。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 185,
        number: "0185",
        title: "部门工资前三高的所有员工",
        difficulty: "hard",
        description: "表: Employee\n+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| id           | int     |\n| name         | varchar |\n| salary       | int     |\n| departmentId | int     |\n+--------------+---------+\nid是该表的主键列。\ndepartmentId是Department表中ID的外键。\n该表的每一行都包含员工的ID、姓名和工资。它还包含了他们部门的ID。\n\n表: Department\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| name        | varchar |\n+-------------+---------+\nid是该表的主键列。\n该表的每一行表示部门ID和部门名称。\n\n公司的主管们感兴趣的是公司每个部门中谁赚的钱最多。一个部门的 高收入者 是指一个员工的工资在该部门的 不同 工资中 排名前三 。\n\n编写一个SQL查询，找出每个部门中收入高的员工。",
        example: "示例：\n输入：\nEmployee表：\n+----+-------+--------+--------------+\n| id | name  | salary | departmentId |\n+----+-------+--------+--------------+\n| 1  | Joe   | 85000  | 1            |\n| 2  | Henry | 80000  | 2            |\n| 3  | Sam   | 60000  | 2            |\n| 4  | Max   | 90000  | 1            |\n| 5  | Janet | 69000  | 1            |\n| 6  | Randy | 85000  | 1            |\n| 7  | Will  | 70000  | 1            |\n+----+-------+--------+--------------+\nDepartment表：\n+----+-------+\n| id | name  |\n+----+-------+\n| 1  | IT    |\n| 2  | Sales |\n+----+-------+\n输出：\n+------------+----------+--------+\n| Department | Employee | Salary |\n+------------+----------+--------+\n| IT         | Max      | 90000  |\n| IT         | Joe      | 85000  |\n| IT         | Randy    | 85000  |\n| IT         | Will     | 70000  |\n| Sales      | Henry    | 80000  |\n| Sales      | Sam      | 60000  |\n+------------+----------+--------+\n解释：\nIT部门：\nMax的工资最高\nRandy和Joe都以85000美元的工资排名第二\nWill的工资排名第三，为70000美元\n\nSales部门：\nHenry的工资最高\nSam的工资排名第二，为60000美元\n该部门只有两名员工，所以我们只输出这两名员工的信息",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 186,
        number: "0186",
        title: "翻转字符串里的单词 II",
        difficulty: "medium",
        description: "给你一个字符数组 s ，反转其中 单词 的顺序。\n\n单词 的定义为：单词是一个由非空格字符组成的序列。s 中的单词将会由单个空格分隔。\n\n必须设计并实现 原地 解法来解决此问题，即不分配额外的空间。",
        example: "示例 1：\n输入：s = [\"t\",\"h\",\"e\",\" \",\"s\",\"k\",\"y\",\" \",\"i\",\"s\",\" \",\"b\",\"l\",\"u\",\"e\"]\n输出：[\"b\",\"l\",\"u\",\"e\",\" \",\"i\",\"s\",\" \",\"s\",\"k\",\"y\",\" \",\"t\",\"h\",\"e\"]\n\n示例 2：\n输入：s = [\"a\"]\n输出：[\"a\"]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 187,
        number: "0187",
        title: "重复的DNA序列",
        difficulty: "medium",
        description: "DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'。\n\n例如，\"ACGAATTCCG\" 是一个 DNA序列 。\n在研究 DNA 时，识别 DNA 中的重复序列非常有用。\n\n给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。",
        example: "示例 1：\n输入：s = \"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT\"\n输出：[\"AAAAACCCCC\",\"CCCCCAAAAA\"]\n\n示例 2：\n输入：s = \"AAAAAAAAAAAAA\"\n输出：[\"AAAAAAAAAA\"]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 188,
        number: "0188",
        title: "买卖股票的最佳时机 IV",
        difficulty: "hard",
        description: "给你一个整数数组 prices 和一个整数 k ，其中 prices[i] 是某支给定的股票在第 i 天的价格。\n\n设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。\n\n注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。",
        example: "示例 1：\n输入：k = 2, prices = [2,4,1]\n输出：2\n解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。\n\n示例 2：\n输入：k = 2, prices = [3,2,6,5,0,3]\n输出：7\n解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。\n随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*k)",
                spaceComplexity: "O(n*k)"
            }
        ]
    },
    {
        id: 189,
        number: "0189",
        title: "轮转数组",
        difficulty: "medium",
        description: "给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。",
        example: "示例 1:\n输入: nums = [1,2,3,4,5,6,7], k = 3\n输出: [5,6,7,1,2,3,4]\n解释:\n向右轮转 1 步: [7,1,2,3,4,5,6]\n向右轮转 2 步: [6,7,1,2,3,4,5]\n向右轮转 3 步: [5,6,7,1,2,3,4]\n\n示例 2:\n输入：nums = [-1,-100,3,99], k = 2\n输出：[3,99,-1,-100]\n解释: \n向右轮转 1 步: [99,-1,-100,3]\n向右轮转 2 步: [3,99,-1,-100]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 190,
        number: "0190",
        title: "颠倒二进制位",
        difficulty: "easy",
        description: "颠倒给定的 32 位无符号整数的二进制位。\n\n提示：\n- 请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。\n- 在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。",
        example: "示例 1：\n输入：n = 00000010100101000001111010011100\n输出：964176192 (00111001011110000010100101000000)\n解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，\n     因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。\n\n示例 2：\n输入：n = 11111111111111111111111111111101\n输出：3221225471 (10111111111111111111111111111111)\n解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，\n     因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 191,
        number: "0191",
        title: "位1的个数",
        difficulty: "easy",
        description: "编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。\n\n提示：\n- 请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。\n- 在 Java 中，编译器使用二进制补码记法来表示有符号整数。",
        example: "示例 1：\n输入：n = 11\n输出：3\n解释：输入的二进制串 1011 中，共有 3 个设置位。\n\n示例 2：\n输入：n = 128\n输出：1\n解释：输入的二进制串 10000000 中，共有 1 个设置位。\n\n示例 3：\n输入：n = 2147483645\n输出：30\n解释：输入的二进制串 1111111111111111111111111111101 中，共有 30 个设置位。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 192,
        number: "0192",
        title: "统计词频",
        difficulty: "medium",
        description: "写一个 bash 脚本以统计一个文本文件 words.txt 中每个单词出现的频率。\n\n为了简单起见，你可以假设：\n- words.txt只包含小写字母和 ' ' 。\n- 每个单词只由小写字母组成。\n- 单词间由一个或多个空格字符分隔。",
        example: "假设 words.txt 内容如下：\nthe day is sunny the the\nthe sunny is is\n\n你的脚本应当输出（以词频降序排列）：\nthe 4\nis 3\nsunny 2\nday 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 193,
        number: "0193",
        title: "有效电话号码",
        difficulty: "easy",
        description: "给定一个包含电话号码列表（一行一个电话号码）的文本文件 file.txt，写一个单行 bash 脚本输出所有有效的电话号码。\n\n你可以假设一个有效的电话号码必须满足以下两种格式： (xxx) xxx-xxxx 或 xxx-xxx-xxxx。（x 表示一个数字）\n\n你也可以假设每行前后没有多余的空格字符。",
        example: "假设 file.txt 内容如下：\n987-123-4567\n123 456 7890\n(123) 456-7890\n\n你的脚本应当输出下列有效的电话号码：\n987-123-4567\n(123) 456-7890",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 194,
        number: "0194",
        title: "转置文件",
        difficulty: "medium",
        description: "给定一个文件 file.txt，转置它的内容。\n\n你可以假设每行列数相同，并且每个字段由 ' ' 分隔。",
        example: "假设 file.txt 内容如下：\nname age\nalice 21\nryan 30\n\n应当输出：\nname alice ryan\nage 21 30",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 195,
        number: "0195",
        title: "第十行",
        difficulty: "easy",
        description: "给定一个文本文件 file.txt，请只输出这个文件中的第十行。",
        example: "假设 file.txt 有如下内容：\nLine 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10\n\n你的脚本应当输出：\nLine 10\n\n如果文件少于十行，你应当输出什么？\n在这种情况下，你应当输出空。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 196,
        number: "0196",
        title: "删除重复的电子邮箱",
        difficulty: "easy",
        description: "编写一个 SQL 查询，来删除 Person 表中所有重复的电子邮箱，重复的邮箱里只保留 Id 最小 的那个。\n\nPerson 表：\n+----+------------------+\n| Id | Email            |\n+----+------------------+\n| 1  | john@example.com |\n| 2  | bob@example.com  |\n| 3  | john@example.com |\n+----+------------------+\n\n例如，在运行你的查询语句之后，上面的 Person 表应返回以下几行:\n+----+------------------+\n| Id | Email            |\n+----+------------------+\n| 1  | john@example.com |\n| 2  | bob@example.com  |\n+----+------------------+",
        example: "",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 197,
        number: "0197",
        title: "上升的温度",
        difficulty: "easy",
        description: "表 Weather\n+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| id            | int     |\n| recordDate    | date    |\n| temperature   | int     |\n+---------------+---------+\nid 是这个表的主键\n该表包含特定日期的温度信息\n\n编写一个 SQL 查询，来查找与之前（昨天的）日期相比温度更高的所有日期的 id 。\n\n返回结果 不要求顺序 。",
        example: "查询结果格式如下例：\nWeather\n+----+------------+-------------+\n| id | recordDate | Temperature |\n+----+------------+-------------+\n| 1  | 2015-01-01 | 10          |\n| 2  | 2015-01-02 | 25          |\n| 3  | 2015-01-03 | 20          |\n| 4  | 2015-01-04 | 30          |\n+----+------------+-------------+\n\nResult table:\n+----+\n| id |\n+----+\n| 2  |\n| 4  |\n+----+\n2015-01-02 的温度比前一天高（10 -> 25）\n2015-01-04 的温度比前一天高（20 -> 30）",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 198,
        number: "0198",
        title: "打家劫舍",
        difficulty: "medium",
        description: "你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。\n\n给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。",
        example: "示例 1：\n输入：[1,2,3,1]\n输出：4\n解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。\n     偷窃到的最高金额 = 1 + 3 = 4 。\n\n示例 2：\n输入：[2,7,9,3,1]\n输出：12\n解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。\n     偷窃到的最高金额 = 2 + 9 + 1 = 12 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 199,
        number: "0199",
        title: "二叉树的右视图",
        difficulty: "medium",
        description: "给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。",
        example: "示例:\n输入: [1,2,3,null,5,null,4]\n输出: [1, 3, 4]\n解释:\n   1            <---\n /   \\\n2     3         <---\n \\     \\\n  5     4       <---",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 200,
        number: "0200",
        title: "岛屿数量",
        difficulty: "medium",
        description: "给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。\n\n岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。\n\n此外，你可以假设该网格的四条边均被水包围。",
        example: "示例 1：\n输入：grid = [\n  ['1','1','1','1','0'],\n  ['1','1','0','1','0'],\n  ['1','1','0','0','0'],\n  ['0','0','0','0','0']\n]\n输出：1\n\n示例 2：\n输入：grid = [\n  ['1','1','0','0','0'],\n  ['1','1','0','0','0'],\n  ['0','0','1','0','0'],\n  ['0','0','0','1','1']\n]\n输出：3",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 201,
        number: "0201",
        title: "数字范围按位与",
        difficulty: "medium",
        description: "给你两个整数 left 和 right ，表示区间 [left, right] ，返回此区间内所有数字按位与的结果（包含 left 、right 端点）。",
        example: "示例 1：\n输入：left = 5, right = 7\n输出：4\n\n示例 2：\n输入：left = 0, right = 0\n输出：0\n\n示例 3：\n输入：left = 1, right = 2147483647\n输出：0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 202,
        number: "0202",
        title: "快乐数",
        difficulty: "easy",
        description: "编写一个算法来判断一个数 n 是不是快乐数。\n\n「快乐数」 定义为：\n\n对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。\n然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。\n如果这个过程 结果为 1，那么这个数就是快乐数。\n如果 n 是 快乐数 就返回 true ；不是，则返回 false 。",
        example: "示例 1：\n输入：n = 19\n输出：true\n解释：\n1² + 9² = 82\n8² + 2² = 68\n6² + 8² = 100\n1² + 0² + 0² = 1\n\n示例 2：\n输入：n = 2\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 203,
        number: "0203",
        title: "移除链表元素",
        difficulty: "easy",
        description: "给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。",
        example: "示例 1：\n输入：head = [1,2,6,3,4,5,6], val = 6\n输出：[1,2,3,4,5]\n\n示例 2：\n输入：head = [], val = 1\n输出：[]\n\n示例 3：\n输入：head = [7,7,7,7], val = 7\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 204,
        number: "0204",
        title: "计数质数",
        difficulty: "medium",
        description: "给定整数 n ，返回 所有小于非负整数 n 的质数的数量 。",
        example: "示例 1：\n输入：n = 10\n输出：4\n解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。\n\n示例 2：\n输入：n = 0\n输出：0\n\n示例 3：\n输入：n = 1\n输出：0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 205,
        number: "0205",
        title: "同构字符串",
        difficulty: "easy",
        description: "给定两个字符串 s 和 t ，判断它们是否是同构的。\n\n如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。\n\n每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。",
        example: "示例 1：\n输入：s = \"egg\", t = \"add\"\n输出：true\n\n示例 2：\n输入：s = \"foo\", t = \"bar\"\n输出：false\n\n示例 3：\n输入：s = \"paper\", t = \"title\"\n输出：true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 206,
        number: "0206",
        title: "反转链表",
        difficulty: "easy",
        description: "给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。",
        example: "示例 1：\n输入：head = [1,2,3,4,5]\n输出：[5,4,3,2,1]\n\n示例 2：\n输入：head = [1,2]\n输出：[2,1]\n\n示例 3：\n输入：head = []\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 207,
        number: "0207",
        title: "课程表",
        difficulty: "medium",
        description: "你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。\n\n在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程 bi 。\n\n例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。\n请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：numCourses = 2, prerequisites = [[1,0]]\n输出：true\n解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。\n\n示例 2：\n输入：numCourses = 2, prerequisites = [[1,0],[0,1]]\n输出：false\n解释：总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n+m)",
                spaceComplexity: "O(n+m)"
            }
        ]
    },
    {
        id: 208,
        number: "0208",
        title: "实现 Trie (前缀树)",
        difficulty: "medium",
        description: "Trie（发音类似 \"try\"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。\n\n请你实现 Trie 类：\n\nTrie() 初始化前缀树对象。\nvoid insert(String word) 向前缀树中插入字符串 word 。\nboolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。\nboolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。",
        example: "示例：\n输入\n[\"Trie\", \"insert\", \"search\", \"search\", \"startsWith\", \"insert\", \"search\"]\n[[], [\"apple\"], [\"apple\"], [\"app\"], [\"app\"], [\"app\"], [\"app\"]]\n输出\n[null, null, true, false, true, null, true]\n\n解释\nTrie trie = new Trie();\ntrie.insert(\"apple\");\ntrie.search(\"apple\");   // 返回 True\ntrie.search(\"app\");     // 返回 False\ntrie.startsWith(\"app\"); // 返回 True\ntrie.insert(\"app\");\ntrie.search(\"app\");     // 返回 True",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(|S|)",
                spaceComplexity: "O(|T|·Σ)"
            }
        ]
    },
    {
        id: 209,
        number: "0209",
        title: "长度最小的子数组",
        difficulty: "medium",
        description: "给定一个含有 n 个正整数的数组和一个正整数 target 。\n\n找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。",
        example: "示例 1：\n输入：target = 7, nums = [2,3,1,2,4,3]\n输出：2\n解释：子数组 [4,3] 是该条件下的长度最小的子数组。\n\n示例 2：\n输入：target = 4, nums = [1,4,4]\n输出：1\n\n示例 3：\n输入：target = 11, nums = [1,1,1,1,1,1,1,1]\n输出：0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 210,
        number: "0210",
        title: "课程表 II",
        difficulty: "medium",
        description: "现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。\n\n例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。\n返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。",
        example: "示例 1：\n输入：numCourses = 2, prerequisites = [[1,0]]\n输出：[0,1]\n解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。\n\n示例 2：\n输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\n输出：[0,2,1,3]\n解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。\n因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。\n\n示例 3：\n输入：numCourses = 1, prerequisites = []\n输出：[0]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n+m)",
                spaceComplexity: "O(n+m)"
            }
        ]
    },
    {
        id: 211,
        number: "0211",
        title: "添加与搜索单词 - 数据结构设计",
        difficulty: "medium",
        description: "请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。\n\n实现词典类 WordDictionary ：\n\nWordDictionary() 初始化词典对象\nvoid addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配\nbool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回 false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。",
        example: "示例：\n输入：\n[\"WordDictionary\",\"addWord\",\"addWord\",\"addWord\",\"search\",\"search\",\"search\",\"search\"]\n[[],[\"bad\"],[\"dad\"],[\"mad\"],[\"pad\"],[\"bad\"],[\".ad\"],[\"b..\"]]\n输出：\n[null,null,null,null,false,true,true,true]\n\n解释：\nWordDictionary wordDictionary = new WordDictionary();\nwordDictionary.addWord(\"bad\");\nwordDictionary.addWord(\"dad\");\nwordDictionary.addWord(\"mad\");\nwordDictionary.search(\"pad\"); // 返回 False\nwordDictionary.search(\"bad\"); // 返回 True\nwordDictionary.search(\".ad\"); // 返回 True\nwordDictionary.search(\"b..\"); // 返回 True",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 212,
        number: "0212",
        title: "单词搜索 II",
        difficulty: "hard",
        description: "给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words， 返回所有二维网格上的单词 。\n\n单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中\"相邻\"单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。",
        example: "示例 1：\n输入：board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]\n输出：[\"eat\",\"oath\"]\n\n示例 2：\n输入：board = [[\"a\",\"b\"],[\"c\",\"d\"]], words = [\"abcb\"]\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n*4^L)",
                spaceComplexity: "O(k*L)"
            }
        ]
    },
    {
        id: 213,
        number: "0213",
        title: "打家劫舍 II",
        difficulty: "medium",
        description: "你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。\n\n给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。",
        example: "示例 1：\n输入：nums = [2,3,2]\n输出：3\n解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。\n\n示例 2：\n输入：nums = [1,2,3,1]\n输出：4\n解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。\n     偷窃到的最高金额 = 1 + 3 = 4 。\n\n示例 3：\n输入：nums = [1,2,3]\n输出：3",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 214,
        number: "0214",
        title: "最短回文串",
        difficulty: "hard",
        description: "给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。",
        example: "示例 1：\n输入：s = \"aacecaaa\"\n输出：\"aaacecaaa\"\n\n示例 2：\n输入：s = \"abcd\"\n输出：\"dcbabcd\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 215,
        number: "0215",
        title: "数组中的第K个最大元素",
        difficulty: "medium",
        description: "给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。\n\n请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。\n\n你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。",
        example: "示例 1：\n输入：[3,2,1,5,6,4], k = 2\n输出：5\n\n示例 2：\n输入：[3,2,3,1,2,4,5,5,6], k = 4\n输出：4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 216,
        number: "0216",
        title: "组合总和 III",
        difficulty: "medium",
        description: "找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：\n\n只使用数字1到9\n每个数字 最多使用一次 \n返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。",
        example: "示例 1：\n输入: k = 3, n = 7\n输出: [[1,2,4]]\n解释:\n1 + 2 + 4 = 7\n没有其他符合的组合了。\n\n示例 2：\n输入: k = 3, n = 9\n输出: [[1,2,6], [1,3,5], [2,3,4]]\n解释:\n1 + 2 + 6 = 9\n1 + 3 + 5 = 9\n2 + 3 + 4 = 9\n没有其他符合的组合了。\n\n示例 3：\n输入: k = 4, n = 1\n输出: []\n解释: 不存在有效的组合。\n在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(C(9,k))",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 217,
        number: "0217",
        title: "存在重复元素",
        difficulty: "easy",
        description: "给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。",
        example: "示例 1：\n输入：nums = [1,2,3,1]\n输出：true\n\n示例 2：\n输入：nums = [1,2,3,4]\n输出：false\n\n示例 3：\n输入：nums = [1,1,1,3,3,4,3,2,4,2]\n输出：true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 218,
        number: "0218",
        title: "天际线问题",
        difficulty: "hard",
        description: "城市的天际线是从远处观看该城市中所有建筑物形成的轮廓的外部轮廓。给你所有建筑物的位置和高度，请返回由这些建筑物形成的 天际线 。\n\n每个建筑物的几何信息由数组 buildings 表示，其中三元组 buildings[i] = [lefti, righti, heighti] 表示：\n\nlefti 是第 i 座建筑物左边缘的 x 坐标。\nrighti 是第 i 座建筑物右边缘的 x 坐标。\nheighti 是第 i 座建筑物的高度。\n天际线 应该表示为由 \"关键点\" 组成的列表，格式 [[x1,y1],[x2,y2],...] ，并按 x 坐标 进行 排序 。关键点是水平线段的左端点。列表中最后一个点是最右侧建筑物的终点，y 坐标始终为 0 ，仅用于标记天际线的终点。此外，任何两个相邻建筑物之间的地面都应被视为天际线轮廓的一部分。\n\n注意：输出天际线中不得有连续的相同高度的水平线。例如 [...[2 3], [4 5], [7 5], [11 5], [12 7]...] 是不正确的答案；三条高度为 5 的线应该在最终输出中合并为一个：[...[2 3], [4 5], [12 7], ...]",
        example: "示例 1：\n输入：buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]\n输出：[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]\n解释：\n图A显示输入的所有建筑物的位置和高度，\n图B显示由这些建筑物形成的天际线。图B中的红点表示输出列表中的关键点。\n\n示例 2：\n输入：buildings = [[0,2,3],[2,5,3]]\n输出：[[0,3],[5,0]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(nlogn)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 219,
        number: "0219",
        title: "存在重复元素 II",
        difficulty: "easy",
        description: "给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：nums = [1,2,3,1], k = 3\n输出：true\n\n示例 2：\n输入：nums = [1,0,1,1], k = 1\n输出：true\n\n示例 3：\n输入：nums = [1,2,3,1,2,3], k = 2\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(min(n,k))"
            }
        ]
    },
    {
        id: 220,
        number: "0220",
        title: "存在重复元素 III",
        difficulty: "medium",
        description: "给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。\n\n如果存在则返回 true，不存在返回 false。",
        example: "示例 1：\n输入：nums = [1,2,3,1], k = 3, t = 0\n输出：true\n\n示例 2：\n输入：nums = [1,0,1,1], k = 1, t = 2\n输出：true\n\n示例 3：\n输入：nums = [1,5,9,1,5,9], k = 2, t = 3\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log min(n,k))",
                spaceComplexity: "O(min(n,k))"
            }
        ]
    },
    {
        id: 221,
        number: "0221",
        title: "最大正方形",
        difficulty: "medium",
        description: "在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。",
        example: "示例 1：\n输入：matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]\n输出：4\n\n示例 2：\n输入：matrix = [[\"0\",\"1\"],[\"1\",\"0\"]]\n输出：1\n\n示例 3：\n输入：matrix = [[\"0\"]]\n输出：0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 222,
        number: "0222",
        title: "完全二叉树的节点个数",
        difficulty: "medium",
        description: "给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。\n\n完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2^h 个节点。",
        example: "示例 1：\n输入：root = [1,2,3,4,5,6]\n输出：6\n\n示例 2：\n输入：root = []\n输出：0\n\n示例 3：\n输入：root = [1]\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log^2 n)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 223,
        number: "0223",
        title: "矩形面积",
        difficulty: "medium",
        description: "在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。\n\n每个矩形由其左下顶点和右上顶点坐标表示。",
        example: "示例：\n输入：-3, 0, 3, 4, 0, -1, 9, 2\n输出：45\n\n说明：假设矩形面积不会超出 int 的范围。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 224,
        number: "0224",
        title: "基本计算器",
        difficulty: "hard",
        description: "给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。\n\n注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。",
        example: "示例 1：\n输入：s = \"1 + 1\"\n输出：2\n\n示例 2：\n输入：s = \" 2-1 + 2 \"\n输出：3\n\n示例 3：\n输入：s = \"(1+(4+5+2)-3)+(6+8)\"\n输出：23",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 225,
        number: "0225",
        title: "用队列实现栈",
        difficulty: "easy",
        description: "请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。\n\n实现 MyStack 类：\n\nvoid push(int x) 将元素 x 压入栈顶。\nint pop() 移除并返回栈顶元素。\nint top() 返回栈顶元素。\nboolean empty() 如果栈是空的，返回 true ；否则，返回 false 。\n\n注意：\n\n你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。\n你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。",
        example: "示例：\n输入：\n[\"MyStack\", \"push\", \"push\", \"top\", \"pop\", \"empty\"]\n[[], [1], [2], [], [], []]\n输出：\n[null, null, null, 2, 2, false]\n\n解释：\nMyStack myStack = new MyStack();\nmyStack.push(1);\nmyStack.push(2);\nmyStack.top(); // 返回 2\nmyStack.pop(); // 返回 2\nmyStack.empty(); // 返回 False",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 226,
        number: "0226",
        title: "翻转二叉树",
        difficulty: "easy",
        description: "给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。",
        example: "示例 1：\n输入：root = [4,2,7,1,3,6,9]\n输出：[4,7,2,9,6,3,1]\n\n示例 2：\n输入：root = [2,1,3]\n输出：[2,3,1]\n\n示例 3：\n输入：root = []\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 227,
        number: "0227",
        title: "基本计算器 II",
        difficulty: "medium",
        description: "给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。\n\n整数除法仅保留整数部分。\n\n你可以假设给定的表达式总是有效的。所有中间结果将在 [-2^31, 2^31 - 1] 的范围内。\n\n注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。",
        example: "示例 1：\n输入：s = \"3+2*2\"\n输出：7\n\n示例 2：\n输入：s = \" 3/2 \"\n输出：1\n\n示例 3：\n输入：s = \" 3+5 / 2 \"\n输出：5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 228,
        number: "0228",
        title: "汇总区间",
        difficulty: "easy",
        description: "给定一个无重复元素的有序整数数组 nums 。\n\n返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。\n\n列表中的每个区间范围 [a,b] 应该按如下格式输出：\n\n\"a->b\" ，如果 a != b\n\"a\" ，如果 a == b",
        example: "示例 1：\n输入：nums = [0,1,2,4,5,7]\n输出：[\"0->2\",\"4->5\",\"7\"]\n解释：区间范围是：\n[0,2] --> \"0->2\"\n[4,5] --> \"4->5\"\n[7,7] --> \"7\"\n\n示例 2：\n输入：nums = [0,2,3,4,6,8,9]\n输出：[\"0\",\"2->4\",\"6\",\"8->9\"]\n解释：区间范围是：\n[0,0] --> \"0\"\n[2,4] --> \"2->4\"\n[6,6] --> \"6\"\n[8,9] --> \"8->9\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 229,
        number: "0229",
        title: "求众数 II",
        difficulty: "medium",
        description: "给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。",
        example: "示例 1：\n输入：[3,2,3]\n输出：[3]\n\n示例 2：\n输入：nums = [1]\n输出：[1]\n\n示例 3：\n输入：[1,1,1,3,3,2,2,2]\n输出：[1,2]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 230,
        number: "0230",
        title: "二叉搜索树中第K小的元素",
        difficulty: "medium",
        description: "给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。",
        example: "示例 1：\n输入：root = [3,1,4,null,2], k = 1\n输出：1\n\n示例 2：\n输入：root = [5,3,6,2,4,null,null,1], k = 3\n输出：3",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 231,
        number: "0231",
        title: "2的幂",
        difficulty: "easy",
        description: "给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。\n\n如果存在一个整数 x 使得 n == 2^x ，则认为 n 是 2 的幂次方。",
        example: "示例 1：\n输入：n = 1\n输出：true\n解释：2^0 = 1\n\n示例 2：\n输入：n = 16\n输出：true\n解释：2^4 = 16\n\n示例 3：\n输入：n = 3\n输出：false\n\n示例 4：\n输入：n = 4\n输出：true\n\n示例 5：\n输入：n = 5\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 232,
        number: "0232",
        title: "用栈实现队列",
        difficulty: "easy",
        description: "请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：\n\n实现 MyQueue 类：\n\nvoid push(int x) 将元素 x 推到队列的末尾\nint pop() 从队列的开头移除并返回元素\nint peek() 返回队列开头的元素\nboolean empty() 如果队列为空，返回 true ；否则，返回 false\n\n说明：\n\n你只能使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。\n你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。",
        example: "示例 1：\n输入：\n[\"MyQueue\", \"push\", \"push\", \"peek\", \"pop\", \"empty\"]\n[[], [1], [2], [], [], []]\n输出：\n[null, null, null, 1, 1, false]\n\n解释：\nMyQueue myQueue = new MyQueue();\nmyQueue.push(1); // queue is: [1]\nmyQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)\nmyQueue.peek(); // return 1\nmyQueue.pop(); // return 1, queue is [2]\nmyQueue.empty(); // return false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 233,
        number: "0233",
        title: "数字 1 的个数",
        difficulty: "hard",
        description: "给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。",
        example: "示例 1：\n输入：n = 13\n输出：6\n\n示例 2：\n输入：n = 0\n输出：0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 234,
        number: "0234",
        title: "回文链表",
        difficulty: "easy",
        description: "给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：head = [1,2,2,1]\n输出：true\n\n示例 2：\n输入：head = [1,2]\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 235,
        number: "0235",
        title: "二叉搜索树的最近公共祖先",
        difficulty: "easy",
        description: "给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。\n\n百度百科中最近公共祖先的定义为：\"对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。\"",
        example: "示例 1：\n输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\n输出: 6\n解释: 节点 2 和节点 8 的最近公共祖先是 6。\n\n示例 2：\n输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\n输出: 2\n解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(h)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 236,
        number: "0236",
        title: "二叉树的最近公共祖先",
        difficulty: "medium",
        description: "给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。\n\n百度百科中最近公共祖先的定义为：\"对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。\"",
        example: "示例 1：\n输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\n输出：3\n解释：节点 5 和节点 1 的最近公共祖先是节点 3 。\n\n示例 2：\n输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4\n输出：5\n解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。\n\n示例 3：\n输入：root = [1,2], p = 1, q = 2\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 237,
        number: "0237",
        title: "删除链表中的节点",
        difficulty: "easy",
        description: "请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。\n\n题目数据保证需要删除的节点 不是末尾节点 。",
        example: "示例 1：\n输入：head = [4,5,1,9], node = 5\n输出：[4,1,9]\n解释：指定链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9\n\n示例 2：\n输入：head = [4,5,1,9], node = 1\n输出：[4,5,9]\n解释：指定链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 238,
        number: "0238",
        title: "除自身以外数组的乘积",
        difficulty: "medium",
        description: "给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。\n\n题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。\n\n请不要使用除法，且在 O(n) 时间复杂度内完成此题。",
        example: "示例 1：\n输入：nums = [1,2,3,4]\n输出：[24,12,8,6]\n\n示例 2：\n输入：nums = [-1,1,0,-3,3]\n输出：[0,0,9,0,0]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 239,
        number: "0239",
        title: "滑动窗口最大值",
        difficulty: "hard",
        description: "给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。\n\n返回 滑动窗口中的最大值 。",
        example: "示例 1：\n输入：nums = [1,3,-1,-3,5,3,6,7], k = 3\n输出：[3,3,5,5,6,7]\n解释：\n滑动窗口的位置                最大值\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7\n\n示例 2：\n输入：nums = [1], k = 1\n输出：[1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 240,
        number: "0240",
        title: "搜索二维矩阵 II",
        difficulty: "medium",
        description: "编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：\n\n每行的元素从左到右升序排列。\n每列的元素从上到下升序排列。",
        example: "示例 1：\n输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5\n输出：true\n\n示例 2：\n输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m+n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 241,
        number: "0241",
        title: "为运算表达式设计优先级",
        difficulty: "medium",
        description: "给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 +, - 以及 * 。",
        example: "示例 1：\n输入: \"2-1-1\"\n输出: [0, 2]\n解释: \n((2-1)-1) = 0 \n(2-(1-1)) = 2\n\n示例 2：\n输入: \"2*3-4*5\"\n输出: [-34, -14, -10, -10, 10]\n解释: \n(2*(3-(4*5))) = -34 \n((2*3)-(4*5)) = -14 \n((2*(3-4))*5) = -10 \n(2*((3-4)*5)) = -10 \n(((2*3)-4)*5) = 10",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^n)",
                spaceComplexity: "O(2^n)"
            }
        ]
    },
    {
        id: 242,
        number: "0242",
        title: "有效的字母异位词",
        difficulty: "easy",
        description: "给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。\n\n注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。",
        example: "示例 1：\n输入: s = \"anagram\", t = \"nagaram\"\n输出: true\n\n示例 2：\n输入: s = \"rat\", t = \"car\"\n输出: false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 243,
        number: "0243",
        title: "最短单词距离",
        difficulty: "easy",
        description: "给定一个单词列表和两个单词 word1 和 word2，返回列表中这两个单词之间的最短距离。",
        example: "示例：\n假设 words = [\"practice\", \"makes\", \"perfect\", \"coding\", \"makes\"]\n输入: word1 = \"coding\", word2 = \"practice\"\n输出: 3\n输入: word1 = \"makes\", word2 = \"coding\"\n输出: 1\n\n注意：\n你可以假设 word1 不等于 word2, 并且 word1 和 word2 都在列表里。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 244,
        number: "0244",
        title: "最短单词距离 II",
        difficulty: "medium",
        description: "请设计一个类，使该类的构造函数能够接收一个单词列表。然后再实现一个方法，该方法能够分别接收两个单词 word1 和 word2，并返回列表中这两个单词之间的最短距离。您的方法将被以不同的参数调用多次。",
        example: "示例：\n假设 words = [\"practice\", \"makes\", \"perfect\", \"coding\", \"makes\"]\n输入: word1 = \"coding\", word2 = \"practice\"\n输出: 3\n输入: word1 = \"makes\", word2 = \"coding\"\n输出: 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 245,
        number: "0245",
        title: "最短单词距离 III",
        difficulty: "medium",
        description: "给定一个单词列表和两个单词 word1 和 word2，返回列表中这两个单词之间的最短距离。\n\nword1 和 word2 是有可能相同的，并且它们将分别表示为列表中两个独立的单词。",
        example: "示例：\n假设 words = [\"practice\", \"makes\", \"perfect\", \"coding\", \"makes\"]\n输入: word1 = \"makes\", word2 = \"coding\"\n输出: 1\n输入: word1 = \"makes\", word2 = \"makes\"\n输出: 3\n\n注意：\n你可以假设 word1 和 word2 都在列表里。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 246,
        number: "0246",
        title: "中心对称数",
        difficulty: "easy",
        description: "中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。\n\n请写一个函数来判断该数字是否是中心对称数，其输入将会以一个字符串的形式来表达数字。",
        example: "示例 1：\n输入: \"69\"\n输出: true\n\n示例 2：\n输入: \"88\"\n输出: true\n\n示例 3：\n输入: \"962\"\n输出: false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 247,
        number: "0247",
        title: "中心对称数 II",
        difficulty: "medium",
        description: "中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。\n\n找到所有长度为 n 的中心对称数。",
        example: "示例：\n输入: n = 2\n输出: [\"11\",\"69\",\"88\",\"96\"]\n\n输入: n = 1\n输出: [\"0\",\"1\",\"8\"]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(5^(n/2))",
                spaceComplexity: "O(5^(n/2))"
            }
        ]
    },
    {
        id: 248,
        number: "0248",
        title: "中心对称数 III",
        difficulty: "hard",
        description: "中心对称数是指一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。\n\n写一个函数来计算范围在 [low, high] 之间中心对称数的个数。",
        example: "示例：\n输入: low = \"50\", high = \"100\"\n输出: 3\n解释: 69，88 和 96 是三个在该范围内的中心对称数",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log(high))",
                spaceComplexity: "O(log(high))"
            }
        ]
    },
    {
        id: 249,
        number: "0249",
        title: "移位字符串分组",
        difficulty: "medium",
        description: "给定一个字符串，对该字符串可以进行 \"移位\" 的操作，也就是将字符串中每个字母都变为其在字母表中后续的字母，比如：\"abc\" -> \"bcd\"。这样，我们可以持续进行 \"移位\" 操作，从而生成如下移位序列：\n\n\"abc\" -> \"bcd\" -> ... -> \"xyz\"\n\n给定一个包含仅小写字母字符串的列表，将该列表中所有满足 \"移位\" 操作规律的组合进行分组并返回。",
        example: "示例：\n输入：[\"abc\", \"bcd\", \"acef\", \"xyz\", \"az\", \"ba\", \"a\", \"z\"]\n输出：[[\"abc\",\"bcd\",\"xyz\"],[\"az\",\"ba\"],[\"acef\"],[\"a\"],[\"z\"]]\n解释：可以认为字母表首尾相接，所以 'z' 的后续为 'a'，所以 [\"az\",\"ba\"] 也满足 \"移位\" 操作规律。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*k)",
                spaceComplexity: "O(n*k)"
            }
        ]
    },
    {
        id: 250,
        number: "0250",
        title: "统计同值子树",
        difficulty: "medium",
        description: "给定一个二叉树，统计该二叉树数值相同的子树个数。\n\n同值子树是指该子树的所有节点都拥有相同的数值。",
        example: "示例：\n输入: root = [5,1,5,5,5,null,5]\n输出: 4\n解释: \n这里有 4 个子树：\n1. 根节点 (5)，值为 5\n2. 根节点的左子树 (1)，值为 1\n3. 根节点的右子树 (5)，值为 5\n4. 根节点右子树的左子树 (5)，值为 5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 251,
        number: "0251",
        title: "展开二维向量",
        difficulty: "medium",
        description: "请设计并实现一个能够展开二维向量的迭代器。该迭代器需要支持 next 和 hasNext 两种操作。\n\n实现 Vector2D 类：\n- Vector2D(int[][] vec) 使用二维向量 vec 初始化对象\n- next() 返回数组中的下一个元素，并将指针移动到下一个元素处\n- hasNext() 如果数组中存在下一个元素，则返回 true；否则，返回 false",
        example: "示例 1：\n输入：\n[\"Vector2D\", \"next\", \"next\", \"next\", \"hasNext\", \"hasNext\", \"next\", \"hasNext\"]\n[[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]\n输出：\n[null, 1, 2, 3, true, true, 4, false]\n\n解释：\nVector2D vector2D = new Vector2D([[1, 2], [3], [4]]);\nvector2D.next();    // 返回 1\nvector2D.next();    // 返回 2\nvector2D.next();    // 返回 3\nvector2D.hasNext(); // 返回 True\nvector2D.hasNext(); // 返回 True\nvector2D.next();    // 返回 4\nvector2D.hasNext(); // 返回 False",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 252,
        number: "0252",
        title: "会议室",
        difficulty: "easy",
        description: "给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，请你判断一个人是否能够参加这里面的全部会议。",
        example: "示例 1：\n输入: [[0,30],[5,10],[15,20]]\n输出: false\n\n示例 2：\n输入: [[7,10],[2,4]]\n输出: true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(nlogn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 253,
        number: "0253",
        title: "会议室 II",
        difficulty: "medium",
        description: "给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。",
        example: "示例 1：\n输入: [[0, 30],[5, 10],[15, 20]]\n输出: 2\n\n示例 2：\n输入: [[7,10],[2,4]]\n输出: 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(nlogn)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 254,
        number: "0254",
        title: "因子的组合",
        difficulty: "medium",
        description: "整数可以被看作是其因子的乘积。\n\n例如：\n8 = 2 x 2 x 2;\n  = 2 x 4.\n\n请实现一个函数，该函数接收一个整数 n 并返回该整数所有的因子组合。",
        example: "示例 1：\n输入: 1\n输出: []\n\n示例 2：\n输入: 12\n输出:\n[\n  [2, 6],\n  [2, 2, 3],\n  [3, 4]\n]\n\n示例 3：\n输入: 37\n输出: []\n\n示例 4：\n输入: 32\n输出:\n[\n  [2, 16],\n  [2, 2, 8],\n  [2, 2, 2, 4],\n  [2, 2, 2, 2, 2],\n  [2, 4, 4],\n  [4, 8]\n]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^(log n))",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 255,
        number: "0255",
        title: "验证前序遍历序列二叉搜索树",
        difficulty: "medium",
        description: "给定一个整数数组，你需要验证它是否是一个二叉搜索树正确的前序遍历序列。\n\n你可以假设该序列中的数都是不相同的。",
        example: "示例 1：\n输入: [5,2,1,3,6]\n输出: true\n\n示例 2：\n输入: [5,2,6,1,3]\n输出: false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 256,
        number: "0256",
        title: "粉刷房子",
        difficulty: "medium",
        description: "假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。\n\n当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的矩阵来表示的。\n\n例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。请你计算出粉刷完所有房子最少的花费成本。",
        example: "示例：\n输入: [[17,2,17],[16,16,5],[14,3,19]]\n输出: 10\n解释: 将 0 号房子粉刷成蓝色，1 号房子粉刷成绿色，2 号房子粉刷成蓝色。\n     最少花费: 2 + 5 + 3 = 10。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 257,
        number: "0257",
        title: "二叉树的所有路径",
        difficulty: "easy",
        description: "给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。\n\n叶子节点 是指没有子节点的节点。",
        example: "示例 1：\n输入：root = [1,2,3,null,5]\n输出：[\"1->2->5\",\"1->3\"]\n\n示例 2：\n输入：root = [1]\n输出：[\"1\"]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 258,
        number: "0258",
        title: "各位相加",
        difficulty: "easy",
        description: "给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。\n\n你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？",
        example: "示例 1：\n输入: num = 38\n输出: 2\n解释: 各位相加的过程为：\n38 --> 3 + 8 --> 11\n11 --> 1 + 1 --> 2\n由于 2 是一位数，所以返回 2。\n\n示例 2：\n输入: num = 0\n输出: 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 259,
        number: "0259",
        title: "较小的三数之和",
        difficulty: "medium",
        description: "给定一个长度为 n 的整数数组和一个目标值 target，寻找能够使条件 nums[i] + nums[j] + nums[k] < target 成立的三元组 i, j, k 个数（0 <= i < j < k < n）。",
        example: "示例 1：\n输入: nums = [-2,0,1,3], target = 2\n输出: 2\n解释: 因为有两个三元组满足条件：[-2,0,1], [-2,0,3]\n\n示例 2：\n输入: nums = [], target = 0\n输出: 0\n\n示例 3：\n输入: nums = [0,0,0], target = 0\n输出: 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 260,
        number: "0260",
        title: "只出现一次的数字 III",
        difficulty: "medium",
        description: "给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。\n\n进阶：你的算法应该具有线性时间复杂度。你能否在不使用额外空间的情况下解决此问题？",
        example: "示例 1：\n输入：nums = [1,2,1,3,2,5]\n输出：[3,5]\n解释：[5, 3] 也是有效的答案。\n\n示例 2：\n输入：nums = [-1,0]\n输出：[-1,0]\n\n示例 3：\n输入：nums = [0,1]\n输出：[1,0]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 261,
        number: "0261",
        title: "以图判树",
        difficulty: "medium",
        description: "给定从 0 到 n-1 标号的 n 个结点，和一个无向边列表（每条边以结点对来表示），请编写一个函数来判断这些边是否能够形成一个合法有效的树结构。\n\n注意：你可以假定边列表 edges 中不会出现重复的边。由于所有的边是无向边，边 [0,1] 和边 [1,0] 是相同的，因此不会同时出现在边列表 edges 中。",
        example: "示例 1：\n输入: n = 5, edges = [[0,1], [0,2], [0,3], [1,4]]\n输出: true\n\n示例 2：\n输入: n = 5, edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]\n输出: false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 262,
        number: "0262",
        title: "行程和用户",
        difficulty: "hard",
        description: "表：Trips\n+-------------+----------+\n| Column Name | Type     |\n+-------------+----------+\n| id          | int      |\n| client_id   | int      |\n| driver_id   | int      |\n| city_id     | int      |\n| status      | enum     |\n| request_at  | date     |     \n+-------------+----------+\nid 是这张表的主键。\nstatus 是一个枚举类型，取值为 ('completed', 'cancelled_by_driver', 'cancelled_by_client')。\n\n表：Users\n+-------------+----------+\n| Column Name | Type     |\n+-------------+----------+\n| users_id    | int      |\n| banned      | enum     |\n| role        | enum     |\n+-------------+----------+\nusers_id 是这张表的主键。\nbanned 是一个枚举类型，取值为 ('Yes', 'No')。\nrole 是一个枚举类型，取值为 ('client', 'driver', 'partner')。\n\n写一段 SQL 语句查出 \"2013-10-01\" 至 \"2013-10-03\" 期间非禁止用户（乘客和司机都必须未被禁止）的取消率。取消率的计算方式如下：(被司机或乘客取消的非禁止用户生成的订单数量) / (非禁止用户生成的订单总数)。\n\n返回结果表中的数据可以按任意顺序组织。其中取消率 Cancellation Rate 需要四舍五入保留 两位小数 。",
        example: "示例：\n输入：\nTrips 表：\n+----+-----------+-----------+---------+--------+-------------+\n| id | client_id | driver_id | city_id | status | request_at |\n+----+-----------+-----------+---------+--------+-------------+\n| 1  | 1         | 10        | 1       | completed | 2013-10-01 |\n| 2  | 2         | 11        | 1       | cancelled_by_driver | 2013-10-01 |\n| 3  | 3         | 12        | 6       | completed | 2013-10-01 |\n| 4  | 4         | 13        | 6       | cancelled_by_client | 2013-10-01 |\n| 5  | 1         | 10        | 1       | completed | 2013-10-02 |\n| 6  | 2         | 11        | 6       | completed | 2013-10-02 |\n| 7  | 3         | 12        | 6       | completed | 2013-10-02 |\n| 8  | 2         | 12        | 12      | completed | 2013-10-03 |\n| 9  | 3         | 10        | 12      | completed | 2013-10-03 |\n| 10 | 4         | 13        | 12      | cancelled_by_driver | 2013-10-03 |\n+----+-----------+-----------+---------+--------+-------------+\n\nUsers 表：\n+----------+--------+--------+\n| users_id | banned | role   |\n+----------+--------+--------+\n| 1        | No     | client |\n| 2        | Yes    | client |\n| 3        | No     | client |\n| 4        | No     | client |\n| 10       | No     | driver |\n| 11       | No     | driver |\n| 12       | No     | driver |\n| 13       | No     | driver |\n+----------+--------+--------+\n\n输出：\n+-------------+-------------------+\n| Day         | Cancellation Rate |\n+-------------+-------------------+\n| 2013-10-01  | 0.33              |\n| 2013-10-02  | 0.00              |\n| 2013-10-03  | 0.50              |\n+-------------+-------------------+\n\n解释：\n2013-10-01：\n  - 共有 4 条请求，其中 2 条取消。\n  - 然而，ID=2 的请求是由禁止用户（user_id=2）发出的，所以计算时应当忽略它。\n  - 因此，总共有 3 条非禁止请求，其中 1 条取消。\n  - 取消率为 (1 / 3) = 0.33\n2013-10-02：\n  - 共有 3 条请求，其中 0 条取消。\n  - 然而，ID=6 的请求是由禁止用户发出的，所以计算时应当忽略它。\n  - 因此，总共有 2 条非禁止请求，其中 0 条取消。\n  - 取消率为 (0 / 2) = 0.00\n2013-10-03：\n  - 共有 3 条请求，其中 1 条取消。\n  - 然而，ID=8 的请求是由禁止用户发出的，所以计算时应当忽略它。\n  - 因此，总共有 2 条非禁止请求，其中 1 条取消。\n  - 取消率为 (1 / 2) = 0.50",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 263,
        number: "0263",
        title: "丑数",
        difficulty: "easy",
        description: "丑数 就是只包含质因数 2、3 和 5 的正整数。\n\n给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：n = 6\n输出：true\n解释：6 = 2 × 3\n\n示例 2：\n输入：n = 8\n输出：true\n解释：8 = 2 × 2 × 2\n\n示例 3：\n输入：n = 14\n输出：false\n解释：14 不是丑数，因为它包含了另外一个质因数 7 。\n\n示例 4：\n输入：n = 1\n输出：true\n解释：1 通常被视为丑数。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 264,
        number: "0264",
        title: "丑数 II",
        difficulty: "medium",
        description: "给你一个整数 n ，请你找出并返回第 n 个 丑数 。\n\n丑数 就是只包含质因子 2、3 和 5 的正整数。",
        example: "示例 1：\n输入：n = 10\n输出：12\n解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。\n\n示例 2：\n输入：n = 1\n输出：1\n解释：1 通常被视为丑数。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 265,
        number: "0265",
        title: "粉刷房子 II",
        difficulty: "hard",
        description: "假如有一排房子，共 n 个，每个房子可以被粉刷成 k 种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。\n\n当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x k 的矩阵来表示的。\n\n例如，costs[0][0] 表示第 0 号房子粉刷成 0 号颜色的成本花费；costs[1][2] 表示第 1 号房子粉刷成 2 号颜色的成本花费，以此类推。请你计算出粉刷完所有房子最少的花费成本。",
        example: "示例：\n输入: costs = [[1,5,3],[2,9,4]]\n输出: 5\n解释: 将 0 号房子粉刷成 0 号颜色，1 号房子粉刷成 2 号颜色。最少花费: 1 + 4 = 5; \n     或者将 0 号房子粉刷成 2 号颜色，1 号房子粉刷成 0 号颜色。最少花费: 3 + 2 = 5.",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*k)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 266,
        number: "0266",
        title: "回文排列",
        difficulty: "easy",
        description: "给定一个字符串，判断该字符串中是否可以通过重新排列组合，形成一个回文字符串。",
        example: "示例 1：\n输入: \"code\"\n输出: false\n\n示例 2：\n输入: \"aab\"\n输出: true\n\n示例 3：\n输入: \"carerac\"\n输出: true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 267,
        number: "0267",
        title: "回文排列 II",
        difficulty: "medium",
        description: "给定一个字符串 s ，返回其通过重新排列组合后所有可能的回文字符串，并去除重复的组合。\n\n如不能形成任何回文排列时，则返回一个空列表。",
        example: "示例 1：\n输入: \"aabb\"\n输出: [\"abba\", \"baab\"]\n\n示例 2：\n输入: \"abc\"\n输出: []",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n!)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 268,
        number: "0268",
        title: "丢失的数字",
        difficulty: "easy",
        description: "给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。",
        example: "示例 1：\n输入：nums = [3,0,1]\n输出：2\n解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。\n\n示例 2：\n输入：nums = [0,1]\n输出：2\n解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。\n\n示例 3：\n输入：nums = [9,6,4,2,3,5,7,0,1]\n输出：8\n解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。\n\n示例 4：\n输入：nums = [0]\n输出：1\n解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 269,
        number: "0269",
        title: "火星词典",
        difficulty: "hard",
        description: "现有一种使用英语字母的外星文语言，这门语言的字母顺序与英语顺序不同。\n\n给定一个字符串列表 words ，作为这门语言的词典，words 中的字符串已经 按这门新语言的字母顺序进行了排序 。\n\n请你根据该词典还原出此语言中已知的字母顺序，并 按字母递增顺序 排列。若不存在合法字母顺序，返回 \"\" 。若存在多种可能的合法字母顺序，返回其中 任意一种 顺序即可。\n\n字符串 s 字典顺序小于 字符串 t 有两种情况：\n- 在第一个不同字母处，如果 s 中的字母在这门外星语言的字母顺序中位于 t 中字母之前，那么 s 的字典顺序小于 t 。\n- 如果前面 min(s.length, t.length) 字母都相同，那么 s.length < t.length 时，s 的字典顺序也小于 t 。",
        example: "示例 1：\n输入：words = [\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]\n输出：\"wertf\"\n\n示例 2：\n输入：words = [\"z\",\"x\"]\n输出：\"zx\"\n\n示例 3：\n输入：words = [\"z\",\"x\",\"z\"]\n输出：\"\"\n解释：不存在合法字母顺序，因此返回 \"\" 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 270,
        number: "0270",
        title: "最接近的二叉搜索树值",
        difficulty: "easy",
        description: "给定一个不为空的二叉搜索树和一个目标值 target，请在该二叉搜索树中找到最接近目标值 target 的数值。\n\n注意：\n- 给定的目标值 target 是一个浮点数\n- 题目保证在该二叉搜索树中只会存在一个最接近目标值的数",
        example: "示例：\n输入: root = [4,2,5,1,3]，target = 3.714286\n    4\n   / \\\n  2   5\n / \\\n1   3\n输出: 4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(h)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 271,
        number: "0271",
        title: "字符串的编码与解码",
        difficulty: "medium",
        description: "请你设计一个算法，可以将一个字符串列表编码成一个字符串。这个编码后的字符串是可以通过网络进行高效传送的，并且可以在接收端被解码回原来的字符串列表。\n\n1号机（发送方）有如下函数：\nstring encode(vector<string> strs) {\n  // ... your code\n  return encoded_string;\n}\n\n2号机（接收方）有如下函数：\nvector<string> decode(string s) {\n  //... your code\n  return strs;\n}\n\n1号机（发送方）执行：\nstring encoded_string = encode(strs);\n\n2号机（接收方）执行：\nvector<string> strs2 = decode(encoded_string);\n\n此时，2号机（接收方）的strs2需要和1号机（发送方）的strs相同。\n\n注意：\n因为字符串可能会包含256个合法ascii字符中的任何字符，所以您的算法必须要能够处理任何可能会出现的字符。",
        example: "示例：\n输入: [\"Hello\",\"World\"]\n输出: [\"Hello\",\"World\"]\n\n解释:\n编码后的字符串应该是一个能够被解码回原始字符串列表的字符串。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 272,
        number: "0272",
        title: "最接近的二叉搜索树值 II",
        difficulty: "hard",
        description: "给定一个不为空的二叉搜索树和一个目标值 target，找到 BST 中最接近目标值 target 的 k 个值。\n\n注意：\n- 给定的目标值 target 是一个浮点数\n- 你可以假设 k 总是有效的，即 k ≤ 总结点数\n- 题目保证该二叉搜索树中只会存在唯一一组最接近目标值的 k 个值",
        example: "示例：\n输入: root = [4,2,5,1,3]，target = 3.714286，k = 2\n    4\n   / \\\n  2   5\n / \\\n1   3\n输出: [4,3]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 273,
        number: "0273",
        title: "整数转换英文表示",
        difficulty: "hard",
        description: "将非负整数 num 转换为其对应的英文表示。\n\n示例 1：\n输入：num = 123\n输出：\"One Hundred Twenty Three\"\n\n示例 2：\n输入：num = 12345\n输出：\"Twelve Thousand Three Hundred Forty Five\"\n\n示例 3：\n输入：num = 1234567\n输出：\"One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven\"\n\n示例 4：\n输入：num = 1234567891\n输出：\"One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One\"",
        example: "示例 1：\n输入：num = 123\n输出：\"One Hundred Twenty Three\"\n\n示例 2：\n输入：num = 12345\n输出：\"Twelve Thousand Three Hundred Forty Five\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 274,
        number: "0274",
        title: "H指数",
        difficulty: "medium",
        description: "给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。\n\nh 指数的定义：h 代表\"高引用次数\"（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。\n\n例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。\n\n提示：如果 h 有多种可能的值，h 指数是其中最大的那个。",
        example: "示例 1：\n输入：citations = [3,0,6,1,5]\n输出：3\n解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。\n     由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。\n\n示例 2：\n输入：citations = [1,3,1]\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 275,
        number: "0275",
        title: "H指数 II",
        difficulty: "medium",
        description: "给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。\n\nh 指数的定义：h 代表\"高引用次数\"（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。\n\n提示：如果 h 有多种可能的值，h 指数是其中最大的那个。\n\n请你设计并实现对数时间复杂度的算法解决此问题。",
        example: "示例 1：\n输入：citations = [0,1,3,5,6]\n输出：3\n解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。\n     由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。\n\n示例 2：\n输入：citations = [1,2,100]\n输出：2",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 276,
        number: "0276",
        title: "栅栏涂色",
        difficulty: "medium",
        description: "有 k 种颜色的涂料和一个包含 n 个栅栏柱的栅栏，请你按下述规则为栅栏设计涂色方案：\n\n- 每个栅栏柱可以用其中 一种 颜色进行上色。\n- 相邻的栅栏柱 最多连续两个 颜色相同。\n\n给你两个整数 n 和 k ，返回所有有效的涂色 方案数 。",
        example: "示例 1：\n输入：n = 3, k = 2\n输出：6\n解释：所有的可能涂色方案如下：\n\n示例 2：\n输入：n = 1, k = 1\n输出：1\n\n示例 3：\n输入：n = 7, k = 2\n输出：42",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 277,
        number: "0277",
        title: "搜寻名人",
        difficulty: "medium",
        description: "假设你是一个专业的狗仔，参加了一个 n 人派对，其中每个人被从 0 到 n - 1 标号。在这个派对人群当中可能存在一位 \"名人\"。所谓 \"名人\" 的定义是：其他所有 n - 1 个人都认识他/她，而他/她并不认识其他任何人。\n\n现在你想要确认这个 \"名人\" 是谁，或者确定这里没有 \"名人\"。而你唯一能做的就是问诸如 \"A 你好呀，请问你认不认识 B呀？\" 的问题，以确定 A 是否认识 B。你需要在（渐近意义上）尽可能少的问题内来确定这位 \"名人\" 是谁（或者确定这里没有 \"名人\"）。\n\n在本题中，你可以使用辅助函数 bool knows(a, b) 获取到 A 是否认识 B。请你来实现一个函数 int findCelebrity(n)。\n\n派对最多只会有一个 \"名人\" 参加。若 \"名人\" 存在，请返回他/她的编号；若 \"名人\" 不存在，请返回 -1。",
        example: "示例 1:\n输入: graph = [\n  [1,1,0],\n  [0,1,0],\n  [1,1,1]\n]\n输出: 1\n解析: 有编号分别为 0、1 和 2 的三个人。graph[i][j] = 1 代表编号为 i 的人认识编号为 j 的人，而 graph[i][j] = 0 则代表编号为 i 的人不认识编号为 j 的人。\"名人\" 是编号 1 的人，因为 0 和 2 均认识他/她，但 1 不认识任何人。\n\n示例 2:\n输入: graph = [\n  [1,0,1],\n  [1,1,0],\n  [0,1,1]\n]\n输出: -1\n解析: 没有 \"名人\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 278,
        number: "0278",
        title: "第一个错误的版本",
        difficulty: "easy",
        description: "你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。\n\n假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。\n\n你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。",
        example: "示例 1：\n输入：n = 5, bad = 4\n输出：4\n解释：\n调用 isBadVersion(3) -> false\n调用 isBadVersion(5) -> true\n调用 isBadVersion(4) -> true\n所以，4 是第一个错误的版本。\n\n示例 2：\n输入：n = 1, bad = 1\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 279,
        number: "0279",
        title: "完全平方数",
        difficulty: "medium",
        description: "给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。\n\n完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。",
        example: "示例 1：\n输入：n = 12\n输出：3\n解释：12 = 4 + 4 + 4\n\n示例 2：\n输入：n = 13\n输出：2\n解释：13 = 4 + 9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n√n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 280,
        number: "0280",
        title: "摆动排序",
        difficulty: "medium",
        description: "给你一个无序的数组 nums, 将该数组重新排序后使 nums[0] <= nums[1] >= nums[2] <= nums[3]...。\n\n你可以假设所有输入数组都可以得到满足题目要求的结果。",
        example: "示例 1:\n输入: nums = [3,5,2,1,6,4]\n输出: [1,6,2,5,3,4]\n解释: [1,4,2,6,3,5] 同样是符合题目要求的结果，可以多个答案。\n\n示例 2:\n输入: nums = [6,6,5,6,3,8]\n输出: [6,6,5,6,3,8]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 281,
        number: "0281",
        title: "锯齿迭代器",
        difficulty: "medium",
        description: "给出两个一维的向量，请你实现一个迭代器，交替返回它们中间的元素。\n\n请你实现 ZigzagIterator 类：\n\nZigzagIterator(vector<int>& v1, vector<int>& v2) 接收两个一维向量作为参数。\nint next() 返回迭代器中下一个元素。\nboolean hasNext() 如果迭代器中还有元素则返回 true，否则返回 false。",
        example: "示例 1:\n输入: v1 = [1,2], v2 = [3,4,5,6]\n输出: [1,3,2,4,5,6]\n解释: 通过迭代器依次返回: 1,3,2,4,5,6\n\n示例 2:\n输入: v1 = [1], v2 = []\n输出: [1]\n\n示例 3:\n输入: v1 = [], v2 = [1]\n输出: [1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 282,
        number: "0282",
        title: "给表达式添加运算符",
        difficulty: "hard",
        description: "给定一个仅包含数字 0-9 的字符串 num 和一个目标值整数 target ，在 num 的数字之间添加 二元 运算符（不是一元）+、- 或 * ，返回所有能够得到目标值的表达式。\n\n注意，返回表达式中的操作数 不能 包含前导零。",
        example: "示例 1:\n输入: num = \"123\", target = 6\n输出: [\"1+2+3\", \"1*2*3\"]\n\n示例 2:\n输入: num = \"232\", target = 8\n输出: [\"2*3+2\", \"2+3*2\"]\n\n示例 3:\n输入: num = \"105\", target = 5\n输出: [\"1*0+5\",\"10-5\"]\n\n示例 4:\n输入: num = \"00\", target = 0\n输出: [\"0+0\", \"0-0\", \"0*0\"]\n\n示例 5:\n输入: num = \"3456237490\", target = 9191\n输出: []",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(4^n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 283,
        number: "0283",
        title: "移动零",
        difficulty: "easy",
        description: "给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。\n\n请注意，必须在原数组上操作，不能拷贝额外的数组。",
        example: "示例:\n输入: [0,1,0,3,12]\n输出: [1,3,12,0,0]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 284,
        number: "0284",
        title: "顶端迭代器",
        difficulty: "medium",
        description: "请你设计一个迭代器，除了支持 hasNext 和 next 操作外，还支持 peek 操作。\n\n实现 PeekingIterator 类：\n\nPeekingIterator(Iterator<int> nums) 使用指定整数迭代器 nums 初始化迭代器。\nint next() 返回数组中的下一个元素，并将指针移动到下个元素处。\nbool hasNext() 如果数组中存在下一个元素，返回 true ；否则，返回 false 。\nint peek() 返回数组中的下一个元素，但 不 移动指针。",
        example: "示例：\n输入：\n[\"PeekingIterator\", \"next\", \"peek\", \"next\", \"next\", \"hasNext\"]\n[[[1, 2, 3]], [], [], [], [], []]\n输出：\n[null, 1, 2, 2, 3, false]\n\n解释：\nPeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]\npeekingIterator.next();    // 返回 1，指针移动到下一个元素 [1,2,3]\npeekingIterator.peek();    // 返回 2，指针未发生移动 [1,2,3]\npeekingIterator.next();    // 返回 2，指针移动到下一个元素 [1,2,3]\npeekingIterator.next();    // 返回 3，指针移动到下一个元素 [1,2,3]\npeekingIterator.hasNext(); // 返回 False",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 285,
        number: "0285",
        title: "二叉搜索树中的顺序后继",
        difficulty: "medium",
        description: "给你一个二叉搜索树和其中的某一个节点，请你找出该节点在树中顺序后继的节点。\n\n节点 p 的后继是值比 p.val 大的节点中键值最小的节点。",
        example: "示例 1：\n输入：root = [2,1,3], p = 1\n输出：2\n解释：这里 1 的顺序后继是 2。请注意 p 和返回值都是 TreeNode 类型的。\n\n示例 2：\n输入：root = [5,3,6,2,4,null,null,1], p = 6\n输出：null\n解释：因为给出的节点没有顺序后继，所以答案就返回 null 了。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(h)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 286,
        number: "0286",
        title: "墙与门",
        difficulty: "medium",
        description: "你被给定一个 m × n 的二维网格 rooms ，网格中有以下三种可能的初始化值：\n\n-1 表示墙或是障碍物\n0 表示一扇门\nINF 无限表示一个空的房间。我们用 2^31 - 1 = 2147483647 代表 INF。你可以认为通往门的距离总是小于 2147483647 的。\n你要给每个空房间位上填上该房间到最近门的距离，如果无法到达门，则填 INF 即可。",
        example: "示例 1：\n输入：rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]\n输出：[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]\n\n示例 2：\n输入：rooms = [[-1]]\n输出：[[-1]]\n\n示例 3：\n输入：rooms = [[2147483647]]\n输出：[[2147483647]]\n\n示例 4：\n输入：rooms = [[0]]\n输出：[[0]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(mn)"
            }
        ]
    },
    {
        id: 287,
        number: "0287",
        title: "寻找重复数",
        difficulty: "medium",
        description: "给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。\n\n假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。\n\n你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。",
        example: "示例 1：\n输入：nums = [1,3,4,2,2]\n输出：2\n\n示例 2：\n输入：nums = [3,1,3,4,2]\n输出：3\n\n示例 3：\n输入：nums = [3,3,3,3,3]\n输出：3",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 288,
        number: "0288",
        title: "单词的唯一缩写",
        difficulty: "medium",
        description: "单词的 缩写 需要遵循 <起始字母><中间字母数><结尾字母> 这样的格式。如果单词只有两个字符，那么它就是它自身的 缩写 。\n\n例如，\"abcde\" 可以缩写为 \"a3e\" (\"a\" + \"3\" + \"e\") 和 \"abcde\"。\n\n给你一个字典 dictionary 和一个单词 word ，请你判断 word 的 缩写 在 dictionary 中是否 唯一 。如果所有 dictionary 中的其他单词的 缩写 都与 word 的 缩写 不同，那么 word 的 缩写 就是 唯一 的。",
        example: "示例 1：\n输入：dictionary = [\"deer\", \"door\", \"cake\", \"card\"], word = \"dear\"\n输出：false\n解释：dictionary 中的 \"deer\" 的缩写是 \"d2r\"，与 word 缩写 \"d2r\" 相同。\n\n示例 2：\n输入：dictionary = [\"deer\", \"door\", \"cake\", \"card\"], word = \"cart\"\n输出：true\n解释：dictionary 中的所有单词的缩写都与 word 的缩写 \"c2t\" 不同。\n\n示例 3：\n输入：dictionary = [\"deer\", \"door\", \"cake\", \"card\"], word = \"cane\"\n输出：false\n解释：dictionary 中的 \"cake\" 的缩写是 \"c2e\"，与 word 缩写 \"c2e\" 相同。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 289,
        number: "0289",
        title: "生命游戏",
        difficulty: "medium",
        description: "根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。\n\n给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：\n\n1. 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；\n2. 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；\n3. 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；\n4. 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；\n\n下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。",
        example: "示例 1：\n输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\n输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]\n\n示例 2：\n输入：board = [[1,1],[1,0]]\n输出：[[1,1],[1,1]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(mn)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 290,
        number: "0290",
        title: "单词规律",
        difficulty: "easy",
        description: "给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。\n\n这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。",
        example: "示例1:\n输入: pattern = \"abba\", s = \"dog cat cat dog\"\n输出: true\n\n示例 2:\n输入:pattern = \"abba\", s = \"dog cat cat fish\"\n输出: false\n\n示例 3:\n输入: pattern = \"aaaa\", s = \"dog cat cat dog\"\n输出: false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 291,
        number: "0291",
        title: "单词规律 II",
        difficulty: "medium",
        description: "给你一种规律 pattern 和一个字符串 str，请你判断 str 是否遵循其相同的规律。\n\n这里我们指的是 完全遵循，例如 pattern 里的每个字母和字符串 str 中每个 非空 单词之间，存在着 双射 的对应规律。双射 意味着映射双方一一对应，不会存在两个字符映射到同一个字符串，也不会存在一个字符分别映射到两个不同的字符串。",
        example: "示例 1：\n输入：pattern = \"abab\", s = \"redblueredblue\"\n输出：true\n解释：一种可能的映射如下：\n'a' -> \"red\"\n'b' -> \"blue\"\n\n示例 2：\n输入：pattern = \"aaaa\", s = \"asdasdasdasd\"\n输出：true\n解释：一种可能的映射如下：\n'a' -> \"asd\"\n\n示例 3：\n输入：pattern = \"abab\", s = \"asdasdasdasd\"\n输出：true\n解释：一种可能的映射如下：\n'a' -> \"a\"\n'b' -> \"sdasd\"\n\n示例 4：\n输入：pattern = \"aabb\", s = \"xyzabcxzyabc\"\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 292,
        number: "0292",
        title: "Nim 游戏",
        difficulty: "easy",
        description: "你和你的朋友，两个人一起玩 Nim 游戏：\n\n桌子上有一堆石头。\n你们轮流进行自己的回合，你作为先手。\n每一回合，轮到的人拿掉 1 - 3 块石头。\n拿掉最后一块石头的人就是获胜者。\n\n假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。",
        example: "示例 1：\n输入：n = 4\n输出：false\n解释：以下是可能的结果:\n1. 移除1颗石头。你的朋友移走了3块石头，包括最后一块。你的朋友赢了。\n2. 移除2个石子。你的朋友移走2块石头，包括最后一块。你的朋友赢了。\n3.你移走3颗石子。你的朋友移走了最后一块石头。你的朋友赢了。\n在所有结果中，你的朋友是赢家。\n\n示例 2：\n输入：n = 1\n输出：true\n\n示例 3：\n输入：n = 2\n输出：true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 293,
        number: "0293",
        title: "翻转游戏",
        difficulty: "easy",
        description: "你和朋友玩一个叫做「翻转游戏」的游戏。游戏规则如下：\n\n给你一个字符串 currentState ，其中只含 '+' 和 '-' 。你和朋友轮流将 连续 的两个 '++' 反转成 '--' 。当一方无法进行有效的翻转时便意味着游戏结束，则另一方获胜。\n\n计算并返回 一次有效操作 后，字符串 currentState 所有的可能状态，返回结果可以按 任意顺序 排列。如果不存在可能的有效操作，请返回一个空列表 [] 。",
        example: "示例 1：\n输入：currentState = \"++++\"\n输出：[\"--++\",\"++--\"]\n\n示例 2：\n输入：currentState = \"+\"\n输出：[]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 294,
        number: "0294",
        title: "翻转游戏 II",
        difficulty: "medium",
        description: "你和朋友玩一个叫做「翻转游戏」的游戏。游戏规则如下：\n\n给你一个字符串 currentState ，其中只含 '+' 和 '-' 。你和朋友轮流将 连续 的两个 '++' 反转成 '--' 。当一方无法进行有效的翻转时便意味着游戏结束，则另一方获胜。\n\n请你写出一个函数来判定起始玩家是否存在必胜的方案，若存在返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：currentState = \"++++\"\n输出：true\n解释：起始玩家可将中间的 \"++\" 翻转变为 \"++--\" 从而得胜。\n\n示例 2：\n输入：currentState = \"+++++++\"\n输出：false\n解释：起始玩家只能翻转 \"++\" 为 \"--\"，然后轮到第二个玩家，第二个玩家将必定得胜。\n\n示例 3：\n输入：currentState = \"+++++-+++++\"\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^n)",
                spaceComplexity: "O(2^n)"
            }
        ]
    },
    {
        id: 295,
        number: "0295",
        title: "数据流的中位数",
        difficulty: "hard",
        description: "中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。\n\n例如，\n[2,3,4] 的中位数是 3\n[2,3] 的中位数是 (2 + 3) / 2 = 2.5\n\n设计一个支持以下两种操作的数据结构：\n\nvoid addNum(int num) - 从数据流中添加一个整数到数据结构中。\ndouble findMedian() - 返回目前所有元素的中位数。",
        example: "示例：\naddNum(1)\naddNum(2)\nfindMedian() -> 1.5\naddNum(3) \nfindMedian() -> 2",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 296,
        number: "0296",
        title: "最佳的碰头地点",
        difficulty: "hard",
        description: "有一队人（两人或以上）想要在一个地方碰面，他们希望能够最小化他们的总行走距离。\n\n给你一个 2D 网格，其中各个格子内的值要么是 0，要么是 1。\n\n1 表示某个人的家所处的位置。这里，我们将使用 曼哈顿距离 来计算，其中 distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|。",
        example: "示例：\n输入: grid = [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]\n输出: 6\n解释: 给定的三个人分别住在(0,0)，(0,4) 和 (2,2):\n     (0,2) 是一个最佳的碰面点，其总行走距离为 2 + 2 + 2 = 6，最小。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 297,
        number: "0297",
        title: "二叉树的序列化与反序列化",
        difficulty: "hard",
        description: "序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。\n\n请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。\n\n提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。",
        example: "示例 1：\n输入：root = [1,2,3,null,null,4,5]\n输出：[1,2,3,null,null,4,5]\n\n示例 2：\n输入：root = []\n输出：[]\n\n示例 3：\n输入：root = [1]\n输出：[1]\n\n示例 4：\n输入：root = [1,2]\n输出：[1,2]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 298,
        number: "0298",
        title: "二叉树最长连续序列",
        difficulty: "medium",
        description: "给你一棵指定的二叉树的根节点 root ，请你计算其中 最长连续序列路径 的长度。\n\n最长连续序列路径 是依次递增 1 的路径。该路径，可以是从某个初始节点到树中任意节点，通过「父 - 子」关系连接而产生的任意路径。且必须从父节点到子节点，反过来是不可以的。",
        example: "示例 1：\n输入：root = [1,null,3,2,4,null,null,null,5]\n输出：3\n解释：当中，最长连续序列是 3-4-5，所以返回结果为 3。\n\n示例 2：\n输入：root = [2,null,3,2,null,1]\n输出：2\n解释：当中，最长连续序列是 2-3。注意，不是 3-2-1，所以返回 2。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 299,
        number: "0299",
        title: "猜数字游戏",
        difficulty: "medium",
        description: "你在和朋友一起玩 猜数字（Bulls and Cows）游戏，该游戏规则如下：\n\n写出一个秘密数字，并请朋友猜这个数字是多少。朋友每猜测一次，你就会给他一个包含下述信息的提示：\n\n猜测数字中有多少位属于数字和确切位置都猜对了（称为 \"Bulls\"，公牛），\n有多少位属于数字猜对了但是位置不对（称为 \"Cows\"，奶牛）。也就是说，这次猜测中有多少位非公牛数字可以通过重新排列转换成公牛数字。\n\n给你一个秘密数字 secret 和朋友猜测的数字 guess ，请你返回对朋友这次猜测的提示。\n\n提示的格式为 \"xAyB\" ，x 是公牛个数， y 是奶牛个数，A 表示公牛，B 表示奶牛。\n\n请注意秘密数字和朋友猜测的数字都可能含有重复数字。",
        example: "示例 1：\n输入：secret = \"1807\", guess = \"7810\"\n输出：\"1A3B\"\n解释：数字和位置都对（公牛）用 '|' 连接，数字猜对位置不对（奶牛）的采用斜体加粗标识。\n\"1807\"\n  ||\n\"7810\"\n\n示例 2：\n输入：secret = \"1123\", guess = \"0111\"\n输出：\"1A1B\"\n解释：数字和位置都对（公牛）用 '|' 连接，数字猜对位置不对（奶牛）的采用斜体加粗标识。\n\"1123\"        \"1123\"\n  |      或     |\n\"0111\"        \"0111\"\n注意，两个不匹配的 1 中，只有一个会算作奶牛（数字猜对位置不对）。通过重新排列非公牛数字，其中仅有一个 1 可以成为公牛数字。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 300,
        number: "0300",
        title: "最长递增子序列",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。\n\n子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。",
        example: "示例 1：\n输入：nums = [10,9,2,5,3,7,101,18]\n输出：4\n解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。\n\n示例 2：\n输入：nums = [0,1,0,3,2,3]\n输出：4\n\n示例 3：\n输入：nums = [7,7,7,7,7,7,7]\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 301,
        number: "0301",
        title: "删除无效的括号",
        difficulty: "hard",
        description: "给你一个由若干括号和字母组成的字符串 s ，删除最小数量的无效括号，使得输入的字符串有效。\n\n返回所有可能的结果。答案可以按 任意顺序 返回。",
        example: "示例 1：\n输入：s = \"()())()\" \n输出：[\"(())()\"，\"()()()\"]\n\n示例 2：\n输入：s = \"(a)())()\" \n输出：[\"(a())()\"，\"(a)()()\"]\n\n示例 3：\n输入：s = \")(\"\n输出：[\"\"]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 302,
        number: "0302",
        title: "包含全部黑色像素的最小矩形",
        difficulty: "hard",
        description: "图片在计算机处理中往往是使用二维矩阵来表示的。\n\n给你一个大小为 m x n 的二进制矩阵 image 表示一张黑白图片，0 代表白色像素，1 代表黑色像素。\n\n黑色像素相互连接，也就是说，图片中只会有一片连在一块儿的黑色像素。像素点是水平或竖直方向连接的。\n\n给你两个整数 x 和 y 表示某一个黑色像素的位置，请你找出包含全部黑色像素的最小矩形（与坐标轴对齐），并返回该矩形的面积。",
        example: "示例 1：\n输入：image = [[\"0\",\"0\",\"1\",\"0\"],[\"0\",\"1\",\"1\",\"0\"],[\"0\",\"1\",\"0\",\"0\"]], x = 0, y = 2\n输出：6\n\n示例 2：\n输入：image = [[\"1\"]], x = 0, y = 0\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m+n)"
            }
        ]
    },
    {
        id: 303,
        number: "0303",
        title: "区域和检索 - 数组不可变",
        difficulty: "easy",
        description: "给定一个整数数组 nums，处理以下类型的多个查询：\n\n计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right\n\n实现 NumArray 类：\n\nNumArray(int[] nums) 使用数组 nums 初始化对象\nint sumRange(int i, int j) 返回数组 nums 中索引 left 和 right 之间的元素的 总和 ，包含 left 和 right 两点（也就是 nums[left] + nums[left + 1] + ... + nums[right] )",
        example: "示例：\n输入：\n[\"NumArray\", \"sumRange\", \"sumRange\", \"sumRange\"]\n[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]\n输出：\n[null, 1, -1, -3]\n\n解释：\nNumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);\nnumArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)\nnumArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) \nnumArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n) 预处理，O(1) 查询",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 304,
        number: "0304",
        title: "二维区域和检索 - 矩阵不可变",
        difficulty: "medium",
        description: "给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。\n\n实现 NumMatrix 类：\n\nNumMatrix(int[][] matrix) 用二维矩阵 matrix 初始化对象\nint sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 的子矩阵的元素总和。",
        example: "示例：\n输入：\n[\"NumMatrix\",\"sumRegion\",\"sumRegion\",\"sumRegion\"]\n[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]\n输出：\n[null,8,11,12]\n\n解释：\nNumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);\nnumMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)\nnumMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)\nnumMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n) 预处理，O(1) 查询",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 305,
        number: "0305",
        title: "岛屿数量 II",
        difficulty: "hard",
        description: "给你一个大小为 m x n 的二进制网格 grid 。网格表示一个地图，其中，0 表示水，1 表示陆地。最初，grid 中的所有单元格都是水单元格（即，所有单元格都是 0）。\n\n可以通过执行 addLand 操作，将某个位置的水转换成陆地。给你一个数组 positions ，其中 positions[i] = [ri, ci] 是要执行第 i 次操作的位置 (ri, ci) 。\n\n返回一个整数数组 answer ，其中 answer[i] 是将单元格 (ri, ci) 转换为陆地后，地图中岛屿的数量。\n\n岛屿 的定义是被水包围的陆地连通区域。岛屿中的任何格子要么是陆地，要么是水。此外，你可以假设该网格的四条边均被水包围。",
        example: "示例 1：\n输入：m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]\n输出：[1,1,2,3]\n解释：\n起初，二维网格 grid 被全部注入水。（0 代表水，1 代表陆地）\n- 操作 #1：addLand(0, 0) 将 grid[0][0] 的水变为陆地。此时存在 1 个岛屿。\n- 操作 #2：addLand(0, 1) 将 grid[0][1] 的水变为陆地。此时存在 1 个岛屿。\n- 操作 #3：addLand(1, 2) 将 grid[1][2] 的水变为陆地。此时存在 2 个岛屿。\n- 操作 #4：addLand(2, 1) 将 grid[2][1] 的水变为陆地。此时存在 3 个岛屿。\n\n示例 2：\n输入：m = 1, n = 1, positions = [[0,0]]\n输出：[1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(k*log(m*n))",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 306,
        number: "0306",
        title: "累加数",
        difficulty: "medium",
        description: "累加数 是一个字符串，组成它的数字可以形成累加序列。\n\n一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，序列中的每个后续数字必须是它之前两个数字之和。\n\n给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。\n\n说明：累加序列里的数，除数字 0 以外，不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。",
        example: "示例 1：\n输入：\"112358\"\n输出：true \n解释：累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8\n\n示例 2：\n输入：\"199100199\"\n输出：true \n解释：累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^3)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 307,
        number: "0307",
        title: "区域和检索 - 数组可修改",
        difficulty: "medium",
        description: "给你一个数组 nums ，请你完成两类查询。\n\n其中一类查询要求 更新 数组 nums 下标对应的值\n另一类查询要求返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 ，其中 left <= right\n\n实现 NumArray 类：\n\nNumArray(int[] nums) 用整数数组 nums 初始化对象\nvoid update(int index, int val) 将 nums[index] 的值 更新 为 val\nint sumRange(int left, int right) 返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 （即，nums[left] + nums[left + 1], …, nums[right]）",
        example: "示例：\n输入：\n[\"NumArray\", \"sumRange\", \"update\", \"sumRange\"]\n[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]\n输出：\n[null, 9, null, 8]\n\n解释：\nNumArray numArray = new NumArray([1, 3, 5]);\nnumArray.sumRange(0, 2); // 返回 1 + 3 + 5 = 9\nnumArray.update(1, 2);   // nums = [1,2,5]\nnumArray.sumRange(0, 2); // 返回 1 + 2 + 5 = 8",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n) 更新和查询",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 308,
        number: "0308",
        title: "二维区域和检索 - 可变",
        difficulty: "hard",
        description: "给你一个二维矩阵 matrix ，你需要处理下面两种类型的若干次查询：\n\n更新一个单元的值。\n计算矩阵中某一矩形区域元素的和。\n\n实现 NumMatrix 类：\n\nNumMatrix(int[][] matrix) 用整数矩阵 matrix 初始化对象。\nvoid update(int row, int col, int val) 将矩阵 matrix[row][col] 的值设置为 val 。\nint sumRegion(int row1, int col1, int row2, int col2) 返回矩阵 matrix 中 (row1, col1) 左上角、(row2, col2) 右下角的子矩阵元素的和。",
        example: "示例：\n输入：\n[\"NumMatrix\",\"sumRegion\",\"update\",\"sumRegion\"]\n[[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[3,2,2],[2,1,4,3]]\n输出：\n[null,8,null,10]\n\n解释：\nNumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]);\nnumMatrix.sumRegion(2, 1, 4, 3); // 返回 8\nnumMatrix.update(3, 2, 2);       // 矩阵变为 [[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,2,1,7],[1,0,3,0,5]]\nnumMatrix.sumRegion(2, 1, 4, 3); // 返回 10",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log m * log n) 更新和查询",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 309,
        number: "0309",
        title: "最佳买卖股票时机含冷冻期",
        difficulty: "medium",
        description: "给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​\n\n设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:\n\n卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。\n注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。",
        example: "示例 1:\n输入: prices = [1,2,3,0,2]\n输出: 3 \n解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]\n\n示例 2:\n输入: prices = [1]\n输出: 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 310,
        number: "0310",
        title: "最小高度树",
        difficulty: "medium",
        description: "树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，一个任何没有简单环路的连通图都是一棵树。\n\n给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。\n\n可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。\n\n请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。\n\n树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。",
        example: "示例 1：\n输入：n = 4, edges = [[1,0],[1,2],[1,3]]\n输出：[1]\n解释：如图所示，当根是标签为 1 的节点时，树的高度是 1 ，这是唯一的最小高度树。\n\n示例 2：\n输入：n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]\n输出：[3,4]\n\n示例 3：\n输入：n = 1, edges = []\n输出：[0]\n\n示例 4：\n输入：n = 2, edges = [[0,1]]\n输出：[0,1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 311,
        number: "0311",
        title: "稀疏矩阵的乘法",
        difficulty: "medium",
        description: "给你两个 稀疏矩阵 A 和 B，请你返回 AB 的结果。你可以假设 A 的列数等于 B 的行数。\n\n请仅使用标准的乘法算法计算 A x B，不要使用诸如 Strassen 算法之类的快速算法。",
        example: "示例 1：\n输入：A = [[1,0,0],[-1,0,3]], B = [[7,0,0],[0,0,0],[0,0,1]]\n输出：[[7,0,0],[-7,0,3]]\n\n示例 2：\n输入：A = [[0]], B = [[0]]\n输出：[[0]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*k*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 312,
        number: "0312",
        title: "戳气球",
        difficulty: "hard",
        description: "有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。\n\n现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。\n\n求所能获得硬币的最大数量。",
        example: "示例 1：\n输入： nums = [3,1,5,8]\n输出： 167\n解释：\nnums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []\ncoins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167\n\n示例 2：\n输入： nums = [1,5]\n输出： 10",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^3)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 313,
        number: "0313",
        title: "超级丑数",
        difficulty: "medium",
        description: "超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。\n\n给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。\n\n题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。",
        example: "示例 1：\n输入：n = 12, primes = [2,7,13,19]\n输出：32\n解释：给定长度为 4 的质数数组 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。\n\n示例 2：\n输入：n = 1, primes = [2,3,5]\n输出：1\n解释：1 不含质因数，因此它的所有质因数都在质数数组 primes = [2,3,5] 中。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*k)",
                spaceComplexity: "O(n+k)"
            }
        ]
    },
    {
        id: 314,
        number: "0314",
        title: "二叉树的垂直遍历",
        difficulty: "medium",
        description: "给你一个二叉树的根结点，返回其结点按 垂直方向（从上到下，逐列）遍历的结果。\n\n如果两个结点在同一行和列，那么顺序则为 从左到右。",
        example: "示例 1：\n输入：root = [3,9,20,null,null,15,7]\n输出：[[9],[3,15],[20],[7]]\n\n示例 2：\n输入：root = [3,9,8,4,0,1,7]\n输出：[[4],[9],[3,0,1],[8],[7]]\n\n示例 3：\n输入：root = [3,9,8,4,0,1,7,null,null,null,2,5]\n输出：[[4],[9,5],[3,0,1],[8,2],[7]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 315,
        number: "0315",
        title: "计算右侧小于当前元素的个数",
        difficulty: "hard",
        description: "给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。",
        example: "示例 1：\n输入：nums = [5,2,6,1]\n输出：[2,1,1,0]\n解释：\n5 的右侧有 2 个更小的元素 (2 和 1)\n2 的右侧有 1 个更小的元素 (1)\n6 的右侧有 1 个更小的元素 (1)\n1 的右侧有 0 个更小的元素\n\n示例 2：\n输入：nums = [-1]\n输出：[0]\n\n示例 3：\n输入：nums = [-1,-1]\n输出：[0,0]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 316,
        number: "0316",
        title: "去除重复字母",
        difficulty: "medium",
        description: "给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。",
        example: "示例 1：\n输入：s = \"bcabc\"\n输出：\"abc\"\n\n示例 2：\n输入：s = \"cbacdcbc\"\n输出：\"acdb\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 317,
        number: "0317",
        title: "离建筑物最近的距离",
        difficulty: "hard",
        description: "你是个房地产开发商，想要选择一片空地 建一栋大楼。你想把这栋大楼够造在一个距离周边设施都比较方便的地方，通过调研，你希望从它出发能在 最短的距离和 内到达周边全部的建筑物。请你计算出这个最佳的选址到周边全部建筑物的 最短距离和。\n\n提示：\n你只能通过向上、下、左、右四个方向上移动。\n\n给你一个由 0、1 和 2 组成的二维网格，其中：\n\n0 代表你可以自由通过和选择建造的空地\n1 代表你无法通行的建筑物\n2 代表你无法通行的障碍物",
        example: "示例：\n输入：[[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]\n输出：7\n解释：\n给定三个建筑物 (0,0)、(0,4) 和 (2,2) 以及一个位于 (0,2) 的障碍物。\n由于总距离之和 3+3+1=7 最优，所以位置 (1,2) 是符合要求的最优地点。\n故返回7。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m^2*n^2)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 318,
        number: "0318",
        title: "最大单词长度乘积",
        difficulty: "medium",
        description: "给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。",
        example: "示例 1：\n输入：words = [\"abcw\",\"baz\",\"foo\",\"bar\",\"xtfn\",\"abcdef\"]\n输出：16\n解释：这两个单词为 \"abcw\", \"xtfn\"。\n\n示例 2：\n输入：words = [\"a\",\"ab\",\"abc\",\"d\",\"cd\",\"bcd\",\"abcd\"]\n输出：4\n解释：这两个单词为 \"ab\", \"cd\"。\n\n示例 3：\n输入：words = [\"a\",\"aa\",\"aaa\",\"aaaa\"]\n输出：0\n解释：不存在这样的两个单词。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 319,
        number: "0319",
        title: "灯泡开关",
        difficulty: "medium",
        description: "初始时有 n 个灯泡处于关闭状态。第一轮，你将会打开所有灯泡。接下来的第二轮，你将会每两个灯泡关闭一个。\n\n第三轮，你每三个灯泡就切换一个灯泡的开关（即，打开变关闭，关闭变打开）。第 i 轮，你每 i 个灯泡就切换一个灯泡的开关。直到第 n 轮，你只需要切换最后一个灯泡的开关。\n\n找出并返回 n 轮后有多少个亮着的灯泡。",
        example: "示例 1：\n输入：n = 3\n输出：1\n解释：\n初始时, 灯泡状态 [关闭, 关闭, 关闭].\n第一轮后, 灯泡状态 [开启, 开启, 开启].\n第二轮后, 灯泡状态 [开启, 关闭, 开启].\n第三轮后, 灯泡状态 [开启, 关闭, 关闭].\n\n你应该返回 1，因为只有一个灯泡还亮着。\n\n示例 2：\n输入：n = 0\n输出：0\n\n示例 3：\n输入：n = 1\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 320,
        number: "0320",
        title: "列举单词的全部缩写",
        difficulty: "medium",
        description: "单词的 广义缩写词 可以通过下述步骤构造：先取任意数量的不重叠的子字符串，再用它们各自的长度进行替换。例如，\"abcde\" 可以缩写为 \"a3e\"（\"bcd\" 变为 \"3\" ），\"1bcd1\"（\"a\" 和 \"e\" 分别变为 \"1\"），\"23\"（\"ab\" 和 \"cde\" 分别变为 \"2\" 和 \"3\"）。\n\n给你一个字符串 word ，返回一个由所有可能 广义缩写词 组成的列表。按 任意顺序 返回答案。",
        example: "示例 1：\n输入：word = \"word\"\n输出：[\"4\",\"3d\",\"2r1\",\"2rd\",\"1o2\",\"1o1d\",\"1or1\",\"1ord\",\"w3\",\"w2d\",\"w1r1\",\"w1rd\",\"wo2\",\"wo1d\",\"wor1\",\"word\"]\n\n示例 2：\n输入：word = \"a\"\n输出：[\"1\",\"a\"]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 321,
        number: "0321",
        title: "拼接最大数",
        difficulty: "hard",
        description: "给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。\n\n求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。",
        example: "示例 1：\n输入：nums1 = [3, 4, 6, 5], nums2 = [9, 1, 2, 5, 8, 3], k = 5\n输出：[9, 8, 6, 5, 3]\n\n示例 2：\n输入：nums1 = [6, 7], nums2 = [6, 0, 4], k = 5\n输出：[6, 7, 6, 0, 4]\n\n示例 3：\n输入：nums1 = [3, 9], nums2 = [8, 9], k = 3\n输出：[9, 8, 9]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O((m+n)^3)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 322,
        number: "0322",
        title: "零钱兑换",
        difficulty: "medium",
        description: "给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。\n\n计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。\n\n你可以认为每种硬币的数量是无限的。",
        example: "示例 1：\n输入：coins = [1, 2, 5], amount = 11\n输出：3\n解释：11 = 5 + 5 + 1\n\n示例 2：\n输入：coins = [2], amount = 3\n输出：-1\n\n示例 3：\n输入：coins = [1], amount = 0\n输出：0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(amount * n)",
                spaceComplexity: "O(amount)"
            }
        ]
    },
    {
        id: 323,
        number: "0323",
        title: "无向图中连通分量的数目",
        difficulty: "medium",
        description: "你有一个包含 n 个节点的图。给定一个整数 n 和一个数组 edges ，其中 edges[i] = [ai, bi] 表示图中 ai 和 bi 之间有一条边。\n\n返回 图中已连接分量的数目 。",
        example: "示例 1：\n输入: n = 5, edges = [[0, 1], [1, 2], [3, 4]]\n输出: 2\n\n示例 2：\n输入: n = 5, edges = [[0,1], [1,2], [2,3], [3,4]]\n输出: 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(V+E)",
                spaceComplexity: "O(V)"
            }
        ]
    },
    {
        id: 324,
        number: "0324",
        title: "摆动排序 II",
        difficulty: "medium",
        description: "给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。\n\n你可以假设所有输入数组都可以得到满足题目要求的结果。",
        example: "示例 1：\n输入：nums = [1,5,1,1,6,4]\n输出：[1,6,1,5,1,4]\n解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。\n\n示例 2：\n输入：nums = [1,3,2,2,3,1]\n输出：[2,3,1,3,1,2]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 325,
        number: "0325",
        title: "和等于 k 的最长子数组长度",
        difficulty: "medium",
        description: "给定一个数组 nums 和一个目标值 k，找到和等于 k 的最长子数组长度。如果不存在任意一个符合要求的子数组，则返回 0。\n\n注意: nums 数组的总和是一定在 32 位有符号整数范围之内的。",
        example: "示例 1：\n输入: nums = [1, -1, 5, -2, 3], k = 3\n输出: 4\n解释: 子数组 [1, -1, 5, -2] 和等于 3，且长度最长。\n\n示例 2：\n输入: nums = [-2, -1, 2, 1], k = 1\n输出: 2\n解释: 子数组 [-1, 2] 和等于 1，且长度最长。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 326,
        number: "0326",
        title: "3的幂",
        difficulty: "easy",
        description: "给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。\n\n整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3^x",
        example: "示例 1：\n输入：n = 27\n输出：true\n\n示例 2：\n输入：n = 0\n输出：false\n\n示例 3：\n输入：n = 9\n输出：true\n\n示例 4：\n输入：n = 45\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 327,
        number: "0327",
        title: "区间和的个数",
        difficulty: "hard",
        description: "给你一个整数数组 nums 以及两个整数 lower 和 upper 。求数组中，值位于范围 [lower, upper] （包含 lower 和 upper）之内的 区间和的个数 。\n\n区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。",
        example: "示例 1：\n输入：nums = [-2,5,-1], lower = -2, upper = 2\n输出：3\n解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。\n\n示例 2：\n输入：nums = [0], lower = 0, upper = 0\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 328,
        number: "0328",
        title: "奇偶链表",
        difficulty: "medium",
        description: "给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。\n\n第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。\n\n请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。\n\n你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。",
        example: "示例 1：\n输入: head = [1,2,3,4,5]\n输出: [1,3,5,2,4]\n\n示例 2：\n输入: head = [2,1,3,5,6,4,7]\n输出: [2,3,6,7,1,5,4]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 329,
        number: "0329",
        title: "矩阵中的最长递增路径",
        difficulty: "hard",
        description: "给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。\n\n对于每个单元格，你可以往上，下，左，右四个方向移动。 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。",
        example: "示例 1：\n输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]\n输出：4 \n解释：最长递增路径为 [1, 2, 6, 9]。\n\n示例 2：\n输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]\n输出：4 \n解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。\n\n示例 3：\n输入：matrix = [[1]]\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 330,
        number: "0330",
        title: "按要求补齐数组",
        difficulty: "hard",
        description: "给定一个已排序的正整数数组 nums，和一个正整数 n 。从 [1, n] 区间内选取任意个数字补充到 nums 中，使得 [1, n] 区间内的任何数字都可以用 nums 中某几个数字的和来表示。\n\n请返回 满足上述要求的最少需要补充的数字个数 。",
        example: "示例 1：\n输入: nums = [1,3], n = 6\n输出: 1\n解释: 根据 nums 里现有的组合 [1], [3], [1,3]，可以得出 1, 3, 4。\n现在如果我们将 2 添加到 nums 中， 组合变为: [1], [2], [3], [1,3], [2,3], [1,2,3]。\n其和可以表示数字 1, 2, 3, 4, 5, 6，能够覆盖 [1, 6] 区间里所有的数。\n所以我们最少需要添加一个数字。\n\n示例 2：\n输入: nums = [1,5,10], n = 20\n输出: 2\n解释: 我们需要添加 [2,4]。\n\n示例 3：\n输入: nums = [1,2,2], n = 5\n输出: 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 331,
        number: "0331",
        title: "验证二叉树的前序序列化",
        difficulty: "medium",
        description: "序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。\n\n例如，上面的二叉树可以被序列化为字符串 \"9,3,4,#,#,1,#,#,2,#,6,#,#\"，其中 # 代表一个空节点。\n\n给定一串以逗号分隔的序列，验证它是否是正确的二叉树的前序序列化。编写一个在不重构树的条件下的可行算法。\n\n每个以逗号分隔的字符或为一个整数或为一个表示 null 指针的 '#' 。\n\n你可以认为输入格式总是有效的，例如它永远不会包含两个连续的逗号，比如 \"1,,3\" 。",
        example: "示例 1：\n输入: \"9,3,4,#,#,1,#,#,2,#,6,#,#\"\n输出: true\n\n示例 2：\n输入: \"1,#\"\n输出: false\n\n示例 3：\n输入: \"9,#,#,1\"\n输出: false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 332,
        number: "0332",
        title: "重新安排行程",
        difficulty: "hard",
        description: "给你一份航线列表 tickets ，其中 tickets[i] = [fromi, toi] 表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。\n\n所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。\n\n例如，行程 [\"JFK\", \"LGA\"] 与 [\"JFK\", \"LGB\"] 相比就更小，排序更靠前。\n\n假定所有机票至少存在一种合理的行程。且所有的机票 必须都用一次 且 只能用一次。",
        example: "示例 1：\n输入：tickets = [[\"MUC\",\"LHR\"],[\"JFK\",\"MUC\"],[\"SFO\",\"SJC\"],[\"LHR\",\"SFO\"]]\n输出：[\"JFK\",\"MUC\",\"LHR\",\"SFO\",\"SJC\"]\n\n示例 2：\n输入：tickets = [[\"JFK\",\"SFO\"],[\"JFK\",\"ATL\"],[\"SFO\",\"ATL\"],[\"ATL\",\"JFK\"],[\"ATL\",\"SFO\"]]\n输出：[\"JFK\",\"ATL\",\"JFK\",\"SFO\",\"ATL\",\"SFO\"]\n解释：另一种有效的行程是 [\"JFK\",\"SFO\",\"ATL\",\"JFK\",\"ATL\",\"SFO\"] ，但是它字典排序更大。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 333,
        number: "0333",
        title: "最大 BST 子树",
        difficulty: "medium",
        description: "给定一个二叉树，找到其中最大的二叉搜索树（BST）子树，并返回该子树的大小。其中，最大指的是子树节点数最多的。\n\n二叉搜索树（BST）中的所有节点都具备以下属性：\n- 左子树的所有节点的值都小于其父节点的值。\n- 右子树的所有节点的值都大于其父节点的值。\n- 左右子树也必须是二叉搜索树。",
        example: "示例 1：\n输入：root = [10,5,15,1,8,null,7]\n输出：3\n解释：图中红色节点构成最大的 BST 子树。\n返回值为 3 ，因为这棵子树有 3 个节点。\n\n示例 2：\n输入：root = [4,2,7,2,3,5,null,2,null,null,null,null,null,1]\n输出：2",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 334,
        number: "0334",
        title: "递增的三元子序列",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。\n\n如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：nums = [1,2,3,4,5]\n输出：true\n解释：任何 i < j < k 的三元组都满足题意\n\n示例 2：\n输入：nums = [5,4,3,2,1]\n输出：false\n解释：不存在满足题意的三元组\n\n示例 3：\n输入：nums = [2,1,5,0,4,6]\n输出：true\n解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 335,
        number: "0335",
        title: "路径交叉",
        difficulty: "hard",
        description: "给你一个整数数组 distance 。\n\n从 X-Y 平面上的点 (0,0) 开始，先向北移动 distance[0] 米，然后向西移动 distance[1] 米，向南移动 distance[2] 米，向东移动 distance[3] 米，持续移动。也就是说，每次移动后你的方位会发生逆时针变化。\n\n判断你所经过的路径是否相交。如果相交，返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：distance = [2,1,1,2]\n输出：true\n\n示例 2：\n输入：distance = [1,2,3,4]\n输出：false\n\n示例 3：\n输入：distance = [1,1,1,1]\n输出：true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 336,
        number: "0336",
        title: "回文对",
        difficulty: "hard",
        description: "给定一组 互不相同 的单词， 找出所有 不同 的索引对 (i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。",
        example: "示例 1：\n输入：words = [\"abcd\",\"dcba\",\"lls\",\"s\",\"sssll\"]\n输出：[[0,1],[1,0],[3,2],[2,4]]\n解释：可拼接成的回文串为 [\"dcbaabcd\",\"abcddcba\",\"slls\",\"llssssll\"]\n\n示例 2：\n输入：words = [\"bat\",\"tab\",\"cat\"]\n输出：[[0,1],[1,0]]\n解释：可拼接成的回文串为 [\"battab\",\"tabbat\"]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * k^2)",
                spaceComplexity: "O(n * k)"
            }
        ]
    },
    {
        id: 337,
        number: "0337",
        title: "打家劫舍 III",
        difficulty: "medium",
        description: "小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。\n\n除了 root 之外，每栋房子有且只有一个\"父\"房子与之相连。一番侦察之后，聪明的小偷意识到\"这个地方的所有房屋的排列类似于一棵二叉树\"。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。\n\n给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。",
        example: "示例 1：\n输入: root = [3,2,3,null,3,null,1]\n输出: 7 \n解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7\n\n示例 2：\n输入: root = [3,4,5,1,3,null,1]\n输出: 9\n解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 338,
        number: "0338",
        title: "比特位计数",
        difficulty: "easy",
        description: "给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。",
        example: "示例 1：\n输入：n = 2\n输出：[0,1,1]\n解释：\n0 --> 0\n1 --> 1\n2 --> 10\n\n示例 2：\n输入：n = 5\n输出：[0,1,1,2,1,2]\n解释：\n0 --> 0\n1 --> 1\n2 --> 10\n3 --> 11\n4 --> 100\n5 --> 101",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 339,
        number: "0339",
        title: "嵌套列表权重和",
        difficulty: "medium",
        description: "给定一个嵌套的整数列表 nestedList ，每个元素要么是整数，要么是列表。同时，列表中元素同样也可以是整数或者是另一个列表。\n\n整数的 深度 是其在列表内部的嵌套层数。例如，嵌套列表 [1,[2,2],[[3],2],1] 中每个整数的值就是其深度。\n\n请返回该嵌套列表中所有整数的加权和，其中权重由整数的 深度 决定。",
        example: "示例 1：\n输入：nestedList = [[1,1],2,[1,1]]\n输出：10\n解释：因为列表中有四个深度为 2 的整数：1、1、1、1（第一个 1 和第二个 1 位于同一列表中，第三个 1 和第四个 1 位于另一个列表中），和一个深度为 1 的整数：2（位于原始列表中），所以总和为 4 * 2 + 1 * 1 = 9。\n\n示例 2：\n输入：nestedList = [1,[4,[6]]]\n输出：27\n解释：一个深度为 1 的整数：1，一个深度为 2 的整数：4，和一个深度为 3 的整数：6。因此，总和 = 1 + 4*2 + 6*3 = 27。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(d)"
            }
        ]
    },
    {
        id: 340,
        number: "0340",
        title: "至多包含 K 个不同字符的最长子串",
        difficulty: "medium",
        description: "给定一个字符串 s 和一个整数 k ，请你找出至多包含 k 个不同字符的最长子串，并返回该子串的长度。",
        example: "示例 1：\n输入：s = \"eceba\", k = 2\n输出：3\n解释：满足题目要求的子串是 \"ece\" ，长度为 3。\n\n示例 2：\n输入：s = \"aa\", k = 1\n输出：2\n解释：满足题目要求的子串是 \"aa\" ，长度为 2。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 341,
        number: "0341",
        title: "扁平化嵌套列表迭代器",
        difficulty: "medium",
        description: "给你一个嵌套的整数列表。请你设计一个迭代器，使其能够遍历这个整数列表中的所有整数。\n\n列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。",
        example: "示例 1：\n输入：[[1,1],2,[1,1]]\n输出：[1,1,2,1,1]\n解释：通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。\n\n示例 2：\n输入：[1,[4,[6]]]\n输出：[1,4,6]\n解释：通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 342,
        number: "0342",
        title: "4的幂",
        difficulty: "easy",
        description: "给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。\n\n整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4^x",
        example: "示例 1：\n输入：n = 16\n输出：true\n\n示例 2：\n输入：n = 5\n输出：false\n\n示例 3：\n输入：n = 1\n输出：true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 343,
        number: "0343",
        title: "整数拆分",
        difficulty: "medium",
        description: "给定一个正整数 n，将其拆分为 k 个 正整数 的和（k >= 2），并使这些整数的乘积最大化。\n\n返回 你可以获得的最大乘积。",
        example: "示例 1：\n输入: n = 2\n输出: 1\n解释: 2 = 1 + 1, 1 × 1 = 1。\n\n示例 2：\n输入: n = 10\n输出: 36\n解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 344,
        number: "0344",
        title: "反转字符串",
        difficulty: "easy",
        description: "编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。\n\n不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。",
        example: "示例 1：\n输入：s = [\"h\",\"e\",\"l\",\"l\",\"o\"]\n输出：[\"o\",\"l\",\"l\",\"e\",\"h\"]\n\n示例 2：\n输入：s = [\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]\n输出：[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 345,
        number: "0345",
        title: "反转字符串中的元音字母",
        difficulty: "easy",
        description: "给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。\n\n元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。",
        example: "示例 1：\n输入：s = \"hello\"\n输出：\"holle\"\n\n示例 2：\n输入：s = \"leetcode\"\n输出：\"leotcede\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 346,
        number: "0346",
        title: "数据流中的移动平均值",
        difficulty: "easy",
        description: "给定一个整数数据流和一个窗口大小，根据该滑动窗口的大小，计算其所有整数的移动平均值。\n\n实现 MovingAverage 类：\n- MovingAverage(int size) 用窗口大小 size 初始化对象。\n- double next(int val) 计算并返回数据流中最后 size 个值的移动平均值。",
        example: "示例：\n输入：\n[\"MovingAverage\", \"next\", \"next\", \"next\", \"next\"]\n[[3], [1], [10], [3], [5]]\n输出：\n[null, 1.0, 5.5, 4.66667, 6.0]\n\n解释：\nMovingAverage movingAverage = new MovingAverage(3);\nmovingAverage.next(1); // 返回 1.0 = 1 / 1\nmovingAverage.next(10); // 返回 5.5 = (1 + 10) / 2\nmovingAverage.next(3); // 返回 4.66667 = (1 + 10 + 3) / 3\nmovingAverage.next(5); // 返回 6.0 = (10 + 3 + 5) / 3",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 347,
        number: "0347",
        title: "前 K 个高频元素",
        difficulty: "medium",
        description: "给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。",
        example: "示例 1：\n输入：nums = [1,1,1,2,2,3], k = 2\n输出：[1,2]\n\n示例 2：\n输入：nums = [1], k = 1\n输出：[1]\n\n示例 3：\n输入：nums = [1,2,1,2,1,2,3,1,3,2], k = 2\n输出：[1,2]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log k)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 348,
        number: "0348",
        title: "设计井字棋",
        difficulty: "medium",
        description: "请在 n × n 的棋盘上，实现一个判定井字棋（Tic-Tac-Toe）胜负的神器，判断每一次玩家落子后，是否有胜出的玩家。\n\n在这个井字棋游戏中，会有 2 名玩家，他们将轮流在棋盘上放置自己的棋子。\n\n在实现这个判定器的过程中，你可以假设以下这些规则：\n1. 每一步棋都是在棋盘内的，并且只能被放置在一个空的格子里；\n2. 一旦游戏中有一名玩家胜出的话，游戏将不能再继续；\n3. 一个玩家如果在同一行、同一列或者同一斜对角线上都放置了自己的棋子，那么他便获得胜利。",
        example: "示例：\n给定棋盘边长 n = 3, 玩家 1 的棋子符号是 \"X\"，玩家 2 的棋子符号是 \"O\"。\n\nTicTacToe toe = new TicTacToe(3);\n\ntoe.move(0, 0, 1); // 玩家 1 在 (0, 0) 落子。\ntoe.move(0, 2, 2); // 玩家 2 在 (0, 2) 落子。\ntoe.move(2, 2, 1); // 玩家 1 在 (2, 2) 落子。\ntoe.move(1, 1, 2); // 玩家 2 在 (1, 1) 落子。\ntoe.move(2, 0, 1); // 玩家 1 在 (2, 0) 落子。\ntoe.move(1, 0, 2); // 玩家 2 在 (1, 0) 落子。\ntoe.move(2, 1, 1); // 玩家 1 在 (2, 1) 落子。\n返回 1 (玩家 1 获胜)",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 349,
        number: "0349",
        title: "两个数组的交集",
        difficulty: "easy",
        description: "给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。",
        example: "示例 1：\n输入：nums1 = [1,2,2,1], nums2 = [2,2]\n输出：[2]\n\n示例 2：\n输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]\n输出：[9,4]\n解释：[4,9] 也是可通过的",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n+m)",
                spaceComplexity: "O(min(n,m))"
            }
        ]
    },
    {
        id: 350,
        number: "0350",
        title: "两个数组的交集 II",
        difficulty: "easy",
        description: "给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则取较小值）。可以不考虑输出结果的顺序。",
        example: "示例 1：\n输入：nums1 = [1,2,2,1], nums2 = [2,2]\n输出：[2,2]\n\n示例 2：\n输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]\n输出：[4,9]\n解释：[9,4] 也是可通过的",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n+m)",
                spaceComplexity: "O(min(n,m))"
            }
        ]
    },
    {
        id: 351,
        number: "0351",
        title: "安卓系统手势解锁",
        difficulty: "medium",
        description: "我们都知道安卓有个手势解锁的界面，是一个 3 x 3 的点所绘制出来的网格。用户可以设置一个解锁路径，通过连接特定序列中的点，形成一个解锁图案。如果解锁图案中两个连续点之间的直线经过网格中的任何其他点，则这两个点之间需要用户先经过该点。给你两个整数，分别为 m 和 n，其中 1 ≤ m ≤ n ≤ 9，那么请你统计一下有多少种解锁图案，是至少需要经过 m 个点，但是最多经过不超过 n 个点的。",
        example: "示例 1：\n输入：m = 1, n = 1\n输出：9\n\n示例 2：\n输入：m = 1, n = 2\n输出：65",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n!)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 352,
        number: "0352",
        title: "将数据流变为多个不相交区间",
        difficulty: "hard",
        description: "给你一个由非负整数 a1, a2, ..., an 组成的数据流输入，请你将到目前为止看到的数字总结为不相交的区间列表。实现 SummaryRanges 类：\n- SummaryRanges() 使用一个空数据流初始化对象\n- void addNum(int val) 向数据流中加入整数 val\n- int[][] getIntervals() 以不相交区间 [starti, endi] 的列表形式返回对数据流中整数的总结",
        example: "示例：\n输入：\n[\"SummaryRanges\", \"addNum\", \"getIntervals\", \"addNum\", \"getIntervals\", \"addNum\", \"getIntervals\", \"addNum\", \"getIntervals\", \"addNum\", \"getIntervals\"]\n[[], [1], [], [3], [], [7], [], [2], [], [6], []]\n输出：\n[null, null, [[1, 1]], null, [[1, 1], [3, 3]], null, [[1, 1], [3, 3], [7, 7]], null, [[1, 3], [7, 7]], null, [[1, 3], [6, 7]]]\n\n解释：\nSummaryRanges summaryRanges = new SummaryRanges();\nsummaryRanges.addNum(1);      // arr = [1]\nsummaryRanges.getIntervals(); // 返回 [[1, 1]]\nsummaryRanges.addNum(3);      // arr = [1, 3]\nsummaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3]]\nsummaryRanges.addNum(7);      // arr = [1, 3, 7]\nsummaryRanges.getIntervals(); // 返回 [[1, 1], [3, 3], [7, 7]]\nsummaryRanges.addNum(2);      // arr = [1, 2, 3, 7]\nsummaryRanges.getIntervals(); // 返回 [[1, 3], [7, 7]]\nsummaryRanges.addNum(6);      // arr = [1, 2, 3, 6, 7]\nsummaryRanges.getIntervals(); // 返回 [[1, 3], [6, 7]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 353,
        number: "0353",
        title: "贪吃蛇",
        difficulty: "medium",
        description: "请你设计一个 贪吃蛇游戏，该游戏将会在一个 屏幕尺寸 = 宽度 x 高度 的屏幕上运行。如果你不熟悉这个游戏，可以 点击这里 在线试玩。起初时，蛇在左上角的 (0, 0) 位置，身体长度为 1 个单位。你将会被给出一个数组 food ，其中 food[i] = (ri, ci) 表示食物的位置。当蛇吃到食物时，身子的长度会增加 1 个单位，得分也会 +1。食物不会同时出现，会按列表中的顺序逐一显示在屏幕上。比方讲，第一个食物被蛇吃掉后，第二个食物才会出现。当一个食物在屏幕上出现时，保证 不会 出现在被蛇身体占据的格子里。如果蛇越界（与边界相撞）或者头与移动后的身体相撞（即蛇身体相撞），游戏结束。实现 SnakeGame 类：\n- SnakeGame(int width, int height, int[][] food) 初始化对象，屏幕大小为 height x width ，食物位置为 food\n- int move(String direction) 返回蛇在方向 direction 上移动后的得分。如果游戏结束，返回 -1。",
        example: "示例 1：\n输入：\n[\"SnakeGame\", \"move\", \"move\", \"move\", \"move\", \"move\", \"move\"]\n[[3, 2, [[1, 2], [0, 1]]], [\"R\"], [\"D\"], [\"R\"], [\"U\"], [\"L\"], [\"U\"]]\n输出：\n[null, 0, 0, 1, 1, 2, -1]\n\n解释：\nSnakeGame snakeGame = new SnakeGame(3, 2, [[1, 2], [0, 1]]);\nsnakeGame.move(\"R\"); // 返回 0\nsnakeGame.move(\"D\"); // 返回 0\nsnakeGame.move(\"R\"); // 返回 1 ，蛇吃掉了第一个食物，同时第二个食物出现在 (0, 1)\nsnakeGame.move(\"U\"); // 返回 1\nsnakeGame.move(\"L\"); // 返回 2 ，蛇吃掉了第二个食物，没有更多食物\nsnakeGame.move(\"U\"); // 返回 -1 ，蛇与边界相撞，游戏结束",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(width * height)"
            }
        ]
    },
    {
        id: 354,
        number: "0354",
        title: "俄罗斯套娃信封问题",
        difficulty: "hard",
        description: "给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。请计算 最多能有多少个 信封能组成一组\"俄罗斯套娃\"信封（即可以把一个信封放到另一个信封里面）。注意：不允许旋转信封。",
        example: "示例 1：\n输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]\n输出：3\n解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。\n\n示例 2：\n输入：envelopes = [[1,1],[1,1],[1,1]]\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 355,
        number: "0355",
        title: "设计推特",
        difficulty: "medium",
        description: "设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近 10 条推文。实现 Twitter 类：\n- Twitter() 初始化简易版推特对象\n- void postTweet(int userId, int tweetId) 根据给定的 tweetId 和 userId 创建一条新推文。每次调用此函数都会使用一个不同的 tweetId 。\n- List<Integer> getNewsFeed(int userId) 检索当前用户新闻推送中最近 10 条推文的 ID 。新闻推送中的每一项都必须是由用户关注的人或者是用户自己发布的推文。推文必须 按照时间顺序由最近到最远排序 。\n- void follow(int followerId, int followeeId) ID 为 followerId 的用户开始关注 ID 为 followeeId 的用户。\n- void unfollow(int followerId, int followeeId) ID 为 followerId 的用户不再关注 ID 为 followeeId 的用户。",
        example: "示例：\n输入：\n[\"Twitter\", \"postTweet\", \"getNewsFeed\", \"follow\", \"postTweet\", \"getNewsFeed\", \"unfollow\", \"getNewsFeed\"]\n[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]\n输出：\n[null, null, [5], null, null, [6, 5], null, [5]]\n\n解释：\nTwitter twitter = new Twitter();\ntwitter.postTweet(1, 5); // 用户 1 发送了一条新推文 (id = 5)\ntwitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含一个 id 为 5 的推文\ntwitter.follow(1, 2);    // 用户 1 关注了用户 2\ntwitter.postTweet(2, 6); // 用户 2 发送了一个新推文 (id = 6)\ntwitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含两个推文，id 分别为 -> [6, 5] 。推文 id 6 应当在推文 id 5 之前，因为它是在 5 之后发送的\ntwitter.unfollow(1, 2);  // 用户 1 取消关注了用户 2\ntwitter.getNewsFeed(1);  // 用户 1 获取推文应当返回一个列表，其中包含一个 id 为 5 的推文。因为用户 1 已经不再关注用户 2",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log k)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 356,
        number: "0356",
        title: "直线镜像",
        difficulty: "medium",
        description: "在一个二维平面空间中，如果我们在同一条直线上放置三个点，则这三个点中必定有两个点是镜像点（也就是说，这两个点关于直线对称）。给定 n 个点，请你找出其中的三个点，使得这三个点在同一条直线上，且其中两个点互为镜像点。如果存在这样的三个点，则返回 true ；否则，返回 false 。",
        example: "示例 1：\n输入：points = [[1,1],[-1,1],[1,-1],[-1,-1]]\n输出：true\n解释：点 (1, 1) 和点 (-1, -1) 关于 y 轴对称，而且它们和点 (0, 0) 在同一条直线上。\n\n示例 2：\n输入：points = [[1,1],[-1,-1],[1,-1],[-1,1]]\n输出：true\n解释：点 (1, 1) 和点 (-1, -1) 关于原点对称，而且它们和点 (0, 0) 在同一条直线上。\n\n示例 3：\n输入：points = [[1,1],[-1,-1],[1,-1],[-1,1],[2,2]]\n输出：false\n解释：不存在三个点在同一条直线上，且其中两个点互为镜像点。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 357,
        number: "0357",
        title: "计算各个位数不同的数字个数",
        difficulty: "medium",
        description: "给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10^n。",
        example: "示例 1：\n输入：n = 2\n输出：91\n解释：答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。\n\n示例 2：\n输入：n = 0\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 358,
        number: "0358",
        title: "K 距离间隔重排字符串",
        difficulty: "hard",
        description: "给你一个非空的字符串 s 和一个整数 k，你要将这个字符串中的字母进行重新排列，使得重排后的字符串中相同字母的位置间隔距离至少为 k。所有输入的字符串都由小写字母组成，如果找不到距离至少为 k 的重排结果，请返回一个空字符串 \"\"。",
        example: "示例 1：\n输入：s = \"aabbcc\", k = 3\n输出：\"abcabc\"\n解释：相同的字母在新的字符串中间隔至少 3 个单位距离。\n\n示例 2：\n输入：s = \"aaabc\", k = 3\n输出：\"\"\n解释：没有办法找到可能的重排结果。\n\n示例 3：\n输入：s = \"aaadbbcc\", k = 2\n输出：\"abacabcd\"\n解释：相同的字母在新的字符串中间隔至少 2 个单位距离。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 359,
        number: "0359",
        title: "日志速率限制器",
        difficulty: "easy",
        description: "请你设计一个日志系统，可以流式接收消息以及它的时间戳。每条 不重复 的消息最多只能每 10 秒打印一次。也就是说，如果在时间戳 t 打印某条消息，那么相同内容的消息直到时间戳变为 t + 10 之前都不会被打印。所有消息都按时间顺序发送。多条消息可能到达同一时间戳。实现 Logger 类：\n- Logger() 初始化 logger 对象\n- bool shouldPrintMessage(int timestamp, string message) 如果这条消息 message 在给定的时间戳 timestamp 应该被打印出来，则返回 true ，否则请返回 false 。",
        example: "示例：\n输入：\n[\"Logger\", \"shouldPrintMessage\", \"shouldPrintMessage\", \"shouldPrintMessage\", \"shouldPrintMessage\", \"shouldPrintMessage\", \"shouldPrintMessage\"]\n[[], [1, \"foo\"], [2, \"bar\"], [3, \"foo\"], [8, \"bar\"], [10, \"foo\"], [11, \"foo\"]]\n输出：\n[null, true, true, false, false, false, true]\n\n解释：\nLogger logger = new Logger();\nlogger.shouldPrintMessage(1, \"foo\");  // 返回 true ，下一次 \"foo\" 可以打印的时间戳是 1 + 10 = 11\nlogger.shouldPrintMessage(2, \"bar\");  // 返回 true ，下一次 \"bar\" 可以打印的时间戳是 2 + 10 = 12\nlogger.shouldPrintMessage(3, \"foo\");  // 3 < 11 ，返回 false\nlogger.shouldPrintMessage(8, \"bar\");  // 8 < 12 ，返回 false\nlogger.shouldPrintMessage(10, \"foo\"); // 10 < 11 ，返回 false\nlogger.shouldPrintMessage(11, \"foo\"); // 11 >= 11 ，返回 true ，下一次 \"foo\" 可以打印的时间戳是 11 + 10 = 21",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 360,
        number: "0360",
        title: "有序转化数组",
        difficulty: "medium",
        description: "给你一个已经排好序的整数数组 nums 和整数 a、b、c。对于数组中的每一个数 x，计算函数值 f(x) = ax^2 + bx + c，请将函数值产生的数组返回。要注意，返回的这个数组必须按照 升序排列，并且我们所期望的解法时间复杂度为 O(n)。",
        example: "示例 1：\n输入：nums = [-4,-2,2,4], a = 1, b = 3, c = 5\n输出：[3,9,15,33]\n\n示例 2：\n输入：nums = [-4,-2,2,4], a = -1, b = 3, c = 5\n输出：[-23,-5,1,7]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 361,
        number: "0361",
        title: "轰炸敌人",
        difficulty: "medium",
        description: "想象一下炸弹人游戏，在你面前的二维网格中有一些墙W，敌人E和空白格子0（数字 0）。炸弹可以放在空白格子里，炸到的敌人就是被消灭。因为墙体挡着，炸弹只能炸到同一行和同一列没有被墙体挡住的敌人。给你一个二维网格，请你计算一个炸弹最多能炸多少敌人。",
        example: "示例：\n输入: [\n[\"0\",\"E\",\"0\",\"0\"],\n[\"E\",\"0\",\"W\",\"E\"],\n[\"0\",\"E\",\"0\",\"0\"]\n]\n输出: 3 \n解释: 对于如下网格\n0 E 0 0 \nE 0 W E \n0 E 0 0\n在位置 (1,1) 放置炸弹可以消灭 3 个敌人",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 362,
        number: "0362",
        title: "敲击计数器",
        difficulty: "medium",
        description: "设计一个敲击计数器，使它可以统计在过去5分钟内被敲击次数。每个函数会接收一个时间戳参数（以秒为单位），你可以假设最早的时间戳从1开始，且都是按照时间顺序对系统进行调用（即时间戳是单调递增）。在同一时刻有可能会有多次敲击。",
        example: "示例：\nHitCounter counter = new HitCounter();\n\n// 在时刻 1 敲击一次。\ncounter.hit(1);\n\n// 在时刻 2 敲击一次。\ncounter.hit(2);\n\n// 在时刻 3 敲击一次。\ncounter.hit(3);\n\n// 在时刻 4 统计过去 5 分钟内的敲击次数, 函数返回 3 。\ncounter.getHits(4);\n\n// 在时刻 300 敲击一次。\ncounter.hit(300);\n\n// 在时刻 300 统计过去 5 分钟内的敲击次数，函数返回 4 。\ncounter.getHits(300);\n\n// 在时刻 301 统计过去 5 分钟内的敲击次数，函数返回 3 。\ncounter.getHits(301);",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 363,
        number: "0363",
        title: "矩形区域不超过K的最大数值和",
        difficulty: "hard",
        description: "给你一个 m x n 的矩阵 matrix 和一个整数 k ，找出并返回矩阵内部矩形区域的不超过 k 的最大数值和。题目数据保证总会存在一个数值和不超过 k 的矩形区域。",
        example: "示例 1：\n输入：matrix = [[1,0,1],[0,-2,3]], k = 2\n输出：2\n解释：蓝色边框圈出来的矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。\n\n示例 2：\n输入：matrix = [[2,2,-1]], k = 3\n输出：3",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m^2*n*log(n))",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 364,
        number: "0364",
        title: "加权嵌套序列和 II",
        difficulty: "medium",
        description: "给你一个整数嵌套列表 nestedList ，每一个元素要么是一个整数，要么是一个列表（这个列表中的每个元素也同样是整数或列表）。同时，给你一个整数 depth 。每个整数的权重是它的深度，嵌套的深度是其在列表内的嵌套层数。例如，嵌套列表 [1,[2,2],[[3],2],1] 中，每个整数的权重如下：\n- 1 的权重为 1，因为它的深度为 1\n- 2 的权重为 2，因为它的深度为 2\n- 3 的权重为 3，因为它的深度为 3\n- 2 的权重为 3，因为它的深度为 3\n- 2 的权重为 2，因为它的深度为 2\n- 1 的权重为 1，因为它的深度为 1\n返回列表中所有整数的加权和。",
        example: "示例 1：\n输入：nestedList = [[1,1],2,[1,1]], depth = 2\n输出：8\n解释：四个 1 在深度为 1 的位置，一个 2 在深度为 2 的位置。1*1 + 1*1 + 2*2 + 1*1 + 1*1 = 8\n\n示例 2：\n输入：nestedList = [1,[4,[6]]], depth = 2\n输出：17\n解释：一个 1 在深度为 1 的位置，一个 4 在深度为 2 的位置，一个 6 在深度为 3 的位置。1*1 + 4*2 + 6*3 = 17",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(d)"
            }
        ]
    },
    {
        id: 365,
        number: "0365",
        title: "水壶问题",
        difficulty: "medium",
        description: "有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。你可以：\n- 装满任意一个水壶\n- 清空任意一个水壶\n- 从一个水壶向另外一个水壶倒水，直到装满或者倒空",
        example: "示例 1：\n输入：jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4\n输出：true\n解释：来自著名的「Die Hard」问题，有两个水壶，容量分别为 3 和 5 升，需要得到恰好 4 升的水。\n初始状态是两个水壶都是空的。解决方案如下：\n1. 把 5 升水壶装满。此时两个水壶中水的体积为 (0, 5)\n2. 把 5 升水壶中的水倒入 3 升水壶。此时两个水壶中水的体积为 (3, 2)\n3. 把 3 升水壶清空。此时两个水壶中水的体积为 (0, 2)\n4. 把 5 升水壶中的水倒入 3 升水壶。此时两个水壶中水的体积为 (2, 0)\n5. 把 5 升水壶装满。此时两个水壶中水的体积为 (2, 5)\n6. 把 5 升水壶中的水倒入 3 升水壶。此时两个水壶中水的体积为 (3, 4)\n7. 把 3 升水壶清空。此时两个水壶中水的体积为 (0, 4)\n8. 把 5 升水壶中的水倒入 3 升水壶。此时两个水壶中水的体积为 (3, 1)\n\n示例 2：\n输入：jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5\n输出：false\n\n示例 3：\n输入：jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3\n输出：true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log(min(x,y)))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 366,
        number: "0366",
        title: "寻找完全二叉树的叶子节点",
        difficulty: "medium",
        description: "给你一棵二叉树，请按以下要求的顺序收集它的全部节点：\n1. 依次从左到右，每次收集并删除所有的叶子节点\n2. 重复如上过程直到整棵树为空",
        example: "示例：\n输入: [1,2,3,4,5]\n         1\n        / \\\n       2   3\n      / \\\n     4   5\n\n输出: [[4,5,3],[2],[1]]\n\n解释:\n1. 删除叶子节点 [4,5,3] ，得到如下树结构：\n          1\n         /\n        2\n2. 现在删去叶子节点 [2] ，得到如下树结构：\n          1\n3. 现在删去叶子节点 [1] ，得到空树：\n          []",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 367,
        number: "0367",
        title: "有效的完全平方数",
        difficulty: "easy",
        description: "给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。进阶：不要 使用任何内置的库函数，如 sqrt 。",
        example: "示例 1：\n输入：num = 16\n输出：true\n\n示例 2：\n输入：num = 14\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 368,
        number: "0368",
        title: "最大整除子集",
        difficulty: "medium",
        description: "给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：answer[i] % answer[j] == 0 ，或 answer[j] % answer[i] == 0。如果存在多个有效解子集，返回其中任何一个均可。",
        example: "示例 1：\n输入：nums = [1,2,3]\n输出：[1,2]\n解释：[1,3] 也会被视为正确答案。\n\n示例 2：\n输入：nums = [1,2,4,8]\n输出：[1,2,4,8]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 369,
        number: "0369",
        title: "给单链表加一",
        difficulty: "medium",
        description: "用一个 非空 单链表来表示一个非负整数，然后将这个整数加一。你可以假设这个整数除了 0 本身，没有任何前导的 0。这个整数的各个数位按照 高位在链表头部、低位在链表尾部 的顺序排列。",
        example: "示例 1：\n输入：head = [1,2,3]\n输出：[1,2,4]\n\n示例 2：\n输入：head = [0]\n输出：[1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 370,
        number: "0370",
        title: "区间加法",
        difficulty: "medium",
        description: "假设你有一个长度为 n 的数组，初始情况下所有的数字均为 0，你将会被给出 k 个更新的操作。其中，每个操作会被表示为一个三元组：[startIndex, endIndex, inc]，你需要将子数组 A[startIndex ... endIndex]（包括 startIndex 和 endIndex）增加 inc。请你返回 k 次操作后的数组。",
        example: "示例：\n输入：length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]\n输出：[-2,0,3,5,3]\n解释：\n初始状态：[0,0,0,0,0]\n进行了操作 [1,3,2] 后的状态：[0,2,2,2,0]\n进行了操作 [2,4,3] 后的状态：[0,2,5,5,3]\n进行了操作 [0,2,-2] 后的状态：[-2,0,3,5,3]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n+k)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 371,
        number: "0371",
        title: "两整数之和",
        difficulty: "medium",
        description: "给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。",
        example: "示例 1：\n输入：a = 1, b = 2\n输出：3\n\n示例 2：\n输入：a = 2, b = 3\n输出：5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 372,
        number: "0372",
        title: "超级次方",
        difficulty: "medium",
        description: "你的任务是计算 a^b 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。",
        example: "示例 1：\n输入：a = 2, b = [3]\n输出：8\n\n示例 2：\n输入：a = 2, b = [1,0]\n输出：1024\n\n示例 3：\n输入：a = 1, b = [4,3,3,8,5,2]\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 373,
        number: "0373",
        title: "查找和最小的K对数字",
        difficulty: "medium",
        description: "给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2。请找到和最小的 k 个数对 (u1,v1), (u2,v2) ... (uk,vk) 。",
        example: "示例 1：\n输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3\n输出: [1,2],[1,4],[1,6]\n解释: 返回序列中的前 3 对数：\n     [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]\n\n示例 2：\n输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2\n输出: [1,1],[1,1]\n解释: 返回序列中的前 2 对数：\n     [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(klogk)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 374,
        number: "0374",
        title: "猜数字大小",
        difficulty: "easy",
        description: "猜数字游戏的规则如下：\n\n每轮游戏，我都会从 1 到 n 随机选择一个数字。 请你猜选出的是哪个数字。\n如果你猜错了，我会告诉你，你猜测的数字比我选出的数字是大了还是小了。\n你可以通过调用一个预先定义好的接口 int guess(int num) 来获取猜测结果，返回值一共有 3 种可能的情况（-1，1 或 0）：\n\n-1：我选出的数字比你猜的数字小 pick < num\n1：我选出的数字比你猜的数字大 pick > num\n0：我选出的数字和你猜的数字一样。恭喜！你猜对了！pick == num\n返回我选出的数字。",
        example: "示例 1：\n输入：n = 10, pick = 6\n输出：6\n\n示例 2：\n输入：n = 1, pick = 1\n输出：1\n\n示例 3：\n输入：n = 2, pick = 1\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 375,
        number: "0375",
        title: "猜数字大小 II",
        difficulty: "medium",
        description: "我们正在玩一个猜数游戏，游戏规则如下：\n\n我从 1 到 n 之间选择一个数字。\n你来猜我选了哪个数字。\n如果你猜到正确的数字，就会 赢得游戏 。\n如果你猜错了，那么我会告诉你，我选的数字比你的 更大或者更小 ，并且你需要继续猜数。\n每当你猜了数字 x 并且猜错了的时候，你需要支付金额为 x 的现金。如果你花光了钱，就会 输掉游戏 。\n给你一个特定的数字 n ，返回能够 确保你获胜 的最小现金数，不管我选择那个数字 。",
        example: "示例 1：\n输入：n = 10\n输出：16\n解释：制胜策略如下：\n- 数字范围是 [1,10] 。你先猜测数字为 7 。\n    - 如果这是我选中的数字，你的总费用为 $0 。否则，你需要支付 $7 。\n    - 如果我的数字更大，则下一步需要猜测的数字范围是 [8,10] 。你猜测数字为 9 。\n        - 如果这是我选中的数字，你的总费用为 $7 。否则，你需要支付 $9 。\n        - 如果我的数字更大，那么这个数字一定是 10 。你猜测数字为 10 并赢得游戏，总费用为 $7 + $9 = $16 。\n        - 如果我的数字更小，那么这个数字一定是 8 。你猜测数字为 8 并赢得游戏，总费用为 $7 + $9 = $16 。\n    - 如果我的数字更小，则下一步需要猜测的数字范围是 [1,6] 。你猜测数字为 3 。\n        - 如果这是我选中的数字，你的总费用为 $7 。否则，你需要支付 $3 。\n        - 如果我的数字更大，则下一步需要猜测的数字范围是 [4,6] 。你猜测数字为 5 。\n            - 如果这是我选中的数字，你的总费用为 $7 + $3 = $10 。否则，你需要支付 $5 。\n            - 如果我的数字更大，那么这个数字一定是 6 。你猜测数字为 6 并赢得游戏，总费用为 $7 + $3 + $5 = $15 。\n            - 如果我的数字更小，那么这个数字一定是 4 。你猜测数字为 4 并赢得游戏，总费用为 $7 + $3 + $5 = $15 。\n        - 如果我的数字更小，则下一步需要猜测的数字范围是 [1,2] 。你猜测数字为 1 。\n            - 如果这是我选中的数字，你的总费用为 $7 + $3 = $10 。否则，你需要支付 $1 。\n            - 如果我的数字更大，那么这个数字一定是 2 。你猜测数字为 2 并赢得游戏，总费用为 $7 + $3 + $1 = $11 。\n在最糟糕的情况下，你需要支付 $16 。因此，你只需要 $16 就可以确保自己赢得游戏。\n\n示例 2：\n输入：n = 1\n输出：0\n解释：只有一个可能的数字，所以你可以直接猜 1 并赢得游戏，无需支付任何费用。\n\n示例 3：\n输入：n = 2\n输出：1\n解释：有两个可能的数字 1 和 2 。\n- 你可以先猜 1 。\n    - 如果这是我选中的数字，你的总费用为 $0 。否则，你需要支付 $1 。\n    - 如果我的数字更大，那么这个数字一定是 2 。你猜测数字为 2 并赢得游戏，总费用为 $1 。\n最糟糕的情况下，你需要支付 $1 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^3)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 376,
        number: "0376",
        title: "摆动序列",
        difficulty: "medium",
        description: "如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。\n\n例如， [1, 7, 4, 9, 2, 5] 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。\n\n相反，[1, 4, 7, 2, 5] 和 [1, 7, 4, 5, 5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。\n子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。\n\n给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。",
        example: "示例 1：\n输入：nums = [1,7,4,9,2,5]\n输出：6\n解释：整个序列均为摆动序列，各元素之间的差值为 (6, -3, 5, -7, 3) 。\n\n示例 2：\n输入：nums = [1,17,5,10,13,15,10,5,16,8]\n输出：7\n解释：这个序列包含几个长度为 7 摆动序列。\n其中一个是 [1, 17, 10, 13, 10, 16, 8] ，各元素之间的差值为 (16, -7, 3, -3, 6, -8) 。\n\n示例 3：\n输入：nums = [1,2,3,4,5,6,7,8,9]\n输出：2",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 377,
        number: "0377",
        title: "组合总和 Ⅳ",
        difficulty: "medium",
        description: "给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。\n\n题目数据保证答案符合 32 位整数范围。",
        example: "示例 1：\n输入：nums = [1,2,3], target = 4\n输出：7\n解释：\n所有可能的组合为：\n(1, 1, 1, 1)\n(1, 1, 2)\n(1, 2, 1)\n(1, 3)\n(2, 1, 1)\n(2, 2)\n(3, 1)\n请注意，顺序不同的序列被视作不同的组合。\n\n示例 2：\n输入：nums = [9], target = 3\n输出：0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(target * n)",
                spaceComplexity: "O(target)"
            }
        ]
    },
    {
        id: 378,
        number: "0378",
        title: "有序矩阵中第 K 小的元素",
        difficulty: "medium",
        description: "给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。\n请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。\n\n你必须找到一个内存复杂度优于 O(n^2) 的解决方案。",
        example: "示例 1：\n输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8\n输出：13\n解释：矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小元素是 13\n\n示例 2：\n输入：matrix = [[-5]], k = 1\n输出：-5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * log(max-min))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 379,
        number: "0379",
        title: "电话目录管理系统",
        difficulty: "medium",
        description: "设计一个电话目录管理系统，让它支持以下功能：\n\nget: 分配给用户一个未被使用的电话号码，获取失败请返回 -1\ncheck: 检查指定的电话号码是否被使用\nrelease: 释放掉一个电话号码，使其能够重新被分配",
        example: "示例：\n// 初始化电话目录，包括 3 个电话号码：0，1 和 2。\nPhoneDirectory directory = new PhoneDirectory(3);\n\n// 可以分配的第一个号码是 0。\ndirectory.get();    // 返回 0\n\n// 可以分配的第二个号码是 1。\ndirectory.get();    // 返回 1\n\n// 该号码 2 已经被分配，所以返回 true。\ndirectory.check(2); // 返回 true\n\n// 可以分配的第三个号码是 2（之前已经释放的）。\ndirectory.get();    // 返回 2\n\n// 此时，号码 0 已经被分配，所以返回 false。\ndirectory.check(0); // 返回 false\n\n// 释放号码 1。\ndirectory.release(1);\n\n// 号码 1 现在是可分配状态，所以返回 true。\ndirectory.check(1); // 返回 true\n\n// 分配号码 1。\ndirectory.get();    // 返回 1\n\n// 此时，号码 0, 1, 2 都被分配了，所以返回 -1。\ndirectory.get();    // 返回 -1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 380,
        number: "0380",
        title: "常数时间插入、删除和获取随机元素",
        difficulty: "medium",
        description: "实现RandomizedSet 类：\n\nRandomizedSet() 初始化 RandomizedSet 对象\nbool insert(int val) 当元素 val 不存在时，向集合中插入该项，并返回 true ；否则，返回 false 。\nbool remove(int val) 当元素 val 存在时，从集合中移除该项，并返回 true ；否则，返回 false 。\nint getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。\n你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 O(1) 。",
        example: "示例：\n输入\n[\"RandomizedSet\", \"insert\", \"remove\", \"insert\", \"getRandom\", \"remove\", \"insert\", \"getRandom\"]\n[[], [1], [2], [2], [], [1], [2], []]\n输出\n[null, true, false, true, 2, true, false, 2]\n\n解释\nRandomizedSet randomizedSet = new RandomizedSet();\nrandomizedSet.insert(1); // 向集合中插入 1 。返回 true 表示 1 被成功地插入。\nrandomizedSet.remove(2); // 返回 false ，表示集合中不存在 2 。\nrandomizedSet.insert(2); // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。\nrandomizedSet.getRandom(); // getRandom 应随机返回 1 或 2 。\nrandomizedSet.remove(1); // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。\nrandomizedSet.insert(2); // 2 已在集合中，所以返回 false 。\nrandomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 381,
        number: "0381",
        title: "O(1) 时间插入、删除和获取随机元素 - 允许重复",
        difficulty: "hard",
        description: "RandomizedCollection 是一种包含数字集合(可能是重复的)的数据结构。它应该支持插入和删除特定元素，以及删除随机元素。\n\n实现 RandomizedCollection 类:\n\nRandomizedCollection()初始化空的 RandomizedCollection 对象。\nbool insert(int val) 将一个 val 项插入到集合中，即使该项已经存在。如果该项不存在，则返回 true ，否则返回 false 。\nbool remove(int val) 如果存在，从集合中移除一个 val 项。如果该项存在，则返回 true ，否则返回 false 。注意，如果 val 在集合中出现多次，我们只删除其中一个。\nint getRandom() 从当前的多个元素集合中返回一个随机元素。每个元素被返回的概率与集合中包含的相同值的数量 线性相关 。\n\n您必须实现类的函数，使每个函数的 平均 时间复杂度为 O(1) 。\n\n注意：生成测试用例时，只有在 RandomizedCollection 中 至少有一项 时，才会调用 getRandom 。",
        example: "示例 1:\n\n输入\n[\"RandomizedCollection\", \"insert\", \"insert\", \"insert\", \"getRandom\", \"remove\", \"getRandom\"]\n[[], [1], [1], [2], [], [1], []]\n输出\n[null, true, false, true, 2, true, 1]\n\n解释\nRandomizedCollection collection = new RandomizedCollection();// 初始化一个空的集合。\ncollection.insert(1);   // 返回 true，因为集合不包含 1。\n                        // 将 1 插入到集合中。\ncollection.insert(1);   // 返回 false，因为集合包含 1。\n                        // 将另一个 1 插入到集合中。集合现在包含 [1,1]。\ncollection.insert(2);   // 返回 true，因为集合不包含 2。\n                        // 将 2 插入到集合中。集合现在包含 [1,1,2]。\ncollection.getRandom(); // getRandom 应当:\n                        // 有 2/3 的概率返回 1,\n                        // 1/3 的概率返回 2。\ncollection.remove(1);   // 返回 true，因为集合包含 1。\n                        // 从集合中移除 1。集合现在包含 [1,2]。\ncollection.getRandom(); // getRandom 应该返回 1 或 2，两者的可能性相同。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 382,
        number: "0382",
        title: "链表随机节点",
        difficulty: "medium",
        description: "给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 被选中的概率一样 。\n\n实现 Solution 类：\n\nSolution(ListNode head) 使用整数数组初始化对象。\nint getRandom() 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。",
        example: "示例：\n输入\n[\"Solution\", \"getRandom\", \"getRandom\", \"getRandom\", \"getRandom\", \"getRandom\"]\n[[[1, 2, 3]], [], [], [], [], []]\n输出\n[null, 1, 3, 2, 2, 3]\n\n解释\nSolution solution = new Solution([1, 2, 3]);\nsolution.getRandom(); // 返回 1\nsolution.getRandom(); // 返回 3\nsolution.getRandom(); // 返回 2\nsolution.getRandom(); // 返回 2\nsolution.getRandom(); // 返回 3\n// getRandom() 方法应随机返回 1、2、3中的一个，每个元素被返回的概率相等。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 383,
        number: "0383",
        title: "赎金信",
        difficulty: "easy",
        description: "给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。\n\n如果可以，返回 true ；否则返回 false 。\n\nmagazine 中的每个字符只能在 ransomNote 中使用一次。",
        example: "示例 1：\n\n输入：ransomNote = \"a\", magazine = \"b\"\n输出：false\n\n示例 2：\n\n输入：ransomNote = \"aa\", magazine = \"ab\"\n输出：false\n\n示例 3：\n\n输入：ransomNote = \"aa\", magazine = \"aab\"\n输出：true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 384,
        number: "0384",
        title: "打乱数组",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。\n\n实现 Solution class:\n\nSolution(int[] nums) 使用整数数组 nums 初始化对象\nint[] reset() 重设数组到它的初始状态并返回\nint[] shuffle() 返回数组随机打乱后的结果",
        example: "示例 1：\n\n输入\n[\"Solution\", \"shuffle\", \"reset\", \"shuffle\"]\n[[[1, 2, 3]], [], [], []]\n输出\n[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]\n\n解释\nSolution solution = new Solution([1, 2, 3]);\nsolution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]\nsolution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]\nsolution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 385,
        number: "0385",
        title: "迷你语法分析器",
        difficulty: "medium",
        description: "给定一个字符串 s 表示一个整数嵌套列表，实现一个解析它的语法分析器并返回解析的结果 NestedInteger 。\n\n列表中的每个元素只可能是整数或整数嵌套列表",
        example: "示例 1：\n\n输入：s = \"324\"\n输出：324\n解释：你应该返回一个 NestedInteger 对象，其中只包含整数值 324。\n\n示例 2：\n\n输入：s = \"[123,[456,[789]]]\"\n输出：[123,[456,[789]]]\n解释：返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：\n1. 一个 integer 包含值 123\n2. 一个包含两个元素的嵌套列表：\n    i.  一个 integer 包含值 456\n    ii. 一个包含一个元素的嵌套列表\n         a. 一个 integer 包含值 789",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 386,
        number: "0386",
        title: "字典序排数",
        difficulty: "medium",
        description: "给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。\n\n你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。",
        example: "示例 1：\n\n输入：n = 13\n输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]\n\n示例 2：\n\n输入：n = 2\n输出：[1,2]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 387,
        number: "0387",
        title: "字符串中的第一个唯一字符",
        difficulty: "easy",
        description: "给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。",
        example: "示例 1：\n输入: s = \"leetcode\"\n输出: 0\n\n示例 2：\n输入: s = \"loveleetcode\"\n输出: 2\n\n示例 3：\n输入: s = \"aabb\"\n输出: -1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 388,
        number: "0388",
        title: "文件的最长绝对路径",
        difficulty: "medium",
        description: "假设有一个同时存储文件和目录的文件系统。下图展示了文件系统的一个示例：\n\n这里将 dir 作为根目录中的唯一目录。dir 包含两个子目录 subdir1 和 subdir2 。subdir1 包含文件 file1.ext 和子目录 subsubdir1；subdir2 包含子目录 subsubdir2，该子目录下包含文件 file2.ext 。\n\n在文本格式中，如下所示(⟶表示制表符)：\n\ndir\n⟶ subdir1\n⟶ ⟶ file1.ext\n⟶ ⟶ subsubdir1\n⟶ subdir2\n⟶ ⟶ subsubdir2\n⟶ ⟶ ⟶ file2.ext\n\n如果是代码表示，上面的文件系统可以写为 \"dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext\" 。'\\n' 和 '\\t' 分别是换行符和制表符。\n\n文件系统中的每个文件和文件夹都有一个唯一的 绝对路径 ，即必须打开才能到达文件/目录所在位置的目录顺序，所有路径用 '/' 连接。上面例子中，指向 file2.ext 的 绝对路径 是 \"dir/subdir2/subsubdir2/file2.ext\" 。每个目录名由字母、数字和/或空格组成，每个文件名遵循 name.extension 的格式，其中 name 和 extension由字母、数字和/或空格组成。\n\n给定一个以上述格式表示文件系统的字符串 input ，返回文件系统中 指向 文件 的 最长绝对路径 的长度 。 如果系统中没有文件，返回 0。",
        example: "示例 1：\n\n输入：input = \"dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext\"\n输出：20\n解释：只有一个文件，绝对路径为 \"dir/subdir2/file.ext\" ，路径长度 20\n\n示例 2：\n\n输入：input = \"dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext\"\n输出：32\n解释：存在两个文件：\n\"dir/subdir1/file1.ext\" ，路径长度 21\n\"dir/subdir2/subsubdir2/file2.ext\" ，路径长度 32\n返回 32 ，因为这是最长的路径\n\n示例 3：\n\n输入：input = \"a\"\n输出：0\n解释：不存在任何文件\n\n示例 4：\n\n输入：input = \"file1.txt\\nfile2.txt\\nlongfile.txt\"\n输出：12\n解释：根目录下有 3 个文件。\n因为根目录中任何东西的绝对路径只是名称本身，所以答案是 \"longfile.txt\" ，路径长度为 12",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 389,
        number: "0389",
        title: "找不同",
        difficulty: "easy",
        description: "给定两个字符串 s 和 t ，它们只包含小写字母。\n\n字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。\n\n请找出在 t 中被添加的字母。",
        example: "示例 1：\n\n输入：s = \"abcd\", t = \"abcde\"\n输出：\"e\"\n解释：'e' 是那个被添加的字母。\n\n示例 2：\n\n输入：s = \"\", t = \"y\"\n输出：\"y\"\n\n示例 3：\n\n输入：s = \"a\", t = \"aa\"\n输出：\"a\"\n\n示例 4：\n\n输入：s = \"ae\", t = \"aea\"\n输出：\"a\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 390,
        number: "0390",
        title: "消除游戏",
        difficulty: "medium",
        description: "列表 arr 由在范围 [1, n] 中的所有整数组成，并按严格递增排序。请你对 arr 应用下述算法：\n\n从左到右，删除第一个数字，然后每隔一个数字删除一个，直到到达列表末尾。\n重复上面的步骤，但这次是从右到左。也就是，删除最右侧的数字，然后剩下的数字每隔一个删除一个。\n不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。\n给你整数 n ，返回 arr 最后剩下的数字。",
        example: "示例 1：\n\n输入：n = 9\n输出：6\n解释：\narr = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n第一轮从左到右删除 [1, 3, 5, 7, 9]，剩下元素为 [2, 4, 6, 8]\n第二轮从右到左删除 [8, 4]，剩下元素为 [2, 6]\n第三轮从左到右删除 [2]，剩下元素为 [6]\n\n示例 2：\n\n输入：n = 1\n输出：1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 391,
        number: "0391",
        title: "完美矩形",
        difficulty: "hard",
        description: "给你一个数组 rectangles ，其中 rectangles[i] = [xi, yi, ai, bi] 表示一个坐标轴平行的矩形。这个矩形的左下顶点是 (xi, yi) ，右上顶点是 (ai, bi) 。\n\n如果所有矩形一起精确覆盖了某个矩形区域，则返回 true ；否则，返回 false 。",
        example: "示例 1：\n\n输入：rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]\n输出：true\n解释：5个矩形一起可以精确地覆盖一个矩形区域。\n\n示例 2：\n\n输入：rectangles = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]\n输出：false\n解释：两个矩形之间有间隔，无法覆盖成一个矩形。\n\n示例 3：\n\n输入：rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]\n输出：false\n解释：因为中间有相交区域，虽然形成了矩形，但不是精确覆盖。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 392,
        number: "0392",
        title: "判断子序列",
        difficulty: "easy",
        description: "给定字符串 s 和 t ，判断 s 是否为 t 的子序列。\n\n字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，\"ace\"是\"abcde\"的一个子序列，而\"aec\"不是）。\n\n进阶：\n如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？",
        example: "示例 1：\n\n输入：s = \"abc\", t = \"ahbgdc\"\n输出：true\n\n示例 2：\n\n输入：s = \"axc\", t = \"ahbgdc\"\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 393,
        number: "0393",
        title: "UTF-8 编码验证",
        difficulty: "medium",
        description: "UTF-8 中的一个字符可能的长度为 1 到 4 字节，遵循以下的规则：\n\n对于 1 字节的字符，字节的第一位设为 0，后面 7 位为这个符号的 unicode 码。\n对于 n 字节的字符 (n > 1)，第一个字节的前 n 位都设为 1，第 n+1 位设为 0，后面字节的前两位一律设为 10。剩下的没有提及的二进制位，全部为这个符号的 unicode 码。\n\n给定一个表示数据的整数数组，返回它是否为有效的 utf-8 编码。\n\n注意：输入是整数数组。只有每个整数的 最低 8 个有效位 用来存储数据。这意味着每个整数只表示 1 字节的数据。",
        example: "示例 1：\n\ndata = [197, 130, 1]，表示 8 位的序列：11000101 10000010 00000001。\n返回 true 。\n这是有效的 utf-8 编码，为一个2字节字符，跟着一个1字节字符。\n\n示例 2：\n\ndata = [235, 140, 4]，表示 8 位的序列：11101011 10001100 00000100。\n返回 false 。\n前 3 位都是 1 ，第 4 位为 0 表示它是一个3字节字符。\n下一个字节是开头为 10 的延续字节，这是正确的。\n但第二个延续字节不以 10 开头，所以是不符合规则的。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 394,
        number: "0394",
        title: "字符串解码",
        difficulty: "medium",
        description: "给定一个经过编码的字符串，返回它解码后的字符串。\n\n编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。\n\n你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。\n\n此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。",
        example: "示例 1：\n\n输入：s = \"3[a]2[bc]\"\n输出：\"aaabcbc\"\n\n示例 2：\n\n输入：s = \"3[a2[c]]\"\n输出：\"accaccacc\"\n\n示例 3：\n\n输入：s = \"2[abc]3[cd]ef\"\n输出：\"abcabccdcdcdef\"\n\n示例 4：\n\n输入：s = \"abc3[cd]xyz\"\n输出：\"abccdcdcdxyz\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 395,
        number: "0395",
        title: "至少有K个重复字符的最长子串",
        difficulty: "medium",
        description: "给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。",
        example: "示例 1：\n\n输入：s = \"aaabb\", k = 3\n输出：3\n解释：最长子串为 \"aaa\" ，其中 'a' 重复了 3 次。\n\n示例 2：\n\n输入：s = \"ababbc\", k = 2\n输出：5\n解释：最长子串为 \"ababb\" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 396,
        number: "0396",
        title: "旋转函数",
        difficulty: "medium",
        description: "给定一个长度为 n 的整数数组 A 。\n\n假设 Bk 是数组 A 顺时针旋转 k 个位置后的数组，我们定义 A 的\"旋转函数\" F 为：\n\nF(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1]。\n\n计算F(0), F(1), ..., F(n-1)中的最大值。",
        example: "示例:\n\n输入: [4, 3, 2, 6]\n\n输出: 26\n\n解释:\nF(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25\nF(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16\nF(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23\nF(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26\n\n所以 F(0), F(1), F(2), F(3) 中的最大值是 F(3) = 26 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 397,
        number: "0397",
        title: "整数替换",
        difficulty: "medium",
        description: "给定一个正整数 n ，你可以做如下操作：\n\n如果 n 是偶数，则用 n / 2替换 n 。\n如果 n 是奇数，则可以用 n + 1或n - 1替换 n 。\nn 变为 1 所需的最小替换次数是多少？",
        example: "示例 1：\n\n输入：n = 8\n输出：3\n解释：8 -> 4 -> 2 -> 1\n\n示例 2：\n\n输入：n = 7\n输出：4\n解释：7 -> 8 -> 4 -> 2 -> 1\n或 7 -> 6 -> 3 -> 2 -> 1\n\n示例 3：\n\n输入：n = 4\n输出：2",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 398,
        number: "0398",
        title: "随机数索引",
        difficulty: "medium",
        description: "给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。\n\n注意：\n数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。",
        example: "示例:\n\nint[] nums = new int[] {1,2,3,3,3};\nSolution solution = new Solution(nums);\n\n// pick(3) 应该返回索引 2,3 或者 4。每个索引的返回概率应该相等。\nsolution.pick(3);\n\n// pick(1) 应该返回 0。因为只有nums[0]等于1。\nsolution.pick(1);",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 399,
        number: "0399",
        title: "除法求值",
        difficulty: "medium",
        description: "给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。\n\n另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。\n\n返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。\n\n注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。",
        example: "示例 1：\n\n输入：equations = [[\"a\",\"b\"],[\"b\",\"c\"]], values = [2.0,3.0], queries = [[\"a\",\"c\"],[\"b\",\"a\"],[\"a\",\"e\"],[\"a\",\"a\"],[\"x\",\"x\"]]\n输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]\n解释：\n条件：a / b = 2.0, b / c = 3.0\n问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?\n结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]\n\n示例 2：\n\n输入：equations = [[\"a\",\"b\"],[\"b\",\"c\"],[\"bc\",\"cd\"]], values = [1.5,2.5,5.0], queries = [[\"a\",\"c\"],[\"c\",\"b\"],[\"bc\",\"cd\"],[\"cd\",\"bc\"]]\n输出：[3.75000,0.40000,5.00000,0.20000]\n\n示例 3：\n\n输入：equations = [[\"a\",\"b\"]], values = [0.5], queries = [[\"a\",\"b\"],[\"b\",\"a\"],[\"a\",\"c\"],[\"x\",\"y\"]]\n输出：[0.50000,2.00000,-1.00000,-1.00000]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n²)",
                spaceComplexity: "O(n²)"
            }
        ]
    },
    {
        id: 400,
        number: "0400",
        title: "第N个数字",
        difficulty: "medium",
        description: "在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。\n\n注意：n 是正数且在32位整数范围内 ( n < 2^31)。",
        example: "示例 1：\n\n输入：3\n输出：3\n\n示例 2：\n\n输入：11\n输出：0\n解释：第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 401,
        number: "0401",
        title: "二进制手表",
        difficulty: "easy",
        description: "二进制手表顶部有 4 个 LED 代表 小时（0-11），底部有 6 个 LED 代表 分钟（0-59）。每个 LED 代表一个 0 或 1，最低位在右侧。\n\n给你一个整数 turnedOn，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以按 任意顺序 返回答案。\n\n小时不会以零开头：\n- 例如，\"01:00\" 是无效的时间，正确的写法应该是 \"1:00\" 。\n\n分钟必须由两位数组成，可能会以零开头：\n- 例如，\"10:2\" 是无效的时间，正确的写法应该是 \"10:02\" 。",
        example: "示例 1：\n\n输入：turnedOn = 1\n输出：[\"0:01\",\"0:02\",\"0:04\",\"0:08\",\"0:16\",\"0:32\",\"1:00\",\"2:00\",\"4:00\",\"8:00\"]\n\n示例 2：\n\n输入：turnedOn = 9\n输出：[]\n\n提示：\n0 <= turnedOn <= 10",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 402,
        number: "0402",
        title: "移掉K位数字",
        difficulty: "medium",
        description: "给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。",
        example: "示例 1：\n\n输入：num = \"1432219\", k = 3\n输出：\"1219\"\n解释：移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219 。\n\n示例 2：\n\n输入：num = \"10200\", k = 1\n输出：\"200\"\n解释：移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。\n\n示例 3：\n\n输入：num = \"10\", k = 2\n输出：\"0\"\n解释：从原数字移除所有的数字，剩余为空就是 0 。\n\n提示：\n1 <= k <= num.length <= 10^5\nnum 仅由若干位数字（0 - 9）组成\n除了 0 本身之外，num 不含任何前导零",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 403,
        number: "0403",
        title: "青蛙过河",
        difficulty: "hard",
        description: "一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。\n\n给你石子的位置列表 stones（用单元格序号 升序 表示），请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。开始时，青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃 1 个单位（即只能从单元格 1 跳至单元格 2 ）。\n\n如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。另请注意，青蛙只能向前方（终点的方向）跳跃。",
        example: "示例 1：\n\n输入：stones = [0,1,3,5,6,8,12,17]\n输出：true\n解释：青蛙可以成功过河，按照如下方案跳跃：跳 1 个单位到第 2 块石子, 然后跳 2 个单位到第 3 块石子, 接着 跳 2 个单位到第 4 块石子, 然后跳 3 个单位到第 6 块石子, 跳 4 个单位到第 7 块石子, 最后，跳 5 个单位到第 8 块石子（即最后一块石子）。\n\n示例 2：\n\n输入：stones = [0,1,2,3,4,8,9,11]\n输出：false\n解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。\n\n提示：\n2 <= stones.length <= 2000\n0 <= stones[i] <= 2^31 - 1\nstones[0] == 0\nstones 按严格升序排列",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 404,
        number: "0404",
        title: "左叶子之和",
        difficulty: "easy",
        description: "计算给定二叉树的所有左叶子之和。",
        example: "示例：\n\n    3\n   / \\\n  9  20\n    /  \\\n   15   7\n\n在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 405,
        number: "0405",
        title: "数字转换为十六进制数",
        difficulty: "easy",
        description: "给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。\n\n注意:\n\n1. 十六进制中所有字母(a-f)都必须是小写。\n2. 十六进制字符串中不能包含多余的前导零。如果要转化的数为0，那么以单个字符'0'来表示；对于其他情况，十六进制字符串中的第一个字符将不会是0字符。 \n3. 给定的数确保在32位有符号整数范围内。\n4. 不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。",
        example: "示例 1：\n\n输入：26\n输出：\"1a\"\n\n示例 2：\n\n输入：-1\n输出：\"ffffffff\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 406,
        number: "0406",
        title: "根据身高重建队列",
        difficulty: "medium",
        description: "假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。\n\n请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。",
        example: "示例 1：\n\n输入：people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]\n输出：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]\n解释：\n编号为 0 的人身高为 5 ，没有身高更高或者相同的人排在他前面。\n编号为 1 的人身高为 7 ，没有身高更高或者相同的人排在他前面。\n编号为 2 的人身高为 5 ，有 2 个身高更高或者相同的人排在他前面，即编号为 0 和 1 的人。\n编号为 3 的人身高为 6 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。\n编号为 4 的人身高为 4 ，有 4 个身高更高或者相同的人排在他前面，即编号为 0、1、2、3 的人。\n编号为 5 的人身高为 7 ，有 1 个身高更高或者相同的人排在他前面，即编号为 1 的人。\n因此 [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] 是重新构造后的队列。\n\n示例 2：\n\n输入：people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]\n输出：[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]\n\n提示：\n1 <= people.length <= 2000\n0 <= hi <= 10^6\n0 <= ki < people.length\n题目数据确保队列可以被重建",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 407,
        number: "0407",
        title: "接雨水 II",
        difficulty: "hard",
        description: "给你一个 m x n 的矩阵，其中的值均为非负整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。",
        example: "示例 1：\n\n输入：heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]\n输出：4\n解释：下雨后，雨水将会被上图蓝色的方块中。总的接雨水量为 4。\n\n示例 2：\n\n输入：heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]\n输出：10\n\n提示：\nm == heightMap.length\nn == heightMap[i].length\n1 <= m, n <= 200\n0 <= heightMap[i][j] <= 2 * 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n*log(m*n))",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 408,
        number: "0408",
        title: "有效单词缩写",
        difficulty: "medium",
        description: "给一个 非空 字符串 s 和一个单词缩写 abbr ，判断这个缩写是否可以是给定单词的缩写。\n\n字符串 \"word\" 的所有有效缩写为：\n[\"word\", \"1ord\", \"w1rd\", \"wo1d\", \"wor1\", \"2rd\", \"w2d\", \"wo2\", \"1o1d\", \"1or1\", \"w1r1\", \"1o2\", \"2r1\", \"3d\", \"w3\", \"4\"]\n\n注意单词 \"word\" 的所有有效缩写仅包含以上这些。任何其他的字符串都不是 \"word\" 的有效缩写。\n\n注意:\n假设字符串 s 仅包含小写字母且 abbr 只包含小写字母和数字。",
        example: "示例 1：\n\n输入：s = \"internationalization\", abbr = \"i12iz4n\"\n输出：true\n解释：abbr 中的 12 表示有 12 个字符，即 \"nternational\"。\n\n示例 2：\n\n输入：s = \"apple\", abbr = \"a2e\"\n输出：false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 409,
        number: "0409",
        title: "最长回文串",
        difficulty: "easy",
        description: "给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串的长度。\n\n在构造过程中，请注意 区分大小写 。比如 \"Aa\" 不能当做一个回文字符串。",
        example: "示例 1：\n\n输入：s = \"abccccdd\"\n输出：7\n解释：我们可以构造的最长的回文串是\"dccaccd\", 它的长度是 7。\n\n示例 2：\n\n输入：s = \"a\"\n输出：1\n解释：可以构造的最长回文串是\"a\"，它的长度是 1。\n\n提示：\n1 <= s.length <= 2000\ns 只由小写 和/或 大写英文字母组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 410,
        number: "0410",
        title: "分割数组的最大值",
        difficulty: "hard",
        description: "给定一个非负整数数组 nums 和一个整数 k ，你需要将这个数组分成 k 个非空的连续子数组，使得这 k 个子数组各自和的最大值 最小。\n\n返回分割后最小的和的最大值。\n\n子数组 是数组中连续的部份。",
        example: "示例 1：\n\n输入：nums = [7,2,5,10,8], k = 2\n输出：18\n解释：\n一共有四种方法将 nums 分割为 2 个子数组。 \n其中最好的方式是将其分为 [7,2,5] 和 [10,8] 。\n因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。\n\n示例 2：\n\n输入：nums = [1,2,3,4,5], k = 2\n输出：9\n\n示例 3：\n\n输入：nums = [1,4,4], k = 3\n输出：4\n\n提示：\n1 <= nums.length <= 1000\n0 <= nums[i] <= 10^6\n1 <= k <= min(50, nums.length)",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * log(sum))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 411,
        number: "0411",
        title: "最短独占单词缩写",
        difficulty: "medium",
        description: "通过将任意数量的非相邻子字符串替换为它们的长度，可以得到一个单词的缩写。例如，\"substitution\" 可以缩写为 \"s10n\"、\"sub4u4n\" 等。\n\n给你一个目标字符串 target 和一个字符串数组 dictionary 作为字典，为 target 找出并返回一个最短的缩写字符串 s，该字符串与字典中任何其他单词的缩写均不同。\n\n如果有多个有效缩写，可以返回其中任意一个。",
        example: "示例 1：\n\n输入：target = \"apple\", dictionary = [\"blade\"]\n输出：\"a4\"\n解释：\"apple\" 的缩写为 \"5\"、\"a4\"、\"ap3\"、\"app2\"、\"appl1\"、\"apple\"。\n\"5\" 与 \"blade\" 的缩写 \"5\" 冲突。\n\"a4\" 是 \"apple\" 最短的不冲突缩写。\n\n示例 2：\n\n输入：target = \"apple\", dictionary = [\"blade\", \"plain\", \"amber\"]\n输出：\"1p3\"\n解释：\"apple\" 的缩写为 \"5\"、\"a4\"、\"ap3\"、\"app2\"、\"appl1\"、\"apple\"。\n\"5\" 与 \"blade\" 的缩写 \"5\" 冲突。\n\"a4\" 与 \"amber\" 的缩写 \"a4\" 冲突。\n\"ap3\" 与 \"plain\" 的缩写 \"p4\" 不冲突。\n\"app2\" 与 \"plain\" 的缩写 \"p4\" 不冲突。\n\"appl1\" 与 \"plain\" 的缩写 \"p4\" 不冲突。\n\"apple\" 与 \"plain\" 的缩写 \"p4\" 不冲突。\n在所有不冲突的缩写中，\"ap3\" 和 \"1p3\" 是最短的。\n由于答案不唯一，返回其中任意一个即可。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * 2^m)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 412,
        number: "0412",
        title: "Fizz Buzz",
        difficulty: "easy",
        description: "给你一个整数 n ，返回一个字符串数组 answer（下标从 1 开始），其中：\n\n- answer[i] == \"FizzBuzz\" 如果 i 同时是 3 和 5 的倍数。\n- answer[i] == \"Fizz\" 如果 i 是 3 的倍数。\n- answer[i] == \"Buzz\" 如果 i 是 5 的倍数。\n- answer[i] == i （以字符串形式）如果上述条件全不满足。",
        example: "示例 1：\n\n输入：n = 3\n输出：[\"1\",\"2\",\"Fizz\"]\n\n示例 2：\n\n输入：n = 5\n输出：[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]\n\n示例 3：\n\n输入：n = 15\n输出：[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]\n\n提示：\n1 <= n <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 413,
        number: "0413",
        title: "等差数列划分",
        difficulty: "medium",
        description: "如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。\n\n例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。\n\n给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。\n\n子数组 是数组中的一个连续序列。",
        example: "示例 1：\n\n输入：nums = [1,2,3,4]\n输出：3\n解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。\n\n示例 2：\n\n输入：nums = [1]\n输出：0\n\n提示：\n1 <= nums.length <= 5000\n-1000 <= nums[i] <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 414,
        number: "0414",
        title: "第三大的数",
        difficulty: "easy",
        description: "给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。",
        example: "示例 1：\n\n输入：[3, 2, 1]\n输出：1\n解释：第三大的数是 1 。\n\n示例 2：\n\n输入：[1, 2]\n输出：2\n解释：第三大的数不存在, 所以返回最大的数 2 。\n\n示例 3：\n\n输入：[2, 2, 3, 1]\n输出：1\n解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。\n此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。\n\n提示：\n1 <= nums.length <= 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 415,
        number: "0415",
        title: "字符串相加",
        difficulty: "easy",
        description: "给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。\n\n你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。",
        example: "示例 1：\n\n输入：num1 = \"11\", num2 = \"123\"\n输出：\"134\"\n\n示例 2：\n\n输入：num1 = \"456\", num2 = \"77\"\n输出：\"533\"\n\n示例 3：\n\n输入：num1 = \"0\", num2 = \"0\"\n输出：\"0\"\n\n提示：\n1 <= num1.length, num2.length <= 10^4\nnum1 和num2 都只包含数字 0-9\nnum1 和num2 都不包含任何前导零",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(max(n, m))",
                spaceComplexity: "O(max(n, m))"
            }
        ]
    },
    {
        id: 416,
        number: "0416",
        title: "分割等和子集",
        difficulty: "medium",
        description: "给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。",
        example: "示例 1：\n\n输入：nums = [1,5,11,5]\n输出：true\n解释：数组可以分割成 [1, 5, 5] 和 [11] 。\n\n示例 2：\n\n输入：nums = [1,2,3,5]\n输出：false\n解释：数组不能分割成两个元素和相等的子集。\n\n提示：\n1 <= nums.length <= 200\n1 <= nums[i] <= 100",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * sum)",
                spaceComplexity: "O(sum)"
            }
        ]
    },
    {
        id: 417,
        number: "0417",
        title: "太平洋大西洋水流问题",
        difficulty: "medium",
        description: "有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 \"太平洋\" 处于大陆的左边界和上边界，而 \"大西洋\" 处于大陆的右边界和下边界。\n\n这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。\n\n岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。\n\n返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。",
        example: "示例 1：\n\n输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]\n输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]\n\n示例 2：\n\n输入: heights = [[2,1],[1,2]]\n输出: [[0,0],[0,1],[1,0],[1,1]]\n\n提示：\nm == heights.length\nn == heights[r].length\n1 <= m, n <= 200\n0 <= heights[r][c] <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m * n)",
                spaceComplexity: "O(m * n)"
            }
        ]
    },
    {
        id: 418,
        number: "0418",
        title: "屏幕可显示句子的数量",
        difficulty: "medium",
        description: "给你一个 rows x cols 的屏幕和一个用 非空 的单词列表组成的句子，请你计算出给定句子可以在屏幕上完整显示的次数。\n\n注意：\n\n1. 一个单词不能拆分成两行。\n2. 单词在句子中的顺序必须保持不变。\n3. 在一行中的两个连续单词必须用一个空格符分隔。\n4. 句子中的单词总量不会超过 100。\n5. 每个单词的长度大于 0 且不会超过 10。\n6. 1 ≤ rows, cols ≤ 20,000。",
        example: "示例 1：\n\n输入：rows = 2, cols = 8, sentence = [\"hello\", \"world\"]\n输出：1\n解释：\nhello---\nworld---\n\n字符 '-' 表示屏幕上的空白位置。\n\n示例 2：\n\n输入：rows = 3, cols = 6, sentence = [\"a\", \"bcd\", \"e\"]\n输出：2\n解释：\na-bcd- \ne-a---\nbcd-e-\n\n字符 '-' 表示屏幕上的空白位置。\n\n示例 3：\n\n输入：rows = 4, cols = 5, sentence = [\"I\", \"had\", \"apple\", \"pie\"]\n输出：1\n解释：\nI-had\napple\npie-I\nhad--\n\n字符 '-' 表示屏幕上的空白位置。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 419,
        number: "0419",
        title: "甲板上的战舰",
        difficulty: "medium",
        description: "给你一个大小为 m x n 的矩阵 board 表示甲板，其中，每个单元格可以是一艘战舰 'X' 或者是一个空位 '.' ，返回在甲板 board 上放置的 战舰 的数量。\n\n战舰 只能水平或者垂直放置在 board 上。换句话说，战舰只能按 1 x k（1 行，k 列）或 k x 1（k 行，1 列）的形状建造，其中 k 可以是任意大小。两艘战舰之间至少有一个水平或垂直的空位分隔 （即没有相邻的战舰）。",
        example: "示例 1：\n\n输入：board = [[\"X\",\".\",\".\",\"X\"],[\".\",\".\",\".\",\".\"],[\".\",\".\",\".\",\"X\"]]\n输出：2\n\n示例 2：\n\n输入：board = [[\".\"]]\n输出：0\n\n提示：\nm == board.length\nn == board[i].length\n1 <= m, n <= 200\nboard[i][j] 是 '.' 或 'X'",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m * n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 420,
        number: "0420",
        title: "强密码检验器",
        difficulty: "hard",
        description: "如果一个密码满足下述所有条件，则认为这个密码是强密码：\n- 由至少 6 个，至多 20 个字符组成。\n- 至少包含 一个小写 字母，一个大写 字母，和 一个数字 。\n- 同一字符 不能 连续出现三次 (比如 \"...aaa...\" 是不允许的, 但是 \"...aa...a...\" 如果满足其他条件也可以算是强密码)。\n\n给你一个字符串 password ，返回 将 password 修改到满足强密码条件需要的最少修改步数。如果 password 已经是强密码，则返回 0 。\n\n在一步修改操作中，你可以：\n- 插入一个字符到 password ，\n- 从 password 中删除一个字符，或\n- 用另一个字符来替换 password 中的某个字符。",
        example: "示例 1：\n\n输入：password = \"a\"\n输出：5\n\n示例 2：\n\n输入：password = \"aA1\"\n输出：3\n\n示例 3：\n\n输入：password = \"1337C0d3\"\n输出：0\n\n提示：\n1 <= password.length <= 50\npassword 由字母、数字、点 '.' 或者感叹号 '!'组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 421,
        number: "0421",
        title: "数组中两个数的最大异或值",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。\n\n进阶：你可以在 O(n) 的时间解决这个问题吗？",
        example: "示例 1：\n\n输入：nums = [3,10,5,25,2,8]\n输出：28\n解释：最大运算结果是 5 XOR 25 = 28.\n\n示例 2：\n\n输入：nums = [0]\n输出：0\n\n示例 3：\n\n输入：nums = [2,4]\n输出：6\n\n示例 4：\n\n输入：nums = [8,10,2]\n输出：10\n\n示例 5：\n\n输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]\n输出：127\n\n提示：\n1 <= nums.length <= 2 * 10^4\n0 <= nums[i] <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log C)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 422,
        number: "0422",
        title: "有效的单词方块",
        difficulty: "easy",
        description: "给你一个单词序列，判断其是否形成了一个有效的单词方块。\n\n有效的单词方块是指此由单词序列组成的文字方块的 第 k 行 和 第 k 列 (0 ≤ k < max(行数, 列数)) 所显示的字符串完全相同。\n\n注意：\n\n给定的单词数大于等于 1 且不超过 500。\n单词长度大于等于 1 且不超过 500。\n每个单词只包含小写英文字母 a-z。",
        example: "示例 1：\n\n输入：\n[\n  \"abcd\",\n  \"bnrt\",\n  \"crmy\",\n  \"dtye\"\n]\n\n输出：true\n解释：\n第 1 行和第 1 列都是 \"abcd\"。\n第 2 行和第 2 列都是 \"bnrt\"。\n第 3 行和第 3 列都是 \"crmy\"。\n第 4 行和第 4 列都是 \"dtye\"。\n\n因此，这是一个有效的单词方块。\n\n示例 2：\n\n输入：\n[\n  \"abcd\",\n  \"bnrt\",\n  \"crm\",\n  \"dt\"\n]\n\n输出：true\n解释：\n第 1 行和第 1 列都是 \"abcd\"。\n第 2 行和第 2 列都是 \"bnrt\"。\n第 3 行和第 3 列都是 \"crm\"。\n第 4 行和第 4 列都是 \"dt\"。\n\n因此，这是一个有效的单词方块。\n\n示例 3：\n\n输入：\n[\n  \"ball\",\n  \"area\",\n  \"read\",\n  \"lady\"\n]\n\n输出：false\n解释：\n第 3 行是 \"read\" ，第 3 列是 \"lead\"。\n\n因此，这 不是 一个有效的单词方块。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 423,
        number: "0423",
        title: "从英文中重建数字",
        difficulty: "medium",
        description: "给你一个字符串 s ，其中包含字母顺序打乱的用英文单词表示的若干数字（0-9）。按 升序 返回原始的数字。",
        example: "示例 1：\n\n输入：s = \"owoztneoer\"\n输出：\"012\"\n\n示例 2：\n\n输入：s = \"fviefuro\"\n输出：\"45\"\n\n提示：\n1 <= s.length <= 10^5\ns[i] 为 [\"e\",\"g\",\"f\",\"i\",\"h\",\"o\",\"n\",\"s\",\"r\",\"u\",\"t\",\"w\",\"v\",\"x\",\"z\"] 这些字符之一\n题目数据保证 s 是一个符合要求的字符串",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 424,
        number: "0424",
        title: "替换后的最长重复字符",
        difficulty: "medium",
        description: "给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。\n\n在执行上述操作后，返回包含相同字母的最长子字符串的长度。",
        example: "示例 1：\n\n输入：s = \"ABAB\", k = 2\n输出：4\n解释：用两个'A'替换为两个'B',反之亦然。\n\n示例 2：\n\n输入：s = \"AABABBA\", k = 1\n输出：4\n解释：\n将中间的一个'A'替换为'B',字符串变为 \"AABBBBA\"。\n子串 \"BBBB\" 有最长重复字母, 答案为 4。\n\n提示：\n1 <= s.length <= 10^5\ns 仅由大写英文字母组成\n0 <= k <= s.length",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 425,
        number: "0425",
        title: "单词方块",
        difficulty: "hard",
        description: "给定一个单词集合 words （没有重复），找出并返回其中所有的 单词方块 。\n\n单词方块是指由单词序列组成的矩形网格，且该网格由单个单词填充。例如，单词序列 [\"ball\",\"area\",\"lead\",\"lady\"] 可以组成下面的单词方块：\n\nball\narea\nlead\nlady\n\n单词序列 [\"abat\",\"baba\",\"atan\",\"atal\"] 可以组成下面的单词方块：\n\nabat\nbaba\natan\natal\n\n注意：\n\n单词个数大于等于 1 且不超过 1000。\n所有的单词长度都相同。\n单词长度大于等于 1 且不超过 5。\n每个单词只包含小写英文字母 a-z。",
        example: "示例 1：\n\n输入：words = [\"area\",\"lead\",\"wall\",\"lady\",\"ball\"]\n输出：[[\"ball\",\"area\",\"lead\",\"lady\"],[\"wall\",\"area\",\"lead\",\"lady\"]]\n解释：\n输出包含两个单词方块，输出的顺序不重要，只需要保证每个单词方块内的单词顺序正确即可。\n\n示例 2：\n\n输入：words = [\"abat\",\"baba\",\"atan\",\"atal\"]\n输出：[[\"abat\",\"baba\",\"atan\",\"atal\"]]\n\n提示：\n1 <= words.length <= 1000\n1 <= words[i].length <= 5\n所有 words[i] 长度相同\nwords[i] 仅由小写英文字符组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(N * 26^L)",
                spaceComplexity: "O(N * L)"
            }
        ]
    },
    {
        id: 426,
        number: "0426",
        title: "将二叉搜索树转化为排序的双向链表",
        difficulty: "medium",
        description: "将一个 二叉搜索树 就地转化为一个 已排序的双向循环链表 。\n\n对于双向循环列表，你可以将左右孩子指针作为双向循环链表的前驱和后继指针，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。\n\n特别地，我们希望可以 就地 完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中最小元素的指针。",
        example: "示例 1：\n\n输入：root = [4,2,5,1,3]\n输出：[1,2,3,4,5]\n解释：下图显示了转化后的二叉搜索树，实线表示后继关系，虚线表示前驱关系。\n\n示例 2：\n\n输入：root = [2,1,3]\n输出：[1,2,3]\n\n示例 3：\n\n输入：root = []\n输出：[]\n解释：输入是空树，所以输出也是空链表。\n\n示例 4：\n\n输入：root = [1]\n输出：[1]\n\n提示：\n-1000 <= Node.val <= 1000\nNode.left.val < Node.val < Node.right.val\n所有 Node.val 互不相同",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 427,
        number: "0427",
        title: "建立四叉树",
        difficulty: "medium",
        description: "给你一个 n * n 矩阵 grid ，矩阵由若干 0 和 1 组成。请你用四叉树表示该矩阵 grid 。\n\n你需要返回能表示矩阵的 四叉树 的根结点。\n\n注意，当 isLeaf 为 False 时，你可以把 True 或者 False 赋值给节点，两种值都会被判题机制 接受 。\n\n四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：\n\n- val：储存叶子结点所代表的区域的值。1 对应 True，0 对应 False；\n- isLeaf: 当这个节点是一个叶子结点时为 True，如果它有 4 个子节点则为 False 。\n\n我们可以按以下步骤为二维区域构建四叉树：\n\n1. 如果当前网格的值相同（即，全为 0 或者全为 1），将 isLeaf 设为 True ，将 val 设为网格相应的值，并将四个子节点都设为 Null 然后停止。\n2. 如果当前网格的值不同，将 isLeaf 设为 False， 将 val 设为任意值，然后如下图所示，将当前网格划分为四个子网格。\n3. 使用适当的子网格递归每个子节点。",
        example: "示例 1：\n\n输入：grid = [[0,1],[1,0]]\n输出：[[0,1],[1,0],[1,1],[1,1],[1,0]]\n解释：此示例的解释如下：\n请注意，在下面四叉树的图示中，0 表示 false，1 表示 True 。\n\n示例 2：\n\n输入：grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]\n输出：[[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]\n解释：网格中的所有值都不相同。我们将网格划分为四个子网格。\n\n提示：\nn == grid.length == grid[i].length\nn == 2^x 其中 0 <= x <= 6",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 428,
        number: "0428",
        title: "序列化和反序列化 N 叉树",
        difficulty: "hard",
        description: "序列化是指将一个数据结构转化为位序列的过程，因此可以将其存储在文件中或内存缓冲区中，以便稍后在相同或不同的计算机环境中恢复结构。\n\n设计一个序列化和反序列化 N 叉树的算法。一个 N 叉树是指每个节点都有不超过 N 个孩子节点的有根树。序列化 / 反序列化算法的算法实现没有限制。你只需要保证 N 叉树可以被序列化为一个字符串并且该字符串可以被反序列化成原树结构即可。",
        example: "示例 1：\n\n输入：root = [1,null,3,2,4,null,5,6]\n输出：[1,null,3,2,4,null,5,6]\n\n示例 2：\n\n输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n输出：[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n\n提示：\n树的高度小于等于 1000\n节点的总数在 [0, 10^4] 之间\n不要使用类成员 / 全局变量 / 静态变量来存储状态。你的序列化和反序列化算法应是无状态的。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 429,
        number: "0429",
        title: "N 叉树的层序遍历",
        difficulty: "medium",
        description: "给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。\n\n树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。",
        example: "示例 1：\n\n输入：root = [1,null,3,2,4,null,5,6]\n输出：[[1],[3,2,4],[5,6]]\n\n示例 2：\n\n输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]\n\n提示：\n树的高度不会超过 1000\n树的节点总数在 [0, 10^4] 之间",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 430,
        number: "0430",
        title: "扁平化多级双向链表",
        difficulty: "medium",
        description: "多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。\n\n给你位于列表第一级的头节点，请你扁平化列表，使所有结点出现在单级双链表中。",
        example: "示例 1：\n\n输入：head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]\n输出：[1,2,3,7,8,11,12,9,10,4,5,6]\n解释：\n\n输入的多级列表如下图所示：\n\n扁平化后的链表如下图：\n\n示例 2：\n\n输入：head = [1,2,null,3]\n输出：[1,3,2]\n解释：\n\n输入的多级列表如下图所示：\n\n  1---2---NULL\n  |\n  3---NULL\n\n示例 3：\n\n输入：head = []\n输出：[]\n\n提示：\n节点数目不超过 1000\n1 <= Node.val <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 431,
        number: "0431",
        title: "将 N 叉树编码为二叉树",
        difficulty: "hard",
        description: "设计一个算法，可以将 N 叉树编码为二叉树，并能将该二叉树解码为原 N 叉树。一个 N 叉树是指每个节点都有不超过 N 个孩子节点的有根树。类似地，一个二叉树是指每个节点都有不超过 2 个孩子节点的有根树。你的编码 / 解码的算法的实现没有限制，你只需要保证一个 N 叉树可以编码为二叉树且该二叉树可以解码回原始 N 叉树即可。",
        example: "例如，你可以将下面的 3-叉 树以该种方式编码：\n\n注意，上面的方法仅仅是一个例子，可能可行也可能不可行。你没有必要遵循这种形式转化，你可以自己创造和实现不同的方法。\n\n注意：\n\nN 的范围在 [1, 1000]\n不要使用类成员 / 全局变量 / 静态变量来存储状态。你的编码和解码算法应是无状态的。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 432,
        number: "0432",
        title: "全 O(1) 的数据结构",
        difficulty: "hard",
        description: "实现一个数据结构支持以下操作：\n\n1. Inc(key) - 插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串。\n2. Dec(key) - 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否则使一个存在的 key 值减一。如果这个 key 不存在，这个函数不做任何事情。key 保证不为空字符串。\n3. GetMaxKey() - 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串\"\"。\n4. GetMinKey() - 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串\"\"。\n\n挑战：以 O(1) 的时间复杂度实现所有操作。",
        example: "示例：\n\nAllOne allOne = new AllOne();\nallOne.inc(\"hello\");\nallOne.inc(\"hello\");\nallOne.getMaxKey(); // 返回 \"hello\"\nallOne.getMinKey(); // 返回 \"hello\"\nallOne.inc(\"leet\");\nallOne.getMaxKey(); // 返回 \"hello\"\nallOne.getMinKey(); // 返回 \"leet\"\nallOne.dec(\"hello\");\nallOne.getMaxKey(); // 返回 \"hello\"\nallOne.getMinKey(); // 返回 \"leet\"\nallOne.dec(\"hello\");\nallOne.getMaxKey(); // 返回 \"leet\"\nallOne.getMinKey(); // 返回 \"leet\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 433,
        number: "0433",
        title: "最小基因变化",
        difficulty: "medium",
        description: "一条基因序列由一个带有8个字符的字符串表示，其中每个字符都属于 \"A\", \"C\", \"G\", \"T\"中的任意一个。\n\n假设我们要调查一个基因序列的变化。一次基因变化意味着这个基因序列中的一个字符发生了变化。\n\n例如，基因序列由\"AACCGGTT\" 变化至 \"AACCGGTA\" 即发生了一次基因变化。\n\n与此同时，每一次基因变化的结果，都需要是一个合法的基因串，即该结果属于一个基因库。\n\n现在给定3个参数 — start, end, bank，分别代表起始基因序列，目标基因序列及基因库，请找出能够使起始基因序列变化为目标基因序列所需的最少变化次数。如果无法实现目标变化，请返回 -1。",
        example: "示例 1：\n\nstart: \"AACCGGTT\"\nend:   \"AACCGGTA\"\nbank: [\"AACCGGTA\"]\n\n返回值: 1\n\n示例 2：\n\nstart: \"AACCGGTT\"\nend:   \"AAACGGTA\"\nbank: [\"AACCGGTA\", \"AACCGCTA\", \"AAACGGTA\"]\n\n返回值: 2\n\n示例 3：\n\nstart: \"AAAAACCC\"\nend:   \"AACCCCCC\"\nbank: [\"AAAACCCC\", \"AAACCCCC\", \"AACCCCCC\"]\n\n返回值: 3\n\n提示：\n\n起始基因序列默认是合法的，但是它并不一定会出现在基因库中。\n如果一个起始基因序列需要多次变化，那么它每一次变化之后的基因序列都必须是合法的。\n假定起始基因序列与目标基因序列是不一样的。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 434,
        number: "0434",
        title: "字符串中的单词数",
        difficulty: "easy",
        description: "统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。\n\n请注意，你可以假定字符串里不包括任何不可打印的字符。",
        example: "示例:\n\n输入: \"Hello, my name is John\"\n输出: 5\n解释: 这里的单词是指连续的不是空格的字符，所以 \"Hello,\" 算作 1 个单词。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 435,
        number: "0435",
        title: "无重叠区间",
        difficulty: "medium",
        description: "给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。\n\n注意:\n1. 可以认为区间的终点总是大于它的起点。\n2. 区间 [1,2] 和 [2,3] 的边界相互\"接触\"，但没有相互重叠。",
        example: "示例 1:\n\n输入: [ [1,2], [2,3], [3,4], [1,3] ]\n输出: 1\n解释: 移除 [1,3] 后，剩下的区间没有重叠。\n\n示例 2:\n\n输入: [ [1,2], [1,2], [1,2] ]\n输出: 2\n解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。\n\n示例 3:\n\n输入: [ [1,2], [2,3] ]\n输出: 0\n解释: 你不需要移除任何区间，因为它们已经是无重叠的了。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 436,
        number: "0436",
        title: "寻找右区间",
        difficulty: "medium",
        description: "给你一个区间数组 intervals ，其中 intervals[i] = [starti, endi] ，且每个 starti 都 不同 。\n\n区间 i 的 右侧区间 可以记作区间 j ，并满足 startj >= endi ，且 startj 最小化 。\n\n返回一个由每个区间 i 的 右侧区间 的最小起始位置组成的数组。如果某个区间 i 不存在对应的 右侧区间 ，则下标 i 处的值设为 -1 。",
        example: "示例 1：\n\n输入：intervals = [[1,2]]\n输出：[-1]\n解释：集合中只有一个区间，所以输出-1。\n\n示例 2：\n\n输入：intervals = [[3,4],[2,3],[1,2]]\n输出：[-1, 0, 1]\n解释：对于 [3,4] ，没有满足条件的\"右侧\"区间。\n对于 [2,3] ，区间[3,4]具有最小的\"右\"起点;\n对于 [1,2] ，区间[2,3]具有最小的\"右\"起点。\n\n示例 3：\n\n输入：intervals = [[1,4],[2,3],[3,4]]\n输出：[-1, 2, -1]\n解释：对于区间 [1,4] 和 [3,4] ，没有满足条件的\"右侧\"区间。\n对于 [2,3] ，区间 [3,4] 有最小的\"右\"起点。\n\n提示：\n\n1 <= intervals.length <= 2 * 10^4\nintervals[i].length == 2\n-10^6 <= starti <= endi <= 10^6\n每个间隔的起点都 不相同",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 437,
        number: "0437",
        title: "路径总和 III",
        difficulty: "medium",
        description: "给定一个二叉树，它的每个结点都存放着一个整数值。\n\n找出路径和等于给定数值的路径总数。\n\n路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。\n\n二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。",
        example: "示例：\n\nroot = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8\n\n      10\n     /  \\\n    5   -3\n   / \\    \\\n  3   2   11\n / \\   \\\n3  -2   1\n\n返回 3。和等于 8 的路径有:\n\n1.  5 -> 3\n2.  5 -> 2 -> 1\n3. -3 -> 11",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 438,
        number: "0438",
        title: "找到字符串中所有字母异位词",
        difficulty: "medium",
        description: "给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。\n\n字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。\n\n说明：\n\n字母异位词指字母相同，但排列不同的字符串。\n不考虑答案输出的顺序。",
        example: "示例 1:\n\n输入:\ns: \"cbaebabacd\" p: \"abc\"\n\n输出:\n[0, 6]\n\n解释:\n起始索引等于 0 的子串是 \"cba\", 它是 \"abc\" 的字母异位词。\n起始索引等于 6 的子串是 \"bac\", 它是 \"abc\" 的字母异位词。\n\n示例 2:\n\n输入:\ns: \"abab\" p: \"ab\"\n\n输出:\n[0, 1, 2]\n\n解释:\n起始索引等于 0 的子串是 \"ab\", 它是 \"ab\" 的字母异位词。\n起始索引等于 1 的子串是 \"ba\", 它是 \"ab\" 的字母异位词。\n起始索引等于 2 的子串是 \"ab\", 它是 \"ab\" 的字母异位词。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 439,
        number: "0439",
        title: "三元表达式解析器",
        difficulty: "medium",
        description: "给定一个以字符串表示的任意嵌套的三元表达式，计算表达式的值。你可以假定给定的表达式始终都是有效的并且只包含数字 0-9, ?, :, T 和 F (T 和 F 分别表示真和假）。\n\n表达式由数字 0-9, 符号 T 和 F, 以及 ? 和 : 组成。\n\n给定的字符串保证是一个有效的三元表达式，并且不包含任何多余的空格。",
        example: "示例 1：\n\n输入: \"T?2:3\"\n\n输出: \"2\"\n\n解释: 如果条件为真，结果为 2；否则，结果为 3。\n\n示例 2：\n\n输入: \"F?1:T?4:5\"\n\n输出: \"4\"\n\n解释: 条件表达式自右向左结合。使用括号的话，相当于：\n\n\"(F ? 1 : (T ? 4 : 5))\"\n-> \"(F ? 1 : 4)\"\n-> \"4\"\n\n示例 3：\n\n输入: \"T?T?F:5:3\"\n\n输出: \"F\"\n\n解释: 条件表达式自右向左结合。使用括号的话，相当于：\n\n\"(T ? (T ? F : 5) : 3)\"\n-> \"(T ? F : 3)\"\n-> \"F\"\n\n所有的表达式都是有效的，并且不存在多余的空格。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 440,
        number: "0440",
        title: "字典序的第K小数字",
        difficulty: "hard",
        description: "给定整数 n 和 k，找到 1 到 n 中字典序第 k 小的数字。\n\n注意：1 ≤ k ≤ n ≤ 10^9。",
        example: "示例 :\n\n输入:\nn: 13   k: 2\n输出:\n10\n\n解释:\n字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 441,
        number: "0441",
        title: "排列硬币",
        difficulty: "easy",
        description: "你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。\n\n给定一个数字 n，找出可形成完整阶梯行的总行数。\n\nn 是一个非负整数，并且在32位有符号整型的范围内。",
        example: "示例 1:\n\nn = 5\n\n硬币可排列成以下几行:\n¤\n¤ ¤\n¤ ¤\n\n因为第三行不完整，所以返回2.\n\n示例 2:\n\nn = 8\n\n硬币可排列成以下几行:\n¤\n¤ ¤\n¤ ¤ ¤\n¤ ¤\n\n因为第四行不完整，所以返回3.",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 442,
        number: "0442",
        title: "数组中重复的数据",
        difficulty: "medium",
        description: "给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。\n\n你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。",
        example: "示例 1：\n\n输入：nums = [4,3,2,7,8,2,3,1]\n输出：[2,3]\n\n示例 2：\n\n输入：nums = [1,1,2]\n输出：[1]\n\n示例 3：\n\n输入：nums = [1]\n输出：[]\n\n提示：\n\nn == nums.length\n1 <= n <= 10^5\n1 <= nums[i] <= n\n每个元素在数组中出现一次或两次",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 443,
        number: "0443",
        title: "压缩字符串",
        difficulty: "medium",
        description: "给你一个字符数组 chars ，请使用下述算法压缩：\n\n从一个空字符串 s 开始。对于 chars 中的每组 连续重复字符 ：\n\n如果这一组长度为 1 ，则将字符追加到 s 中。\n否则，需要向 s 追加字符，后跟这一组的长度。\n\n压缩后得到的字符串 s 不应该直接返回 ，需要转储到字符数组 chars 中。需要注意的是，如果组长度为 10 或 10 以上，则在 chars 数组中会被拆分为多个字符。\n\n请在 修改完输入数组后 ，返回该数组的新长度。\n\n你必须设计并实现一个只使用常量额外空间的算法来解决此问题。",
        example: "示例 1：\n\n输入：chars = [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]\n输出：返回 6 ，输入数组的前 6 个字符应该是：[\"a\",\"2\",\"b\",\"2\",\"c\",\"3\"]\n解释：\"aa\" 被 \"a2\" 替代。\"bb\" 被 \"b2\" 替代。\"ccc\" 被 \"c3\" 替代。\n\n示例 2：\n\n输入：chars = [\"a\"]\n输出：返回 1 ，输入数组的前 1 个字符应该是：[\"a\"]\n解释：没有任何字符串被替代。\n\n示例 3：\n\n输入：chars = [\"a\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\"]\n输出：返回 4 ，输入数组的前 4 个字符应该是：[\"a\",\"b\",\"1\",\"2\"]。\n解释：由于字符 \"a\" 不重复，所以不会被压缩。\"bbbbbbbbbbbb\" 被 \"b12\" 替代。\n\n提示：\n\n1 <= chars.length <= 2000\nchars[i] 可以是小写英文字母、大写英文字母、数字或符号",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 444,
        number: "0444",
        title: "序列重建",
        difficulty: "medium",
        description: "验证原始的序列 org 是否可以从序列集 seqs 中唯一地重建。序列 org 是 1 到 n 整数的排列，其中 1 ≤ n ≤ 10^4。重建是指在序列集 seqs 中构建最短的公共超序列。（即使得所有 seqs 中的序列都是该最短序列的子序列）。确定是否只可以从 seqs 重建唯一的序列，且该序列就是 org 。",
        example: "示例 1：\n\n输入：\norg: [1,2,3], seqs: [[1,2],[1,3]]\n输出：false\n解释：[1,2,3] 不是可以被重建的唯一的序列，因为 [1,3,2] 也是一个有效的序列。\n\n示例 2：\n\n输入：\norg: [1,2,3], seqs: [[1,2]]\n输出：false\n解释：可以重建的序列只有 [1,2]。\n\n示例 3：\n\n输入：\norg: [1,2,3], seqs: [[1,2],[1,3],[2,3]]\n输出：true\n解释：序列 [1,2], [1,3] 和 [2,3] 可以被唯一地重建为原始的序列 [1,2,3]。\n\n示例 4：\n\n输入：\norg: [4,1,5,2,6,3], seqs: [[5,2,6,3],[4,1,5,2]]\n输出：true",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n+m)",
                spaceComplexity: "O(n+m)"
            }
        ]
    },
    {
        id: 445,
        number: "0445",
        title: "两数相加 II",
        difficulty: "medium",
        description: "给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。\n\n你可以假设除了数字 0 之外，这两个数字都不会以零开头。",
        example: "示例1：\n\n输入：l1 = [7,2,4,3], l2 = [5,6,4]\n输出：[7,8,0,7]\n解释：7243 + 564 = 7807\n\n示例2：\n\n输入：l1 = [2,4,3], l2 = [5,6,4]\n输出：[8,0,7]\n解释：243 + 564 = 807\n\n示例3：\n\n输入：l1 = [0], l2 = [0]\n输出：[0]\n\n提示：\n\n链表的长度范围为 [1, 100]\n0 <= node.val <= 9\n输入数据保证链表代表的数字无前导 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n+m)",
                spaceComplexity: "O(n+m)"
            }
        ]
    },
    {
        id: 446,
        number: "0446",
        title: "等差数列划分 II - 子序列",
        difficulty: "hard",
        description: "如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。\n\n例如，以下数列为等差数列:\n1, 3, 5, 7, 9\n7, 7, 7, 7\n3, -1, -5, -9\n\n以下数列不是等差数列。\n1, 1, 2, 5, 7\n\n数组 A 包含 N 个数，且索引从 0 开始。该数组子序列将划分为整数序列 (P0, P1, ..., Pk)，满足 0 ≤ P0 < P1 < ... < Pk < N。\n\n如果序列 A[P0]，A[P1]，...，A[Pk-1]，A[Pk] 是等差的，那么数组 A 的子序列 (P0，P1，…，PK) 称为等差序列。值得注意的是，这意味着 k ≥ 2。\n\n函数要返回数组 A 中所有等差子序列的个数。",
        example: "示例：\n\n输入：[2, 4, 6, 8, 10]\n输出：7\n解释：\n所有的等差子序列为：\n[2,4,6]\n[4,6,8]\n[6,8,10]\n[2,4,6,8]\n[4,6,8,10]\n[2,4,6,8,10]\n[2,6,10]\n\n提示：\n\n1 <= A.length <= 1000\n-2^31 <= A[i] <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 447,
        number: "0447",
        title: "回旋镖的数量",
        difficulty: "medium",
        description: "给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离等于 i 和 k 之间的距离（需要考虑元组的顺序）。\n\n返回平面上所有回旋镖的数量。",
        example: "示例 1：\n\n输入：points = [[0,0],[1,0],[2,0]]\n输出：2\n解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]\n\n示例 2：\n\n输入：points = [[1,1],[2,2],[3,3]]\n输出：2\n\n示例 3：\n\n输入：points = [[1,1]]\n输出：0\n\n提示：\n\n1 <= points.length <= 500\npoints[i].length == 2\n-10^4 <= xi, yi <= 10^4\n所有点都 互不相同",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 448,
        number: "0448",
        title: "找到所有数组中消失的数字",
        difficulty: "easy",
        description: "给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。",
        example: "示例 1：\n\n输入：nums = [4,3,2,7,8,2,3,1]\n输出：[5,6]\n\n示例 2：\n\n输入：nums = [1,1]\n输出：[2]\n\n提示：\n\nn == nums.length\n1 <= n <= 10^5\n1 <= nums[i] <= n\n进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 449,
        number: "0449",
        title: "序列化和反序列化二叉搜索树",
        difficulty: "medium",
        description: "序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。\n\n设计一个算法来序列化和反序列化 二叉搜索树 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。\n\n编码的字符串应尽可能紧凑。",
        example: "示例 1：\n\n输入：root = [2,1,3]\n输出：[2,1,3]\n\n示例 2：\n\n输入：root = []\n输出：[]\n\n提示：\n\n树中节点数范围是 [0, 10^4]\n0 <= Node.val <= 10^4\n题目数据 保证 输入的树是一棵二叉搜索树。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 450,
        number: "0450",
        title: "删除二叉搜索树中的节点",
        difficulty: "medium",
        description: "给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。\n\n一般来说，删除节点可分为两个步骤：\n\n首先找到需要删除的节点；\n如果找到了，删除它。",
        example: "示例 1:\n\n输入：root = [5,3,6,2,4,null,7], key = 3\n输出：[5,4,6,2,null,null,7]\n解释：给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。\n一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。\n另一个正确答案是 [5,2,6,null,4,null,7]。\n\n示例 2:\n\n输入: root = [5,3,6,2,4,null,7], key = 0\n输出: [5,3,6,2,4,null,7]\n解释: 二叉树不包含值为 0 的节点\n\n示例 3:\n\n输入: root = [], key = 0\n输出: []\n\n提示:\n\n节点数的范围 [0, 10^4].\n-10^5 <= Node.val <= 10^5\n节点值唯一\nroot 是合法的二叉搜索树\n-10^5 <= key <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(h)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 451,
        number: "0451",
        title: "根据字符出现频率排序",
        difficulty: "medium",
        description: "给定一个字符串，请将字符串里的字符按照出现的频率降序排列。",
        example: "示例 1:\n\n输入:\n\"tree\"\n\n输出:\n\"eert\"\n\n解释:\n'e'出现两次，'r'和't'都只出现一次。\n因此'e'必须出现在'r'和't'之前。此外，\"eetr\"也是一个有效的答案。\n\n示例 2:\n\n输入:\n\"cccaaa\"\n\n输出:\n\"cccaaa\"\n\n解释:\n'c'和'a'都出现三次。此外，\"aaaccc\"也是有效的答案。\n注意\"cacaca\"是不正确的，因为相同的字母必须放在一起。\n\n示例 3:\n\n输入:\n\"Aabb\"\n\n输出:\n\"bbAa\"\n\n解释:\n此外，\"bbaA\"也是一个有效的答案，但\"Aabb\"是不正确的。\n注意'A'和'a'被认为是两种不同的字符。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 452,
        number: "0452",
        title: "用最少数量的箭引爆气球",
        difficulty: "medium",
        description: "在二维空间中有许多球形的气球。对于每个气球，提供的输入是水平方向上，气球直径的开始和结束坐标。由于它是水平的，所以纵坐标并不重要，因此只要知道开始和结束的横坐标就足够了。开始坐标总是小于结束坐标。\n\n一支弓箭可以沿着 x 轴从不同点完全垂直地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被引爆。可以射出的弓箭的数量没有限制。 弓箭一旦被射出之后，可以无限地前进。我们想找到使得所有气球全部被引爆，所需的弓箭的最小数量。\n\n给你一个数组 points ，其中 points [i] = [xstart,xend] ，返回引爆所有气球所必须射出的最小弓箭数。",
        example: "示例 1：\n\n输入：points = [[10,16],[2,8],[1,6],[7,12]]\n输出：2\n解释：对于该样例，x = 6 可以射爆 [2,8],[1,6] 两个气球，以及 x = 11 射爆另外两个气球\n\n示例 2：\n\n输入：points = [[1,2],[3,4],[5,6],[7,8]]\n输出：4\n\n示例 3：\n\n输入：points = [[1,2],[2,3],[3,4],[4,5]]\n输出：2\n\n示例 4：\n\n输入：points = [[1,2]]\n输出：1\n\n示例 5：\n\n输入：points = [[2,3],[2,3]]\n输出：1\n\n提示：\n\n1 <= points.length <= 10^4\npoints[i].length == 2\n-2^31 <= xstart < xend <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 453,
        number: "0453",
        title: "最小操作次数使数组元素相等",
        difficulty: "easy",
        description: "给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。",
        example: "示例 1：\n\n输入：nums = [1,2,3]\n输出：3\n解释：\n只需要3次操作（注意每次操作会增加两个元素的值）：\n[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]\n\n示例 2：\n\n输入：nums = [1,1,1]\n输出：0\n\n提示：\n\nn == nums.length\n1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9\n答案保证符合 32-bit 整数",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 454,
        number: "0454",
        title: "四数相加 II",
        difficulty: "medium",
        description: "给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：\n\n0 <= i, j, k, l < n\nnums1[i] + nums2[j] + nums3[k] + nums4[l] == 0",
        example: "示例 1：\n\n输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]\n输出：2\n解释：\n两个元组如下：\n1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0\n2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0\n\n示例 2：\n\n输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]\n输出：1\n\n提示：\n\nn == nums1.length\nn == nums2.length\nn == nums3.length\nn == nums4.length\n1 <= n <= 200\n-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 455,
        number: "0455",
        title: "分发饼干",
        difficulty: "easy",
        description: "假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。\n\n对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。",
        example: "示例 1:\n\n输入: g = [1,2,3], s = [1,1]\n输出: 1\n解释: \n你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。\n虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。\n所以你应该输出1。\n\n示例 2:\n\n输入: g = [1,2], s = [1,2,3]\n输出: 2\n解释: \n你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。\n你拥有的饼干数量和尺寸都足以让所有孩子满足。\n所以你应该输出2。\n\n提示：\n\n1 <= g.length <= 3 * 10^4\n0 <= s.length <= 3 * 10^4\n1 <= g[i], s[j] <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 456,
        number: "0456",
        title: "132 模式",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。\n\n如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。",
        example: "示例 1：\n\n输入：nums = [1,2,3,4]\n输出：false\n解释：序列中不存在 132 模式的子序列。\n\n示例 2：\n\n输入：nums = [3,1,4,2]\n输出：true\n解释：序列中有 1 个 132 模式的子序列： [1, 4, 2] 。\n\n示例 3：\n\n输入：nums = [-1,3,2,0]\n输出：true\n解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0] 。\n\n提示：\n\nn == nums.length\n1 <= n <= 2 * 10^5\n-10^9 <= nums[i] <= 10^9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 457,
        number: "0457",
        title: "环形数组循环",
        difficulty: "medium",
        description: "存在一个不含 0 的 环形 数组 nums ，每个 nums[i] 都表示位于下标 i 的角色应该向前或向后移动的下标个数：\n\n如果 nums[i] 是正数，向前（下标递增方向）移动 |nums[i]| 步\n如果 nums[i] 是负数，向后（下标递减方向）移动 |nums[i]| 步\n\n因为数组是 环形 的，所以可以假设从最后一个元素向前移动一步会到达第一个元素，而第一个元素向后移动一步会到达最后一个元素。\n\n数组中的 循环 由长度为 k 的下标序列 seq 标识：\n\n遵循上述移动规则将导致一组重复下标序列 seq[0] -> seq[1] -> ... -> seq[k - 1] -> seq[0] -> ...\n所有 nums[seq[j]] 应当不是 全正 就是 全负\n如果 nums[seq[j]] > 0 ，则 seq[j + 1] = (seq[j] + nums[seq[j]]) % n\n如果 nums[seq[j]] < 0 ，则 seq[j + 1] = (seq[j] + nums[seq[j]] + n) % n\n\n注意，环形数组 nums 可能存在多个循环。如果存在循环，请返回 true ；否则，返回 false 。",
        example: "示例 1：\n\n输入：nums = [2,-1,1,2,2]\n输出：true\n解释：存在循环，按下标 0 -> 2 -> 3 -> 0 。循环长度为 3 。\n\n示例 2：\n\n输入：nums = [-1,2]\n输出：false\n解释：按下标 1 -> 1 -> 1 ... 的运动无法构成循环，因为循环的长度为 1 。根据定义，循环的长度必须大于 1 。\n\n示例 3:\n\n输入：nums = [-2,1,-1,-2,-2]\n输出：false\n解释：按下标 1 -> 2 -> 1 -> ... 的运动无法构成循环，因为 nums[1] 是正数，而 nums[2] 是负数。\n所有 nums[seq[j]] 应当不是全正就是全负。\n\n提示：\n\n1 <= nums.length <= 5000\n-1000 <= nums[i] <= 1000\nnums[i] != 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 458,
        number: "0458",
        title: "可怜的小猪",
        difficulty: "hard",
        description: "有 buckets 桶液体，其中 正好 有一桶含有毒药，其余装的都是水。它们从外观看起来都一样。为了弄清楚哪只水桶含有毒药，你可以喂一些猪喝，通过观察猪是否会死进行判断。不幸的是，你只有 minutesToTest 分钟时间来确定哪桶液体是有毒的。\n\n喂猪的规则如下：\n\n选择若干活猪进行喂养\n可以允许小猪同时饮用任意数量的桶中的水，并且该过程不需要时间。\n小猪喝完水后，必须有 minutesToDie 分钟的冷却时间。在这段时间里，你只能观察，而不允许继续喂猪。\n过了 minutesToDie 分钟后，所有喝到毒药的猪都会死去，其他所有猪都会活下来。\n重复这一过程，直到时间用完。\n\n给你桶的数目 buckets ，minutesToDie 和 minutesToTest ，返回在规定时间内判断哪个桶有毒所需的 最小 猪数。",
        example: "示例 1：\n\n输入：buckets = 1000, minutesToDie = 15, minutesToTest = 60\n输出：5\n\n示例 2：\n\n输入：buckets = 4, minutesToDie = 15, minutesToTest = 15\n输出：2\n\n示例 3：\n\n输入：buckets = 4, minutesToDie = 15, minutesToTest = 30\n输出：2\n\n提示：\n\n1 <= buckets <= 1000\n1 <= minutesToDie <= minutesToTest <= 100",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 459,
        number: "0459",
        title: "重复的子字符串",
        difficulty: "easy",
        description: "给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。",
        example: "示例 1:\n\n输入: s = \"abab\"\n输出: true\n解释: 可由子串 \"ab\" 重复两次构成。\n\n示例 2:\n\n输入: s = \"aba\"\n输出: false\n\n示例 3:\n\n输入: s = \"abcabcabcabc\"\n输出: true\n解释: 可由子串 \"abc\" 重复四次构成。 (或子串 \"abcabc\" 重复两次构成。)\n\n提示：\n\n1 <= s.length <= 10^4\ns 由小写英文字母组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 460,
        number: "0460",
        title: "LFU 缓存",
        difficulty: "hard",
        description: "请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。\n\n实现 LFUCache 类：\n\nLFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象\nint get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。\nvoid put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量 capacity 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用 的键。\n\n为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。\n\n当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。\n\n函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。",
        example: "示例：\n\n输入：\n[\"LFUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]\n输出：\n[null, null, null, 1, null, -1, 3, null, -1, 3, 4]\n\n解释：\n// cnt(x) = 键 x 的使用计数\n// cache=[] 将显示最后一次使用的顺序（最左边的元素是最近的）\nLFUCache lfu = new LFUCache(2);\nlfu.put(1, 1);   // cache=[1,_], cnt(1)=1\nlfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1\nlfu.get(1);      // 返回 1\n                 // cache=[1,2], cnt(2)=1, cnt(1)=2\nlfu.put(3, 3);   // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小\n                 // cache=[3,1], cnt(3)=1, cnt(1)=2\nlfu.get(2);      // 返回 -1（未找到）\nlfu.get(3);      // 返回 3\n                 // cache=[3,1], cnt(3)=2, cnt(1)=2\nlfu.put(4, 4);   // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用\n                 // cache=[4,3], cnt(4)=1, cnt(3)=2\nlfu.get(1);      // 返回 -1（未找到）\nlfu.get(3);      // 返回 3\n                 // cache=[3,4], cnt(4)=1, cnt(3)=3\nlfu.get(4);      // 返回 4\n                 // cache=[4,3], cnt(4)=2, cnt(3)=3\n\n提示：\n\n0 <= capacity <= 10^4\n0 <= key <= 10^5\n0 <= value <= 10^9\n最多调用 2 * 10^5 次 get 和 put 方法",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(capacity)"
            }
        ]
    },
    {
        id: 461,
        number: "0461",
        title: "汉明距离",
        difficulty: "easy",
        description: "两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。\n\n给你两个整数 x 和 y，计算并返回它们之间的汉明距离。",
        example: "示例 1：\n\n输入：x = 1, y = 4\n输出：2\n解释：\n1   (0 0 0 1)\n4   (0 1 0 0)\n       ↑   ↑\n上面的箭头指出了对应二进制位不同的位置。\n\n示例 2：\n\n输入：x = 3, y = 1\n输出：1\n\n提示：\n\n0 <= x, y <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 462,
        number: "0462",
        title: "最少移动次数使数组元素相等 II",
        difficulty: "medium",
        description: "给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最少移动数。\n\n在一步操作中，你可以使数组中的一个元素加 1 或者减 1 。",
        example: "示例 1：\n\n输入：nums = [1,2,3]\n输出：2\n解释：\n只需要两步操作（每步操作指南使一个元素加 1 或减 1）：\n[1,2,3]  =>  [2,2,3]  =>  [2,2,2]\n\n示例 2：\n\n输入：nums = [1,10,2,9]\n输出：16\n\n提示：\n\nn == nums.length\n1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 463,
        number: "0463",
        title: "岛屿的周长",
        difficulty: "easy",
        description: "给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。\n\n网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。\n\n岛屿中没有\"湖\"（\"湖\" 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。",
        example: "示例 1：\n\n输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]\n输出：16\n解释：它的周长是 16（如图）。\n\n示例 2：\n\n输入：grid = [[1]]\n输出：4\n\n示例 3：\n\n输入：grid = [[1,0]]\n输出：4\n\n提示：\n\nrow == grid.length\ncol == grid[i].length\n1 <= row, col <= 100\ngrid[i][j] 为 0 或 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(row * col)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 464,
        number: "0464",
        title: "我能赢吗",
        difficulty: "medium",
        description: "在 \"100 game\" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，先使得累计整数和 达到或超过 100 的玩家，即为胜者。\n\n如果我们将游戏规则改为 \"玩家 不能 重复使用整数\" 呢？\n\n例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。\n\n给定两个整数 maxChoosableInteger （整数池中可选择的最大数）和 desiredTotal（累计和），若先出手的玩家是否能稳赢则返回 true ，否则返回 false 。假设两位玩家游戏时都表现 最佳 。",
        example: "示例 1：\n\n输入：maxChoosableInteger = 10, desiredTotal = 11\n输出：false\n解释：\n无论第一个玩家选择哪个整数，他都会失败。\n第一个玩家可以选择从 1 到 10 的整数。\n如果第一个玩家选择 1，那么第二个玩家只能选择从 2 到 10 的整数。\n第二个玩家可以通过选择整数 10（那么累积和为 11 >= desiredTotal），从而取得胜利。\n同样地，第一个玩家选择任意其他整数，第二个玩家都会赢。\n\n示例 2:\n\n输入：maxChoosableInteger = 10, desiredTotal = 0\n输出：true\n\n示例 3:\n\n输入：maxChoosableInteger = 10, desiredTotal = 1\n输出：true\n\n提示:\n\n1 <= maxChoosableInteger <= 20\n0 <= desiredTotal <= 300",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^n)",
                spaceComplexity: "O(2^n)"
            }
        ]
    },
    {
        id: 465,
        number: "0465",
        title: "最优账单平衡",
        difficulty: "hard",
        description: "给你一个表示交易的数组 transactions ，其中 transactions[i] = [fromi, toi, amounti] 表示 ID = fromi 的人给 ID = toi 的人共计 amounti $ 。\n\n请你计算并返回还清所有债务的最小交易笔数。",
        example: "示例 1：\n\n输入：[[0,1,10], [2,0,5]]\n输出：2\n解释：\n人 #0 给人 #1 共计 10 美元。\n人 #2 给人 #0 共计 5 美元。\n需要两次交易。一种方式是人 #1 分别给人 #0 和人 #2 各 5 美元。\n\n示例 2：\n\n输入：[[0,1,10], [1,0,1], [1,2,5], [2,0,5]]\n输出：1\n解释：\n人 #0 给人 #1 共计 10 美元。\n人 #1 给人 #0 共计 1 美元。\n人 #1 给人 #2 共计 5 美元。\n人 #2 给人 #0 共计 5 美元。\n因此，人 #1 需要给人 #0 共计 4 美元，所有的债务即可还清。\n\n提示：\n\n1 <= transactions.length <= 8\nfromi != toi\n0 <= fromi, toi <= 20\n0 <= amounti <= 100",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^n)",
                spaceComplexity: "O(2^n)"
            }
        ]
    },
    {
        id: 466,
        number: "0466",
        title: "统计重复个数",
        difficulty: "hard",
        description: "定义 str = [s, n] 表示 str 由 n 个字符串 s 连接构成。\n\n例如，str == [\"abc\", 3] ==\"abcabcabc\" 。\n\n如果可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。\n\n例如，根据定义，s1 = \"abc\" 可以从 s2 = \"abdbec\" 获得，仅需要删除加粗且用斜体标识的字符。\n\n现在给你两个字符串 s1 和 s2 和两个整数 n1 和 n2 。由此构造得到两个字符串，其中 str1 = [s1, n1]、str2 = [s2, n2] 。\n\n请你找出一个最大整数 m ，以满足 str = [str2, m] 可以从 str1 获得。",
        example: "示例 1：\n\n输入：s1 = \"acb\", n1 = 4, s2 = \"ab\", n2 = 2\n输出：2\n\n示例 2：\n\n输入：s1 = \"acb\", n1 = 1, s2 = \"acb\", n2 = 1\n输出：1\n\n提示：\n\n1 <= s1.length, s2.length <= 100\ns1 和 s2 由小写英文字母组成\n1 <= n1, n2 <= 10^6",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(s1.length * s2.length)",
                spaceComplexity: "O(s1.length * s2.length)"
            }
        ]
    },
    {
        id: 467,
        number: "0467",
        title: "环绕字符串中唯一的子字符串",
        difficulty: "medium",
        description: "把字符串 s 看作是 \"abcdefghijklmnopqrstuvwxyz\" 的无限环绕字符串，所以 s 看起来是这样的：\n\n\"...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....\" 。\n\n现在给定另一个字符串 p 。返回 s 中 唯一 的 p 的 非空子串 的数量 。",
        example: "示例 1:\n\n输入: p = \"a\"\n输出: 1\n解释: 字符串 s 中只有一个\"a\"子字符。\n\n示例 2:\n\n输入: p = \"cac\"\n输出: 2\n解释: 字符串 s 中的字符串\"cac\"只有两个子串\"a\"、\"c\"。\n\n示例 3:\n\n输入: p = \"zab\"\n输出: 6\n解释: 在字符串 s 中有六个子串\"z\"、\"a\"、\"b\"、\"za\"、\"ab\"、\"zab\"。\n\n提示:\n\n1 <= p.length <= 10^5\np 由小写英文字母构成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 468,
        number: "0468",
        title: "验证IP地址",
        difficulty: "medium",
        description: "给定一个字符串 queryIP。如果是有效的 IPv4 地址，返回 \"IPv4\" ；如果是有效的 IPv6 地址，返回 \"IPv6\" ；如果不是上述类型的 IP 地址，返回 \"Neither\" 。\n\n有效的IPv4地址 是 \"x1.x2.x3.x4\" 形式的IP地址。 其中 0 <= xi <= 255 且 xi 不能包含 前导零。例如: \"192.168.1.1\" 、 \"192.168.1.0\" 为有效IPv4地址， \"192.168.01.1\" 为无效IPv4地址; \"192.168.1.00\" 、 \"192.168@1.1\" 为无效IPv4地址。\n\n一个有效的IPv6地址 是一个格式为\"x1:x2:x3:x4:x5:x6:x7:x8\" 的IP地址，其中:\n\n1 <= xi.length <= 4\nxi 是一个 十六进制字符串 ，可以包含数字、小写英文字母( 'a' 到 'f' )和大写英文字母( 'A' 到 'F' )。\n在 xi 中允许前导零。\n\n例如 \"2001:0db8:85a3:0000:0000:8a2e:0370:7334\" 和 \"2001:db8:85a3:0:0:8A2E:0370:7334\" 是有效的 IPv6 地址，而 \"2001:0db8:85a3::8A2E:037j:7334\" 和 \"02001:0db8:85a3:0000:0000:8a2e:0370:7334\" 是无效的 IPv6 地址。",
        example: "示例 1：\n\n输入：queryIP = \"172.16.254.1\"\n输出：\"IPv4\"\n解释：有效的 IPv4 地址，返回 \"IPv4\"\n\n示例 2：\n\n输入：queryIP = \"2001:0db8:85a3:0:0:8A2E:0370:7334\"\n输出：\"IPv6\"\n解释：有效的 IPv6 地址，返回 \"IPv6\"\n\n示例 3：\n\n输入：queryIP = \"256.256.256.256\"\n输出：\"Neither\"\n解释：既不是 IPv4 地址，又不是 IPv6 地址\n\n提示：\n\nqueryIP 仅由英文字母，数字，字符 '.' 和 ':' 组成。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 469,
        number: "0469",
        title: "凸多边形",
        difficulty: "medium",
        description: "给定一个按顺序连接的多边形的顶点，判断该多边形是否为凸多边形。凸多边形的定义是所有的内角都小于180度，或者等价地，所有的内角都是凸角。",
        example: "示例 1：\n\n输入：points = [[0,0],[0,1],[1,1],[1,0]]\n输出：true\n\n示例 2：\n\n输入：points = [[0,0],[0,10],[10,10],[10,0],[5,5]]\n输出：false\n\n提示：\n\npoints.length == n\n3 <= n <= 10^4\npoints[i].length == 2\n-10^4 <= points[i][j] <= 10^4\n所有点都是不同的。\n输入的多边形不会自交。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 470,
        number: "0470",
        title: "用 Rand7() 实现 Rand10()",
        difficulty: "medium",
        description: "给定方法 rand7 可生成 [1,7] 范围内的均匀随机整数，试写一个方法 rand10 生成 [1,10] 范围内的均匀随机整数。\n\n你只能调用 rand7() 且不能调用其他方法。请不要使用系统的 Math.random() 方法。\n\n每个测试用例将有一个内部参数 n，即你实现的函数 rand10() 在测试时将被调用的次数。请注意，这不是传递给 rand10() 的参数。",
        example: "示例 1:\n\n输入: n = 1\n输出: [2]\n\n示例 2:\n\n输入: n = 2\n输出: [2,8]\n\n示例 3:\n\n输入: n = 3\n输出: [3,8,10]\n\n提示:\n\n1 <= n <= 10^5\n\nrand7() 已定义。\n每个测试用例将有一个内部参数 n ，即 rand10 的调用次数。\n\n进阶:\n\nrand7()调用次数的 期望值 是多少 ?\n你能否尽量少调用 rand7() ?",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1) 期望",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 471,
        number: "0471",
        title: "编码最短长度的字符串",
        difficulty: "hard",
        description: "给定一个非空字符串，将其编码为具有最短长度的字符串。\n\n编码规则是：k[encoded_string]，其中在方括号encoded_string中的内容重复k次。\n\n注意：\n\nk为正整数。\n如果编码的过程不能使字符串缩短，则不要对其进行编码。如果有多种编码方式，返回任意一种即可。",
        example: "示例 1：\n\n输入：s = \"aaa\"\n输出：\"aaa\"\n解释：无法将其编码为更短的字符串，因此不进行编码。\n\n示例 2：\n\n输入：s = \"aaaaa\"\n输出：\"5[a]\"\n解释：\"5[a]\" 比 \"aaaaa\" 短 1 个字符。\n\n示例 3：\n\n输入：s = \"aaaaaaaaaa\"\n输出：\"10[a]\"\n解释：\"10[a]\" 比 \"aaaaaaaaaa\" 短 2 个字符。\n\n示例 4：\n\n输入：s = \"aabcaabcd\"\n输出：\"2[aabc]d\"\n解释：\"2[aabc]d\" 比 \"aabcaabcd\" 短 1 个字符。\n\n示例 5：\n\n输入：s = \"abbbabbbcabbbabbbc\"\n输出：\"2[2[abbb]c]\"\n解释：\"2[2[abbb]c]\" 比 \"abbbabbbcabbbabbbc\" 短 3 个字符。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^3)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 472,
        number: "0472",
        title: "连接词",
        difficulty: "hard",
        description: "给你一个 不含重复 单词的字符串数组 words ，请你找出并返回 words 中的所有 连接词 。\n\n连接词 定义为：一个完全由给定数组中的至少两个较短单词组成的字符串。",
        example: "示例 1：\n\n输入：words = [\"cat\",\"cats\",\"catsdogcats\",\"dog\",\"dogcatsdog\",\"hippopotamuses\",\"rat\",\"ratcatdogcat\"]\n输出：[\"catsdogcats\",\"dogcatsdog\",\"ratcatdogcat\"]\n解释：\"catsdogcats\" 由 \"cats\", \"dog\" 和 \"cats\" 组成; \n\"dogcatsdog\" 由 \"dog\", \"cats\" 和 \"dog\" 组成; \n\"ratcatdogcat\" 由 \"rat\", \"cat\", \"dog\" 和 \"cat\" 组成。\n\n示例 2：\n\n输入：words = [\"cat\",\"dog\",\"catdog\"]\n输出：[\"catdog\"]\n\n提示：\n\n1 <= words.length <= 10^4\n0 <= words[i].length <= 1000\nwords[i] 仅由小写字母组成\n0 <= sum(words[i].length) <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * L^2)",
                spaceComplexity: "O(n * L)"
            }
        ]
    },
    {
        id: 473,
        number: "0473",
        title: "火柴拼正方形",
        difficulty: "medium",
        description: "你将得到一个整数数组 matchsticks ，其中 matchsticks[i] 是第 i 个火柴棒的长度。你要用 所有的火柴棍 拼成一个正方形。你 不能折断 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 使用一次 。\n\n如果你能使这个正方形，则返回 true ，否则返回 false 。",
        example: "示例 1：\n\n输入: matchsticks = [1,1,2,2,2]\n输出: true\n解释: 能拼成一个边长为2的正方形，每边两根火柴。\n\n示例 2：\n\n输入: matchsticks = [3,3,3,3,4]\n输出: false\n解释: 不能用所有火柴拼成一个正方形。\n\n提示：\n\n1 <= matchsticks.length <= 15\n1 <= matchsticks[i] <= 10^8",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(4^n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 474,
        number: "0474",
        title: "一和零",
        difficulty: "medium",
        description: "给你一个二进制字符串数组 strs 和两个整数 m 和 n 。\n\n请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。\n\n如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。",
        example: "示例 1：\n\n输入：strs = [\"10\", \"0001\", \"111001\", \"1\", \"0\"], m = 5, n = 3\n输出：4\n解释：最多有 5 个 0 和 3 个 1 的最大子集是 {\"10\",\"0001\",\"1\",\"0\"} ，因此答案是 4 。\n其他满足题意但较小的子集包括 {\"0001\",\"1\"} 和 {\"10\",\"1\",\"0\"} 。{\"111001\"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。\n\n示例 2：\n\n输入：strs = [\"10\", \"0\", \"1\"], m = 1, n = 1\n输出：2\n解释：最大的子集是 {\"0\", \"1\"} ，所以答案是 2 。\n\n提示：\n\n1 <= strs.length <= 600\n1 <= strs[i].length <= 100\nstrs[i] 仅由 '0' 和 '1' 组成\n1 <= m, n <= 100",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(l * m * n)",
                spaceComplexity: "O(m * n)"
            }
        ]
    },
    {
        id: 475,
        number: "0475",
        title: "供暖器",
        difficulty: "medium",
        description: "冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。\n\n在加热器的加热半径范围内的每个房屋都可以获得供暖。\n\n现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。\n\n说明：所有供暖器都遵循你的半径标准，加热的半径也一样。",
        example: "示例 1:\n\n输入: houses = [1,2,3], heaters = [2]\n输出: 1\n解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。\n\n示例 2:\n\n输入: houses = [1,2,3,4], heaters = [1,4]\n输出: 1\n解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。\n\n示例 3：\n\n输入：houses = [1,5], heaters = [2]\n输出：3\n\n提示：\n\n1 <= houses.length, heaters.length <= 3 * 10^4\n1 <= houses[i], heaters[i] <= 10^9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m log m + n log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 476,
        number: "0476",
        title: "数字的补数",
        difficulty: "easy",
        description: "对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。\n\n例如，整数 5 的二进制表示是 \"101\" ，取反后得到 \"010\" ，再转回十进制表示得到补数 2 。\n\n给你一个整数 num ，输出它的补数。",
        example: "示例 1：\n\n输入：num = 5\n输出：2\n解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。\n\n示例 2：\n\n输入：num = 1\n输出：0\n解释：1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。\n\n提示：\n\n1 <= num < 2^31",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 477,
        number: "0477",
        title: "汉明距离总和",
        difficulty: "medium",
        description: "两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。\n\n给你一个整数数组 nums，请你计算并返回 nums 中任意两个数之间 汉明距离的总和 。",
        example: "示例 1：\n\n输入：nums = [4,14,2]\n输出：6\n解释：在二进制表示中，4 表示为 0100 ，14 表示为 1110 ，2表示为 0010 。（这样表示是为了体现后四位之间关系）\n所以答案为：\nHammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6\n\n示例 2：\n\n输入：nums = [4,14,4]\n输出：4\n\n提示：\n\n1 <= nums.length <= 10^4\n0 <= nums[i] <= 10^9\n给定输入的对应答案符合 32-bit 整数范围",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 478,
        number: "0478",
        title: "在圆内随机生成点",
        difficulty: "medium",
        description: "给定圆的半径和圆心的位置，实现函数 randPoint ，在圆中产生均匀随机点。\n\n实现 Solution 类:\n\nSolution(double radius, double x_center, double y_center) 用圆的半径 radius 和圆心的位置 (x_center, y_center) 初始化对象\nrandPoint() 返回圆内的一个随机点。圆周上的一点被认为在圆内。答案作为数组返回 [x, y] 。",
        example: "示例 1：\n\n输入: \n[\"Solution\",\"randPoint\",\"randPoint\",\"randPoint\"]\n[[1.0, 0.0, 0.0], [], [], []]\n输出: [null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]\n解释: Solution solution = new Solution(1.0, 0.0, 0.0);\nsolution.randPoint(); // 返回 [-0.02493, -0.38077]\nsolution.randPoint(); // 返回 [0.82314, 0.38945]\nsolution.randPoint(); // 返回 [0.36572, 0.17248]\n\n提示：\n\n0 < radius <= 10^8\n-10^7 <= x_center, y_center <= 10^7\nrandPoint 最多被调用 3 * 10^4 次",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 479,
        number: "0479",
        title: "最大回文数乘积",
        difficulty: "hard",
        description: "给定一个整数 n ，返回 可表示为两个 n 位整数乘积的 最大回文整数 。因为答案可能非常大，所以返回它对 1337 取余 。",
        example: "示例 1:\n\n输入：n = 2\n输出：987\n解释：99 x 91 = 9009, 9009 % 1337 = 987\n\n示例 2:\n\n输入： n = 1\n输出： 9\n\n提示:\n\n1 <= n <= 8",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(10^n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 480,
        number: "0480",
        title: "滑动窗口中位数",
        difficulty: "hard",
        description: "中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。\n\n例如：\n\n[2,3,4]，中位数是 3\n[2,3]，中位数是 (2 + 3) / 2 = 2.5\n\n给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。",
        example: "示例：\n\n给出 nums = [1,3,-1,-3,5,3,6,7]，以及 k = 3。\n\n窗口位置                      中位数\n---------------               -----\n[1  3  -1] -3  5  3  6  7       1\n 1 [3  -1  -3] 5  3  6  7      -1\n 1  3 [-1  -3  5] 3  6  7      -1\n 1  3  -1 [-3  5  3] 6  7       3\n 1  3  -1  -3 [5  3  6] 7       5\n 1  3  -1  -3  5 [3  6  7]      6\n\n 因此，返回该滑动窗口的中位数数组 [1,-1,-1,3,5,6]。\n\n提示：\n\n你可以假设 k 始终有效，即：k 始终小于等于输入的非空数组的元素个数。\n与真实值误差在 10^-5 以内的答案将被视作正确答案。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log k)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 481,
        number: "0481",
        title: "神奇字符串",
        difficulty: "medium",
        description: "神奇字符串 s 仅由 '1' 和 '2' 组成，并需要遵守下面的规则：\n\n神奇字符串 s 的神奇之处在于，串联字符串中 '1' 和 '2' 的连续出现次数可以生成字符串 s 本身。\n\ns 的前几个元素是 s = \"1221121221221121122……\" 。如果将 s 中连续的若干 1 和 2 进行分组，可以得到 \"1 22 11 2 1 22 1 22 11 2 11 22 ......\"、或者 \"12 211 2 12 21 1 221 2 11 22 ......\" 等等。\n\n组成所得的序列中，1 的数量与 2 的数量相等，都等于 n 。\n\n给你一个整数 n ，返回长度为 2n 的神奇字符串 s 中前 n 个数字中的 1 的数目。",
        example: "示例 1：\n\n输入：n = 6\n输出：3\n解释：神奇字符串 s 的前 6 个元素是 \"12211\"，它包含三个 1，因此返回 3 。\n\n示例 2：\n\n输入：n = 1\n输出：1\n\n提示：\n\n1 <= n <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 482,
        number: "0482",
        title: "密钥格式化",
        difficulty: "easy",
        description: "给定一个许可密钥字符串 s，仅由字母、数字字符和破折号组成。字符串由 n 个破折号分成 n + 1 组。你也会得到一个整数 k 。\n\n我们想要重新格式化字符串 s，使每一组包含 k 个字符，除了第一组，它可以比 k 短，但仍然必须包含至少一个字符。此外，两组之间必须插入破折号，并且应该将所有小写字母转换为大写字母。\n\n返回重新格式化的许可密钥。",
        example: "示例 1：\n\n输入：S = \"5F3Z-2e-9-w\", k = 4\n输出：\"5F3Z-2E9W\"\n解释：字符串 S 被分成了两个部分，每部分 4 个字符；\n注意，两个额外的破折号需要删掉。\n\n示例 2：\n\n输入：S = \"2-5g-3-J\", k = 2\n输出：\"2-5G-3J\"\n解释：字符串 S 被分成了 3 个部分，按照前面的规则描述，第一部分的字符可以少于给定的数量，其余部分皆为 2 个字符。\n\n提示:\n\n1 <= s.length <= 10^5\ns 只包含字母、数字和破折号 '-'.\n1 <= k <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 483,
        number: "0483",
        title: "最小好进制",
        difficulty: "hard",
        description: "以字符串的形式给出 n , 以字符串的形式返回 n 的最小 好进制 。\n\n如果 n 的  k(k>=2) 进制数的所有数位全为1，则称 k(k>=2) 是 n 的一个 好进制 。",
        example: "示例 1：\n\n输入：n = \"13\"\n输出：\"3\"\n解释：13 的 3 进制是 111。\n\n示例 2：\n\n输入：n = \"4681\"\n输出：\"8\"\n解释：4681 的 8 进制是 11111。\n\n示例 3：\n\n输入：n = \"1000000000000000000\"\n输出：\"999999999999999999\"\n解释：1000000000000000000 的 999999999999999999 进制是 11。\n\n提示：\n\nn 的取值范围是 [3, 10^18]\nn 没有前导 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log^2 n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 484,
        number: "0484",
        title: "寻找排列",
        difficulty: "medium",
        description: "由范围 [1,n] 内所有整数组成的 n 个整数的排列 perm 可以表示为长度为 n - 1 的字符串 s ，其中:\n\n如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I' \n如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D' \n\n给定一个字符串 s ，重构字典序上最小的排列 perm 并返回它。",
        example: "示例 1：\n\n输入：s = \"I\"\n输出：[1,2]\n解释：[1,2] 是唯一合法的可以生成秘密签名 \"I\" 的特定串，数字 1 和 2 构成排列，其中 1 < 2。\n\n示例 2：\n\n输入：s = \"DI\"\n输出：[2,1,3]\n解释：[2,1,3] 和 [3,1,2] 可以生成秘密签名 \"DI\"。\n但是由于我们要找字典序最小的排列，因此你需要输出 [2,1,3]。\n\n提示：\n\n1 <= s.length <= 10^5\ns[i] 只会包含字符 'D' 和 'I'。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 485,
        number: "0485",
        title: "最大连续 1 的个数",
        difficulty: "easy",
        description: "给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。",
        example: "示例 1：\n\n输入：nums = [1,1,0,1,1,1]\n输出：3\n解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.\n\n示例 2:\n\n输入：nums = [1,0,1,1,0,1]\n输出：2\n\n提示：\n\n1 <= nums.length <= 10^5\nnums[i] 不是 0 就是 1.",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 486,
        number: "0486",
        title: "预测赢家",
        difficulty: "medium",
        description: "给你一个整数数组 nums 。玩家 1 和玩家 2 基于这个数组设计了一个游戏。\n\n玩家 1 和玩家 2 轮流进行自己的回合，玩家 1 先手。开始时，两个玩家的初始分值都是 0 。每一回合，玩家从数组的任意一端取一个数字（即，nums[0] 或 nums[nums.length - 1]），取到的数字将会从数组中移除（数组长度减 1 ）。玩家选中的数字将会加到他的得分上。当数组中没有剩余数字可取时，游戏结束。\n\n如果玩家 1 能成为赢家，返回 true 。如果两个玩家得分相等，同样认为玩家 1 是游戏的赢家，也返回 true 。你可以假设每个玩家的玩法都会使他的分数最大化。",
        example: "示例 1：\n\n输入：nums = [1,5,2]\n输出：false\n解释：一开始，玩家 1 可以从 1 和 2 中进行选择。\n如果他选择 2（或者 1 ），那么玩家 2 可以从 1（或者 2 ）和 5 中进行选择。如果玩家 2 选择了 5 ，那么玩家 1 则只剩下 1（或者 2 ）可选。\n所以，玩家 1 的最终分数为 1 + 2 = 3，而玩家 2 为 5 。\n因此，玩家 1 永远不会成为赢家，返回 false 。\n\n示例 2：\n\n输入：nums = [1,5,233,7]\n输出：true\n解释：玩家 1 一开始选择 1 。然后玩家 2 必须从 5 和 7 中进行选择。无论玩家 2 选择了哪个，玩家 1 都可以选择 233 。\n最终，玩家 1（234）比玩家 2（12）获得更多的分数，所以返回 true，表示玩家 1 可以成为赢家。\n\n提示：\n\n1 <= nums.length <= 20\n0 <= nums[i] <= 10^7",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 487,
        number: "0487",
        title: "最大连续1的个数 II",
        difficulty: "medium",
        description: "给定一个二进制数组 nums ，如果最多可以翻转一个 0 ，则返回数组中连续 1 的最大个数。",
        example: "示例 1：\n\n输入：nums = [1,0,1,1,0]\n输出：4\n解释：翻转第一个 0 可以得到最长的连续 1。\n当翻转以后，最大连续 1 的个数为 4。\n\n示例 2:\n\n输入：nums = [1,0,1,1,0,1]\n输出：4\n\n提示：\n\n1 <= nums.length <= 10^5\nnums[i] 不是 0 就是 1.\n\n进阶：如果输入的数字是作为 无限流 逐个输入如何处理？换句话说，内存不能存储下所有从流中输入的数字。您可以有效地解决吗？",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 488,
        number: "0488",
        title: "祖玛游戏",
        difficulty: "hard",
        description: "你正在参与祖玛游戏的一个变种。\n\n在这个祖玛游戏变体中，桌面上有 一排 彩球，每个球的颜色可能是：红色 'R'、黄色 'Y'、蓝色 'B'、绿色 'G' 或白色 'W' 。你的手中也有一些彩球。\n\n你的目标是 清空 桌面上所有的球。每一回合：\n\n从你手上的彩球中选出 任意一颗 ，然后将其插入桌面上那一排球中：两球之间或这一排球的任一端。\n接着，如果有出现 三个或者三个以上 且 颜色相同 的球相连的话，就把它们移除掉。\n如果这种移除操作同样导致出现三个或者三个以上且颜色相同的球相连，则可以继续移除这些球，直到不再满足移除条件。\n如果桌面上所有球都被移除，则认为你赢得本场游戏。\n重复这个过程，直到你赢了游戏或者手中没有更多的球。\n\n给你一个字符串 board ，表示桌面上最开始的那排球。另给你一个字符串 hand ，表示手里的彩球。请你按上述操作步骤移除掉桌上所有球，计算并返回所需的 最少 球数。如果不能移除桌上所有的球，返回 -1 。",
        example: "示例 1：\n\n输入：board = \"WRRBBW\", hand = \"RB\"\n输出：-1\n解释：无法移除桌面上的所有球。可以得到的最好局面是：\n- 插入一个 'R' ，使桌面变为 WRRRBBW 。WRRRBBW -> WBBW\n- 插入一个 'B' ，使桌面变为 WBBBW 。WBBBW -> WW\n桌面上还剩着球，没有其他球可以插入。\n\n示例 2：\n\n输入：board = \"WWRRBBWW\", hand = \"WRBRW\"\n输出：2\n解释：要想清空桌面上的球，可以按下述步骤：\n- 插入一个 'R' ，使桌面变为 WWRRRBBWW 。WWRRRBBWW -> WWBBWW\n- 插入一个 'B' ，使桌面变为 WWBBBWW 。WWBBBWW -> WWWW -> empty\n只需从手中出 2 个球就可以清空桌面。\n\n示例 3：\n\n输入：board = \"G\", hand = \"GGGGG\"\n输出：2\n解释：要想清空桌面上的球，可以按下述步骤：\n- 插入一个 'G' ，使桌面变为 GG 。\n- 插入一个 'G' ，使桌面变为 GGG 。GGG -> empty\n只需从手中出 2 个球就可以清空桌面。\n\n示例 4：\n\n输入：board = \"RBYYBBRRB\", hand = \"YRBGB\"\n输出：3\n解释：要想清空桌面上的球，可以按下述步骤：\n- 插入一个 'Y' ，使桌面变为 RBYYYBBRRB 。RBYYYBBRRB -> RBBBRRB -> RRRB -> B\n- 插入一个 'B' ，使桌面变为 BB 。\n- 插入一个 'B' ，使桌面变为 BBB 。BBB -> empty\n只需从手中出 3 个球就可以清空桌面。\n\n提示：\n\n1 <= board.length <= 16\n1 <= hand.length <= 5\nboard 和 hand 由字符 'R'、'Y'、'B'、'G' 和 'W' 组成\n桌面上一开始的球中，不会有三个及三个以上颜色相同且连着的球",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(b^2 * h!)",
                spaceComplexity: "O(b^2 * h!)"
            }
        ]
    },
    {
        id: 489,
        number: "0489",
        title: "扫地机器人",
        difficulty: "hard",
        description: "房间（用格栅表示）中有一个扫地机器人。格栅中的每一个格子有空和障碍物两种可能。\n\n扫地机器人提供4个API，可以向前进，向左转或者向右转。每次转弯90度。\n\n当扫地机器人试图进入障碍物格子时，它的碰撞传感器会探测出障碍物，使它停留在原地。\n\n请利用提供的4个API编写让机器人清理整个房间的算法。\n\ninterface Robot {\n  // 若下一个方格为空，则返回true，并移动至该方格\n  // 若下一个方格为障碍物，则返回false，并停留在原地\n  boolean move();\n\n  // 在调用turnLeft/turnRight后机器人会停留在原位置\n  // 每次转弯90度\n  void turnLeft();\n  void turnRight();\n\n  // 清理所在方格\n  void clean();\n}\n\n注意:\n\n输入只用于初始化房间和机器人的位置。你需要「自己控制」机器人移动，使其完成清理整个房间的任务。\n扫地机器人初始位置一定是空地。\n扫地机器人的移动速度限制为每秒钟一步。\n网格中一格既不会有两个障碍物，也不会有障碍物和机器人。\n网格的长度和宽度不超过100。",
        example: "示例:\n\n输入:\nroom = [\n  [1,1,1,1,1,0,1,1],\n  [1,1,1,1,1,0,1,1],\n  [1,0,1,1,1,1,1,1],\n  [0,0,0,1,0,0,0,0],\n  [1,1,1,1,1,1,1,1]\n],\nrow = 1,\ncol = 3\n\n解析:\n房间格栅用0或1填充。0表示障碍物，1表示可以通过。\n机器人从(1,3)的初始位置出发。在左上角的一行以下，三列以右。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(N-M)",
                spaceComplexity: "O(N-M)"
            }
        ]
    },
    {
        id: 490,
        number: "0490",
        title: "迷宫",
        difficulty: "medium",
        description: "由空地和墙组成的迷宫中有一个球。球可以向上下左右四个方向滚动，但在遇到墙壁前不会停止滚动。当球停下时，可以选择下一个方向。\n\n给定球的起始位置，目的地和迷宫，判断球能否在目的地停下。\n\n迷宫由一个0和1的二维数组表示。 1表示墙壁，0表示空地。你可以假定迷宫的边缘都是墙壁。起始位置和目的地的坐标通过行号和列号给出。",
        example: "示例 1:\n\n输入 1: 迷宫由以下二维数组表示\n\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n1 1 0 1 1\n0 0 0 0 0\n\n输入 2: 起始位置坐标 (rowStart, colStart) = (0, 4)\n输入 3: 目的地坐标 (rowDest, colDest) = (4, 4)\n\n输出: true\n\n解析: 一个可能的路径是 : 左 -> 下 -> 左 -> 下 -> 右 -> 下 -> 右。\n\n示例 2:\n\n输入 1: 迷宫由以下二维数组表示\n\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n1 1 0 1 1\n0 0 0 0 0\n\n输入 2: 起始位置坐标 (rowStart, colStart) = (0, 4)\n输入 3: 目的地坐标 (rowDest, colDest) = (3, 2)\n\n输出: false\n\n解析: 没有能够使球停在目的地的路径。\n\n注意:\n\n迷宫中只有一个球和一个目的地。\n球和目的地都在空地上，且初始时它们不在同一位置。\n给定的迷宫不包括边界 (如图中的红色矩形), 但你可以假设迷宫的边缘都是墙壁。\n迷宫至少包括2块空地，行数和列数均不超过100。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 491,
        number: "0491",
        title: "递增子序列",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。\n\n数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。",
        example: "示例 1：\n\n输入：nums = [4,6,7,7]\n输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]\n\n示例 2：\n\n输入：nums = [4,4,3,2,1]\n输出：[[4,4]]\n\n提示：\n\n1 <= nums.length <= 15\n-100 <= nums[i] <= 100",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^n * n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 492,
        number: "0492",
        title: "构造矩形",
        difficulty: "easy",
        description: "作为一位web开发者， 懂得怎样去规划一个页面的尺寸是很重要的。 现给定一个具体的矩形页面面积，你的任务是设计一个长度为 L 和宽度为 W 且满足以下要求的矩形的页面。要求：\n\n1. 你设计的矩形页面必须等于给定的目标面积。\n\n2. 宽度 W 不应大于长度 L，换言之，要求 L >= W 。\n\n3. 长度 L 和宽度 W 之间的差距应当尽可能小。\n\n你需要按顺序输出你设计的页面的长度 L 和宽度 W。",
        example: "示例：\n\n输入: 4\n输出: [2, 2]\n解释: 目标面积是 4， 所有可能的构造方案有 [1,4], [2,2], [4,1]。\n但是根据要求2，[1,4] 不符合要求; 根据要求3，[2,2] 比 [4,1] 更能符合要求. 所以输出长度 L = 2， 宽度 W = 2。\n\n说明:\n\n给定的面积不大于 10,000,000 且为正整数。\n你设计的页面的长度和宽度必须都是正整数。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(sqrt(n))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 493,
        number: "0493",
        title: "翻转对",
        difficulty: "hard",
        description: "给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。\n\n你需要返回给定数组中的重要翻转对的数量。",
        example: "示例 1:\n\n输入: [1,3,2,3,1]\n输出: 2\n\n示例 2:\n\n输入: [2,4,3,5,1]\n输出: 3\n\n注意:\n\n给定数组的长度不会超过50000。\n输入数组中的所有数字都在32位整数的表示范围内。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 494,
        number: "0494",
        title: "目标和",
        difficulty: "medium",
        description: "给你一个整数数组 nums 和一个整数 target 。\n\n向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：\n\n例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 \"+2-1\" 。\n\n返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。",
        example: "示例 1：\n\n输入：nums = [1,1,1,1,1], target = 3\n输出：5\n解释：一共有 5 种方法让最终目标和为 3 。\n-1 + 1 + 1 + 1 + 1 = 3\n+1 - 1 + 1 + 1 + 1 = 3\n+1 + 1 - 1 + 1 + 1 = 3\n+1 + 1 + 1 - 1 + 1 = 3\n+1 + 1 + 1 + 1 - 1 = 3\n\n示例 2：\n\n输入：nums = [1], target = 1\n输出：1\n\n提示：\n\n1 <= nums.length <= 20\n0 <= nums[i] <= 1000\n0 <= sum(nums[i]) <= 1000\n-1000 <= target <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * sum)",
                spaceComplexity: "O(sum)"
            }
        ]
    },
    {
        id: 495,
        number: "0495",
        title: "提莫攻击",
        difficulty: "easy",
        description: "在《英雄联盟》的世界中，有一个叫 \"提莫\" 的英雄。他的攻击可以让敌方英雄艾希（编者注：寒冰射手）进入中毒状态。\n\n当提莫攻击艾希，艾希的中毒状态正好持续 duration 秒。\n\n正式地讲，提莫在 t 发起发起攻击意味着艾希在时间区间 [t, t + duration - 1]（含 t 和 t + duration - 1）处于中毒状态。如果提莫在中毒影响结束 前 再次攻击，中毒状态计时器将会 重置 ，在新的攻击之后，中毒影响将会在 duration 秒后结束。\n\n给你一个 非递减 的整数数组 timeSeries ，其中 timeSeries[i] 表示提莫在 timeSeries[i] 秒时对艾希发起攻击，以及一个表示中毒持续时间的整数 duration 。\n\n返回艾希处于中毒状态的 总 秒数。",
        example: "示例 1：\n\n输入：timeSeries = [1,4], duration = 2\n输出：4\n解释：提莫攻击对艾希的影响如下：\n- 第 1 秒，提莫攻击艾希并使其立即中毒。中毒状态会维持 2 秒，即第 1 秒和第 2 秒。\n- 第 4 秒，提莫再次攻击艾希，艾希中毒状态又持续 2 秒，即第 4 秒和第 5 秒。\n艾希在第 1、2、4、5 秒处于中毒状态，所以总中毒秒数是 4 。\n\n示例 2：\n\n输入：timeSeries = [1,2], duration = 2\n输出：3\n解释：提莫攻击对艾希的影响如下：\n- 第 1 秒，提莫攻击艾希并使其立即中毒。中毒状态会维持 2 秒，即第 1 秒和第 2 秒。\n- 第 2 秒，提莫再次攻击艾希，并重置中毒计时器，艾希中毒状态需要持续 2 秒，即第 2 秒和第 3 秒。\n艾希在第 1、2、3 秒处于中毒状态，所以总中毒秒数是 3 。\n\n提示：\n\n1 <= timeSeries.length <= 10^4\n0 <= timeSeries[i], duration <= 10^7\ntimeSeries 按 非递减 顺序排列",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 496,
        number: "0496",
        title: "下一个更大元素 I",
        difficulty: "easy",
        description: "nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。\n\n给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。\n\n对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。\n\n返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。",
        example: "示例 1：\n\n输入：nums1 = [4,1,2], nums2 = [1,3,4,2]\n输出：[-1,3,-1]\n解释：nums1 中每个值的下一个更大元素如下所述：\n- 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。\n- 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。\n- 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。\n\n示例 2：\n\n输入：nums1 = [2,4], nums2 = [1,2,3,4]\n输出：[3,-1]\n解释：nums1 中每个值的下一个更大元素如下所述：\n- 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。\n- 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。\n\n提示：\n\n1 <= nums1.length <= nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 10^4\nnums1和nums2中所有整数 互不相同\nnums1 中的所有整数同样出现在 nums2 中",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 497,
        number: "0497",
        title: "非重叠矩形中的随机点",
        difficulty: "medium",
        description: "给定一个由非重叠的轴对齐矩形的数组 rects ，其中 rects[i] = [ai, bi, xi, yi] 表示 (ai, bi) 是第 i 个矩形的左下角点，(xi, yi) 是第 i 个矩形的右上角点。设计一个算法来随机挑选一个被某一矩形覆盖的整数点。矩形周长上的点也算做是被矩形覆盖。所有满足要求的点必须等概率被返回。\n\n在给定的矩形覆盖的空间内的任何整数点都有可能被返回。\n\n请注意 ，整数点是具有整数坐标的点。\n\n实现 Solution 类:\n\nSolution(int[][] rects) 用给定的矩形数组 rects 初始化对象。\nint[] pick() 返回一个随机的整数点 [u, v] 在给定的矩形所覆盖的空间内。",
        example: "示例 1：\n\n输入: \n[\"Solution\", \"pick\", \"pick\", \"pick\", \"pick\", \"pick\"]\n[[[[-2, -2, 1, 1], [2, 2, 4, 6]]], [], [], [], [], []]\n输出: \n[null, [0, 0], [-2, -1], [-1, -2], [-2, -2], [0, 0]]\n\n解释：\nSolution solution = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);\nsolution.pick(); // 返回 [0, 0]\nsolution.pick(); // 返回 [-2, -1]\nsolution.pick(); // 返回 [-1, -2]\nsolution.pick(); // 返回 [-2, -2]\nsolution.pick(); // 返回 [0, 0]\n\n提示：\n\n1 <= rects.length <= 100\nrects[i].length == 4\n-10^9 <= ai < xi <= 10^9\n-10^9 <= bi < yi <= 10^9\nxi - ai <= 2000\nyi - bi <= 2000\n所有的矩形不重叠。\npick 最多被调用 10^4 次。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 498,
        number: "0498",
        title: "对角线遍历",
        difficulty: "medium",
        description: "给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。",
        example: "示例 1：\n\n输入：mat = [[1,2,3],[4,5,6],[7,8,9]]\n输出：[1,2,4,7,5,3,6,8,9]\n\n示例 2：\n\n输入：mat = [[1,2],[3,4]]\n输出：[1,2,3,4]\n\n提示：\n\nm == mat.length\nn == mat[i].length\n1 <= m, n <= 10^4\n1 <= m * n <= 10^4\n-10^5 <= mat[i][j] <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 499,
        number: "0499",
        title: "迷宫 III",
        difficulty: "hard",
        description: "由空地和墙组成的迷宫中有一个球。球可以向上（u）下（d）左（l）右（r）四个方向滚动，但在遇到墙壁前不会停止滚动。当球停下时，可以选择下一个方向。迷宫中还有一个洞，当球运动经过洞时，就会掉进洞里。\n\n给定球的起始位置，目的地和迷宫，找出让球以最短距离掉进洞里的路径。 距离的定义是球从起始位置（不包括）到目的地（包括）经过的空地个数。通过'u', 'd', 'l' 和 'r'输出球的移动方向。 由于可能有多条最短路径， 请输出字典序最小的路径。如果球无法进入洞，输出\"impossible\"。\n\n迷宫由一个0和1的二维数组表示。 1表示墙壁，0表示空地。你可以假定迷宫的边缘都是墙壁。起始位置和目的地的坐标通过行号和列号给出。",
        example: "示例 1:\n\n输入 1: 迷宫由以下二维数组表示\n\n0 0 0 0 0\n1 1 0 0 1\n0 0 0 0 0\n0 1 0 0 1\n0 1 0 0 0\n\n输入 2: 球的初始位置 (rowBall, colBall) = (4, 3)\n输入 3: 洞的位置 (rowHole, colHole) = (0, 1)\n\n输出: \"lul\"\n\n解析: 有两条让球进洞的最短路径。\n第一条路径是 左 -> 上 -> 左, 记为 \"lul\".\n第二条路径是 上 -> 左, 记为 'ul'.\n两条路径都具有最短距离6, 但'l' < 'u'，故第一条路径字典序更小。因此输出\"lul\"。\n\n示例 2:\n\n输入 1: 迷宫由以下二维数组表示\n\n0 0 0 0 0\n1 1 0 0 1\n0 0 0 0 0\n0 1 0 0 1\n0 1 0 0 0\n\n输入 2: 球的初始位置 (rowBall, colBall) = (4, 3)\n输入 3: 洞的位置 (rowHole, colHole) = (3, 0)\n\n输出: \"impossible\"\n\n示例 3:\n\n输入 1: 迷宫由以下二维数组表示\n\n0 0 0 0 0\n1 1 0 0 1\n0 0 0 0 0\n0 1 0 0 1\n0 1 0 0 0\n\n输入 2: 球的初始位置 (rowBall, colBall) = (4, 3)\n输入 3: 洞的位置 (rowHole, colHole) = (0, 0)\n\n输出: \"uldr\"\n\n注意:\n\n迷宫中只有一个球和一个目的地。\n球和洞都在空地上，且初始时它们不在同一位置。\n给定的迷宫不包括边界 (如图中的红色矩形), 但你可以假设迷宫的边缘都是墙壁。\n迷宫至少包括2块空地，行数和列数均不超过30。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n*max(m,n))",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 500,
        number: "0500",
        title: "键盘行",
        difficulty: "easy",
        description: "给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。\n\n美式键盘 中：\n\n第一行由字符 \"qwertyuiop\" 组成。\n第二行由字符 \"asdfghjkl\" 组成。\n第三行由字符 \"zxcvbnm\" 组成。",
        example: "示例 1：\n\n输入：words = [\"Hello\",\"Alaska\",\"Dad\",\"Peace\"]\n输出：[\"Alaska\",\"Dad\"]\n\n示例 2：\n\n输入：words = [\"omk\"]\n输出：[]\n\n示例 3：\n\n输入：words = [\"adsdf\",\"sfd\"]\n输出：[\"adsdf\",\"sfd\"]\n\n提示：\n\n1 <= words.length <= 20\n1 <= words[i].length <= 100\nwords[i] 由英文字母（小写和大写字母）组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*m)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 501,
        number: "0501",
        title: "二叉搜索树中的众数",
        difficulty: "easy",
        description: "给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。\n\n如果树中有多个众数，可以按 任意顺序 返回。\n\n假定 BST 满足如下定义：\n\n结点左子树中所含节点的值 小于等于 当前节点的值\n结点右子树中所含节点的值 大于等于 当前节点的值\n左子树和右子树都是二叉搜索树",
        example: "示例 1：\n\n输入：root = [1,null,2,2]\n输出：[2]\n\n示例 2：\n\n输入：root = [0]\n输出：[0]\n\n提示：\n\n树中节点的数目在范围 [1, 10^4] 内\n-10^5 <= Node.val <= 10^5\n\n进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 502,
        number: "0502",
        title: "IPO",
        difficulty: "hard",
        description: "假设 力扣（LeetCode）即将开始 IPO 。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。\n\n给你 n 个项目。对于每个项目 i ，它都有一个纯利润 profits[i] ，和启动该项目需要的最小资本 capital[i] 。\n\n最初，你的资本为 w 。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。\n\n总而言之，从给定项目中选择 最多 k 个不同项目的列表，以 最大化最终资本 ，并输出最终可获得的最多资本。\n\n答案保证在 32 位有符号整数范围内。",
        example: "示例 1：\n\n输入：k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]\n输出：4\n解释：\n由于你的初始资本为 0，你仅可以从 0 号项目开始。\n在完成后，你将获得 1 的利润，你的总资本将变为 1。\n此时你可以选择开始 1 号或 2 号项目。\n由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。\n因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。\n\n示例 2：\n\n输入：k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]\n输出：6\n\n提示：\n\n1 <= k <= 10^5\n0 <= w <= 10^9\nn == profits.length\nn == capital.length\n1 <= n <= 10^5\n0 <= profits[i] <= 10^4\n0 <= capital[i] <= 10^9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 503,
        number: "0503",
        title: "下一个更大元素 II",
        difficulty: "medium",
        description: "给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。\n\n数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。",
        example: "示例 1:\n\n输入: nums = [1,2,1]\n输出: [2,-1,2]\n解释: 第一个 1 的下一个更大的数是 2；\n数字 2 找不到下一个更大的数； \n第二个 1 的下一个最大的数需要循环搜索，结果也是 2。\n\n示例 2:\n\n输入: nums = [1,2,3,4,3]\n输出: [2,3,4,-1,4]\n\n提示:\n\n1 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 504,
        number: "0504",
        title: "七进制数",
        difficulty: "easy",
        description: "给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。",
        example: "示例 1:\n\n输入: num = 100\n输出: \"202\"\n\n示例 2:\n\n输入: num = -7\n输出: \"-10\"\n\n提示：\n\n-10^7 <= num <= 10^7",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 505,
        number: "0505",
        title: "迷宫 II",
        difficulty: "medium",
        description: "由空地和墙组成的迷宫中有一个球。球可以向上下左右四个方向滚动，但在遇到墙壁前不会停止滚动。当球停下时，可以选择下一个方向。\n\n给定球的起始位置，目的地和迷宫，找出让球停在目的地的最短距离。距离的定义是球从起始位置（不包括）到目的地（包括）经过的空地个数。如果球无法停在目的地，返回 -1。\n\n迷宫由一个0和1的二维数组表示。 1表示墙壁，0表示空地。你可以假定迷宫的边缘都是墙壁。起始位置和目的地的坐标通过行号和列号给出。",
        example: "示例 1:\n\n输入 1: 迷宫由以下二维数组表示\n\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n1 1 0 1 1\n0 0 0 0 0\n\n输入 2: 起始位置坐标 (rowStart, colStart) = (0, 4)\n输入 3: 目的地坐标 (rowDest, colDest) = (4, 4)\n\n输出: 12\n\n解析: 一条最短路径 : left -> down -> left -> down -> right -> down -> right。\n             总距离为 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12。\n\n示例 2:\n\n输入 1: 迷宫由以下二维数组表示\n\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n1 1 0 1 1\n0 0 0 0 0\n\n输入 2: 起始位置坐标 (rowStart, colStart) = (0, 4)\n输入 3: 目的地坐标 (rowDest, colDest) = (3, 2)\n\n输出: -1\n\n解析: 没有能够使球停在目的地的路径。\n\n注意:\n\n迷宫中只有一个球和一个目的地。\n球和目的地都在空地上，且初始时它们不在同一位置。\n给定的迷宫不包括边界 (如图中的红色矩形), 但你可以假设迷宫的边缘都是墙壁。\n迷宫至少包括2块空地，行数和列数均不超过100。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n*max(m,n))",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 506,
        number: "0506",
        title: "相对名次",
        difficulty: "easy",
        description: "给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。\n\n运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：\n\n名次第 1 的运动员获金牌 \"Gold Medal\" 。\n名次第 2 的运动员获银牌 \"Silver Medal\" 。\n名次第 3 的运动员获铜牌 \"Bronze Medal\" 。\n从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 \"x\"）。\n\n使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。",
        example: "示例 1：\n\n输入：score = [5,4,3,2,1]\n输出：[\"Gold Medal\",\"Silver Medal\",\"Bronze Medal\",\"4\",\"5\"]\n解释：名次为 [1st, 2nd, 3rd, 4th, 5th] 。\n\n示例 2：\n\n输入：score = [10,3,8,9,4]\n输出：[\"Gold Medal\",\"5\",\"Bronze Medal\",\"Silver Medal\",\"4\"]\n解释：名次为 [1st, 5th, 3rd, 2nd, 4th] 。\n\n提示：\n\nn == score.length\n1 <= n <= 10^4\n0 <= score[i] <= 10^6\nscore 中的所有值 互不相同",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 507,
        number: "0507",
        title: "完美数",
        difficulty: "easy",
        description: "对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。\n\n给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。",
        example: "示例 1：\n\n输入：num = 28\n输出：true\n解释：28 = 1 + 2 + 4 + 7 + 14\n1, 2, 4, 7, 和 14 是 28 的所有正因子。\n\n示例 2：\n\n输入：num = 7\n输出：false\n\n提示：\n\n1 <= num <= 10^8",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(sqrt(n))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 508,
        number: "0508",
        title: "出现次数最多的子树元素和",
        difficulty: "medium",
        description: "给你一个二叉树的根结点 root ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。\n\n一个结点的 「子树元素和」 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。",
        example: "示例 1：\n\n输入: root = [5,2,-3]\n输出: [2,-3,4]\n\n示例 2：\n\n输入: root = [5,2,-5]\n输出: [2]\n\n提示:\n\n节点数在 [1, 10^4] 范围内\n-10^5 <= Node.val <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 509,
        number: "0509",
        title: "斐波那契数",
        difficulty: "easy",
        description: "斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：\n\nF(0) = 0，F(1) = 1\nF(n) = F(n - 1) + F(n - 2)，其中 n > 1\n\n给定 n ，请计算 F(n) 。",
        example: "示例 1：\n\n输入：n = 2\n输出：1\n解释：F(2) = F(1) + F(0) = 1 + 0 = 1\n\n示例 2：\n\n输入：n = 3\n输出：2\n解释：F(3) = F(2) + F(1) = 1 + 1 = 2\n\n示例 3：\n\n输入：n = 4\n输出：3\n解释：F(4) = F(3) + F(2) = 2 + 1 = 3\n\n提示：\n\n0 <= n <= 30",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 510,
        number: "0510",
        title: "二叉搜索树中的中序后继 II",
        difficulty: "medium",
        description: "给定一棵二叉搜索树和其中的一个节点 node ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。\n\n一个节点 node 的中序后继是键值比 node.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 node 之后的第一个节点。\n\n节点的实现如下：\n\nclass Node {\n    public int val;\n    public Node left;\n    public Node right;\n    public Node parent;\n}\n\n进阶：\n\n你能否在不访问任何节点的值的情况下解决问题？",
        example: "示例 1：\n\n输入：tree = [2,1,3], node = 1\n输出：2\n解析：1 的中序后继结点是 2。注意节点和返回值都是 Node 类型的。\n\n示例 2：\n\n输入：tree = [5,3,6,2,4,null,null,1], node = 6\n输出：null\n解析：该结点没有中序后继，因此返回 null 。\n\n示例 3：\n\n输入：tree = [15,6,18,3,7,17,20,2,4,null,13,null,null,null,null,null,null,null,null,9], node = 15\n输出：17\n\n示例 4：\n\n输入：tree = [15,6,18,3,7,17,20,2,4,null,13,null,null,null,null,null,null,null,null,9], node = 13\n输出：15\n\n提示：\n\n树中节点的数目在范围 [1, 10^4] 内。\n-10^5 <= Node.val <= 10^5\n树中各结点的值均保证唯一。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(h)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 511,
        number: "0511",
        title: "游戏玩法分析 I",
        difficulty: "easy",
        description: "活动表 Activity：\n\n+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| player_id    | int     |\n| device_id    | int     |\n| event_date   | date    |\n| games_played | int     |\n+--------------+---------+\n(player_id, event_date) 是这个表的两个主键\n这个表显示的是某些游戏玩家的游戏活动情况\n每一行是一个玩家的记录，他在某一天使用某个设备登录并玩了若干个游戏\n\n请编写一个 SQL 查询，描述每一个玩家首次登陆的设备名称",
        example: "示例：\n\nActivity 表：\n+-----------+-----------+------------+--------------+\n| player_id | device_id | event_date | games_played |\n+-----------+-----------+------------+--------------+\n| 1         | 2         | 2016-03-01 | 5            |\n| 1         | 2         | 2016-05-02 | 6            |\n| 2         | 3         | 2017-06-25 | 1            |\n| 3         | 1         | 2016-03-02 | 0            |\n| 3         | 4         | 2018-07-03 | 5            |\n+-----------+-----------+------------+--------------+\n\n结果表：\n+-----------+-----------+\n| player_id | device_id |\n+-----------+-----------+\n| 1         | 2         |\n| 2         | 3         |\n| 3         | 1         |\n+-----------+-----------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 512,
        number: "0512",
        title: "游戏玩法分析 II",
        difficulty: "easy",
        description: "Table: Activity\n\n+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| player_id    | int     |\n| device_id    | int     |\n| event_date   | date    |\n| games_played | int     |\n+--------------+---------+\n(player_id, event_date) 是这个表的主键\n这个表显示了某些游戏玩家的游戏活动情况\n每一行是一个玩家的记录，他在某一天使用某个设备登录并玩了若干个游戏\n\n请编写一个 SQL 查询，同时报告每组玩家和日期，以及玩家到目前为止玩了多少游戏。也就是说，在此日期之前玩家所玩的游戏总数。详细情况请查看示例。",
        example: "示例：\n\nActivity 表：\n+-----------+-----------+------------+--------------+\n| player_id | device_id | event_date | games_played |\n+-----------+-----------+------------+--------------+\n| 1         | 2         | 2016-03-01 | 5            |\n| 1         | 2         | 2016-05-02 | 6            |\n| 1         | 3         | 2017-06-25 | 1            |\n| 3         | 1         | 2016-03-02 | 0            |\n| 3         | 4         | 2018-07-03 | 5            |\n+-----------+-----------+------------+--------------+\n\n结果表：\n+-----------+------------+---------------------+\n| player_id | event_date | games_played_so_far |\n+-----------+------------+---------------------+\n| 1         | 2016-03-01 | 5                   |\n| 1         | 2016-05-02 | 11                  |\n| 1         | 2017-06-25 | 12                  |\n| 3         | 2016-03-02 | 0                   |\n| 3         | 2018-07-03 | 5                   |\n+-----------+------------+---------------------+\n对于 ID 为 1 的玩家，2016-05-02 共玩了 5+6=11 个游戏，2017-06-25 共玩了 5+6+1=12 个游戏。\n对于 ID 为 3 的玩家，2018-07-03 共玩了 0+5=5 个游戏。\n请注意，对于每个玩家，我们只关心玩家的登录日期。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 513,
        number: "0513",
        title: "找树左下角的值",
        difficulty: "medium",
        description: "给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。\n\n假设二叉树中至少有一个节点。",
        example: "示例 1:\n\n输入: root = [2,1,3]\n输出: 1\n\n示例 2:\n\n输入: [1,2,3,4,null,5,6,null,null,7]\n输出: 7\n\n提示:\n\n二叉树的节点个数的范围是 [1,10^4]\n-2^31 <= Node.val <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 514,
        number: "0514",
        title: "自由之路",
        difficulty: "hard",
        description: "电子游戏\"辐射4\"中，任务\"通向自由\"要求玩家到达名为\"Freedom Trail Ring\"的金属表盘，并使用表盘拼写特定关键词才能开门。\n\n给定一个字符串 ring，表示刻在外环上的编码；给定另一个字符串 key，表示需要拼写的关键词。您需要算出能够拼写关键词中所有字符的最少步数。\n\n最初，ring 的第一个字符与12:00方向对齐。您需要顺时针或逆时针旋转 ring 以使 key 的一个字符在 12:00 方向对齐，然后按下中心按钮，以此逐个拼写完 key 中的所有字符。\n\n旋转 ring 拼出 key 字符 key[i] 的阶段中：\n\n您可以将 ring 顺时针或逆时针旋转一个位置，计为1步。旋转的最终目的是将字符串 ring 的一个字符与 12:00 方向对齐，并且这个字符必须等于字符 key[i] 。\n如果字符 key[i] 已经对齐到12:00方向，您需要按下中心按钮进行拼写，这也将算作 1 步。按完之后，您可以开始拼写 key 的下一个字符（下一阶段）, 直至完成所有拼写。",
        example: "示例 1：\n\n输入: ring = \"godding\", key = \"gd\"\n输出: 4\n解释:\n对于 key 的第一个字符 'g'，已经在正确的位置, 我们只需要1步来拼写这个字符。 \n对于 key 的第二个字符 'd'，我们需要逆时针旋转 ring \"godding\" 2步使它变成 \"ddinggo\"。\n当然, 我们还需要1步进行拼写。\n因此最终的输出是 4。\n\n示例 2:\n\n输入: ring = \"godding\", key = \"godding\"\n输出: 13\n\n提示：\n\n1 <= ring.length, key.length <= 100\nring 和 key 只包含小写英文字母\n保证 字符串 key 一定可以由字符串 ring 旋转拼出",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n^2)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 515,
        number: "0515",
        title: "在每个树行中找最大值",
        difficulty: "medium",
        description: "给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。",
        example: "示例1：\n\n输入: root = [1,3,2,5,3,null,9]\n输出: [1,3,9]\n解释:\n          1\n         / \\\n        3   2\n       / \\   \\\n      5   3   9\n\n示例2：\n\n输入: root = [1,2,3]\n输出: [1,3]\n解释:\n          1\n         / \\\n        2   3\n\n示例3：\n\n输入: root = [1]\n输出: [1]\n\n示例4：\n\n输入: root = [1,null,2]\n输出: [1,2]\n解释:      \n           1 \n            \\\n             2     \n\n示例5：\n\n输入: root = []\n输出: []\n\n提示：\n\n二叉树的节点个数的范围是 [0,10^4]\n-2^31 <= Node.val <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 516,
        number: "0516",
        title: "最长回文子序列",
        difficulty: "medium",
        description: "给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。\n\n子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。",
        example: "示例 1：\n\n输入：s = \"bbbab\"\n输出：4\n解释：一个可能的最长回文子序列为 \"bbbb\" 。\n\n示例 2：\n\n输入：s = \"cbbd\"\n输出：2\n解释：一个可能的最长回文子序列为 \"bb\" 。\n\n提示：\n\n1 <= s.length <= 1000\ns 仅由小写英文字母组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 517,
        number: "0517",
        title: "超级洗衣机",
        difficulty: "hard",
        description: "假设有 n 台超级洗衣机放在同一排上。开始的时候，每台洗衣机内可能有一定量的衣服，也可能是空的。\n\n在每一步操作中，你可以选择任意 m (1 <= m <= n) 台洗衣机，与此同时将每台洗衣机的一件衣服送到相邻的一台洗衣机。\n\n给定一个整数数组 machines 代表从左至右每台洗衣机中的衣物数量，请给出能让所有洗衣机中剩下的衣物的数量相等的 最少的操作步数 。如果不能使每台洗衣机中衣物的数量相等，则返回 -1 。",
        example: "示例 1：\n\n输入：machines = [1,0,5]\n输出：3\n解释：\n第一步:    1     0 <-- 5    =>    1     1     4\n第二步:    1 <-- 1 <-- 4    =>    2     1     3    \n第三步:    2     1 <-- 3    =>    2     2     2   \n\n示例 2：\n\n输入：machines = [0,3,0]\n输出：2\n解释：\n第一步:    0 <-- 3     0    =>    1     2     0    \n第二步:    1     2 --> 0    =>    1     1     1     \n\n示例 3：\n\n输入：machines = [0,2,0]\n输出：-1\n解释：\n不可能让所有三个洗衣机同时剩下相同数量的衣物。\n\n提示：\n\nn == machines.length\n1 <= n <= 10^4\n0 <= machines[i] <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 518,
        number: "0518",
        title: "零钱兑换 II",
        difficulty: "medium",
        description: "给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。\n\n请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。\n\n假设每一种面额的硬币有无限个。 \n\n题目数据保证结果符合 32 位带符号整数。",
        example: "示例 1：\n\n输入：amount = 5, coins = [1, 2, 5]\n输出：4\n解释：有四种方式可以凑成总金额：\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1\n\n示例 2：\n\n输入：amount = 3, coins = [2]\n输出：0\n解释：只用面额 2 的硬币不能凑成总金额 3 。\n\n示例 3：\n\n输入：amount = 10, coins = [10] \n输出：1\n\n提示：\n\n1 <= coins.length <= 300\n1 <= coins[i] <= 5000\ncoins 中的所有值 互不相同\n0 <= amount <= 5000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*amount)",
                spaceComplexity: "O(amount)"
            }
        ]
    },
    {
        id: 519,
        number: "0519",
        title: "随机翻转矩阵",
        difficulty: "medium",
        description: "给你一个 m x n 的二元矩阵 matrix ，且所有值被初始化为 0 。请你设计一个算法，随机选取一个满足 matrix[i][j] == 0 的下标 (i, j) ，并将它的值变为 1 。所有满足 matrix[i][j] == 0 的下标 (i, j) 被选取的概率应当均等。\n\n尽量最少调用内置的随机函数，并且优化时间和空间复杂度。\n\n实现 Solution 类：\n\nSolution(int m, int n) 使用二元矩阵的大小 m 和 n 初始化该对象\nint[] flip() 返回一个满足 matrix[i][j] == 0 的随机下标 [i, j] ，并将其对应格子中的值变为 1\nvoid reset() 将矩阵中所有的值重置为 0",
        example: "示例：\n\n输入\n[\"Solution\", \"flip\", \"flip\", \"flip\", \"reset\", \"flip\"]\n[[3, 1], [], [], [], [], []]\n输出\n[null, [1, 0], [2, 0], [0, 0], null, [2, 0]]\n\n解释\nSolution solution = new Solution(3, 1);\nsolution.flip();  // 返回 [1, 0]，此时返回 [1,0]，将 matrix[1][0] 置为 1\nsolution.flip();  // 返回 [2, 0]，此时返回 [2,0]，将 matrix[2][0] 置为 1\nsolution.flip();  // 返回 [0, 0]，此时返回 [0,0]，将 matrix[0][0] 置为 1\nsolution.reset(); // 所有值都重置为 0\nsolution.flip();  // 返回 [2, 0]，此时返回 [2,0]，将 matrix[2][0] 置为 1\n\n提示：\n\n1 <= m, n <= 10^4\n每次调用flip 时，矩阵中至少存在一个值为 0 的格子。\n最多调用 1000 次 flip 和 reset 方法。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(min(m*n, flip calls))"
            }
        ]
    },
    {
        id: 520,
        number: "0520",
        title: "检测大写字母",
        difficulty: "easy",
        description: "我们定义，在以下情况时，单词的大写用法是正确的：\n\n全部字母都是大写，比如 \"USA\" 。\n单词中所有字母都不是大写，比如 \"leetcode\" 。\n如果单词不只含有一个字母，只有首字母大写， 比如 \"Google\" 。\n\n给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。",
        example: "示例 1：\n\n输入：word = \"USA\"\n输出：true\n\n示例 2：\n\n输入：word = \"FlaG\"\n输出：false\n\n提示：\n\n1 <= word.length <= 100\nword 由小写和大写英文字母组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 521,
        number: "0521",
        title: "最长特殊序列 Ⅰ",
        difficulty: "easy",
        description: "给你两个字符串 a 和 b，请返回 这两个字符串中 最长的特殊序列 的长度。如果不存在，则返回 -1 。\n\n「最长特殊序列」 定义如下：该序列为 某字符串独有的最长子序列（即不能是其他字符串的子序列） 。\n\n字符串 s 的子序列是在从 s 中删除任意数量的字符后可以获得的字符串。\n\n例如，\"abc\" 是 \"aebdc\" 的子序列，因为删除 \"aebdc\" 中斜体加粗的字符可以得到 \"abc\" 。 \"aebdc\" 的子序列还包括 \"aebdc\" 、 \"aeb\" 和 \"\" (空字符串)。",
        example: "示例 1：\n\n输入: a = \"aba\", b = \"cdc\"\n输出: 3\n解释: 最长特殊序列可为 \"aba\" (或 \"cdc\")，两者均为自身的子序列且不是对方的子序列。\n\n示例 2：\n\n输入：a = \"aaa\", b = \"bbb\"\n输出：3\n解释: 最长特殊序列是 \"aaa\" 和 \"bbb\" 。\n\n示例 3：\n\n输入：a = \"aaa\", b = \"aaa\"\n输出：-1\n解释: 字符串 a 的每个子序列也是字符串 b 的每个子序列。同样，字符串 b 的每个子序列也是字符串 a 的子序列。\n\n提示：\n\n1 <= a.length, b.length <= 100\na 和 b 由小写英文字母组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 522,
        number: "0522",
        title: "最长特殊序列 II",
        difficulty: "medium",
        description: "给定字符串列表 strs ，返回其中 最长的特殊序列 的长度。如果最长特殊序列不存在，返回 -1 。\n\n特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。\n\ns 的 子序列可以通过删去字符串 s 中的某些字符实现。\n\n例如，\"abc\" 是 \"aebdc\" 的子序列，因为您可以删除\"aebdc\"中的下划线字符来得到 \"abc\" 。\"aebdc\"的子序列还包括\"aebdc\"、 \"aeb\" 和 \"\" (空字符串)。",
        example: "示例 1：\n\n输入: strs = [\"aba\",\"cdc\",\"eae\"]\n输出: 3\n\n示例 2:\n\n输入: strs = [\"aaa\",\"aaa\",\"aa\"]\n输出: -1\n\n提示:\n\n2 <= strs.length <= 50\n1 <= strs[i].length <= 10\nstrs[i] 只包含小写英文字母",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2 * m)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 523,
        number: "0523",
        title: "连续的子数组和",
        difficulty: "medium",
        description: "给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：\n\n子数组大小 至少为 2 ，且\n子数组元素总和为 k 的倍数。\n如果存在，返回 true ；否则，返回 false 。\n\n如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数。",
        example: "示例 1：\n\n输入：nums = [23,2,4,6,7], k = 6\n输出：true\n解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。\n\n示例 2：\n\n输入：nums = [23,2,6,4,7], k = 6\n输出：true\n解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 \n42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。\n\n示例 3：\n\n输入：nums = [23,2,6,4,7], k = 13\n输出：false\n\n提示：\n\n1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^9\n0 <= sum(nums[i]) <= 2^31 - 1\n1 <= k <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(min(n, k))"
            }
        ]
    },
    {
        id: 524,
        number: "0524",
        title: "通过删除字母匹配到字典里最长单词",
        difficulty: "medium",
        description: "给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。\n\n如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。",
        example: "示例 1：\n\n输入：s = \"abpcplea\", dictionary = [\"ale\",\"apple\",\"monkey\",\"plea\"]\n输出：\"apple\"\n\n示例 2：\n\n输入：s = \"abpcplea\", dictionary = [\"a\",\"b\",\"c\"]\n输出：\"a\"\n\n提示：\n\n1 <= s.length <= 1000\n1 <= dictionary.length <= 1000\n1 <= dictionary[i].length <= 1000\ns 和 dictionary[i] 仅由小写英文字母组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * m)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 525,
        number: "0525",
        title: "连续数组",
        difficulty: "medium",
        description: "给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。",
        example: "示例 1:\n\n输入: nums = [0,1]\n输出: 2\n说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。\n\n示例 2:\n\n输入: nums = [0,1,0]\n输出: 2\n说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。\n\n提示：\n\n1 <= nums.length <= 10^5\nnums[i] 不是 0 就是 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 526,
        number: "0526",
        title: "优美的排列",
        difficulty: "medium",
        description: "假设有从 1 到 n 的 n 个整数。用这些整数构造一个数组 perm（下标从 1 开始），只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：\n\nperm[i] 能够被 i 整除\ni 能够被 perm[i] 整除\n给你一个整数 n ，返回可以构造的 优美排列 的 数量 。",
        example: "示例 1：\n\n输入：n = 2\n输出：2\n解释：\n第 1 个优美的排列是 [1,2]：\n    - perm[1] = 1 能被 i = 1 整除\n    - perm[2] = 2 能被 i = 2 整除\n第 2 个优美的排列是 [2,1]：\n    - perm[1] = 2 能被 i = 1 整除\n    - i = 2 能被 perm[2] = 1 整除\n\n示例 2：\n\n输入：n = 1\n输出：1\n\n提示：\n\n1 <= n <= 15",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n!)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 527,
        number: "0527",
        title: "单词缩写",
        difficulty: "hard",
        description: "给你一个字符串数组 words ，该数组由 互不相同 的若干字符串组成，请你找出并返回每个单词的 最小缩写 。\n\n生成缩写的规则如下：\n\n初始缩写由起始字母 + 省略字母的数量 + 结尾字母组成。\n若存在冲突，亦即多于一个单词有同样的缩写，则使用更长的前缀代替首字母，直到从单词到缩写的映射唯一。换而言之，最终的缩写必须只能映射到一个单词。\n若缩写并不比原单词更短，则保留原样。",
        example: "示例 1：\n\n输入: words = [\"like\", \"god\", \"internal\", \"me\", \"internet\", \"interval\", \"intension\", \"face\", \"intrusion\"]\n输出: [\"l2e\",\"god\",\"internal\",\"me\",\"i6t\",\"interval\",\"inte4n\",\"f2e\",\"intr4n\"]\n\n示例 2：\n\n输入：words = [\"aa\",\"aaa\"]\n输出：[\"aa\",\"aaa\"]\n\n提示：\n\n1 <= words.length <= 400\n2 <= words[i].length <= 400\nwords[i] 由小写英文字母组成\nwords 中的所有字符串 互不相同",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n * m^2)",
                spaceComplexity: "O(n * m)"
            }
        ]
    },
    {
        id: 528,
        number: "0528",
        title: "按权重随机选择",
        difficulty: "medium",
        description: "给你一个 下标从 0 开始 的正整数数组 w ，其中 w[i] 代表第 i 个下标的权重。\n\n请你实现一个函数 pickIndex ，它可以 随机地 从范围 [0, w.length - 1] 内（含 0 和 w.length - 1）选出并返回一个下标。选取下标 i 的 概率 为 w[i] / sum(w) 。\n\n例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。",
        example: "示例 1：\n\n输入：\n[\"Solution\",\"pickIndex\"]\n[[[1]],[]]\n输出：\n[null,0]\n解释：\nSolution solution = new Solution([1]);\nsolution.pickIndex(); // 返回 0，因为数组中只有一个元素，所以唯一的选择是返回下标 0。\n\n示例 2：\n\n输入：\n[\"Solution\",\"pickIndex\",\"pickIndex\",\"pickIndex\",\"pickIndex\",\"pickIndex\"]\n[[[1,3]],[],[],[],[],[]]\n输出：\n[null,1,1,1,1,0]\n解释：\nSolution solution = new Solution([1, 3]);\nsolution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。\nsolution.pickIndex(); // 返回 1\nsolution.pickIndex(); // 返回 1\nsolution.pickIndex(); // 返回 1\nsolution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。\n\n由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:\n[null,1,1,1,1,0]\n[null,1,1,1,1,1]\n[null,1,1,1,0,0]\n[null,1,1,1,0,1]\n[null,1,0,1,0,0]\n......\n诸若此类。\n\n提示：\n\n1 <= w.length <= 10^4\n1 <= w[i] <= 10^5\npickIndex 将被调用不超过 10^4 次",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 529,
        number: "0529",
        title: "扫雷游戏",
        difficulty: "medium",
        description: "让我们一起来玩扫雷游戏！\n\n给你一个大小为 m x n 二维字符矩阵 board ，表示扫雷游戏的盘面，其中：\n\n'M' 代表一个 未挖出的 地雷，\n'E' 代表一个 未挖出的 空方块，\n'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的 已挖出的 空白方块，\n数字（'1' 到 '8'）表示有多少地雷与这块 已挖出的 方块相邻，\n'X' 则表示一个 已挖出的 地雷。\n给你一个整数数组 click ，其中 click = [clickr, clickc] 表示在所有 未挖出的 方块（'M' 或者 'E'）中的下一个点击位置（clickr 是行下标，clickc 是列下标）。\n\n根据以下规则，返回相应位置被点击后对应的盘面：\n\n如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X' 。\n如果一个 没有相邻地雷 的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的 未挖出 方块都应该被递归地揭露。\n如果一个 至少与一个地雷相邻 的空方块（'E'）被挖出，修改它为数字（'1' 到 '8' ），表示相邻地雷的数量。\n如果在此次点击中，若无更多方块可被揭露，则返回盘面。",
        example: "示例 1：\n\n输入：board = [[\"E\",\"E\",\"E\",\"E\",\"E\"],[\"E\",\"E\",\"M\",\"E\",\"E\"],[\"E\",\"E\",\"E\",\"E\",\"E\"],[\"E\",\"E\",\"E\",\"E\",\"E\"]], click = [3,0]\n输出：[[\"B\",\"1\",\"E\",\"1\",\"B\"],[\"B\",\"1\",\"M\",\"1\",\"B\"],[\"B\",\"1\",\"1\",\"1\",\"B\"],[\"B\",\"B\",\"B\",\"B\",\"B\"]]\n\n示例 2：\n\n输入：board = [[\"B\",\"1\",\"E\",\"1\",\"B\"],[\"B\",\"1\",\"M\",\"1\",\"B\"],[\"B\",\"1\",\"1\",\"1\",\"B\"],[\"B\",\"B\",\"B\",\"B\",\"B\"]], click = [1,2]\n输出：[[\"B\",\"1\",\"E\",\"1\",\"B\"],[\"B\",\"1\",\"X\",\"1\",\"B\"],[\"B\",\"1\",\"1\",\"1\",\"B\"],[\"B\",\"B\",\"B\",\"B\",\"B\"]]\n\n提示：\n\nm == board.length\nn == board[i].length\n1 <= m, n <= 50\nboard[i][j] 为 'M'、'E'、'B' 或数字 '1' 到 '8' 中的一个\nclick.length == 2\n0 <= clickr < m\n0 <= clickc < n\nboard[clickr][clickc] 为 'M' 或 'E'",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 530,
        number: "0530",
        title: "二叉搜索树的最小绝对差",
        difficulty: "easy",
        description: "给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。\n\n差值是一个正数，其数值等于两值之差的绝对值。",
        example: "示例 1：\n\n输入：root = [4,2,6,1,3]\n输出：1\n\n示例 2：\n\n输入：root = [1,0,48,null,null,12,49]\n输出：1\n\n提示：\n\n树中节点的数目范围是 [2, 10^4]\n0 <= Node.val <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 531,
        number: "0531",
        title: "孤独像素 I",
        difficulty: "medium",
        description: "给你一个大小为 m x n 的图像 picture ，图像由黑白像素组成，'B' 表示黑色像素，'W' 表示白色像素，请你统计并返回图像中 孤独 的黑色像素的数量。\n\n孤独 的黑色像素是指如果一个黑色像素的四个方向都没有其他黑色像素，那么这个黑色像素是孤独的。",
        example: "示例 1：\n\n输入：picture = [[\"W\",\"W\",\"B\"],[\"W\",\"B\",\"W\"],[\"B\",\"W\",\"W\"]]\n输出：3\n解释：全部三个 'B' 都是孤独的。\n\n示例 2：\n\n输入：picture = [[\"B\",\"B\",\"B\"],[\"B\",\"B\",\"B\"],[\"B\",\"B\",\"B\"]]\n输出：0\n\n提示：\n\nm == picture.length\nn == picture[i].length\n1 <= m, n <= 500\npicture[i][j] 为 'W' 或 'B'",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 532,
        number: "0532",
        title: "数组中的 k-diff 数对",
        difficulty: "medium",
        description: "给你一个整数数组 nums 和一个整数 k，请你在数组中找出 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。\n\nk-diff 数对定义为一个整数对 (nums[i], nums[j]) ，并满足下述全部条件：\n\n0 <= i, j < nums.length\ni != j\nnums[i] - nums[j] == k\n注意，|val| 表示 val 的绝对值。",
        example: "示例 1：\n\n输入：nums = [3, 1, 4, 1, 5], k = 2\n输出：2\n解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。\n尽管数组中有两个 1 ，但我们只应返回不同的数对的数量。\n\n示例 2：\n\n输入：nums = [1, 2, 3, 4, 5], k = 1\n输出：4\n解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5)。\n\n示例 3：\n\n输入：nums = [1, 3, 1, 5, 4], k = 0\n输出：1\n解释：数组中只有一个 0-diff 数对，(1, 1)。\n\n提示：\n\n1 <= nums.length <= 10^4\n-10^7 <= nums[i] <= 10^7\n0 <= k <= 10^7",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 533,
        number: "0533",
        title: "孤独像素 II",
        difficulty: "medium",
        description: "给你一个大小为 m x n 的二维字符数组 picture ，表示一张黑白图像，数组中的 'B' 表示黑色像素，'W' 表示白色像素。另给你一个整数 target 。\n\n某行 r 和某列 c 中的所有像素都是黑色的，且恰好有 target 行和 target 列是纯黑色的，那么这些行列交汇的位置就是 黑色孤独像素 。\n\n请你返回图像中 黑色孤独像素 的数量。",
        example: "示例 1：\n\n输入：picture = [[\"W\",\"B\",\"W\",\"B\",\"B\",\"W\"],[\"W\",\"B\",\"W\",\"B\",\"B\",\"W\"],[\"W\",\"B\",\"W\",\"B\",\"B\",\"W\"],[\"W\",\"W\",\"B\",\"W\",\"B\",\"W\"]], target = 3\n输出：6\n解释：所有绿色的 'B' 都是我们所求的像素(第 1、3、5 列的所有 'B' )。\n以r = 0, c = 1 处为例：满足条件的行有 {0, 1, 2}，满足条件的列有 {1, 3, 5}，在这些行列交点上的像素就是我们所求的。\n\n示例 2：\n\n输入：picture = [[\"W\",\"W\",\"B\"],[\"W\",\"W\",\"B\"],[\"W\",\"W\",\"B\"]], target = 1\n输出：0\n\n提示：\n\nm == picture.length\nn == picture[i].length\n1 <= m, n <= 200\npicture[i][j] 为 'W' 或 'B'\n1 <= target <= min(m, n)",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m+n)"
            }
        ]
    },
    {
        id: 534,
        number: "0534",
        title: "游戏玩法分析 III",
        difficulty: "medium",
        description: "Table: Activity\n\n+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| player_id    | int     |\n| device_id    | int     |\n| event_date   | date    |\n| games_played | int     |\n+--------------+---------+\n(player_id, event_date) 是这个表的主键\n这个表显示了某些游戏玩家的游戏活动情况\n每一行是一个玩家的记录，他在某一天使用某个设备登录并玩了若干个游戏\n\n编写一个 SQL 查询，同时报告每组玩家和日期，以及玩家到目前为止玩了多少游戏。也就是说，在此日期之前玩家所玩的游戏总数。详细情况请查看示例。",
        example: "示例：\n\nActivity 表：\n+-----------+-----------+------------+--------------+\n| player_id | device_id | event_date | games_played |\n+-----------+-----------+------------+--------------+\n| 1         | 2         | 2016-03-01 | 5            |\n| 1         | 2         | 2016-05-02 | 6            |\n| 1         | 3         | 2017-06-25 | 1            |\n| 3         | 1         | 2016-03-02 | 0            |\n| 3         | 4         | 2018-07-03 | 5            |\n+-----------+-----------+------------+--------------+\n\n结果表：\n+-----------+------------+---------------------+\n| player_id | event_date | games_played_so_far |\n+-----------+------------+---------------------+\n| 1         | 2016-03-01 | 5                   |\n| 1         | 2016-05-02 | 11                  |\n| 1         | 2017-06-25 | 12                  |\n| 3         | 2016-03-02 | 0                   |\n| 3         | 2018-07-03 | 5                   |\n+-----------+------------+---------------------+\n对于 ID 为 1 的玩家，2016-05-02 共玩了 5+6=11 个游戏，2017-06-25 共玩了 5+6+1=12 个游戏。\n对于 ID 为 3 的玩家，2018-07-03 共玩了 0+5=5 个游戏。\n请注意，对于每个玩家，我们只关心玩家的登录日期。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 535,
        number: "0535",
        title: "TinyURL 的加密与解密",
        difficulty: "medium",
        description: "TinyURL 是一种 URL 简化服务， 比如：当你输入一个 URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk 。请你设计一个类来加密与解密 TinyURL 。\n\n加密和解密算法如何设计和运作是没有限制的，你只需要保证一个 URL 可以被加密成一个 TinyURL ，并且这个 TinyURL 可以用解密方法恢复成原本的 URL 。\n\n实现 Solution 类：\n\nSolution() 初始化 TinyURL 系统对象。\nString encode(String longUrl) 返回 longUrl 对应的 TinyURL 。\nString decode(String shortUrl) 返回 shortUrl 原本的 URL 。题目数据保证给定的 shortUrl 是由同一个系统对象加密的。",
        example: "示例：\n\n输入：url = \"https://leetcode.com/problems/design-tinyurl\"\n输出：\"https://leetcode.com/problems/design-tinyurl\"\n\n解释：\nSolution obj = new Solution();\nstring tiny = obj.encode(url); // 返回加密后得到的 TinyURL 。\nstring ans = obj.decode(tiny); // 返回解密后得到的原本的 URL 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 536,
        number: "0536",
        title: "从字符串生成二叉树",
        difficulty: "medium",
        description: "你需要用一个包括括号和整数的字符串构建一棵二叉树。\n\n输入的字符串代表一棵二叉树。它包括整数和随后的 0 、1 或 2 对括号。整数代表根的值，一对括号内表示同样结构的子树。\n\n若存在左子结点，则从左子结点开始构建。",
        example: "示例 1:\n\n输入: \"4(2(3)(1))(6(5))\"\n输出: [4,2,6,3,1,5]\n\n示例 2:\n\n输入: \"4(2(3)(1))(6(5)(7))\"\n输出: [4,2,6,3,1,5,7]\n\n示例 3:\n\n输入: \"-4(2(3)(1))(6(5)(7))\"\n输出: [-4,2,6,3,1,5,7]\n\n提示：\n\n输入字符串中只包含 '(', ')', '-' 和 '0' ~ '9' \n空树由 \"\" 表示。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 537,
        number: "0537",
        title: "复数乘法",
        difficulty: "medium",
        description: "复数 可以用字符串表示，遵循 \"实部+虚部i\" 的形式，并满足下述条件：\n\n实部 是一个整数，取值范围是 [-100, 100]\n虚部 也是一个整数，取值范围是 [-100, 100]\ni^2 == -1\n给你两个字符串表示的复数 num1 和 num2 ，请你遵循复数表示形式，返回表示它们乘积的字符串。",
        example: "示例 1：\n\n输入：num1 = \"1+1i\", num2 = \"1+1i\"\n输出：\"0+2i\"\n解释：(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。\n\n示例 2：\n\n输入：num1 = \"1+-1i\", num2 = \"1+-1i\"\n输出：\"0+-2i\"\n解释：(1 - i) * (1 - i) = 1 - i2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。\n\n提示：\n\nnum1 和 num2 都是有效的复数表示。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 538,
        number: "0538",
        title: "把二叉搜索树转换为累加树",
        difficulty: "medium",
        description: "给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。\n\n提醒一下，二叉搜索树满足下列约束条件：\n\n节点的左子树仅包含键 小于 节点键的节点。\n节点的右子树仅包含键 大于 节点键的节点。\n左右子树也必须是二叉搜索树。",
        example: "示例 1：\n\n输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]\n输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]\n\n示例 2：\n\n输入：root = [0,null,1]\n输出：[1,null,1]\n\n示例 3：\n\n输入：root = [1,0,2]\n输出：[3,3,2]\n\n示例 4：\n\n输入：root = [3,2,4,1]\n输出：[7,9,4,10]\n\n提示：\n\n树中的节点数介于 0 和 10^4 之间。\n每个节点的值介于 -10^4 和 10^4 之间。\n树中的所有值 互不相同 。\n给定的树为二叉搜索树。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 539,
        number: "0539",
        title: "最小时间差",
        difficulty: "medium",
        description: "给定一个 24 小时制（小时:分钟 \"HH:MM\"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。",
        example: "示例 1：\n\n输入：timePoints = [\"23:59\",\"00:00\"]\n输出：1\n\n示例 2：\n\n输入：timePoints = [\"00:00\",\"23:59\",\"00:00\"]\n输出：0\n\n提示：\n\n2 <= timePoints.length <= 2 * 10^4\ntimePoints[i] 格式为 \"HH:MM\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 540,
        number: "0540",
        title: "有序数组中的单一元素",
        difficulty: "medium",
        description: "给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。\n\n请你找出并返回只出现一次的那个数。\n\n你设计的解决方案必须满足 O(log n) 时间复杂度和 O(1) 空间复杂度。",
        example: "示例 1:\n\n输入: nums = [1,1,2,3,3,4,4,8,8]\n输出: 2\n\n示例 2:\n\n输入: nums = [3,3,7,7,10,11,11]\n输出: 10\n\n提示:\n\n1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 541,
        number: "0541",
        title: "反转字符串 II",
        difficulty: "easy",
        description: "给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。\n\n如果剩余字符少于 k 个，则将剩余字符全部反转。\n如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。",
        example: "示例 1：\n\n输入：s = \"abcdefg\", k = 2\n输出：\"bacdfeg\"\n\n示例 2：\n\n输入：s = \"abcd\", k = 2\n输出：\"bacd\"\n\n提示：\n\n1 <= s.length <= 10^4\ns 仅由小写英文组成\n1 <= k <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 542,
        number: "0542",
        title: "01 矩阵",
        difficulty: "medium",
        description: "给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。\n\n两个相邻元素间的距离为 1 。",
        example: "示例 1：\n\n输入：mat = [[0,0,0],[0,1,0],[0,0,0]]\n输出：[[0,0,0],[0,1,0],[0,0,0]]\n\n示例 2：\n\n输入：mat = [[0,0,0],[0,1,0],[1,1,1]]\n输出：[[0,0,0],[0,1,0],[1,2,1]]\n\n提示：\n\nm == mat.length\nn == mat[i].length\n1 <= m, n <= 10^4\n1 <= m * n <= 10^4\nmat[i][j] is either 0 or 1.\nmat 中至少有一个 0",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 543,
        number: "0543",
        title: "二叉树的直径",
        difficulty: "easy",
        description: "给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。",
        example: "示例 :\n给定二叉树\n\n          1\n         / \\\n        2   3\n       / \\\n      4   5\n\n返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。\n\n注意：两结点之间的路径长度是以它们之间边的数目表示。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 544,
        number: "0544",
        title: "输出比赛匹配对",
        difficulty: "medium",
        description: "在 NBA 季后赛中，我们总是安排较强的队伍对战较弱的队伍，例如用排名第 1 的队伍和第 n 的队伍对决，这是一个可以让比赛更加有趣的好策略。现在，给你 n 支队伍，你需要以字符串格式输出它们的 最终 比赛配对。\n\nn 支队伍按从 1 到 n 的正整数格式给出，分别代表它们的初始排名（排名 1 最强，排名 n 最弱）。我们用括号（'(', ')'）和逗号（','）来表示匹配对——括号（'(', ')'）表示匹配，逗号（','）来用于分割。\n\n在每一轮的匹配过程中，你都需要遵循将强队与弱队配对的原则。",
        example: "示例 1：\n\n输入: 2\n输出: (1,2)\n解析: \n初始排名: 1, 2\n1 和 2 的配对: (1,2)\n\n示例 2：\n\n输入: 4\n输出: ((1,4),(2,3))\n解析: \n初始排名: 1, 2, 3, 4\n第 1 轮: (1,4), (2,3)\n第 2 轮: ((1,4),(2,3))\n\n示例 3：\n\n输入: 8\n输出: (((1,8),(4,5)),((2,7),(3,6)))\n解析: \n初始排名: 1, 2, 3, 4, 5, 6, 7, 8\n第 1 轮: (1,8), (2,7), (3,6), (4,5)\n第 2 轮: ((1,8),(4,5)), ((2,7),(3,6))\n第 3 轮: (((1,8),(4,5)),((2,7),(3,6)))\n\n提示：\n\nn == 2^k 其中 k 是一个正整数。\n1 <= n <= 2^12",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 545,
        number: "0545",
        title: "二叉树的边界",
        difficulty: "medium",
        description: "二叉树的 边界 是由 根节点 、左边界 、按从左到右顺序的 叶节点 和 逆序的右边界 ，按顺序依次连接组成。\n\n左边界 是满足下述定义的节点集合：\n\n根节点的左子节点在左边界中。\n如果 m 是左边界中的节点，且 m 有左子节点，则 m 的左子节点在左边界中。\n如果 m 是左边界中的节点，且 m 没有左子节点，但有右子节点，则 m 的右子节点在左边界中。\n最左侧的叶节点不在左边界中。\n右边界 定义方式与 左边界 相同，只是将左替换成右。\n\n叶节点 是没有任何子节点的节点。\n\n给你一棵二叉树的根节点 root ，按顺序返回组成二叉树 边界 的这些值。",
        example: "示例 1：\n\n输入：root = [1,null,2,3,4]\n输出：[1,3,4,2]\n解释：\n- 根节点是 1\n- 左边界为空，因为二叉树没有左子节点\n- 叶节点是 3 和 4\n- 右边界是 2\n- 按顺序，边界为 [1,3,4,2]\n\n示例 2：\n\n输入：root = [1,2,3,4,5,6,null,null,null,7,8,9,10]\n输出：[1,2,4,7,8,9,10,6,3]\n解释：\n- 根节点是 1\n- 左边界为 [1,2,4]\n- 叶节点是 [7,8,9,10]\n- 右边界为 [1,3,6]\n- 按顺序，边界为 [1,2,4,7,8,9,10,6,3]\n\n提示：\n\n树中节点的数目在范围 [1, 10^4] 内\n-1000 <= Node.val <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 546,
        number: "0546",
        title: "移除盒子",
        difficulty: "hard",
        description: "给出一些不同颜色的盒子，盒子的颜色由数字表示，即不同的数字表示不同的颜色。\n\n你将经过若干轮操作去去掉盒子，直到所有的盒子都去掉为止。每一轮你可以移除具有相同颜色的连续 k 个盒子（k >= 1），这样一轮之后你将得到 k * k 个积分。\n\n当你将所有盒子都去掉之后，求你能获得的最大积分和。",
        example: "示例 1：\n\n输入：boxes = [1,3,2,2,2,3,4,3,1]\n输出：23\n解释：\n[1, 3, 2, 2, 2, 3, 4, 3, 1] \n----> [1, 3, 3, 4, 3, 1] (3*3=9 分) \n----> [1, 3, 3, 3, 1] (1*1=1 分) \n----> [1, 1] (3*3=9 分) \n----> [] (2*2=4 分)\n\n示例 2：\n\n输入：boxes = [1,1,1]\n输出：9\n\n示例 3：\n\n输入：boxes = [1]\n输出：1\n\n提示：\n\n1 <= boxes.length <= 100\n1 <= boxes[i] <= 100",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^4)",
                spaceComplexity: "O(n^3)"
            }
        ]
    },
    {
        id: 547,
        number: "0547",
        title: "省份数量",
        difficulty: "medium",
        description: "有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。\n\n省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。\n\n给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。\n\n返回矩阵中 省份 的数量。",
        example: "示例 1：\n\n输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]\n输出：2\n\n示例 2：\n\n输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]\n输出：3\n\n提示：\n\n1 <= n <= 200\nn == isConnected.length\nn == isConnected[i].length\nisConnected[i][j] 为 1 或 0\nisConnected[i][i] == 1\nisConnected[i][j] == isConnected[j][i]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 548,
        number: "0548",
        title: "将数组分割成和相等的子数组",
        difficulty: "medium",
        description: "给定一个有 n 个整数的数组 nums ，如果能找到满足以下条件的三元组 (i, j, k) 则返回 true ：\n\n0 < i, i + 1 < j, j + 1 < k < n - 1\n子数组 (0, i - 1)、(i + 1, j - 1)、(j + 1, k - 1)、(k + 1, n - 1) 的和相等。\n这里我们定义子数组 (l, r) 表示原数组从索引为 l 的元素开始至索引为 r 的元素。",
        example: "示例 1：\n\n输入: nums = [1,2,1,2,1,2,1]\n输出: true\n解释:\n可以将数组分成 (1,2,1)，(2,1,2)，(1) 和 ()\n前三个子数组的和相等，都为 4 。最后一个子数组为空，和为 0 。\n\n示例 2：\n\n输入: nums = [1,2,1,2,1,2,1,2]\n输出: false\n\n提示:\n\nn == nums.length\n1 <= n <= 2000\n-10^6 <= nums[i] <= 10^6",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 549,
        number: "0549",
        title: "二叉树中最长的连续序列",
        difficulty: "medium",
        description: "给定一个二叉树，你需要找出二叉树中最长的连续序列路径的长度。\n\n请注意，该路径可以是递增的或者是递减的。例如，[1,2,3,4] 和 [4,3,2,1] 都被认为是合法的，而路径 [1,2,4,3] 则不合法。另外，路径可以是 子-父-子 顺序，并不一定是 父-子 顺序。",
        example: "示例 1：\n\n输入:\n        1\n       / \\\n      2   3\n输出: 2\n解释: 最长的连续路径是 [1, 2] 或者 [2, 1]。\n\n示例 2：\n\n输入:\n        2\n       / \\\n      1   3\n输出: 3\n解释: 最长的连续路径是 [1, 2, 3] 或者 [3, 2, 1]。\n\n提示：\n\n树中节点的数目在范围 [1, 3 * 10^4] 内\n-3 * 10^4 <= Node.val <= 3 * 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 550,
        number: "0550",
        title: "游戏玩法分析 IV",
        difficulty: "medium",
        description: "Table: Activity\n\n+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| player_id    | int     |\n| device_id    | int     |\n| event_date   | date    |\n| games_played | int     |\n+--------------+---------+\n(player_id, event_date) 是这个表的主键\n这个表显示了某些游戏玩家的游戏活动情况\n每一行是一个玩家的记录，他在某一天使用某个设备登录并玩了若干个游戏\n\n编写一个 SQL 查询，报告在首次登录的第二天再次登录的玩家的比率，四舍五入到小数点后两位。换句话说，你需要计算从首次登录日期开始至少连续两天登录的玩家的数量，然后除以玩家总数。",
        example: "示例：\n\nActivity 表：\n+-----------+-----------+------------+--------------+\n| player_id | device_id | event_date | games_played |\n+-----------+-----------+------------+--------------+\n| 1         | 2         | 2016-03-01 | 5            |\n| 1         | 2         | 2016-03-02 | 6            |\n| 2         | 3         | 2017-06-25 | 1            |\n| 3         | 1         | 2016-03-02 | 0            |\n| 3         | 4         | 2018-07-03 | 5            |\n+-----------+-----------+------------+--------------+\n\n结果表：\n+-----------+\n| fraction  |\n+-----------+\n| 0.33      |\n+-----------+\n只有 ID 为 1 的玩家在第一天登录后的第二天再次登录，所以答案是 1/3 = 0.33",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 551,
        number: "0551",
        title: "学生出勤记录 I",
        difficulty: "easy",
        description: "给你一个字符串 s 表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：\n\n'A'：Absent，缺勤\n'L'：Late，迟到\n'P'：Present，到场\n如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：\n\n按 总出勤 计，学生缺勤（'A'）严格 少于两天。\n学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。\n如果学生可以获得出勤奖励，返回 true ；否则，返回 false 。",
        example: "示例 1：\n\n输入：s = \"PPALLP\"\n输出：true\n解释：学生缺勤次数为 1 次，且不存在连续 3 天迟到的情况。\n\n示例 2：\n\n输入：s = \"PPALLL\"\n输出：false\n解释：学生最后三天连续迟到，所以不满足出勤奖励的条件。\n\n提示：\n\n1 <= s.length <= 1000\ns[i] 为 'A'、'L' 或 'P'",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 552,
        number: "0552",
        title: "学生出勤记录 II",
        difficulty: "hard",
        description: "可以用字符串表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：\n\n'A'：Absent，缺勤\n'L'：Late，迟到\n'P'：Present，到场\n如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：\n\n按 总出勤 计，学生缺勤（'A'）严格 少于两天。\n学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。\n给你一个整数 n ，表示出勤记录的长度（次数）。请你返回记录长度为 n 时，可能获得出勤奖励的记录情况 数量 。答案可能很大，所以返回对 10^9 + 7 取余 的结果。",
        example: "示例 1：\n\n输入：n = 2\n输出：8\n解释：\n有 8 种可能的记录。\n\"PP\" : 到场、到场\n\"AP\" : 缺勤、到场\n\"PA\" : 到场、缺勤\n\"LP\" : 迟到、到场\n\"PL\" : 到场、迟到\n\"AL\" : 缺勤、迟到\n\"LA\" : 迟到、缺勤\n\"LL\" : 迟到、迟到\n只有\"AA\"不会获得出勤奖励，因为缺勤次数为 2 次（需要少于 2 次）。\n\n示例 2：\n\n输入：n = 1\n输出：3\n\n示例 3：\n\n输入：n = 10101\n输出：183236316\n\n提示：\n\n1 <= n <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 553,
        number: "0553",
        title: "最优除法",
        difficulty: "medium",
        description: "给定一组正整数，相邻的整数之间将会进行浮点除法操作。例如， [2,3,4] -> 2 / 3 / 4 。\n\n但是，你可以在任意位置添加任意数目的括号，来改变算数的优先级。你需要找出怎么添加括号，才能得到最大的结果，并且返回相应的字符串格式的表达式。你的表达式不应该含有冗余的括号。",
        example: "示例：\n\n输入: [1000,100,10,2]\n输出: \"1000/(100/10/2)\"\n解释:\n1000/(100/10/2) = 1000/((100/10)/2) = 200\n但是，以下加粗的括号 \"1000/((100/10)/2)\" 是冗余的，\n因为他们并不影响操作的优先级，所以你需要返回 \"1000/(100/10/2)\"。\n\n其他用例:\n1000/(100/10)/2 = 50\n1000/(100/(10/2)) = 50\n1000/100/10/2 = 0.5\n1000/100/(10/2) = 2\n\n提示：\n\n输入数组的长度在 [1, 10] 之间。\n数组中每个元素的大小都在 [2, 1000] 之间。\n每个测试用例只有一个最优除法解。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 554,
        number: "0554",
        title: "砖墙",
        difficulty: "medium",
        description: "你的面前有一堵矩形的、由 n 行砖块组成的砖墙。这些砖块高度相同（也就是一个单位高）但是宽度不同。每一行砖块的宽度之和相等。\n\n你现在要画一条 自顶向下 的、穿过 最少 砖块的垂线。如果你画的线只是从砖块的边缘经过，就不算穿过这块砖。你不能沿着墙的两个垂直边缘之一画线，这样显然是没有穿过一块砖的。\n\n给你一个二维数组 wall ，该数组包含这堵墙的相关信息。其中，wall[i] 是一个代表从左至右每块砖的宽度的数组。你需要找出怎样画才能使这条线 穿过的砖块数量最少 ，并且返回 穿过的砖块数量 。",
        example: "示例 1：\n\n输入：wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]\n输出：2\n\n示例 2：\n\n输入：wall = [[1],[1],[1]]\n输出：3\n\n提示：\n\nn == wall.length\n1 <= n <= 10^4\n1 <= wall[i].length <= 10^4\n1 <= sum(wall[i].length) <= 2 * 10^4\n对于每一行 i ，sum(wall[i]) 是相同的\n1 <= wall[i][j] <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(m)"
            }
        ]
    },
    {
        id: 555,
        number: "0555",
        title: "分割连接字符串",
        difficulty: "medium",
        description: "给定一个字符串列表，你可以将这些字符串连接成一个循环字符串，对于每个字符串，你可以选择是否翻转它。在所有可能的循环字符串中，你需要分割循环字符串（这将使循环字符串变成一个常规的字符串），然后找到字典序最大的字符串。\n\n具体来说，要找到字典序最大的字符串，你需要经历两个阶段：\n\n将所有字符串连接成一个循环字符串，你可以选择是否翻转某些字符串，并按照给定的顺序连接它们。\n在循环字符串的某个位置分割它，这将使循环字符串从分割点变成一个常规的字符串。\n你的任务是在所有可能的常规字符串中找到字典序最大的一个。",
        example: "示例 1：\n\n输入: strs = [\"abc\",\"xyz\"]\n输出: \"zyxcba\"\n解释: 你可以得到循环字符串 \"-abcxyz-\", \"-abczyx-\", \"-cbaxyz-\", \"-cbazyx-\"，其中 '-' 代表循环后连接的字符串。\n答案字符串是 \"zyxcba\"。\n\n示例 2：\n\n输入: strs = [\"abc\"]\n输出: \"cba\"\n\n提示：\n\n1 <= strs.length <= 1000\n1 <= strs[i].length <= 1000\n1 <= sum(strs[i].length) <= 1000\nstrs[i] 只包含小写英文字母。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 556,
        number: "0556",
        title: "下一个更大元素 III",
        difficulty: "medium",
        description: "给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。\n\n注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。",
        example: "示例 1：\n\n输入：n = 12\n输出：21\n\n示例 2：\n\n输入：n = 21\n输出：-1\n\n提示：\n\n1 <= n <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 557,
        number: "0557",
        title: "反转字符串中的单词 III",
        difficulty: "easy",
        description: "给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。",
        example: "示例 1：\n\n输入：s = \"Let's take LeetCode contest\"\n输出：\"s'teL ekat edoCteeL tsetnoc\"\n\n示例 2:\n\n输入： s = \"God Ding\"\n输出：\"doG gniD\"\n\n提示：\n\n1 <= s.length <= 5 * 10^4\ns 包含可打印的 ASCII 字符。\ns 不包含任何开头或结尾空格。\ns 里 至少 有一个词。\ns 中的所有单词都用一个空格隔开。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 558,
        number: "0558",
        title: "四叉树交集",
        difficulty: "medium",
        description: "二进制矩阵中的所有元素不是 0 就是 1 。\n\n给你两个四叉树，quadTree1 和 quadTree2。其中 quadTree1 表示一个 n * n 二进制矩阵，而 quadTree2 表示另一个 n * n 二进制矩阵。\n\n请你返回一个表示 n * n 二进制矩阵的四叉树，它是 quadTree1 和 quadTree2 所表示的两个二进制矩阵进行 按位逻辑或运算 的结果。\n\n注意，当 isLeaf 为 False 时，你可以把 True 或者 False 赋值给节点，两种值都会被判题机制 接受 。\n\n四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：\n\nval：储存叶子结点所代表的区域的值。1 对应 True，0 对应 False；\nisLeaf: 当这个节点是一个叶子结点时为 True，如果它有 4 个子节点则为 False 。",
        example: "示例 1：\n\n输入：quadTree1 = [[0,1],[1,1],[1,1],[1,0],[1,0]]\n, quadTree2 = [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]\n输出：[[0,0],[1,1],[1,1],[1,1],[1,0]]\n解释：quadTree1 和 quadTree2 如上所示。由四叉树所表示的二进制矩阵也已经给出。\n如果我们对这两个矩阵进行按位逻辑或运算，则可以得到下面的二进制矩阵，由一个作为结果的四叉树表示。\n注意，我们展示的二进制矩阵仅仅是为了更好地说明题意，你无需构造二进制矩阵来获得结果四叉树。\n\n示例 2：\n\n输入：quadTree1 = [[1,0]]\n, quadTree2 = [[1,0]]\n输出：[[1,0]]\n解释：两个数所表示的矩阵大小都为 1*1，值全为 1 。\n\n示例 3：\n\n输入：quadTree1 = [[0,0],[1,0],[1,0],[1,1],[1,1]]\n, quadTree2 = [[0,0],[1,1],[1,1],[1,0],[1,1]]\n输出：[[1,1]]\n\n示例 4：\n\n输入：quadTree1 = [[0,0],[1,1],[1,0],[1,1],[1,1]]\n, quadTree2 = [[0,0],[1,1],[0,1],[1,1],[1,1],null,null,null,null,[1,1],[1,0],[1,0],[1,1]]\n输出：[[0,0],[1,1],[0,1],[1,1],[1,1],null,null,null,null,[1,1],[1,0],[1,0],[1,1]]\n\n提示：\n\nquadTree1 和 quadTree2 都是符合题目要求的四叉树，每个都代表一个 n * n 的矩阵。\nn == 2^x ，其中 0 <= x <= 9.",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 559,
        number: "0559",
        title: "N 叉树的最大深度",
        difficulty: "easy",
        description: "给定一个 N 叉树，找到其最大深度。\n\n最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。\n\nN 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。",
        example: "示例 1：\n\n输入：root = [1,null,3,2,4,null,5,6]\n输出：3\n\n示例 2：\n\n输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n输出：5\n\n提示：\n\n树的深度不会超过 1000 。\n树的节点数目位于 [0, 10^4] 之间。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 560,
        number: "0560",
        title: "和为 K 的子数组",
        difficulty: "medium",
        description: "给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。",
        example: "示例 1：\n\n输入：nums = [1,1,1], k = 2\n输出：2\n\n示例 2：\n\n输入：nums = [1,2,3], k = 3\n输出：2\n\n提示：\n\n1 <= nums.length <= 2 * 10^4\n-1000 <= nums[i] <= 1000\n-10^7 <= k <= 10^7",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 561,
        number: "0561",
        title: "数组拆分",
        difficulty: "easy",
        description: "给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。\n\n返回该 最大总和 。",
        example: "示例 1：\n\n输入：nums = [1,4,3,2]\n输出：4\n解释：所有可能的分法（忽略元素顺序）为：\n1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3\n2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3\n3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4\n所以最大总和为 4\n\n示例 2：\n\n输入：nums = [6,2,6,5,1,2]\n输出：9\n解释：最优的分法为 (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9\n\n提示：\n\n1 <= n <= 10^4\nnums.length == 2 * n\n-10^4 <= nums[i] <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 562,
        number: "0562",
        title: "矩阵中最长的连续1线段",
        difficulty: "medium",
        description: "给定一个01矩阵 M，找到矩阵中最长的连续1线段。这条线段可以是水平的、垂直的、对角线的或者反对角线的。",
        example: "示例：\n\n输入：\n[[0,1,1,0],\n [0,1,1,0],\n [0,0,0,1]]\n输出：3\n\n提示：\n\n给定矩阵中的元素数量不会超过 10,000。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 563,
        number: "0563",
        title: "二叉树的坡度",
        difficulty: "easy",
        description: "给你一个二叉树的根节点 root ，计算并返回 整个树 的坡度 。\n\n一个树的 节点的坡度 定义即为，该节点左子树的节点之和与右子树节点之和的 差的绝对值 。如果没有左子树的话，左子树的节点之和为 0 ；没有右子树的话也是一样。空结点的坡度是 0 。\n\n整个树 的坡度就是其所有节点的坡度之和。",
        example: "示例 1：\n\n输入：root = [1,2,3]\n输出：1\n解释：\n节点 2 的坡度：|0-0| = 0（没有子节点）\n节点 3 的坡度：|0-0| = 0（没有子节点）\n节点 1 的坡度：|2-3| = 1（左子树就是左子节点，所以和是 2 ；右子树就是右子节点，所以和是 3 ）\n坡度总和：0 + 0 + 1 = 1\n\n示例 2：\n\n输入：root = [4,2,9,3,5,null,7]\n输出：15\n解释：\n节点 3 的坡度：|0-0| = 0（没有子节点）\n节点 5 的坡度：|0-0| = 0（没有子节点）\n节点 7 的坡度：|0-0| = 0（没有子节点）\n节点 2 的坡度：|3-5| = 2（左子树就是左子节点，所以和是 3 ；右子树就是右子节点，所以和是 5 ）\n节点 9 的坡度：|0-7| = 7（没有左子树，所以和是 0 ；右子树正好是右子节点，所以和是 7 ）\n节点 4 的坡度：|(3+2+5)-(9+7)| = |10-16| = 6（左子树值为 3+2+5=10，右子树值为 9+7=16）\n坡度总和：0 + 0 + 0 + 2 + 7 + 6 = 15\n\n示例 3：\n\n输入：root = [21,7,14,1,1,2,2,3,3]\n输出：9\n\n提示：\n\n树中节点数目的范围在 [0, 10^4] 内\n-1000 <= Node.val <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 564,
        number: "0564",
        title: "寻找最近的回文数",
        difficulty: "hard",
        description: "给定一个表示整数的字符串 n ，返回与它最近的回文整数（不包括自身）。如果不止一个，返回较小的那个。\n\n\"最近的\"定义为两个整数差的绝对值最小。",
        example: "示例 1:\n\n输入: n = \"123\"\n输出: \"121\"\n\n示例 2:\n\n输入: n = \"1\"\n输出: \"0\"\n解释: 0 和 2是最近的回文，但我们返回最小的，也就是 0。\n\n提示:\n\n1 <= n.length <= 18\nn 只由数字组成\nn 不含前导 0\nn 代表在 [1, 10^18 - 1] 范围内的整数",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 565,
        number: "0565",
        title: "数组嵌套",
        difficulty: "medium",
        description: "索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。\n\n假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素。",
        example: "示例 1:\n\n输入: A = [5,4,0,3,1,6,2]\n输出: 4\n解释: \nA[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.\n\n其中一种最长的 S[K]:\nS[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}\n\n提示：\n\nN是[1, 20,000]之间的整数。\nA中不含有重复的元素。\nA中的元素大小在[0, N-1]之间。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 566,
        number: "0566",
        title: "重塑矩阵",
        difficulty: "easy",
        description: "在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。\n\n给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。\n\n重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。\n\n如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。",
        example: "示例 1：\n\n输入：mat = [[1,2],[3,4]], r = 1, c = 4\n输出：[[1,2,3,4]]\n\n示例 2：\n\n输入：mat = [[1,2],[3,4]], r = 2, c = 4\n输出：[[1,2],[3,4]]\n\n提示：\n\nm == mat.length\nn == mat[i].length\n1 <= m, n <= 100\n-1000 <= mat[i][j] <= 1000\n1 <= r, c <= 300",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(r*c)",
                spaceComplexity: "O(r*c)"
            }
        ]
    },
    {
        id: 567,
        number: "0567",
        title: "字符串的排列",
        difficulty: "medium",
        description: "给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。\n\n换句话说，s1 的排列之一是 s2 的 子串 。",
        example: "示例 1：\n\n输入：s1 = \"ab\" s2 = \"eidbaooo\"\n输出：true\n解释：s2 包含 s1 的排列之一 (\"ba\")。\n\n示例 2：\n\n输入：s1= \"ab\" s2 = \"eidboaoo\"\n输出：false\n\n提示：\n\n1 <= s1.length, s2.length <= 10^4\ns1 和 s2 仅包含小写字母",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 568,
        number: "0568",
        title: "最大休假天数",
        difficulty: "hard",
        description: "力扣想让一个最优秀的员工在 N 个城市间旅行来收集算法问题。 但只工作不玩耍，聪明的孩子也会变傻，所以您可以在某些特定的城市和星期休假。您的工作就是安排旅行使得最大化你可以休假的天数，但是您需要遵守一些规则和限制。\n\n规则和限制：\n1. 您只能在 N 个城市之间旅行，用 0 到 N-1 索引表示。一开始，您在索引为 0 的城市。\n2. 在每一周的星期一，您会选择去一个城市工作 5 天，周六和周日休假。\n3. 您必须在相同的城市工作一整周的 5 个工作日。\n4. 您只有 K 周的时间旅行。\n5. 您不能在连续的周中选择相同的城市旅行。\n6. 每个城市的休假天数用 N*K 矩阵 days 表示，其中 days[i][j] 表示第 j 周在城市 i 休假的天数。\n7. 每个城市之间的飞行时间用 N*N 矩阵 flights 表示，其中 flights[i][j] 表示城市 i 到城市 j 的飞行时间。\n8. 对于所有的 1 <= i, j <= N，您都可以从城市 i 直接飞到城市 j，或者从城市 i 飞到城市 k 再飞到城市 j。\n9. 如果您从城市 i 飞往城市 j，并在同一天选择城市 j 休假，那么您在那一天既需要工作也需要休假。\n\n给定 flights 矩阵和 days 矩阵，您需要输出 K 周内可以休假的最长天数。",
        example: "示例 1:\n\n输入:flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[1,3,1],[6,0,3],[3,3,3]], k = 3\n输出: 12\n解释: \nAns = 6 + 3 + 3 = 12. \n\n最好的策略之一是：\n第一周 : 城市 1 (工作 5 天，休假 6 天) \n第二周 : 城市 2 (工作 5 天，休假 3 天)\n第三周 : 城市 2 (工作 5 天，休假 3 天)\n\n示例 2:\n\n输入:flights = [[0,0,0],[0,0,0],[0,0,0]], days = [[1,1,1],[7,7,7],[7,7,7]], k = 2\n输出: 3\n解释: \nAns = 1 + 2 = 3. \n\n由于没有航班可以让您飞往其他城市，您必须在城市 0 呆 2 个星期。\n对于每一周，您只有一天的休息日。\n\n提示:\n\n1 <= N, K <= 100\n0 <= flights[i][j] <= 1\n0 <= days[i][j] <= 7",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(N^2*K)",
                spaceComplexity: "O(N*K)"
            }
        ]
    },
    {
        id: 569,
        number: "0569",
        title: "员工薪水中位数",
        difficulty: "hard",
        description: "表: Employee\n\n+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| id           | int     |\n| company      | varchar |\n| salary       | int     |\n+--------------+---------+\nid 是此表的主键列。\n公司列是一个枚举类型，其中仅包含 ('A', 'B', 'C') 三个值。\n此表的每一行都表示公司 A、B 或 C 的某位员工的工资。\n\n编写一个 SQL 查询，找出每个公司的工资中位数。\n\n以 任意顺序 返回结果表。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入: \nEmployee 表:\n+----+---------+--------+\n| id | company | salary |\n+----+---------+--------+\n| 1  | A       | 2341   |\n| 2  | A       | 341    |\n| 3  | A       | 15     |\n| 4  | A       | 15314  |\n| 5  | A       | 451    |\n| 6  | A       | 513    |\n| 7  | B       | 15     |\n| 8  | B       | 13     |\n| 9  | B       | 1154   |\n| 10 | B       | 1345   |\n| 11 | B       | 1221   |\n| 12 | B       | 234    |\n| 13 | C       | 2345   |\n| 14 | C       | 2645   |\n| 15 | C       | 2645   |\n| 16 | C       | 2652   |\n| 17 | C       | 65     |\n+----+---------+--------+\n输出: \n+---------+--------+\n| company | median |\n+---------+--------+\n| A       | 482    |\n| B       | 677.5  |\n| C       | 2645   |\n+---------+--------+\n解释: \n公司 A 的工资中位数是 482。\n公司 B 的工资中位数是 (1154+201)/2=677.5。\n公司 C 的工资中位数是 2645。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 570,
        number: "0570",
        title: "至少有5名直接下属的经理",
        difficulty: "medium",
        description: "表: Employee\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| name        | varchar |\n| department  | varchar |\n| managerId   | int     |\n+-------------+---------+\nid是该表的主键列。\n该表的每一行都表示雇员的名字、他们的部门和他们的经理的id。\n如果managerId为空，则该员工没有经理。\n没有员工会成为自己的管理者。\n\n编写一个SQL查询，查询至少有5名直接下属的经理 。\n\n以 任意顺序 返回结果表。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入: \nEmployee 表:\n+-----+-------+------------+-----------+\n| id  | name  | department | managerId |\n+-----+-------+------------+-----------+\n| 101 | John  | A          | None      |\n| 102 | Dan   | A          | 101       |\n| 103 | James | A          | 101       |\n| 104 | Amy   | A          | 101       |\n| 105 | Anne  | A          | 101       |\n| 106 | Ron   | B          | 101       |\n+-----+-------+------------+-----------+\n输出: \n+------+\n| name |\n+------+\n| John |\n+------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 571,
        number: "0571",
        title: "给定数字的频率查询中位数",
        difficulty: "hard",
        description: "表: Numbers\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| num         | int  |\n| frequency   | int  |\n+-------------+------+\nnum 是这个表的主键。\n这个表的每一行表示某个数字在该数据库中的出现频率。\n\n中位数是将数据样本排列在升序后，位于中间的那个数。如果样本数为偶数，则中位数是位于中间的两个数的平均值。\n\n例如，[1,1,2,3] 的中位数是 1.5 ，[1,2,3,4] 的中位数是 2.5 。\n\n请你编写一个 SQL 查询，解决以下问题：如果这个表中所有数字的频率都相同，那么中位数是多少？\n\n查询结果用一个只有一行的表来表示，这一行只有一列median，它的值是浮点数。\n\n查询结果格式如下面的例子所示：",
        example: "示例 1:\n\n输入: \nNumbers 表:\n+-----+-----------+\n| num | frequency |\n+-----+-----------+\n| 0   | 7         |\n| 1   | 1         |\n| 2   | 3         |\n| 3   | 1         |\n+-----+-----------+\n输出: \n+--------+\n| median |\n+--------+\n| 0.0    |\n+--------+\n解释: \n如果我们将表中的所有数字展开，得到 [0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3]，那么中位数是 0。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 572,
        number: "0572",
        title: "另一棵树的子树",
        difficulty: "easy",
        description: "给你两棵二叉树 root 和 subRoot 。检验 root 中是否包含和 subRoot 具有相同结构和节点值的子树。如果存在，返回 true ；否则，返回 false 。\n\n二叉树 tree 的一棵子树包括 tree 的某个节点和这个节点的所有后代节点。tree 也可以看做它自身的一棵子树。",
        example: "示例 1：\n\n输入：root = [3,4,5,1,2], subRoot = [4,1,2]\n输出：true\n\n示例 2：\n\n输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]\n输出：false\n\n提示：\n\nroot 树上的节点数量范围是 [1, 2000]\nsubRoot 树上的节点数量范围是 [1, 1000]\n-10^4 <= root.val <= 10^4\n-10^4 <= subRoot.val <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 573,
        number: "0573",
        title: "松鼠模拟",
        difficulty: "medium",
        description: "现在有一棵树，一只松鼠和一些坚果。位置由二维网格的单元格表示。你的目标是找出松鼠收集所有坚果的最小路程，且坚果是一颗接一颗地被放在树下。松鼠一次最多只能携带一颗坚果，松鼠可以向上，向下，向左和向右四个方向移动到相邻的单元格。移动次数表示路程。\n\n输入 1: 表示松鼠所在的单元格，坐标形式为 (row, column)。\n输入 2: 表示树所在的单元格，坐标形式为 (row, column)。\n输入 3: 表示坚果所在的单元格集合，每颗坚果的坐标为 (row, column)。\n输出: 松鼠收集所有坚果的最小路程。",
        example: "示例 1:\n\n输入: \n松鼠: (2,2)\n树: (4,4)\n坚果: [(3,0), (2,5)]\n输出: 12\n解释: \n松鼠从 (2,2) 出发，到达坚果1，然后将坚果1放到树下，接着去采集坚果2，然后将坚果2放到树下，最后回到树下。\n路程 = 距离(松鼠, 坚果1) + 距离(坚果1, 树) + 距离(树, 坚果2) + 距离(坚果2, 树) = 4 + 4 + 2 + 2 = 12.\n\n提示:\n\n松鼠、树和坚果的位置互不相同。\n坚果的数量不超过 9 个。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n!)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 574,
        number: "0574",
        title: "当选者",
        difficulty: "medium",
        description: "表: Candidate\n\n+-------------+----------+\n| Column Name | Type     |\n+-------------+----------+\n| id          | int      |\n| name        | varchar  |\n+-------------+----------+\nid 是该表的主键列。\n该表的每一行都包含关于候选对象的 id 和名称的信息。\n\n表: Vote\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| id          | int  |\n| candidateId | int  |\n+-------------+------+\nid 是自动递增的主键。\ncandidateId 是 id 在 Candidate 表中的外键。\n该表的每一行决定了投票的候选人。\n\n编写一个SQL查询来报告获胜候选人的名字(即获得最多选票的候选人)。\n\n生成测试用例以确保 只有一个候选人赢得选举。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入: \nCandidate table:\n+----+------+\n| id | name |\n+----+------+\n| 1  | A    |\n| 2  | B    |\n| 3  | C    |\n| 4  | D    |\n| 5  | E    |\n+----+------+\nVote table:\n+----+-------------+\n| id | candidateId |\n+----+-------------+\n| 1  | 2           |\n| 2  | 4           |\n| 3  | 3           |\n| 4  | 2           |\n| 5  | 5           |\n+----+-------------+\n输出: \n+------+\n| name |\n+------+\n| B    |\n+------+\n解释: \n候选人B有2票。候选人C、D和E各有1票。\n获胜者是候选人B。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 575,
        number: "0575",
        title: "分糖果",
        difficulty: "easy",
        description: "Alice 有 n 枚糖，其中第 i 枚糖的类型为 candyType[i] 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。\n\n医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 n / 2 即可（n 是一个偶数）。Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。\n\n给你一个长度为 n 的整数数组 candyType ，返回： Alice 在仅吃掉 n / 2 枚糖的情况下，可以吃到的最多糖果的种类数。",
        example: "示例 1：\n\n输入：candyType = [1,1,2,2,3,3]\n输出：3\n解释：Alice 只能吃 6 / 2 = 3 枚糖，由于只有 3 种糖，她可以每种吃一枚。\n\n示例 2：\n\n输入：candyType = [1,1,2,3]\n输出：2\n解释：Alice 只能吃 4 / 2 = 2 枚糖，不管她选择吃的种类是 [1,2]、[1,3] 还是 [2,3]，她只能吃到两种不同类的糖。\n\n示例 3：\n\n输入：candyType = [6,6,6,6]\n输出：1\n解释：Alice 只能吃 4 / 2 = 2 枚糖，尽管她能吃到的种类不同，但只能吃到一种糖。\n\n提示：\n\nn == candyType.length\n2 <= n <= 10^4\nn 是一个偶数\n-10^5 <= candyType[i] <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 576,
        number: "0576",
        title: "出界的路径数",
        difficulty: "medium",
        description: "给你一个大小为 m x n 的网格和一个球。球的起始坐标为 [startRow, startColumn] 。你可以将球移到在四个方向上相邻的单元格内（可以穿过网格边界到达网格之外）。你 最多 可以移动 maxMove 次球。\n\n给你五个整数 m、n、maxMove、startRow 以及 startColumn ，找出并返回可以将球移出边界的路径数量。因为答案可能非常大，返回对 10^9 + 7 取余 后的结果。",
        example: "示例 1：\n\n输入：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0\n输出：6\n\n示例 2：\n\n输入：m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1\n输出：12\n\n提示：\n\n1 <= m, n <= 50\n0 <= maxMove <= 50\n0 <= startRow < m\n0 <= startColumn < n",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n*maxMove)",
                spaceComplexity: "O(m*n*maxMove)"
            }
        ]
    },
    {
        id: 577,
        number: "0577",
        title: "员工奖金",
        difficulty: "easy",
        description: "表：Employee\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| empId       | int     |\n| name        | varchar |\n| supervisor  | int     |\n| salary      | int     |\n+-------------+---------+\nempId 是该表的主键列。\n该表的每一行都表示员工的ID、姓名、上级和薪水。\n\n表：Bonus\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| empId       | int  |\n| bonus       | int  |\n+-------------+------+\nempId 是该表的主键列。\nempId 是 Employee 表中的外键。\n该表的每一行都包含一个员工的奖金。\n\n编写一个SQL查询，报告每个员工的姓名和奖金金额。如果一个员工没有奖金，则奖金金额应为 null 。\n\n以 任意顺序 返回结果表。\n\n查询结果格式如下所示。",
        example: "示例 1：\n\n输入：\nEmployee table:\n+-------+--------+------------+--------+\n| empId | name   | supervisor | salary |\n+-------+--------+------------+--------+\n| 3     | Brad   | null       | 4000   |\n| 1     | John   | 3          | 1000   |\n| 2     | Dan    | 3          | 2000   |\n| 4     | Thomas | 3          | 4000   |\n+-------+--------+------------+--------+\nBonus table:\n+-------+-------+\n| empId | bonus |\n+-------+-------+\n| 2     | 500   |\n| 4     | 2000  |\n+-------+-------+\n输出：\n+------+-------+\n| name | bonus |\n+------+-------+\n| Brad | null  |\n| John | null  |\n| Dan  | 500   |\n| Thomas | 2000  |\n+------+-------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 578,
        number: "0578",
        title: "查询回答率最高的问题",
        difficulty: "medium",
        description: "表：SurveyLog\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| id          | int  |\n| action      | ENUM |\n| question_id | int  |\n| answer_id   | int  |\n| q_num       | int  |\n| timestamp   | int  |\n+-------------+------+\n这张表没有主键，其中可能包含重复项。\n该表包含关于调查日志的信息。\naction 字段是一个 ENUM 数据，可以是 \"show\"、\"answer\" 或 \"skip\" 之一。\n每个问题在数据表中有唯一的 id。\n答案和问题在表中也有自己唯一的 id。\n\n编写解决方案，报告回答率最高的问题。如果有多个问题具有相同的最高回答率，返回 question_id 最小的那个。\n\n回答率 的计算方式是：回答给定问题的用户数量除以该问题的展示次数。\n\n查询结果格式如下所示：",
        example: "示例 1：\n\n输入：\nSurveyLog table:\n+----+--------+-------------+-----------+-------+-----------+\n| id | action | question_id | answer_id | q_num | timestamp |\n+----+--------+-------------+-----------+-------+-----------+\n| 5  | show   | 285         | null      | 1     | 123       |\n| 5  | answer | 285         | 124124    | 1     | 124       |\n| 5  | show   | 369         | null      | 2     | 125       |\n| 5  | skip   | 369         | null      | 2     | 126       |\n+----+--------+-------------+-----------+-------+-----------+\n输出：\n+------------+\n| survey_log |\n+------------+\n| 285        |\n+------------+\n解释：\n问题 285 的回答率为 1/1，而问题 369 的回答率为 0/1，因此回答率最高的是 285 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 579,
        number: "0579",
        title: "查询员工的累计薪水",
        difficulty: "hard",
        description: "表: Employee\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| id          | int  |\n| month       | int  |\n| salary      | int  |\n+-------------+------+\n(id, month) 是该表的主键。\n该表的每一行表示员工的 ID、月份和该月的薪水。\n\n编写一个SQL查询来计算每个员工的累计薪水总和，但是不包括最近一个月的薪水。\n\n按 id 升序返回结果表。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入: \nEmployee table:\n+----+-------+--------+\n| id | month | salary |\n+----+-------+--------+\n| 1  | 1     | 20     |\n| 2  | 1     | 20     |\n| 1  | 2     | 30     |\n| 2  | 2     | 30     |\n| 3  | 2     | 40     |\n| 1  | 3     | 40     |\n| 3  | 3     | 60     |\n| 1  | 4     | 60     |\n| 3  | 4     | 70     |\n| 1  | 7     | 90     |\n| 1  | 8     | 90     |\n+----+-------+--------+\n输出: \n+----+-------+--------+------------+\n| id | month | salary | Cumulative |\n+----+-------+--------+------------+\n| 1  | 7     | 90     | 90         |\n| 1  | 4     | 60     | 130        |\n| 1  | 3     | 40     | 70         |\n| 1  | 2     | 30     | 30         |\n| 2  | 1     | 20     | 20         |\n| 3  | 3     | 60     | 60         |\n| 3  | 2     | 40     | 40         |\n+----+-------+--------+------------+\n解释: \n员工 '1' 有 5 条薪水记录，不包括最近一个月的薪水（月份 '8'），累计薪水如下:\n- 月份 '7' 的累计薪水为 90。\n- 月份 '4' 的累计薪水为 60（\"月份 '4'的薪水\"）+ 90（\"月份 '7' 的薪水\"）= 150。\n- 月份 '3' 的累计薪水为 40（\"月份 '3' 的薪水\"）+ 60（\"月份 '4' 的薪水\"）= 100。\n- 月份 '2' 的累计薪水为 30（\"月份 '2' 的薪水\"）+ 40（\"月份 '3' 的薪水\"）= 70。\n- 月份 '1' 的累计薪水为 20（\"月份 '1' 的薪水\"）+ 30（\"月份 '2' 的薪水\"）= 50。\n员工 '2' 只有 2 条薪水记录，累计薪水如下:\n- 月份 '2' 的累计薪水为 30（\"月份 '2' 的薪水\"）。\n- 月份 '1' 的累计薪水为 20（\"月份 '1' 的薪水\"）。\n员工 '3' 有 4 条薪水记录，不包括最近一个月的薪水（月份 '4'），累计薪水如下:\n- 月份 '3' 的累计薪水为 60（\"月份 '3' 的薪水\"）。\n- 月份 '2' 的累计薪水为 40（\"月份 '2' 的薪水\"）。\n\n结果表按照 id 升序排序。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 580,
        number: "0580",
        title: "统计各专业学生人数",
        difficulty: "medium",
        description: "表: Student\n\n+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| student_id   | int     |\n| student_name | varchar |\n| gender       | varchar |\n| dept_id      | int     |\n+--------------+---------+\nstudent_id 是该表的主键。\n该表的每一行都表示一个学生的信息。\n\n表: Department\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| dept_id     | int     |\n| dept_name   | varchar |\n+-------------+---------+\ndept_id 是该表的主键。\n该表的每一行包含一个部门的 id 和名称。\n\n编写一个解决方案，为每个部门报告各自的学生人数。\n\n返回按 dept_name 升序排序 的结果表。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入: \nStudent 表:\n+------------+--------------+--------+---------+\n| student_id | student_name | gender | dept_id |\n+------------+--------------+--------+---------+\n| 1          | Jack         | M      | 1       |\n| 2          | Jane         | F      | 1       |\n| 3          | Mark         | M      | 2       |\n+------------+--------------+--------+---------+\nDepartment 表:\n+---------+-------------+\n| dept_id | dept_name   |\n+---------+-------------+\n| 1       | Engineering |\n| 2       | Science     |\n| 3       | Law         |\n+---------+-------------+\n输出: \n+-------------+----------------+\n| dept_name   | student_number |\n+-------------+----------------+\n| Engineering | 2              |\n| Law         | 0              |\n| Science     | 1              |\n+-------------+----------------+\n解释:\n工程学院有两名学生。\n法学院没有学生。\n理学院有一名学生。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 581,
        number: "0581",
        title: "最短无序连续子数组",
        difficulty: "medium",
        description: "给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。\n\n请你找出符合题意的 最短 子数组，并输出它的长度。",
        example: "示例 1：\n\n输入：nums = [2,6,4,8,10,9,15]\n输出：5\n解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。\n\n示例 2：\n\n输入：nums = [1,2,3,4]\n输出：0\n\n示例 3：\n\n输入：nums = [1]\n输出：0\n\n提示：\n\n1 <= nums.length <= 10^4\n-10^5 <= nums[i] <= 10^5",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 582,
        number: "0582",
        title: "杀掉进程",
        difficulty: "medium",
        description: "系统中存在 n 个进程，形成一个有根树结构。给你两个整数数组 pid 和 ppid ，其中 pid[i] 表示第 i 个进程的 ID ，ppid[i] 表示第 i 个进程的父进程 ID 。\n\n每一个进程只有 一个父进程 ，但是可能有 多个子进程 。只有一个进程的 ppid[i] = 0 ，意味着这个进程 没有父进程 。\n\n当一个进程 被杀掉 的时候，它所有的子进程和后代进程都要被杀掉。\n\n给你一个整数 kill 表示要杀掉​​进程的 ID ，返回杀掉该进程后的所有进程 ID 的列表。可以按 任意顺序 返回答案。",
        example: "示例 1：\n\n输入：pid = [1,3,10,5], ppid = [3,0,5,3], kill = 5\n输出：[5,10]\n解释：涂上蓝色的进程是需要被杀掉的进程。\n\n示例 2：\n\n输入：pid = [1], ppid = [0], kill = 1\n输出：[1]\n\n提示：\n\nn == pid.length\nn == ppid.length\n1 <= n <= 5 * 10^4\n1 <= pid[i] <= 5 * 10^4\n0 <= ppid[i] <= 5 * 10^4\npid 中所有值都 不同\n题目保证 kill 在 pid 中\n至多有一个进程没有父进程",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 583,
        number: "0583",
        title: "两个字符串的删除操作",
        difficulty: "medium",
        description: "给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。\n\n每步 可以删除任意一个字符串中的一个字符。",
        example: "示例 1：\n\n输入: word1 = \"sea\", word2 = \"eat\"\n输出: 2\n解释: 第一步将 \"sea\" 变为 \"ea\" ，第二步将 \"eat\" 变为 \"ea\"\n\n示例  2:\n\n输入：word1 = \"leetcode\", word2 = \"etco\"\n输出：4\n\n提示：\n\n1 <= word1.length, word2.length <= 500\nword1 和 word2 只包含小写英文字母",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m*n)",
                spaceComplexity: "O(m*n)"
            }
        ]
    },
    {
        id: 584,
        number: "0584",
        title: "寻找用户推荐人",
        difficulty: "easy",
        description: "表: Customer\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| name        | varchar |\n| referee_id  | int     |\n+-------------+---------+\nid 是该表的主键。\n该表的每一行包含客户的 id、姓名及其推荐人的 id。\n\n编写解决方案，找出那些没有被推荐人推荐的客户的姓名。\n\n返回结果表单没有顺序要求。\n\n结果格式如下所示。",
        example: "示例 1：\n\n输入：\nCustomer 表:\n+----+------+------------+\n| id | name | referee_id |\n+----+------+------------+\n| 1  | Will | null       |\n| 2  | Jane | null       |\n| 3  | Alex | 2          |\n| 4  | Bill | null       |\n| 5  | Zack | 1          |\n| 6  | Mark | 2          |\n+----+------+------------+\n输出：\n+------+\n| name |\n+------+\n| Will |\n| Jane |\n| Bill |\n+------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 585,
        number: "0585",
        title: "2016年的投资",
        difficulty: "medium",
        description: "表: Insurance\n\n+-------------+-------+\n| Column Name | Type  |\n+-------------+-------+\n| pid         | int   |\n| tiv_2015    | float |\n| tiv_2016    | float |\n| lat         | float |\n| lon         | float |\n+-------------+-------+\npid 是这张表的主键。\n表中的每一行都包含一条保险信息，其中：\npid 是投保人的 id 。\ntiv_2015 是该投保人在 2015 年的总投保金额，tiv_2016 是该投保人在 2016 年的总投保金额。\nlat 是投保人所在城市的纬度。lon 是投保人所在城市的经度。\n\n请你编写一个 SQL 查询，报告 2016 年 (tiv_2016) 所有满足下述条件的投保人的投保金额之和：\n\n他在 2015 年的投保额 (tiv_2015) 至少跟一个其他投保人在 2015 年的投保额相同。\n他所在的城市必须与其他投保人都不同（也就是说 (lat, lon) 不能跟其他任何一个投保人完全相同）。\n\n结果四舍五入到小数点后两位。\n\n查询结果格式如下例所示。",
        example: "示例 1：\n\n输入：\nInsurance 表：\n+-----+----------+----------+-----+-----+\n| pid | tiv_2015 | tiv_2016 | lat | lon |\n+-----+----------+----------+-----+-----+\n| 1   | 10       | 5        | 10  | 10  |\n| 2   | 20       | 20       | 20  | 20  |\n| 3   | 10       | 30       | 20  | 20  |\n| 4   | 10       | 40       | 40  | 40  |\n+-----+----------+----------+-----+-----+\n输出：\n+----------+\n| tiv_2016 |\n+----------+\n| 45.00    |\n+----------+\n解释：\n表中的第一条记录：投保人 1 在 2015 年的投保金额为 10，在 2016 年的投保金额为 5 。\n表中的第二条记录：投保人 2 在 2015 年的投保金额为 20，在 2016 年的投保金额为 20 。\n表中的第三条记录：投保人 3 在 2015 年的投保金额为 10，在 2016 年的投保金额为 30 。\n表中的第四条记录：投保人 4 在 2015 年的投保金额为 10，在 2016 年的投保金额为 40 。\n\n投保人 1、3 和 4 在 2015 年的投保额相同，都是 10 。\n投保人 1 在 (10, 10) 的位置，投保人 2 和 3 在 (20, 20) 的位置，投保人 4 在 (40, 40) 的位置。\n\n因为投保人 3 和 4 在 2015 年的投保金额与其他投保人相同，且他们所在的城市与其他投保人都不同，所以他们是答案。\n投保人 1 在 2015 年的投保金额与其他投保人相同，但他所在的城市没有与其他投保人都不同。\n投保人 2 在 2015 年的投保金额与其他投保人不同。\n所以，投保人 3 和 4 在 2016 年的投保金额之和为 30 + 40 = 70 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 586,
        number: "0586",
        title: "订单最多的客户",
        difficulty: "easy",
        description: "表: Orders\n\n+-----------------+----------+\n| Column Name     | Type     |\n+-----------------+----------+\n| order_number    | int      |\n| customer_number | int      |\n+-----------------+----------+\nOrder_number是该表的主键。\n此表包含关于订单ID和客户ID的信息。\n\n编写一个SQL查询，为下了 最多订单 的客户查找 customer_number 。\n\n测试用例生成后， 恰好有一个客户 比任何其他客户下了更多的订单。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入: \nOrders 表:\n+--------------+----------------+\n| order_number | customer_number |\n+--------------+----------------+\n| 1            | 1              |\n| 2            | 2              |\n| 3            | 3              |\n| 4            | 3              |\n+--------------+----------------+\n输出: \n+-----------------+\n| customer_number |\n+-----------------+\n| 3               |\n+-----------------+\n解释: \n customer_number 为 '3' 的顾客有两个订单，比顾客 '1' 或者 '2' 都要多，因为他们只有一个订单。\n所以结果是该顾客的 customer_number ，也就是 3 。\n\n进阶： 如果有多位顾客订单数并列最多，你能找到他们所有的 customer_number 吗？",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 587,
        number: "0587",
        title: "安装栅栏",
        difficulty: "hard",
        description: "在一个二维的花园中，有一些用 (x, y) 坐标表示的树。由于安装费用十分昂贵，你的任务是先用最短的绳子围起所有的树。只有当所有的树都被绳子包围时，花园才能围好栅栏。你需要找到正好位于栅栏边界上的树的坐标。",
        example: "示例 1:\n\n输入: [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]\n输出: [[1,1],[2,0],[3,3],[2,4],[4,2]]\n\n示例 2:\n\n输入: [[1,2],[2,2],[4,2]]\n输出: [[4,2],[2,2],[1,2]]\n\n注意:\n\n所有的点都是不重复的。\n最多有3000个点。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 588,
        number: "0588",
        title: "设计内存文件系统",
        difficulty: "hard",
        description: "设计一个内存文件系统，模拟以下功能：\n\nls： 以字典序返回指定目录下的所有文件和子目录。如果路径是一个文件路径，则返回包含该文件名的列表。\nmkdir：创建一个新目录。如果路径中的父目录不存在，您需要创建缺失的父目录。如果路径已存在，则不执行任何操作。\naddContentToFile：如果文件不存在，则创建具有给定内容的文件。如果文件已经存在，则将给定内容附加到原始内容。\nreadContentFromFile：返回指定文件的内容。\n\n注意：\n\n你可以假设所有文件和目录的路径都是绝对路径，这意味着它们总是从根目录 / 开始。\n你可以假设所有操作的参数都是有效的，即用户不会尝试删除不存在的文件或目录，或者创建已存在的文件或目录。",
        example: "示例:\n\n输入: \n[\"FileSystem\",\"ls\",\"mkdir\",\"addContentToFile\",\"ls\",\"readContentFromFile\"]\n[[],[\"/\"],[\"a/b/c\"],[\"a/b/c/d\",\"hello\"],[\"/\"],[\"a/b/c/d\"]]\n\n输出:\n[null,[],null,null,[\"a\"],\"hello\"]\n\n解释:\nFileSystem fileSystem = new FileSystem();\nfileSystem.ls(\"/\");                         // 返回 []\nfileSystem.mkdir(\"/a/b/c\");                // 创建目录 /a/b/c\nfileSystem.addContentToFile(\"/a/b/c/d\", \"hello\"); // 添加文件 /a/b/c/d，内容为 \"hello\"\nfileSystem.ls(\"/\");                         // 返回 [\"a\"]\nfileSystem.readContentFromFile(\"/a/b/c/d\"); // 返回 \"hello\"",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 589,
        number: "0589",
        title: "N叉树的前序遍历",
        difficulty: "easy",
        description: "给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。\n\nn 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。",
        example: "示例 1：\n\n输入：root = [1,null,3,2,4,null,5,6]\n输出：[1,3,5,6,2,4]\n\n示例 2：\n\n输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n输出：[1,2,3,6,7,11,14,4,8,12,5,9,13,10]\n\n提示：\n\n节点总数在范围 [0, 10^4]内\n0 <= Node.val <= 10^4\nn 叉树的高度小于或等于 1000\n\n进阶：递归法很简单，你可以使用迭代法完成此题吗?",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 590,
        number: "0590",
        title: "N叉树的后序遍历",
        difficulty: "easy",
        description: "给定一个 n 叉树的根节点 root ，返回 其节点值的 后序遍历 。\n\nn 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。",
        example: "示例 1：\n\n输入：root = [1,null,3,2,4,null,5,6]\n输出：[5,6,3,2,4,1]\n\n示例 2：\n\n输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n输出：[2,6,14,11,7,3,12,8,4,13,9,10,5,1]\n\n提示：\n\n节点总数在范围 [0, 10^4] 内\n0 <= Node.val <= 10^4\nn 叉树的高度小于或等于 1000\n\n进阶：递归法很简单，你可以使用迭代法完成此题吗?",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 591,
        number: "0591",
        title: "标签验证器",
        difficulty: "hard",
        description: "给定一个表示代码片段的字符串，你需要实现一个验证器来解析这段代码，并返回它是否合法。合法的代码片段需要遵循以下的所有规则：\n\n1. 代码必须被合法的闭合标签包围。否则，代码是无效的。\n2. 闭合标签（不一定合法）要严格符合格式：<TAG_NAME>TAG_CONTENT</TAG_NAME>。其中，<TAG_NAME>是起始标签，</TAG_NAME>是结束标签。起始和结束标签中的 TAG_NAME 应当相同。当且仅当 TAG_NAME 和 TAG_CONTENT 都是合法的，闭合标签才是合法的。\n3. 合法的 TAG_NAME 仅含有大写字母，长度在范围 [1,9] 之间。否则，该 TAG_NAME 是不合法的。\n4. 合法的 TAG_CONTENT 可以包含其他合法的闭合标签，cdata （请参考规则7）和任意字符（注意参考规则1）除了不匹配的<、不匹配的起始和结束标签、不匹配的或带有不合法 TAG_NAME 的闭合标签。否则，TAG_CONTENT 是不合法的。\n5. 一个起始标签，如果没有具有相同 TAG_NAME 的结束标签与之匹配，是不合法的。反之亦然。不过，你也需要考虑标签嵌套的问题。\n6. 一个<，如果你找不到一个后续的>与之匹配，是不合法的。并且当你找到一个<或</时，所有直到下一个>的前的字符，都应当被解析为 TAG_NAME（不一定合法）。\n7. cdata 有如下格式：<![CDATA[CDATA_CONTENT]]>。CDATA_CONTENT 的范围被定义成 <![CDATA[ 和后续的第一个 ]]>之间的字符。\n8. CDATA_CONTENT 可以包含任意字符。cdata 的功能是阻止验证器解析CDATA_CONTENT，所以即使其中有一些字符可能会被解析为标签（无论合法还是不合法），也应该将它们视为常规字符。",
        example: "示例 1：\n\n输入：code = \"<DIV>This is the first line <![CDATA[<div>]]></DIV>\"\n输出：true\n解释：\n代码被包含在了闭合的标签内：<DIV> 和 </DIV>。\nTAG_NAME 是合法的，TAG_CONTENT 包含了一些字符和 cdata。\n即使 CDATA_CONTENT 含有不匹配的起始标签和不合法的 TAG_NAME，它也应该被视为普通的文本，而不是标签。\n所以 TAG_CONTENT 是合法的，因此代码是合法的。最终返回 true。\n\n示例 2：\n\n输入：code = \"<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>\"\n输出：true\n解释：\n我们首先将代码分割为：start_tag|tag_content|end_tag。\nstart_tag -> \"<DIV>\"\nend_tag -> \"</DIV>\"\ntag_content 也可被分割为：text1|cdata|text2。\ntext1 -> \">>  ![cdata[]] \"\ncdata -> \"<![CDATA[<div>]>]]>\", 其中 CDATA_CONTENT 为 \"<div>]>\"\ntext2 -> \"]]>>]\"\n\n示例 3：\n\n输入：code = \"<A>  <B> </A>   </B>\"\n输出：false\n解释：不匹配的标签不是合法的，例如：\"<A><B></A></B>\"。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 592,
        number: "0592",
        title: "分数加减运算",
        difficulty: "medium",
        description: "给定一个表示分数加减运算的字符串 expression ，你需要返回一个字符串形式的计算结果。\n\n这个结果应该是不可约分的分数，即最简分数。 如果最终结果是一个整数，例如 2，你需要将它转换成分数形式，其分母为 1。所以在上述例子中, 2 应该被转换为 2/1。",
        example: "示例 1:\n\n输入: expression = \"-1/2+1/2\"\n输出: \"0/1\"\n\n示例 2:\n\n输入: expression = \"-1/2+1/2+1/3\"\n输出: \"1/3\"\n\n示例 3:\n\n输入: expression = \"1/3-1/2\"\n输出: \"-1/6\"\n\n提示:\n\n输入和输出字符串只包含 '0' 到 '9' 的数字，以及 '/', '+' 和 '-'。\n输入和输出分数格式均为 ±分子/分母。如果输入的第一个字符是 '-'，那么表示负分数。\n输入只包含合法的最简分数，每个分数的分子与分母的范围是 [1,10]。 如果分母是1，意味着这个分数实际上是一个整数。\n输入的分数个数范围是 [1,10]。\n最终结果的分子与分母保证是 32 位整数范围内的有效整数。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 593,
        number: "0593",
        title: "有效的正方形",
        difficulty: "medium",
        description: "给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。\n\n点的坐标 pi 表示为 [xi, yi] 。输入 不是 按任何顺序给出的。\n\n一个 有效的正方形 有四条等边和四个等角(90度角)。",
        example: "示例 1:\n\n输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]\n输出: true\n\n示例 2:\n\n输入：p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]\n输出：false\n\n示例 3:\n\n输入：p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]\n输出：true\n\n提示:\n\np1.length == p2.length == p3.length == p4.length == 2\n-10^4 <= xi, yi <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 594,
        number: "0594",
        title: "最长和谐子序列",
        difficulty: "easy",
        description: "和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。\n\n现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。\n\n数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。",
        example: "示例 1：\n\n输入：nums = [1,3,2,2,5,2,3,7]\n输出：5\n解释：最长的和谐子序列是 [3,2,2,2,3]\n\n示例 2：\n\n输入：nums = [1,2,3,4]\n输出：2\n\n示例 3：\n\n输入：nums = [1,1,1,1]\n输出：0\n\n提示：\n\n1 <= nums.length <= 2 * 10^4\n-10^9 <= nums[i] <= 10^9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 595,
        number: "0595",
        title: "大的国家",
        difficulty: "easy",
        description: "表: World\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| name        | varchar |\n| continent   | varchar |\n| area        | int     |\n| population  | int     |\n| gdp         | int     |\n+-------------+---------+\nname 是这张表的主键。\n这张表的每一行提供：国家名称、所属大陆、面积、人口和 GDP 值。\n\n如果一个国家满足下述两个条件之一，则认为该国是 大国 ：\n\n面积至少为 300 万平方公里（即，3000000 km^2），或者\n人口至少为 2500 万（即 25000000）\n\n编写一个 SQL 查询以报告 大国 的国家名称、人口和面积。\n\n按 任意顺序 返回结果表。\n\n查询结果格式如下例所示。",
        example: "示例：\n\n输入：\nWorld 表：\n+-------------+-----------+---------+------------+--------------+\n| name        | continent | area    | population | gdp          |\n+-------------+-----------+---------+------------+--------------+\n| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |\n| Albania     | Europe    | 28748   | 2831741    | 12960000000  |\n| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |\n| Andorra     | Europe    | 468     | 78115      | 3712000000   |\n| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |\n+-------------+-----------+---------+------------+--------------+\n输出：\n+-------------+------------+---------+\n| name        | population | area    |\n+-------------+------------+---------+\n| Afghanistan | 25500100   | 652230  |\n| Algeria     | 37100000   | 2381741 |\n+-------------+------------+---------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 596,
        number: "0596",
        title: "超过5名学生的课",
        difficulty: "easy",
        description: "表: Courses\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| student     | varchar |\n| class       | varchar |\n+-------------+---------+\n(student, class)是该表的主键列。\n该表的每一行表示学生的名字和他们注册的班级。\n\n编写一个SQL查询来报告 至少有5个学生 的所有班级。\n\n以 任意顺序 返回结果表。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入: \nCourses table:\n+---------+----------+\n| student | class    |\n+---------+----------+\n| A       | Math     |\n| B       | English  |\n| C       | Math     |\n| D       | Biology  |\n| E       | Math     |\n| F       | Computer |\n| G       | Math     |\n| H       | Math     |\n| I       | Math     |\n+---------+----------+\n输出: \n+---------+\n| class   |\n+---------+\n| Math    |\n+---------+\n解释: \n-数学课有6个学生，所以我们包括它。\n-英语课有1名学生，所以我们不包括它。\n-生物课有1名学生，所以我们不包括它。\n-计算机课有1个学生，所以我们不包括它。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 597,
        number: "0597",
        title: "好友申请 I：总体通过率",
        difficulty: "easy",
        description: "表：FriendRequest\n\n+----------------+---------+\n| Column Name    | Type    |\n+----------------+---------+\n| sender_id      | int     |\n| send_to_id     | int     |\n| request_date   | date    |\n+----------------+---------+\n此表没有主键，它可能包含重复项。\n该表包含发送请求的用户的 ID ，接受请求的用户的 ID 以及请求的日期。\n\n表：RequestAccepted\n\n+----------------+---------+\n| Column Name    | Type    |\n+----------------+---------+\n| requester_id   | int     |\n| accepter_id    | int     |\n| accept_date    | date    |\n+----------------+---------+\n此表没有主键，它可能包含重复项。\n该表包含发送请求的用户的 ID ，接受请求的用户的 ID 以及请求通过的日期。\n\n写一个查询语句，求出好友申请的通过率，用 2 位小数表示。通过率由接受好友申请的数目除以申请总数。\n\n提示：\n\n通过的好友申请不一定都在表 friend_request 中。你只需要统计总的被通过的申请数（不管它们在不在表 FriendRequest 中），和表 FriendRequest 中总的申请数。\n一个好友申请发送者有可能会给接受者发几条好友申请，也有可能一个好友申请会被通过好几次。这种情况下，重复的好友申请只统计一次。\n如果一个好友申请都没有，通过率为 0.00 。\n\n查询结果应该如下例所示。",
        example: "示例 1：\n\n输入：\nFriendRequest 表：\n+-----------+------------+--------------+\n| sender_id | send_to_id | request_date |\n+-----------+------------+--------------+\n| 1         | 2          | 2016/06/01   |\n| 1         | 3          | 2016/06/01   |\n| 1         | 4          | 2016/06/01   |\n| 2         | 3          | 2016/06/02   |\n| 3         | 4          | 2016/06/09   |\n+-----------+------------+--------------+\nRequestAccepted 表：\n+--------------+-------------+-------------+\n| requester_id | accepter_id | accept_date |\n+--------------+-------------+-------------+\n| 1            | 2           | 2016/06/03  |\n| 1            | 3           | 2016/06/08  |\n| 2            | 3           | 2016/06/08  |\n| 3            | 4           | 2016/06/09  |\n| 3            | 4           | 2016/06/10  |\n+--------------+-------------+-------------+\n输出：\n+-------------+\n| accept_rate |\n+-------------+\n| 0.8         |\n+-------------+\n解释：\n总共有 5 个请求，有 4 个不同的通过请求，所以通过率是 0.80",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 598,
        number: "0598",
        title: "范围求和 II",
        difficulty: "easy",
        description: "给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。\n\n在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。",
        example: "示例 1:\n\n输入: m = 3, n = 3，ops = [[2,2],[3,3]]\n输出: 4\n解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。\n\n示例 2:\n\n输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]\n输出: 4\n\n示例 3:\n\n输入: m = 3, n = 3, ops = []\n输出: 9\n\n提示:\n\n1 <= m, n <= 4 * 10^4\n0 <= ops.length <= 10^4\nops[i].length == 2\n1 <= ai <= m\n1 <= bi <= n",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(k)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 599,
        number: "0599",
        title: "两个列表的最小索引总和",
        difficulty: "easy",
        description: "假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。\n\n你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。",
        example: "示例 1:\n\n输入: list1 = [\"Shogun\", \"Tapioca Express\", \"Burger King\", \"KFC\"]，list2 = [\"Piatti\", \"The Grill at Torrey Pines\", \"Hungry Hunter Steakhouse\", \"Shogun\"]\n输出: [\"Shogun\"]\n解释: 他们唯一共同喜爱的餐厅是\"Shogun\"。\n\n示例 2:\n\n输入:list1 = [\"Shogun\", \"Tapioca Express\", \"Burger King\", \"KFC\"]，list2 = [\"KFC\", \"Shogun\", \"Burger King\"]\n输出: [\"Shogun\"]\n解释: 他们共同喜爱且具有最小索引和的餐厅是\"Shogun\"，它有最小的索引和1(0+1)。\n\n提示:\n\n1 <= list1.length, list2.length <= 1000\n1 <= list1[i].length, list2[i].length <= 30\nlist1[i] 和 list2[i] 由空格 ' ' 和英文字母组成。\nlist1 的所有字符串都是 唯一 的。\nlist2 中的所有字符串都是 唯一 的。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n+m)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 600,
        number: "0600",
        title: "不含连续1的非负整数",
        difficulty: "hard",
        description: "给定一个正整数 n ，返回范围在 [0, n] 都非负整数中，其二进制表示不包含 连续的 1 的个数。",
        example: "示例 1:\n\n输入: n = 5\n输出: 5\n解释: \n下面是带有相应二进制表示的非负整数<= 5：\n0 : 0\n1 : 1\n2 : 10\n3 : 11\n4 : 100\n5 : 101\n其中，只有整数3违反规则（有两个连续的1），其他5个满足规则。\n\n示例 2:\n\n输入: n = 1\n输出: 2\n\n示例 3:\n\n输入: n = 2\n输出: 3\n\n提示:\n\n1 <= n <= 10^9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(log n)"
            }
        ]
    },
    {
        id: 601,
        number: "0601",
        title: "体育馆的人流量",
        difficulty: "hard",
        description: "表：Stadium\n\n+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| id            | int     |\n| visit_date    | date    |\n| people        | int     |\n+---------------+---------+\n\nvisit_date 是表的主键\n每日人流量信息被记录在这三列信息中：序号 (id)、日期 (visit_date)、人流量 (people)\n每天只有一行记录，日期随着 id 的增加而增加\n\n编写一个 SQL 查询以找出每行的人数大于或等于 100 且 id 连续的三行或更多行记录。\n\n返回按 visit_date 升序排列的结果表。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入：\nStadium 表：\n+------+------------+-----------+\n| id   | visit_date | people    |\n+------+------------+-----------+\n| 1    | 2017-01-01 | 10        |\n| 2    | 2017-01-02 | 109       |\n| 3    | 2017-01-03 | 150       |\n| 4    | 2017-01-04 | 99        |\n| 5    | 2017-01-05 | 145       |\n| 6    | 2017-01-06 | 1455      |\n| 7    | 2017-01-07 | 199       |\n| 8    | 2017-01-09 | 188       |\n+------+------------+-----------+\n输出：\n+------+------------+-----------+\n| id   | visit_date | people    |\n+------+------------+-----------+\n| 5    | 2017-01-05 | 145       |\n| 6    | 2017-01-06 | 1455      |\n| 7    | 2017-01-07 | 199       |\n| 8    | 2017-01-09 | 188       |\n+------+------------+-----------+\n解释：\nid 为 5、6、7、8 的四行 id 连续，并且每行都有 >= 100 的人数记录。\n请注意，即使第 7 行和第 8 行的 visit_date 不是连续的，输出也应当包含第 8 行，因为我们只需要考虑 id 连续的记录。\n不输出 id 为 2、3 的行，因为至少需要三条 id 连续的记录。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 602,
        number: "0602",
        title: "好友申请 II ：谁有最多的好友",
        difficulty: "medium",
        description: "表：RequestAccepted\n\n+----------------+---------+\n| Column Name    | Type    |\n+----------------+---------+\n| requester_id   | int     |\n| accepter_id    | int     |\n| accept_date    | date    |\n+----------------+---------+\n(requester_id, accepter_id) 是这张表的主键。\n该表包含发送好友请求的用户和接受好友请求的用户的 ID ，以及好友请求通过的日期。\n\n写一个查询语句，找出拥有最多的好友的人和他拥有的好友数目。\n\n生成的测试用例保证拥有最多好友数目的只有 1 个人。\n\n查询结果格式如下所示。",
        example: "示例：\n\n输入：\nRequestAccepted 表：\n+--------------+-------------+-------------+\n| requester_id | accepter_id | accept_date |\n+--------------+-------------+-------------+\n| 1            | 2           | 2016/06/03  |\n| 1            | 3           | 2016/06/08  |\n| 2            | 3           | 2016/06/08  |\n| 3            | 4           | 2016/06/09  |\n+--------------+-------------+-------------+\n输出：\n+----+-----+\n| id | num |\n+----+-----+\n| 3  | 3   |\n+----+-----+\n解释：\nid 为 3 的用户是 id 为 1 和 2 的用户的好友，同时 id 为 3 的用户是 id 为 4 的用户的好友。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 603,
        number: "0603",
        title: "连续空余座位",
        difficulty: "easy",
        description: "表: Cinema\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| seat_id     | int  |\n| free        | bool |\n+-------------+------+\n\nseat_id 是该表的主键。\n该表中的每一行，都表示一个座位的是否空闲。\n1 表示空闲，0 表示被占用。\n\n编写一个 SQL 查询，报告所有连续空余座位都是成对的。也就是说，要求连续两个空余的座位，座位表示为连续的整数 id 。\n\n结果按 seat_id 升序排列。\n\n查询结果的格式如下例所示。",
        example: "示例 1：\n\n输入: \nCinema 表:\n+---------+------+\n| seat_id | free |\n+---------+------+\n| 1       | 1    |\n| 2       | 0    |\n| 3       | 1    |\n| 4       | 1    |\n| 5       | 1    |\n+---------+------+\n输出: \n+---------+\n| seat_id |\n+---------+\n| 3       |\n| 4       |\n| 5       |\n+---------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 604,
        number: "0604",
        title: "迭代压缩字符串",
        difficulty: "easy",
        description: "设计并实现一个迭代压缩字符串的数据结构。给定的压缩字符串的格式为：\n\nL1[c1L2[c2L3[c3]...]]，其中 ci 是字符串，Li 是 ci 在解压缩后的字符串重复的次数。\n\n你的任务是实现一个数据结构，有如下操作：\n\n- next()：如果压缩字符串中有更多的字符，则返回下一个字符，否则返回一个空格。\n- hasNext()：如果还有字符可以被返回，则返回 true，否则返回 false。",
        example: "示例：\n\nStringIterator iterator = new StringIterator(\"L1[a]L2[b]c\");\n\niterator.next(); // 返回 'a'\niterator.next(); // 返回 'a'\niterator.next(); // 返回 'b'\niterator.next(); // 返回 'b'\niterator.next(); // 返回 'c'\niterator.hasNext(); // 返回 false\niterator.next(); // 返回 ' '\n\n注意：\n\n1. 请记住，字符串的格式为 L1[c1L2[c2L3[c3]...]]，其中 ci 是字符串，Li 是 ci 在解压缩后的字符串重复的次数。\n2. 字符只会包含小写字母。\n3. 1 <= Li <= 100，即重复次数不会超过 100。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 605,
        number: "0605",
        title: "种花问题",
        difficulty: "easy",
        description: "假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。\n\n给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false 。",
        example: "示例 1：\n\n输入：flowerbed = [1,0,0,0,1], n = 1\n输出：true\n\n示例 2：\n\n输入：flowerbed = [1,0,0,0,1], n = 2\n输出：false\n\n提示：\n\n1 <= flowerbed.length <= 2 * 10^4\nflowerbed[i] 为 0 或 1\nflowerbed 中不存在相邻的两朵花\n0 <= n <= flowerbed.length",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 606,
        number: "0606",
        title: "根据二叉树创建字符串",
        difficulty: "easy",
        description: "给你二叉树的根节点 root ，请你采用前序遍历的方式，将二叉树转化为一个由括号和整数组成的字符串，返回构造出的字符串。\n\n空节点使用一对空括号对 \"()\" 表示，转化后需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。",
        example: "示例 1：\n\n输入：root = [1,2,3,4]\n输出：\"1(2(4))(3)\"\n解释：初步转化后得到 \"1(2(4)())(3()())\" ，但省略所有不必要的空括号对后，字符串应该是\"1(2(4))(3)\" 。\n\n示例 2：\n\n输入：root = [1,2,3,null,4]\n输出：\"1(2()(4))(3)\"\n解释：和第一个示例类似，但是无法省略第一个空括号对，否则会破坏对输入原始二叉树的表示。\n\n提示：\n\n树中节点的数目范围是 [1, 10^4]\n-1000 <= Node.val <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 607,
        number: "0607",
        title: "销售员",
        difficulty: "easy",
        description: "表: SalesPerson\n\n+-----------------+---------+\n| Column Name     | Type    |\n+-----------------+---------+\n| sales_id        | int     |\n| name            | varchar |\n| salary          | int     |\n| commission_rate | int     |\n| hire_date       | date    |\n+-----------------+---------+\nsales_id 是该表的主键列。\n该表的每一行都显示了销售人员的姓名和 ID ，以及他们的工资、佣金率和雇佣日期。\n\n表: Company\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| com_id      | int     |\n| name        | varchar |\n| city        | varchar |\n+-------------+---------+\ncom_id 是该表的主键列。\n该表的每一行都表示公司的名称和 ID ，以及公司所在的城市。\n\n表: Orders\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| order_id    | int  |\n| order_date  | date |\n| com_id      | int  |\n| sales_id    | int  |\n| amount      | int  |\n+-------------+------+\norder_id 是该表的主键列。\ncom_id 是 Company 表中 com_id 的外键。\nsales_id 是来自销售员表 sales_id 的外键。\n该表的每一行包含一个订单的信息。这包括公司的 ID 、销售人员的 ID 、订单日期和支付的金额。\n\n编写一个SQL查询，报告没有任何与名为 \"RED\" 的公司相关的订单的所有销售人员的姓名。\n\n以 任意顺序 返回结果表。\n\n查询结果格式如下所示。",
        example: "示例：\n\n输入：\nSalesPerson 表:\n+----------+------+--------+-----------------+------------+\n| sales_id | name | salary | commission_rate | hire_date  |\n+----------+------+--------+-----------------+------------+\n| 1        | John | 100000 | 6               | 4/1/2006   |\n| 2        | Amy  | 12000  | 5               | 5/1/2010   |\n| 3        | Mark | 65000  | 12              | 12/25/2008 |\n| 4        | Pam  | 25000  | 25              | 1/1/2005   |\n| 5        | Alex | 5000   | 10              | 2/3/2007   |\n+----------+------+--------+-----------------+------------+\nCompany 表:\n+--------+--------+----------+\n| com_id | name   | city     |\n+--------+--------+----------+\n| 1      | RED    | Boston   |\n| 2      | ORANGE | New York |\n| 3      | YELLOW | Boston   |\n| 4      | GREEN  | Austin   |\n+--------+--------+----------+\nOrders 表:\n+----------+------------+--------+----------+--------+\n| order_id | order_date | com_id | sales_id | amount |\n+----------+------------+--------+----------+--------+\n| 1        | 1/1/2014   | 3      | 4        | 10000  |\n| 2        | 2/1/2014   | 4      | 5        | 5000   |\n| 3        | 3/1/2014   | 1      | 1        | 50000  |\n| 4        | 4/1/2014   | 1      | 4        | 25000  |\n+----------+------------+--------+----------+--------+\n输出：\n+------+\n| name |\n+------+\n| Amy  |\n| Mark |\n| Alex |\n+------+\n解释：\n根据表 orders 中的订单 '3' 和 '4' ，容易看出只有 'John' 和 'Pam' 两个销售员曾经向公司 'RED' 销售过。\n所以我们需要输出表 salesperson 中所有其他人的名字。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 608,
        number: "0608",
        title: "树节点",
        difficulty: "medium",
        description: "表: Tree\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| id          | int  |\n| p_id        | int  |\n+-------------+------+\nid 是该表的主键。\n该表的每一行包含一个节点的 id 和其父节点的 id。\n给定一个 Tree 表，树中每个节点属于以下三种类型之一:\n\n- 叶子：如果这个节点没有任何子节点。\n- 根：如果这个节点是整棵树的根节点。\n- 内部节点：如果这个节点既不是叶子节点也不是根节点。\n\n写一个查询语句，报告 Tree 表中每个节点的类型。\n\n返回的结果按照 id 排序。\n\n查询结果的格式如下所示。",
        example: "示例 1:\n\n输入：\nTree table:\n+----+------+\n| id | p_id |\n+----+------+\n| 1  | null |\n| 2  | 1    |\n| 3  | 1    |\n| 4  | 2    |\n| 5  | 2    |\n+----+------+\n输出：\n+----+-------+\n| id | type  |\n+----+-------+\n| 1  | Root  |\n| 2  | Inner |\n| 3  | Leaf  |\n| 4  | Leaf  |\n| 5  | Leaf  |\n+----+-------+\n解释：\n节点 1 是根节点，因为它的父节点是 NULL ，同时它有子节点 2 和 3 。\n节点 2 是内部节点，因为它有父节点 1 ，也有子节点 4 和 5 。\n节点 3、4 和 5 都是叶子节点，因为它们都有父节点同时没有子节点。\n\n示例 2:\n\n输入：\nTree table:\n+----+------+\n| id | p_id |\n+----+------+\n| 1  | null |\n+----+------+\n输出：\n+----+-------+\n| id | type  |\n+----+-------+\n| 1  | Root  |\n+----+-------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 609,
        number: "0609",
        title: "在系统中查找重复文件",
        difficulty: "medium",
        description: "给你一个目录信息列表 paths ，包括目录路径，以及该目录中的所有文件及其内容，请你按路径返回文件系统中的所有重复文件。答案可按 任意顺序 返回。\n\n一组重复的文件至少包括 两个 具有完全相同内容的文件。\n\n输入 列表中的单个目录信息字符串的格式如下：\n\n\"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)\"\n\n这意味着，在目录 root/d1/d2/.../dm 下，有 n 个文件 ( f1.txt, f2.txt ... fn.txt ) 的内容分别是 ( f1_content, f2_content ... fn_content ) 。注意：n >= 1 且 m >= 0 。如果 m = 0 ，则表示该目录是根目录。\n\n输出 是由 重复文件路径组 构成的列表。其中每个组由所有具有相同内容文件的文件路径组成。文件路径是具有下列格式的字符串：\n\n\"directory_path/file_name.txt\"",
        example: "示例 1：\n\n输入：paths = [\"root/a 1.txt(abcd) 2.txt(efgh)\",\"root/c 3.txt(abcd)\",\"root/c/d 4.txt(efgh)\",\"root 4.txt(efgh)\"]\n输出：[[\"root/a/2.txt\",\"root/c/d/4.txt\",\"root/4.txt\"],[\"root/a/1.txt\",\"root/c/3.txt\"]]\n\n示例 2：\n\n输入：paths = [\"root/a 1.txt(abcd) 2.txt(efgh)\",\"root/c 3.txt(abcd)\",\"root/c/d 4.txt(efgh)\"]\n输出：[[\"root/a/2.txt\",\"root/c/d/4.txt\"],[\"root/a/1.txt\",\"root/c/3.txt\"]]\n\n提示：\n\n1 <= paths.length <= 2 * 10^4\n1 <= paths[i].length <= 3000\n1 <= sum(paths[i].length) <= 5 * 10^5\npaths[i] 由英文字母、数字、字符 '/'、'.'、'('、')' 和 ' ' 组成\n你可以假设在同一目录中没有任何文件或目录共享相同的名称。\n你可以假设每个给定的目录信息代表一个唯一的目录。目录路径和文件信息用单个空格分隔。\n\n进阶：\n\n假设您有一个真正的文件系统，您将如何搜索重复文件？广度搜索还是宽度搜索？\n如果文件内容非常大，您将如何修改您的解决方案？\n如果每次只能读取 1 kb 的文件，您将如何修改解决方案？\n修改后的解决方案的时间复杂度是多少？其中最耗时的部分和消耗内存的部分是什么？如何优化？\n如何确保您发现的重复文件不是误报？",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*k)",
                spaceComplexity: "O(n*k)"
            }
        ]
    },
    {
        id: 610,
        number: "0610",
        title: "判断三角形",
        difficulty: "easy",
        description: "表: Triangle\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| x           | int  |\n| y           | int  |\n| z           | int  |\n+-------------+------+\n(x, y, z) 是该表的主键列。\n该表的每一行包含三个线段的长度。\n\n写一个 SQL 查询，每三个线段报告它们是否可以形成一个三角形。\n\n以 任意顺序 返回结果表。\n\n查询结果格式如下所示。",
        example: "示例 1：\n\n输入：\nTriangle 表:\n+----+----+----+\n| x  | y  | z  |\n+----+----+----+\n| 13 | 15 | 30 |\n| 10 | 20 | 15 |\n+----+----+----+\n输出：\n+----+----+----+----------+\n| x  | y  | z  | triangle |\n+----+----+----+----------+\n| 13 | 15 | 30 | No       |\n| 10 | 20 | 15 | Yes      |\n+----+----+----+----------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 611,
        number: "0611",
        title: "有效三角形的个数",
        difficulty: "medium",
        description: "给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。",
        example: "示例 1:\n\n输入: nums = [2,2,3,4]\n输出: 3\n解释:\n有效的组合是: \n2,3,4 (使用第一个 2)\n2,3,4 (使用第二个 2)\n2,2,3\n\n示例 2:\n\n输入: nums = [4,2,3,4]\n输出: 4\n\n提示:\n\n1 <= nums.length <= 1000\n0 <= nums[i] <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 612,
        number: "0612",
        title: "平面上的最近距离",
        difficulty: "medium",
        description: "表：Point2D\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| x           | int  |\n| y           | int  |\n+-------------+------+\n(x, y) 是这张表的主键\n这张表的每一行包含一个点的坐标 (x, y)\n\n计算出平面上所有点之间的最近距离，保留 2 位小数。\n\n结果表的格式如下所示。",
        example: "示例：\n\n输入：\nPoint2D 表：\n+----+----+\n| x  | y  |\n+----+----+\n| -1 | -1 |\n| 0  | 0  |\n| -1 | -2 |\n+----+----+\n输出：\n+----------+\n| shortest |\n+----------+\n| 1.00     |\n+----------+\n解释：最近距离是 1.00 ，从点 (-1, -1) 到点 (-1, -2) 或者从点 (-1, -2) 到点 (0, 0) 都可以得到。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 613,
        number: "0613",
        title: "直线上的最近距离",
        difficulty: "easy",
        description: "表：Point\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| x           | int  |\n+-------------+------+\n\nx 是这张表的主键列。\n这张表的每一行表示 x 轴上一个点的位置。\n\n写一个 SQL 查询，报告在 x 轴上两个最近点之间的最小距离。\n\n查询结果格式如下例所示。",
        example: "示例：\n\n输入：\nPoint 表：\n+----+\n| x  |\n+----+\n| -1 |\n| 0  |\n| 2  |\n+----+\n输出：\n+----------+\n| shortest |\n+----------+\n| 1        |\n+----------+\n解释：最近距离是 1 ，从点 -1 到点 0 或者从点 0 到点 2 都可以得到。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 614,
        number: "0614",
        title: "二级关注者",
        difficulty: "medium",
        description: "表: Follow\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| followee    | varchar |\n| follower    | varchar |\n+-------------+---------+\n(followee, follower) 是这个表的主键。\n该表包含关注关系中的关注者和被关注者的用户名。\n\n写出 SQL 语句，找出那些同时关注着两个或更多其他用户的用户。\n\n按任意顺序返回结果表。\n\n查询结果的格式如下例所示。",
        example: "示例 1:\n\n输入：\nFollow 表：\n+----------+----------+\n| followee | follower |\n+----------+----------+\n| Alice    | Bob      |\n| Bob      | Cena     |\n| Bob      | Donald   |\n| Donald   | Edward   |\n+----------+----------+\n输出：\n+----------+-----+\n| follower | num |\n+----------+-----+\n| Bob      | 2   |\n+----------+-----+\n解释：\nBob 关注了 2 个用户 (Alice 和 Donald)。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 615,
        number: "0615",
        title: "平均工资：部门与公司比较",
        difficulty: "hard",
        description: "表: Salary\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| id          | int  |\n| employee_id | int  |\n| amount      | int  |\n| pay_date    | date |\n+-------------+------+\n(id, employee_id, pay_date) 是这个表的主键。\n这个表格包含员工的薪资信息。\n\n表: Employee\n\n+---------------+------+\n| Column Name   | Type |\n+---------------+------+\n| employee_id   | int  |\n| department_id | int  |\n+---------------+------+\nemployee_id 是这个表的主键。\n这个表格包含员工和部门的关系。\n\n写一个查询 SQL 来查找每个部门的平均工资与公司的平均工资的比较结果 (高于 / 低于 / 相同)。\n\n查询结果格式如下例所示。",
        example: "示例 1:\n\n输入：\nSalary 表:\n+----+-------------+--------+------------+\n| id | employee_id | amount | pay_date   |\n+----+-------------+--------+------------+\n| 1  | 1           | 9000   | 2017/03/31 |\n| 2  | 2           | 6000   | 2017/03/31 |\n| 3  | 3           | 10000  | 2017/03/31 |\n| 4  | 1           | 7000   | 2017/02/28 |\n| 5  | 2           | 6000   | 2017/02/28 |\n| 6  | 3           | 8000   | 2017/02/28 |\n+----+-------------+--------+------------+\nEmployee 表:\n+-------------+---------------+\n| employee_id | department_id |\n+-------------+---------------+\n| 1           | 1             |\n| 2           | 2             |\n| 3           | 2             |\n+-------------+---------------+\n输出：\n+-----------+---------------+------------+\n| pay_month | department_id | comparison |\n+-----------+---------------+------------+\n| 2017-02   | 1             | same       |\n| 2017-03   | 1             | higher     |\n| 2017-02   | 2             | same       |\n| 2017-03   | 2             | lower      |\n+-----------+---------------+------------+\n解释：\n在三月，公司的平均工资是 (9000+6000+10000)/3 = 8333.33...\n部门 '1' 的平均工资是 9000，比公司的平均工资高。\n部门 '2' 的平均工资是 (6000 + 10000)/2 = 8000，比公司的平均工资低。\n\n在二月，公司的平均工资是 (7000+6000+8000)/3 = 7000\n部门 '1' 的平均工资是 7000，和公司的平均工资相同。\n部门 '2' 的平均工资是 (6000 + 8000)/2 = 7000，和公司的平均工资相同。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 616,
        number: "0616",
        title: "给字符串添加加粗标签",
        difficulty: "medium",
        description: "给你一个字符串 s 和一个字符串列表 words ，你需要将在字符串列表中出现过的 s 的子串添加加粗闭合标签 <b> 和 </b> 。\n\n如果两个子串有重叠部分，你需要把它们一起用一对闭合标签包围起来。同理，如果两个子字符串连续被加粗，那么你也需要把它们合起来用一对加粗标签包围。\n\n返回添加加粗标签后的字符串 s 。",
        example: "示例 1：\n\n输入：s = \"abcxyz123\", words = [\"abc\",\"123\"]\n输出：\"<b>abc</b>xyz<b>123</b>\"\n\n示例 2：\n\n输入：s = \"aaabbcc\", words = [\"aaa\",\"aab\",\"bc\"]\n输出：\"<b>aaabbc</b>c\"\n解释：\n\"aaabbcc\" 的子串有 \"aaa\"、\"aab\" 和 \"bc\" 。\n- \"aaa\" 从下标 0 开始，所以加粗后的字符串是 \"<b>aaa</b>bbcc\" 。\n- \"aab\" 从下标 1 开始，所以加粗后的字符串是 \"a<b>aab</b>bcc\" 。但是下标 1 到 3 已经被加粗了，所以最终结果是 \"<b>aaab</b>bcc\" 。\n- \"bc\" 从下标 4 开始，所以加粗后的字符串是 \"<b>aaab</b><b>bc</b>c\" 。但是下标 4 到 5 已经被加粗了，所以最终结果是 \"<b>aaabc</b>c\" 。\n\n提示：\n\n1 <= s.length <= 1000\n0 <= words.length <= 100\n1 <= words[i].length <= 1000\ns 和 words[i] 由英文字母和数字组成\nwords 中的所有字符串互不相同",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*m)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 617,
        number: "0617",
        title: "合并二叉树",
        difficulty: "easy",
        description: "给你两棵二叉树： root1 和 root2 。\n\n想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为 null 的节点将直接作为新二叉树的节点。\n\n返回合并后的二叉树。\n\n注意: 合并过程必须从两个树的根节点开始。",
        example: "示例 1：\n\n输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]\n输出：[3,4,5,5,4,null,7]\n\n示例 2：\n\n输入：root1 = [1], root2 = [1,2]\n输出：[2,2]\n\n提示：\n\n两棵树中的节点数目在范围 [0, 2000] 内\n-10^4 <= Node.val <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(h)"
            }
        ]
    },
    {
        id: 618,
        number: "0618",
        title: "学生地理信息报告",
        difficulty: "hard",
        description: "表: Student\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| name        | varchar |\n| continent   | varchar |\n+-------------+---------+\n该表没有主键。它可能包含重复的行。\n该表的每一行表示学生的名字和他们来自的大陆。\n\n写一个解决方案来重新格式化表格，使得新的表格有以下的列:\n\nAmerica: 所有来自美洲的学生名单。\nAsia: 所有来自亚洲的学生名单。\nEurope: 所有来自欧洲的学生名单。\n每个大洲的学生名单应该按字典顺序排列。\n\n结果格式如下所示的示例。",
        example: "示例 1:\n\n输入: \nStudent table:\n+--------+-----------+\n| name   | continent |\n+--------+-----------+\n| Jane   | America   |\n| Pascal | Europe    |\n| Xi     | Asia      |\n| Jack   | America   |\n+--------+-----------+\n输出: \n+---------+------+--------+\n| America | Asia | Europe |\n+---------+------+--------+\n| Jack    | Xi   | Pascal |\n| Jane    | null | null   |\n+---------+------+--------+\n\n示例 2:\n\n输入: \nStudent table:\n+--------+-----------+\n| name   | continent |\n+--------+-----------+\n| Jane   | America   |\n| Pascal | Europe    |\n| Xi     | Asia      |\n| Jack   | America   |\n| Yash   | Asia      |\n+--------+-----------+\n输出: \n+---------+------+--------+\n| America | Asia | Europe |\n+---------+------+--------+\n| Jack    | Xi   | Pascal |\n| Jane    | Yash | null   |\n+---------+------+--------+",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 619,
        number: "0619",
        title: "只出现一次的最大数字",
        difficulty: "easy",
        description: "表: MyNumbers\n\n+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| num         | int  |\n+-------------+------+\n这张表没有主键。可能会有重复的行。\n这个表的每一行都包含一个整数。\n\n单一数字是在表中只出现一次的数字。\n\n找出最大的单一数字。如果不存在单一数字，则返回 null。\n\n查询结果如下例所示。",
        example: "示例 1：\n\n输入：\nMyNumbers 表：\n+-----+\n| num |\n+-----+\n| 8   |\n| 8   |\n| 3   |\n| 3   |\n| 1   |\n| 4   |\n| 5   |\n| 6   |\n+-----+\n输出：\n+-----+\n| num |\n+-----+\n| 6   |\n+-----+\n解释：单一数字有 1、4、5 和 6。\n6 是最大的单一数字，返回 6。\n\n示例 2：\n\n输入：\nMyNumbers table:\n+-----+\n| num |\n+-----+\n| 8   |\n| 8   |\n| 7   |\n| 7   |\n| 3   |\n| 3   |\n| 3   |\n+-----+\n输出：\n+------+\n| num  |\n+------+\n| null |\n+------+\n解释：表中不存在单一数字，所以返回 null。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 620,
        number: "0620",
        title: "有趣的电影",
        difficulty: "easy",
        description: "表: Cinema\n\n+----------------+----------+\n| Column Name    | Type     |\n+----------------+----------+\n| id             | int      |\n| movie          | varchar  |\n| description    | varchar  |\n| rating         | float    |\n+----------------+----------+\nid 是该表的主键。\n每行包含有关电影名称、描述和评分的信息。\n\n编写一个 SQL 查询，报告所有影片描述为 非 boring (不无聊) 的并且 id 为奇数 的影片的名称。\n\n返回结果按 rating 降序排列。\n\n查询结果格式如下示例所示。",
        example: "示例 1：\n\n输入：\nCinema 表：\n+----+------------+-------------+--------+\n| id | movie      | description | rating |\n+----+------------+-------------+--------+\n| 1  | War        | great 3D    | 8.9    |\n| 2  | Science    | fiction     | 8.5    |\n| 3  | irish      | boring      | 6.2    |\n| 4  | Ice song   | Fantacy     | 8.6    |\n| 5  | House card | Interesting | 9.1    |\n+----+------------+-------------+--------+\n输出：\n+------------+-------------+--------+\n| movie      | description | rating |\n+------------+-------------+--------+\n| House card | Interesting | 9.1    |\n| War        | great 3D    | 8.9    |\n+------------+-------------+--------+\n解释：\nWe have three movies with odd-numbered IDs: 1, 3, and 5. The movie with ID = 3 is boring so we don't include it in the answer.",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 621,
        number: "0621",
        title: "任务调度器",
        difficulty: "medium",
        description: "给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。\n\n然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。\n\n你需要计算完成所有任务所需要的 最短时间 。",
        example: "示例 1：\n\n输入：tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2\n输出：8\n解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B\n     在本示例中，两个相同类型任务之间必须间隔长度为 n = 2 的冷却时间，而执行一个任务只需要一个单位时间，所以中间出现了（待命）状态。 \n\n示例 2：\n\n输入：tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 0\n输出：6\n解释：在这种情况下，任何大小为 6 的排列都可以满足要求，因为 n = 0\n[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"]\n[\"A\",\"B\",\"A\",\"B\",\"A\",\"B\"]\n[\"B\",\"B\",\"B\",\"A\",\"A\",\"A\"]\n...\n诸如此类\n\n示例 3：\n\n输入：tasks = [\"A\",\"A\",\"A\",\"A\",\"A\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\"], n = 2\n输出：16\n解释：一种可能的解决方案是：\n     A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> (待命) -> (待命) -> A -> (待命) -> (待命) -> A\n\n提示：\n\n1 <= task.length <= 10^4\ntasks[i] 是大写英文字母\nn 的取值范围为 [0, 100]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 622,
        number: "0622",
        title: "设计循环队列",
        difficulty: "medium",
        description: "设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为\"环形缓冲器\"。\n\n循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。\n\n你的实现应该支持如下操作：\n\nMyCircularQueue(k): 构造器，设置队列长度为 k 。\nFront: 从队首获取元素。如果队列为空，返回 -1 。\nRear: 获取队尾元素。如果队列为空，返回 -1 。\nenQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。\ndeQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。\nisEmpty(): 检查循环队列是否为空。\nisFull(): 检查循环队列是否已满。",
        example: "示例：\n\nMyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3\ncircularQueue.enQueue(1);  // 返回 true\ncircularQueue.enQueue(2);  // 返回 true\ncircularQueue.enQueue(3);  // 返回 true\ncircularQueue.enQueue(4);  // 返回 false，队列已满\ncircularQueue.Rear();  // 返回 3\ncircularQueue.isFull();  // 返回 true\ncircularQueue.deQueue();  // 返回 true\ncircularQueue.enQueue(4);  // 返回 true\ncircularQueue.Rear();  // 返回 4\n\n提示：\n\n所有的值都在 0 至 1000 的范围内；\n操作数将在 1 至 1000 的范围内；\n请不要使用内置的队列库。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 623,
        number: "0623",
        title: "在二叉树中增加一行",
        difficulty: "medium",
        description: "给定一个二叉树的根 root 和两个整数 val 和 depth ，在给定的深度 depth 处添加一个值为 val 的节点行。\n\n注意，根节点 root 位于深度 1 。\n\n加法规则如下:\n\n给定整数 depth，对于深度为 depth - 1 的每个非空树节点 cur ，创建两个值为 val 的树节点作为 cur 的左子树根和右子树根。\ncur 原来的左子树应该是新的左子树根的左子树。\ncur 原来的右子树应该是新的右子树根的右子树。\n如果 depth == 1 意味着 depth - 1 根本没有深度，那么创建一个树节点，值 val 作为整个原始树的新根，而原始树就是新根的左子树。",
        example: "示例 1:\n\n输入: root = [4,2,6,3,1,5], val = 1, depth = 2\n输出: [4,1,1,2,null,null,6,3,1,5]\n\n示例 2:\n\n输入: root = [4,2,null,3,1], val = 1, depth = 3\n输出:  [4,2,null,1,1,3,null,null,1]\n\n提示:\n\n节点数在 [1, 10^4] 范围内\n树的深度在 [1, 10^4]范围内\n-100 <= Node.val <= 100\n-10^5 <= val <= 10^5\n1 <= depth <= the depth of tree + 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 624,
        number: "0624",
        title: "数组列表中的最大距离",
        difficulty: "medium",
        description: "给定 m 个数组，每个数组都已经按照升序排好序了。现在你需要从两个不同的数组中选择两个整数（每个数组选一个）并且计算它们的距离。两个整数 a 和 b 之间的距离定义为它们差的绝对值 |a-b|。你的任务就是去找到最大距离",
        example: "示例 1：\n\n输入： \n[[1,2,3],\n [4,5],\n [1,2,3]]\n输出： 4\n解释：\n一种得到答案 4 的方法是从第一个数组或者第三个数组中选择 1，同时从第二个数组中选择 5 。\n\n注意：\n\n每个给定数组至少会有 1 个数字。列表中至少有两个非空数组。\n所有 m 个数组中的数字总数目在范围 [2, 10000] 内。\n数组内的所有相同位置的数字都是不同的。\nm 个数组中所有数字的范围在 [-10000, 10000] 内。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(m)"
            }
        ]
    },
    {
        id: 625,
        number: "0625",
        title: "最小因式分解",
        difficulty: "medium",
        description: "给定一个正整数 a，找出最小的正整数 b 使得 b 的所有数位相乘得到 a。\n\n如果不存在这样的结果或者结果不是 32 位有符号整数，返回 0。",
        example: "示例 1：\n\n输入：a = 48\n输出：68\n\n示例 2：\n\n输入：a = 15\n输出：35\n\n提示：\n\n1 <= a <= 10^9",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log a)",
                spaceComplexity: "O(log a)"
            }
        ]
    },
    {
        id: 626,
        number: "0626",
        title: "换座位",
        difficulty: "medium",
        description: "表: Seat\n\n+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| student     | varchar |\n+-------------+---------+\nid 是该表的主键（唯一值）列。\n该表的每一行都表示学生的姓名和 ID。\nid 是连续递增的。\n\n编写解决方案来交换每两个连续的学生的座位号。如果学生的数量是奇数，则最后一个学生的id不交换。\n\n按 id 升序 返回结果表。\n\n查询结果格式如下所示。",
        example: "示例 1:\n\n输入: \nSeat 表:\n+----+---------+\n| id | student |\n+----+---------+\n| 1  | Abbot   |\n| 2  | Doris   |\n| 3  | Emerson |\n| 4  | Green   |\n| 5  | Jeames  |\n+----+---------+\n输出: \n+----+---------+\n| id | student |\n+----+---------+\n| 1  | Doris   |\n| 2  | Abbot   |\n| 3  | Green   |\n| 4  | Emerson |\n| 5  | Jeames  |\n+----+---------+\n解释:\n请注意，如果学生人数为奇数，则不需要更换最后一名学生的座位。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 627,
        number: "0627",
        title: "变更性别",
        difficulty: "easy",
        description: "表: Salary\n\n+-------------+----------+\n| Column Name | Type     |\n+-------------+----------+\n| id          | int      |\n| name        | varchar  |\n| sex         | ENUM     |\n| salary      | int      |\n+-------------+----------+\nid 是这个表的主键。\nsex 这一列的值是 ENUM 类型，只能从 ('m', 'f') 中取。\n该表包含公司雇员的信息。\n\n请你编写一个 SQL 查询来交换所有的 'f' 和 'm' （即，将所有 'f' 变为 'm' ，反之亦然），仅使用 单个 update 语句 ，且不产生中间临时表。\n\n注意，你必须仅使用一条 update 语句，且不能使用 select 语句。\n\n查询结果如下例所示。",
        example: "示例 1:\n\n输入：\nSalary 表:\n+----+------+-----+--------+\n| id | name | sex | salary |\n+----+------+-----+--------+\n| 1  | A    | m   | 2500   |\n| 2  | B    | f   | 1500   |\n| 3  | C    | m   | 5500   |\n| 4  | D    | f   | 500    |\n+----+------+-----+--------+\n输出：\n+----+------+-----+--------+\n| id | name | sex | salary |\n+----+------+-----+--------+\n| 1  | A    | f   | 2500   |\n| 2  | B    | m   | 1500   |\n| 3  | C    | f   | 5500   |\n| 4  | D    | m   | 500    |\n+----+------+-----+--------+\n解释：\n(1, A) 和 (3, C) 从 'm' 变为 'f' 。\n(2, B) 和 (4, D) 从 'f' 变为 'm' 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 628,
        number: "0628",
        title: "三个数的最大乘积",
        difficulty: "easy",
        description: "给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。",
        example: "示例 1：\n\n输入：nums = [1,2,3]\n输出：6\n\n示例 2：\n\n输入：nums = [1,2,3,4]\n输出：24\n\n示例 3：\n\n输入：nums = [-1,-2,-3]\n输出：-6\n\n提示：\n\n3 <= nums.length <= 10^4\n-1000 <= nums[i] <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 629,
        number: "0629",
        title: "K个逆序对数组",
        difficulty: "hard",
        description: "给出两个整数 n 和 k，找出所有包含从 1 到 n 的数字，且恰好拥有 k 个逆序对的不同的数组的个数。\n\n逆序对的定义如下：对于数组的第i个和第 j个元素，如果满i < j且 a[i] > a[j]，则其为一个逆序对；否则不是。\n\n由于答案可能很大，只需要返回 答案 mod 10^9 + 7 的值。",
        example: "示例 1:\n\n输入: n = 3, k = 0\n输出: 1\n解释: \n只有数组 [1,2,3] 包含了从1到3的整数并且正好拥有 0 个逆序对。\n\n示例 2:\n\n输入: n = 3, k = 1\n输出: 2\n解释: \n数组 [1,3,2] 和 [2,1,3] 都有 1 个逆序对。\n\n提示:\n\nn 的范围是 [1, 1000] 并且 k 的范围是 [0, 1000]。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*k)",
                spaceComplexity: "O(n*k)"
            }
        ]
    },
    {
        id: 630,
        number: "0630",
        title: "课程表 III",
        difficulty: "hard",
        description: "这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，其中 courses[i] = [durationi, lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，并且必须在不晚于 lastDayi 的时候完成。\n\n你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。\n\n返回你最多可以修读的课程数目。",
        example: "示例 1：\n\n输入：courses = [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]\n输出：3\n解释：\n这里一共有 4 门课程，但是你最多可以修 3 门：\n首先，修第 1 门课，耗费 100 天，在第 100 天完成，在第 101 天开始下门课。\n第二，修第 3 门课，耗费 1000 天，在第 1100 天完成，在第 1101 天开始下门课程。\n第三，修第 2 门课，耗时 200 天，在第 1300 天完成。\n第 4 门课现在不能修，因为将会在第 3300 天完成它，这已经超出了关闭日期。\n\n示例 2：\n\n输入：courses = [[1,2]]\n输出：1\n\n示例 3：\n\n输入：courses = [[3,2],[4,3]]\n输出：0\n\n提示:\n\n1 <= courses.length <= 10^4\n1 <= durationi, lastDayi <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 631,
        number: "0631",
        title: "设计 Excel 求和公式",
        difficulty: "hard",
        description: "你的任务是实现 Excel 的求和功能，具体的操作如下：\n\nExcel(int height, char width)：构造函数，输入表格的高和宽，例如 Excel(3, 'C') 表示构造 3 行 3 列的表格，列的范围是 A, B, C\n\nvoid set(int row, char column, int val)：设置 (row, column) 单元格的值为 val\n\nint get(int row, char column)：返回单元格 (row, column) 的值\n\nint sum(int row, char column, List of Strings : numbers)：返回由 numbers 指定的单元格的和，numbers 中的每个字符串代表单个单元格或一个区域。例如，Excel(3, 'C');\n// 构造一个 3*3 的二维表格，初始化全为 0\n// 单元格由行号（从 1 开始）和列号（字母，从 A 开始编号）组成，例如 A1, C3\n// 假设行号不大于 100，列号不大于 Z\nset(1, 'A', 2);\nsum(3, 'C', [\"A1\", \"A1:B2\"]);\n// 返回 4\n// A1 + A1 + A2 + B1 + B2，即 2 + 2 + 0 + 0 + 0 = 4\n\n注意：你可以认为不会出现循环引用的情况，比如 sum(1, A, [\"B1\"]) 和 sum(1, B, [\"A1\"])",
        example: "示例 1：\n\nExcel excel = new Excel(3, 'C');\nexcel.set(1, 'A', 2);\nexcel.sum(3, 'C', [\"A1\", \"A1:B2\"]);\n// 返回 4\nexcel.set(2, 'B', 2);\nexcel.get(3, 'C'); // 返回 6\n\n提示：\n\n1 <= height <= 100\n'A' <= width <= 'Z'\n1 <= row <= height\n'A' <= column <= width\n-100 <= val <= 100\n给定的数字（包括 val）都不会超过 100",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 632,
        number: "0632",
        title: "最小区间",
        difficulty: "hard",
        description: "你有 k 个 非递减排列 的整数列表。找到一个 最小 区间，使得 k 个列表中的每个列表至少有一个数包含在其中。\n\n我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。",
        example: "示例 1：\n\n输入：nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]\n输出：[20,24]\n解释： \n列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。\n列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。\n列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。\n\n示例 2：\n\n输入：nums = [[1,2,3],[1,2,3],[1,2,3]]\n输出：[1,1]\n\n提示：\n\nnums.length == k\n1 <= k <= 3500\n1 <= nums[i].length <= 50\n-10^5 <= nums[i][j] <= 10^5\nnums[i] 按非递减顺序排列",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log k)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 633,
        number: "0633",
        title: "平方数之和",
        difficulty: "medium",
        description: "给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。",
        example: "示例 1：\n\n输入：c = 5\n输出：true\n解释：1 * 1 + 2 * 2 = 5\n\n示例 2：\n\n输入：c = 3\n输出：false\n\n提示：\n\n0 <= c <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(sqrt(c))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 634,
        number: "0634",
        title: "寻找数组的错位排列",
        difficulty: "medium",
        description: "在组合数学中，如果一个排列中所有元素都不在原先的位置上，那么这个排列就被称为错位排列。\n\n给定一个从 1 到 n 升序排列的数组，你可以计算出总共有多少个不同的错位排列吗？\n\n由于答案可能非常大，你只需要将答案对 10^9+7 取余输出即可。",
        example: "示例 1:\n\n输入: 3\n输出: 2\n解释: 原始的数组为 [1,2,3]。两个错位排列的数组为 [2,3,1] 和 [3,1,2]。\n\n示例 2:\n\n输入: 4\n输出: 9\n\n提示：\n\n1 <= n <= 10^6",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 635,
        number: "0635",
        title: "设计日志存储系统",
        difficulty: "medium",
        description: "你将获得多条日志，每条日志都有唯一的 id 和 timestamp，timestamp 是形如 Year:Month:Day:Hour:Minute:Second 的字符串，例如 2017:01:01:23:59:59，所有值域都是零填充的十进制数。\n\n设计一个日志存储系统实现如下功能：\n\nvoid Put(int id, string timestamp)：给定日志的 id 和 timestamp，将这个日志存入你的存储系统中。\n\nint[] Retrieve(string start, string end, string granularity)：返回在给定时间区间内的所有日志的 id。start 和 end 的格式均为 Year:Month:Day:Hour:Minute:Second，granularity 表示考虑的时间级别。比如，若 granularity=\"Day\"，则只需要考虑 timestamp 中的 \"Year\", \"Month\", \"Day\" 部分。\n\n例如，start=\"2017:01:01:23:59:59\", end=\"2017:01:02:23:59:59\", granularity=\"Day\"，意味着需要查找从 Jan. 1, 2017 到 Jan. 2, 2017 范围内的所有日志，可以忽略 Hour, Minute, Second 部分。",
        example: "示例：\n\nput(1, \"2017:01:01:23:59:59\");\nput(2, \"2017:01:01:22:59:59\");\nput(3, \"2016:01:01:00:00:00\");\nretrieve(\"2016:01:01:01:01:01\", \"2017:01:01:23:00:00\", \"Year\"); // 返回 [1,2,3]，因为所有日志的年份都匹配。\nretrieve(\"2016:01:01:01:01:01\", \"2017:01:01:23:00:00\", \"Hour\"); // 返回 [1,2]，因为日志 3 的 \"Hour\" 部分不在区间内。\n\n提示：\n\n1 <= id <= 500\n2000 <= Year <= 2017\n1 <= Month <= 12\n1 <= Day <= 31\n0 <= Hour <= 23\n0 <= Minute, Second <= 59\n时间区间长度不超过 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 636,
        number: "0636",
        title: "函数的独占时间",
        difficulty: "medium",
        description: "有一个 单线程 CPU 正在运行一个含有 n 道函数的程序。每道函数都有一个位于  0 和 n-1 之间的唯一标识符。\n\n函数调用 存储在一个 调用栈 上 ：当一个函数调用开始时，它的标识符将会推入栈中。而当一个函数调用结束时，它的标识符将会从栈中弹出。标识符位于栈顶的函数是 当前正在执行的函数 。每当一个函数开始或者结束时，将会记录一条日志，包括函数标识符、是开始还是结束、以及相应的时间戳。\n\n给你一个由日志组成的列表 logs ，其中 logs[i] 表示第 i 条日志消息，该消息是一个按 \"{function_id}:{\"start\" | \"end\"}:{timestamp}\" 进行格式化的字符串。例如，\"0:start:3\" 意味着标识符为 0 的函数调用在时间戳 3 的 起始开始执行 ；而 \"1:end:2\" 意味着标识符为 1 的函数调用在时间戳 2 的 末尾结束执行。注意，函数可以 调用多次，可能存在递归调用 。\n\n函数的 独占时间 定义是在这个函数在程序所有函数调用中执行时间的总和，调用其他函数花费的时间不算该函数的独占时间。例如，如果一个函数被调用两次，一次调用执行 2 单位时间，另一次调用执行 1 单位时间，那么该函数的 独占时间 为 2 + 1 = 3 。\n\n以数组形式返回每个函数的 独占时间 ，其中第 i 个下标对应的值表示标识符 i 的函数的独占时间。",
        example: "示例 1：\n\n输入：n = 2, logs = [\"0:start:0\",\"1:start:2\",\"1:end:5\",\"0:end:6\"]\n输出：[3,4]\n解释：\n函数 0 在时间戳 0 的起始开始执行，执行 2 个单位时间，于时间戳 1 的末尾结束执行。 \n函数 1 在时间戳 2 的起始开始执行，执行 4 个单位时间，于时间戳 5 的末尾结束执行。 \n函数 0 在时间戳 6 的开始恢复执行，执行 1 个单位时间。 \n所以函数 0 总共执行 2 + 1 = 3 个单位时间，函数 1 总共执行 4 个单位时间。 \n\n示例 2：\n\n输入：n = 1, logs = [\"0:start:0\",\"0:start:2\",\"0:end:5\",\"0:start:6\",\"0:end:6\",\"0:end:7\"]\n输出：[8]\n解释：\n函数 0 在时间戳 0 的起始开始执行，执行 2 个单位时间，并递归调用它自身。\n函数 0（递归调用）在时间戳 2 的起始开始执行，执行 4 个单位时间。\n函数 0（初始调用）恢复执行，并立刻再次调用它自身。\n函数 0（第二次递归调用）在时间戳 6 的起始开始执行，执行 1 个单位时间。\n函数 0（初始调用）在时间戳 7 的起始恢复执行，执行 1 个单位时间。\n所以函数 0 总共执行 2 + 4 + 1 + 1 = 8 个单位时间。\n\n示例 3：\n\n输入：n = 2, logs = [\"0:start:0\",\"0:start:2\",\"0:end:5\",\"1:start:6\",\"1:end:6\",\"0:end:7\"]\n输出：[7,1]\n解释：\n函数 0 在时间戳 0 的起始开始执行，执行 2 个单位时间，并递归调用它自身。\n函数 0（递归调用）在时间戳 2 的起始开始执行，执行 4 个单位时间。\n函数 0（初始调用）恢复执行，并立刻调用函数 1 。\n函数 1 在时间戳 6 的起始开始执行，执行 1 个单位时间，于时间戳 6 的末尾结束执行。\n函数 0（初始调用）在时间戳 7 的起始恢复执行，执行 1 个单位时间，于时间戳 7 的末尾结束执行。\n所以函数 0 总共执行 2 + 4 + 1 = 7 个单位时间，函数 1 总共执行 1 个单位时间。 \n\n提示：\n\n1 <= n <= 100\n1 <= logs.length <= 500\n0 <= function_id < n\n0 <= timestamp <= 10^9\n两个开始事件不会在同一时间戳发生\n两个结束事件不会在同一时间戳发生\n每道函数都有一个对应 \"start\" 日志的 \"end\" 日志",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 637,
        number: "0637",
        title: "二叉树的层平均值",
        difficulty: "easy",
        description: "给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10^-5 以内的答案可以被接受。",
        example: "示例 1：\n\n输入：root = [3,9,20,null,null,15,7]\n输出：[3.00000,14.50000,11.00000]\n解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11。\n因此返回 [3, 14.5, 11]。\n\n示例 2:\n\n输入：root = [3,9,20,15,7]\n输出：[3.00000,14.50000,11.00000]\n\n提示：\n\n树中节点数量在 [1, 10^4] 范围内\n-2^31 <= Node.val <= 2^31 - 1",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 638,
        number: "0638",
        title: "大礼包",
        difficulty: "medium",
        description: "在 LeetCode 商店中， 有 n 件在售的物品。每件物品都有对应的价格。然而，也有一些大礼包，每个大礼包以优惠的价格捆绑销售一组物品。\n\n给你一个整数数组 price 表示物品价格，其中 price[i] 是第 i 件物品的价格。另有一个整数数组 needs 表示购物清单，其中 needs[i] 是需要购买第 i 件物品的数量。\n\n还有一个数组 special 表示大礼包，special[i] 的长度为 n + 1 ，其中 special[i][j] 表示第 i 个大礼包中内含第 j 件物品的数量，且 special[i][n] （也就是数组中的最后一个整数）为第 i 个大礼包的价格。\n\n返回 确切 满足购物清单所需花费的最低价格。数量超过购物清单指定数量的物品，将会视为 浪费 资源。",
        example: "示例 1：\n\n输入：price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]\n输出：14\n解释：有 A 和 B 两种物品，价格分别为 ¥2 和 ¥5 。 \n大礼包 1 ，你可以以 ¥5 的价格购买 3A 和 0B 。 \n大礼包 2 ，你可以以 ¥10 的价格购买 1A 和 2B 。 \n需要购买 3 个 A 和 2 个 B ， 所以付 ¥10 购买 1A 和 2B（大礼包 2），以及 ¥4 购买 2A 。\n\n示例 2：\n\n输入：price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]\n输出：11\n解释：A ，B ，C 的价格分别为 ¥2 ，¥3 ，¥4 。\n可以用 ¥4 购买 1A 和 1B ，也可以用 ¥9 购买 2A ，2B 和 1C 。 \n需要买 1A ，2B 和 1C ，所以付 ¥4 买 1A 和 1B（大礼包 1），以及 ¥3 购买 1B ， ¥4 购买 1C 。 \n不可以购买超出待购清单的物品，尽管购买大礼包 2 更加便宜。\n\n提示：\n\nn == price.length\nn == needs.length\n1 <= n <= 6\n0 <= price[i] <= 10\n0 <= needs[i] <= 10\n1 <= special.length <= 100\nspecial[i].length == n + 1\n0 <= special[i][j] <= 50",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(m^n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 639,
        number: "0639",
        title: "解码方法 II",
        difficulty: "hard",
        description: "一条包含字母 A-Z 的消息通过以下的方式进行了 编码 ：\n\n'A' -> \"1\"\n'B' -> \"2\"\n...\n'Z' -> \"26\"\n\n要 解码 一条已编码的消息，所有的数字都必须分组，然后按原来的编码方案反向映射回字母（可能存在多种方式）。例如，\"11106\" 可以映射为：\n\n\"AAJF\" 对应分组 (1 1 10 6)\n\"KJF\" 对应分组 (11 10 6)\n\n注意，像 (1 11 06) 这样的分组是无效的，因为 \"06\" 不可以映射为 'F' ，因为 \"6\" 与 \"06\" 不同。\n\n除了 上面描述的数字字母映射方案，编码消息中可能包含 '*' 字符，可以表示从 '1' 到 '9' 的任一数字（不包括 '0'）。例如，编码字符串 \"1*\" 可以表示 \"11\"、\"12\"、\"13\"、\"14\"、\"15\"、\"16\"、\"17\"、\"18\" 或 \"19\" 中的任意一条消息。对 \"1*\" 进行解码，相当于解码该字符串可以表示的任何编码消息。\n\n给你一个字符串 s ，由数字和 '*' 字符组成，返回 解码 该字符串的方法 数目 。\n\n由于答案数目可能非常大，返回 10^9 + 7 的 模 。",
        example: "示例 1：\n\n输入：s = \"*\"\n输出：9\n解释：这一条编码消息可以表示 \"1\"、\"2\"、\"3\"、\"4\"、\"5\"、\"6\"、\"7\"、\"8\" 或 \"9\" 中的任意一条。\n可以分别解码成字符 'A'、'B'、'C'、'D'、'E'、'F'、'G'、'H' 和 'I' 。\n因此，\"*\" 总共有 9 种解码方法。\n\n示例 2：\n\n输入：s = \"1*\"\n输出：18\n解释：这一条编码消息可以表示 \"11\"、\"12\"、\"13\"、\"14\"、\"15\"、\"16\"、\"17\"、\"18\" 或 \"19\" 中的任意一条。\n每种消息都可以由 2 种方法解码（例如，\"11\" 可以解码成 \"AA\" 或 \"K\"）。\n因此，\"1*\" 共有 9 * 2 = 18 种解码方法。\n\n示例 3：\n\n输入：s = \"2*\"\n输出：15\n解释：这一条编码消息可以表示 \"21\"、\"22\"、\"23\"、\"24\"、\"25\"、\"26\"、\"27\"、\"28\" 或 \"29\" 中的任意一条。\n\"21\"、\"22\"、\"23\"、\"24\"、\"25\" 和 \"26\" 由 2 种解码方法，但 \"27\"、\"28\" 和 \"29\" 仅有 1 种解码方法。\n因此，\"2*\" 共有 (6 * 2) + (3 * 1) = 15 种解码方法。\n\n提示：\n\n1 <= s.length <= 10^5\ns[i] 是 0 - 9 中的一位数字或字符 '*'",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 640,
        number: "0640",
        title: "求解方程",
        difficulty: "medium",
        description: "求解一个给定的方程，将x以字符串 \"x=#value\" 的形式返回。该方程仅包含 '+' ， '-' 操作，变量 x 和其对应系数。\n\n如果方程没有解，请返回 \"No solution\" 。如果方程有无限解，则返回 \"Infinite solutions\" 。\n\n题目保证，如果方程中只有一个解，则 'x' 的值是一个整数。",
        example: "示例 1：\n\n输入: equation = \"x+5-3+x=6+x-2\"\n输出: \"x=2\"\n\n示例 2:\n\n输入: equation = \"x=x\"\n输出: \"Infinite solutions\"\n\n示例 3:\n\n输入: equation = \"2x=x\"\n输出: \"x=0\"\n\n提示:\n\n3 <= equation.length <= 1000\nequation 只有一个 '='. \nequation 方程由整数组成，其绝对值在 [0, 100] 范围内，不含前导零和变量 'x' 。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 641,
        number: "0641",
        title: "设计循环双端队列",
        difficulty: "medium",
        description: "设计实现双端队列。\n\n实现 MyCircularDeque 类:\n\nMyCircularDeque(int k) ：构造函数,双端队列最大为 k 。\nboolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。\nboolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。\nboolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。\nboolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。\nint getFront() ：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。\nint getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。\nboolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。\nboolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。",
        example: "示例 1：\n\n输入\n[\"MyCircularDeque\", \"insertLast\", \"insertLast\", \"insertFront\", \"insertFront\", \"getRear\", \"isFull\", \"deleteLast\", \"insertFront\", \"getFront\"]\n[[3], [1], [2], [3], [4], [], [], [], [4], []]\n输出\n[null, true, true, true, false, 2, true, true, true, 4]\n\n解释\nMyCircularDeque circularDeque = new MyCircularDeque(3); // 设置容量大小为3\ncircularDeque.insertLast(1);			        // 返回 true\ncircularDeque.insertLast(2);			        // 返回 true\ncircularDeque.insertFront(3);			        // 返回 true\ncircularDeque.insertFront(4);			        // 已经满了，返回 false\ncircularDeque.getRear();  				// 返回 2\ncircularDeque.isFull();				        // 返回 true\ncircularDeque.deleteLast();			        // 返回 true\ncircularDeque.insertFront(4);			        // 返回 true\ncircularDeque.getFront();				// 返回 4\n\n提示：\n\n1 <= k <= 1000\n0 <= value <= 1000\n最多调用 2000 次 insertFront, insertLast, deleteFront, deleteLast, getFront, getRear, isEmpty, isFull 方法",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(1)",
                spaceComplexity: "O(k)"
            }
        ]
    },
    {
        id: 642,
        number: "0642",
        title: "设计搜索自动补全系统",
        difficulty: "hard",
        description: "为搜索引擎设计一个搜索自动补全系统。用户会输入一条语句（最少包含一个字母，以特殊字符 '#' 结尾）。除 '#' 以外用户输入的每个字符，返回历史中热度前三并以当前输入部分为前缀的句子。下面是详细规则：\n\n一条句子的热度定义为历史上用户输入这个句子的总次数。\n返回前三的句子需要按照热度从高到低排序（第一个是最热门的）。如果有多条热度相同的句子，请按照 ASCII 码的顺序输出（ASCII 码越小排名越前）。\n如果满足条件的句子个数少于 3，将它们全部返回。\n如果输入的前缀不在历史中，请返回一个空数组。\n\n实现 AutocompleteSystem 类：\n\nAutocompleteSystem(String[] sentences, int[] times)：使用历史数据初始化对象。\nList<String> input(char c)：表示用户输入了字符 c。\n如果 c == '#'，则输入结束，返回空数组。\n否则，返回历史中热度前三并以当前输入部分为前缀的句子。",
        example: "示例 1：\n\n输入：\n[\"AutocompleteSystem\", \"input\", \"input\", \"input\", \"input\"]\n[[[\"i love you\", \"island\", \"iroman\", \"i love leetcode\"], [5, 3, 2, 2]], [\"i\"], [\" \"], [\"a\"], [\"#\"]]\n输出：\n[null, [\"i love you\", \"island\", \"i love leetcode\"], [\"i love you\", \"i love leetcode\"], [], []]\n\n解释：\nAutocompleteSystem obj = new AutocompleteSystem([\"i love you\", \"island\", \"iroman\", \"i love leetcode\"], [5, 3, 2, 2]);\nobj.input(\"i\"); // 返回 [\"i love you\", \"island\", \"i love leetcode\"]。有 3 个句子匹配前缀 \"i\"。按照热度，\"i love you\" 排在第一位，\"island\" 排在第二位，\"i love leetcode\" 排在第三位。\nobj.input(\" \"); // 返回 [\"i love you\", \"i love leetcode\"]。有 2 个句子匹配前缀 \"i \"。按照热度，\"i love you\" 排在第一位，\"i love leetcode\" 排在第二位。\nobj.input(\"a\"); // 返回 []。没有句子匹配前缀 \"i a\"。\nobj.input(\"#\"); // 用户输入结束，返回 []。\n\n提示：\n\n1 <= sentences.length <= 100\n1 <= sentences[i].length <= 100\n1 <= times[i] <= 50\nc 是小写英文字母，',', ' ' 或 '#'\n每个被测试的句子将是一个以字符 '#' 结尾的字符串。\n每个被测试的句子的长度范围为 1 <= len(sentence) <= 200\n输入的句子中的单词总数不会超过 3000\n每次调用 input 的总次数不会超过 4000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 643,
        number: "0643",
        title: "子数组最大平均数 I",
        difficulty: "easy",
        description: "给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。\n\n请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。\n\n任何误差小于 10^-5 的答案都将被视为正确答案。",
        example: "示例 1：\n\n输入：nums = [1,12,-5,-6,50,3], k = 4\n输出：12.75\n解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75\n\n示例 2：\n\n输入：nums = [5], k = 1\n输出：5.00000\n\n提示：\n\nn == nums.length\n1 <= k <= n <= 10^5\n-10^4 <= nums[i] <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 644,
        number: "0644",
        title: "子数组最大平均数 II",
        difficulty: "hard",
        description: "给你一个包含 n 个整数的数组 nums ，和一个整数 k 。\n\n请你找出 长度大于等于 k 且平均值最大的连续子数组。并输出这个最大平均值。任何误差小于 10^-5 的答案都将被视为正确答案。",
        example: "示例 1：\n\n输入：nums = [1,12,-5,-6,50,3], k = 4\n输出：12.75\n解释：\n当长度为 5 的时候，最大平均值是 10.8，\n当长度为 6 的时候，最大平均值是 9.16667。\n所以返回值是 12.75。\n\n示例 2：\n\n输入：nums = [5], k = 1\n输出：5.00000\n\n提示：\n\nn == nums.length\n1 <= k <= n <= 10^4\n-10^4 <= nums[i] <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log (max-min))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 645,
        number: "0645",
        title: "错误的集合",
        difficulty: "easy",
        description: "集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。\n\n给定一个数组 nums 代表了集合 S 发生错误后的结果。\n\n请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。",
        example: "示例 1：\n\n输入：nums = [1,2,2,4]\n输出：[2,3]\n\n示例 2：\n\n输入：nums = [1,1]\n输出：[1,2]\n\n提示：\n\n2 <= nums.length <= 10^4\n1 <= nums[i] <= 10^4",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 646,
        number: "0646",
        title: "最长数对链",
        difficulty: "medium",
        description: "给你一个由 n 个数对组成的数对数组 pairs ，其中 pairs[i] = [lefti, righti] 且 lefti < righti 。\n\n现在，我们定义一种 跟随 关系，当且仅当 b < c 时，数对 p2 = [c, d] 才可以跟在 p1 = [a, b] 后面。我们用这种形式来构造 数对链 。\n\n找出并返回能够形成的 最长数对链的长度 。\n\n你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。",
        example: "示例 1：\n\n输入：pairs = [[1,2], [2,3], [3,4]]\n输出：2\n解释：最长的数对链是 [1,2] -> [3,4] 。\n\n示例 2：\n\n输入：pairs = [[1,2],[7,8],[4,5]]\n输出：3\n解释：最长的数对链是 [1,2] -> [4,5] -> [7,8] 。\n\n提示：\n\nn == pairs.length\n1 <= n <= 1000\n-1000 <= lefti < righti <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n log n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 647,
        number: "0647",
        title: "回文子串",
        difficulty: "medium",
        description: "给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。\n\n回文字符串 是正着读和倒过来读一样的字符串。\n\n子字符串 是字符串中的由连续字符组成的一个序列。\n\n具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。",
        example: "示例 1：\n\n输入：s = \"abc\"\n输出：3\n解释：三个回文子串: \"a\", \"b\", \"c\"\n\n示例 2：\n\n输入：s = \"aaa\"\n输出：6\n解释：6个回文子串: \"a\", \"a\", \"a\", \"aa\", \"aa\", \"aaa\"\n\n提示：\n\n1 <= s.length <= 1000\ns 由小写英文字母组成",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 648,
        number: "0648",
        title: "单词替换",
        difficulty: "medium",
        description: "在英语中，我们有一个叫做 词根(root) 的概念，可以词根后面添加其他一些词组成另一个较长的单词——我们称这个词为 继承词(successor)。例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。\n\n现在，给定一个由许多词根组成的词典 dictionary 和一个用空格分隔单词形成的句子 sentence。你需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。\n\n你需要输出替换之后的句子。",
        example: "示例 1：\n\n输入：dictionary = [\"cat\",\"bat\",\"rat\"], sentence = \"the cattle was rattled by the battery\"\n输出：\"the cat was rat by the bat\"\n\n示例 2：\n\n输入：dictionary = [\"a\",\"b\",\"c\"], sentence = \"aadsfasf absbs bbab cadsfafs\"\n输出：\"a a b c\"\n\n提示：\n\n1 <= dictionary.length <= 1000\n1 <= dictionary[i].length <= 100\ndictionary[i] 仅由小写字母组成。\n1 <= sentence.length <= 10^6\nsentence 仅由小写字母和空格组成。\nsentence 中单词的总量在范围 [1, 1000] 内。\nsentence 中每个单词的长度在范围 [1, 1000] 内。\nsentence 中单词之间由一个空格隔开。\nsentence 没有前导或尾随空格。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*m)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 649,
        number: "0649",
        title: "Dota2 参议院",
        difficulty: "medium",
        description: "Dota2 的世界里有两个阵营：Radiant（天辉）和 Dire（夜魇）\n\nDota2 参议院由来自两派的参议员组成。现在参议院希望对一个 Dota2 游戏里的改变作出决定。他们以一个基于轮为过程的投票进行。在每一轮中，每一位参议员都可以行使两项权利中的 一 项：\n\n禁止一名参议员的权利：参议员可以让另一位参议员在这一轮和随后的几轮中丧失 所有的权利 。\n宣布胜利：如果参议员发现有权利投票的参议员都是 同一个阵营的 ，他可以宣布胜利并决定在游戏中的有关变化。\n\n给你一个字符串 senate 代表每个参议员的阵营。字母 'R' 和 'D'分别代表了 Radiant（天辉）和 Dire（夜魇）。然后，如果有 n 个参议员，给定字符串的大小将是 n。\n\n以轮为基础的过程从给定顺序的第一个参议员开始到最后一个参议员结束。这一过程将持续到投票结束。所有失去权利的参议员将在过程中被跳过。\n\n假设每一位参议员都足够聪明，会为自己的政党做出最好的策略，你需要预测哪一方最终会宣布胜利并在 Dota2 游戏中决定改变。输出应该是 \"Radiant\" 或 \"Dire\" 。",
        example: "示例 1：\n\n输入：senate = \"RD\"\n输出：\"Radiant\"\n解释：\n第 1 轮时，第一个参议员来自 Radiant 阵营，他可以使用第一项权利让第二个参议员失去所有权利。\n这一轮中，第二个参议员将会被跳过，因为他的权利被禁止了。\n第 2 轮时，第一个参议员可以宣布胜利，因为他是唯一一个有投票权的人。\n\n示例 2：\n\n输入：senate = \"RDD\"\n输出：\"Dire\"\n解释：\n第 1 轮时，第一个来自 Radiant 阵营的参议员可以使用第一项权利禁止第二个参议员的权利。\n这一轮中，第二个来自 Dire 阵营的参议员会将被跳过，因为他的权利被禁止了。\n这一轮中，第三个来自 Dire 阵营的参议员可以使用他的第一项权利禁止第一个参议员的权利。\n因此在第二轮只剩下第三个参议员拥有投票的权利,于是他可以宣布胜利。\n\n提示：\n\nn == senate.length\n1 <= n <= 10^4\nsenate[i] 为 'R' 或 'D'",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 650,
        number: "0650",
        title: "只有两个键的键盘",
        difficulty: "medium",
        description: "最初记事本上只有一个字符 'A' 。你每次可以对这个记事本进行两种操作：\n\nCopy All（复制全部）：复制这个记事本中的所有字符（不允许仅复制部分字符）。\nPaste（粘贴）：粘贴 上一次 复制的字符。\n\n给你一个数字 n ，你需要使用最少的操作次数，在记事本上输出 恰好 n 个 'A' 。返回能够打印出 n 个 'A' 的最少操作次数。",
        example: "示例 1：\n\n输入：3\n输出：3\n解释：\n最初, 只有一个字符 'A'。\n第 1 步, 使用 Copy All 操作。\n第 2 步, 使用 Paste 操作来获得 'AA'。\n第 3 步, 使用 Paste 操作来获得 'AAA'。\n\n示例 2：\n\n输入：n = 1\n输出：0\n\n提示：\n\n1 <= n <= 1000",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(sqrt(n))",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 651,
        number: "0651",
        title: "4键键盘",
        difficulty: "medium",
        description: "假设你有一个特殊的键盘包含下面的按键：\n\nKey 1: (A)：在屏幕上打印一个 'A'。\nKey 2: (Ctrl-A)：选中整个屏幕。\nKey 3: (Ctrl-C)：复制选中区域到缓冲区。\nKey 4: (Ctrl-V)：将缓冲区内容输出到上次输入的结束位置，并显示在屏幕上。\n\n现在，你只可以按键 N 次（使用上述四种按键），请问屏幕上最多可以显示几个 'A'？",
        example: "示例 1：\n\n输入：N = 3\n输出：3\n解释：\nA, A, A\n\n示例 2：\n\n输入：N = 7\n输出：9\n解释：\nA, A, A, Ctrl-A, Ctrl-C, Ctrl-V, Ctrl-V\n\n提示：\n\n1 <= N <= 50",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(N^2)",
                spaceComplexity: "O(N)"
            }
        ]
    },
    {
        id: 652,
        number: "0652",
        title: "寻找重复的子树",
        difficulty: "medium",
        description: "给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。\n\n两棵树重复是指它们具有相同的结构以及相同的结点值。",
        example: "示例 1：\n\n        1\n       / \\\n      2   3\n     /   / \\\n    4   2   4\n       /\n      4\n\n下面是两个重复的子树：\n\n      2\n     /\n    4\n\n和\n\n    4\n\n因此，你需要以列表的形式返回上述重复子树的根结点。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n^2)"
            }
        ]
    },
    {
        id: 653,
        number: "0653",
        title: "两数之和 IV - 输入 BST",
        difficulty: "easy",
        description: "给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。",
        example: "示例 1：\n\n输入: \n    5\n   / \\\n  3   6\n / \\   \\\n2   4   7\n\n目标结果: 9\n\n输出: true\n\n示例 2：\n\n输入: \n    5\n   / \\\n  3   6\n / \\   \\\n2   4   7\n\n目标结果: 28\n\n输出: false",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 654,
        number: "0654",
        title: "最大二叉树",
        difficulty: "medium",
        description: "给定一个不含重复元素的整数数组 nums 。一个以此数组直接递归构建的 最大二叉树 定义如下：\n\n二叉树的根是数组 nums 中的最大元素。\n左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。\n右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。\n返回有给定数组 nums 构建的 最大二叉树 。",
        example: "示例 1：\n\n输入：nums = [3,2,1,6,0,5]\n输出：[6,3,5,null,2,0,null,null,1]\n解释：递归调用如下所示：\n- [3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。\n    - [3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。\n        - 空数组，无子节点。\n        - [2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。\n            - 空数组，无子节点。\n            - 只有一个元素，所以子节点是一个值为 1 的节点。\n    - [0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。\n        - 只有一个元素，所以子节点是一个值为 0 的节点。\n        - 空数组，无子节点。\n\n示例 2：\n\n输入：nums = [3,2,1]\n输出：[3,null,2,null,1]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n^2)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 655,
        number: "0655",
        title: "输出二叉树",
        difficulty: "medium",
        description: "在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：\n\n行数 m 应当等于给定二叉树的高度。\n列数 n 应当总是奇数。\n根节点的值（以字符串格式给出）应当放在可放置的第一行正中间。根节点所在的行与列会将剩余空间划分为两部分（左下部分和右下部分）。你应该将左子树输出在左下部分，右子树输出在右下部分。左下和右下部分应当有相同的大小。即使一个子树为空而另一个非空，你不需要为空的子树输出任何东西，但仍需要为另一个子树留出足够的空间。然而，如果两个子树都为空则不需要为它们留出任何空间。\n每个未使用的空间应包含一个空的字符串\"\"。\n使用相同的规则输出子树。",
        example: "示例 1:\n\n输入:\n     1\n    /\n   2\n输出:\n[[\"\", \"1\", \"\"],\n [\"2\", \"\", \"\"]]\n\n示例 2:\n\n输入:\n     1\n    / \\\n   2   3\n    \\\n     4\n输出:\n[[\"\", \"\", \"\", \"1\", \"\", \"\", \"\"],\n [\"\", \"2\", \"\", \"\", \"\", \"3\", \"\"],\n [\"\", \"\", \"4\", \"\", \"\", \"\", \"\"]]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(2^h)",
                spaceComplexity: "O(2^h)"
            }
        ]
    },
    {
        id: 656,
        number: "0656",
        title: "金币路径",
        difficulty: "hard",
        description: "给定一个数组 A（下标从 1 开始）包含 N 个整数：A1，A2，……，AN 和一个整数 B。你可以从数组 A 中的任何一个位置（下标为 i）跳到下标 i+1，i+2，……，i+B 的任意一个可以跳到的位置上。如果你在下标为 i 的位置上，你需要支付 Ai 个金币。如果 Ai 是 -1，意味着下标为 i 的位置是不可以跳到的。\n\n现在，你希望花费最少的金币从数组 A 的 1 位置跳到 N 位置，你需要输出花费最少的路径，依次输出所有经过的下标（从 1 到 N）。\n\n如果有多种花费最少的方案，输出字典顺序最小的路径。\n\n如果无法到达 N 位置，请返回一个空数组。",
        example: "示例 1:\n\n输入: [1,2,4,-1,2], 2\n输出: [1,3,5]\n\n示例 2:\n\n输入: [1,2,4,-1,2], 1\n输出: []\n\n注释:\n\n路径 Pa1，Pa2，……，Pan 是字典序小于 Pb1，Pb2，……，Pbm 的，当且仅当第一个 Pai 和 Pbi 不同的 i 满足 Pai < Pbi，如果不存在这样的 i 那么满足 n < m。\nA1 >= 0。 A2, ..., AN （如果存在） 的范围是 [-1, 100]。\nA 数组的长度范围 [1, 1000].\nB 的范围 [1, 100].",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n*B)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 657,
        number: "0657",
        title: "机器人能否返回原点",
        difficulty: "easy",
        description: "在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。\n\n移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。\n\n注意：机器人\"面朝\"的方向无关紧要。 \"R\" 将始终使机器人向右移动一次，\"L\" 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。",
        example: "示例 1:\n\n输入: \"UD\"\n输出: true\n解释：机器人向上移动一次，然后向下移动一次。所有动作都具有相同的幅度，因此它最终回到它开始的原点。因此，我们返回 true。\n\n示例 2:\n\n输入: \"LL\"\n输出: false\n解释：机器人向左移动两次。它最终位于原点的左侧，距原点有两次 \"移动\" 的距离。我们返回 false，因为它在移动结束时没有返回原点。",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 658,
        number: "0658",
        title: "找到 K 个最接近的元素",
        difficulty: "medium",
        description: "给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。\n\n整数 a 比整数 b 更接近 x 需要满足：\n\n|a - x| < |b - x| 或者\n|a - x| == |b - x| 且 a < b",
        example: "示例 1：\n\n输入：arr = [1,2,3,4,5], k = 4, x = 3\n输出：[1,2,3,4]\n\n示例 2：\n\n输入：arr = [1,2,3,4,5], k = 4, x = -1\n输出：[1,2,3,4]",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log(n) + k)",
                spaceComplexity: "O(1)"
            }
        ]
    },
    {
        id: 659,
        number: "0659",
        title: "分割数组为连续子序列",
        difficulty: "medium",
        description: "给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个长度至少为 3 的子序列，其中每个子序列都由连续整数组成。\n\n如果可以完成上述分割，则返回 true ；否则，返回 false 。",
        example: "示例 1：\n\n输入: [1,2,3,3,4,5]\n输出: True\n解释:\n你可以分割出这样两个连续子序列 : \n1, 2, 3\n3, 4, 5\n\n示例 2：\n\n输入: [1,2,3,3,4,4,5,5]\n输出: True\n解释:\n你可以分割出这样两个连续子序列 : \n1, 2, 3, 4, 5\n3, 4, 5\n\n示例 3：\n\n输入: [1,2,3,4,4,5]\n输出: False",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)"
            }
        ]
    },
    {
        id: 660,
        number: "0660",
        title: "移除 9",
        difficulty: "hard",
        description: "从 1 开始，移除所有包含数字 9 的所有整数，例如 9，19，29，……\n\n这样就获得了一个新的整数数列：1，2，3，4，5，6，7，8，10，11，……\n\n给定正整数 n，请你返回新数列中第 n 个数字是多少。1 是新数列中的第一个数字。",
        example: "示例 1：\n\n输入：9\n输出：10\n\n提示：\n\n1 <= n <= 8 * 10^8",
        solutions: [
            {
                code: ``,
                timeComplexity: "O(log n)",
                spaceComplexity: "O(1)"
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
            <p>👋欢迎来到小衡的力扣题解！</p>
            <p>从左侧选择一道题目开始查看。</p>
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
