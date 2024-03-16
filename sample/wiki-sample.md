[[_TOC_]]

# Headings
# This is a H1 header
## This is a H2 header
### This is a H3 header
#### This is a H4 header
##### This is a H5 header

# Blockquotes
> Single line quote
>> Nested quote
>> multiple line
>> quote
>>

# Horizontal rules
above
 
----
below

# Emphasis (bold, italics, strikethrough)

Use _emphasis_ in comments to express **strong** opinions and point out ~~corrections~~  
**_Bold, italicized text_**  
**~~Bold, strike-through text~~**

# Code highlighting

```
sudo npm install vsoagent-installer -g  
```


```To install the Microsoft Cross Platform Build & Release Agent, run the following: `$ sudo npm install vsoagent-installer -g`.```

``` js
const count = records.length;
```

``` csharp
Console.WriteLine("Hello, World!");
```

# Tables

| Heading 1 | Heading 2 |                       Heading 3 |
| --------- | :-------: | ------------------------------: |
| Cell A1   |  Cell A2  |                         Cell A3 |
| Cell B1   |  Cell B2  | Cell B3<br/>second line of text |


# Lists
## Ordered or numbered lists

1. First item.
1. Second item.
1. Third item.

## Bulleted lists

- Item 1
- Item 2
- Item 3

## Nested lists

1. First item.
   - Item 1
   - Item 2
   - Item 3
1. Second item.
   - Nested item 1
      - Further nested item 1
      - Further nested item 2
   - Nested item 2
   - Nested item 3

# Links

[Working Link](/Open-Source)
[Broken Link](/broken-page)

# Checklist or task list

- [ ] A  
- [ ] B  
- [ ] C  
- [x] A  
- [x] B  
- [x] C  

# Emoji
Most Supported from [this page](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

:smile:
:angry:

To escape emojis, enclose them using the ` character.

`:smile:` `:)` `:angry:`

# Mathematical notation and characters

## Greek Characters

$
\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \kappa, \lambda, \mu, \nu, \omicron, \pi, \rho, \sigma, \tau, \upsilon, \phi, ...
$  


$\Gamma,  \Delta,  \Theta, \Lambda, \Xi, \Pi, \Sigma, \Upsilon, \Phi, \Psi, \Omega$

## Algebraic Equations

Area of a circle is $\pi r^2$

And, the area of a triangle is:

$$
A_{triangle}=\frac{1}{2}({b}\cdot{h})
$$

## Sums and Integrals

$$
\sum_{i=1}^{10} t_i
$$


$$
\int_0^\infty \mathrm{e}^{-x}\,\mathrm{d}x
$$    

## Mermaid

::: mermaid
sequenceDiagram
    Christie->>Josh: Hello Josh, how are you?
    Josh-->>Christie: Great!
    Christie->>Josh: See you later!
:::

# Collapsible Section

# A collapsible section with markdown
<details>
  <summary>Click to expand!</summary>

  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>

# Video

::: video
<iframe width="640" height="360" src="https://www.youtube.com/embed/OtqFyBA6Dbk" allowfullscreen style="border:none"><iframe>
:::
