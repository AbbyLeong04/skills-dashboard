// 用 type 定义这个组件接收什么数据（props）
type SkillCardProps = {
  name: string;
  role: string;
  skills: string[];
  level: number; // 1 到 5
};

// 组件就是一个返回界面的函数
export default function SkillCard({ name, role, skills, level }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 p-5 shadow-sm">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="mt-3 text-sm">技能等级：{"★".repeat(level)}</p>
    </div>
  );
}