Namaste React JS

Parcel (parceljs.org)

- Dev Build 
- Create a server 
- Host a Build on server
- HMR -  Hot module Replacement (host on server with new build) 
- File Watching Algorithm - written in C++
- Caching - Create a faster build
- Bundling
- Minification
- Compression
- Image Optimization 
- Consistent Hashing
- Code Splitting
- Differntial Build - Support older browser
- Diagnostic
- Errror Handlings
- Secure SSL hosting - Https
- Tree Shaking

browserlist (browserlist.dev)
- Support mentioned browser versions

Babel
- transpilation and polyfilling
- Convert JSX code into React code.


JSX
- HTML Like Syntax. But its not HTML
- Handle  Cross Site Scripting 
ex:
const data = api.getData()    // THis can have malicious code coming from api.
<h1>{data}</h1>              // this JSX element will sanitize this data before excuting.