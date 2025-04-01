<script>
        window.onload = function() {
            // Dynamically adjust image size for better layout
            let images = document.querySelectorAll("li img");
            images.forEach(function(img) {
                img.style.width = "150px"; // Set all images to a consistent size
                img.style.height = "150px";
                img.style.objectFit = "cover"; // Ensures proper image cropping
            });

            // Adjust spacing if needed
            let listItems = document.querySelectorAll("li");
            listItems.forEach(function(item) {
                item.style.marginBottom = "20px"; // Add space between list items
            });
        }
    </script>
