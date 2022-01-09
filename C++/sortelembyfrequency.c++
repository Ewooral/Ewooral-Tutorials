// Simple C++ Solution

#include <iostream>
#include <map>
#include <queue>
#include <unordered_map>
#include <algorithm>
using namespace std;
int main()
{
    // code
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        int arr[n];
        for (int i = 0; i < n; i++)
        {
            cin >> arr[i];
        }
        unordered_map<int, int> mp;
        for (int i = 0; i < n; i++)
        {
            mp[arr[i]]++;
        }
        vector<pair<int, int>> v;
        for (auto it : mp)
        {
            v.push_back({it.first, it.second});
        }
        sort(v.begin(), v.end(), [&](pair<int, int> a, pair<int, int> b)
             {
            if (a.second != b.second)
            {
                return a.second > b.second;
            }
            else if (a.second == b.second)
            {
                if (a.first < b.first)
                {
                    return true;
                }
                else
                {
                    return false;
                    }
	       } });
        for (auto it : v)
        {
            while (it.second--)
            {
                cout << it.first << " ";
            }