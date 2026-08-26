/**
 * Creates a filter + pagination + search system for the products page.
 *
 * @param {Array}       productsData        - Full list of products from store.js
 * @param {HTMLElement} cardController      - The container that holds product cards
 * @param {Function}    renderItem          - Callback that receives each product item
 * @param {HTMLElement} paginationContainer - The container that holds pagination buttons
 * @param {HTMLElement} searchInput         - The search input element
 * @param {number}      [itemsPerPage=6]    - How many cards to show per page
 * @returns {{ init: Function, reset: Function }}
 */

const ProductFilterPagination = ({
  productsData,
  cardController,
  renderItem,
  paginationContainer,
  searchInput,
  itemsPerPage = 6,
}) => {
  // ─── State ────────────────────────────────────────────────────────────────
  let state = {
    activeCategories: [],
    activeBrands: [],
    searchQuery: "",
    currentPage: 1,
  };

  // ─── Filter Logic ─────────────────────────────────────────────────────────
  const getFilteredProducts = () => {
    return productsData.filter((product) => {
      const categoryMatch =
        state.activeCategories.length === 0 ||
        product.category.some((cat) => state.activeCategories.includes(cat));

      const brandMatch =
        state.activeBrands.length === 0 ||
        (product.brand && state.activeBrands.includes(product.brand));

      const searchMatch =
        state.searchQuery === "" ||
        product.title.includes(state.searchQuery) ||
        product.description.includes(state.searchQuery);

      return categoryMatch && brandMatch && searchMatch;
    });
  };

  // ─── Pagination Logic ─────────────────────────────────────────────────────
  const getPaginatedProducts = (filteredList) => {
    const start = (state.currentPage - 1) * itemsPerPage;
    return filteredList.slice(start, start + itemsPerPage);
  };

  // ─── Render Cards ─────────────────────────────────────────────────────────
  const renderCards = () => {
    cardController.innerHTML = "";

    const filtered = getFilteredProducts();
    const paginated = getPaginatedProducts(filtered);

    if (paginated.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "no-products-message";
      emptyMessage.textContent = "محصولی یافت نشد";
      cardController.appendChild(emptyMessage);
      renderItem([], paginated.length);
    } else {
      paginated.forEach((item) => {
        renderItem(item, paginated.length);
      });
    }

    renderPagination(filtered.length);
  };

  // ─── Render Pagination ────────────────────────────────────────────────────
  const renderPagination = (totalItems) => {
    paginationContainer.innerHTML = "";

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = "pagination-btn";

      if (i === state.currentPage) {
        btn.classList.add("pagination-btn--active");
      }

      btn.addEventListener("click", () => {
        state.currentPage = i;
        renderCards();
      });

      paginationContainer.appendChild(btn);
    }
  };

  // ─── Connect Filters ──────────────────────────────────────────────────────
  const connectFilters = () => {
    document.querySelectorAll("input[name='category']").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        state.activeCategories = [
          ...document.querySelectorAll("input[name='category']:checked"),
        ].map((el) =>
          el.closest(".filter-item").querySelector("span").textContent.trim(),
        );
        state.currentPage = 1;
        renderCards();
      });
    });

    document.querySelectorAll("input[name='brand']").forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        state.activeBrands = [
          ...document.querySelectorAll("input[name='brand']:checked"),
        ].map((el) =>
          el.closest(".filter-item").querySelector("span").textContent.trim(),
        );
        state.currentPage = 1;
        renderCards();
      });
    });
  };

  // ─── Connect Search ───────────────────────────────────────────────────────
  const connectSearch = () => {
    if (!searchInput) return;
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim();
      state.currentPage = 1;
      renderCards();
    });
  };

  // ─── Reset ────────────────────────────────────────────────────────────────
  const reset = () => {
    state = {
      activeCategories: [],
      activeBrands: [],
      searchQuery: "",
      currentPage: 1,
    };
    document
      .querySelectorAll("input[name='category'], input[name='brand']")
      .forEach((el) => (el.checked = false));
    if (searchInput) searchInput.value = "";
    renderCards();
  };

  // ─── Init ─────────────────────────────────────────────────────────────────
  const init = () => {
    renderCards();
    connectFilters();
    connectSearch();
  };

  return { init, reset };
};
