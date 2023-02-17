import{_ as i,o,c,a as e,b as t,w as n,e as d,d as s,r}from"./app.3f993c59.js";const l={},p=d(`<h1 id="api-misskey" tabindex="-1"><a class="header-anchor" href="#api-misskey" aria-hidden="true">#</a> API Misskey</h1><p>Misskey dispose d\u2019une APi pour d\xE9velopper son propre client Misskey, des services li\xE9s, des bots, etc\u2026 (\xAB\u202FApplications\u202F\xBB). Il existe \xE9galement un flux API pour cr\xE9er des applications avec des fonctions en temps r\xE9el.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>En utilisant le SDK officiel Misskey ou une librairie tierce, vous pouvez utiliser l\u2019API de mani\xE8re \xE0 simplifier des \xE9tapes d\xE9crites dans ce document. Voir <a href="TODO">ici</a> pour plus d\u2019informations \xE0 propos des librairies.</p></div><p>Pour commencer \xE0 utiliser l\u2019API vous aurez besoin une <strong>cl\xE9 d\u2019acc\xE8s</strong> associ\xE9e \xE0 un compte. Ce document vous accompagne dans l\u2019obtention de cette cl\xE9 et montre comment l\u2019utiliser pour un usage basique.</p><h2 id="obtenir-une-cle-d-acces" tabindex="-1"><a class="header-anchor" href="#obtenir-une-cle-d-acces" aria-hidden="true">#</a> Obtenir une cl\xE9 d\u2019acc\xE8s</h2><p>L\u2019API requiert une cl\xE9 d\u2019acc\xE8s pour ses requ\xEAtes. Une cl\xE9 d\u2019acc\xE8s est un ensemble de donn\xE9es associ\xE9e \xE0 une personne, l\u2019identifiant comme utilisant l\u2019API et contr\xF4lant les op\xE9rations qui sont effectu\xE9es.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>La cl\xE9 est nominative et ne peut \xEAtre utilis\xE9e que par une personne, plusieurs cl\xE9s peuvent \xEAtre poss\xE9d\xE9es par une personne.</p></div><p>Vous pouvez facilement <a href="#M%C3%A9thode-manuelle">obtenir votre cl\xE9 d\u2019acc\xE8s</a>, ou une <a href="#Demander-une-cl%C3%A9-d%E2%80%99acc%C3%A8s">cl\xE9 pour une personne utilisant votre application</a>..</p><h3 id="methode-manuelle" tabindex="-1"><a class="header-anchor" href="#methode-manuelle" aria-hidden="true">#</a> M\xE9thode manuelle</h3><p>Vous pouvez cr\xE9er votre propre cl\xE9 d\u2019acc\xE8s via l\u2019interface Misskey Web dans la section API des param\xE8tres.</p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Ne communiquez pas cette cl\xE9.</p></div><h3 id="demander-une-cle-d-acces" tabindex="-1"><a class="header-anchor" href="#demander-une-cle-d-acces" aria-hidden="true">#</a> Demander une cl\xE9 d\u2019acc\xE8s</h3><p>Pour obtenir une cl\xE9 d\u2019acc\xE8s pour une personne utilisant votre application, suivre les \xE9tapes suivantes\xA0:</p><div class="custom-container tip"><i class="fas fa-info"></i><p>\u4EE5\u4E0B\u306B\u8AAC\u660E\u3059\u308B\u65B9\u6CD5\u306F\u3001\u30A2\u30D7\u30EA\u3092\u4F5C\u6210\u305B\u305A\u30A4\u30F3\u30B9\u30BF\u30F3\u30C8\u306B\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u767A\u884C\u3059\u308B\u3001MiAuth\u3068\u547C\u3070\u308C\u308B\u3082\u306E\u3067\u3059\u3002</p><p><a href="./app">\u30A2\u30D7\u30EA\u4F5C\u6210\u65B9\u5F0F\u3067\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u53D6\u5F97\u65B9\u6CD5\u3082\u3042\u308A\u307E\u3059\uFF08\u65E7\u6765\u578B\uFF09\u3002</a></p></div><h4 id="etape-1" tabindex="-1"><a class="header-anchor" href="#etape-1" aria-hidden="true">#</a> \xC9tape 1</h4><p>G\xE9n\xE9rer un UUID, ci-apr\xE8s d\xE9nomm\xE9 <strong>ID session</strong>.</p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>Cet ID session est \xE0 usage unique.</p></div><h4 id="etape-2" tabindex="-1"><a class="header-anchor" href="#etape-2" aria-hidden="true">#</a> \xC9tape 2</h4><p>Le formulaire d\u2019identification de l\u2019application doit s\u2019afficher dans le navigateur. Cela peut \xEAtre fait via une URL de format\xA0:</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/miauth/{session}
</code></pre></div><p>o\xF9</p><ul><li><code>{host}</code> est l\u2019h\xF4te de l\u2019instance, g\xE9n\xE9ralement entr\xE9 manuellement\xA0;</li><li><code>{session}</code> est l\u2019ID session.</li></ul><p>Vous pouvez \xE9galement ajouter des options telles que des param\xE8tres dans l\u2019URL\xA0:</p><table><thead><tr><th>nom</th><th>description</th></tr></thead><tbody><tr><td><code>name</code></td><td>nom de l\u2019application</td></tr><tr><td><code>icon</code></td><td>URL de l\u2019ic\xF4ne de l\u2019application</td></tr><tr><td><code>callback</code></td><td>L\u2019URL de redirection apr\xE8s identificaton, avec l\u2019ID session en tant que <code>session</code>.</td></tr><tr><td><code>permission</code></td><td>Les permissions requises par l\u2019application. <br>Liste les permissions \xE0 demander, s\xE9par\xE9es par <code>,</code>. La liste compl\xE8te est consultable <a href="TODO">ici</a>.</td></tr></tbody></table><div class="language-text ext-text"><pre class="language-text"><code>https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&amp;callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&amp;permisson=write:notes,write:following,read:drive
</code></pre></div><h4 id="etape-3" tabindex="-1"><a class="header-anchor" href="#etape-3" aria-hidden="true">#</a> \xC9tape 3</h4><p>Apr\xE8s l\u2019identification, une requ\xEAte POST \xE0 une URL du format suivant retournera en un JSON contenant la cl\xE9 d\u2019acc\xE8s\xA0:</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/api/miauth/{session}/check
</code></pre></div><p>o\xF9</p><ul><li><code>{host}</code> est l\u2019h\xF4te de l\u2019instance\xA0;</li><li><code>{session}</code> est l\u2019ID session.</li></ul><p>Les propri\xE9t\xE9s incluses dans la r\xE9ponse sont les suivantes\xA0:</p><table><thead><tr><th>nom</th><th>description</th></tr></thead><tbody><tr><td><code>token</code></td><td>cl\xE9 d\u2019acc\xE8s</td></tr><tr><td><code>user</code></td><td>information sur la personne</td></tr></tbody></table><h2 id="utilisation-de-l-api" tabindex="-1"><a class="header-anchor" href="#utilisation-de-l-api" aria-hidden="true">#</a> Utilisation de l\u2019API</h2><p>Une fois la cl\xE9 en main, vous pouvez utiliser l\u2019API pour faire des requ\xEAtes.</p><div class="custom-container tip"><i class="fas fa-info"></i><ul><li>Toutes les API HTTP sont POST, et les requ\xEAte comme les r\xE9ponses sont au format JSON (\xE0 l\u2019exception de drive/files/create\xA0;</li><li>Indiquez <code>Content-Type: application/json</code> dans l\u2019ent\xEAte de requ\xEAte\xA0;</li><li>La cl\xE9 d\u2019acc\xE8s est dans le corps de requ\xEAte JSON avec comme valeur de name <code>i</code>.</li></ul></div><p>Exemple de corps avec une cl\xE9 d\u2019acc\xE8s pour meta\xA0:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HogEFugA1341&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>La cl\xE9 d\u2019acc\xE8s est incluse dans le corps de requ\xEAte JSON comme param\xE8tre <code>i</code>.</p>`,38),u=s("Pour plus d\u2019informations \xE0 propos de l\u2019API voir "),m=s("r\xE9f\xE9rence API"),h=s("."),f=e("div",{class:"custom-container warning"},[e("i",{class:"fas fa-exclamation"}),e("p",null,"Misskey n\u2019utilise pas REST.")],-1),v=s("En plus de l\u2019API\u202FHTTP, Misskey fourni un flux API. Plus d\u2019informations \xE0 ce sujet "),b=s("ici"),x=s("."),g=e("div",{class:"custom-container tip"},[e("i",{class:"fas fa-info"}),e("p",null,[s("Votre instance Misskey dispose de sa propre documentation d\u2019API \xE0 "),e("code",null,"/api-doc"),s(".")])],-1);function _(k,A){const a=r("RouterLink");return o(),c("div",null,[p,e("p",null,[u,t(a,{to:"/fr/docs/api/endpoints.html"},{default:n(()=>[m]),_:1}),h]),f,e("p",null,[v,t(a,{to:"/fr/docs/api/.streaming/"},{default:n(()=>[b]),_:1}),x]),g])}var q=i(l,[["render",_],["__file","index.html.vue"]]);export{q as default};
