import { Equation, MathText } from "@/components/notes/Equation";
import { NoteBox } from "@/components/notes/NoteBox";
import styles from "@/app/notes/notes.styles";
export function BondsSection() {
  return (
    <section id="bonds" className={styles.section}>
      <span className={styles.sectionNumber}>03 / VALUATION</span>
      <h2>Pricing cash flows</h2>
      <p>
        <MathText>
          {
            "For these examples, payments are fixed and certain, with no default, fees, taxes or embedded options. $N$ denotes face value, $C$ the annual coupon in currency units and $n$ an integer number of years. Valuation is on a coupon date just after payment, so no accrued interest is included."
          }
        </MathText>
      </p>
      <NoteBox kind="result" title="Present value of a bond">
        <p>
          Value each payment at its own date and add the present values. A zero
          coupon bond has only its final payment; a coupon bond also has
          intermediate payments.
        </p>
        <Equation>
          {
            "P_{\\mathrm{zero}}=ND(0,n),\\qquad P=\\sum_{k=1}^{n}CD(0,k)+ND(0,n)."
          }
        </Equation>
      </NoteBox>
      <p>
        <MathText>
          {
            "For a flat effective annual rate $y>-1$, substitute $D(0,k)=(1+y)^{-k}$. The coupon payments form a finite geometric series. With $q=(1+y)^{-1}$, the identity $\\sum_{k=1}^n q^k=q(1-q^n)/(1-q)$ yields:"
          }
        </MathText>
      </p>
      <Equation>
        {"P=C\\frac{1-(1+y)^{-n}}{y}+N(1+y)^{-n}\\quad(y\\ne0)."}
      </Equation>
      <p>
        <MathText>{"At $y=0$, use $P=nC+N$."}</MathText>
      </p>
      <h3>Original worked example</h3>
      <p>
        A three year bond has £1,000 face value and pays £40 annually.
        Discounting at 5% gives three payments: £40, £40 and £1,040.
      </p>
      <Equation>
        {
          "P=\\frac{40}{1.05}+\\frac{40}{1.05^2}+\\frac{1040}{1.05^3}\\approx\\pounds972.77."
        }
      </Equation>
      <p>
        The bond trades below face value because its 4% coupon rate is lower
        than the 5% valuation yield. If the annual coupon were £50, the same
        calculation would give exactly £1,000.
      </p>
      <figure>
        <svg
          viewBox="0 0 640 180"
          role="img"
          aria-labelledby="cashflow-title cashflow-desc"
          style={{ width: "100%", height: "auto" }}
        >
          <title id="cashflow-title">
            Cash flows for the three year coupon bond
          </title>
          <desc id="cashflow-desc">
            The buyer pays 972.77 pounds at time zero and receives 40 pounds at
            years one and two, then 1040 pounds at year three.
          </desc>
          <g stroke="currentColor" fill="none" strokeWidth="2">
            <path d="M50 90H590M70 80v60M240 90V40M410 90V40M580 90V25" />
            <path d="m65 133 5 7 5-7m160-86 5-7 5 7m160 0 5-7 5 7m160-15 5-7 5 7" />
          </g>
          <g fill="currentColor" fontSize="17" textAnchor="middle">
            <text x="70" y="169">
              −£972.77
            </text>
            <text x="240" y="28">
              £40
            </text>
            <text x="410" y="28">
              £40
            </text>
            <text x="580" y="16">
              £1,040
            </text>
            <text x="70" y="116">
              0
            </text>
            <text x="240" y="116">
              1 year
            </text>
            <text x="410" y="116">
              2 years
            </text>
            <text x="580" y="116">
              3 years
            </text>
          </g>
        </svg>
        <figcaption>
          Cash flows from the buyer’s perspective. Schematic; arrows show
          payment direction.
        </figcaption>
      </figure>
    </section>
  );
}
