<script>
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }

        function searchItems() {
            let input = document.getElementById("searchBar").value.toLowerCase();
            let lists = document.querySelectorAll("ul li");

            lists.forEach(item => {
                let text = item.innerText.toLowerCase();
                if (text.includes(input)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        }

        function toggleSection(sectionId) {
            let section = document.getElementById(sectionId);
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        }
    </script>
