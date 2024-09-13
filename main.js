function addBaseClass(node){
    node.classList.add('highlight_base');
    return node;
}

function addClasses(text, language){
    let tokenRegex;
    let tokens;
    switch(language){
        case 'r':
            tokenRegex = /(\+|\-|\*|\/|\^|%%|%\/%|<-|->|=|&&?|\|\|?|!|<=?|>=?|==|!=|\,|:|::|:::|%in%|~|\$|@|\(|\)|\[|\]|\{|\}|\"[^\"]*\"|\'[^\']*\')|([0-9][\.0-9]*[e][\-]*[0-9]|[0-9]+L|[0-9]+\.[0-9]+|[0-9]+)|(#.*$)|([a-zA-Z_][a-zA-Z0-9_]*)|\s+/gm;
            tokens = text.match(tokenRegex);
            for (let i = 0; i < tokens.length; i++) {
                let token = tokens[i];
                if (/^\s+$/.test(token) || token == undefined || token == '' || token == ' ') {
                    continue;
                } else if (/^(\+|\-|\*|\/|\^|%%|%\/%|<-|->|\,|=|&&?|\|\|?|!|<=?|>=?|==|!=|:|::|:::|%in%|~|\$|@)$/.test(token)) {
                    tokens[i] = `<span class="highlight_operator">${token}</span>`;
                } else if (/^(if|else|repeat|while|for|in|next|break|function|return|TRUE|FALSE)$/.test(token)) {
                    tokens[i] = `<span class="highlight_keyword">${token}</span>`;
                } else if (/^(logical|numeric|integer|complex|character|raw|list|matrix|array|data.frame|factor)$/.test(token)) {
                    tokens[i] = `<span class="highlight_dataType">${token}</span>`;
                } else if (/^(NULL|NA|NaN|Inf)$/.test(token)) {
                    tokens[i] = `<span class="highlight_constant">${token}</span>`;
                } else if (/^(print|cat|summary|str|length|mean|median|sd|var|sum|min|max|c|seq|rep|ls|rm|library|require|lm|glm|t.test|cor)$/.test(token)) {
                    tokens[i] = `<span class="highlight_function">${token}</span>`;
                } else if (/^(\.Machine|\.Last\.value|\.Random\.seed|\.|\_)$/.test(token)) {
                    tokens[i] = `<span class="highlight_specialSymbols">${token}</span>`;
                } else if (/^(\(|\))$/.test(token)) {
                    tokens[i] = `<span class="highlight_parentheses">${token}</span>`;
                } else if (/^(\[|\])$/.test(token)) {
                    tokens[i] = `<span class="highlight_brackets">${token}</span>`;
                } else if (/^(\{|\})$/.test(token)) {
                    tokens[i] = `<span class="highlight_braces">${token}</span>`;
                } else if (/^(\'[^\"]*\'|\"[^\"]*\")$/.test(token)) {
                    tokens[i] = `<span class="highlight_string">${token}</span>`;
                } else if (/^([0-9][\.0-9]*[e][\-]*[0-9]|[0-9]+L|[0-9]+\.[0-9]+|[0-9]+)$/.test(token)) {
                    tokens[i] = `<span class="highlight_number">${token}</span>`;
                } else if (/^(#.*$)$/.test(token)) {
                    tokens[i] = `<span class="highlight_comment">${token}</span>`;
                } else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
                    tokens[i] = `<span class="highlight_variable">${token}</span>`;
                }
            }
            text = tokens.join('');        
            break;
        case 'python':
            tokenRegex = /(\@[a-zA-Z_][a-zA-Z0-9_]*)|(\+|\-|\*\*|\*|\/\/|\/|\^|%%|%\/%|<-|->|=|&&?|\|\|?|!|<=?|>=?|\+=|\-=|\*=|\/=|\/\/=|%=|\*\*=|==|!=|<|>|\,|\;|\&|\~|<<|>>|:|::|:::|\.\.\.|\.|%in%|~|\$|@|\(|\)|\[|\]|\{|\}|\"[^\"]*\"|\'[^\']*\'|[\"]{3}[^\"]*[\"]{3})|([0-9][\.0-9]*[e][\-]*[0-9]|[0-9]+L|[0-9]+\.[0-9]+|[0-9]+)|(#.*$)|([a-zA-Z_][a-zA-Z0-9_]*)|\s+/gm;
            tokens = text.match(tokenRegex);
            for (let i = 0; i < tokens.length; i++) {
                let token = tokens[i];
                if (/^\s+$/.test(token) || token == undefined || token == '' || token == ' ') {
                    continue;
                } else if (/^([0x][0-9|A-F]+|[0o][0-7]+|[0b][0|1]+|[-]?[0-9]+[j]|[-]?[0-9][\.0-9]*[e][\-]*[0-9]|[-]?[0-9]+\.[0-9]+|[-]?[0-9]+)$/.test(token)) {
                    tokens[i] = `<span class="highlight_number">${token}</span>`;
                } else if (/^(\+|\-|\*|\/|\^|%%|%\/%|<-|->|<|>|\,|\&|\~|<<|>>|\.|\*\*|\/\/|=|&&?|\|\|?|!|<=?|>=?|\+=|\-=|\*=|\/=|\/\/=|%=|\*\*=|==|!=|:|::|:::|%in%|~|\$|@)$/.test(token)) {
                    tokens[i] = `<span class="highlight_operator">${token}</span>`;
                } else if (/^(if|else|elif|for|while|break|continue|pass|def|class|return|yield|try|except|finally|raise|assert|global|nonlocal|lambda|with|async|await|del|in|True|False|and|or|not|is)$/.test(token)) {
                    tokens[i] = `<span class="highlight_keyword">${token}</span>`;
                } else if (/^(None|bool|int|float|complex|str|bytes|tuple|list|set|dict)$/.test(token)) {
                    tokens[i] = `<span class="highlight_dataType">${token}</span>`;
                } else if (/^(NULL|NA|NaN|Inf)$/.test(token)) {
                    tokens[i] = `<span class="highlight_constant">${token}</span>`;
                } else if (/^(print|len|input|range|open|map|filter|zip|sorted|sum|min|max|abs|round|int|float|str|type|id|dir|help|isinstance)$/.test(token)) {
                    tokens[i] = `<span class="highlight_function">${token}</span>`;
                } else if (/^(\.|\_|\.\.\.|\;)$/.test(token)) {
                    tokens[i] = `<span class="highlight_specialSymbols">${token}</span>`;
                } else if (/^(\(|\))$/.test(token)) {
                    tokens[i] = `<span class="highlight_parentheses">${token}</span>`;
                } else if (/^(\[|\])$/.test(token)) {
                    tokens[i] = `<span class="highlight_brackets">${token}</span>`;
                } else if (/^(\{|\})$/.test(token)) {
                    tokens[i] = `<span class="highlight_braces">${token}</span>`;
                } else if (/^(\'[^\"]*\'|\"[^\"]*\")$/.test(token)) {
                    tokens[i] = `<span class="highlight_string">${token}</span>`;
                } else if (/^(#.*$)$/.test(token)) {
                    tokens[i] = `<span class="highlight_comment">${token}</span>`;
                } else if(/^(import|from|as)$/.test(token)){
                    tokens[i] = `<span class="highlight_module">${token}</span>`;
                } else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
                    tokens[i] = `<span class="highlight_variable">${token}</span>`;
                } else if(/^\@[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)){
                    tokens[i] = `<span class="highlight_decorator">${token}</span>`;
                }
            }
            text = tokens.join('');        
            break;            
        case 'csharp':
            tokenRegex = /(\@[a-zA-Z_][a-zA-Z0-9_]*)|\/\*.*\*\/|\/\/.*|(\+|\-|\*\*|\*|\/\/|\/|\^|%%|%\/%|<-|->|=|&&?|\|\|?|!|<=?|>=?|\+=|\-=|\*=|\/=|\/\/=|%=|\*\*=|==|!=|<|>|\,|\;|\&|\~|<<|>>|:|::|:::|\.\.\.|\.|%in%|~|\$|@|\(|\)|\[|\]|\{|\}|\"[^\"]*\"|\'[^\']*\'|[\"]{3}[^\"]*[\"]{3})|([0-9][\.0-9]*[e][\-]*[0-9]|[0-9]+L|[0-9]+\.[0-9]+|[0-9]+)|(#.*$)|([a-zA-Z_][a-zA-Z0-9_]*)|\s+/gm;
            tokens = text.match(tokenRegex);
            for (let i = 0; i < tokens.length; i++) {
                let token = tokens[i];
                if (/^\s+$/.test(token) || token == undefined || token == '' || token == ' ') {
                    continue;
                } else if (/^([0x][0-9|A-F]+|[0o][0-7]+|[0b][0|1]+|[-]?[0-9]+[j]|[-]?[0-9][\.0-9]*[e][\-]*[0-9]|[-]?[0-9]+\.[0-9]+|[-]?[0-9]+)$/.test(token)) {
                    tokens[i] = `<span class="highlight_number">${token}</span>`;
                } else if (/^(\+|\-|\*|\/|\^|%%|%\/%|<-|->|\;|\.|<|>|\,|\&|\~|<<|>>|\.|\*\*|\/\/|=|&&?|\|\|?|!|<=?|>=?|\+=|\-=|\*=|\/=|\/\/=|%=|\*\*=|==|!=|:|::|:::|%in%|~|\$|@)$/.test(token)) {
                    tokens[i] = `<span class="highlight_operator">${token}</span>`;
                } else if (/^(if|else|switch|case|default|for|foreach|while|do|break|continue|goto|return|yield|try|catch|finally|throw|public|private|protected|internal|protected internal|private protected|abstract|sealed|virtual|override|static|readonly|const|async|await|volatile|unsafe|new|partial|ref|out|in|class|struct|interface|enum|extends|implements|this|base|new|fixed|sizeof|stackalloc|from|where|select|group|join|into|orderby|let|in|on|equals|add|remove|get|set|value|global|const)$/.test(token)) {
                    tokens[i] = `<span class="highlight_keyword">${token}</span>`;
                } else if (/^(int|float|double|decimal|bool|char|string|byte|sbyte|short|ushort|long|ulong|object|void|dynamic|nullable|true|false)$/.test(token)) {
                    tokens[i] = `<span class="highlight_dataType">${token}</span>`;
                } else if (/^(null|NA|NaN|Inf)$/.test(token)) {
                    tokens[i] = `<span class="highlight_constant">${token}</span>`;
                } else if (/^(print|len|input|range|open|map|filter|zip|sorted|sum|min|max|abs|round|int|float|str|type|id|dir|help|isinstance)$/.test(token)) {
                    tokens[i] = `<span class="highlight_function">${token}</span>`;
                } else if (/^(\(|\))$/.test(token)) {
                    tokens[i] = `<span class="highlight_parentheses">${token}</span>`;
                } else if (/^(\[|\])$/.test(token)) {
                    tokens[i] = `<span class="highlight_brackets">${token}</span>`;
                } else if (/^(\{|\})$/.test(token)) {
                    tokens[i] = `<span class="highlight_braces">${token}</span>`;
                } else if (/^(\'[^\"]*\'|\"[^\"]*\")$/.test(token)) {
                    tokens[i] = `<span class="highlight_string">${token}</span>`;
                } else if (/^(#.*$|\/\*.*\*\/|\/\/.*)$/.test(token)) {
                    tokens[i] = `<span class="highlight_comment">${token}</span>`;
                } else if(/^(namespace|using|assembly|extern)$/.test(token)){
                    tokens[i] = `<span class="highlight_module">${token}</span>`;
                } else if(/^(delegate|event)$/.test(token)){
                    tokens[i] = `<span class="highlight_decorator">${token}</span>`;
                } else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
                    tokens[i] = `<span class="highlight_variable">${token}</span>`;
                }
            }
            text = tokens.join('');        
            break;            
        case 'sql':
            tokenRegex = /(\@[a-zA-Z_][a-zA-Z0-9_]*)|[-]{2}.*$|\/\*.*\*\/|(\+|\-|\*\*|\*|\/\/|\/|\^|%%|%\/%|<-|->|=|&&?|\|\|?|!|<=?|>=?|\+=|\-=|\*=|\/=|\/\/=|%=|\*\*=|==|!=|<|>|\,|\;|\&|\~|<<|>>|:|::|:::|\.\.\.|\.|%in%|~|\$|@|\(|\)|\[|\]|\{|\}|\"[^\"]*\"|\'[^\']*\'|[\"]{3}[^\"]*[\"]{3})|([0-9][\.0-9]*[e][\-]*[0-9]|[0-9]+L|[0-9]+\.[0-9]+|[0-9]+)|(#.*$)|([a-zA-Z_][a-zA-Z0-9_]*)|\s+/gm;
            tokens = text.match(tokenRegex);
            for (let i = 0; i < tokens.length; i++) {
                let token = tokens[i];
                if (/^\s+$/.test(token) || token == undefined || token == '' || token == ' ') {
                    continue;
                } else if (/^([0x][0-9|A-F]+|[0o][0-7]+|[0b][0|1]+|[-]?[0-9]+[j]|[-]?[0-9][\.0-9]*[e][\-]*[0-9]|[-]?[0-9]+\.[0-9]+|[-]?[0-9]+)$/.test(token)) {
                    tokens[i] = `<span class="highlight_number">${token}</span>`;
                } else if (/^(\+|\-|\*|\/|\^|%%|%\/%|<-|->|<|>|\,|\&|\~|<<|>>|\.|\;|\*\*|\/\/|=|&&?|\|\|?|!|<=?|>=?|\+=|\-=|\*=|\/=|\/\/=|%=|\*\*=|==|!=|:|::|:::|%in%|~|\$|@)$/.test(token)) {
                    tokens[i] = `<span class="highlight_operator">${token}</span>`;
                } else if (/^(SELECT|DISTINCT|FROM|WHERE|AND|OR|NOT|BETWEEN|LIKE|IN|IS|NULL|EXISTS|GROUP BY|HAVING|ORDER BY|ASC|DESC|JOIN|INNER JOIN|LEFT JOIN|RIGHT JOIN|FULL JOIN|ON|USING|INSERT INTO|VALUES|UPDATE|SET|DELETE FROM|CREATE|CREATE TABLE|CREATE SCHEMA|CREATE VIEW|CREATE INDEX|CREATE DATABASE|ALTER|ALTER TABLE|ADD|DROP|DROP|DROP TABLE|DROP VIEW|DROP INDEX|DROP DATABASE|DROP SCHEMA|BEGIN|COMMIT|ROLLBACK|SAVEPOINT|SET TRANSACTION|GRANT|REVOKE|DENY|RESTRICT|USE|DATABASE|SCHEMA|ALTER INDEX|PRIMARY KEY|FOREIGN KEY|UNIQUE|NOT NULL|AUTO_INCREMENT|CHECK|DEFAULT|UNION|UNION ALL|INTERSECT|EXCEPT|AND|OR|NOT|IN|ANY|ALL|SOME|NULL|IS NULL|IS NOT NULL|CASE|WHEN|THEN|ELSE|END|AS|CREATE PROCEDURE|ALTER PROCEDURE|DROP PROCEDURE|CALL|EXEC|EXECUTE|IN|OUT|INOUT|RETURNS|BEGIN|END|RETURN|IF|ELSE|ELSIF|LOOP|WHILE|FOR|REPEAT|LEAVE|ITERATE|DECLARE|HANDLER|RESIGNAL|CREATE FUNCTION|ALTER FUNCTION|DROP FUNCTION|CURSOR|OPEN|FETCH|CLOSE|DECLARE|SET|BEGIN TRANSACTION)$/.test(token)) {
                    tokens[i] = `<span class="highlight_keyword">${token}</span>`;
                } else if (/^(INT|INTEGER|SMALLINT|BIGINT|DECIMAL|NUMERIC|FLOAT|DOUBLE|REAL|CHAR|VARCHAR|TEXT|DATE|TIME|TIMESTAMP|DATETIME|YEAR|BINARY|VARBINARY|BLOB|BOOLEAN|ENUM|SET)$/.test(token)) {
                    tokens[i] = `<span class="highlight_dataType">${token}</span>`;
                }  else if (/^(AVG|COUNT|SUM|MAX|MIN|ROUND|ABS|MOD|CONCAT|SUBSTRING|LENGTH|UPPER|LOWER|TRIM|NOW|CURDATE|CURTIME|YEAR|MONTH|DAY|CAST|CONVERT)$/.test(token)) {
                    tokens[i] = `<span class="highlight_function">${token}</span>`;
                } else if (/^(\(|\))$/.test(token)) {
                    tokens[i] = `<span class="highlight_parentheses">${token}</span>`;
                } else if (/^(\[|\])$/.test(token)) {
                    tokens[i] = `<span class="highlight_brackets">${token}</span>`;
                } else if (/^(\{|\})$/.test(token)) {
                    tokens[i] = `<span class="highlight_braces">${token}</span>`;
                } else if (/^(\'[^\"]*\'|\"[^\"]*\")$/.test(token)) {
                    tokens[i] = `<span class="highlight_string">${token}</span>`;
                } else if (/^(#.*$|[-]{2}.*$|\/\*.*\*\/)$/.test(token)) {
                    tokens[i] = `<span class="highlight_comment">${token}</span>`;
                } else if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) {
                    tokens[i] = `<span class="highlight_variable">${token}</span>`;
                }
            }
            text = tokens.join('');        
            break;            
    }
    return text;
}

function findLanguage(className){
    return /highlight_(.*)$/.test(className);
}

function highlightCode(){
    let nodes = document.getElementsByTagName('pre');
    for(let i = 0;i<nodes.length;i++){
        let language = 0;
        classlist = nodes[i].classList;
        for(let j = 0;j<classlist.length;j++){
            if(findLanguage(classlist[j])){
                language = classlist[j].substr(10).toLowerCase();
            }
        }
        nodes[i] = addBaseClass(nodes[i]);
        let codeText = nodes[i].innerText;
        if(language){
            codeText = addClasses(codeText, language);
        }
        else{
            console.error("No language detected.");
        }
        nodes[i].innerHTML = codeText; //TODO: doda zraven drugih child-ov tag-e, ne pa da vse povozi pa tega postavi
    }
}

function highlightCodes(mainNode){
    if(mainNode.getElementsByTagName('pre').length){
        let nodes = mainNode.getElementsByTagName('pre');
        for(let i = 0;i<nodes.length;i++){
            let language = 0;
            classlist = nodes[i].classList;
            for(let j = 0;j<classlist.length;j++){
                if(findLanguage(classlist[j])){
                    language = classlist[j].substr(10).toLowerCase();
                }
            }
            nodes[i] = addBaseClass(nodes[i]);
            let codeText = nodes[i].innerText;
            if(language){
                codeText = addClasses(codeText, language);
            }
            else{
                console.error("No language detected.");
            }
            nodes[i].innerHTML = codeText;
        }   
    } else{
        let node = mainNode;
        let language = 0;
        classlist = node.classList;
        for(let j = 0;j<classlist.length;j++){
            if(findLanguage(classlist[j])){
                language = classlist[j].substr(10).toLowerCase();
            }
        }
        node = addBaseClass(node);
        let codeText = node.innerText;
        if(language){
            codeText = addClasses(codeText, language);
        } else{
            console.error("No language detected.");
        }
        node.innerHTML = codeText;
        return 
    }
}