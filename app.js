function addTodo() {
            const input = document.getElementById('todoInput');
            const value = input.value.trim();
            
            if (value) {
                // Create a simple visual feedback
                const btn = document.querySelector('.add-btn');
                btn.style.background = 'linear-gradient(135deg, #10B981, #059669)';
                btn.textContent = 'Added! ✓';
                
                setTimeout(() => {
                    btn.style.background = 'linear-gradient(135deg, #8B5CF6, #A855F7)';
                    btn.textContent = 'Add Todo';
                    input.value = '';
                }, 1000);
            }
        }
        
        // Enter key support
        document.getElementById('todoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
        
        // Add some interactive floating effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const icons = document.querySelectorAll('.floating-icon');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            icons.forEach((icon, index) => {
                const speed = (index % 3 + 1) * 0.02;
                const x = mouseX * speed * 20;
                const y = mouseY * speed * 20;
                icon.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
            });
        });
