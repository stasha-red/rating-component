<h1>Rating component</h1>

<code>&lt;case-rating&gt;&lt;/case-rating&gt;</code>

<h2>Properties</h2>
<h3>Size</h3>
prop: <code>size</code> <br>
value: <code>'L' | 'M' | 'S'</code><br>
default: <code>'M'</code><br><br>
<code>&lt;case-rating <b>size=&quot;L&quot;</b>&gt;&lt;/case-rating&gt;</code>

<h3>State</h3>      
prop: <code>state</code> <br>
value: <code>'active' | 'inactive' | 'disabled'</code><br>
default: <code>'active'</code> <br><br>
  
<code>&lt;case-rating <b>state=&quot;inactive&quot;</b>&gt;&lt;/case-rating&gt;</code>
    
<h3>Rating</h3>
prop: <code>rating </code><br>
value: <code>1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 </code><br>
default: <code>3 </code><br><br>
  
<code>&lt;case-rating <b>rating=&quot;3&quot;</b>&gt;&lt;/case-rating&gt;</code>

<h2>Event Handler</h2>
<h3>onChange</h3>
prop: <code>onchange </code><br>
value type: <code>Function</code><br>
default: <code>(event: Event) =&gt; console.log(event) </code><br><br>
  
<code>&lt;case-rating <b>onchange=&quot;Function&quot;</b>&gt;&lt;/case-rating&gt;</code>
