
#include <map>
using namespace std;

class MyCalendarThree {
    
    map<int, int> intervals;
    
public:
    MyCalendarThree() = default;

    int book(int start, int end) {
        ++intervals[start];
        --intervals[end];

        int currentOverlaps = 0;
        int maxOverlaps = 0;

        for (const auto& [event, eventValue] : intervals) {
            currentOverlaps += eventValue;
            maxOverlaps = max(maxOverlaps, currentOverlaps);
        }
        return maxOverlaps;
    }
};
