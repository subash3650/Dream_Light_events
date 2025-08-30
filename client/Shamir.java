import java.io.*;
import java.math.*;
import java.util.*;
import java.util.regex.*;

public class ShamirSolver {
    static class Fraction {
        final BigInteger n;
        final BigInteger d;
        Fraction(BigInteger a, BigInteger b) {
            if (b.signum() == 0) throw new ArithmeticException("den=0");
            if (b.signum() < 0) { a = a.negate(); b = b.negate(); }
            BigInteger g = a.gcd(b);
            if (!g.equals(BigInteger.ONE)) { a = a.divide(g); b = b.divide(g); }
            this.n = a; this.d = b;
        }
        static Fraction from(BigInteger v) { return new Fraction(v, BigInteger.ONE); }
        static Fraction zero() { return new Fraction(BigInteger.ZERO, BigInteger.ONE); }
        Fraction add(Fraction o) { return new Fraction(this.n.multiply(o.d).add(o.n.multiply(this.d)), this.d.multiply(o.d)); }
        Fraction sub(Fraction o) { return new Fraction(this.n.multiply(o.d).subtract(o.n.multiply(this.d)), this.d.multiply(o.d)); }
        Fraction mul(Fraction o) { return new Fraction(this.n.multiply(o.n), this.d.multiply(o.d)); }
        Fraction div(Fraction o) { if (o.n.equals(BigInteger.ZERO)) throw new ArithmeticException("div0"); return new Fraction(this.n.multiply(o.d), this.d.multiply(o.n)); }
        boolean same(Fraction o) { return this.n.equals(o.n) && this.d.equals(o.d); }
        public String toString() { return d.equals(BigInteger.ONE) ? n.toString() : n.toString()+"/"+d.toString(); }
    }

    static Fraction[] getCoeffs(List<BigInteger> xs, List<BigInteger> ys) {
        int k = xs.size();
        Fraction[][] mat = new Fraction[k][k+1];
        for (int i=0;i<k;i++) {
            BigInteger xi = xs.get(i), p = BigInteger.ONE;
            for (int j=0;j<k;j++) { mat[i][j] = Fraction.from(p); p = p.multiply(xi); }
            mat[i][k] = Fraction.from(ys.get(i));
        }
        int r=0;
        for (int c=0;c<k && r<k;c++) {
            int sel=-1;
            for (int i=r;i<k;i++) if (!mat[i][c].n.equals(BigInteger.ZERO)) { sel=i; break; }
            if (sel==-1) continue;
            if (sel!=r) { Fraction[] t=mat[sel]; mat[sel]=mat[r]; mat[r]=t; }
            Fraction piv=mat[r][c];
            for (int j=c;j<=k;j++) mat[r][j]=mat[r][j].div(piv);
            for (int i=0;i<k;i++) if (i!=r) {
                Fraction f=mat[i][c];
                if (!f.n.equals(BigInteger.ZERO))
                    for (int j=c;j<=k;j++) mat[i][j]=mat[i][j].sub(mat[r][j].mul(f));
            }
            r++;
        }
        Fraction[] res=new Fraction[k];
        Arrays.fill(res,Fraction.zero());
        for (int i=0;i<k;i++) {
            int pc=-1;
            for (int j=0;j<k;j++) if (!mat[i][j].n.equals(BigInteger.ZERO)) { pc=j; break; }
            if (pc==-1) {
                if (!mat[i][k].n.equals(BigInteger.ZERO)) return null;
                continue;
            }
            res[pc]=mat[i][k];
        }
        return res;
    }

    static Fraction eval(Fraction[] c, BigInteger x) {
        Fraction r=Fraction.zero(); BigInteger p=BigInteger.ONE;
        for (int i=0;i<c.length;i++) { r=r.add(c[i].mul(Fraction.from(p))); p=p.multiply(x); }
        return r;
    }

    static void choose(int n,int k,int s,int idx,int[] cur,List<int[]> out){
        if(idx==k){out.add(cur.clone());return;}
        for(int i=s;i<=n-(k-idx);i++){cur[idx]=i;choose(n,k,i+1,idx+1,cur,out);}
    }

    static Map<String,Map<String,String>> readShares(String j){
        Map<String,Map<String,String>> out=new LinkedHashMap<>();
        Pattern p=Pattern.compile("\"(\\d+)\"\\s*:\\s*\\{\\s*\"base\"\\s*:\\s*\"(\\d+)\"\\s*,\\s*\"value\"\\s*:\\s*\"([^\"]+)\"\\s*\\}",Pattern.DOTALL);
        Matcher m=p.matcher(j);
        while(m.find()){
            String id=m.group(1),b=m.group(2),v=m.group(3);
            Map<String,String> obj=new HashMap<>();
            obj.put("base",b); obj.put("value",v); out.put(id,obj);
        }
        return out;
    }

    static int[] readNK(String j){
        int n=-1,k=-1;
        Matcher m=Pattern.compile("\"keys\"\\s*:\\s*\\{(.+?)\\}",Pattern.DOTALL).matcher(j);
        if(m.find()){
            String in=m.group(1);
            Matcher m2=Pattern.compile("\"n\"\\s*:\\s*(\\d+)").matcher(in);
            if(m2.find()) n=Integer.parseInt(m2.group(1));
            Matcher m3=Pattern.compile("\"k\"\\s*:\\s*(\\d+)").matcher(in);
            if(m3.find()) k=Integer.parseInt(m3.group(1));
        }
        return new int[]{n,k};
    }

    static BigInteger parseBase(String v,int b){ return new BigInteger(v,b); }

    public static void main(String[] a)throws Exception{
        StringBuilder sb=new StringBuilder();
        try(BufferedReader br=new BufferedReader(new InputStreamReader(System.in))){
            String l; while((l=br.readLine())!=null) sb.append(l).append("\n");
        }
        String j=sb.toString();
        if(j.trim().isEmpty()){System.err.println("No input.");return;}
        int[] nk=readNK(j); 
        int n=nk[0],k=nk[1];
        if(n==-1||k==-1){System.err.println("Bad nk");return;}
        Map<String,Map<String,String>> raw=readShares(j);
        List<String> ids=new ArrayList<>(); 
        List<BigInteger> xs=new ArrayList<>(); 
        List<BigInteger> ys=new ArrayList<>();
        for(Map.Entry<String,Map<String,String>> e:raw.entrySet()){
            String id=e.getKey(); Map<String,String> o=e.getValue();
            int b=Integer.parseInt(o.get("base")); BigInteger y=parseBase(o.get("value"),b);
            ids.add(id); xs.add(new BigInteger(id)); ys.add(y);
        }
        if(xs.size()<k){System.err.println("Not enough shares");return;}
        List<int[]> combs=new ArrayList<>(); 
        choose(xs.size(),k,0,0,new int[k],combs);
        Fraction[] bestCoeffs = null;
        int bestMismatch = Integer.MAX_VALUE;
        List<Integer> bestMismatchIndices = null;

        for(int[] c:combs){
            List<BigInteger> cx=new ArrayList<>(), cy=new ArrayList<>();
            for(int i:c){ cx.add(xs.get(i)); cy.add(ys.get(i)); }
            Fraction[] cf;
            try { cf = getCoeffs(cx, cy); } catch(Exception ex) { continue; }
            if(cf==null) continue;
            int mis=0; List<Integer> misIdx = new ArrayList<>();
            for(int i=0;i<xs.size();i++){
                Fraction v = eval(cf, xs.get(i));
                Fraction expected = Fraction.from(ys.get(i));
                if(!v.same(expected)){ 
                    mis++; 
                    misIdx.add(i); 
                    if(mis>bestMismatch) break; 
                }
            }
            if(mis < bestMismatch){
                bestMismatch = mis;
                bestCoeffs = cf;
                bestMismatchIndices = misIdx;
                if(bestMismatch == 0) break;
            }
        }

        if(bestCoeffs == null){
            System.err.println("No valid poly");
            return;
        }

        Fraction s = bestCoeffs[0];
        if(!s.d.equals(BigInteger.ONE)){
            if(s.n.mod(s.d).equals(BigInteger.ZERO)) System.out.println(s.n.divide(s.d));
            else System.out.println(s);
        } else System.out.println(s.n);

        if(bestMismatchIndices == null || bestMismatchIndices.isEmpty()){
            System.out.println("NONE");
        } else {
            List<String> bads = new ArrayList<>();
            for(int idx : bestMismatchIndices) bads.add(ids.get(idx));
            System.out.println(String.join(",", bads));
        }
    }
}