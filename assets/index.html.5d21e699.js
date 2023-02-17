import{_ as o,o as p,c as r,a as n,b as a,w as t,d as e,e as i,r as l}from"./app.3f993c59.js";const c={},u=n("h1",{id:"api-de-flux",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api-de-flux","aria-hidden":"true"},"#"),e(" API de flux")],-1),d={class:"custom-container tip"},v=n("i",{class:"fas fa-info"},null,-1),m=e("Assurez-vous d\u2019avoir lu la "),k=e("documention API Misskey"),y=e(" au pr\xE9alable."),b=i(`<p>L\u2019API de flux fournit des informations en temps r\xE9el (ex\xA0: nouvelles notes, r\xE9actions, abonnements, etc\u2026) ains que d\u2019autres op\xE9rations.</p><h2 id="se-connecter-au-flux" tabindex="-1"><a class="header-anchor" href="#se-connecter-au-flux" aria-hidden="true">#</a> Se connecter au flux</h2><p>Pour utiliser l\u2019API vous devez vous connecter au serveur Misskey via <strong>websocket</strong>.</p><p>L\u2019URL de celui-ci ressemble \xE0\xA0:</p><div class="language-text ext-text"><pre class="language-text"><code>wss://{host}/streaming?i={token}
</code></pre></div><p>o\xF9</p><ul><li><code>{host}</code> est le nom de l\u2019h\xF4te de l\u2019instance\xA0;</li><li><code>{token}</code> est la cl\xE9 d\u2019acc\xE8s.</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>Vous pouvez vous connecter sans cl\xE9 d\u2019acc\xE8s, mais cela limitera les informations re\xE7ues et les op\xE9rations possibles.</p></div><p>Une fois la connexion \xE9tablie, vous pourrez vous abonner aux publications d\xE9crites ci-dessous. Il n\u2019est pas encore possible, par exemple, de recevoir les nouvelles publications de votre fil.</p><p>Pour recevoir ces \xE9v\xE8nements, vous devez rejoindre un <strong>canal</strong> sur le flux, tel que d\xE9crit ci-dessous.</p><p><strong>Toutes les donn\xE9es sont au format JSON</strong></p><h2 id="canal" tabindex="-1"><a class="header-anchor" href="#canal" aria-hidden="true">#</a> Canal</h2><p>L\u2019API de flux Misskey utilise un concept de canaux. Ce m\xE9canisme s\xE9pare les informations re\xE7us et envoy\xE9es. En rejoignant des canux, vous aurez la possibilit\xE9 de recevoir et envoyer de nombreuses informations.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Vous pouvez rejoindre plusieurs canaux simultan\xE9ment via un flux unique.</p></div>`,14),x=e("Les sections suivantes d\xE9crivent comment utiliser les canaux. Pour voir quels canaux sont disponible, se r\xE9f\xE9rer \xE0 la "),h=e("liste des canaux"),f=e("."),g=i(`<h3 id="rejoindre-un-canal" tabindex="-1"><a class="header-anchor" href="#rejoindre-un-canal" aria-hidden="true">#</a> Rejoindre un canal</h3><p>Pour rejoindre un canad, envoyez les donn\xE9es JSON suivant sur le flux\xA0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token operator">...</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>o\xF9</p><ul><li><code>channel</code> est le nom du canal auquel se connecter. Les type de canaux sont d\xE9crits par la suite\xA0;</li><li><code>id</code> est un identifiant arbitraire pour interragir avec ce canal. Il est n\xE9cessaire pour identifier de quel canal le message provient, un flux pouvant contenir diff\xE9rent canaux. Cet identifiant peut \xEAtre un UUID ou un nombre al\xE9atoire\xA0;</li><li><code>params</code> sont les param\xE8tres requis pour rejoindre un canal. Chaque canal requiert des param\xE8tres propres. Si un canal n\u2019en demande pas, alors cette propri\xE9t\xE9 peut \xEAtre laiss\xE9e vide.</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>L\u2019identifiant n\u2019est pas unique par canal mais par connexion car un canal peut \xEAtre utilis\xE9 plusieurs fois avec diff\xE9rents param\xE8tres.</p></div><h3 id="recevoir-des-messages-de-canaux" tabindex="-1"><a class="header-anchor" href="#recevoir-des-messages-de-canaux" aria-hidden="true">#</a> Recevoir des messages de canaux</h3><p>Lors de la r\xE9ception d\u2019un message indiquant une nouvelle publication sur un canal, vous saurez en temps r\xE9el qu\u2019une nouvelle publication est disponible sur votre fil.</p><p>Quand un canal g\xE9n\xE8re un message, les donn\xE9es JSON suivantes sont envoy\xE9es\xA0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>o\xF9</p><ul><li><code>id</code> est l\u2019identifiant utilis\xE9 lors de la connexion au canal. Cela vous permet de savoir de quel canal le message vient\xA0;</li><li><code>type</code> est le type de message. Selon le canal, celui-ci diff\xE8re\xA0;</li><li><code>body</code> contient le contenu du message, celui-ci diff\xE8re selon le canal.</li></ul><h3 id="envoyer-un-message-via-un-canal" tabindex="-1"><a class="header-anchor" href="#envoyer-un-message-via-un-canal" aria-hidden="true">#</a> Envoyer un message via un canal</h3><p>Sur certains canaux, il est \xE9galement possible d\u2019envoyer des messages et d\u2019effectuer d\u2019autres op\xE9rations en plus de la r\xE9ception.</p><p>Pour envoyer un message \xE0 un canal, envoyez les donn\xE9es JSON suivantes\xA0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>o\xF9</p><ul><li><code>id</code> est l\u2019identifiant utilis\xE9 lors de la connexion au canal. Cela vous permet d\u2019indiquer \xE0 quel canal le message est destin\xE9\xA0;</li><li><code>type</code> est le type de message, celui-ci diff\xE8re selon les canaux\xA0;</li><li><code>body</code> contient le corps du message, celui-ci diff\xE8re selon les canaux.</li></ul><h3 id="se-deconnecter-d-un-canal" tabindex="-1"><a class="header-anchor" href="#se-deconnecter-d-un-canal" aria-hidden="true">#</a> Se d\xE9connecter d\u2019un canal</h3><p>Pour se d\xE9connecter d\u2019un canal, envoyez les donn\xE9es JSON suivantes\xA0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>o\xF9</p><ul><li><code>id</code> est l\u2019identifiant utilis\xE9 lors de la connexion au canal. Cela permet d\u2019indiquer de quel canal se d\xE9connecter.</li></ul><h2 id="capturer-des-notes" tabindex="-1"><a class="header-anchor" href="#capturer-des-notes" aria-hidden="true">#</a> Capturer des notes</h2><p>Misskey propose un m\xE9canisme de capture de note. Cela permet de recevoir un flux d\u2019\xE9v\xE8nements pour une note sp\xE9cifique.</p><p>Par exemple, si vous affichez un fil et qu\u2019une personne r\xE9agit \xE0 une des publications, le client ne peut pas savoir de quelle publication il s\u2019agit et il n\u2019est pas possible d\u2019afficher la r\xE9action en temps r\xE9el.</p><p>En capturant une note, vous recevrez les \xE9v\xE8nements qui y sont li\xE9s, et pourrez afficher les r\xE9actions en temps r\xE9el.</p>`,27),_=e("La section suivante d\xE9crit l\u2019usage de cette fonction. Pour voir les type d\u2019\xE9v\xE8nements sont capturables, vour la "),j=e("liste"),q=e("."),z=i(`<h3 id="capturer-une-note" tabindex="-1"><a class="header-anchor" href="#capturer-une-note" aria-hidden="true">#</a> Capturer une note</h3><p>Pour capturer une note, envoyer les donn\xE9es JSON suivantes\xA0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;subNote&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>o\xF9</p><ul><li><code>id</code> est l\u2019identifiant de la note \xE0 capturer.</li></ul><p>En envoyant ce message, vous demandez \xE0 Misskey de capturer la note, et les \xE9v\xE8nements qui y sont li\xE9s vous seront relay\xE9s.</p><p>Si une note re\xE7oit une r\xE9acton, vous recevrez un message au format suivant\xA0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;noteUpdated&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;reacted&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">reaction</span><span class="token operator">:</span> <span class="token string">&#39;like&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&#39;yyyyyyyyyyyyyyyy&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>o\xF9</p><ul><li><code>body.id</code> est l\u2019identifiant de la note\xA0;</li><li><code>body.type</code> est letype d\u2019\xE9v\xE8nement\xA0;</li><li><code>body.body</code> contient les d\xE9tails de l\u2019\xE9v\xE8nement.</li></ul><h3 id="de-capturer-une-note" tabindex="-1"><a class="header-anchor" href="#de-capturer-une-note" aria-hidden="true">#</a> D\xE9-capturer une note</h3><p>Pour ne plus recevoir d\u2019\xE9v\xE8nements li\xE9s \xE0 une note, par exemple si celle-ci n\u2019est plus affich\xE9e \xE0 l\u2019\xE9cran. envoyez les donn\xE9es JSON suivantes\xA0:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;unsubNote&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>o\xF9</p><ul><li><code>id</code> est l\u2019identifiant de la note.</li></ul><p>Une fois ce message envoy\xE9, les \xE9v\xE8nements li\xE9s \xE0 cette note ne vous seront plus transmises.</p>`,16);function P(S,N){const s=l("RouterLink");return p(),r("div",null,[u,n("div",d,[v,n("p",null,[m,a(s,{to:"/fr/docs/api/"},{default:t(()=>[k]),_:1}),y])]),b,n("p",null,[x,a(s,{to:"/fr/docs/api/streaming/channel/"},{default:t(()=>[h]),_:1}),f]),g,n("p",null,[_,a(s,{to:"/fr/docs/api/streaming/note-capture-events.html"},{default:t(()=>[j]),_:1}),q]),z])}var L=o(c,[["render",P],["__file","index.html.vue"]]);export{L as default};
