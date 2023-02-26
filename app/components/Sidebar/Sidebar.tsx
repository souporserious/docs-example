import allDocs from "mdxts/docs"
import { SidebarLink } from "./SidebarLink"

export function Sidebar() {
  return (
    <aside
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "6rem 2rem 2rem",
        gap: "2.5rem",
      }}
    >
      {renderNavigation(allDocs[0].children)}
    </aside>
  )
}

function renderNavigation(data: any, order: number = 0) {
  return (
    <ul
      style={{
        paddingLeft: order * 0.5 + "rem",
        listStyle: "none",
      }}
    >
      {data.map((item: any) => {
        return (
          <li key={item.pathname} style={{ color: item.code ? "white" : "grey" }}>
            {item.code ? (
              <SidebarLink {...item} />
            ) : (
              <div
                style={{
                  fontWeight: 600,
                  padding: "0.25rem 0",
                  cursor: "default",
                }}
              >
                {item.name}
              </div>
            )}
            {item.children && renderNavigation(item.children, order + 1)}
          </li>
        )
      })}
    </ul>
  )
}
