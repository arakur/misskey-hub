import{_ as i,o as s,c as o,a as e,b as n,w as r,d,e as t,r as c}from"./app.5e140da5.js";const l={},u=e("h1",{id:"skrypt-do-pow\u0142oki-bash-do-instalacji-misskey-wersja-3-0-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#skrypt-do-pow\u0142oki-bash-do-instalacji-misskey-wersja-3-0-0","aria-hidden":"true"},"#"),d(" Skrypt do pow\u0142oki BASH do instalacji Misskey - wersja 3.0.0")],-1),p=e("p",null,"Mo\u017Cesz zainstalowa\u0107 Misskey za pomoc\u0105 pojedy\u0144czego skryptu.",-1),m=e("p",null,"Skrypt jest przystosowany pod Ubuntu i pomo\u017Ce ci zainstalowa\u0107 Misskey zadaj\u0105c kilka podstawowych pyta\u0144.",-1),h=e("p",null,"Poza jest te\u017C skrypt do aktualizacji Misskey.",-1),y=e("a",{href:"https://github.com/joinmisskey/bash-install/blob/a096e874f93d493aa68975a31be9ce12d644e767/README.en.md",target:"_blank",rel:"noopener noreferrer"},"Dla v12",-1),k=e("br",null,null,-1),z=e("strong",null,"Kliknij tutaj, aby zobaczy\u0107 wersj\u0119 japo\u0144sk\u0105. / \u65E5\u672C\u8A9E\u7248\u306F\u3053\u3061\u3089",-1),w=t(`<h2 id="licencja" tabindex="-1"><a class="header-anchor" href="#licencja" aria-hidden="true">#</a> Licencja</h2><p><a href="./LICENSE">MIT License</a></p><h2 id="sk\u0142adniki" tabindex="-1"><a class="header-anchor" href="#sk\u0142adniki" aria-hidden="true">#</a> Sk\u0142adniki</h2><ol><li>Domena</li><li>Serwer (najlepiej si\u0119 sprawdzi Ubuntu)</li><li>Konto CloudFlare (zalecane)</li></ol><div class="custom-container danger"><i class="fas fa-times"></i><p>Nigdy nie zmieniaj nazwy domeny (hostname) instancji kiedy zaczniesz z niej korzysta\u0107!!</p></div><h2 id="skonfiguruj-cloudflare" tabindex="-1"><a class="header-anchor" href="#skonfiguruj-cloudflare" aria-hidden="true">#</a> Skonfiguruj CloudFlare</h2><p>Je\u015Bli korzystasz z nginx i Cloudflare, musisz skonfigurowa\u0107 Cloudflare:</p><ul><li>Ustaw DNS.</li><li>W zak\u0142adce ustawie\u0144 SSL/TLS, prze\u0142\u0105cz tryb szyfrowania na&quot;Full&quot;.</li></ul><h2 id="procedury" tabindex="-1"><a class="header-anchor" href="#procedury" aria-hidden="true">#</a> Procedury</h2><h3 id="_1-ssh" tabindex="-1"><a class="header-anchor" href="#_1-ssh" aria-hidden="true">#</a> 1. SSH</h3><p>Po\u0142\u0105cz si\u0119 z serwerem za pomoc\u0105 SSH (Je\u015Bli masz fizyczny dost\u0119p do serwera to uruchom terminal)</p><h3 id="_2-przygotowanie-systemu" tabindex="-1"><a class="header-anchor" href="#_2-przygotowanie-systemu" aria-hidden="true">#</a> 2. Przygotowanie systemu</h3><p>Zaktualizuj paczki systemu i go zrestartuj.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update; sudo apt full-upgrade -y; sudo reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-rozpocznij-instalacje" tabindex="-1"><a class="header-anchor" href="#_3-rozpocznij-instalacje" aria-hidden="true">#</a> 3. Rozpocznij instalacj\u0119</h3><p>Po\u0142\u0105cz si\u0119 z powrotem i rozpocznij instalacje Misskey.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/ubuntu.sh -O ubuntu.sh; sudo bash ubuntu.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-aktualizacja-misskey" tabindex="-1"><a class="header-anchor" href="#_4-aktualizacja-misskey" aria-hidden="true">#</a> 4. Aktualizacja Misskey</h3><p>Jest te\u017C skrypt do aktualizacji Misskey.</p><p>Skrypt ten nie aktualizuje \u015Brodowiska. Prosz\u0119 odwo\u0142a\u0107 si\u0119 do Dziennika zmian (po japo\u0144sku (translator pomo\u017Ce)) i [Listy wyda\u0144 GitHub(po angielsku)](<br> (https://github.com/joinmisskey/bash-install/releases) i odpowienio dokonywa\u0107 migracji.</p><p>Najpierw pobierz skrypt aktualizacji.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/update.ubuntu.sh -O update.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Uruchom pobrany skrypt kiedy chcesz aktualizowa\u0107 Misskey</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo bash update.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>W \u015Brodowisku u\u017Cywaj\u0105cym systemd opcj\u0105 <code>-r</code> mo\u017Cna zaktualizowa\u0107 i zrestartowa\u0107 system.</li><li>W \u015Brodowisku dockerowym mo\u017Cesz okre\u015Bli\u0107 repozytorium:tag jako argument</li></ul><h2 id="przetestowane-srodowska" tabindex="-1"><a class="header-anchor" href="#przetestowane-srodowska" aria-hidden="true">#</a> Przetestowane \u015Brodowska</h2><h3 id="oracle-cloud-infrastructure" tabindex="-1"><a class="header-anchor" href="#oracle-cloud-infrastructure" aria-hidden="true">#</a> Oracle Cloud Infrastructure</h3><p>Ten skrypt dzia\u0142\u0105 dobrze na nast\u0119puj\u0105cych \u015Brodowiskach oferowanych przez Oracle Cloud Infrastructure Always Free.</p><ul><li>VM.Standard.E2.1.Micro (AMD)</li><li>VM.Standard.A1.Flex (ARM) [1OCPU RAM6GB lub wi\u0119cej]</li></ul><p>Nale\u017Cy u\u017Cywa\u0107 iptables.</p><p>Oraz nie zapomnij o ustawieniu port\xF3w w ustawieniach sieci po stronie Oracle</p><h2 id="problemy-i-pull-requesty-witamy" tabindex="-1"><a class="header-anchor" href="#problemy-i-pull-requesty-witamy" aria-hidden="true">#</a> Problemy i Pull Requesty witamy</h2><p>Je\u017Celi co\u015B nie dzia\u0142a w podanych wy\u017Cej \u015Brodowiskach, mo\u017Ce to by\u0107 b\u0142\u0105d. B\u0119dziemy wdzi\u0119czni, je\u015Bli zg\u0142osisz go jako problem, z podanymi wymaganiami, kt\xF3re wprowadzi\u0142e\u015B do skryptu.</p><p>Ci\u0119\u017Cko jest pom\xF3c z \u015Brodowiskami innymi ni\u017C powy\u017Cej, ale mo\u017Cemy rozwi\u0105za\u0107 Tw\xF3j problem, je\u015Bli podasz nam szczeg\xF3\u0142y \u015Brodowiska.</p><p>Suggestie r\xF3wnierz witamy.</p><h1 id="uwaga-czesc-t\u0142umaczona-maszynowo-moze-nie-byc-100-prawid\u0142owa" tabindex="-1"><a class="header-anchor" href="#uwaga-czesc-t\u0142umaczona-maszynowo-moze-nie-byc-100-prawid\u0142owa" aria-hidden="true">#</a> UWAGA CZ\u0118\u015A\u0106 T\u0141UMACZONA MASZYNOWO - mo\u017Ce nie by\u0107 100% prawid\u0142owa</h1><h1 id="porady" tabindex="-1"><a class="header-anchor" href="#porady" aria-hidden="true">#</a> Porady.</h1><p>Jak wybra\u0107 pomi\u0119dzy dwoma opcjami i specyfikacj\u0105.</p><h2 id="systemd-czy-docker" tabindex="-1"><a class="header-anchor" href="#systemd-czy-docker" aria-hidden="true">#</a> Systemd czy Docker?</h2><p>Od v1, mo\u017Cesz wybra\u0107 mi\u0119dzy systemd i Docker jako metod\u0105 instalacji.</p><p>Kiedy m\xF3wimy Docker, tylko <strong>Misskey jest uruchamiany na Dockerze</strong>, podczas gdy Redis, Postgres itp. s\u0105 uruchamiane bezpo\u015Brednio na ho\u015Bcie.<br> [Aby uzyska\u0107 wi\u0119cej informacji o tym, jak uruchomi\u0107 wszystkie funkcje za pomoc\u0105 docker-compose, polecamy ten artyku\u0142 stworzony przez mamemononga] (https://gist.github.com/mamemomonga/5549bb69cad8e5618e5527593d4890e0)</p><p>Je\u015Bli jest skonfigurowany do korzystania z obraz\xF3w Docker Hub, jest to <strong>najbardziej zalecane</strong>, poniewa\u017C eliminuje potrzeb\u0119 budowania Misskey.<br> Jednak migracja jest wymagana, wi\u0119c nie b\u0119dzie zerowego czasu, w kt\xF3rym nie mo\u017Cna u\u017Cy\u0107 Misskey podczas aktualizacji.<br> Ponadto nie przygotowujesz \u015Brodowiska budowania dla Misskey (nie ma git pull), wi\u0119c staje si\u0119 k\u0142opotliwy do skonfigurowania, gdy chcesz przenie\u015B\u0107 fork.</p><p>Lokalna metoda budowania Docker jest zdeprecjonowana ze wzgl\u0119du na wydajno\u015B\u0107.</p><p>Systemd jest zalecany, je\u015Bli chcesz u\u017Cy\u0107 forka, chocia\u017C nie musisz przesy\u0142a\u0107 obrazu do Docker Hub.</p><p>Zalecana kolejno\u015B\u0107 jest nast\u0119puj\u0105ca.</p><ol><li>docker hub</li><li>systemd</li><li>docker build.</li></ol><h2 id="czy-uzywac-nginx" tabindex="-1"><a class="header-anchor" href="#czy-uzywac-nginx" aria-hidden="true">#</a> Czy u\u017Cywa\u0107 nginx</h2><p>Je\u015Bli budujesz Misskey na pojedynczym serwerze, zalecamy u\u017Cycie nginx.</p><p>Je\u015Bli instalujesz load balancer, nie instaluj nginx, ale <a href="https://github.com/misskey-dev/misskey/blob/develop/docs/examples/misskey.nginx" target="_blank" rel="noopener noreferrer">konfiguracja nginx dla Misskey</a> Lepiej jest skonfigurowa\u0107 load balancer w odniesieniu do.</p><h2 id="dodaj-wiecej-swapow" tabindex="-1"><a class="header-anchor" href="#dodaj-wiecej-swapow" aria-hidden="true">#</a> Dodaj wi\u0119cej swap\xF3w!</h2><p>Je\u015Bli masz skonfigurowane swapy, skrypt nie zostanie uruchomiony, je\u015Bli nie masz \u0142\u0105cznie co najmniej 3 GB pami\u0119ci.</p><h2 id="jesli-skrypt-zawiedzie-w-po\u0142owie-i-chcesz-go-uruchomic-ponownie" tabindex="-1"><a class="header-anchor" href="#jesli-skrypt-zawiedzie-w-po\u0142owie-i-chcesz-go-uruchomic-ponownie" aria-hidden="true">#</a> Je\u015Bli skrypt zawiedzie w po\u0142owie i chcesz go uruchomi\u0107 ponownie</h2><p>W ma\u0142o prawdopodobnym przypadku, gdy skrypt zawiedzie w po\u0142owie i b\u0119dziesz chcia\u0142 uruchomi\u0107 go ponownie, zwr\xF3\u0107 uwag\u0119 na nast\u0119puj\u0105ce kwestie: ## Dodaj wi\u0119cej swap\xF3w!</p><ul><li>Je\u015Bli masz ju\u017C zainstalowane Redis i Postgres, ustaw &#39;install locally&#39; na No.<br> Ustawienia hosta i portu nale\u017Cy pozostawi\u0107 tak jak s\u0105 i nacisn\u0105\u0107 Enter. Wprowad\u017A nazw\u0119 u\u017Cytkownika i has\u0142o okre\u015Blone w poprzednim uruchomieniu.</li></ul><h2 id="o-plikach-env" tabindex="-1"><a class="header-anchor" href="#o-plikach-env" aria-hidden="true">#</a> O plikach .env</h2><p>Skrypt instalacyjny tworzy dwa pliki .env.<br> U\u017Cywane do aktualizacji.</p><h3 id="root-misskey-env" tabindex="-1"><a class="header-anchor" href="#root-misskey-env" aria-hidden="true">#</a> /root/.misskey.env</h3><p>Wymagane do zapami\u0119tania u\u017Cytkownika do uruchomienia misskey.</p><h3 id="home-uzytkownik-misskey-misskey-env" tabindex="-1"><a class="header-anchor" href="#home-uzytkownik-misskey-misskey-env" aria-hidden="true">#</a> /home/(u\u017Cytkownik misskey)/.misskey.env</h3><p>Generowany dla systemd.<br> G\u0142\xF3wnie u\u017Cywany do zapami\u0119tania katalog\xF3w.</p><h3 id="home-misskey-user-misskey-docker-env" tabindex="-1"><a class="header-anchor" href="#home-misskey-user-misskey-docker-env" aria-hidden="true">#</a> /home/(misskey user)/.misskey-docker.env</h3><p>Wygenerowany dla Dockera.<br> Przechowuje numer uruchomionego kontenera i obrazu.<br> Numery kontener\xF3w s\u0105 aktualizowane podczas aktualizacji. Stare obrazy s\u0105 usuwane.</p><h2 id="zarzadzaj-soba" tabindex="-1"><a class="header-anchor" href="#zarzadzaj-soba" aria-hidden="true">#</a> Zarz\u0105dzaj sob\u0105.</h2><p>Po instalacji, oto kilka uwag, kt\xF3re mog\u0105 by\u0107 przydatne podczas zmiany konfiguracji.</p><p>Zast\u0105p &quot;example.com&quot; w\u0142asn\u0105 domen\u0105.</p><h3 id="katalog-misskey" tabindex="-1"><a class="header-anchor" href="#katalog-misskey" aria-hidden="true">#</a> Katalog Misskey</h3><p>\u0179r\xF3d\u0142o Misskey jest sklonowane jako <code>/home/user/directory</code>.<br> (Domy\u015Blne warto\u015Bci zar\xF3wno dla u\u017Cytkownika jak i katalogu to misskey).</p><p>Aby dosta\u0107 si\u0119 do katalogu misskey, mo\u017Cesz nawigowa\u0107 w nast\u0119puj\u0105cy spos\xF3b.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -iu user
cd katalog.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Aby powr\xF3ci\u0107 do pierwotnego u\u017Cytkownika, wykonaj exit.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>exit.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h3><p>Zast\u0105p &quot;example.com&quot; w\u0142asn\u0105 domen\u0105.</p><p>Nazwa procesu systemd to example.com.<br> Na przyk\u0142ad, aby go zrestartowa\u0107, wykonaj nast\u0119puj\u0105ce czynno\u015Bci.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo systemctl restart example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Mo\u017Cesz sprawdzi\u0107 logi za pomoc\u0105 journalctl.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>journalctl -t example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Plik konfiguracyjny jest przechowywany jako <code>/etc/systemd/system/example.com.service</code>.</p><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><p>Docker jest uruchamiany bez roota jako u\u017Cytkownik Misskey.</p><p>Wchodz\u0105c na u\u017Cytkownika Misskey za pomoc\u0105 sudo, nale\u017Cy zmieni\u0107 <code>XDG_RUNTIME_DIR</code> i <code>DOCKER_HOST</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -iu user
export XDG_RUNTIME_DIR=/run/user/$UID
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock

# Wy\u015Bwietl list\u0119 proces\xF3w
docker ps.

# Zbuduj (repozytorium: local/misskey:latest)
docker build -t local/misskey:latest . /misskey

# docker run
docker run -d -p 3000:3000 --add-host=docker_host:10.0.0.1 -v /home/misskey/misskey/files:/misskey/files -v &quot;/home/misskey/misskey/.config/ default.yml&quot;:/misskey/.config/default.yml:ro --restart unless-stopped -t &quot;local/misskey:latest&quot;

# Poka\u017C logi
docker logs --tail 50 -f container-id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>W przypadku one-liner\xF3w u\u017Cyj nast\u0119puj\u0105cego.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -u user XDG_RUNTIME_DIR=/run/user/$(id -u user) DOCKER_HOST=unix:///run/user/$(id -u user)/docker.sock docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h3><p>Konfiguracja nginx jest przechowywana jako <code>/etc/nginx/conf.d/example.com.conf</code>.</p><h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h3><p>Requirepass i bind s\u0105 ustawione w <code>/etc/redis/misskey.conf</code>.</p><h2 id="q-nie-moge-uzyskac-dostepu-do-502-po-aktualizacji" tabindex="-1"><a class="header-anchor" href="#q-nie-moge-uzyskac-dostepu-do-502-po-aktualizacji" aria-hidden="true">#</a> Q. Nie mog\u0119 uzyska\u0107 dost\u0119pu do 502 po aktualizacji.</h2><p>Docker wykonuje migracj\u0119 po uruchomieniu, wi\u0119c nie mo\u017Cna uzyska\u0107 do niego dost\u0119pu od razu.<br> Prosz\u0119 sprawdzi\u0107, czy migracja zosta\u0142a zako\u0144czona.</p><p>W przypadku systemd, instalacja pnpm mog\u0142a si\u0119 nie powie\u015B\u0107.</p><p>Spr\xF3buj uruchomi\u0107 nast\u0119puj\u0105ce w katalogu Misskey i ponownie uruchomi\u0107 aktualizacj\u0119.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pnpm run clean-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Je\u015Bli sprawdzisz dzienniki za pomoc\u0105 journalctl, zwykle znajdziesz o\u015Bwiadczenie m\xF3wi\u0105ce, \u017Ce re2.</p><h2 id="q-chce-zbudowac-kolejny-misskey-na-tym-samym-serwerze" tabindex="-1"><a class="header-anchor" href="#q-chce-zbudowac-kolejny-misskey-na-tym-samym-serwerze" aria-hidden="true">#</a> Q. Chc\u0119 zbudowa\u0107 kolejny Misskey na tym samym serwerze.</h2><p>Skrypt nie przewiduje instalacji dodatkowych instancji Misskey na tym samym serwerze.<br> Niekt\xF3re ustawienia zostan\u0105 nadpisane lub otrzymasz b\u0142\u0105d w procesie.</p>`,96);function b(j,g){const a=c("RouterLink");return s(),o("div",null,[u,p,m,h,e("p",null,[y,k,n(a,{to:"/pl/docs/install/"},{default:r(()=>[z]),_:1})]),w])}var x=i(l,[["render",b],["__file","bash.html.vue"]]);export{x as default};
