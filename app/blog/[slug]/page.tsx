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
  {
    id: 3,
    title: 'React Hooks 深度解析與最佳實踐',
    slug: 'react-hooks-deep-dive',
    excerpt: '深入理解React Hooks的工作原理，掌握useState、useEffect、useContext等核心Hook的使用技巧和最佳實踐。',
    content: `
# React Hooks 深度解析與最佳實踐

React Hooks是React 16.8引入的革命性功能，它讓函數組件也能擁有狀態和生命週期。本文將深入探討Hooks的核心概念和實際應用。

## 1. Hooks的基本概念

Hooks是讓你在函數組件中"鉤入"React狀態和生命週期特性的函數。

### 為什麼需要Hooks？

- **解決類組件的複雜性**：避免this綁定、生命週期方法分散等問題
- **邏輯重用**：自定義Hook讓邏輯更容易在不同組件間共享
- **更好的程式碼組織**：相關邏輯可以放在一起

## 2. useState Hook

useState是最基礎的Hook，用於在函數組件中添加狀態。

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div>
      <p>計數: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
      
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="輸入姓名"
      />
      <p>你好, {name}!</p>
    </div>
  );
}
\`\`\`

### useState的最佳實踐

\`\`\`jsx
// 1. 使用函數式更新避免依賴舊狀態
const [count, setCount] = useState(0);

// 好的做法
setCount(prevCount => prevCount + 1);

// 2. 複雜狀態使用useReducer
const [state, dispatch] = useReducer(reducer, initialState);

// 3. 避免在useState中放置計算結果
// 不好的做法
const [fullName, setFullName] = useState(firstName + ' ' + lastName);

// 好的做法
const fullName = firstName + ' ' + lastName;
\`\`\`

## 3. useEffect Hook

useEffect用於處理副作用，如API調用、訂閱、手動DOM操作等。

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('獲取用戶資料失敗:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // 依賴陣列

  if (loading) return <div>載入中...</div>;
  if (!user) return <div>用戶不存在</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

### useEffect的依賴陣列

\`\`\`jsx
// 1. 空依賴陣列 - 只在組件掛載時執行一次
useEffect(() => {
  console.log('組件已掛載');
}, []);

// 2. 有依賴 - 當依賴變化時重新執行
useEffect(() => {
  document.title = \`新消息: \${messageCount}\`;
}, [messageCount]);

// 3. 無依賴陣列 - 每次渲染都執行（通常不推薦）
useEffect(() => {
  console.log('每次渲染都執行');
});

// 4. 清理函數
useEffect(() => {
  const timer = setInterval(() => {
    console.log('定時器執行');
  }, 1000);

  return () => {
    clearInterval(timer); // 清理函數
  };
}, []);
\`\`\`

## 4. useContext Hook

useContext用於在組件樹中共享資料，避免props drilling。

\`\`\`jsx
import React, { createContext, useContext, useState } from 'react';

// 創建Context
const ThemeContext = createContext();

// Provider組件
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 使用Context的組件
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '10px 20px',
        border: '1px solid #ccc'
      }}
    >
      切換主題
    </button>
  );
}

// 應用根組件
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>主題切換範例</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}
\`\`\`

## 5. 自定義Hooks

自定義Hook是重用狀態邏輯的強大工具。

\`\`\`jsx
// 自定義Hook: 使用localStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// 自定義Hook: API調用
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// 使用自定義Hook
function UserList() {
  const { data: users, loading, error } = useApi('/api/users');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  if (loading) return <div>載入中...</div>;
  if (error) return <div>錯誤: {error.message}</div>;

  return (
    <div>
      <h2>用戶列表</h2>
      <ul>
        {users?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## 6. useReducer Hook

useReducer適用於複雜狀態邏輯的場景。

\`\`\`jsx
import React, { useReducer } from 'react';

// 初始狀態
const initialState = {
  count: 0,
  step: 1
};

// Reducer函數
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('未知的action類型');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h2>計數器: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          增加
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          減少
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          重置
        </button>
      </div>
      <div>
        <label>
          步長:
          <input
            type="number"
            value={state.step}
            onChange={(e) => dispatch({
              type: 'setStep',
              payload: parseInt(e.target.value) || 1
            })}
          />
        </label>
      </div>
    </div>
  );
}
\`\`\`

## 7. 性能優化Hooks

### useMemo和useCallback

\`\`\`jsx
import React, { useState, useMemo, useCallback } from 'react';

function ExpensiveComponent({ items, filter }) {
  // 使用useMemo緩存計算結果
  const filteredItems = useMemo(() => {
    console.log('重新計算過濾結果');
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  // 使用useCallback緩存函數
  const handleItemClick = useCallback((item) => {
    console.log('點擊項目:', item);
  }, []);

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item} onClick={() => handleItemClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function ParentComponent() {
  const [items, setItems] = useState(['apple', 'banana', 'cherry']);
  const [filter, setFilter] = useState('');

  return (
    <div>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="過濾項目"
      />
      <ExpensiveComponent items={items} filter={filter} />
    </div>
  );
}
\`\`\`

## 8. 常見陷阱和最佳實踐

### 1. 避免在useEffect中缺少依賴

\`\`\`jsx
// 錯誤的做法
function Example({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(id); // 缺少id依賴
  }, []); // 這會導致ESLint警告

  // 正確的做法
  useEffect(() => {
    fetchData(id);
  }, [id]);
}
\`\`\`

### 2. 避免無限循環

\`\`\`jsx
// 錯誤的做法 - 會導致無限循環
useEffect(() => {
  setCount(count + 1);
}, [count]);

// 正確的做法
useEffect(() => {
  setCount(prev => prev + 1);
}, []); // 只在掛載時執行一次
\`\`\`

### 3. 正確使用清理函數

\`\`\`jsx
useEffect(() => {
  const subscription = someAPI.subscribe();
  
  return () => {
    subscription.unsubscribe(); // 清理訂閱
  };
}, []);
\`\`\`

## 總結

React Hooks提供了：

1. **簡化的狀態管理**：useState和useReducer
2. **副作用處理**：useEffect
3. **上下文共享**：useContext
4. **性能優化**：useMemo和useCallback
5. **邏輯重用**：自定義Hooks

掌握這些Hooks的使用技巧，將大大提升React開發效率和程式碼品質。記住Hooks的規則：
- 只在函數組件頂層調用Hooks
- 只在React函數中調用Hooks
- 保持依賴陣列的正確性
    `,
    category: 'React',
    author: '王工程師',
    publishedAt: new Date('2024-01-10'),
    readTime: 18,
    tags: ['React', 'Hooks', '前端開發'],
    featured: true,
  },
  {
    id: 4,
    title: 'Node.js 後端開發實戰指南',
    slug: 'nodejs-backend-development-guide',
    excerpt: '從零開始建立Node.js後端服務，包含Express框架、資料庫整合、API設計、身份驗證和部署等實用技巧。',
    content: `
# Node.js 後端開發實戰指南

Node.js已經成為現代後端開發的主流技術之一。本文將帶你從零開始建立一個完整的Node.js後端服務。

## 1. 專案初始化與環境設置

### 建立專案結構

\`\`\`bash
mkdir my-nodejs-api
cd my-nodejs-api
npm init -y
\`\`\`

### 安裝必要依賴

\`\`\`bash
npm install express cors helmet morgan dotenv mongoose bcryptjs jsonwebtoken
npm install --save-dev nodemon
\`\`\`

### 基本專案結構

\`\`\`
my-nodejs-api/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── app.js
├── .env
├── package.json
└── README.md
\`\`\`

## 2. Express 應用程式設置

### 基本Express應用程式

\`\`\`javascript
// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中間件
app.use(helmet()); // 安全標頭
app.use(cors()); // CORS支援
app.use(morgan('combined')); // 日誌記錄
app.use(express.json()); // JSON解析
app.use(express.urlencoded({ extended: true }));

// 路由
app.get('/', (req, res) => {
  res.json({ message: '歡迎使用 Node.js API' });
});

// 錯誤處理中間件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '伺服器內部錯誤' });
});

// 404處理
app.use('*', (req, res) => {
  res.status(404).json({ error: '路由不存在' });
});

app.listen(PORT, () => {
  console.log(\`伺服器運行在 http://localhost:\${PORT}\`);
});

module.exports = app;
\`\`\`

## 3. 資料庫整合 (MongoDB)

### 資料庫連接

\`\`\`javascript
// src/config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(\`MongoDB 連接成功: \${conn.connection.host}\`);
  } catch (error) {
    console.error('資料庫連接失敗:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
\`\`\`

### 使用者模型

\`\`\`javascript
// src/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, '請輸入有效的電子郵件']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// 密碼加密中間件
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// 密碼驗證方法
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
\`\`\`

### 文章模型

\`\`\`javascript
// src/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  publishedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// 索引
postSchema.index({ title: 'text', content: 'text' });
postSchema.index({ author: 1, createdAt: -1 });

module.exports = mongoose.model('Post', postSchema);
\`\`\`

## 4. 身份驗證與授權

### JWT工具函數

\`\`\`javascript
// src/utils/jwt.js
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('無效的token');
  }
};

module.exports = { generateToken, verifyToken };
\`\`\`

### 身份驗證中間件

\`\`\`javascript
// src/middleware/auth.js
const { verifyToken } = require('../utils/jwt');
const User = require('../models/User');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: '缺少認證token' });
    }

    const decoded = verifyToken(token);
    const user = await User.findById(decoded.userId).select('-password');
    
    if (!user) {
      return res.status(401).json({ error: '用戶不存在' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ error: '無效的token' });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: '權限不足' 
      });
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRoles };
\`\`\`

## 5. 控制器層

### 使用者控制器

\`\`\`javascript
// src/controllers/userController.js
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

// 註冊
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 檢查用戶是否已存在
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        error: '用戶名或電子郵件已存在'
      });
    }

    // 創建新用戶
    const user = new User({
      username,
      email,
      password
    });

    await user.save();

    // 生成token
    const token = generateToken(user._id);

    res.status(201).json({
      message: '註冊成功',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({
      error: '註冊失敗',
      details: error.message
    });
  }
};

// 登入
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 查找用戶
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        error: '電子郵件或密碼錯誤'
      });
    }

    // 驗證密碼
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: '電子郵件或密碼錯誤'
      });
    }

    // 生成token
    const token = generateToken(user._id);

    res.json({
      message: '登入成功',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({
      error: '登入失敗',
      details: error.message
    });
  }
};

// 獲取用戶資料
const getProfile = async (req, res) => {
  try {
    res.json({
      user: req.user
    });
  } catch (error) {
    res.status(500).json({
      error: '獲取用戶資料失敗'
    });
  }
};

module.exports = {
  register,
  login,
  getProfile
};
\`\`\`

### 文章控制器

\`\`\`javascript
// src/controllers/postController.js
const Post = require('../models/Post');

// 創建文章
const createPost = async (req, res) => {
  try {
    const { title, content, tags, status } = req.body;
    
    const post = new Post({
      title,
      content,
      tags,
      status,
      author: req.user._id,
      publishedAt: status === 'published' ? new Date() : null
    });

    await post.save();
    
    await post.populate('author', 'username');
    
    res.status(201).json({
      message: '文章創建成功',
      post
    });
  } catch (error) {
    res.status(500).json({
      error: '創建文章失敗',
      details: error.message
    });
  }
};

// 獲取所有文章
const getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, author, search } = req.query;
    
    const query = {};
    
    if (status) query.status = status;
    if (author) query.author = author;
    if (search) {
      query.$text = { $search: search };
    }

    const posts = await Post.find(query)
      .populate('author', 'username')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Post.countDocuments(query);

    res.json({
      posts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({
      error: '獲取文章失敗',
      details: error.message
    });
  }
};

// 獲取單篇文章
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username');

    if (!post) {
      return res.status(404).json({
        error: '文章不存在'
      });
    }

    res.json({ post });
  } catch (error) {
    res.status(500).json({
      error: '獲取文章失敗',
      details: error.message
    });
  }
};

// 更新文章
const updatePost = async (req, res) => {
  try {
    const { title, content, tags, status } = req.body;
    
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({
        error: '文章不存在'
      });
    }

    // 檢查權限
    if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        error: '無權限修改此文章'
      });
    }

    post.title = title || post.title;
    post.content = content || post.content;
    post.tags = tags || post.tags;
    post.status = status || post.status;
    
    if (status === 'published' && post.status !== 'published') {
      post.publishedAt = new Date();
    }

    await post.save();
    await post.populate('author', 'username');

    res.json({
      message: '文章更新成功',
      post
    });
  } catch (error) {
    res.status(500).json({
      error: '更新文章失敗',
      details: error.message
    });
  }
};

// 刪除文章
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({
        error: '文章不存在'
      });
    }

    // 檢查權限
    if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        error: '無權限刪除此文章'
      });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.json({
      message: '文章刪除成功'
    });
  } catch (error) {
    res.status(500).json({
      error: '刪除文章失敗',
      details: error.message
    });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
};
\`\`\`

## 6. 路由設置

### 使用者路由

\`\`\`javascript
// src/routes/userRoutes.js
const express = require('express');
const { register, login, getProfile } = require('../controllers/userController');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateToken, getProfile);

module.exports = router;
\`\`\`

### 文章路由

\`\`\`javascript
// src/routes/postRoutes.js
const express = require('express');
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} = require('../controllers/postController');
const { authenticateToken, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

// 公開路由
router.get('/', getPosts);
router.get('/:id', getPost);

// 需要認證的路由
router.post('/', authenticateToken, createPost);
router.put('/:id', authenticateToken, updatePost);
router.delete('/:id', authenticateToken, deletePost);

module.exports = router;
\`\`\`

### 主路由

\`\`\`javascript
// src/routes/index.js
const express = require('express');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

const router = express.Router();

router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);

module.exports = router;
\`\`\`

## 7. 環境變數配置

\`\`\`bash
# .env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/my-nodejs-api
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
\`\`\`

## 8. 錯誤處理與驗證

### 自定義錯誤類別

\`\`\`javascript
// src/utils/errors.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = \`\${statusCode}\`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
\`\`\`

### 請求驗證中間件

\`\`\`javascript
// src/middleware/validation.js
const { validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: '請求驗證失敗',
      details: errors.array()
    });
  }
  
  next();
};

module.exports = validateRequest;
\`\`\`

## 9. 測試設置

### 基本測試

\`\`\`javascript
// tests/user.test.js
const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User');

describe('User API', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('POST /api/users/register', () => {
    it('應該成功註冊新用戶', async () => {
      const userData = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      };

      const response = await request(app)
        .post('/api/users/register')
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty('token');
      expect(response.body.user.username).toBe(userData.username);
    });
  });
});
\`\`\`

## 10. 部署準備

### PM2配置

\`\`\`javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-nodejs-api',
    script: './src/app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
\`\`\`

### Docker配置

\`\`\`dockerfile
# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

## 總結

這個Node.js後端開發指南涵蓋了：

1. **專案結構設置**：清晰的目錄組織
2. **Express應用程式**：基本設置和中間件
3. **資料庫整合**：MongoDB和Mongoose
4. **身份驗證**：JWT和密碼加密
5. **API設計**：RESTful API設計模式
6. **錯誤處理**：統一的錯誤處理機制
7. **測試**：基本的API測試
8. **部署**：生產環境部署準備

這個架構可以作為大多數Node.js後端專案的基礎，根據具體需求進行擴展和修改。
    `,
    category: 'Node.js',
    author: '陳工程師',
    publishedAt: new Date('2024-01-08'),
    readTime: 25,
    tags: ['Node.js', 'Express', 'MongoDB', '後端開發'],
    featured: false,
  },
  {
    id: 5,
    title: 'TypeScript 進階開發技巧',
    slug: 'typescript-advanced-techniques',
    excerpt: '深入TypeScript進階特性，包含泛型、裝飾器、高階類型、模組系統和實用工具類型等核心概念。',
    content: `
# TypeScript 進階開發技巧

TypeScript作為JavaScript的超集，提供了強大的型別系統和進階功能。本文將深入探討TypeScript的進階特性。

## 1. 泛型（Generics）

泛型是TypeScript中最強大的特性之一，允許你創建可重用的組件。

### 基本泛型

\`\`\`typescript
// 基本泛型函數
function identity<T>(arg: T): T {
  return arg;
}

// 使用
const output1 = identity<string>("hello");
const output2 = identity("hello"); // 型別推斷

// 泛型介面
interface GenericIdentityFn<T> {
  (arg: T): T;
}

const myIdentity: GenericIdentityFn<number> = identity;
\`\`\`

### 泛型約束

\`\`\`typescript
// 使用extends約束泛型
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 正確使用
loggingIdentity("hello"); // 字串有length屬性
loggingIdentity([1, 2, 3]); // 陣列有length屬性

// 錯誤使用
// loggingIdentity(123); // 數字沒有length屬性

// 多個約束
function combine<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = combine({ name: "John" }, { age: 30 });
// result: { name: string; age: number }
\`\`\`

### 泛型類別

\`\`\`typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

// 泛型堆疊實現
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// 使用
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
\`\`\`

## 2. 高階類型（Advanced Types）

### 聯合類型與交叉類型

\`\`\`typescript
// 聯合類型
type StringOrNumber = string | number;

function processValue(value: StringOrNumber): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toString();
  }
}

// 交叉類型
interface Person {
  name: string;
  age: number;
}

interface Employee {
  id: number;
  department: string;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "John",
  age: 30,
  id: 123,
  department: "Engineering"
};
\`\`\`

### 條件類型

\`\`\`typescript
// 基本條件類型
type NonNullable<T> = T extends null | undefined ? never : T;

type T0 = NonNullable<string | number | null>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]

// 分發條件類型
type ToArray<T> = T extends any ? T[] : never;

type StrNumArr = ToArray<string | number>; // string[] | number[]

// 過濾聯合類型
type Filter<T, U> = T extends U ? T : never;

type T2 = Filter<string | number | boolean, string | number>; // string | number
\`\`\`

### 映射類型

\`\`\`typescript
interface Person {
  name: string;
  age: number;
  address: string;
}

// 將所有屬性變為可選
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type PartialPerson = Partial<Person>;
// { name?: string; age?: number; address?: string; }

// 將所有屬性變為必需
type Required<T> = {
  [P in keyof T]-?: T[P];
};

// 將所有屬性變為唯讀
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 選擇特定屬性
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type PersonNameAge = Pick<Person, 'name' | 'age'>;
// { name: string; age: number; }

// 排除特定屬性
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type PersonWithoutAge = Omit<Person, 'age'>;
// { name: string; address: string; }
\`\`\`

## 3. 裝飾器（Decorators）

裝飾器是一種特殊的宣告，可以附加到類別、方法、屬性或參數上。

### 類別裝飾器

\`\`\`typescript
// 基本類別裝飾器
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}

// 工廠裝飾器
function color(value: string) {
  return function (target: Function) {
    // 保存對構造函數的引用
    const original = target;
    
    // 創建新的構造函數
    const f: any = function (...args: any[]) {
      console.log("Creating new instance with color: " + value);
      return new original(...args);
    };
    
    // 複製原型
    f.prototype = original.prototype;
    
    return f;
  };
}

@color("red")
class Car {
  constructor(public brand: string) {}
}

const car = new Car("Toyota"); // 輸出: Creating new instance with color: red
\`\`\`

### 方法裝飾器

\`\`\`typescript
// 方法裝飾器
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyKey} with args: \${JSON.stringify(args)}\`);
    const result = method.apply(this, args);
    console.log(\`\${propertyKey} returned: \${JSON.stringify(result)}\`);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
  
  @log
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculator();
calc.add(2, 3); // 輸出調用和返回日誌
\`\`\`

### 屬性裝飾器

\`\`\`typescript
// 屬性裝飾器
function format(formatString: string) {
  return function (target: any, propertyKey: string) {
    let value = target[propertyKey];
    
    const getter = function () {
      return value;
    };
    
    const setter = function (newVal: string) {
      value = newVal.replace(/\\s+/g, ' ').trim();
    };
    
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

class User {
  @format("trim")
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("  John   Doe  ");
console.log(user.name); // "John Doe"
\`\`\`

## 4. 實用工具類型

### 內建工具類型

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
  readonly createdAt: Date;
}

// Partial - 所有屬性變為可選
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number; createdAt?: Date; }

// Required - 所有屬性變為必需
type RequiredUser = Required<User>;
// { id: number; name: string; email: string; age: number; readonly createdAt: Date; }

// Readonly - 所有屬性變為唯讀
type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string; readonly email: string; readonly age?: number; readonly createdAt: Date; }

// Pick - 選擇特定屬性
type UserBasicInfo = Pick<User, 'id' | 'name' | 'email'>;
// { id: number; name: string; email: string; }

// Omit - 排除特定屬性
type UserWithoutId = Omit<User, 'id'>;
// { name: string; email: string; age?: number; readonly createdAt: Date; }

// Record - 創建鍵值對類型
type UserRoles = Record<string, string>;
// { [key: string]: string; }

// ReturnType - 獲取函數返回類型
function getUser(): User {
  return { id: 1, name: "John", email: "john@example.com", createdAt: new Date() };
}
type UserReturnType = ReturnType<typeof getUser>; // User

// Parameters - 獲取函數參數類型
function createUser(id: number, name: string, email: string): User {
  return { id, name, email, createdAt: new Date() };
}
type CreateUserParams = Parameters<typeof createUser>; // [number, string, string]
\`\`\`

### 自定義工具類型

\`\`\`typescript
// 深度Partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface NestedObject {
  user: {
    profile: {
      name: string;
      age: number;
    };
    settings: {
      theme: string;
    };
  };
}

type DeepPartialNested = DeepPartial<NestedObject>;
// user?: { profile?: { name?: string; age?: number; }; settings?: { theme?: string; }; }

// 可變參數函數類型
type VariadicFunction<T extends any[], R> = (...args: T) => R;

// 非空類型
type NonNullable<T> = T extends null | undefined ? never : T;

// 字面量聯合類型
type StringLiteralUnion<T extends string> = T | Omit<string, T>;

// 條件類型工具
type If<C extends boolean, T, F> = C extends true ? T : F;
type IsString<T> = T extends string ? true : false;
\`\`\`

## 5. 模組系統

### 模組導入導出

\`\`\`typescript
// 基本導出
export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserService {
  private users: User[] = [];
  
  addUser(user: User): void {
    this.users.push(user);
  }
  
  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }
}

// 默認導出
export default class Database {
  connect(): Promise<void> {
    return Promise.resolve();
  }
}

// 重新導出
export { UserService as UserManager } from './user-service';
export * from './types';

// 動態導入
async function loadModule() {
  const module = await import('./user-service');
  const userService = new module.UserService();
  return userService;
}
\`\`\`

### 命名空間

\`\`\`typescript
// 命名空間
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
  
  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.indexOf('@') !== -1;
    }
  }
  
  export class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.length === 5 && !isNaN(Number(s));
    }
  }
}

// 使用命名空間
let emailValidator = new Validation.EmailValidator();
let zipCodeValidator = new Validation.ZipCodeValidator();

// 多檔案命名空間
// validation.ts
export namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }
}

// email-validator.ts
import { Validation } from './validation';

export namespace Validation {
  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.indexOf('@') !== -1;
    }
  }
}
\`\`\`

## 6. 進階模式

### 單例模式

\`\`\`typescript
class Singleton {
  private static instance: Singleton;
  private constructor() {}
  
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  
  doSomething(): void {
    console.log("Singleton is doing something");
  }
}

// 使用
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
\`\`\`

### 工廠模式

\`\`\`typescript
interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  operation(): string {
    return "ConcreteProductA";
  }
}

class ConcreteProductB implements Product {
  operation(): string {
    return "ConcreteProductB";
  }
}

abstract class Creator {
  abstract factoryMethod(): Product;
  
  someOperation(): string {
    const product = this.factoryMethod();
    return product.operation();
  }
}

class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// 使用
const creatorA = new ConcreteCreatorA();
const creatorB = new ConcreteCreatorB();

console.log(creatorA.someOperation()); // "ConcreteProductA"
console.log(creatorB.someOperation()); // "ConcreteProductB"
\`\`\`

### 觀察者模式

\`\`\`typescript
interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: string = '';
  
  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }
    
    console.log('Subject: Attached an observer.');
    this.observers.push(observer);
  }
  
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }
    
    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }
  
  notify(): void {
    console.log('Subject: Notifying observers...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
  
  someBusinessLogic(): void {
    console.log('Subject: I\'m doing something important.');
    this.state = Math.random().toString(36).substr(2, 9);
    console.log(\`Subject: My state has just changed to: \${this.state}\`);
    this.notify();
  }
  
  getState(): string {
    return this.state;
  }
}

class ConcreteObserverA implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.getState() < "3") {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

class ConcreteObserverB implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.getState() === "0" || subject.getState() >= "2")) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}

// 使用
const subject = new ConcreteSubject();
const observer1 = new ConcreteObserverA();
const observer2 = new ConcreteObserverB();

subject.attach(observer1);
subject.attach(observer2);

subject.someBusinessLogic();
\`\`\`

## 總結

TypeScript的進階特性提供了：

1. **泛型**：類型安全的可重用組件
2. **高階類型**：複雜的類型操作和轉換
3. **裝飾器**：元程式設計和AOP
4. **工具類型**：內建和自定義的類型工具
5. **模組系統**：組織和重用程式碼
6. **設計模式**：面向對象的最佳實踐

掌握這些進階特性，將大大提升TypeScript開發的效率和程式碼品質。
    `,
    category: 'TypeScript',
    author: '林工程師',
    publishedAt: new Date('2024-01-05'),
    readTime: 22,
    tags: ['TypeScript', '泛型', '裝飾器', '高階類型'],
    featured: false,
  },
  {
    id: 6,
    title: 'Docker 容器化部署完整指南',
    slug: 'docker-containerization-guide',
    excerpt: '從基礎概念到實戰應用，學習Docker容器化技術，包含映像檔建立、容器管理、Docker Compose和生產環境部署。',
    content: `
# Docker 容器化部署完整指南

Docker已經成為現代軟體開發和部署的標準工具。本文將帶你從零開始掌握Docker的核心概念和實戰應用。

## 1. Docker 基礎概念

### 什麼是Docker？

Docker是一個開源的容器化平台，允許開發者將應用程式和其依賴項打包到輕量級的容器中，確保在任何環境中都能一致運行。

### 核心概念

- **映像檔（Image）**：包含應用程式和運行環境的唯讀模板
- **容器（Container）**：映像檔的運行實例
- **Dockerfile**：定義映像檔內容的腳本
- **Registry**：儲存和分發映像檔的服務

## 2. Docker 安裝與設置

### 安裝Docker

\`\`\`bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install docker.io
sudo systemctl start docker
sudo systemctl enable docker

# macOS
brew install --cask docker

# Windows
# 下載並安裝 Docker Desktop
\`\`\`

### 驗證安裝

\`\`\`bash
docker --version
docker run hello-world
\`\`\`

## 3. 基本Docker命令

### 映像檔管理

\`\`\`bash
# 搜尋映像檔
docker search nginx

# 拉取映像檔
docker pull nginx:latest
docker pull ubuntu:20.04

# 列出本地映像檔
docker images
docker image ls

# 刪除映像檔
docker rmi nginx:latest
docker image rm ubuntu:20.04

# 強制刪除映像檔
docker rmi -f nginx:latest
\`\`\`

### 容器管理

\`\`\`bash
# 運行容器
docker run nginx
docker run -d nginx  # 背景運行
docker run -p 8080:80 nginx  # 端口映射
docker run -v /host/path:/container/path nginx  # 卷掛載
docker run --name my-nginx nginx  # 指定容器名稱

# 列出運行中的容器
docker ps

# 列出所有容器
docker ps -a

# 停止容器
docker stop container_id
docker stop container_name

# 啟動容器
docker start container_id

# 重啟容器
docker restart container_id

# 刪除容器
docker rm container_id
docker rm -f container_id  # 強制刪除運行中的容器

# 查看容器日誌
docker logs container_id
docker logs -f container_id  # 即時查看日誌

# 進入容器
docker exec -it container_id /bin/bash
docker exec -it container_id /bin/sh
\`\`\`

## 4. Dockerfile 實戰

### 基本Dockerfile

\`\`\`dockerfile
# 使用官方Node.js映像檔作為基礎
FROM node:16-alpine

# 設置工作目錄
WORKDIR /app

# 複製package.json和package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm ci --only=production

# 複製應用程式程式碼
COPY . .

# 暴露端口
EXPOSE 3000

# 定義環境變數
ENV NODE_ENV=production

# 啟動應用程式
CMD ["npm", "start"]
\`\`\`

### 多階段建置

\`\`\`dockerfile
# 建置階段
FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# 生產階段
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

### 最佳實踐

\`\`\`dockerfile
# 使用特定版本標籤
FROM node:16.20-alpine

# 創建非root用戶
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# 設置工作目錄
WORKDIR /app

# 複製依賴檔案
COPY package*.json ./

# 安裝依賴
RUN npm ci --only=production && npm cache clean --force

# 切換到非root用戶
USER nodejs

# 複製應用程式
COPY --chown=nodejs:nodejs . .

# 健康檢查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

## 5. 建置和運行自定義映像檔

### 建置映像檔

\`\`\`bash
# 基本建置
docker build -t my-app .

# 指定標籤
docker build -t my-app:v1.0.0 .

# 指定Dockerfile路徑
docker build -f Dockerfile.prod -t my-app:prod .

# 建置時傳遞參數
docker build --build-arg NODE_ENV=production -t my-app:prod .
\`\`\`

### 運行自定義映像檔

\`\`\`bash
# 基本運行
docker run -d -p 3000:3000 my-app

# 指定環境變數
docker run -d -p 3000:3000 -e NODE_ENV=production my-app

# 掛載卷
docker run -d -p 3000:3000 -v /app/logs:/app/logs my-app

# 指定網路
docker run -d -p 3000:3000 --network my-network my-app
\`\`\`

## 6. Docker Compose

### 基本docker-compose.yml

\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
    depends_on:
      - db
    volumes:
      - ./logs:/app/logs
    networks:
      - app-network

  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app
    networks:
      - app-network

volumes:
  postgres_data:

networks:
  app-network:
    driver: bridge
\`\`\`

### 進階配置

\`\`\`yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        NODE_ENV: production
    image: my-app:latest
    container_name: my-app
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    env_file:
      - .env
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    volumes:
      - ./logs:/app/logs
      - ./uploads:/app/uploads
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  db:
    image: postgres:13-alpine
    container_name: postgres-db
    restart: unless-stopped
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    networks:
      - app-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mydb"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:6-alpine
    container_name: redis-cache
    restart: unless-stopped
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    networks:
      - app-network

  nginx:
    image: nginx:alpine
    container_name: nginx-proxy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    networks:
      - app-network

volumes:
  postgres_data:
    driver: local
  redis_data:
    driver: local

networks:
  app-network:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
\`\`\`

### Compose命令

\`\`\`bash
# 啟動服務
docker-compose up
docker-compose up -d  # 背景運行

# 停止服務
docker-compose down

# 重新建置並啟動
docker-compose up --build

# 查看服務狀態
docker-compose ps

# 查看服務日誌
docker-compose logs
docker-compose logs app
docker-compose logs -f app

# 執行命令
docker-compose exec app npm run test
docker-compose exec db psql -U user -d mydb

# 清理
docker-compose down -v  # 刪除卷
docker-compose down --rmi all  # 刪除映像檔
\`\`\`

## 7. 網路和儲存

### Docker網路

\`\`\`bash
# 列出網路
docker network ls

# 創建網路
docker network create my-network

# 連接容器到網路
docker run --network my-network nginx

# 查看網路詳情
docker network inspect my-network

# 刪除網路
docker network rm my-network
\`\`\`

### Docker卷

\`\`\`bash
# 創建卷
docker volume create my-volume

# 列出卷
docker volume ls

# 查看卷詳情
docker volume inspect my-volume

# 使用卷
docker run -v my-volume:/app/data nginx

# 刪除卷
docker volume rm my-volume
\`\`\`

## 8. 生產環境部署

### 安全最佳實踐

\`\`\`dockerfile
# 使用最小基礎映像檔
FROM node:16-alpine

# 創建非root用戶
RUN addgroup -g 1001 -S nodejs && \\
    adduser -S nodejs -u 1001

# 設置工作目錄
WORKDIR /app

# 複製依賴檔案
COPY package*.json ./

# 安裝依賴並清理快取
RUN npm ci --only=production && \\
    npm cache clean --force && \\
    rm -rf /tmp/*

# 切換到非root用戶
USER nodejs

# 複製應用程式
COPY --chown=nodejs:nodejs . .

# 設置檔案權限
RUN chmod -R 755 /app

# 健康檢查
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

### 多環境配置

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    environment:
      - NODE_ENV=\${NODE_ENV:-development}
    env_file:
      - .env.\${NODE_ENV:-development}

\`\`\`

# docker-compose.prod.yml
version: '3.8'

services:
  app:
    restart: unless-stopped
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
\`\`\`

### 監控和日誌

\`\`\`yaml
# 添加監控服務
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    networks:
      - app-network

  grafana:
    image: grafana/grafana
    ports:
      - "3001:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana_data:/var/lib/grafana
    networks:
      - app-network

volumes:
  grafana_data:
\`\`\`

## 9. CI/CD整合

### GitHub Actions範例

\`\`\`yaml
# .github/workflows/docker.yml
name: Docker Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1
    
    - name: Login to Docker Hub
      uses: docker/login-action@v1
      with:
        username: \${{ secrets.DOCKER_HUB_USERNAME }}
        password: \${{ secrets.DOCKER_HUB_TOKEN }}
    
    - name: Build and push
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        tags: |
          my-app:latest
          my-app:\${{ github.sha }}
        cache-from: type=registry,ref=my-app:buildcache
        cache-to: type=registry,ref=my-app:buildcache,mode=max
\`\`\`

## 10. 故障排除

### 常見問題

\`\`\`bash
# 查看容器資源使用情況
docker stats

# 查看容器詳細資訊
docker inspect container_id

# 查看映像檔歷史
docker history image_name

# 清理未使用的資源
docker system prune -a

# 查看Docker守護程序日誌
sudo journalctl -u docker.service

# 重啟Docker服務
sudo systemctl restart docker
\`\`\`

### 效能優化

\`\`\`dockerfile
# 使用多階段建置減少映像檔大小
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["npm", "start"]

# 使用.dockerignore減少建置上下文
\`\`\`
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
\`\`\`

## 總結

Docker容器化部署提供了：

1. **一致性**：確保開發、測試和生產環境的一致性
2. **可移植性**：在任何支援Docker的環境中運行
3. **隔離性**：應用程式和依賴項的完全隔離
4. **可擴展性**：輕鬆的水平擴展
5. **版本控制**：映像檔版本管理和回滾
6. **資源效率**：比虛擬機器更輕量級

掌握Docker技術，將大大提升應用程式的部署效率和可維護性。
    `,
    category: 'DevOps',
    author: '黃工程師',
    publishedAt: new Date('2024-01-03'),
    readTime: 20,
    tags: ['Docker', '容器化', 'DevOps', '部署'],
    featured: false,
  },
];

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  
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

// 轉義 JSX 標籤的函數
function escapeJSXTags(content: string): string {
  // 轉義常見的 JSX/HTML 標籤
  const jsxTags = [
    'div', 'span', 'button', 'input', 'form', 'label', 'select', 'option',
    'textarea', 'img', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'thead', 'tbody',
    'section', 'article', 'header', 'footer', 'nav', 'main', 'aside',
    'br', 'hr', 'strong', 'em', 'b', 'i', 'u', 'code', 'pre'
  ];
  
  let escapedContent = content;
  
  // 轉義開始標籤 <tag
  jsxTags.forEach(tag => {
    const openTagRegex = new RegExp(`<${tag}(\\s[^>]*)?>`, 'gi');
    escapedContent = escapedContent.replace(openTagRegex, `&lt;${tag}$1&gt;`);
  });
  
  // 轉義結束標籤 </tag>
  jsxTags.forEach(tag => {
    const closeTagRegex = new RegExp(`</${tag}>`, 'gi');
    escapedContent = escapedContent.replace(closeTagRegex, `&lt;/${tag}&gt;`);
  });
  
  // 轉義自閉合標籤 <tag />
  jsxTags.forEach(tag => {
    const selfClosingRegex = new RegExp(`<${tag}(\\s[^>]*)?\\s*/>`, 'gi');
    escapedContent = escapedContent.replace(selfClosingRegex, `&lt;${tag}$1 /&gt;`);
  });
  
  return escapedContent;
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

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
            
            <p className="text-xl leading-8 text-gray-700 mb-8">
              {article.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
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
              className="article-content text-gray-700"
              dangerouslySetInnerHTML={{ 
                __html: escapeJSXTags(article.content)
                  .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                  .replace(/\n/g, '<br>') 
              }} 
            >
            </div>
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
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-700">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4 text-sm text-gray-600">
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
