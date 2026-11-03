import SkillCard from "./components/SkillCard";

// 先用假数据，第三阶段换成数据库
const employees = [
  { name: "Aina", role: "Data Analyst", skills: ["SQL", "Python", "Power BI"], level: 4, department: "Financial"},
  { name: "Wei Jie", role: "HR Executive", skills: ["Recruitment", "Excel"], level: 3, department: "IT" },
  { name: "Ravi", role: "Developer", skills: ["React", "TypeScript", "Next.js"], level: 5, department: "Sales" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 text-2xl font-bold">团队技能看板</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {employees.map((emp) => (
          <SkillCard key={emp.name} {...emp} />
        ))}
      </div>
    </main>
  );
}