import{_ as n,o as d,c as r,a as e,b as t,w as i,e as s,d as a,r as c}from"./app.5e140da5.js";const p={},l=s('<h1 id="misskey-api" tabindex="-1"><a class="header-anchor" href="#misskey-api" aria-hidden="true">#</a> Misskey API</h1><p>Misskey udost\u0119pnia API kt\xF3re mo\u017Cesz wykorzysta\u0107 do tworzenia klient\xF3w do Misskey, us\u0142ug internetowych po\u0142\u0105czonych z Misskey, bot\xF3w, itp. (&quot;Aplikacje&quot;).Posiadamy r\xF3wnie\u017C API strumieniowe, dzi\u0119ki czemu mo\u017Cna tworzy\u0107 aplikacje z mo\u017Cliwo\u015Bci\u0105 pracy w czasie rzeczywistym.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>U\u017Cywaj\u0105c oficjalnego SDK Misskey lub bibliotek nieoficjalnych mo\u017Cna wygodniej korzysta\u0107 z API, na przyk\u0142ad upraszczaj\u0105c niekt\xF3re z krok\xF3w opisanych w tym dokumencie. Zobacz <a href="TODO">tutaj</a> wi\u0119cej informacji na temat bibliotek.</p></div><p>Aby zacz\u0105\u0107 korzysta\u0107 z API, musisz zdob\u0107 <strong>token dost\u0119pu</strong> powi\u0105zany z kontem kt\xF3rego chcesz u\u017Cywa\u0107 z API. Ten dokument poprowadzi Ci\u0119 przez proces zdobywania tokenu dost\u0119pu i poka\u017Ce jak korzysta\u0107 z API.</p><h2 id="zdobywanie-tokenu-dostepu" tabindex="-1"><a class="header-anchor" href="#zdobywanie-tokenu-dostepu" aria-hidden="true">#</a> Zdobywanie tokenu dost\u0119pu</h2><p>Zazwyczaj API wymaga Tokenu Dost\u0119pu \u017Ceby wykona\u0107 \u017C\u0105danie. Token dost\u0119pu jest to zestaw danych powi\u0105zanych z u\u017Cytkownikem, kt\xF3re identyfikuje kt\xF3ry u\u017Cytkownik korzsta z API i kontroluje jakie dost\u0119p do operacji ka\u017Cdego tokenu dost\u0119pu.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Mo\u017Ce by\u0107 wiele relacji pomi\u0119dzy u\u017Cytkownikiem a tokenem dost\u0119pu powi\u0105zanym z u\u017Cytkownikiem i wiele token\xF3w dost\u0119pu mo\u017Ce by\u0107 wygenerowane dla danego u\u017Cytkownika.</p></div><p>Mo\u017Cesz \u0142atwo <a href="#Manually-issue-an-access-token">zdoby\u0107 token dost\u0119pu dla siebie</a>, lub mo\u017Cesz <a href="#Request-an-access-token-to-be-issued">zdoby\u0107 token dost\u0119pu dla u\u017Cytkownika, kt\xF3ry b\u0119dzie korzysta\u0142 z aplikacji</a>.</p><h3 id="manualnie-stworz-token-dostepu" tabindex="-1"><a class="header-anchor" href="#manualnie-stworz-token-dostepu" aria-hidden="true">#</a> Manualnie stw\xF3rz token dost\u0119pu</h3><p>Mo\u017Cesz manualnie stworzy\u0107 sw\xF3j token dost\u0119pu w Przegl\u0105darkowym Interfejsie Misskey w &#39;Ustawienia &gt; API&#39;.</p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>NIKOMU NIE UDO\u015AT\u0118PNIAJ SWOJEGO TOKENU DOST\u0118PU</p></div><h3 id="zazadaj-utworzenia-tokenu" tabindex="-1"><a class="header-anchor" href="#zazadaj-utworzenia-tokenu" aria-hidden="true">#</a> Za\u017Cadaj utworzenia tokenu</h3><p>Any uzyska\u0107 token dost\u0119pu dla u\u017Cytkownika aplikacji (lub po prostu &quot;u\u017Cytkownika&quot;), mo\u017Cesz zarz\u0105da\u0107 by zosta\u0142 stworzony w nast\u0119puj\u0105cy spos\xF3b.</p>',13),u={class:"custom-container tip"},k=e("i",{class:"fas fa-info"},null,-1),z=e("p",null,"Metoda tutaj opisana nazywa si\u0119 MiAuth i ona tworzy token dost\u0119pu bez tworzenia aplikacji.",-1),w=a("Nadal mo\u017Cesz "),y=a("stworzy\u0107 aplikacj\u0119 by uzyska\u0107 token dost\u0119pu"),m=a("."),h=s(`<h4 id="krok-1" tabindex="-1"><a class="header-anchor" href="#krok-1" aria-hidden="true">#</a> Krok 1</h4><p>Wygeneruj UUID. Od teraz b\u0119dziemy na niego m\xF3wi\u0107 <strong>ID Sesji</strong>.</p><div class="custom-container warning"><i class="fas fa-exclamation"></i><p>ID Sesji powinien by\u0107 generowany za ka\u017Cdym razem i nie powinien by\u0107 ponownie u\u017Cywany.</p></div><h4 id="krok-2" tabindex="-1"><a class="header-anchor" href="#krok-2" aria-hidden="true">#</a> Krok 2</h4><p>Formularz uwierzytelniania aplikacji powinien zostac wy\u015Bwietlony w przegl\u0105darce u\u017Cytkownika. Formularz uwierzytelniania mo\u017Ce zosta\u0107 otwarty za pomoc\u0105 URL podobnego do tego:</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/miauth/{session}
</code></pre></div><p>gdzie:</p><ul><li><code>{host}</code> to instancja u\u017Cytkownika (zazwczaj manualnie wpisana przez niego).</li><li><code>{session}</code> to jest ID Sesji.</li></ul><p>Jest te\u017C kilka parametr\xF3w \u017C\u0105da\u0144 w URL:</p><table><thead><tr><th>Nazwa</th><th>Opis</th></tr></thead><tbody><tr><td><code>name</code></td><td>Nazwa Aplikacji</td></tr><tr><td><code>icon</code></td><td>Ikona Aplikacji\u3002</td></tr><tr><td><code>callback</code></td><td>URL do kt\xF3rego u\u017Cytkowink zostanie przekierowany po uwierzytelnieniu z ID Sesji dodanym by przekierowa\u0107 z parametrem \u017C\u0105dania <code>session</code>.</td></tr><tr><td><code>permission</code></td><td>Zgody kt\xF3rych aplikacjia wymaga. <br>Lista zezwole\u0144 kt\xF3re mog\u0105 by\u0107 \u017C\u0105dane, podzelona<code>,</code>. Lista zezwole\u0144 jest dost\u0119pna <a href="TODO">tutaj</a>.</td></tr></tbody></table><div class="custom-container tip"><i class="fas fa-info"></i><p>Przyk\u0142ad:</p><div class="language-text ext-text"><pre class="language-text"><code>https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&amp;callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&amp;permisson=write:notes,write:following,read:drive
</code></pre></div></div><h4 id="krok-3" tabindex="-1"><a class="header-anchor" href="#krok-3" aria-hidden="true">#</a> Krok 3</h4><p>Po tym jak u\u017Cytkownik odtrzyma\u0142 dost\u0119p do aplikacji, \u017C\u0105danie POST do URL formularza zwr\xF3ci wynik w JSON zawieraj\u0105cy token dost\u0119powy jako odpowied\u017A.</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/api/miauth/{session}/check
</code></pre></div><p>gdzie:</p><ul><li><code>{host}</code> to instancja u\u017Cytkownika (zazwczaj manualnie wpisana przez niego).</li><li><code>{session}</code> to jest ID Sesji.- <code>{session}</code> is the session ID.</li></ul><p>W\u0142a\u015Bciwo\u015Bci zawarte w odpowiedzi:</p><table><thead><tr><th>Nazwa</th><th>Opis</th></tr></thead><tbody><tr><td><code>token</code></td><td>teoken dost\u0119pu u\u017Cytkownika</td></tr><tr><td><code>user</code></td><td>informacje na temat u\u017Cytkownika</td></tr></tbody></table><h2 id="uzywanie-api" tabindex="-1"><a class="header-anchor" href="#uzywanie-api" aria-hidden="true">#</a> U\u017Cywanie API</h2><p>Kiedy zdob\u0119dziesz token dost\u0119pu API mo\u017Cesz skorzysta\u0107 z API tworz\u0105c rz\u0105dania do r\xF3\u017Cnych miejsc.</p><div class="custom-container tip"><i class="fas fa-info"></i><ul><li>Wszytkie API HTTP s\u0105 \u017C\u0105daniami POST, i zar\xF3wno \u017C\u0105danie jak i odpowied\u017A s\u0105 w formacie JSON (wyj\u0105tkiem stanowi\u0105 dysk/pliki/utw\xF3rz (drive/files/create)).</li><li>Okre\u015Bl <code>Content-Type: application/json</code> w nag\u0142\xF3wku \u017C\u0105dania.</li><li>Token dost\u0119pu jest zawarty w JSONie \u017C\u0105dania z parametrem <code>i</code>.</li></ul></div><p>Przyk\u0142ad JSONa z tokenem dost\u0119pu:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HogEFugA1341&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Token dost\u0119pu jest zawarty w JSONie \u017C\u0105dania z parametrem <code>i</code>.</p>`,24),j=a("Po wi\u0119cej informacji na temat API zobacz "),b=a("API Reference"),f=a("."),g=e("p",null,"::: info Misskey nie u\u017Cywa API typu REST. :::",-1),_=a("Opr\xF3cz interfejsu API HTTP, Misskey udost\u0119pnia r\xF3wnie\u017C interfejs API strumieniowania. Wi\u0119cej informacji o API strumieniowym mo\u017Cna znale\u017A\u0107 "),v=a("tutaj"),I=a("."),P=e("div",{class:"custom-container tip"},[e("i",{class:"fas fa-info"}),e("p",null,[a("Twoja instancja Misskey r\xF3wnie\u017C zawiera dokumentacji api w "),e("code",null,"/api-doc"),a(".")])],-1);function x(A,O){const o=c("RouterLink");return d(),r("div",null,[l,e("div",u,[k,z,e("p",null,[w,t(o,{to:"/pl/docs/api/app.html"},{default:i(()=>[y]),_:1}),m])]),h,e("p",null,[j,t(o,{to:"/pl/docs/api/endpoints.html"},{default:i(()=>[b]),_:1}),f]),g,e("p",null,[_,t(o,{to:"/pl/docs/api/streaming/"},{default:i(()=>[v]),_:1}),I]),P])}var M=n(p,[["render",x],["__file","index.html.vue"]]);export{M as default};
