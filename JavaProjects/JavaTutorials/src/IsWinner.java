import java.util.List;

public class IsWinner {
    public static void main(String[] args) {
//        System.out.println(isWinner());
    }
    static boolean isWinner(List<List<String>> proList, List<String> order){
        int ordIdx = 0, proLIdx = 0;
        while(ordIdx < order.size() && proLIdx < proList.size()){
            List<String> pListItem = proList.get(proLIdx);
            int proLItemidx = 0;
            while (proLItemidx < pListItem.size() && ordIdx < order.size()) {
                if(pListItem.get(proLItemidx).equals(order.get(ordIdx)) || pListItem.get(proLItemidx).equals("anything"))
                    proLItemidx ++;
                 else{
                    proLItemidx = 0;
                }
                ordIdx ++;
            }
            if(proLItemidx != pListItem.size())
                return false;
            proLIdx ++;

            }
        return proLIdx >= proList.size();
    }
}
