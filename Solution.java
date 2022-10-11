
import java.util.Map;
import java.util.TreeMap;

public class MyCalendarThree {

    Map<Integer, Integer> intervals;

    public MyCalendarThree() {
        intervals = new TreeMap<>();
    }

    public int book(int start, int end) {
        intervals.put(start, intervals.getOrDefault(start, 0) + 1);
        intervals.put(end, intervals.getOrDefault(end, 0) - 1);

        int currentOverlaps = 0;
        int maxOverlaps = 0;

        for (int eventValue : intervals.values()) {
            currentOverlaps += eventValue;
            maxOverlaps = Math.max(maxOverlaps, currentOverlaps);
        }
        return maxOverlaps;
    }
}
