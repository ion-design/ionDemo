// Generated with Ion on 10/3/2023, 1:50:16 PM
// Figma Link: https://www.figma.com/file/TmB3i6PnkwYzw8PxKFsRwC?node-id=62:312

type MusicHeaderProps = {
	signedin?: boolean;
};

function MusicHeader({ signedin = true }: MusicHeaderProps) {
	return (
		<div className="flex h-fit w-full items-center gap-6 px-5 py-2 font-Inter text-xs leading-[15px] text-black">
			<div className="font-semibold">Music</div>
			<div>File</div>
			<div>Edit</div>
			<div>View</div>
			{signedin && <div>Account</div>}
		</div>
	);
}
export default MusicHeader;
