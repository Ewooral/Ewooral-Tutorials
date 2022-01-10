
#include <iostream>
using namespace std;
int main()
{
    string names = "Elijah Owusu Kwame Tawiah Boahen Ewooral";
    cout << "......STRING FUNCTIONS............." << endl;
    cout << names.length() << endl;
    cout << names[0] << endl;
    // find("string", index of the string to begin searching)
    // substr(start index, length of the substring)
    // replace(start index, length of the substring, string to replace)
    // insert(start index, string to insert)
    // erase(start index, length of the substring)
    // toUpperCase()
    // toLowerCase()
    // trim()
    // split(delimiter)
    // join(delimiter)
    // replaceAll(string to replace, string to replace with)
    // replaceFirst(string to replace, string to replace with)
    // find(string to find, string to find with)
    // findLast(string to find, string to find with)
    // findFirst(string to find, string to find with)
    // startsWith(string to find)
    // endsWith(string to find)
    // contains(string to find)
    // containsAny(string to find)
    // containsAll(string to find)
    // containsOnly(string to find)
    // containsNone(string to find)
  


    cout << names.find("a", 5) << endl;
    cout << names.substr(0, 3) << endl;
}