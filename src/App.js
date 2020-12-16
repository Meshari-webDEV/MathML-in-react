import MathJax from 'mathjax3-react';

// a basic HTML string that contains MathML tags
// could be fetched and not hardcoded
const html = `<p><math style="font-family: 'Cairo', sans-serif; font-weight:bold; font-size:14px;" display="inline"
            xmlns="http://www.w3.org/1998/Math/MathML">
            <mn>2</mn>
            <msup>
                <mi>sin</mi>
                <mn>2</mn>
            </msup>
            <mfenced>
                <mi>&#952;</mi>
            </mfenced>
            <mo>=</mo>
            <mn>1</mn>
            <mspace linebreak="newline" />
            <msup>
                <mi>sin</mi>
                <mn>2</mn>
            </msup>
            <mfenced>
                <mi>&#952;</mi>
            </mfenced>
            <mo>=</mo>
            <mfrac>
                <mn>1</mn>
                <mn>2</mn>
            </mfrac>
            <mspace linebreak="newline" />
            <mi>sin</mi>
            <mfenced>
                <mi>&#952;</mi>
            </mfenced>
            <mo>=</mo>
            <mo>&#177;</mo>
            <msqrt>
                <mfrac>
                    <mn>1</mn>
                    <mn>2</mn>
                </mfrac>
            </msqrt>
            <mspace linebreak="newline" />
            <mi>&#952;</mi>
            <mo>=</mo>
            <msup>
                <mi>sin</mi>
                <mrow>
                    <mo>-</mo>
                    <mn>1</mn>
                </mrow>
            </msup>
            <mfenced>
                <mrow>
                    <mo>-</mo>
                    <msqrt>
                        <mfrac>
                            <mn>1</mn>
                            <mn>2</mn>
                        </mfrac>
                    </msqrt>
                </mrow>
            </mfenced>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mi>&#952;</mi>
            <mo>=</mo>
            <msup>
                <mi>sin</mi>
                <mrow>
                    <mo>-</mo>
                    <mn>1</mn>
                </mrow>
            </msup>
            <mfenced>
                <msqrt>
                    <mfrac>
                        <mn>1</mn>
                        <mn>2</mn>
                    </mfrac>
                </msqrt>
            </mfenced>
            <mspace linebreak="newline" />
            <mi mathvariant="normal">&#960;</mi>
            <mo>-</mo>
            <mi mathvariant="normal">&#952;</mi>
            <mo>=</mo>
            <msup>
                <mi>sin</mi>
                <mrow>
                    <mo>-</mo>
                    <mn>1</mn>
                </mrow>
            </msup>
            <mo>(</mo>
            <msqrt>
                <mfrac>
                    <mn>1</mn>
                    <mn>2</mn>
                </mfrac>
            </msqrt>
            <mo>)</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mi mathvariant="normal">&#952;</mi>
            <mo>=</mo>
            <mn>45</mn>
            <mo>&#176;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mspace linebreak="newline" />
            <mn>180</mn>
            <mo>&#176;</mo>
            <mo>-</mo>
            <mi>&#952;</mi>
            <mo>=</mo>
            <mn>45</mn>
            <mo>&#176;</mo>
            <mspace linebreak="newline" />
            <mi>&#952;</mi>
            <mo>=</mo>
            <mn>135</mn>
            <mo>&#176;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mspace linebreak="newline" />
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
            <mo>&#160;</mo>
        </math></p>
    <p>نحول القيمة من الدرجة<math style="font-family: 'Cairo', sans-serif; font-weight:bold; font-size:14px;"
            display="inline" xmlns="http://www.w3.org/1998/Math/MathML">
            <mn>45</mn>
            <mo>&#176;</mo>
            <mo>,</mo>
            <mn>135</mn>
            <mo>&#176;</mo>
        </math> الى راديان&nbsp;
        <math style="font-family: 'Cairo', sans-serif; font-weight:bold; font-size:14px;" display="inline"
            xmlns="http://www.w3.org/1998/Math/MathML">
            <mfrac>
                <mi mathvariant="normal">&#960;</mi>
                <mn>4</mn>
            </mfrac>
        </math>&nbsp;,<math style="font-family: 'Cairo', sans-serif; font-weight:bold; font-size:14px;" display="inline"
            xmlns="http://www.w3.org/1998/Math/MathML">
            <mfrac>
                <mrow>
                    <mn>3</mn>
                    <mi mathvariant="normal">&#960;</mi>
                </mrow>
                <mn>4</mn>
            </mfrac>
        </math>
    </p>
    <p><math style="font-family: 'Cairo', sans-serif; font-weight:bold; font-size:14px;" display="inline"
            xmlns="http://www.w3.org/1998/Math/MathML">
            <mfenced open="{" close="}">
                <mrow>
                    <mfrac>
                        <mi mathvariant="normal">&#960;</mi>
                        <mn>4</mn>
                    </mfrac>
                    <mo>+</mo>
                    <mn>2</mn>
                    <mi>&#960;k</mi>
                    <mo>,</mo>
                    <mfrac>
                        <mrow>
                            <mn>3</mn>
                            <mi mathvariant="normal">&#960;</mi>
                        </mrow>
                        <mn>4</mn>
                    </mfrac>
                    <mo>+</mo>
                    <mn>2</mn>
                    <mi>&#960;k</mi>
                </mrow>
            </mfenced>
        </math></p>`;

const App = () => {
  return (
    <div className='App'>
      <MathJax.Provider>
        <MathJax.Html html={html} />
      </MathJax.Provider>
    </div>
  );
};

export default App;
