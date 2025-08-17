import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { zhTW } from 'date-fns/locale';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  ArrowLeftIcon,
  ShareIcon 
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';
import StructuredData from '../../components/StructuredData';

// 模擬文章資料
const articles = [
  {
    id: 1,
    title: 'Java物件導向程式設計完整指南',
    slug: 'java-oop-complete-guide',
    excerpt: '深入理解Java物件導向的核心概念，包含類別、物件、繼承、多型和封裝等重要主題。',
    content: `
# Java物件導向程式設計完整指南

物件導向程式設計（Object-Oriented Programming, OOP）是現代軟體開發的核心概念之一。Java作為純物件導向語言，完美地體現了OOP的各種特性。

## 1. 什麼是物件導向？

物件導向是一種程式設計思維，它將現實世界中的事物抽象為物件，每個物件都有自己的屬性（資料）和方法（行為）。

### 核心概念：
- **類別（Class）**：物件的藍圖或模板
- **物件（Object）**：類別的實例
- **屬性（Attribute）**：物件的資料
- **方法（Method）**：物件的行為

## 2. 封裝（Encapsulation）

封裝是將資料和操作資料的方法綁定在一起，並隱藏內部實作細節的原則。

\`\`\`java
public class Student {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        }
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        }
    }
}
\`\`\`

## 3. 繼承（Inheritance）

繼承允許新類別基於現有類別建立，子類別可以繼承父類別的屬性和方法。

\`\`\`java
public class Person {
    protected String name;
    protected int age;
    
    public void introduce() {
        System.out.println("我是 " + name + "，今年 " + age + " 歲");
    }
}

public class Student extends Person {
    private String studentId;
    private String major;
    
    @Override
    public void introduce() {
        System.out.println("我是學生 " + name + "，學號：" + studentId);
    }
    
    public void study() {
        System.out.println(name + " 正在學習 " + major);
    }
}
\`\`\`

## 4. 多型（Polymorphism）

多型允許同一個介面表示不同的底層資料型態，提供了程式的靈活性。

\`\`\`java
public abstract class Animal {
    public abstract void makeSound();
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("汪汪！");
    }
}

public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("喵喵！");
    }
}

// 使用多型
Animal[] animals = {new Dog(), new Cat()};
for (Animal animal : animals) {
    animal.makeSound(); // 根據實際型態調用對應方法
}
\`\`\`

## 5. 抽象（Abstraction）

抽象是隱藏複雜實作細節，只暴露必要功能的過程。

\`\`\`java
public interface Drawable {
    void draw();
    void setColor(String color);
}

public class Circle implements Drawable {
    private String color;
    private int radius;
    
    @Override
    public void draw() {
        System.out.println("繪製一個" + color + "的圓形，半徑：" + radius);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
}
\`\`\`

## 6. 實際應用範例

讓我們建立一個簡單的銀行帳戶系統來展示所有OOP概念：

\`\`\`java
public abstract class BankAccount {
    protected String accountNumber;
    protected double balance;
    protected String ownerName;
    
    public BankAccount(String accountNumber, String ownerName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0.0;
    }
    
    public abstract void withdraw(double amount);
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("存款成功，餘額：" + balance);
        }
    }
    
    public double getBalance() {
        return balance;
    }
}

public class SavingsAccount extends BankAccount {
    private double interestRate;
    
    public SavingsAccount(String accountNumber, String ownerName, double interestRate) {
        super(accountNumber, ownerName);
        this.interestRate = interestRate;
    }
    
    @Override
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("提款成功，餘額：" + balance);
        } else {
            System.out.println("餘額不足或金額無效");
        }
    }
    
    public void addInterest() {
        balance += balance * interestRate;
        System.out.println("利息已添加，新餘額：" + balance);
    }
}
\`\`\`

## 總結

物件導向程式設計提供了：

1. **程式碼重用性**：透過繼承和組合
2. **維護性**：封裝使程式碼更容易維護
3. **擴展性**：多型和抽象提供靈活的設計
4. **可讀性**：模擬現實世界的概念

掌握這些概念對於成為優秀的Java程式設計師至關重要。建議多寫程式碼實作，深化理解。
    `,
    category: 'Java',
    author: '張工程師',
    publishedAt: new Date('2024-01-15'),
    readTime: 15,
    tags: ['Java', '物件導向', '程式設計基礎'],
    featured: true,
  },
  {
    id: 2,
    title: 'Python資料結構與演算法實戰',
    slug: 'python-data-structures-algorithms',
    excerpt: '從基礎的陣列、串列到進階的樹狀結構和圖論，用Python實作常見的資料結構和演算法。',
    content: `
# Python資料結構與演算法實戰

資料結構和演算法是電腦科學的基礎，也是程式設計師必須掌握的核心技能。Python因其簡潔的語法和豐富的內建資料結構，成為學習演算法的理想語言。

## 1. 基礎資料結構

### 陣列與串列

Python的list是動態陣列，提供了靈活的操作方式：

\`\`\`python
# 基本操作
arr = [1, 2, 3, 4, 5]
arr.append(6)      # 添加元素
arr.insert(0, 0)   # 在指定位置插入
arr.remove(3)      # 移除指定值
arr.pop()          # 移除最後一個元素

# 串列推導式
squares = [x**2 for x in range(10)]
even_numbers = [x for x in range(20) if x % 2 == 0]
\`\`\`

### 堆疊（Stack）

\`\`\`python
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# 使用範例
stack = Stack()
stack.push(1)
stack.push(2)
print(stack.pop())  # 輸出: 2
\`\`\`

### 佇列（Queue）

\`\`\`python
from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.popleft()
        return None
    
    def front(self):
        if not self.is_empty():
            return self.items[0]
        return None
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
\`\`\`

## 2. 進階資料結構

### 二元樹

\`\`\`python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BinaryTree:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        if not self.root:
            self.root = TreeNode(val)
        else:
            self._insert_recursive(self.root, val)
    
    def _insert_recursive(self, node, val):
        if val < node.val:
            if node.left:
                self._insert_recursive(node.left, val)
            else:
                node.left = TreeNode(val)
        else:
            if node.right:
                self._insert_recursive(node.right, val)
            else:
                node.right = TreeNode(val)
    
    def inorder_traversal(self, node):
        result = []
        if node:
            result.extend(self.inorder_traversal(node.left))
            result.append(node.val)
            result.extend(self.inorder_traversal(node.right))
        return result
\`\`\`

### 雜湊表

\`\`\`python
class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        return hash(key) % self.size
    
    def put(self, key, value):
        hash_index = self._hash(key)
        bucket = self.table[hash_index]
        
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return
        
        bucket.append((key, value))
    
    def get(self, key):
        hash_index = self._hash(key)
        bucket = self.table[hash_index]
        
        for k, v in bucket:
            if k == key:
                return v
        
        raise KeyError(key)
    
    def remove(self, key):
        hash_index = self._hash(key)
        bucket = self.table[hash_index]
        
        for i, (k, v) in enumerate(bucket):
            if k == key:
                del bucket[i]
                return
        
        raise KeyError(key)
\`\`\`

## 3. 經典演算法

### 排序演算法

#### 快速排序

\`\`\`python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

# 測試
numbers = [3, 6, 8, 10, 1, 2, 1]
print(quicksort(numbers))  # [1, 1, 2, 3, 6, 8, 10]
\`\`\`

#### 合併排序

\`\`\`python
def mergesort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = mergesort(arr[:mid])
    right = mergesort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result
\`\`\`

### 搜尋演算法

#### 二元搜尋

\`\`\`python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # 找不到

# 測試
sorted_arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(sorted_arr, 7))  # 輸出: 3
\`\`\`

## 4. 動態規劃

### 費氏數列

\`\`\`python
def fibonacci_dp(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

# 空間優化版本
def fibonacci_optimized(n):
    if n <= 1:
        return n
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    
    return b
\`\`\`

### 背包問題

\`\`\`python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(
                    dp[i-1][w],
                    dp[i-1][w-weights[i-1]] + values[i-1]
                )
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]

# 測試
weights = [1, 3, 4, 5]
values = [1, 4, 5, 7]
capacity = 7
print(knapsack(weights, values, capacity))  # 輸出: 9
\`\`\`

## 5. 圖論演算法

### 深度優先搜尋（DFS）

\`\`\`python
def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start, end=' ')
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# 範例圖
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

dfs(graph, 'A')  # 輸出: A B D E F C
\`\`\`

### 廣度優先搜尋（BFS）

\`\`\`python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.add(node)
            print(node, end=' ')
            
            for neighbor in graph[node]:
                if neighbor not in visited:
                    queue.append(neighbor)

bfs(graph, 'A')  # 輸出: A B C D E F
\`\`\`

## 總結

本文涵蓋了Python中的核心資料結構和演算法：

1. **基礎資料結構**：陣列、堆疊、佇列
2. **進階資料結構**：二元樹、雜湊表
3. **排序演算法**：快速排序、合併排序
4. **搜尋演算法**：二元搜尋
5. **動態規劃**：費氏數列、背包問題
6. **圖論**：DFS、BFS

理解這些概念並能靈活運用，將大大提升你的程式設計能力。建議多練習實作，並分析時間複雜度和空間複雜度。
    `,
    category: 'Python',
    author: '李工程師',
    publishedAt: new Date('2024-01-12'),
    readTime: 20,
    tags: ['Python', '資料結構', '演算法'],
    featured: true,
  },
];

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    return {
      title: '文章不存在',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function BlogArticlePage({ params }: Props) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // 取得相關文章（同分類的其他文章）
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <StructuredData type="Article" data={article} />
      <article className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              返回文章列表
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-x-4 text-xs mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {article.category}
              </span>
              {article.featured && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  精選文章
                </span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl leading-8 text-gray-600 mb-8">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-x-2">
                <UserIcon className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <CalendarIcon className="h-4 w-4" />
                <time dateTime={article.publishedAt.toISOString()}>
                  {format(article.publishedAt, 'yyyy年MM月dd日', { locale: zhTW })}
                </time>
              </div>
              <div className="flex items-center gap-x-2">
                <ClockIcon className="h-4 w-4" />
                <span>{article.readTime}分鐘閱讀</span>
              </div>
              <button className="flex items-center gap-x-2 text-blue-600 hover:text-blue-500 transition-colors">
                <ShareIcon className="h-4 w-4" />
                <span>分享</span>
              </button>
            </div>
            
            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/\n/g, '<br>').replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>') 
              }} 
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <span className="text-sm text-gray-600">作者：</span>
                <span className="text-sm font-medium text-gray-900">{article.author}</span>
              </div>
              <button className="flex items-center gap-x-2 text-sm text-blue-600 hover:text-blue-500 transition-colors">
                <ShareIcon className="h-4 w-4" />
                <span>分享文章</span>
              </button>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                相關文章
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.id} className="flex flex-col items-start">
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {relatedArticle.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                      <Link href={`/blog/${relatedArticle.slug}`}>
                        <span className="absolute inset-0" />
                        {relatedArticle.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4 text-sm text-gray-500">
                    <div className="flex items-center gap-x-2">
                      <UserIcon className="h-4 w-4" />
                      <span>{relatedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <ClockIcon className="h-4 w-4" />
                      <span>{relatedArticle.readTime}分鐘</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
