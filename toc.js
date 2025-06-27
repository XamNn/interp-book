// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="installing.html"><strong aria-hidden="true">2.</strong> Installing</a></li><li class="chapter-item expanded "><a href="helloworld.html"><strong aria-hidden="true">3.</strong> Hello, world!</a></li><li class="chapter-item expanded "><a href="examples.html"><strong aria-hidden="true">4.</strong> Examples</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fib.html"><strong aria-hidden="true">4.1.</strong> Fib</a></li><li class="chapter-item expanded "><a href="birthday.html"><strong aria-hidden="true">4.2.</strong> Birthday</a></li><li class="chapter-item expanded "><a href="animal.html"><strong aria-hidden="true">4.3.</strong> Animals</a></li><li class="chapter-item expanded "><a href="foreach.html"><strong aria-hidden="true">4.4.</strong> ForEach</a></li></ol></li><li class="chapter-item expanded "><a href="primitives.html"><strong aria-hidden="true">5.</strong> Primitives</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="void.html"><strong aria-hidden="true">5.1.</strong> Void</a></li><li class="chapter-item expanded "><a href="null.html"><strong aria-hidden="true">5.2.</strong> Null</a></li><li class="chapter-item expanded "><a href="string.html"><strong aria-hidden="true">5.3.</strong> String</a></li><li class="chapter-item expanded "><a href="int.html"><strong aria-hidden="true">5.4.</strong> Int</a></li><li class="chapter-item expanded "><a href="float.html"><strong aria-hidden="true">5.5.</strong> Float</a></li><li class="chapter-item expanded "><a href="bool.html"><strong aria-hidden="true">5.6.</strong> Bool</a></li></ol></li><li class="chapter-item expanded "><a href="list.html"><strong aria-hidden="true">6.</strong> List</a></li><li class="chapter-item expanded "><a href="record.html"><strong aria-hidden="true">7.</strong> Record</a></li><li class="chapter-item expanded "><a href="variable.html"><strong aria-hidden="true">8.</strong> Variables</a></li><li class="chapter-item expanded "><a href="function.html"><strong aria-hidden="true">9.</strong> Functions</a></li><li class="chapter-item expanded "><a href="io.html"><strong aria-hidden="true">10.</strong> IO</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Print.html"><strong aria-hidden="true">10.1.</strong> Print</a></li><li class="chapter-item expanded "><a href="input.html"><strong aria-hidden="true">10.2.</strong> User Input</a></li><li class="chapter-item expanded "><a href="bytes.html"><strong aria-hidden="true">10.3.</strong> Bytes IO</a></li><li class="chapter-item expanded "><a href="exec.html"><strong aria-hidden="true">10.4.</strong> Exec</a></li></ol></li><li class="chapter-item expanded "><a href="if.html"><strong aria-hidden="true">11.</strong> If Statement</a></li><li class="chapter-item expanded "><a href="while.html"><strong aria-hidden="true">12.</strong> While Loop</a></li><li class="chapter-item expanded "><a href="for.html"><strong aria-hidden="true">13.</strong> Do Loop</a></li><li class="chapter-item expanded "><a href="type.html"><strong aria-hidden="true">14.</strong> Types</a></li><li class="chapter-item expanded "><a href="struct.html"><strong aria-hidden="true">15.</strong> Structs</a></li><li class="chapter-item expanded "><a href="enum.html"><strong aria-hidden="true">16.</strong> Enums</a></li><li class="chapter-item expanded "><a href="atom.html"><strong aria-hidden="true">17.</strong> Atoms</a></li><li class="chapter-item expanded "><a href="module.html"><strong aria-hidden="true">18.</strong> Modules</a></li><li class="chapter-item expanded "><a href="thread.html"><strong aria-hidden="true">19.</strong> Threads</a></li><li class="chapter-item expanded "><a href="imp.html"><strong aria-hidden="true">20.</strong> Importing Code</a></li><li class="chapter-item expanded "><a href="comments.html"><strong aria-hidden="true">21.</strong> Comments</a></li><li class="chapter-item expanded "><a href="debugging.html"><strong aria-hidden="true">22.</strong> Debugging</a></li><li class="chapter-item expanded "><a href="foreign_functions.html"><strong aria-hidden="true">23.</strong> Foreign Functions</a></li><li class="chapter-item expanded "><a href="packi.html"><strong aria-hidden="true">24.</strong> Package Managing - Packi</a></li><li class="chapter-item expanded "><a href="libraries.html"><strong aria-hidden="true">25.</strong> Libraries</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="oak.html"><strong aria-hidden="true">25.1.</strong> Oak</a></li><li class="chapter-item expanded "><a href="ap.html"><strong aria-hidden="true">25.2.</strong> ap</a></li><li class="chapter-item expanded "><a href="curl.html"><strong aria-hidden="true">25.3.</strong> curl</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
