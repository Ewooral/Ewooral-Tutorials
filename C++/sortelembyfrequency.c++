// // Simple C++ Solution

// #include <iostream>
// #include <map>
// #include <queue>
// #include <unordered_map>
// #include <algorithm>
// using namespace std;
// int main()
// {
//     // code
//     int t;
//     cin >> t;
//     while (t--)
//     {
//         int n;
//         cin >> n;
//         int arr[n];
//         for (int i = 0; i < n; i++)
//         {
//             cin >> arr[i];
//         }
//         unordered_map<int, int> mp;
//         for (int i = 0; i < n; i++)
//         {
//             mp[arr[i]]++;
//         }
//         vector<pair<int, int>> v;
//         for (auto it : mp)
//         {
//             v.push_back({it.first, it.second});
//         }
//         sort(v.begin(), v.end(), [&](pair<int, int> a, pair<int, int> b)
//              {
//             if (a.second != b.second)
//             {
//                 return a.second > b.second;
//             }
//             else if (a.second == b.second)
//             {
//                 if (a.first < b.first)
//                 {
//                     return true;
//                 }
//                 else
//                 {
//                     return false;
//                     }
// 	       } });
//         for (auto it : v)
//         {
//             while (it.second--)
//             {
//                 cout << it.first << " ";
//             }
//         }
//         cout << endl;
//     }
//     return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// static bool comp(pair<int, int> a, pair<int, int> b)
// {
//     if (a.second == b.second)
//     {
//         return a.first > b.first;
//     }
//     return a.second < b.second;
// }
// void solve(vector<int> &a)
// {

//     int n = a.size();
//     vector<pair<int, int>> v;
//     multiset<int> ms;
//     for (int i = 0; i < n; i++)
//     {
//         ms.insert(a[i]);
//     }
//     for (int i = 0; i < n; i++)
//     {
//         v.push_back({a[i], ms.count(a[i])});
//     }
//     sort(v.begin(), v.end(), comp);
//     reverse(v.begin(), v.end());
//     for (int i = 0; i < n; i++)
//     {
//         cout << v[i].first << " ";
//     }
//     cout << endl;
//     return;
// }
// int main()
// {
//     // code
//     int t;
//     cin >> t;
//     while (t--)
//     {
//         int n;
//         cin >> n;
//         vector<int> a(n, 0);
//         for (int i = 0; i < n; i++)
//         {
//             int ele;
//             cin >> ele;
//             a[i] = ele;
//         }
//         solve(a);
//     }
//     return 0;
// }