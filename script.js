// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    // スムーズスクロール
    initSmoothScroll();
    
    // アクティブセクションの検出
    initActiveSection();
    
    // 更新日の設定
    setUpdateDate();
});

/**
 * スムーズスクロールの初期化
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // アンカーリンクの場合のみ処理
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // アクティブ状態の更新
                    updateActiveNavLink(this);
                }
            }
        });
    });
}

/**
 * アクティブセクションの検出とハイライト
 */
function initActiveSection() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    // スクロールイベントのハンドラー
    function handleScroll() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.pageYOffset + headerHeight + 100;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // ナビゲーションリンクのアクティブ状態を更新
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // 初回実行
    handleScroll();
    
    // スクロールイベントリスナー（スロットル処理）
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * アクティブなナビゲーションリンクの更新
 */
function updateActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

/**
 * 更新日の設定
 */
function setUpdateDate() {
    const updateDateElement = document.getElementById('update-date');
    if (updateDateElement) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        updateDateElement.textContent = `${year}年${month}月${day}日`;
    }
}

/**
 * コードブロックのコピーボタン機能（オプション）
 * 必要に応じて有効化
 */
function initCodeCopyButtons() {
    const codeBlocks = document.querySelectorAll('.code-block-container pre code');
    
    codeBlocks.forEach((codeBlock, index) => {
        const container = codeBlock.closest('.code-block-container');
        if (!container) return;
        
        // 既にボタンが存在する場合はスキップ
        if (container.querySelector('.copy-button')) return;
        
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'コピー';
        copyButton.setAttribute('aria-label', 'コードをコピー');
        
        // ボタンのスタイル
        copyButton.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.25rem 0.75rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            font-size: 0.875rem;
            transition: background-color 0.2s;
        `;
        
        copyButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--primary-hover)';
        });
        
        copyButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--primary-color)';
        });
        
        copyButton.addEventListener('click', function() {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                const originalText = copyButton.textContent;
                copyButton.textContent = 'コピーしました！';
                copyButton.style.backgroundColor = 'var(--success-color)';
                
                setTimeout(() => {
                    copyButton.textContent = originalText;
                    copyButton.style.backgroundColor = 'var(--primary-color)';
                }, 2000);
            }).catch(err => {
                console.error('コピーに失敗しました:', err);
                copyButton.textContent = 'エラー';
            });
        });
        
        container.style.position = 'relative';
        container.appendChild(copyButton);
    });
}

// コードコピーボタン機能を有効化する場合は、以下のコメントを外してください
// initCodeCopyButtons();
