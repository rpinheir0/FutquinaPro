/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Users,
  Trophy,
  Play,
  Plus,
  Trash2,
  Shuffle,
  Settings,
  Pause,
  RotateCcw,
  Square,
  CheckCircle2,
  Sun,
  SunMedium,
  Moon,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Timer,
  Clock,
  ClipboardPaste,
  Pencil,
  PenLine,
  Check,
  User,
  UserCheck,
  UserPlus,
  UserX,
  Medal,
  LayoutGrid,
  Activity,
  Zap,
  Info,
  AlertTriangle,
  RefreshCw,
  Database,
  Wifi,
  DollarSign,
  Camera,
  Printer,
  PieChart,
  Minus,
  X,
  AlertCircle,
  Menu,
  Heart,
  CircleDot,
  Footprints,
  UserCog,
  Swords,
  Wallet,
  ArrowLeftRight,
  ArrowLeft,
  ArrowRight,
  MoveRight,
  Home,
  MoreVertical,
  Eye,
  Award,
  LogOut,
  Contact,
  Rocket,
  Globe,
  Star,
  Palette,
  Power,
  Shirt,
  LayoutPanelLeft,
  ArrowUp,
  ArrowDown,
  LayoutList,
  History,
  Crown,
  MousePointerClick,
  Calendar,
  Download,
  Upload,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import {
  FcHighPriority,
  FcRules,
  FcGrid,
  FcMoneyTransfer,
} from "react-icons/fc";
import {
  IoPersonOutline,
  IoFootballOutline,
  IoCheckmarkCircle,
  IoInformationCircleOutline,
  IoCheckmarkCircleOutline,
  IoPeopleCircleOutline,
  IoLogoWhatsapp,
  IoPersonCircleSharp,
} from "react-icons/io5";
import {
  BsArrowUpRightCircle,
  BsClockHistory,
  BsPersonFillAdd,
  BsChevronDoubleUp,
} from "react-icons/bs";
import {
  IoIosTrophy,
  IoIosWallet,
  IoIosFootball,
  IoMdSwap,
  IoMdArrowUp,
  IoMdArrowDown,
  IoMdDoneAll,
  IoIosMenu,
  IoIosSave,
  IoIosPersonAdd,
} from "react-icons/io";
import {
  PiUserCirclePlusThin,
  PiUserCirclePlusLight,
  PiUserCirclePlus,
} from "react-icons/pi";
import {
  MdOutlinePlayForWork,
  MdDonutLarge,
  MdDataSaverOff,
  MdDeleteSweep,
} from "react-icons/md";
import { CiSaveUp1, CiMemoPad, CiImport, CiStopwatch } from "react-icons/ci";
import { TiMap } from "react-icons/ti";
import {
  GiLaurelCrown,
  GiGloves,
  GiGoalKeeper,
  GiSoccerKick,
  GiKing,
  GiSoccerField,
  GiTrophy,
  GiPodiumWinner,
  GiRunningShoe,
  GiLaurelsTrophy,
  GiSocks,
  GiAbstract042,
  GiSoccerBall,
  GiCrown,
  GiWhistle,
  GiSportMedal,
  GiQueenCrown,
  GiCrossShield,
  GiDragonShield,
  GiEdgedShield,
  GiRank3,
  GiBoltShield,
  GiBorderedShield,
  GiCrownedSkull,
  GiCycle,
  GiCancel,
  GiPlayerNext,
  GiCornerFlag,
  GiHolosphere,
  GiCloudDownload,
  GiFoldedPaper,
} from "react-icons/gi";
import {
  PiUsersBold,
  PiUsers,
  PiSwordBold,
  PiSword,
  PiShieldFill,
  PiTrophyBold,
  PiTrophy,
  PiWalletBold,
  PiWallet,
  PiPlayBold,
  PiPlay,
  PiPauseBold,
  PiPause,
  PiPlusBold,
  PiPlus,
  PiClockCounterClockwiseBold,
  PiClockCounterClockwise,
  PiGearBold,
  PiGear,
  PiXBold,
  PiX,
  PiListBold,
  PiCheckCircleBold,
  PiCheckCircle,
  PiRankingThin,
  PiWarningCircleBold,
  PiWarningCircle,
  PiCalendarBlankBold,
  PiCalendarBlank,
  PiHouseBold,
  PiHouse,
  PiMagnifyingGlassBold,
  PiMagnifyingGlass,
  PiFunnelBold,
  PiFunnel,
  PiArrowClockwiseBold,
  PiArrowClockwise,
  PiChartPieBold,
  PiChartPie,
  PiUserPlusBold,
  PiUserPlus,
  PiRocketBold,
  PiRocket,
  PiArrowLeftBold,
  PiArrowLeft,
  PiArrowRightBold,
  PiArrowRight,
  PiCaretDownBold,
  PiCaretDown,
  PiCaretRightBold,
  PiCaretRight,
  PiPencilSimpleBold,
  PiPencilSimple,
  PiTrashBold,
  PiTrash,
  PiCheckBold,
  PiCheck,
  PiHandPointingBold,
  PiLockFill,
  PiShieldCheckFill,
  PiPaletteBold,
  PiClockBold,
  PiClockFill,
  PiShuffleAngularBold,
  PiCalendarBlankFill,
  PiWarningCircleFill,
  PiCheckCircleFill,
  PiMapPinFill,
} from "react-icons/pi";
import { FaSquareWebAwesomeStroke, FaServer } from "react-icons/fa6";
import { FiUploadCloud } from "react-icons/fi";
import { TbEdit, TbTrash, TbPencil } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { supabase } from "./lib/supabase";
import { sounds } from "./lib/sounds";

// --- Supabase Hooks ---
function useSupabaseArraySync<T extends { id: string }>(
  tableName: string,
  groupId: string,
  items: T[],
  mapToDb: (item: T, groupId: string) => any,
  isDataLoaded: boolean,
  isReadOnly: boolean = false,
  isEnabled: boolean = true,
  syncKey: string = "",
) {
  const syncedIds = React.useRef<Set<string>>(new Set());
  const prevEnabled = React.useRef(isEnabled);
  const prevSyncKey = React.useRef(syncKey);

  const mapToDbRef = React.useRef(mapToDb);
  React.useEffect(() => {
    mapToDbRef.current = mapToDb;
  }, [mapToDb]);

  React.useEffect(() => {
    if (syncKey !== prevSyncKey.current) {
      syncedIds.current = new Set(items.map((i) => i.id));
      prevSyncKey.current = syncKey;
    }
  }, [syncKey, items]);

  React.useEffect(() => {
    if (!isDataLoaded || !isEnabled) {
      if (!isDataLoaded) {
        syncedIds.current = new Set(items.map((i) => i.id));
      }
      prevEnabled.current = isEnabled;
      return;
    }

    // If we just enabled, we should probably force a sync of everything to be sure
    const forceSync = isEnabled && !prevEnabled.current;
    prevEnabled.current = isEnabled;

    if (isReadOnly) return;

    const currentIds = new Set(items.map((i) => i.id));
    const deletedIds = forceSync
      ? []
      : [...syncedIds.current].filter((id) => !currentIds.has(id));

    if (deletedIds.length > 0) {
      supabase.from(tableName).delete().in("id", deletedIds).then();
    }

    if (items.length > 0) {
      const payload = items.map((item) => mapToDbRef.current(item, groupId));
      supabase.from(tableName).upsert(payload, { onConflict: "id" }).then();
    }

    syncedIds.current = currentIds;
  }, [items, isDataLoaded, groupId, tableName, isReadOnly, isEnabled]);
}

import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

// --- Types ---

interface Player {
  id: string;
  name: string;
  goals: number;
  assists: number;
  isAvailable?: boolean;
  photo?: string;
  arrivedAt?: number;
  absences?: number;
  stars?: number;
  isGoalkeeper?: boolean;
  matchesPlayed?: number;
  addedVia?: "whatsapp" | "manual" | "contact";
}

interface Team {
  id: string;
  name: string;
  playerIds: string[];
  iconIdx: number;
  color: string;
  lastMatchStatus?: "Vencedor" | "Empate" | "Derrota" | "Subiu";
}

interface PenaltyShot {
  playerId: string;
  success: boolean | null;
}

interface MatchResult {
  id: string;
  teamAName: string;
  teamBName: string;
  teamAColor: string;
  teamBColor: string;
  teamAId: string;
  teamBId: string;
  teamAPlayerIds: string[];
  teamBPlayerIds: string[];
  teamAIndex: number;
  teamBIndex: number;
  scoreA: number;
  scoreB: number;
  winnerIndex: number;
  loserIndex: number;
  winnerId: string | null;
  loserId: string | null;
  events: MatchEvent[];
  timestamp: number;
  tieBreakerWinnerId: string | null;
  duration: number;
}

interface TieBreakerState {
  showSelection: boolean;
  type: "penalties" | "lottery" | "none";
  penalties: {
    teamA: PenaltyShot[];
    teamB: PenaltyShot[];
    isFinished: boolean;
    winnerId: string | null;
  };
  lottery: {
    isSpinning: boolean;
    winnerId: string | null;
  };
}

const CamisaAmarela = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Amarelo.png"
    alt="Camisa Amarela"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const CamisaAzulClaro = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Azul claro.png"
    alt="Camisa Azul Claro"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const CamisaAzul = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Azul.png"
    alt="Camisa Azul"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const CamisaBranca = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Branca.png"
    alt="Camisa Branca"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const CamisaLaranja = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Laranja.png"
    alt="Camisa Laranja"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const CamisaPreta = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Preta.png"
    alt="Camisa Preta"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const CamisaRoxa = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Roxo.png"
    alt="Camisa Roxa"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const CamisaVerde = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Verde.png"
    alt="Camisa Verde"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const CamisaVermelha = ({
  size = 24,
  className = "",
  ...props
}: {
  size?: number;
  className?: string;
  [key: string]: any;
}) => (
  <img
    src="/Vermelho.png"
    alt="Camisa Vermelha"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    referrerPolicy="no-referrer"
    {...props}
  />
);

const TEAM_ICONS = [
  CamisaAmarela,
  CamisaAzulClaro,
  CamisaAzul,
  CamisaBranca,
  CamisaLaranja,
  CamisaPreta,
  CamisaRoxa,
  CamisaVerde,
  CamisaVermelha,
];
const TEAM_COLORS = [
  "#2563EB",
  "#DC2626",
  "#16A34A",
  "#EA580C",
  "#CA8A04",
  "#0D9488",
  "#65A30D",
  "#0284C7",
  "#059669",
  "#D97706",
  "#475569",
  "#ffffff",
  "#000000",
];

const SHIRT_COLORS = [
  "#EAB308", // 0: Yellow (CamisaAmarela)
  "#38BDF8", // 1: Light blue (CamisaAzulClaro)
  "#2563EB", // 2: Blue (CamisaAzul)
  "#ffffff", // 3: White (CamisaBranca)
  "#F97316", // 4: Orange (CamisaLaranja)
  "#000000", // 5: Black (CamisaPreta)
  "#8B5CF6", // 6: Purple (CamisaRoxa)
  "#16A34A", // 7: Green (CamisaVerde)
  "#DC2626", // 8: Red (CamisaVermelha)
];

const TypewriterText = ({
  text,
  className,
  ...props
}: {
  text: string;
  className?: string;
  [key: string]: any;
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let timeout: any;
    let i = 0;
    const type = () => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
        timeout = setTimeout(type, 30);
      }
    };
    timeout = setTimeout(type, 150);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={className} {...props}>
      {displayText}
    </span>
  );
};

const TutorialCarousel = () => {
  const [index, setIndex] = useState(0);

  // Imagens carregadas via URLs públicas (imgur) para não quebrar o build
  const items = [
    { image: "https://i.imgur.com/e1fa5xq.png", alt: "Tudo do Seu Jeito" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 shadow-[0_0_50px_-12px_rgba(57,255,20,0.15)] group">
      {/* High-tech border glow overlay */}
      <div className="absolute inset-0 rounded-xl border-[1px] border-black/5 dark:border-white/5 z-20 pointer-events-none" />
      <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] z-10 pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50, filter: "blur(5px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -50, filter: "blur(5px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen"
        >
          <img
            src={items[index].image}
            alt={items[index].alt}
            className="w-full h-full object-cover rounded-xl opacity-90 contrast-125 saturate-150"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://placehold.co/600x400/1a1a1a/ffffff?text=${items[index].alt.replace(/ /g, "+")}\n(Faça+upload+da+imagem)`;
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Inner tech scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10 opacity-30"></div>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-3 z-20">
        {items.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-700 ease-out flex items-center justify-center ${
              i === index ? "w-8" : "w-2"
            } h-1 rounded-full overflow-hidden bg-black/50 dark:bg-white/50 dark:bg-black/20 dark:bg-white/20 backdrop-blur-sm`}
          >
            {i === index && (
              <motion.div
                layoutId="activeSlideIndicator"
                className="w-full h-full bg-[#E3D39E] shadow-[0_0_10px_rgba(227,211,158,0.8)]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const getNextTeamColor = (existingTeams: Team[]) => {
  const usedColors = existingTeams.map((t) => t.color).filter(Boolean);
  const availableColors = TEAM_COLORS.filter((c) => !usedColors.includes(c));

  if (availableColors.length > 0) {
    // Pick random available color
    return availableColors[Math.floor(Math.random() * availableColors.length)];
  }

  // If no colors are available, pick randomly from all
  return TEAM_COLORS[Math.floor(Math.random() * TEAM_COLORS.length)];
};

const getNextTeamIconIdx = (existingTeams: Team[]) => {
  const usedIcons = existingTeams
    .map((t) => t.iconIdx)
    .filter((idx) => idx !== undefined);
  const availableIndices = TEAM_ICONS.map((_, i) => i).filter(
    (i) => !usedIcons.includes(i),
  );

  if (availableIndices.length > 0) {
    return availableIndices[
      Math.floor(Math.random() * availableIndices.length)
    ];
  }
  return Math.floor(Math.random() * TEAM_ICONS.length);
};

const FlipDigit = ({
  value,
  size = "normal",
  clockId = "",
  digitId = "",
}: {
  value: string;
  size?: "normal" | "small" | "xs";
  clockId?: string;
  digitId?: string;
}) => {
  const theme = "light";
  const dimensions = {
    normal: "w-10 h-14",
    small: "w-7 h-10",
    xs: "w-5 h-7",
  };

  const textSizes = {
    normal: "text-3xl",
    small: "text-xl",
    xs: "text-sm",
  };

  return (
    <div
      className={`relative ${dimensions[size]} flex items-center justify-center overflow-hidden`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={`flip-${clockId}-${digitId}-${value}`}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className={`${textSizes[size]} font-black text-zinc-900 dark:text-white/90`}
        >
          {value}
        </motion.span>
      </AnimatePresence>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/5 via-transparent to-black/5" />
    </div>
  );
};

const FlipClock = ({
  time,
  size = "normal",
  clockId = "default",
}: {
  time: number;
  size?: "normal" | "small" | "xs";
  clockId?: string;
}) => {
  const theme = "light";
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <div
      className={`flex items-center ${size === "xs" ? "gap-1.5 p-1 px-3" : "gap-1 p-1.5"} rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 backdrop-blur-md shadow-sm`}
    >
      <div className={`flex ${size === "xs" ? "gap-1.5" : "gap-0.5"}`}>
        <FlipDigit
          value={minutes[0]}
          size={size}
          clockId={clockId}
          digitId="min0"
        />
        <FlipDigit
          value={minutes[1]}
          size={size}
          clockId={clockId}
          digitId="min1"
        />
      </div>
      <span
        className={`${size === "xs" ? "text-sm" : size === "small" ? "text-lg" : "text-2xl"} font-black text-black/40 dark:text-white/40 mx-0.5`}
      >
        :
      </span>
      <div className={`flex ${size === "xs" ? "gap-1.5" : "gap-0.5"}`}>
        <FlipDigit
          value={seconds[0]}
          size={size}
          clockId={clockId}
          digitId="sec0"
        />
        <FlipDigit
          value={seconds[1]}
          size={size}
          clockId={clockId}
          digitId="sec1"
        />
      </div>
    </div>
  );
};

const ColorPickerModal = ({
  isOpen,
  onClose,
  onSelect,
  currentColor,
  teamName,
  isFixed,
  onToggleFixed,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (color: string) => void;
  currentColor: string;
  teamName: string;
  isFixed: boolean;
  onToggleFixed: (enabled: boolean) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white w-full max-w-sm rounded-xl p-6 overflow-hidden border border-black/10"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-900">
              COR DA CAMISA
            </h3>
            <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
              {teamName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
          >
            <X size={20} className="text-zinc-500 dark:text-zinc-500" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {TEAM_ICONS.map((Icon, idx) => {
            const isSelected = SHIRT_COLORS[idx] === currentColor;
            return (
              <button
                key={`shirt-choice-${idx}`}
                onClick={() => onSelect(SHIRT_COLORS[idx])}
                className={`aspect-square rounded-2xl border transition-all relative flex flex-col items-center justify-center p-2 bg-zinc-50 ${
                  isSelected
                    ? "border-brand-primary ring-2 ring-brand-primary shadow-md scale-105 bg-white"
                    : "border-zinc-200/60 hover:border-zinc-400 hover:scale-105 hover:bg-white"
                }`}
              >
                <div className="w-14 h-14 flex items-center justify-center">
                  <Icon size={48} />
                </div>
                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-brand-primary rounded-full flex items-center justify-center shadow-sm">
                    <Check
                      size={10}
                      className="text-zinc-900 dark:text-white font-bold"
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="p-4 bg-zinc-50 rounded-xl border border-black/5 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider mb-0.5">
                MANTER COR FIXA?
              </span>
              <p className="text-[9px] text-zinc-500 dark:text-zinc-500 font-medium leading-relaxed">
                A cor será mantida para esta posição nos próximos jogos.
              </p>
            </div>
            <button
              onClick={() => onToggleFixed(!isFixed)}
              className={`w-12 h-6 rounded-full p-1 transition-colors relative ${isFixed ? "bg-brand-primary" : "bg-zinc-300"}`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform ${isFixed ? "translate-x-6" : "translate-x-0"} shadow-sm`}
              />
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-4 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg hover:opacity-90 active:scale-95 transition-all"
        >
          CONFIRMAR
        </button>
      </motion.div>
    </div>
  );
};

const AssistModal = ({
  isOpen,
  onSelect,
  teamPlayers,
  goalPlayerId,
  players,
}: {
  isOpen: boolean;
  onSelect: (id: string | null) => void;
  teamPlayers: string[];
  goalPlayerId: string;
  players: any[];
}) => {
  const theme = "light";
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className={`w-full max-w-sm rounded-xl overflow-hidden border ${
          theme === "light"
            ? "bg-zinc-50 border-zinc-200"
            : "bg-brand-card border-black/10 dark:border-white/10"
        }`}
      >
        <div className="bg-brand-primary p-8 text-center relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-xl -mr-16 -mt-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-xl -ml-16 -mb-16 blur-3xl" />
          </div>

          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-16 h-16 bg-black/50 dark:bg-white/50 dark:bg-black/20 dark:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-4 border border-black/20 dark:border-white/20 shadow-lg"
          >
            <span className="text-black">
              <GiTrophy size={32} />
            </span>
          </motion.div>
          <h3 className="text-xl font-black uppercase tracking-tighter text-black leading-tight">
            Quem deu a assistência?
          </h3>
          <p className="text-[10px] text-black/60 font-medium mt-1 uppercase tracking-[0.2em] max-w-[200px] mx-auto leading-relaxed">
            Selecione o craque que serviu o{" "}
            <span className="text-zinc-500 dark:text-zinc-500">garçom</span> no
            gol
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 gap-2.5 max-h-[320px] overflow-y-auto pr-1 custom-scrollbar mb-6">
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => onSelect(null)}
              className="w-full p-4 rounded-xl border-2 border-dashed transition-all text-center flex items-center justify-center gap-2 bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 group"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-200 transition-colors">
                <PiXBold size={16} />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-600">
                Sem Assistência
              </span>
            </motion.button>

            {teamPlayers
              .filter((id) => id !== goalPlayerId)
              .map((pid, idx) => {
                const player = players.find((p) => p.id === pid);
                return (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    key={`assist-choice-${pid}-${idx}`}
                    onClick={() => onSelect(pid)}
                    className="w-full p-3.5 rounded-xl border border-zinc-200 transition-all text-left flex items-center gap-4 bg-white hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 group relative overflow-hidden"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden border border-zinc-100 bg-zinc-50 shrink-0 group-hover:border-brand-primary/20 transition-colors shadow-inner">
                      {player?.photo ? (
                        <img
                          src={player.photo}
                          alt={player.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100">
                          <span className="text-zinc-600 dark:text-zinc-400">
                            <IoPersonOutline size={20} />
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-black uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-0.5">
                        Garçom
                      </div>
                      <div className="text-sm font-black uppercase truncate text-zinc-800 transition-colors group-hover:text-brand-primary leading-none">
                        {player?.name}
                      </div>
                      <div className="flex gap-0.5 mt-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={`star-assist-${player?.id}-${star}`}
                            size={8}
                            className={`${(player?.stars || 3) >= star ? "fill-yellow-400 text-yellow-400" : "text-zinc-700 dark:text-zinc-300"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-zinc-100 flex items-center justify-center bg-zinc-50 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20 text-zinc-700 dark:text-zinc-300 group-hover:text-brand-primary transition-all">
                      <PiArrowRightBold size={14} />
                    </div>
                  </motion.button>
                );
              })}
          </div>

          <button
            onClick={() => onSelect(null)}
            className="w-full py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:bg-zinc-100 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-600"
          >
            Fecar Janela
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ScorerModal = ({
  isOpen,
  onSelect,
  teamPlayers,
  players,
  teamName,
}: {
  isOpen: boolean;
  onSelect: (id: string) => void;
  teamPlayers: string[];
  players: any[];
  teamName: string;
}) => {
  const theme = "light";
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 dark:bg-[#060814]/85 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`w-full max-w-md rounded-xl p-8 border ${
          theme === "light"
            ? "bg-zinc-100 border-zinc-200"
            : "bg-brand-card border-black/10 dark:border-white/10"
        }`}
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Medal className="text-brand-primary" size={32} />
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight text-zinc-900">
            Quem marcou o gol?
          </h3>
          <p className="text-zinc-500 dark:text-zinc-500 text-sm mt-2 font-bold uppercase tracking-widest">
            Selecione o jogador do {teamName}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {teamPlayers.map((pid, idx) => (
            <button
              key={`scorer-choice-${pid}-${idx}`}
              onClick={() => onSelect(pid)}
              className={`p-4 rounded-lg border transition-all text-left group ${
                theme === "light"
                  ? "bg-white border-zinc-200 hover:border-brand-primary/50 hover:bg-brand-primary/5"
                  : "bg-black/50 dark:bg-white/50 dark:bg-black/20 border-black/5 dark:border-white/5 hover:border-brand-primary/50 hover:bg-brand-primary/5"
              }`}
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-1 opacity-60">
                Jogador
              </div>
              <div
                className={`text-sm font-black uppercase transition-colors text-zinc-900 group-hover:text-brand-primary leading-none`}
              >
                {players.find((p) => p.id === pid)?.name}
              </div>
              <div className="flex gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={`star-scorer-${pid}-${star}`}
                    size={8}
                    className={`${(players.find((p) => p.id === pid)?.stars || 3) >= star ? "fill-yellow-400 text-yellow-400" : "text-zinc-700 dark:text-zinc-300"}`}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const TieBreakerModal = ({
  state,
  onTypeSelect,
  onPenaltyToggle,
  onLotterySpin,
  onConfirm,
  onBothLeave,
  teamA,
  teamB,
  players,
  colorA,
  colorB,
  queueCount = 0,
  fixedColors,
}: {
  state: TieBreakerState;
  onTypeSelect: (type: "penalties" | "lottery" | "none") => void;
  onPenaltyToggle: (team: "A" | "B", index: number) => void;
  onLotterySpin: () => void;
  onConfirm: () => void;
  onBothLeave: (firstToQueue: "A" | "B") => void;
  teamA: Team | undefined;
  teamB: Team | undefined;
  players: Player[];
  colorA?: string;
  colorB?: string;
  queueCount?: number;
  fixedColors?: {
    teamA: string | null;
    teamB: string | null;
    enabled: boolean;
  };
}) => {
  const [showQueueOrder, setShowQueueOrder] = useState(false);

  if (!state.showSelection || !teamA || !teamB) return null;

  const getTeamIcon = (team: Team | undefined, position: "A" | "B") => {
    if (fixedColors?.enabled) {
      const fixedColor =
        position === "A" ? fixedColors.teamA : fixedColors.teamB;
      if (fixedColor) {
        const idx = SHIRT_COLORS.indexOf(fixedColor);
        if (idx !== -1) return TEAM_ICONS[idx];
      }
    }
    if (!team) return TEAM_ICONS[position === "A" ? 0 : 1];
    return TEAM_ICONS[team.iconIdx ?? (position === "A" ? 0 : 1)];
  };

  const resolvedColorA = colorA || teamA.color || TEAM_COLORS[0];
  const resolvedColorB = colorB || teamB.color || TEAM_COLORS[1];

  const teamAGoals = state.penalties.teamA.filter(
    (p) => p.success === true,
  ).length;
  const teamBGoals = state.penalties.teamB.filter(
    (p) => p.success === true,
  ).length;

  const isPenaltiesOngoing = state.type === "penalties";
  const isLotteryOngoing = state.type === "lottery";

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-xl">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-full max-w-md h-auto max-h-[90vh] flex flex-col bg-white dark:bg-[#0b1329]/95 rounded-[24px] overflow-hidden border border-black/10 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative text-zinc-900 dark:text-white"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -ml-32 -mb-32" />

        {/* Compact Header Card with App Theme */}
        <div className="p-3 sm:p-4 mx-4 sm:mx-6 mt-4 mb-3 bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#2ea625] rounded-2xl border border-emerald-500/30 shadow-md relative text-white flex flex-col items-center gap-1.5 z-10 shrink-0">
          {state.type !== "none" && (
            <button
              onClick={() => onTypeSelect("none")}
              className="absolute left-3 top-3 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all active:scale-90"
            >
              <ArrowLeft size={16} />
            </button>
          )}

          <div className="flex flex-col gap-0.5 items-center">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
              Desempate
            </span>
            {state.type === "penalties" && (
              <span className="text-emerald-100/90 text-[10px] sm:text-xs font-medium">
                Disputa de pênaltis
              </span>
            )}
          </div>

          {state.type === "none" && !showQueueOrder && (
            <div className="flex items-center justify-center gap-6 sm:gap-8 w-full pt-1">
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center drop-shadow-md"
                  style={{ color: resolvedColorA }}
                >
                  {(() => {
                    const IconA = getTeamIcon(teamA, "A");
                    return <IconA size={36} />;
                  })()}
                </div>
              </div>

              <span className="text-white/40 font-black text-sm sm:text-base tracking-widest">
                VS
              </span>

              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center drop-shadow-md"
                  style={{ color: resolvedColorB }}
                >
                  {(() => {
                    const IconB = getTeamIcon(teamB, "B");
                    return <IconB size={36} />;
                  })()}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 pt-0 relative z-10 custom-scrollbar">
          {state.type === "none" && !showQueueOrder && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                {queueCount >= 2 && (
                  <button
                    onClick={() => setShowQueueOrder(true)}
                    className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 transform active:scale-95 text-left shadow-md"
                  >
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <img
                        src="/deixa partida.png"
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 object-contain"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[11px] text-zinc-900 dark:text-white group-hover:text-red-300 transition-colors">
                        Os dois times deixam a partida
                      </span>
                      <span className="text-[10px] text-black/60 dark:text-white/50 font-medium tracking-tight mt-0.5">
                        Ambos vão para o final da fila
                      </span>
                    </div>
                    <ChevronRight
                      size={18}
                      className="ml-auto text-black/30 dark:text-white/30 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all"
                    />
                  </button>
                )}

                <button
                  onClick={() => onTypeSelect("penalties")}
                  className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 transform active:scale-95 text-left shadow-md"
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <img
                      src="/penalti.png"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 object-contain"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[11px] text-zinc-900 dark:text-white group-hover:text-emerald-300 transition-colors">
                      Disputa de pênaltis
                    </span>
                    <span className="text-[10px] text-black/60 dark:text-white/50 font-medium tracking-tight mt-0.5">
                      Marcar acertos e erros
                    </span>
                  </div>
                  <ChevronRight
                    size={18}
                    className="ml-auto text-black/30 dark:text-white/30 group-hover:text-[#59b823] group-hover:translate-x-0.5 transition-all"
                  />
                </button>

                <button
                  onClick={() => onTypeSelect("lottery")}
                  className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 transform active:scale-95 text-left shadow-md"
                >
                  <div className="w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <img
                      src="/roleta.png"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 object-contain"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[11px] text-zinc-900 dark:text-white group-hover:text-blue-300 transition-colors">
                      Sorteio aleatório
                    </span>
                    <span className="text-[10px] text-black/60 dark:text-white/50 font-medium tracking-tight mt-0.5">
                      Roleta da sorte
                    </span>
                  </div>
                  <ChevronRight
                    size={18}
                    className="ml-auto text-black/30 dark:text-white/30 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all"
                  />
                </button>

                <div className="pt-6">
                  <button
                    onClick={() => onConfirm()}
                    className="w-full p-4 mt-4 rounded-2xl bg-gradient-to-br from-[#75c628]/20 to-white dark:from-[#25660e]/40 dark:to-[#111625]/90 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 font-bold uppercase text-[10px] transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-3 group shadow-sm backdrop-blur-xl"
                  >
                    <span>Manter o resultado atual</span>
                    <ChevronRight
                      size={14}
                      className="text-black/30 dark:text-white/30 group-hover:translate-x-1 transition-transform group-hover:text-zinc-900 dark:text-white"
                    />
                  </button>
                </div>
              </div>
            </div>
          )}

          {state.type === "none" && showQueueOrder && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-xs text-black/70 dark:text-white/60 font-bold uppercase mt-1">
                  Quem entra primeiro na fila?
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => onBothLeave("A")}
                  className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 transform active:scale-95 text-left shadow-md"
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ color: resolvedColorA }}
                  >
                    {(() => {
                      const IconA = getTeamIcon(teamA, "A");
                      return <IconA size={24} />;
                    })()}
                  </div>
                  <div className="flex flex-col overflow-hidden justify-center">
                    <div className="flex flex-wrap gap-x-1.5">
                      {(teamA.playerIds || []).map((pid, idx) => (
                        <span
                          key={`${pid}-${idx}-2`}
                          className="text-[8px] text-black/60 dark:text-white/50 font-semibold tracking-tight"
                        >
                          {players.find((p) => p.id === pid)?.name}
                          {idx < (teamA.playerIds?.length || 0) - 1 ? " •" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => onBothLeave("B")}
                  className="group w-full flex items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 transform active:scale-95 text-left shadow-md"
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ color: resolvedColorB }}
                  >
                    {(() => {
                      const IconB = getTeamIcon(teamB, "B");
                      return <IconB size={24} />;
                    })()}
                  </div>
                  <div className="flex flex-col overflow-hidden justify-center">
                    <div className="flex flex-wrap gap-x-1.5">
                      {(teamB.playerIds || []).map((pid, idx) => (
                        <span
                          key={`${pid}-${idx}-3`}
                          className="text-[8px] text-black/60 dark:text-white/50 font-semibold tracking-tight"
                        >
                          {players.find((p) => p.id === pid)?.name}
                          {idx < (teamB.playerIds?.length || 0) - 1 ? " •" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setShowQueueOrder(false)}
                  className="w-full p-4 mt-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white font-bold uppercase tracking-widest text-[10px] transition-all hover:bg-black/10 dark:bg-white/10 active:scale-95 text-center shadow-sm"
                >
                  Voltar
                </button>
              </div>
            </div>
          )}

          {isPenaltiesOngoing && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="text-center flex-1 flex flex-col items-center">
                  <div
                    className="w-14 h-14 flex items-center justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] mb-3"
                    style={{ color: teamA.color || TEAM_COLORS[0] }}
                  >
                    {(() => {
                      const IconA = getTeamIcon(teamA, "A");
                      return <IconA size={48} />;
                    })()}
                  </div>
                  <div className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter">
                    {teamAGoals}
                  </div>
                </div>
                <div className="text-black/20 dark:text-white/20 font-black text-2xl tracking-tighter uppercase mx-4">
                  VS
                </div>
                <div className="text-center flex-1 flex flex-col items-center">
                  <div
                    className="w-14 h-14 flex items-center justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] mb-3"
                    style={{ color: teamB.color || TEAM_COLORS[1] }}
                  >
                    {(() => {
                      const IconB = getTeamIcon(teamB, "B");
                      return <IconB size={48} />;
                    })()}
                  </div>
                  <div className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter">
                    {teamBGoals}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {/* Team A Penalties */}
                <div className="space-y-2">
                  {state.penalties.teamA.map((shot, idx) => {
                    const p = players.find(
                      (player) => player.id === shot.playerId,
                    );
                    return (
                      <div
                        key={`pen-a-${idx}`}
                        className="p-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl space-y-1.5 relative overflow-hidden group shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-bold text-zinc-900 dark:text-white truncate uppercase tracking-tight leading-none">
                              {p?.name}
                            </span>
                            <span className="text-[7px] text-black/50 dark:text-white/40 font-bold uppercase tracking-widest mt-0.5">
                              Batedor {idx + 1}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => onPenaltyToggle("A", idx)}
                            className={`flex-1 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${shot.success === true ? "bg-emerald-500/20 text-[#59b823] border border-emerald-500/30 shadow-sm" : "bg-black/5 dark:bg-white/5 text-[#59b823]/20 hover:bg-black/10 dark:bg-white/10"}`}
                          >
                            <PiCheckCircleBold size={14} />
                          </button>
                          <button
                            onClick={() => onPenaltyToggle("A", idx)}
                            className={`flex-1 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${shot.success === false ? "bg-red-500/20 text-red-400 border border-red-500/30 shadow-sm" : "bg-black/5 dark:bg-white/5 text-red-400/20 hover:bg-black/10 dark:bg-white/10"}`}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Team B Penalties */}
                <div className="space-y-2">
                  {state.penalties.teamB.map((shot, idx) => {
                    const p = players.find(
                      (player) => player.id === shot.playerId,
                    );
                    return (
                      <div
                        key={`pen-b-${idx}`}
                        className="p-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl space-y-1.5 relative overflow-hidden group shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex flex-col min-w-0">
                            <span className="text-[10px] font-bold text-zinc-900 dark:text-white truncate uppercase tracking-tight leading-none">
                              {p?.name}
                            </span>
                            <span className="text-[7px] text-black/50 dark:text-white/40 font-bold uppercase tracking-widest mt-0.5">
                              Batedor {idx + 1}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => onPenaltyToggle("B", idx)}
                            className={`flex-1 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${shot.success === true ? "bg-emerald-500/20 text-[#59b823] border border-emerald-500/30 shadow-sm" : "bg-black/5 dark:bg-white/5 text-[#59b823]/20 hover:bg-black/10 dark:bg-white/10"}`}
                          >
                            <PiCheckCircleBold size={14} />
                          </button>
                          <button
                            onClick={() => onPenaltyToggle("B", idx)}
                            className={`flex-1 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${shot.success === false ? "bg-red-500/20 text-red-400 border border-red-500/30 shadow-sm" : "bg-black/5 dark:bg-white/5 text-red-400/20 hover:bg-black/10 dark:bg-white/10"}`}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                disabled={teamAGoals === teamBGoals}
                onClick={() => onConfirm()}
                className="w-full h-12 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-all active:scale-95 disabled:opacity-30 disabled:saturate-50 flex items-center justify-center gap-2"
              >
                {teamAGoals === teamBGoals
                  ? "Placar Empatado"
                  : "Finalizar e Salvar"}
              </button>
            </div>
          )}

          {isLotteryOngoing && (
            <div className="flex flex-col items-center gap-6 py-4">
              <div className="relative">
                <motion.div
                  animate={
                    state.lottery.isSpinning
                      ? {
                          rotate: [0, 3600],
                          transition: {
                            duration: 3,
                            ease: [0.45, 0.05, 0.55, 0.95],
                          },
                        }
                      : {
                          rotate: state.lottery.winnerId
                            ? state.lottery.winnerId === teamA.id
                              ? 0
                              : 180
                            : 0,
                        }
                  }
                  className="w-44 h-44 rounded-full bg-black/5 dark:bg-white/5 border-8 border-emerald-500/20 relative flex items-center justify-center"
                >
                  <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-black/10 dark:bg-white/10 -translate-x-1/2" />

                  {/* Result Indicators */}
                  <div
                    className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 drop-shadow-md flex items-center justify-center"
                    style={{ color: teamA.color || TEAM_COLORS[0] }}
                  >
                    {(() => {
                      const IconA = getTeamIcon(teamA, "A");
                      return <IconA size={24} />;
                    })()}
                  </div>
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rotate-180 drop-shadow-md flex items-center justify-center"
                    style={{ color: teamB.color || TEAM_COLORS[1] }}
                  >
                    {(() => {
                      const IconB = getTeamIcon(teamB, "B");
                      return <IconB size={24} />;
                    })()}
                  </div>

                  {/* Marker */}
                  <div className="w-18 h-18 bg-white dark:bg-[#0b1528] rounded-full border border-black/10 dark:border-white/10 shadow-lg flex items-center justify-center z-10">
                    <div className="w-12 h-12 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center">
                      <SpinningBall size="sm" spin={state.lottery.isSpinning} />
                    </div>
                  </div>
                </motion.div>

                {/* Arrow Pointer */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              </div>

              {!state.lottery.winnerId && !state.lottery.isSpinning && (
                <div className="w-full space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 flex flex-col items-center">
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] mb-2"
                        style={{ color: teamA.color || TEAM_COLORS[0] }}
                      >
                        {(() => {
                          const IconA = getTeamIcon(teamA, "A");
                          return <IconA size={48} />;
                        })()}
                      </div>
                    </div>
                    <div className="text-black/20 dark:text-white/20 font-black text-xl">
                      VS
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] mb-2"
                        style={{ color: teamB.color || TEAM_COLORS[1] }}
                      >
                        {(() => {
                          const IconB = getTeamIcon(teamB, "B");
                          return <IconB size={48} />;
                        })()}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={onLotterySpin}
                    className="w-full h-12 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Girar Roleta
                  </button>
                </div>
              )}

              {state.lottery.winnerId && !state.lottery.isSpinning && (
                <div className="w-full space-y-6 text-center">
                  <div className="animate-in fade-in zoom-in duration-500">
                    <div className="text-[10px] font-bold text-[#59b823] uppercase tracking-[0.2em] mb-4">
                      Vencedor Sorteado
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className="w-20 h-20 flex items-center justify-center drop-shadow-xl"
                        style={{
                          color:
                            (state.lottery.winnerId === teamA.id
                              ? teamA.color
                              : teamB.color) || TEAM_COLORS[0],
                        }}
                      >
                        {(() => {
                          const isTeamA = state.lottery.winnerId === teamA.id;
                          const IconWinner = isTeamA
                            ? getTeamIcon(teamA, "A")
                            : getTeamIcon(teamB, "B");
                          return <IconWinner size={64} />;
                        })()}
                      </div>
                      {/* Display winning team players */}
                      <div className="mt-2 flex flex-wrap justify-center gap-1.5 px-4">
                        {(state.lottery.winnerId === teamA.id
                          ? teamA.playerIds
                          : teamB.playerIds
                        ).map((pid, idx, arr) => {
                          const p = players.find((player) => player.id === pid);
                          return (
                            <span
                              key={`${pid}-${idx}-fifth`}
                              className="text-[8px] font-bold text-black/80 dark:text-white/80 uppercase tracking-widest"
                            >
                              {p?.name}
                              {idx < arr.length - 1 ? " •" : ""}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onConfirm()}
                    className="w-full h-12 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Confirmar Resultado
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const GoalCelebration = ({
  isOpen,
  scorerName,
  teamName,
  scorerPhoto,
}: {
  isOpen: boolean;
  scorerName: string;
  teamName: string;
  scorerPhoto?: string;
}) => {
  const theme = "light";
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 dark:bg-[#060814]/95 backdrop-blur-md overflow-hidden"
    >
      {/* Root Camera Shake/Zoom Container */}
      <motion.div
        animate={{
          scale: [1, 1.02, 0.99, 1],
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative flex flex-col items-center w-full justify-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 12 }}
          className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] uppercase tracking-normal py-2 px-4 mb-6 z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] italic"
        >
          GOL!
        </motion.div>

        {/* Compact & Rounded Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="z-20 bg-zinc-950 border-2 border-black/20 dark:border-white/20 rounded-2xl shadow-2xl overflow-hidden flex items-center p-4 pr-10 w-[95%] sm:w-[500px] max-w-lg gap-6 min-h-[110px]"
        >
          {/* Photo Section - Round Circle */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-zinc-800 rounded-full border-2 border-[#59b823] flex items-center justify-center relative shrink-0 overflow-hidden shadow-lg">
            {scorerPhoto ? (
              <img
                src={scorerPhoto}
                className="w-full h-full object-cover grayscale-[0.1] contrast-125"
                referrerPolicy="no-referrer"
                alt={scorerName}
              />
            ) : (
              <span className="text-zinc-600 flex items-center shrink-0">
                <IoPersonOutline size={40} />
              </span>
            )}

            {/* Dynamic Light Sweep */}
            <motion.div
              animate={{ x: [-150, 150] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-8 bg-black/50 dark:bg-white/50 dark:bg-black/20 dark:bg-white/20 skew-x-[25deg] z-10"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center items-start min-w-0">
            <div className="text-[#59b823] text-[8px] font-black uppercase tracking-[0.3em] mb-1">
              Goleador
            </div>
            <div className="text-xl sm:text-3xl font-black uppercase tracking-tighter text-white mb-0.5 truncate w-full">
              {scorerName}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const PlayerManagementModalComponent = ({
  player,
  isOpen,
  onClose,
  onUpdateName,
  onUpdatePhoto,
  onUpdateStars,
  onRemove,
  matchHistory = [],
}: {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateName: (id: string, name: string) => void;
  onUpdatePhoto: (id: string, photo: string) => void;
  onUpdateStars?: (id: string, stars: number) => void;
  onRemove?: (id: string) => void;
  matchHistory?: MatchResult[];
}) => {
  if (!isOpen || !player) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const resized = await resizeImage(reader.result as string);
        onUpdatePhoto(player.id, resized);
      };
      reader.readAsDataURL(file);
    }
  };

  const realMatchesCount = useMemo(() => {
    if (!player) return 0;
    const countFromHistory = matchHistory.filter(
      (m) =>
        m.teamAPlayerIds?.includes(player.id) ||
        m.teamBPlayerIds?.includes(player.id)
    ).length;
    return Math.max(player.matchesPlayed || 0, countFromHistory);
  }, [player, matchHistory]);

  const realGoals = player?.goals || 0;
  const realAssists = player?.assists || 0;

  const performanceData = useMemo(() => {
    if (!player) return [];
    
    const playerMatches = matchHistory
      .filter(
        (m) =>
          m.teamAPlayerIds?.includes(player.id) ||
          m.teamBPlayerIds?.includes(player.id)
      )
      .sort((a, b) => a.timestamp - b.timestamp);

    if (playerMatches.length > 0) {
      let cumulativeVal = 0;
      return playerMatches.map((m) => {
        const pGoals = m.events.filter(
          (e) => e.type === "goal" && e.playerId === player.id
        ).length;
        const pAssists = m.events.filter(
          (e) => e.type === "goal" && e.assistId === player.id
        ).length;
        
        cumulativeVal += (pGoals + pAssists || 1);
        const d = new Date(m.timestamp);
        const dateStr = `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
        
        return {
          date: dateStr,
          val: cumulativeVal,
        };
      });
    }

    const total = realGoals + realAssists;
    if (total === 0 && realMatchesCount === 0) {
      return [
        { date: "05/04", val: 0 },
        { date: "12/04", val: 0 },
        { date: "19/04", val: 0 },
        { date: "26/04", val: 0 },
        { date: "03/05", val: 0 },
      ];
    }

    return [
      { date: "05/04", val: Math.round(total * 0.2) },
      { date: "12/04", val: Math.round(total * 0.4) },
      { date: "19/04", val: Math.round(total * 0.6) },
      { date: "26/04", val: Math.round(total * 0.8) },
      { date: "03/05", val: total },
    ];
  }, [player, matchHistory, realGoals, realAssists, realMatchesCount]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="w-full max-w-[320px] bg-white dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl rounded-[24px] relative overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3 pb-0">
          <div className="bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#2ea625] pt-5 pb-3.5 px-4 text-center relative overflow-hidden flex flex-col items-center rounded-2xl border border-emerald-500/30 shadow-md text-white">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full -mr-8 -mt-8 blur-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-emerald-500/10 rounded-full -ml-8 -mb-8 blur-lg pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-2.5 right-2.5 p-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white/80 hover:text-white transition-all cursor-pointer z-20"
            >
              <X size={14} />
            </button>

            <div className="relative group mt-0.5">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30 shadow-lg bg-black/20 flex items-center justify-center relative">
                {player.photo ? (
                  <img
                    src={player.photo}
                    alt={player.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-white/70">
                    <IoPersonOutline size={26} />
                  </div>
                )}
              </div>

              <label className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md transition-all active:scale-95 border border-white/30">
                <Camera size={10} />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div className="w-full mt-1.5 relative z-10">
              <div className="text-center w-full">
                <input
                  type="text"
                  defaultValue={player.name}
                  onBlur={(e) => onUpdateName(player.id, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onUpdateName(player.id, e.currentTarget.value);
                      e.currentTarget.blur();
                    }
                  }}
                  className="w-full bg-transparent text-sm font-black uppercase tracking-wider text-white leading-none text-center outline-none transition-all placeholder:text-white/50 py-0.5"
                />
                <div className="flex flex-wrap items-center justify-center gap-0.5 mt-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={`modal-star-${star}`}
                      onClick={() =>
                        onUpdateStars && onUpdateStars(player.id, star)
                      }
                      className="transition-all active:scale-95 p-0.5"
                    >
                      <Star
                        size={12}
                        className={`${(player.stars || 0) >= star ? "fill-yellow-400 text-yellow-400" : "text-white/30"}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3 bg-white dark:bg-transparent">
          {/* Desempenho Chart Card */}
          <div className="w-full p-3 bg-zinc-100/90 dark:bg-[#121c15]/90 rounded-2xl border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white space-y-2 shadow-sm">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-zinc-900 dark:text-white tracking-tight">
                Desempenho
              </span>
              <div className="flex items-center gap-1 text-[9px] font-medium text-zinc-600 dark:text-zinc-300 bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 transition-colors">
                <span>Este mês</span>
                <ChevronDown size={10} />
              </div>
            </div>

            <div className="h-24 w-full pt-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="perfGreenGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2ea625" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#2ea625" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-black/10 dark:text-white/10" vertical={false} />
                  <XAxis dataKey="date" stroke="currentColor" className="text-black/50 dark:text-white/40" fontSize={9} tickLine={false} axisLine={false} />
                  <YAxis stroke="currentColor" className="text-black/50 dark:text-white/40" fontSize={9} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", borderColor: "rgba(255,255,255,0.1)", color: "#ffffff", borderRadius: "8px", fontSize: "10px", padding: "4px 8px" }}
                    itemStyle={{ color: "#75c628" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="val"
                    stroke="#2ea625"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#perfGreenGradient)"
                    dot={{ r: 3, fill: "#2ea625", stroke: "#ffffff", strokeWidth: 1 }}
                    activeDot={{ r: 4, fill: "#2ea625", stroke: "#ffffff", strokeWidth: 1.5 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-1 pt-2 border-t border-black/10 dark:border-white/10 text-center">
              <div>
                <div className="text-sm font-black text-zinc-900 dark:text-white leading-tight">
                  {realMatchesCount}
                </div>
                <div className="text-[9px] font-medium text-zinc-500 dark:text-zinc-400">Jogos</div>
              </div>
              <div>
                <div className="text-sm font-black text-zinc-900 dark:text-white leading-tight">
                  {realGoals}
                </div>
                <div className="text-[9px] font-medium text-zinc-500 dark:text-zinc-400">Gols</div>
              </div>
              <div>
                <div className="text-sm font-black text-zinc-900 dark:text-white leading-tight">
                  {realAssists}
                </div>
                <div className="text-[9px] font-medium text-zinc-500 dark:text-zinc-400">Assistências</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={onClose}
              className="w-full h-8 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
            >
              CONFIRMAR
            </button>

            {onRemove && (
              <button
                onClick={() => {
                  onRemove(player.id);
                  onClose();
                }}
                className="w-full py-1.5 flex items-center justify-center gap-1.5 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 font-bold uppercase tracking-wider text-[10px] transition-all active:scale-95 cursor-pointer"
              >
                <Trash2 size={13} />
                <span>Remover</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface MatchConfig {
  duration: number; // in minutes
  playersPerTeam: number;
  goalLimit: number;
}

interface MatchEvent {
  id: string;
  type: "goal";
  team: "A" | "B";
  playerId: string;
  assistId?: string;
  timestamp: number; // match time in seconds
}

interface MatchState {
  isActive: boolean;
  isPaused: boolean;
  timeRemaining: number; // in seconds
  config: MatchConfig;
  scoreA: number;
  scoreB: number;
  events: MatchEvent[];
  startTime: number | null;
  hasEnded: boolean;
}

interface PaymentRecord {
  id: string;
  playerId: string;
  year: number;
  months: { [month: string]: number };
  monthlyFee: number;
}

interface ScheduledMatch {
  id: string;
  name: string;
  date: number;
  location?: string;
  time?: string;
  status: "Confirmada" | "Pendente";
  confirmedPlayers: number;
  maxPlayers: number;
  imageUrl?: string;
}

type Screen = "players" | "teams" | "ranking" | "finance";

// --- Utils ---

const resizeImage = (
  base64Str: string,
  maxWidth = 150,
  maxHeight = 150,
): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onerror = () => resolve(base64Str); // Fallback to original if error
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.8));
    };
  });
};

const safeLocalStorage = {
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  },
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  },
  clear: () => {
    try {
      localStorage.clear();
    } catch (e) {}
  },
};

const generateId = () => {
  try {
    if (
      typeof window !== "undefined" &&
      window.crypto &&
      window.crypto.randomUUID
    ) {
      return window.crypto.randomUUID();
    }
  } catch (e) {}
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
};

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

const formatPlayerName = (name: string) => {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return name;
  const firstName = parts[0];
  const lastInitial = parts[parts.length - 1][0].toUpperCase();
  return `${firstName} ${lastInitial}.`;
};

const resolveMultipleGoalkeepers = (
  teams: Team[],
  playersList: Player[],
  playersPerTeam?: number,
): { newTeams: Team[]; changed: boolean } => {
  const getGks = (team: Team) =>
    team?.playerIds.filter(
      (id) => playersList.find((p) => p.id === id)?.isGoalkeeper,
    ) || [];
  const getLinePlayers = (team: Team) =>
    team?.playerIds.filter(
      (id) => !playersList.find((p) => p.id === id)?.isGoalkeeper,
    ) || [];

  let changed = false;
  // Deep copy for mutation
  let allTeamsNow = teams.map((t) => ({
    ...t,
    playerIds: [...t.playerIds],
  }));

  // Step 1: Ensure all teams have GKs at index 0 if they have any
  for (let i = 0; i < allTeamsNow.length; i++) {
    const currentTeam = allTeamsNow[i];
    const gks = getGks(currentTeam);
    const line = getLinePlayers(currentTeam);
    const sorted = [...gks, ...line];

    if (JSON.stringify(currentTeam.playerIds) !== JSON.stringify(sorted)) {
      allTeamsNow[i].playerIds = sorted;
      changed = true;
    }
  }

  // Step 2: Balance goalkeepers (ensure max 1 per team if possible)
  for (let i = 0; i < allTeamsNow.length; i++) {
    let team = allTeamsNow[i];
    let gks = getGks(team);
    while (gks.length > 1) {
      let gkToMove = gks.pop()!;
      let receiverFound = false;

      // Try to find a receiver team that has 0 GKs
      for (let j = 0; j < allTeamsNow.length; j++) {
        if (i !== j && getGks(allTeamsNow[j]).length === 0) {
          const receiverLine = getLinePlayers(allTeamsNow[j]);

          if (receiverLine.length > 0) {
            // Swap GK with first line player of receiver (to keep GK at index 0)
            const lineToSwap = receiverLine[0];
            allTeamsNow[i].playerIds = allTeamsNow[i].playerIds.filter(
              (id) => id !== gkToMove,
            );
            allTeamsNow[i].playerIds.push(lineToSwap); // Add line player to giver team

            allTeamsNow[j].playerIds = [
              gkToMove,
              ...allTeamsNow[j].playerIds.filter((id) => id !== lineToSwap),
            ];

            receiverFound = true;
            changed = true;
            break;
          } else if (
            playersPerTeam !== undefined &&
            allTeamsNow[j].playerIds.length < playersPerTeam
          ) {
            // Empty team or team with space, just move them
            allTeamsNow[i].playerIds = allTeamsNow[i].playerIds.filter(
              (id) => id !== gkToMove,
            );
            allTeamsNow[j].playerIds.unshift(gkToMove); // Push to front
            receiverFound = true;
            changed = true;
            break;
          }
        }
      }
      if (!receiverFound) break;
      // Refresh gks for current team after move
      gks = getGks(allTeamsNow[i]);
    }
  }

  // Final pass: ensure index 0 again for safety after movements
  if (changed) {
    allTeamsNow = allTeamsNow.map((team) => {
      const gks = getGks(team);
      const line = getLinePlayers(team);
      return { ...team, playerIds: [...gks, ...line] };
    });
  }

  return { newTeams: allTeamsNow, changed };
};

const SpinningBall = ({
  size = "md",
  className = "",
  spin = true,
  color = "#39FF14",
  patternColor = "#000000",
  isIcon = false,
}: {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  spin?: boolean;
  color?: string;
  patternColor?: string;
  isIcon?: boolean;
}) => {
  const theme = "light";
  const sizeClasses = {
    xs: "w-[18px] h-[18px]",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-16 h-16",
  };

  return (
    <motion.div
      animate={spin ? { rotate: 360 } : {}}
      transition={
        spin
          ? {
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }
          : {}
      }
      className={`${sizeClasses[size]} rounded-full relative flex items-center justify-center z-10 ${className}`}
      style={{ backgroundColor: color }}
    >
      {/* Ball pattern */}
      <div
        className="absolute inset-0 rounded-full border-2 overflow-hidden"
        style={{ borderColor: isIcon ? patternColor : "rgba(0,0,0,0.2)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full"
          style={{ backgroundColor: patternColor, opacity: isIcon ? 0.8 : 0.1 }}
        />
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.5"
          style={{ backgroundColor: patternColor, opacity: isIcon ? 0.8 : 0.1 }}
        />
        <div
          className="absolute inset-0 border-[6px] border-transparent rounded-full"
          style={{ borderTopColor: patternColor, opacity: isIcon ? 0.7 : 0.05 }}
        />
      </div>
    </motion.div>
  );
};

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fallback in case video fails to load or play
  useEffect(() => {
    const timer = setTimeout(onComplete, 8000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.error("Video autoplay failed:", e);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090b14] overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        onError={onComplete}
        className="w-full h-full object-cover"
      >
        <source src="/splash-animation.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const StatCircularGauge = ({
  value,
  label,
  color = "green",
}: {
  value: number;
  label: string;
  color?: "green" | "gray" | "red" | "blue" | "purple" | "amber";
}) => {
  const maxVal = label.toLowerCase().includes("partida") ? 15 : 10;
  const progressRatio = Math.min(1, Math.max(0.2, value / maxVal));
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progressRatio);

  const colorMap = {
    green: {
      stroke: "#22c55e",
      bg: "bg-emerald-500",
      shadow: "shadow-emerald-500/40",
    },
    gray: {
      stroke: "#9ca3af",
      bg: "bg-zinc-500",
      shadow: "shadow-zinc-500/40",
    },
    blue: {
      stroke: "#2563eb",
      bg: "bg-blue-600",
      shadow: "shadow-blue-600/40",
    },
    amber: {
      stroke: "#f59e0b",
      bg: "bg-amber-500",
      shadow: "shadow-amber-500/40",
    },
    red: {
      stroke: "#ef4444",
      bg: "bg-red-500",
      shadow: "shadow-red-500/40",
    },
    purple: {
      stroke: "#2563eb",
      bg: "bg-blue-600",
      shadow: "shadow-blue-600/40",
    },
  };

  const selectedColor = colorMap[color] || colorMap.green;

  return (
    <div className="flex flex-col items-center justify-center gap-1.5">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 52 52">
          {/* Track Circle */}
          <circle
            cx="26"
            cy="26"
            r={radius}
            className="text-black/15 dark:text-white/15"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
          />
          {/* Progress Arc with smooth draw animation */}
          <motion.circle
            cx="26"
            cy="26"
            r={radius}
            stroke={selectedColor.stroke}
            strokeWidth="2.5"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            strokeLinecap="round"
          />
        </svg>

        {/* Inner Solid Badge with popup spring animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 350, damping: 22 }}
          className={`absolute w-8 h-8 rounded-full ${selectedColor.bg} flex items-center justify-center shadow-lg ${selectedColor.shadow}`}
        >
          <span className="text-white font-black text-xs leading-none">
            {value}
          </span>
        </motion.div>
      </div>

      {/* Label */}
      <span className="text-[11px] font-bold text-zinc-900 dark:text-white tracking-tight">
        {label}
      </span>
    </div>
  );
};

const FutQuinaLogo = ({
  className = "",
  size = "md",
  colorClass: overrideColor,
  titleColorClass,
  subColorClass,
  style,
  align = "center",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  colorClass?: string;
  titleColorClass?: string;
  subColorClass?: string;
  style?: React.CSSProperties;
  align?: "start" | "center" | "end";
}) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl",
  };
  const subSizeClasses = {
    sm: "text-[8px]",
    md: "text-[10px]",
    lg: "text-xs",
  };
  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 48,
  };

  const colorClass =
    overrideColor || "text-zinc-500 dark:text-zinc-500 font-bold";
  const textAlignmentClass =
    align === "start"
      ? "text-left"
      : align === "end"
        ? "text-right"
        : "text-center";

  return (
    <div
      className={`flex items-center gap-1.5 ${textAlignmentClass} ${className}`}
      style={style}
    >
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/logo%20oficial.png"
          alt="FutQuina Logo"
          width={iconSizes[size]}
          height={iconSizes[size]}
          className="object-contain"
        />
      </div>
      <span
        className={`${size === "sm" ? "text-sm" : size === "md" ? "text-xl" : "text-3xl"} uppercase tracking-tighter font-staatliches leading-none ${titleColorClass || "bg-gradient-to-br from-zinc-400 to-zinc-200 bg-clip-text text-transparent"} py-1`}
      >
        FutQuina
      </span>
    </div>
  );
};

const RouletteOverlay = () => {
  const theme = "light";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] bg-black/90 flex flex-col items-center justify-center p-6 backdrop-blur-md"
    >
      <div className="relative w-64 h-64 sm:w-80 sm:h-80">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-8 border-brand-primary/20 animate-[spin_3s_linear_infinite]" />

        {/* Roulette Wheel */}
        <div className="absolute inset-4 rounded-full border-4 border-brand-primary/40 flex items-center justify-center overflow-hidden animate-[spin_1s_linear_infinite]">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={`roulette-grid-${i}`}
                className={`border-[0.5px] border-brand-primary/10 ${i % 2 === 0 ? "bg-brand-primary/5" : "bg-transparent"}`}
              />
            ))}
          </div>
          {/* Spokes */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`roulette-spoke-${i}`}
              className="absolute w-full h-[1px] bg-brand-primary/20"
              style={{ transform: `rotate(${i * 30}deg)` }}
            />
          ))}
        </div>

        {/* Inner Spinning Ball */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 0.5, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <SpinningBall size="lg" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-brand-primary font-black uppercase tracking-[0.3em] text-[10px] animate-pulse"
          >
            Sorteando Jogadores
          </motion.p>
        </div>

        {/* Indicator */}
        <div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-12 bg-brand-primary z-20"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)" }}
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-2">
          Sorteando Times
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-brand-primary animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-brand-primary animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-brand-primary animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SavingPeladaOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
        className="w-full max-w-[280px] rounded-[24px] overflow-hidden shadow-2xl bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl relative flex flex-col p-6 items-center text-center"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />
        <div className="w-16 h-16 rounded-[20px] bg-brand-primary flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20 text-black relative z-10">
          <IoIosSave size={32} />
        </div>
        <h2 className="text-lg font-black uppercase tracking-tight leading-none mb-2 relative z-10">
          Salvando Pelada
        </h2>
        <p className="text-xs font-medium text-black/70 dark:text-white/70 mb-4 leading-normal relative z-10">
          Armazenando presença, confrontos e próximos
        </p>
        <div className="flex items-center justify-center gap-1.5 relative z-10">
          {[0, 150, 300].map((delay) => (
            <div
              key={delay}
              className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Animated Counter ---
function AnimatedCounter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    let animationFrameId: number;
    const duration = 1000; // 1 second animation
    const initialValue = displayValue;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplayValue(Math.round(initialValue + (value - initialValue) * ease));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [value]);

  return <>{displayValue}</>;
}

// --- App Component ---

function GroupApp({
  groupId,
  onBackToHome,
}: {
  groupId: string;
  onBackToHome: () => void;
}) {
  // --- MIGRATION: Migrate old local storage data to the current group ---
  useEffect(() => {
    const hasGlobalMigrated = safeLocalStorage.getItem("futquina_global_migrated");
    if (!hasGlobalMigrated) {
      const oldPlayers = safeLocalStorage.getItem("futquina_players");
      if (oldPlayers) {
        let matchId = "";
        const oldMatches = safeLocalStorage.getItem("futquina_scheduled_matches");
        if (oldMatches) {
          try {
            const parsed = JSON.parse(oldMatches);
            if (Array.isArray(parsed) && parsed.length > 0) {
              matchId = parsed[0].id;
              safeLocalStorage.setItem(`futquina_scheduled_matches_${groupId}`, oldMatches);
            }
          } catch(e) {}
        }
        
        if (!matchId) {
           matchId = "migrated_match_" + Date.now();
           const newMatches = [{
              id: matchId,
              name: "Pelada Migrada",
              date: Date.now(),
              location: "Arena a definir",
              time: "08:00",
              status: "Pendente",
              confirmedPlayers: 0,
              maxPlayers: 16,
           }];
           safeLocalStorage.setItem(`futquina_scheduled_matches_${groupId}`, JSON.stringify(newMatches));
        }

        const matchPrefixes = [
            "futquina_players",
            "futquina_teams",
            "futquina_match",
            "futquina_last_result",
            "futquina_payments",
            "futquina_session_player_ids",
            "futquina_match_history",
            "futquina_expenses",
        ];
        
        for (let i = 0; i < localStorage.length; i++) {
           const key = localStorage.key(i);
           if (key && key.startsWith("futquina_") && !key.includes("_") && !key.startsWith("futquina_global_")) {
             // Wait, old keys might have underscores like 'futquina_match_history'
           }
        }
        // Let's just explicitly map known old keys
        const otherKeys = [
          "futquina_theme", "futquina_monthly_fee", "futquina_org_settings", 
          "futquina_org_pro", "futquina_available_years", "futquina_selected_year", 
          "futquina_manual_adjustment", "futquina_finance_subscreen", "futquina_first_setup_done"
        ];
        
        for (const prefix of matchPrefixes) {
           const val = safeLocalStorage.getItem(prefix);
           if (val) safeLocalStorage.setItem(`${prefix}_${groupId}_${matchId}`, val);
        }
        for (const k of otherKeys) {
           const val = safeLocalStorage.getItem(k);
           if (val) safeLocalStorage.setItem(`${k}_${groupId}`, val);
        }

        safeLocalStorage.setItem(`futquina_selected_match_id_${groupId}`, matchId);
      }
      safeLocalStorage.setItem("futquina_global_migrated", "true");
      // Force reload to pick up migrated data
      window.location.reload();
    }
  }, [groupId]);

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = safeLocalStorage.getItem(`futquina_theme_${groupId}`);
    return (saved as "light" | "dark") || "light";
  });

  useEffect(() => {
    safeLocalStorage.setItem(`futquina_theme_${groupId}`, theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, groupId]);

  // -- Presence Mode --
  const urlParams = new URLSearchParams(window.location.search);
  const [isPresenceMode, setIsPresenceMode] = useState<boolean>(
    urlParams.get("presence") === "true",
  );
  const [presencePlayerId, setPresencePlayerId] = useState<string>("");
  const [presenceCode, setPresenceCode] = useState<string>("");

  // --- State ---
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [adminPin, setAdminPin] = useState<string>("");
  const [selectedMatchId, setSelectedMatchId] = useState<string | null>(() => {
    return safeLocalStorage.getItem(`futquina_selected_match_id_${groupId}`) || null;
  });
  const isSwitchingMatch = useRef(false);

  useEffect(() => {
    if (selectedMatchId) {
      safeLocalStorage.setItem(`futquina_selected_match_id_${groupId}`, selectedMatchId);
    } else {
      safeLocalStorage.removeItem(`futquina_selected_match_id_${groupId}`);
    }
  }, [selectedMatchId, groupId]);

  useEffect(() => {
    isSwitchingMatch.current = true;

    const loadFromKey = (prefix: string, setter: any, defaultVal: any) => {
      const key = selectedMatchId
        ? `${prefix}_${groupId}_${selectedMatchId}`
        : `${prefix}_${groupId}`;
      // When no match selected, we clear the states for "Organization Dashboard" privacy/clarity
      if (!selectedMatchId) {
        setter(defaultVal);
        return;
      }

      const saved = safeLocalStorage.getItem(key);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setter(parsed);
        } catch (e) {
          setter(defaultVal);
        }
      } else {
        setter(defaultVal);
      }
    };

    loadFromKey("futquina_players", setPlayers, []);
    loadFromKey("futquina_expenses", setExpenses, []);
    loadFromKey("futquina_payments", setPayments, []);
    loadFromKey("futquina_teams", setTeams, []);
    loadFromKey("futquina_match_history", setMatchHistory, []);
    loadFromKey("futquina_match", setMatch, {
      isActive: false,
      isPaused: true,
      timeRemaining: 600,
      config: { duration: 10, playersPerTeam: 5, goalLimit: 5 },
      scoreA: 0,
      scoreB: 0,
      events: [],
      startTime: null,
      hasEnded: false,
      teamAIndex: -1,
      teamBIndex: -1,
    });
    loadFromKey("futquina_session_player_ids", setSessionPlayerIds, []);

    setTimeout(() => {
      isSwitchingMatch.current = false;
    }, 100);
  }, [selectedMatchId, groupId]);

  useEffect(() => {
    const fetchGroupData = async () => {
      const { data } = await supabase
        .from("groups")
        .select("admin_pin")
        .eq("id", groupId)
        .maybeSingle();
      if (data?.admin_pin) {
        setAdminPin(data.admin_pin);
      }
    };
    fetchGroupData();
  }, [groupId]);

  const [currentScreen, setCurrentScreen] = useState<Screen>("players");
  const [playerLayout, setPlayerLayout] = useState<"grid2" | "grid3">(() => {
    const saved = safeLocalStorage.getItem(`futquina_player_layout_${groupId}`);
    return (saved as "grid2" | "grid3") || "grid2";
  });

  const [isInitialSetupFlow, setIsInitialSetupFlow] = useState(false);
  const [firstSetupDone, setFirstSetupDone] = useState(() => {
    const saved = safeLocalStorage.getItem(
      `futquina_first_setup_done_${groupId}`,
    );
    return saved === "true";
  });
  const [shouldPulseConfig, setShouldPulseConfig] = useState(false);

  const [monthlyFee, setMonthlyFee] = useState<number>(() => {
    const saved = safeLocalStorage.getItem(`futquina_monthly_fee_${groupId}`);
    if (!saved) return 5;
    const val = parseFloat(saved);
    return isNaN(val) ? 5 : val;
  });
  const [selectedYear, setSelectedYear] = useState<number>(() => {
    const saved = safeLocalStorage.getItem(`futquina_selected_year_${groupId}`);
    if (!saved) return 2026;
    const val = parseInt(saved);
    return isNaN(val) ? 2026 : val;
  });
  const [availableYears, setAvailableYears] = useState<number[]>(() => {
    const saved = safeLocalStorage.getItem(
      `futquina_available_years_${groupId}`,
    );
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return [...new Set(parsed)].sort((a, b) => a - b);
        }
        return [2026];
      } catch (e) {
        return [2026];
      }
    }
    return [2026];
  });
  const [isEditingFee, setIsEditingFee] = useState(false);
  const [tempFee, setTempFee] = useState("");
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [isPrintPaymentsOnly, setIsPrintPaymentsOnly] = useState(false);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [financeSubScreen, setFinanceSubScreen] = useState<
    "mensalidade" | "balanco" | "menu"
  >(() => {
    const saved = safeLocalStorage.getItem(
      `futquina_finance_subscreen_${groupId}`,
    );
    return (saved as "mensalidade" | "balanco" | "menu") || "balanco";
  });
  const [orgProTab, setOrgProTab] = useState<
    "painel" | "acesso" | "confirmados" | "admins" | "supabase"
  >("painel");
  const [authMode, setAuthMode] = useState<"pin" | "email" | "signup">("pin");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authPin, setAuthPin] = useState("");
  const [appAdmins, setAppAdmins] = useState<any[]>([]);
  const [jogadoresExternos, setJogadoresExternos] = useState<any[]>([]);
  const [presencasExternas, setPresencasExternas] = useState<any[]>([]);

  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_finance_subscreen_${groupId}`,
      financeSubScreen,
    );
  }, [financeSubScreen, groupId]);
  const [manualAdjustment, setManualAdjustment] = useState<number>(() => {
    const saved = safeLocalStorage.getItem(
      `futquina_manual_adjustment_${groupId}`,
    );
    return saved ? Number(saved) : 0;
  });
  const [isEditingTotal, setIsEditingTotal] = useState(false);
  const [totalInput, setTotalInput] = useState("");

  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_manual_adjustment_${groupId}`,
      manualAdjustment.toString(),
    );
  }, [manualAdjustment, groupId]);

  useEffect(() => {
    safeLocalStorage.setItem(`futquina_player_layout_${groupId}`, playerLayout);
  }, [playerLayout, groupId]);
  const [expenses, setExpenses] = useState<
    { id: string; name: string; amount: number; date: number }[]
  >(() => {
    const saved = safeLocalStorage.getItem(`futquina_expenses_${groupId}`);
    try {
      return saved ? JSON.parse(saved) || [] : [];
    } catch (e) {
      return [];
    }
  });
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [newExpense, setNewExpense] = useState({ name: "", amount: "" });
  const [panelModal, setPanelModal] = useState<
    "cadastrados" | "externos" | "assist" | "confirmados" | "admins" | null
  >(null);

  useEffect(() => {
    if (isSwitchingMatch.current) return;
    const key = selectedMatchId
      ? `futquina_expenses_${groupId}_${selectedMatchId}`
      : `futquina_expenses_${groupId}`;
    safeLocalStorage.setItem(key, JSON.stringify(expenses));
  }, [expenses, selectedMatchId, groupId]);
  const [players, setPlayers] = useState<Player[]>(() => {
    const saved = safeLocalStorage.getItem(`futquina_players_${groupId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed)) return [];
        const uniquePlayers: Player[] = [];
        const seenIds = new Set<string>();
        for (const p of parsed) {
          if (!p || typeof p !== "object") continue;
          const id = p.id || generateId();
          if (!seenIds.has(id)) {
            uniquePlayers.push({ ...p, id });
            seenIds.add(id);
          } else {
            uniquePlayers.push({ ...p, id: generateId() });
          }
        }
        return uniquePlayers;
      } catch (e) {
        console.error("Error parsing players from localStorage", e);
      }
    }
    return [];
  });

  const [scheduledMatches, setScheduledMatches] = useState<ScheduledMatch[]>(
    () => {
      const saved = safeLocalStorage.getItem(
        `futquina_scheduled_matches_${groupId}`,
      );
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            const uniqueMatches: ScheduledMatch[] = [];
            const seenMatchIds = new Set<string>();
            for (const m of parsed) {
              if (!m || typeof m !== "object") continue;
              const id = m.id && !seenMatchIds.has(m.id) ? m.id : generateId();
              uniqueMatches.push({ ...m, id });
              seenMatchIds.add(id);
            }
            return uniqueMatches;
          }
          return [];
        } catch (e) {
          return [];
        }
      }
      return [
        {
          id: "default-1",
          name: "Pelada do Domingo",
          date: new Date(2026, 4, 25).getTime(),
          location: "Arena Fut 7",
          time: "08:00 - 10:00",
          status: "Confirmada",
          confirmedPlayers: 14,
          maxPlayers: 16,
        },
      ];
    },
  );

  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showWhatsAppInfoModal, setShowWhatsAppInfoModal] = useState(false);
  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);

  // Cleanup WhatsApp players after the match date
  useEffect(() => {
    if (scheduledMatches.length > 0) {
      // Find the latest match date
      const latestMatchDate = Math.max(...scheduledMatches.map((m) => m.date));
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // If today is strictly after the latest match date
      if (today.getTime() > latestMatchDate) {
        const hasWhatsAppPlayers = players.some(
          (p) => p.addedVia === "whatsapp",
        );
        if (hasWhatsAppPlayers) {
          setPlayers((prev) => prev.filter((p) => p.addedVia !== "whatsapp"));
        }
      }
    }
  }, [scheduledMatches, players]);
  const handleSwapMatches = () => {
    if (scheduledMatches.length > 1) {
      setScheduledMatches((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }
  };

  const [matchConfigOpenId, setMatchConfigOpenId] = useState<string | null>(
    null,
  );
  const [expandedMatchCards, setExpandedMatchCards] = useState<string[]>([]);
  const [matchToDelete, setMatchToDelete] = useState<ScheduledMatch | null>(
    null,
  );
  const [newMatchName, setNewMatchName] = useState("");
  const [newMatchDay, setNewMatchDay] = useState("Segunda");
  const [newMatchTime, setNewMatchTime] = useState("08:00");
  const [newMatchImage, setNewMatchImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMatchImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_scheduled_matches_${groupId}`,
      JSON.stringify(scheduledMatches),
    );
  }, [scheduledMatches, groupId]);

  const [showEndPeladaConfirm, setShowEndPeladaConfirm] = useState(false);
  const [isSavingPeladaFlow, setIsSavingPeladaFlow] = useState(false);

  const handleScheduleMatch = () => {
    if (newMatchName.trim()) {
      const days = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
      ];
      const today = new Date();
      const currentDayIndex = today.getDay();
      const targetDayIndex = days.indexOf(newMatchDay);

      let diff = targetDayIndex - currentDayIndex;
      if (diff < 0) diff += 7;

      const matchDate = new Date();
      matchDate.setDate(today.getDate() + diff);
      matchDate.setHours(8, 0, 0, 0);

      if (editingMatchId) {
        setScheduledMatches((prev) =>
          prev.map((m) =>
            m.id === editingMatchId
              ? {
                  ...m,
                  name: newMatchName.trim(),
                  date: matchDate.getTime(),
                  time: newMatchTime,
                  imageUrl: newMatchImage || undefined,
                }
              : m,
          ),
        );
        setEditingMatchId(null);
      } else {
        if (scheduledMatches.length >= 3) {
          setToast({
            message: "Limite atingido! Você só pode criar até 3 peladas.",
            type: "warning",
          });
          setTimeout(() => setToast(null), 3000);
          setShowScheduleModal(false);
          return;
        }
        const newMatch: ScheduledMatch = {
          id: generateId(),
          name: newMatchName.trim(),
          date: matchDate.getTime(),
          location: "Arena a definir",
          time: newMatchTime,
          status: "Pendente",
          confirmedPlayers: 0,
          maxPlayers: 16,
          imageUrl: newMatchImage || undefined,
        };
        setScheduledMatches((prev) => [...prev, newMatch]);
        setSelectedMatchId(newMatch.id);
        setCurrentScreen("players");
        setShowAddPlayerSection(true);
        setTeamsTab("configuracao");
        setPlayersTab("configuracao");
      }

      setFixedColors({ teamA: null, teamB: null, enabled: false });
      setOrgProSettings((prev) => ({ ...prev, allowFixedGoalkeeper: false }));
      setNewMatchName("");
      setNewMatchDay("Segunda");
      setNewMatchTime("08:00");
      setNewMatchImage("");
      setShowScheduleModal(false);
    }
  };
  const [sessionPlayerIds, setSessionPlayerIds] = useState<string[]>(() => {
    const saved = safeLocalStorage.getItem(
      `futquina_session_player_ids_${groupId}`,
    );
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        console.error("Error parsing session player ids", e);
      }
    }
    return [];
  });
  const [orgProData, setOrgProData] = useState<{
    [playerId: string]: { code: string };
  }>(() => {
    const saved = safeLocalStorage.getItem(`futquina_org_pro_${groupId}`);
    return saved ? JSON.parse(saved) : {};
  });
  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_org_pro_${groupId}`,
      JSON.stringify(orgProData),
    );
  }, [orgProData, groupId]);

  const [orgProSettings, setOrgProSettings] = useState<{
    maxAbsences: number | null;
    requirePaymentUpToDate: boolean;
    allowFixedGoalkeeper: boolean;
    matchDayOfWeek: number | null;
    matchTime: string;
    appliedDate: number | null;
  }>(() => {
    const saved = safeLocalStorage.getItem(`futquina_org_settings_${groupId}`);
    return saved
      ? { allowFixedGoalkeeper: false, ...JSON.parse(saved) }
      : {
          maxAbsences: null,
          requirePaymentUpToDate: false,
          allowFixedGoalkeeper: false,
          matchDayOfWeek: null,
          matchTime: "",
          appliedDate: null,
        };
  });

  const [tempOrgProSettings, setTempOrgProSettings] = useState(orgProSettings);

  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_org_settings_${groupId}`,
      JSON.stringify(orgProSettings),
    );
    setTempOrgProSettings(orgProSettings);
  }, [orgProSettings, groupId]);

  const [payments, setPayments] = useState<PaymentRecord[]>(() => {
    const saved = safeLocalStorage.getItem(`futquina_payments_${groupId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed)) return [];
        const uniquePayments: PaymentRecord[] = [];
        const seenKeys = new Set<string>();
        for (const p of parsed) {
          if (!p || typeof p !== "object") continue;
          const key = `${p.playerId}-${p.year}`;
          if (!seenKeys.has(key)) {
            uniquePayments.push({
              ...p,
              id: p.id || key,
            });
            seenKeys.add(key);
          } else {
            // Merge months if duplicate
            const existing = uniquePayments.find(
              (up) => up.playerId === p.playerId && up.year === p.year,
            );
            if (existing) {
              existing.months = { ...existing.months, ...p.months };
            }
          }
        }
        return uniquePayments;
      } catch (e) {
        console.error("Error parsing payments from localStorage", e);
      }
    }
    return [];
  });
  const [teams, setTeams] = useState<Team[]>(() => {
    const saved = safeLocalStorage.getItem(`futquina_teams_${groupId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed)) return [];
        const uniqueTeams: Team[] = [];
        const seenTeamIds = new Set<string>();

        const allSameGreen =
          parsed.length > 1 &&
          parsed.every((t: any) => t && t.color === "#4ade80");
        const allSameBlack =
          parsed.length > 1 &&
          parsed.every((t: any) => t && t.color === "#1a1a1a");
        const forceRecolor = allSameGreen || allSameBlack;

        for (const t of parsed) {
          if (!t || typeof t !== "object") continue;
          const teamId = t.id && !seenTeamIds.has(t.id) ? t.id : generateId();
          seenTeamIds.add(teamId);

          const uniquePlayerIds: string[] = [];
          const seenPlayerIds = new Set<string>();
          const playerIds = Array.isArray(t.playerIds) ? t.playerIds : [];
          for (const pid of playerIds) {
            if (!seenPlayerIds.has(pid)) {
              uniquePlayerIds.push(pid);
              seenPlayerIds.add(pid);
            }
          }

          let parsedColor = t.color;
          if (forceRecolor || !parsedColor || parsedColor === "#1a1a1a") {
            parsedColor = getNextTeamColor(uniqueTeams);
          }

          uniqueTeams.push({
            ...t,
            id: teamId,
            playerIds: uniquePlayerIds,
            color: parsedColor,
          });
        }
        return uniqueTeams;
      } catch (e) {
        console.error("Error parsing teams from localStorage", e);
      }
    }
    return [
      {
        id: generateId(),
        name: "Time A",
        playerIds: [],
        iconIdx: 0,
        color: TEAM_COLORS[0],
      },
      {
        id: generateId(),
        name: "Time B",
        playerIds: [],
        iconIdx: 1,
        color: TEAM_COLORS[1],
      },
    ];
  });

  // Clear teams when all players are deleted
  useEffect(() => {
    if (players.length === 0 && teams.length > 0) {
      setTeams([]);
    }
  }, [players.length, teams.length]);

  const [match, setMatch] = useState<
    MatchState & { teamAIndex: number; teamBIndex: number }
  >(() => {
    const saved = safeLocalStorage.getItem(`futquina_match_${groupId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed || typeof parsed !== "object")
          throw new Error("Invalid match data");
        const uniqueEvents: MatchEvent[] = [];
        const seenEventIds = new Set<string>();
        const events = Array.isArray(parsed.events) ? parsed.events : [];
        for (const e of events) {
          if (!e || typeof e !== "object") continue;
          const id = e.id && !seenEventIds.has(e.id) ? e.id : generateId();
          uniqueEvents.push({ ...e, id });
          seenEventIds.add(id);
        }
        return {
          isActive: false,
          isPaused: true,
          timeRemaining: 600,
          config: { duration: 10, playersPerTeam: 5, goalLimit: 5 },
          scoreA: 0,
          scoreB: 0,
          startTime: null,
          hasEnded: false,
          teamAIndex: -1,
          teamBIndex: -1,
          ...parsed,
          events: uniqueEvents,
        };
      } catch (e) {
        console.error("Error parsing match from localStorage", e);
      }
    }
    return {
      isActive: false,
      isPaused: true,
      timeRemaining: 600,
      config: { duration: 10, playersPerTeam: 5, goalLimit: 5 },
      scoreA: 0,
      scoreB: 0,
      events: [],
      startTime: null,
      hasEnded: false,
      teamAIndex: -1,
      teamBIndex: -1,
    };
  });

  const [matchHistory, setMatchHistory] = useState<MatchResult[]>(() => {
    const saved = safeLocalStorage.getItem(`futquina_match_history_${groupId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!Array.isArray(parsed)) return [];
        const uniqueHistory: any[] = [];
        const seenHistoryIds = new Set<string>();
        for (const h of parsed) {
          if (!h || typeof h !== "object") continue;
          const hId = h.id && !seenHistoryIds.has(h.id) ? h.id : generateId();
          uniqueHistory.push({ ...h, id: hId });
          seenHistoryIds.add(hId);
        }
        return uniqueHistory;
      } catch (e) {
        console.error("Error parsing match history from localStorage", e);
      }
    }
    return [];
  });
  const [hasRandomized, setHasRandomized] = useState(() => {
    const saved = safeLocalStorage.getItem(
      `futquina_has_randomized_${groupId}`,
    );
    return saved === "true";
  });
  const [pendingAssist, setPendingAssist] = useState<{
    team: "A" | "B";
    goalPlayerId: string;
    eventId: string;
  } | null>(null);
  const [showRandomizeModal, setShowRandomizeModal] = useState(false);
  const [showTeamWarningModal, setShowTeamWarningModal] = useState(false);

  const handlePlayerGoal = (playerId: string, team: "A" | "B") => {
    if (!match.isActive || match.isPaused) {
      setToast({
        message: "⏱️ O cronômetro precisa estar rodando!",
        type: "warning",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    const eventId = generateId();
    const newEvent: MatchEvent = {
      id: eventId,
      type: "goal",
      team,
      playerId,
      timestamp: match.config.duration * 60 - match.timeRemaining,
    };

    setMatch((prev) => ({
      ...prev,
      scoreA: team === "A" ? prev.scoreA + 1 : prev.scoreA,
      scoreB: team === "B" ? prev.scoreB + 1 : prev.scoreB,
      events: [...prev.events, newEvent],
    }));

    setPendingAssist({ team, goalPlayerId: playerId, eventId });
    playWhistle();
  };

  const handleAssistSelection = (assistId: string | null) => {
    if (!pendingAssist) return;

    if (assistId) {
      setMatch((prev) => ({
        ...prev,
        events: prev.events.map((e) =>
          e.id === pendingAssist.eventId ? { ...e, assistId } : e,
        ),
      }));
      setToast({ message: "⚽️ GOL! Assistência registrada", type: "success" });
    } else {
      setToast({ message: "⚽️ GOL! Placar atualizado", type: "info" });
    }

    setPendingAssist(null);
    setTimeout(() => setToast(null), 3000);
  };
  const [showFormationChoiceModal, setShowFormationChoiceModal] =
    useState(false);
  const [lastMatchResult, setLastMatchResult] = useState<{
    id: string;
    teamAIndex: number;
    teamBIndex: number;
    scoreA: number;
    scoreB: number;
    events: MatchEvent[];
    timestamp: number;
    teamAName?: string;
    teamBName?: string;
    teamAColor?: string;
    teamBColor?: string;
    teamAId?: string;
    teamBId?: string;
  } | null>(() => {
    const saved = safeLocalStorage.getItem(`futquina_last_result_${groupId}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          // Migration for older data without events
          if (!parsed.events) parsed.events = [];
          return parsed;
        }
      } catch (e) {
        console.error("Error parsing last result from localStorage", e);
      }
    }
    return null;
  });
  const [showEqualizerModal, setShowEqualizerModal] = useState(false);
  const [equalizerData, setEqualizerData] = useState<{
    targetTeamIndex: number;
    requiredCount: number;
    otherTeamIndex: number;
  } | null>(null);
  const [showScorerModal, setShowScorerModal] = useState(false);
  const [scorerTeam, setScorerTeam] = useState<"A" | "B" | null>(null);
  const [replacingPlayer, setReplacingPlayer] = useState<{
    teamIndex: number;
    removedPlayerId: string;
  } | null>(null);
  const [playerEvents, setPlayerEvents] = useState<{
    [playerId: string]: { type: "swap" | "up" | "down"; timestamp: number };
  }>({});

  const prevTeamsRef = useRef<Team[]>([]);
  useEffect(() => {
    const currentTeams = teams;
    const prevTeams = prevTeamsRef.current;

    if (
      prevTeams.length > 0 &&
      currentTeams.length > 0 &&
      prevTeams !== currentTeams
    ) {
      const now = Date.now();
      const newEvents = { ...playerEvents };
      let changed = false;

      const prevMap = new Map<string, number>();
      prevTeams.forEach((t, i) =>
        t.playerIds.forEach((pid) => prevMap.set(pid, i)),
      );

      const currMap = new Map<string, number>();
      currentTeams.forEach((t, i) =>
        t.playerIds.forEach((pid) => currMap.set(pid, i)),
      );

      currMap.forEach((currIndex, pid) => {
        if (prevMap.has(pid)) {
          const prevIndex = prevMap.get(pid)!;
          if (currIndex < prevIndex) {
            if (
              newEvents[pid]?.type !== "swap" ||
              now - newEvents[pid].timestamp > 1000
            ) {
              newEvents[pid] = { type: "up", timestamp: now };
              changed = true;
            }
          } else if (currIndex > prevIndex) {
            if (
              newEvents[pid]?.type !== "swap" ||
              now - newEvents[pid].timestamp > 1000
            ) {
              newEvents[pid] = { type: "down", timestamp: now };
              changed = true;
            }
          }
        }
      });
      if (changed) {
        setPlayerEvents(newEvents);
      }
    }
    prevTeamsRef.current = currentTeams;
  }, [teams]); // Omit playerEvents from dependencies to prevent excessive re-renders

  useEffect(() => {
    const timer = setInterval(() => {
      setPlayerEvents((prev) => {
        const now = Date.now();
        const next = { ...prev };
        let changed = false;
        Object.keys(next).forEach((pid) => {
          if (now - next[pid].timestamp > 15000) {
            delete next[pid];
            changed = true;
          }
        });
        return changed ? next : prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const [showMatchSettingsModal, setShowMatchSettingsModal] = useState(false);
  const [showConfigMenu, setShowConfigMenu] = useState(false);
  const [showTimeEditModal, setShowTimeEditModal] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState<{
    teamIdx: number;
    color: string;
  } | null>(null);
  const [fixedColors, setFixedColors] = useState<{
    teamA: string | null;
    teamB: string | null;
    enabled: boolean;
  }>(() => {
    const saved = safeLocalStorage.getItem(`futquina_fixed_colors_${groupId}`);
    return saved
      ? JSON.parse(saved)
      : { teamA: null, teamB: null, enabled: false };
  });

  const getTeamIcon = (team: Team | undefined, position: "A" | "B") => {
    if (fixedColors.enabled) {
      const fixedColor =
        position === "A" ? fixedColors.teamA : fixedColors.teamB;
      if (fixedColor) {
        const idx = SHIRT_COLORS.indexOf(fixedColor);
        if (idx !== -1) return TEAM_ICONS[idx];
      }
    }
    if (!team) return TEAM_ICONS[position === "A" ? 0 : 1];
    return TEAM_ICONS[team.iconIdx ?? (position === "A" ? 0 : 1)];
  };

  const [autoCompleteTeams, setAutoCompleteTeams] = useState(() => {
    const saved = safeLocalStorage.getItem(
      `futquina_auto_complete_teams_${groupId}`,
    );
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (groupId) {
      safeLocalStorage.setItem(
        `futquina_auto_complete_teams_${groupId}`,
        JSON.stringify(autoCompleteTeams),
      );
    }
  }, [autoCompleteTeams, groupId]);

  useEffect(() => {
    // Only run auto-complete if enabled and there are players to assign
    const availableSessionPlayersList = players
      .filter((p) => p.isAvailable && sessionPlayerIds.includes(p.id))
      .sort((a, b) => (a.arrivedAt || 0) - (b.arrivedAt || 0));

    if (
      !autoCompleteTeams ||
      !match.config.playersPerTeam ||
      availableSessionPlayersList.length === 0
    )
      return;

    setTeams((prev) => {
      const limit = match.config.playersPerTeam;
      const allPlayerIds = availableSessionPlayersList.map((p) => p.id);

      const expectedTeamCount = Math.max(
        2,
        Math.ceil(allPlayerIds.length / limit),
      );

      // Separate GKs and Line, maintaining order within each group
      const allGks = availableSessionPlayersList
        .filter((p) => p.isGoalkeeper)
        .map((p) => p.id);
      const allLine = availableSessionPlayersList
        .filter((p) => !p.isGoalkeeper)
        .map((p) => p.id);

      // Generate the target assignment to check if we need an update
      const targetAssignment: string[][] = [];
      let gkPtr = 0;
      let linePtr = 0;

      for (let i = 0; i < expectedTeamCount; i++) {
        const teamIds: string[] = [];

        // 1. Try to take one GK if available
        if (gkPtr < allGks.length) {
          teamIds.push(allGks[gkPtr]);
          gkPtr++;
        }

        // 2. Fill the rest with Line players
        while (teamIds.length < limit && linePtr < allLine.length) {
          teamIds.push(allLine[linePtr]);
          linePtr++;
        }

        // 3. If still has space and we have extra GKs (not assigned to future teams yet), use them as line players
        // This is a backup to ensure everyone gets assigned
        const remainingTeams = expectedTeamCount - 1 - i;
        const extraGksCount = allGks.length - gkPtr;
        const gksNeededForFuture = Math.min(extraGksCount, remainingTeams);
        const gksAvailableNow = extraGksCount - gksNeededForFuture;

        for (let j = 0; j < gksAvailableNow && teamIds.length < limit; j++) {
          teamIds.push(allGks[gkPtr]);
          gkPtr++;
        }

        targetAssignment.push(teamIds);
      }

      // Special case: if we still have players left (extreme case), push them somewhere
      while (linePtr < allLine.length) {
        // Find first team with space
        const teamWithSpace = targetAssignment.find((t) => t.length < limit);
        if (teamWithSpace) {
          teamWithSpace.push(allLine[linePtr]);
        } else {
          break; // No more space anywhere
        }
        linePtr++;
      }
      while (gkPtr < allGks.length) {
        const teamWithSpace = targetAssignment.find((t) => t.length < limit);
        if (teamWithSpace) {
          teamWithSpace.push(allGks[gkPtr]);
        } else {
          break; // No more space anywhere
        }
        gkPtr++;
      }

      const isDifferent =
        prev.length !== expectedTeamCount ||
        targetAssignment.some((ids, i) => {
          const prevIds = prev[i]?.playerIds || [];
          return (
            ids.length !== prevIds.length ||
            !ids.every((id, idx) => id === prevIds[idx])
          );
        });

      if (!isDifferent) return prev;

      const newTeams: Team[] = [];
      for (let i = 0; i < expectedTeamCount; i++) {
        const chunk = targetAssignment[i];
        const existingTeam = prev[i];

        newTeams.push({
          id: existingTeam?.id || `team-auto-${i}-${generateId()}`,
          name: existingTeam?.name || `Time ${String.fromCharCode(65 + i)}`,
          playerIds: chunk,
          iconIdx: existingTeam?.iconIdx ?? getNextTeamIconIdx(newTeams),
          color: existingTeam?.color ?? getNextTeamColor(newTeams),
          lastMatchStatus: existingTeam?.lastMatchStatus,
        });
      }

      const { newTeams: resolvedTeams } = resolveMultipleGoalkeepers(
        newTeams,
        players,
        match?.config?.playersPerTeam,
      );
      return resolvedTeams;
    });
  }, [
    autoCompleteTeams,
    match?.config?.playersPerTeam,
    sessionPlayerIds,
    players,
    teams,
  ]);

  useEffect(() => {
    // Globally ensure no team assumes > 1 goalkeeper if possible.
    const hasMultipleGks = teams.some(
      (t) =>
        t.playerIds.filter(
          (id) => players.find((p) => p.id === id)?.isGoalkeeper,
        ).length > 1,
    );
    if (hasMultipleGks) {
      const { newTeams, changed } = resolveMultipleGoalkeepers(
        teams,
        players,
        match?.config?.playersPerTeam,
      );
      if (changed) {
        setTeams(newTeams);
      }
    }
  }, [teams, players, match?.config?.playersPerTeam]);

  useEffect(() => {
    if (groupId) {
      safeLocalStorage.setItem(
        `futquina_fixed_colors_${groupId}`,
        JSON.stringify(fixedColors),
      );
    }
  }, [fixedColors, groupId]);

  const [showEventModal, setShowEventModal] = useState<{
    team: "A" | "B" | number;
  } | null>(null);
  const [showInsufficientPlayersModal, setShowInsufficientPlayersModal] =
    useState(false);
  const [showArrivalStepGuide, setShowArrivalStepGuide] = useState(false);
  const [arrivalCardIndex, setArrivalCardIndex] = useState(0);
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [showAddPlayerSection, setShowAddPlayerSection] = useState(false);
  const [showPlayerSummary, setShowPlayerSummary] = useState(false);
  const [isFlashingConfig, setIsFlashingConfig] = useState(false);
  const [shrinkEditButton, setShrinkEditButton] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentScreen === "players" && !showAddPlayerSection) {
      setShrinkEditButton(false);
      timer = setTimeout(() => {
        setShrinkEditButton(true);
      }, 7000);
    } else {
      setShrinkEditButton(false);
    }
    return () => clearTimeout(timer);
  }, [currentScreen, showAddPlayerSection]);

  useEffect(() => {
    if (isFlashingConfig) {
      const timer = setTimeout(() => {
        setIsFlashingConfig(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [isFlashingConfig]);

  const [toast, setToast] = useState<{
    message: string;
    type: "info" | "warning" | "gray" | "success";
  } | null>(null);
  const confirmEndPelada = () => {
    setShowEndPeladaConfirm(false);
    setIsSavingPeladaFlow(true);

    // Simulate saving delay
    setTimeout(() => {
      handleEndPelada();
      setIsSavingPeladaFlow(false);
    }, 2000);
  };

  const handleEndPelada = () => {
    // Resets
    setSessionPlayerIds([]);
    setMatchHistory([]);
    setTeams([]);
    setMatch({
      isActive: false,
      isPaused: true,
      timeRemaining: 10 * 60,
      config: { duration: 10, playersPerTeam: 5, goalLimit: 2 },
      scoreA: 0,
      scoreB: 0,
      events: [],
      startTime: null,
      hasEnded: false,
    });
    setLastMatchResult(null);
    setCurrentScreen("teams");
    setTeamsTab("chegada");
    setShowGlobalSettings(false);

    // Also update all players to not available
    setPlayers((prev) =>
      prev.map((p) => ({ ...p, isAvailable: false, arrivedAt: undefined })),
    );

    setToast({
      message: "Pelada encerrada e dados resetados!",
      type: "success",
    });
    setTimeout(() => setToast(null), 3000);
  };

  const handleBackup = () => {
    try {
      const backupData: Record<string, string> = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("futquina_")) {
          const belongsToGroup = key === `futquina_theme_${groupId}` || 
                                 key.includes(`_${groupId}_`) || 
                                 key.endsWith(`_${groupId}`);
          if (belongsToGroup) {
            const value = localStorage.getItem(key);
            if (value !== null) {
              backupData[key] = value;
            }
          }
        }
      }

      const backupObj = {
        type: "futquina_backup",
        version: "1.0",
        timestamp: Date.now(),
        data: backupData,
      };

      const jsonString = JSON.stringify(backupObj, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const dateStr = new Date().toISOString().slice(0, 10);
      const fileName = `futquina_backup_${dateStr}.json`;

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setToast({ message: "Backup gerado com sucesso!", type: "success" });
      setTimeout(() => setToast(null), 3000);
    } catch (err) {
      console.error(err);
      setToast({ message: "Erro ao gerar backup.", type: "warning" });
      setTimeout(() => setToast(null), 3000);
    }
  };

  const handleRestore = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.style.display = "none";
    document.body.appendChild(input);
    input.onchange = (e) => {
      document.body.removeChild(input);
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const text = event.target?.result as string;
          const backupObj = JSON.parse(text);

          // Validate structure
          if (
            !backupObj ||
            backupObj.type !== "futquina_backup" ||
            !backupObj.data ||
            typeof backupObj.data !== "object"
          ) {
            setToast({
              message: "Arquivo de backup inválido ou corrompido!",
              type: "warning",
            });
            setTimeout(() => setToast(null), 3000);
            return;
          }

          // Validate the data keys
          const dataKeys = Object.keys(backupObj.data);
          if (dataKeys.length === 0) {
            setToast({
              message: "O backup está vazio!",
              type: "warning",
            });
            setTimeout(() => setToast(null), 3000);
            return;
          }

          const allKeysStartWithFutquina = dataKeys.every((key) =>
            key.startsWith("futquina_"),
          );
          if (!allKeysStartWithFutquina) {
            setToast({
              message: "O arquivo contém chaves inválidas!",
              type: "warning",
            });
            setTimeout(() => setToast(null), 3000);
            return;
          }

          // Find the backupGroupId
          let backupGroupId = "";
          const groupLevelPrefixes = [
            "futquina_monthly_fee",
            "futquina_selected_year",
            "futquina_available_years",
            "futquina_manual_adjustment",
            "futquina_finance_subscreen",
            "futquina_has_randomized",
            "futquina_scheduled_matches",
            "futquina_org_pro",
            "futquina_org_settings",
            "futquina_theme",
            "futquina_first_setup_done",
          ];

          for (const prefix of groupLevelPrefixes) {
            const matchingKey = dataKeys.find((k) => k.startsWith(prefix + "_"));
            if (matchingKey) {
              backupGroupId = matchingKey.replace(prefix + "_", "");
              break;
            }
          }

          if (!backupGroupId) {
            const playersKey = dataKeys.find((k) => k.startsWith("futquina_players_"));
            if (playersKey) {
              const remaining = playersKey.replace("futquina_players_", "");
              const parts = remaining.split("_");
              if (parts.length > 0) {
                backupGroupId = parts[0];
              }
            }
          }

          const matchPrefixes = [
            "futquina_players",
            "futquina_teams",
            "futquina_match",
            "futquina_last_result",
            "futquina_payments",
            "futquina_session_player_ids",
            "futquina_match_history",
            "futquina_expenses",
          ];

          // Find the scheduled matches inside the backup
          let backupMatches: ScheduledMatch[] = [];
          const matchesKey = dataKeys.find((k) => k.startsWith("futquina_scheduled_matches_") || k === "futquina_scheduled_matches");
          if (matchesKey) {
            try {
              backupMatches = JSON.parse(backupObj.data[matchesKey] || "[]");
            } catch (e) {}
          }

          // Find the active match ID in the backup
          let activeBackupMatchId = "";
          for (const key of dataKeys) {
            if (backupGroupId && key.startsWith(`futquina_match_${backupGroupId}_`)) {
              activeBackupMatchId = key.replace(`futquina_match_${backupGroupId}_`, "");
              break;
            }
          }
          if (!activeBackupMatchId) {
            for (const key of dataKeys) {
              if (backupGroupId && key.startsWith(`futquina_players_${backupGroupId}_`)) {
                activeBackupMatchId = key.replace(`futquina_players_${backupGroupId}_`, "");
                break;
              }
            }
          }
          if (!activeBackupMatchId && backupMatches.length > 0) {
            activeBackupMatchId = backupMatches[0].id;
          }

          // Build a mapping of backupMatchId -> newMatchId and the newScheduledMatches list
          const matchIdMap: Record<string, string> = {};
          const newScheduledMatches: ScheduledMatch[] = [];

          if (backupMatches.length > 0) {
            for (const m of backupMatches) {
              const newId = generateId();
              matchIdMap[m.id] = newId;
              newScheduledMatches.push({
                ...m,
                id: newId,
              });
            }
          } else {
            const newId = generateId();
            if (activeBackupMatchId) {
              matchIdMap[activeBackupMatchId] = newId;
            }
            newScheduledMatches.push({
              id: newId,
              name: "Pelada Restaurada",
              date: Date.now(),
              location: "Arena a definir",
              time: "08:00",
              status: "Pendente",
              confirmedPlayers: 0,
              maxPlayers: 16,
            });
          }

          const selectedNewMatchId = (activeBackupMatchId && matchIdMap[activeBackupMatchId]) || newScheduledMatches[0]?.id;

          // Merge the new scheduled matches with the current group's scheduled matches
          const currentMatchesKey = `futquina_scheduled_matches_${groupId}`;
          const currentMatchesStr = localStorage.getItem(currentMatchesKey);
          let currentMatches: ScheduledMatch[] = [];
          if (currentMatchesStr) {
            try {
              currentMatches = JSON.parse(currentMatchesStr);
            } catch (e) {}
          }
          const updatedMatches = [...currentMatches, ...newScheduledMatches];
          localStorage.setItem(currentMatchesKey, JSON.stringify(updatedMatches));

          // Clear any existing keys for the new match IDs just in case
          for (const newM of newScheduledMatches) {
            for (const prefix of matchPrefixes) {
              localStorage.removeItem(`${prefix}_${groupId}_${newM.id}`);
            }
          }

          // Restore each key mapping it to the current groupId
          const isOldBackup = backupGroupId === "";
          for (const [key, value] of Object.entries(backupObj.data)) {
            if (!key.startsWith("futquina_")) continue;

            // Only process keys belonging to the backup group
            const belongsToGroup = isOldBackup ? true : (key === `futquina_theme_${backupGroupId}` || 
                                   key.includes(`_${backupGroupId}_`) || 
                                   key.endsWith(`_${backupGroupId}`));
            if (!belongsToGroup) {
              continue;
            }

            let newKey = key;
            let isMatchSpecific = false;

            // Map match ID if it matches any of the backup match IDs
            const foundPrefix = matchPrefixes.find((prefix) =>
              isOldBackup ? key === prefix : key.startsWith(`${prefix}_`),
            );

            if (foundPrefix) {
              if (isOldBackup) {
                newKey = `${foundPrefix}_${groupId}_${selectedNewMatchId}`;
                isMatchSpecific = true;
              } else {
                const expectedPrefix = `${foundPrefix}_${backupGroupId}_`;
                if (key.startsWith(expectedPrefix)) {
                  const bMatchId = key.replace(expectedPrefix, "");
                  const mappedNewId = matchIdMap[bMatchId];
                  if (mappedNewId) {
                    newKey = `${foundPrefix}_${groupId}_${mappedNewId}`;
                    isMatchSpecific = true;
                  }
                }
              }
            }

            // Map group ID for other keys
            if (!isMatchSpecific) {
              if (isOldBackup) {
                newKey = `${key}_${groupId}`;
              } else {
                newKey = key.replace(`_${backupGroupId}`, `_${groupId}`);
              }
            }

            // Skip scheduled matches key since we handle it manually
            if (key.startsWith("futquina_scheduled_matches_") || key === "futquina_scheduled_matches") {
              continue;
            }

            localStorage.setItem(newKey, value as string);
          }

          // Store the selected new match ID so it opens automatically on page load
          if (selectedNewMatchId) {
            localStorage.setItem(`futquina_selected_match_id_${groupId}`, selectedNewMatchId);
          }

          localStorage.setItem(`futquina_backup_restored_${groupId}`, "true");

          setToast({
            message: "Backup restaurado! Recarregando dados...",
            type: "success",
          });
          setTimeout(() => setToast(null), 3000);

          // Reload the page after 1.5s so everything gets updated cleanly
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } catch (err) {
          console.error(err);
          setToast({
            message: "Falha ao ler o arquivo de backup!",
            type: "warning",
          });
          setTimeout(() => setToast(null), 3000);
        }
      };
      reader.onerror = () => {
        setToast({
          message: "Falha ao ler o arquivo de backup!",
          type: "warning",
        });
        setTimeout(() => setToast(null), 3000);
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const [showIconPicker, setShowIconPicker] = useState<number | null>(null);
  const [selectedScorerId, setSelectedScorerId] = useState<string | null>(null);
  const [editingPlayerId, setEditingPlayerId] = useState<string | null>(null);
  const [swappingPlayerId, setSwappingPlayerId] = useState<string | null>(null);
  const [fillingVacancyForTeam, setFillingVacancyForTeam] = useState<
    number | null
  >(null);
  const [showStartMatchConfirm, setShowStartMatchConfirm] = useState(false);
  const [tieBreaker, setTieBreaker] = useState<TieBreakerState>({
    showSelection: false,
    type: "none",
    penalties: { teamA: [], teamB: [], isFinished: false, winnerId: null },
    lottery: { isSpinning: false, winnerId: null },
  });
  const [playersTab, setPlayersTab] = useState<"jogadores" | "configuracao">(
    "configuracao",
  );

  const [teamsTab, setTeamsTab] = useState<
    "menu" | "configuracao" | "chegada" | "historico" | "proximos"
  >("historico");

  const [swipeDirection, setSwipeDirection] = useState(0);

  const navigateTeamsTab = (
    target: "menu" | "configuracao" | "chegada" | "historico" | "proximos",
  ) => {
    const tabs = ["configuracao", "chegada", "historico", "proximos"];
    const currentIndex = tabs.indexOf(teamsTab as any);
    const targetIndex = tabs.indexOf(target);
    if (currentIndex !== -1 && targetIndex !== -1) {
      setSwipeDirection(targetIndex > currentIndex ? -1 : 1);
    }
    setTeamsTab(target);
  };

  const [rankingTab, setRankingTab] = useState<
    "geral" | "artilharia" | "assistencias"
  >(() => {
    const saved = safeLocalStorage.getItem(`futquina_ranking_tab_${groupId}`);
    return (saved as "geral" | "artilharia" | "assistencias") || "geral";
  });

  useEffect(() => {
    safeLocalStorage.setItem(`futquina_ranking_tab_${groupId}`, rankingTab);
  }, [rankingTab, groupId]);
  const [showNotEnoughPlayersModal, setShowNotEnoughPlayersModal] =
    useState(false);
  const [showLogoAnimation, setShowLogoAnimation] = useState(false);
  const [showCloseWarningModal, setShowCloseWarningModal] = useState(false);
  const [flashingTeamIds, setFlashingTeamIds] = useState<string[]>([]);

  const [showQuickAddPlayerModal, setShowQuickAddPlayerModal] = useState<
    number | null
  >(null);
  const [showPlayerActionsModal, setShowPlayerActionsModal] = useState<{
    teamIndex: number;
    playerId: string;
  } | null>(null);
  const [showQueuePlayerModal, setShowQueuePlayerModal] = useState<{
    teamIndex: number;
    playerId: string;
    showMoveOptions?: boolean;
  } | null>(null);
  const [movingPlayers, setMovingPlayers] = useState<{
    teamId: string;
    playerIds: string[];
  } | null>(null);
  const [isSelectingDestination, setIsSelectingDestination] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const [showAssistSelection, setShowAssistSelection] = useState<{
    teamIndex: number;
    scorerId: string;
  } | null>(null);
  const [playerManagementModal, setPlayerManagementModal] =
    useState<Player | null>(null);

  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showResetAppConfirm, setShowResetAppConfirm] = useState(false);
  const [showResetStatsConfirm, setShowResetStatsConfirm] = useState(false);
  const [showAutoCompleteModal, setShowAutoCompleteModal] = useState(false);
  const [showGlobalSettings, setShowGlobalSettings] = useState(false);
  const [showGoalAnimation, setShowGoalAnimation] = useState<{
    scorerName: string;
    teamName: string;
    scorerPhoto?: string;
  } | null>(null);
  const [showSetupGuide, setShowSetupGuide] = useState(false);
  const [highlightFirstPlayer, setHighlightFirstPlayer] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const teamRects = useRef<DOMRect[]>([]);

  const handleMainScroll = (e: React.UIEvent<HTMLElement>) => {
    const currentScrollY = e.currentTarget.scrollTop;

    setShowScrollTop((prev) => {
      if (currentScrollY > 150 && !prev) return true;
      if (currentScrollY <= 150 && prev) return false;
      return prev;
    });

    if (currentScrollY > lastScrollY.current + 10) {
      if (toast) {
        setToast(null);
      }
    }

    lastScrollY.current = currentScrollY;
  };

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null ||
      touchStartY.current === null ||
      touchEndY.current === null
    ) {
      return;
    }

    // Check if target is inside horizontal scrollable container
    let isHorizontalScroll = false;
    let target = e.target as HTMLElement | null;
    while (target && target !== e.currentTarget) {
      const className = target.className || "";
      if (
        typeof className === "string" &&
        (className.includes("overflow-x-auto") ||
          className.includes("custom-scrollbar"))
      ) {
        isHorizontalScroll = true;
        break;
      }
      target = target.parentElement as HTMLElement | null;
    }

    if (isHorizontalScroll) return;

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;

    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;

    if (Math.abs(distanceX) > Math.abs(distanceY) * 1.5) {
      let handledTabSwipe = false;

      if (currentScreen === "teams") {
        const tabs = ["configuracao", "chegada", "historico", "proximos"];
        const curTabIdx = tabs.indexOf(teamsTab);
        if (isLeftSwipe && curTabIdx < tabs.length - 1) {
          navigateTeamsTab(tabs[curTabIdx + 1] as any);
          handledTabSwipe = true;
        } else if (isRightSwipe && curTabIdx > 0) {
          navigateTeamsTab(tabs[curTabIdx - 1] as any);
          handledTabSwipe = true;
        }
      } else if (currentScreen === "finance") {
        const tabs = ["balanco", "mensalidade"];
        const curTabIdx = tabs.indexOf(financeSubScreen);
        if (curTabIdx !== -1) {
          if (isLeftSwipe && curTabIdx < tabs.length - 1) {
            setFinanceSubScreen(tabs[curTabIdx + 1] as any);
            handledTabSwipe = true;
          } else if (isRightSwipe && curTabIdx > 0) {
            setFinanceSubScreen(tabs[curTabIdx - 1] as any);
            handledTabSwipe = true;
          }
        }
      } else if (currentScreen === "ranking") {
        const tabs = ["geral", "artilharia", "assistencias"];
        const curTabIdx = tabs.indexOf(rankingTab);
        if (curTabIdx !== -1) {
          if (isLeftSwipe && curTabIdx < tabs.length - 1) {
            setRankingTab(tabs[curTabIdx + 1] as any);
            handledTabSwipe = true;
          } else if (isRightSwipe && curTabIdx > 0) {
            setRankingTab(tabs[curTabIdx - 1] as any);
            handledTabSwipe = true;
          }
        }
      }

      /* Disabling screen swipe to navigate as per user request
      if (!handledTabSwipe) {
        const screens: Screen[] = ["players", "teams", "ranking", "finance"];
        const currentIndex = screens.indexOf(currentScreen);

        if (isLeftSwipe && currentIndex < screens.length - 1) {
          setSwipeDirection(1);
          setCurrentScreen(screens[currentIndex + 1]);
  } else if (isRightSwipe && currentIndex > 0) {
          setSwipeDirection(-1);
          setCurrentScreen(screens[currentIndex - 1]);
        }
      }
      */
    }
  };

  const playWhistle = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",
    );
    audio.play().catch((e) => console.log("Audio play failed:", e));
  };

  const playCheer = () => {
    const audio = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2020/2020-preview.mp3",
    );
    audio.play().catch((e) => console.log("Audio play failed:", e));
  };

  const handleGoalkeeperSwap = (pAId: string, pBId: string) => {
    setPlayers((prev) => {
      const pA = prev.find((p) => p.id === pAId);
      const pB = prev.find((p) => p.id === pBId);
      if (!pA || !pB) return prev;

      return prev.map((p) => {
        if (p.id === pAId) {
          const updates: any = { arrivedAt: pB.arrivedAt };
          if (pA.isGoalkeeper || pB.isGoalkeeper)
            updates.isGoalkeeper = !!pB.isGoalkeeper;
          return { ...p, ...updates };
        }
        if (p.id === pBId) {
          const updates: any = { arrivedAt: pA.arrivedAt };
          if (pA.isGoalkeeper || pB.isGoalkeeper)
            updates.isGoalkeeper = !!pA.isGoalkeeper;
          return { ...p, ...updates };
        }
        return p;
      });
    });
  };

  const scrollToTeam = (teamIndex: number) => {
    setTimeout(() => {
      const el = document.getElementById(`team-card-${teamIndex}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  };

  const handleResetApp = async () => {
    try {
      setPlayers([]);
      setTeams([
        {
          id: generateId(),
          name: "Time A",
          playerIds: [],
          iconIdx: 0,
          color: TEAM_COLORS[0],
        },
        {
          id: generateId(),
          name: "Time B",
          playerIds: [],
          iconIdx: 1,
          color: TEAM_COLORS[1],
        },
      ]);
      setMatch({
        isActive: false,
        isPaused: true,
        timeRemaining: 600,
        config: { duration: 10, playersPerTeam: 5, goalLimit: 5 },
        scoreA: 0,
        scoreB: 0,
        events: [],
        startTime: null,
        hasEnded: false,
        teamAIndex: -1,
        teamBIndex: -1,
      });
      setMatchHistory([]);
      setPayments([]);
      setExpenses([]);
      setSessionPlayerIds([]);
      setHasRandomized(false);
      setLastMatchResult(null);
      setOrgProData({});
      setOrgProSettings({
        maxAbsences: null,
        requirePaymentUpToDate: false,
        matchDayOfWeek: null,
        matchTime: "",
        appliedDate: null,
      });
      setFixedColors({ teamA: null, teamB: null, enabled: false });
      setMonthlyFee(5);
      setAvailableYears([new Date().getFullYear()]);
      setSelectedYear(new Date().getFullYear());
      setManualAdjustment(0);
      setAdminPin("");
      setFirstSetupDone(false);

      // Clear localStorage
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("futquina_") && key.includes(groupId)) {
          localStorage.removeItem(key);
        }
      });

      // Clear Supabase
      if (groupId) {
        await Promise.all([
          supabase.from("players").delete().eq("group_id", groupId),
          supabase.from("teams").delete().eq("group_id", groupId),
          supabase.from("match_history").delete().eq("group_id", groupId),
          supabase.from("match_state").delete().eq("group_id", groupId),
          supabase.from("payments").delete().eq("group_id", groupId),
          supabase.from("transactions").delete().eq("group_id", groupId),
          supabase
            .from("groups")
            .update({
              admin_pin: null,
              monthly_fee: 5,
              selected_year: new Date().getFullYear(),
              manual_adjustment: 0,
              available_years: [new Date().getFullYear()],
              first_setup_done: false,
            })
            .eq("id", groupId),
        ]);
      }

      setToast({ message: "Aplicativo zerado com sucesso!", type: "success" });
      setShowResetAppConfirm(false);
      setShowGlobalSettings(false);
      setCurrentScreen("players");
      setTimeout(() => setToast(null), 3000);
    } catch (e) {
      console.error("Error resetting app:", e);
      setToast({ message: "Erro ao zerar aplicativo", type: "warning" });
      setTimeout(() => setToast(null), 3000);
    }
  };

  // --- Persistence ---
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  useEffect(() => {
    async function loadData() {
      setIsDataLoaded(false);

      const justRestored = localStorage.getItem(`futquina_backup_restored_${groupId}`) === "true";
      if (justRestored) {
        try {
          // Gather players from global and all match-specific keys
          const restoredPlayersMap = new Map();
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key === `futquina_players_${groupId}` || key.startsWith(`futquina_players_${groupId}_`))) {
              try {
                const list = JSON.parse(localStorage.getItem(key) || "[]");
                if (Array.isArray(list)) {
                  list.forEach((p) => {
                    if (p && p.id) restoredPlayersMap.set(p.id, p);
                  });
                }
              } catch (e) {}
            }
          }
          const restoredPlayers = Array.from(restoredPlayersMap.values());

          // Gather teams from global and all match-specific keys
          const restoredTeamsMap = new Map();
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key === `futquina_teams_${groupId}` || key.startsWith(`futquina_teams_${groupId}_`))) {
              try {
                const list = JSON.parse(localStorage.getItem(key) || "[]");
                if (Array.isArray(list)) {
                  list.forEach((t) => {
                    if (t && t.id) restoredTeamsMap.set(t.id, t);
                  });
                }
              } catch (e) {}
            }
          }
          const restoredTeams = Array.from(restoredTeamsMap.values());

          // Gather payments from global and all match-specific keys
          const restoredPaymentsMap = new Map();
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key === `futquina_payments_${groupId}` || key.startsWith(`futquina_payments_${groupId}_`))) {
              try {
                const list = JSON.parse(localStorage.getItem(key) || "[]");
                if (Array.isArray(list)) {
                  list.forEach((p) => {
                    if (p) {
                      const uniqueId = p.id || `${p.playerId}-${p.year}`;
                      restoredPaymentsMap.set(uniqueId, p);
                    }
                  });
                }
              } catch (e) {}
            }
          }
          const restoredPayments = Array.from(restoredPaymentsMap.values());

          // Gather match history from global and all match-specific keys
          const restoredHistoryMap = new Map();
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key === `futquina_match_history_${groupId}` || key.startsWith(`futquina_match_history_${groupId}_`))) {
              try {
                const list = JSON.parse(localStorage.getItem(key) || "[]");
                if (Array.isArray(list)) {
                  list.forEach((h) => {
                    if (h && h.id) restoredHistoryMap.set(h.id, h);
                  });
                }
              } catch (e) {}
            }
          }
          const restoredHistory = Array.from(restoredHistoryMap.values());

          // For active match state, we try to load the global or first available match-specific key
          let restoredMatch = null;
          const matchKeys = [];
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key === `futquina_match_${groupId}` || key.startsWith(`futquina_match_${groupId}_`))) {
              matchKeys.push(key);
            }
          }
          matchKeys.sort((a, b) => a.length - b.length);
          for (const key of matchKeys) {
            try {
              const parsed = JSON.parse(localStorage.getItem(key) || "null");
              if (parsed) {
                restoredMatch = parsed;
                break;
              }
            } catch (e) {}
          }

          // Gather expenses from global and all match-specific keys
          const restoredExpensesMap = new Map();
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key === `futquina_expenses_${groupId}` || key.startsWith(`futquina_expenses_${groupId}_`))) {
              try {
                const list = JSON.parse(localStorage.getItem(key) || "[]");
                if (Array.isArray(list)) {
                  list.forEach((e) => {
                    if (e && e.id) restoredExpensesMap.set(e.id, e);
                  });
                }
              } catch (e) {}
            }
          }
          const restoredExpenses = Array.from(restoredExpensesMap.values());

          const restoredFee = parseFloat(localStorage.getItem(`futquina_monthly_fee_${groupId}`) || "5");
          const restoredYearVal = parseInt(localStorage.getItem(`futquina_selected_year_${groupId}`) || "2026");
          const restoredAdjustment = parseFloat(localStorage.getItem(`futquina_manual_adjustment_${groupId}`) || "0");
          const restoredAvailableYears = JSON.parse(localStorage.getItem(`futquina_available_years_${groupId}`) || "[2026]");
          const restoredFirstSetup = localStorage.getItem(`futquina_first_setup_done_${groupId}`) === "true";

          // Use currently active match-specific suffix for local state values
          const keySuffix = selectedMatchId ? `_${selectedMatchId}` : "";
          const activePlayers = JSON.parse(localStorage.getItem(`futquina_players_${groupId}${keySuffix}`) || "[]");
          const activeTeams = JSON.parse(localStorage.getItem(`futquina_teams_${groupId}${keySuffix}`) || "[]");
          const activePayments = JSON.parse(localStorage.getItem(`futquina_payments_${groupId}${keySuffix}`) || "[]");
          const activeHistory = JSON.parse(localStorage.getItem(`futquina_match_history_${groupId}${keySuffix}`) || "[]");
          const activeMatch = JSON.parse(localStorage.getItem(`futquina_match_${groupId}${keySuffix}`) || "null");
          const activeExpenses = JSON.parse(localStorage.getItem(`futquina_expenses_${groupId}${keySuffix}`) || "[]");

          setPlayers(activePlayers);
          setTeams(activeTeams);
          setPayments(activePayments);
          setMatchHistory(activeHistory);
          if (activeMatch) setMatch(activeMatch);
          setExpenses(activeExpenses);
          setMonthlyFee(isNaN(restoredFee) ? 5 : restoredFee);
          setSelectedYear(isNaN(restoredYearVal) ? 2026 : restoredYearVal);
          setManualAdjustment(isNaN(restoredAdjustment) ? 0 : restoredAdjustment);
          setAvailableYears(restoredAvailableYears);
          setFirstSetupDone(restoredFirstSetup);

          try {
            const promises = [];
            promises.push(supabase.from("players").delete().eq("group_id", groupId));
            promises.push(supabase.from("teams").delete().eq("group_id", groupId));
            promises.push(supabase.from("match_history").delete().eq("group_id", groupId));
            promises.push(supabase.from("match_state").delete().eq("group_id", groupId));
            promises.push(supabase.from("payments").delete().eq("group_id", groupId));
            promises.push(supabase.from("transactions").delete().eq("group_id", groupId));
            await Promise.all(promises);

            const insertPromises = [];
            if (restoredPlayers.length > 0) {
              const payload = restoredPlayers.map((p: any) => ({
                id: p.id,
                group_id: groupId,
                name: p.name,
                photo: p.photo || null,
                is_available: p.isAvailable ?? true,
                arrived_at: p.arrivedAt || null,
                goalkeeper: p.isGoalkeeper || false,
                level: p.level ?? 3,
              }));
              insertPromises.push(supabase.from("players").insert(payload));
            }
            if (restoredTeams.length > 0) {
              const payload = restoredTeams.map((t: any) => ({
                id: t.id,
                group_id: groupId,
                name: t.name,
                color: t.color || "#4ade80",
                player_ids: t.playerIds || [],
                iconIdx: t.iconIdx || 0,
              }));
              insertPromises.push(supabase.from("teams").insert(payload));
            }
            if (restoredPayments.length > 0) {
              const payload = restoredPayments.map((p: any) => ({
                id: p.id || `${p.playerId}-${p.year}`,
                group_id: groupId,
                player_id: p.playerId,
                year: p.year,
                months: p.months || {},
                monthly_fee: p.monthlyFee || 0,
              }));
              insertPromises.push(supabase.from("payments").insert(payload));
            }
            if (restoredHistory.length > 0) {
              const payload = restoredHistory.map((h: any) => ({
                id: h.id,
                group_id: groupId,
                team_a_id: h.teamAId || null,
                team_b_id: h.teamBId || null,
                team_a_name: h.teamAName,
                team_b_name: h.teamBName,
                score_a: h.scoreA,
                score_b: h.scoreB,
                winner_id: h.winnerId || null,
                loser_id: h.loserId || null,
                events: h.events || [],
                played_at: h.playedAt,
              }));
              insertPromises.push(supabase.from("match_history").insert(payload));
            }
            if (restoredMatch) {
              insertPromises.push(supabase.from("match_state").upsert({
                group_id: groupId,
                score_a: restoredMatch.scoreA,
                score_b: restoredMatch.scoreB,
                team_a_index: restoredMatch.teamAIndex,
                team_b_index: restoredMatch.teamBIndex,
                time_remaining: restoredMatch.timeRemaining,
                is_active: restoredMatch.isActive,
                is_paused: restoredMatch.isPaused,
                has_ended: restoredMatch.hasEnded,
                events: restoredMatch.events || [],
                config: restoredMatch.config || {},
              }));
            }
            if (restoredExpenses.length > 0) {
              const payload = restoredExpenses.map((e: any) => ({
                id: e.id,
                group_id: groupId,
                name: e.name,
                amount: e.amount,
                date: e.date,
              }));
              insertPromises.push(supabase.from("transactions").insert(payload));
            }
            insertPromises.push(supabase.from("groups").upsert({
              id: groupId,
              monthly_fee: isNaN(restoredFee) ? 5 : restoredFee,
              selected_year: isNaN(restoredYearVal) ? 2026 : restoredYearVal,
              manual_adjustment: isNaN(restoredAdjustment) ? 0 : restoredAdjustment,
              available_years: restoredAvailableYears,
              first_setup_done: restoredFirstSetup,
            }, { onConflict: "id" }));

            await Promise.all(insertPromises);
          } catch (dbErr) {
            console.error("Database upsert failed on restore:", dbErr);
          }
        } catch (restoreErr) {
          console.error("Failed to restore from local storage:", restoreErr);
        } finally {
          localStorage.removeItem(`futquina_backup_restored_${groupId}`);
          setIsDataLoaded(true);
        }
        return;
      }

      try {
        const results = await Promise.allSettled([
          supabase
            .from("players")
            .select("*")
            .eq("group_id", groupId)
            .order("name"),
          supabase.from("teams").select("*").eq("group_id", groupId),
          supabase.from("payments").select("*").eq("group_id", groupId),
          supabase.from("match_history").select("*").eq("group_id", groupId),
          supabase
            .from("match_state")
            .select("*")
            .eq("group_id", groupId)
            .maybeSingle(),
          supabase.from("transactions").select("*").eq("group_id", groupId),
          supabase.from("groups").select("*").eq("id", groupId).maybeSingle(),
        ]);

        const playersData =
          results[0].status === "fulfilled" ? results[0].value?.data : null;
        const teamsData =
          results[1].status === "fulfilled" ? results[1].value?.data : null;
        const paymentsData =
          results[2].status === "fulfilled" ? results[2].value?.data : null;
        const matchHistoryData =
          results[3].status === "fulfilled" ? results[3].value?.data : null;
        const matchStateData =
          results[4].status === "fulfilled" ? results[4].value?.data : null;
        const transactionsData =
          results[5].status === "fulfilled" ? results[5].value?.data : null;
        const groupData =
          results[6].status === "fulfilled" ? results[6].value?.data : null;

        if (playersData && playersData.length > 0) {
          const uniquePlayersMap = new Map();
          playersData.forEach((p) => {
            if (!uniquePlayersMap.has(p.id)) {
              uniquePlayersMap.set(p.id, {
                id: p.id,
                name: p.name,
                photo: p.photo || undefined,
                isAvailable: p.is_available,
                arrivedAt: p.arrived_at || undefined,
                goals: 0,
                assists: 0,
              });
            }
          });
          setPlayers(Array.from(uniquePlayersMap.values()));
        }
        if (teamsData && teamsData.length > 0) {
          const loadedTeams: Team[] = [];

          const allSameGreen =
            teamsData.length > 1 &&
            teamsData.every((t) => t.color === "#4ade80");
          const allSameBlack =
            teamsData.length > 1 &&
            teamsData.every((t) => t.color === "#1a1a1a");
          const forceRecolor = allSameGreen || allSameBlack;

          for (const t of teamsData) {
            let parsedColor = t.color;
            if (forceRecolor || !parsedColor || parsedColor === "#1a1a1a") {
              parsedColor = getNextTeamColor(loadedTeams);
            }
            loadedTeams.push({
              id: t.id,
              name: t.name,
              color: parsedColor,
              playerIds: t.player_ids || [],
              iconIdx: t.iconIdx ?? getNextTeamIconIdx(loadedTeams),
            });
          }
          setTeams(loadedTeams);
        }
        if (paymentsData && paymentsData.length > 0) {
          setPayments(
            paymentsData.map((p) => ({
              id: p.id || `${p.player_id}-${p.year}`,
              playerId: p.player_id,
              year: p.year,
              months: p.months || {},
              monthlyFee: p.monthly_fee || 0,
            })),
          );
        }
        if (matchHistoryData && matchHistoryData.length > 0) {
          setMatchHistory(
            matchHistoryData.map((h) => ({
              id: h.id,
              teamAId: h.team_a_id || undefined,
              teamBId: h.team_b_id || undefined,
              teamAName: h.team_a_name,
              teamBName: h.team_b_name,
              scoreA: h.score_a,
              scoreB: h.score_b,
              winnerId: h.winner_id,
              loserId: h.loser_id,
              events: h.events || [],
              playedAt: h.played_at,
            })),
          );
        }
        if (matchStateData) {
          setMatch({
            scoreA: matchStateData.score_a,
            scoreB: matchStateData.score_b,
            teamAIndex: matchStateData.team_a_index,
            teamBIndex: matchStateData.team_b_index,
            timeRemaining: matchStateData.time_remaining,
            isActive: matchStateData.is_active,
            isPaused: matchStateData.is_paused,
            hasEnded: matchStateData.has_ended,
            events: matchStateData.events || [],
            config: matchStateData.config || {
              duration: 15,
              playersPerTeam: 5,
              scoreLimit: 10,
            },
          });
        }
        if (transactionsData && transactionsData.length > 0) {
          setExpenses(
            transactionsData.map((t) => ({
              id: t.id,
              name: t.name,
              amount: t.amount,
              date: t.date,
            })),
          );
        }
        if (groupData) {
          if (groupData.admin_pin) setAdminPin(groupData.admin_pin);
          if (groupData.monthly_fee)
            setMonthlyFee(Number(groupData.monthly_fee));
          if (groupData.selected_year) setSelectedYear(groupData.selected_year);
          if (groupData.manual_adjustment)
            setManualAdjustment(Number(groupData.manual_adjustment));
          if (
            groupData.available_years &&
            Array.isArray(groupData.available_years)
          ) {
            setAvailableYears(groupData.available_years);
          }
        }
      } catch (err) {
        console.error("Error loading data from Supabase", err);
      } finally {
        setIsDataLoaded(true);
      }
    }
    loadData();
  }, [groupId]);

  useEffect(() => {
    if (!groupId || isPresenceMode || !isDataLoaded) return;

    const playersChannel = supabase
      .channel(`public:players:${groupId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "players",
          filter: `group_id=eq.${groupId}`,
        },
        (payload) => {
          const updatedPlayer = payload.new;
          setPlayers((prev) =>
            prev.map((p) =>
              p.id === updatedPlayer.id
                ? {
                    ...p,
                    isAvailable: updatedPlayer.is_available,
                    arrivedAt: updatedPlayer.arrived_at,
                  }
                : p,
            ),
          );
        },
      )
      .subscribe();

    const paymentsChannel = supabase
      .channel(`public:payments:${groupId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "payments",
          filter: `group_id=eq.${groupId}`,
        },
        (payload) => {
          // Just reload all payments data to keep it simple when it changes
          supabase
            .from("payments")
            .select("*")
            .eq("group_id", groupId)
            .then(({ data }) => {
              if (data) {
                setPayments(
                  data.map((p) => ({
                    id: p.id,
                    playerId: p.player_id,
                    month: p.month,
                    year: p.year,
                    amount: p.amount,
                    paidAt: p.paid_at,
                    isHalf: p.is_half,
                  })),
                );
              }
            });
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(playersChannel);
      supabase.removeChannel(paymentsChannel);
    };
  }, [groupId, isPresenceMode, isDataLoaded]);

  useSupabaseArraySync(
    "players",
    groupId,
    players,
    (p: any, gid) => ({
      id: p.id,
      group_id: gid,
      name: p.name,
      photo: p.photo || null,
      is_available: p.isAvailable,
      arrived_at: p.arrivedAt || null,
      goalkeeper: p.isGoalkeeper || false,
      level: p.level ?? 3,
    }),
    isDataLoaded,
    isPresenceMode,
    !!selectedMatchId,
    selectedMatchId || "",
  );

  useSupabaseArraySync(
    "teams",
    groupId,
    teams,
    (t: any, gid) => ({
      id: t.id,
      group_id: gid,
      name: t.name,
      color: t.color,
      player_ids: t.playerIds,
      iconIdx: t.iconIdx || 0,
    }),
    isDataLoaded,
    isPresenceMode,
    !!selectedMatchId,
    selectedMatchId || "",
  );

  useSupabaseArraySync(
    "payments",
    groupId,
    payments,
    (p: any, gid) => ({
      id: p.id || `${p.playerId}-${p.year}`,
      group_id: gid,
      player_id: p.playerId,
      year: p.year,
      months: p.months,
      monthly_fee: p.monthlyFee,
    }),
    isDataLoaded,
    isPresenceMode,
    !!selectedMatchId,
    selectedMatchId || "",
  );

  useSupabaseArraySync(
    "match_history",
    groupId,
    matchHistory,
    (m: any, gid) => ({
      id: m.id,
      group_id: gid,
      team_a_id: m.teamAId || null,
      team_b_id: m.teamBId || null,
      team_a_name: m.teamAName,
      team_b_name: m.teamBName,
      score_a: m.scoreA,
      score_b: m.scoreB,
      winner_id: m.winnerId || null,
      loser_id: m.loserId || null,
      events: m.events,
      played_at: m.playedAt,
    }),
    isDataLoaded,
    isPresenceMode,
    !!selectedMatchId,
    selectedMatchId || "",
  );

  useSupabaseArraySync(
    "transactions",
    groupId,
    expenses,
    (e: any, gid) => ({
      id: e.id,
      group_id: gid,
      name: e.name,
      amount: e.amount,
      date: e.date,
    }),
    isDataLoaded,
    isPresenceMode,
    !!selectedMatchId,
    selectedMatchId || "",
  );

  useEffect(() => {
    if (!isDataLoaded || isPresenceMode) return;
    supabase
      .from("groups")
      .upsert(
        {
          id: groupId,
          monthly_fee: monthlyFee,
          selected_year: selectedYear,
          manual_adjustment: manualAdjustment,
          available_years: availableYears,
          admin_pin: adminPin,
        },
        { onConflict: "id" },
      )
      .then();
  }, [
    monthlyFee,
    selectedYear,
    manualAdjustment,
    availableYears,
    adminPin,
    isDataLoaded,
    groupId,
    isPresenceMode,
  ]);

  useEffect(() => {
    if (!isDataLoaded || isPresenceMode) return;
    supabase
      .from("match_state")
      .upsert({
        group_id: groupId,
        score_a: match.scoreA,
        score_b: match.scoreB,
        team_a_index: match.teamAIndex,
        team_b_index: match.teamBIndex,
        time_remaining: match.timeRemaining,
        is_active: match.isActive,
        is_paused: match.isPaused,
        has_ended: match.hasEnded,
        events: match.events,
        config: match.config,
      })
      .then();
  }, [match, isDataLoaded, groupId, isPresenceMode]);

  // Automatically clear teams and reset match if no players exist or all are unavailable
  useEffect(() => {
    if (
      players.length === 0 ||
      (players.length > 0 && players.every((p) => !p.isAvailable))
    ) {
      if (teams.length > 0) {
        setTeams([]);
      }
      if (
        match.isActive ||
        match.teamAIndex !== -1 ||
        match.teamBIndex !== -1
      ) {
        setMatch((prev) => ({
          ...prev,
          isActive: false,
          isPaused: true,
          teamAIndex: -1,
          teamBIndex: -1,
          scoreA: 0,
          scoreB: 0,
        }));
      }
    }
  }, [
    players,
    teams.length,
    match.isActive,
    match.teamAIndex,
    match.teamBIndex,
  ]);

  useEffect(() => {
    if (isSwitchingMatch.current) return;
    const key = selectedMatchId
      ? `futquina_players_${groupId}_${selectedMatchId}`
      : `futquina_players_${groupId}`;
    safeLocalStorage.setItem(key, JSON.stringify(players));
  }, [players, selectedMatchId, groupId]);

  useEffect(() => {
    if (isSwitchingMatch.current) return;
    const key = selectedMatchId
      ? `futquina_teams_${groupId}_${selectedMatchId}`
      : `futquina_teams_${groupId}`;
    safeLocalStorage.setItem(key, JSON.stringify(teams));
    // Automatically remove empty teams
    if (teams.some((t) => (t.playerIds?.length || 0) === 0)) {
      setTeams((prev) => {
        const filtered = prev.filter((t) => (t.playerIds?.length || 0) > 0);
        if (prev.length <= 2 && filtered.length < 2) return prev;
        return filtered;
      });
    }
  }, [teams, selectedMatchId, groupId]);

  useEffect(() => {
    if (isSwitchingMatch.current) return;
    const key = selectedMatchId
      ? `futquina_match_${groupId}_${selectedMatchId}`
      : `futquina_match_${groupId}`;
    safeLocalStorage.setItem(key, JSON.stringify(match));
  }, [match, selectedMatchId, groupId]);

  useEffect(() => {
    if (isSwitchingMatch.current) return;
    const key = selectedMatchId
      ? `futquina_last_result_${groupId}_${selectedMatchId}`
      : `futquina_last_result_${groupId}`;
    safeLocalStorage.setItem(key, JSON.stringify(lastMatchResult));
  }, [lastMatchResult, selectedMatchId, groupId]);

  useEffect(() => {
    if (isSwitchingMatch.current) return;
    const key = selectedMatchId
      ? `futquina_payments_${groupId}_${selectedMatchId}`
      : `futquina_payments_${groupId}`;
    safeLocalStorage.setItem(key, JSON.stringify(payments));
  }, [payments, selectedMatchId, groupId]);

  useEffect(() => {
    if (isSwitchingMatch.current) return;
    const key = selectedMatchId
      ? `futquina_session_player_ids_${groupId}_${selectedMatchId}`
      : `futquina_session_player_ids_${groupId}`;
    safeLocalStorage.setItem(key, JSON.stringify(sessionPlayerIds));
  }, [sessionPlayerIds, selectedMatchId, groupId]);

  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_monthly_fee_${groupId}`,
      monthlyFee.toString(),
    );
  }, [monthlyFee]);

  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_selected_year_${groupId}`,
      selectedYear.toString(),
    );
  }, [selectedYear]);

  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_available_years_${groupId}`,
      JSON.stringify(availableYears),
    );
  }, [availableYears]);

  useEffect(() => {
    if (isSwitchingMatch.current) return;
    const key = selectedMatchId
      ? `futquina_match_history_${groupId}_${selectedMatchId}`
      : `futquina_match_history_${groupId}`;
    safeLocalStorage.setItem(key, JSON.stringify(matchHistory));
  }, [matchHistory, selectedMatchId, groupId]);

  useEffect(() => {
    safeLocalStorage.setItem(
      `futquina_has_randomized_${groupId}`,
      String(hasRandomized),
    );
  }, [hasRandomized]);

  useEffect(() => {
    setIsPrintMode(false);
    if (currentScreen === "finance") {
      setFinanceSubScreen("balanco");
    } else {
      setFinanceSubScreen("menu");
    }
    if (currentScreen === "ranking") {
      setRankingTab("geral");
      if (mainRef.current) {
        mainRef.current.scrollTop = 0;
      }
    }
  }, [currentScreen]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  useEffect(() => {
    if (matchConfigOpenId) {
      const timer = setTimeout(() => {
        setMatchConfigOpenId(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [matchConfigOpenId]);

  // Sync com tabelas externas (jogadores e presencas)
  useEffect(() => {
    const fetchExternos = async () => {
      const { data: jogs } = await supabase
        .from("jogadores")
        .select("*")
        .order("created_at", { ascending: false });
      const { data: pres } = await supabase
        .from("presencas")
        .select("*")
        .order("created_at", { ascending: false });

      if (jogs) setJogadoresExternos(jogs);
      if (pres) setPresencasExternas(pres);
    };

    fetchExternos();

    // Realtime subscriptions
    const jogsChannel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "jogadores" },
        (payload) => {
          fetchExternos();
        },
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "presencas" },
        (payload) => {
          fetchExternos();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(jogsChannel);
    };
  }, []);

  useEffect(() => {
    if (showEqualizerModal && equalizerData) {
      const targetTeam = teams[equalizerData.targetTeamIndex];
      const otherTeam = teams[equalizerData.otherTeamIndex];

      if (
        targetTeam &&
        otherTeam &&
        targetTeam.playerIds.length === otherTeam.playerIds.length
      ) {
        setShowEqualizerModal(false);
      }
    }
  }, [teams, showEqualizerModal, equalizerData]);

  // --- Match Timer ---
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (match.isActive && !match.isPaused) {
      interval = setInterval(() => {
        setMatch((prev) => {
          if (prev.timeRemaining <= 0) return prev;
          const nextTime = prev.timeRemaining - 1;
          if (nextTime <= 0) {
            return { ...prev, timeRemaining: 0, isPaused: true };
          }
          return { ...prev, timeRemaining: nextTime };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [match.isActive, match.isPaused]);

  // --- Match End Detection ---
  useEffect(() => {
    if (
      match.isActive &&
      !match.hasEnded &&
      !tieBreaker.showSelection &&
      players.length > 0
    ) {
      const isTimeUp = match.timeRemaining === 0;
      const isGoalLimitReached =
        match.scoreA >= match.config.goalLimit ||
        match.scoreB >= match.config.goalLimit;

      if (isTimeUp || isGoalLimitReached) {
        finishMatch();
      }
    }
  }, [
    match.timeRemaining,
    match.scoreA,
    match.scoreB,
    match.isActive,
    match.hasEnded,
    match.config.goalLimit,
    teams,
    match.teamAIndex,
    match.teamBIndex,
    tieBreaker.showSelection,
    players.length,
  ]);

  // --- Handlers ---

  useEffect(() => {
    localStorage.setItem(
      `futquina_match_history_${groupId}`,
      JSON.stringify(matchHistory),
    );
  }, [matchHistory]);

  useEffect(() => {
    localStorage.setItem(
      `futquina_has_randomized_${groupId}`,
      String(hasRandomized),
    );
  }, [hasRandomized]);

  const formatTimeAgo = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "AGORA";
    if (minutes < 60) return `${minutes} MINUTOS ATRÁS`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} HORAS ATRÁS`;
    const days = Math.floor(hours / 24);
    if (days === 1) return "1 DIA ATRÁS";
    return `${days} DIAS ATRÁS`;
  };

  const addPlayer = (
    name: string,
    photo?: string,
    via: "manual" | "contact" = "manual",
  ) => {
    if (!name.trim()) return;
    const trimmedName = name.trim();

    const isAnyAvailable = players.some((p) => p.isAvailable);
    const newPlayer: Player = {
      id: generateId(),
      name: trimmedName,
      goals: 0,
      assists: 0,
      isAvailable: isAnyAvailable,
      photo: photo,
      arrivedAt: isAnyAvailable ? Date.now() : undefined,
      stars: 3,
      addedVia: via,
    };
    setPlayers((prev) => [...prev, newPlayer]);
    if (isAnyAvailable) {
      setSessionPlayerIds((prev) => [...prev, newPlayer.id]);
    }
    setToast({
      message: `${trimmedName} adicionado com sucesso!`,
      type: "success",
    });
    setTimeout(() => setToast(null), 3000);
  };

  const handleImportContacts = async () => {
    if (!("contacts" in navigator && "select" in (navigator as any).contacts)) {
      setToast({
        message: "Seu dispositivo não suporta importação de contatos.",
        type: "info",
      });
      return;
    }

    try {
      const props = ["name", "icon"];
      const opts = { multiple: true };
      const contacts = await (navigator as any).contacts.select(props, opts);

      if (contacts && contacts.length > 0) {
        let addedCount = 0;
        for (const contact of contacts) {
          const contactName = contact.name && contact.name[0];
          if (contactName) {
            let photoUrl = undefined;
            if (contact.icon && contact.icon.length > 0) {
              const blob = contact.icon[0];
              const originalPhoto = await new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result as string);
                reader.readAsDataURL(blob);
              });
              photoUrl = await resizeImage(originalPhoto);
            }
            addPlayer(contactName, photoUrl, "contact");
            addedCount++;
          }
        }
        if (addedCount > 0) {
          setToast({
            message: `${addedCount} contatos importados!`,
            type: "success",
          });
        }
      }
    } catch (err) {
      console.error("Contact Picker Error:", err);
    }
  };

  const addBulkPlayers = (text: string) => {
    setIsAiProcessing(true);
    setShouldPulseConfig(true);

    setTimeout(() => {
      const lines = text.split(/[\r\n,]+/);
      const newPlayers: Player[] = [];
      const existingPlayerIdsToUpdate: string[] = [];

      // Patterns to ignore: dates (DD/MM, DD-MM), times (HH:MM), common titles/descriptions
      const ignorePatterns = [
        /\d{1,2}[\/\-]\d{1,2}/, // Dates
        /\d{1,2}:\d{2}/, // Times
        /^(lista|jogadores|convocados|presença|confirmados|futebol|pelada|horário|data|local|valor)/i, // Titles
        /^\s*$/, // Empty lines
      ];

      const existingNamesMap = new Map<string, any>(players.map((p) => [p.name.toLowerCase(), p]));

      lines.forEach((line, i) => {
        // Remove common prefixes: "1.", "1-", "-", "*", "•", spaces
        let name = line.replace(/^[\d\.\-\*\•\s]+/, "").trim();

        // Check if the line should be ignored
        const shouldIgnore = ignorePatterns.some((pattern) =>
          pattern.test(name),
        );

        if (name && name.length > 1 && !shouldIgnore) {
          const lowerName = name.toLowerCase();
          if (existingNamesMap.has(lowerName)) {
            const existing = existingNamesMap.get(lowerName);
            if (existing && existing.id !== "new") {
              existingPlayerIdsToUpdate.push(existing.id);
              // Mark as "new" to prevent duplicate additions in the same paste
              existingNamesMap.set(lowerName, { id: "new" } as any);
            }
          } else {
            newPlayers.push({
              id: generateId(),
              name,
              goals: 0,
              assists: 0,
              isAvailable: true,
              arrivedAt: Date.now() + i,
              stars: 3,
              addedVia: "whatsapp",
            });
            existingNamesMap.set(lowerName, { id: "new" } as any);
          }
        }
      });

      let updated = false;

      if (newPlayers.length > 0 || existingPlayerIdsToUpdate.length > 0) {
        setPlayers((prev) => {
          const updatedPlayers = prev.map((p) =>
            existingPlayerIdsToUpdate.includes(p.id)
              ? { ...p, isAvailable: true, arrivedAt: p.arrivedAt || Date.now() }
              : p
          );
          return [...updatedPlayers, ...newPlayers];
        });

        setSessionPlayerIds((prev) => {
          const newIds = newPlayers.map((p) => p.id);
          const existingIdsToAdd = existingPlayerIdsToUpdate.filter(
            (id) => !prev.includes(id)
          );
          return [...prev, ...newIds, ...existingIdsToAdd];
        });

        updated = true;
      }

      if (newPlayers.length > 0) {
        setShowWhatsAppInfoModal(true);
      } else if (updated) {
        setToast({ message: "Lista colada com sucesso!", type: "success" });
        setTimeout(() => setToast(null), 2000);
      } else {
        setToast({ message: "Nenhum jogador encontrado na lista.", type: "info" });
        setTimeout(() => setToast(null), 3000);
      }

      setIsAiProcessing(false);
    }, 1500);
  };

  const finishQuickAddPlayer = (name: string, teamIndex: number) => {
    const newPlayer: Player = {
      id: generateId(),
      name: name.trim(),
      goals: 0,
      assists: 0,
      isAvailable: true,
      arrivedAt: Date.now(),
      stars: 3,
      addedVia: "manual",
    };
    setPlayers((prev) => [...prev, newPlayer]);
    setSessionPlayerIds((prev) => [...prev, newPlayer.id]);

    const team = teams[teamIndex];
    if (team && team.playerIds.length >= match.config.playersPerTeam) {
      const nextLetter = String.fromCharCode(65 + teams.length);
      const iconIdx = getNextTeamIconIdx(teams);
      const newTeam = {
        id: generateId(),
        name: `Time ${nextLetter}`,
        playerIds: [newPlayer.id],
        iconIdx,
        color: getNextTeamColor(teams),
      };
      setTeams((prev) => [...prev, newTeam]);
      setToast({
        message: `✅ Time formado! Próximo: ${newTeam.name}`,
        type: "info",
      });
      setShowQuickAddPlayerModal(teams.length);
    } else {
      setTeams((prev) =>
        prev.map((t, idx) =>
          idx === teamIndex
            ? { ...t, playerIds: [...t.playerIds, newPlayer.id] }
            : t,
        ),
      );
    }

    const input = document.getElementById(
      "quick-player-name",
    ) as HTMLInputElement;
    if (input) input.value = "";
  };

  const quickAddPlayer = (name: string, teamIndex: number) => {
    if (!name.trim()) return;
    const trimmedName = name.trim();

    if (
      match.isActive &&
      (teamIndex === match.teamAIndex || teamIndex === match.teamBIndex)
    ) {
      setToast({
        message:
          "Não é possível adicionar jogadores a times em campo. Finalize a partida primeiro.",
        type: "gray",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    finishQuickAddPlayer(trimmedName, teamIndex);
  };

  const addPlayerToTeam = (playerId: string, teamIndex: number) => {
    if (
      match.isActive &&
      (teamIndex === match.teamAIndex || teamIndex === match.teamBIndex)
    ) {
      setToast({
        message: "Não é possível adicionar jogadores a times em campo.",
        type: "gray",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    const team = teams[teamIndex];
    if (team && team.playerIds.length >= match.config.playersPerTeam) {
      const nextLetter = String.fromCharCode(65 + teams.length);
      const iconIdx = getNextTeamIconIdx(teams);
      const newTeam = {
        id: generateId(),
        name: `Time ${nextLetter}`,
        playerIds: [playerId],
        iconIdx,
        color: getNextTeamColor(teams),
      };
      setTeams((prev) => [...prev, newTeam]);
      setToast({
        message: `✅ Time formado! Próximo: ${newTeam.name}`,
        type: "info",
      });
      setShowQuickAddPlayerModal(teams.length);
    } else {
      setTeams((prev) =>
        prev.map((t, idx) =>
          idx === teamIndex
            ? { ...t, playerIds: [...t.playerIds, playerId] }
            : t,
        ),
      );
    }
  };

  // Ensure match indices are always valid
  useEffect(() => {
    if (teams.length === 0) {
      if (match.teamAIndex !== -1 || match.teamBIndex !== -1) {
        setMatch((prev) => ({ ...prev, teamAIndex: -1, teamBIndex: -1 }));
      }
      return;
    }

    setMatch((prev) => {
      let newA = prev.teamAIndex;
      let newB = prev.teamBIndex;

      if (newA >= teams.length) newA = 0;
      if (newB >= teams.length) newB = teams.length > 1 ? 1 : 0;

      if (newA === newB && teams.length > 1) {
        newB = (newA + 1) % teams.length;
      }

      if (newA !== prev.teamAIndex || newB !== prev.teamBIndex) {
        return { ...prev, teamAIndex: newA, teamBIndex: newB };
      }
      return prev;
    });
  }, [teams.length]);

  const removePlayer = (id: string) => {
    const playerToRemove = players.find((p) => p.id === id);
    if (!playerToRemove) return;

    setPlayers(players.filter((p) => p.id !== id));
    setSessionPlayerIds((prev) => prev.filter((pid) => pid !== id));
    setPayments((prev) => prev.filter((p) => p.playerId !== id));

    setTeams((prev) => {
      // Regroup all players from all teams to maintain order and fill gap
      const allPlayerIds = prev
        .flatMap((t) => t.playerIds)
        .filter((pid) => pid !== id);
      const limit = match.config.playersPerTeam;
      const newTeams: Team[] = [];

      for (let i = 0; i < allPlayerIds.length; i += limit) {
        const chunk = allPlayerIds.slice(i, i + limit);
        const teamIndex = Math.floor(i / limit);
        const existingTeam = prev[teamIndex];

        newTeams.push({
          id: existingTeam?.id || `team-regrouped-${teamIndex}-${generateId()}`,
          name: `Time ${String.fromCharCode(65 + teamIndex)}`,
          playerIds: chunk,
          iconIdx: existingTeam?.iconIdx ?? getNextTeamIconIdx(newTeams),
          color: existingTeam?.color ?? getNextTeamColor(newTeams),
        });
      }

      // Update match indices
      setMatch((prevMatch) => {
        let newA = prevMatch.teamAIndex;
        let newB = prevMatch.teamBIndex;
        if (newA >= newTeams.length) newA = -1;
        if (newB >= newTeams.length) newB = -1;
        return { ...prevMatch, teamAIndex: newA, teamBIndex: newB };
      });

      return newTeams;
    });
  };

  const removePlayerFromTeam = (
    tIndex: number,
    playerId: string,
    cascade: boolean = true,
  ) => {
    const isWinner =
      lastMatchResult &&
      ((teams[tIndex]?.id === lastMatchResult.teamAId &&
        lastMatchResult.scoreA > lastMatchResult.scoreB) ||
        (teams[tIndex]?.id === lastMatchResult.teamBId &&
          lastMatchResult.scoreB > lastMatchResult.scoreA));

    if (isWinner && cascade) {
      setReplacingPlayer({ teamIndex: tIndex, removedPlayerId: playerId });
      return;
    }

    if (!cascade) {
      setTeams((prev) => {
        const newTeams = [...prev].map((t) => ({
          ...t,
          playerIds: [...t.playerIds],
        }));
        if (newTeams[tIndex]) {
          newTeams[tIndex].playerIds = newTeams[tIndex].playerIds.filter(
            (id) => id !== playerId,
          );
        }
        return newTeams.filter((t) => t.playerIds.length > 0);
      });
      return;
    }

    setTeams((prev) => {
      // For Ordem de Chegada, we always regroup from start to maintain the queue
      const allPlayerIds = prev
        .flatMap((t) => t.playerIds)
        .filter((id) => id !== playerId);
      const limit = match.config.playersPerTeam;
      const newTeams: Team[] = [];

      for (let i = 0; i < allPlayerIds.length; i += limit) {
        const chunk = allPlayerIds.slice(i, i + limit);
        const teamIndex = Math.floor(i / limit);
        const existingTeam = prev[teamIndex];

        newTeams.push({
          id: existingTeam?.id || `team-cascade-${teamIndex}-${generateId()}`,
          name: `Time ${String.fromCharCode(65 + teamIndex)}`,
          playerIds: chunk,
          iconIdx: existingTeam?.iconIdx ?? getNextTeamIconIdx(newTeams),
          color: existingTeam?.color ?? getNextTeamColor(newTeams),
        });
      }

      // Update match indices
      setMatch((prevMatch) => {
        let newA = prevMatch.teamAIndex;
        let newB = prevMatch.teamBIndex;
        if (newA >= newTeams.length) newA = -1;
        if (newB >= newTeams.length) newB = -1;
        return { ...prevMatch, teamAIndex: newA, teamBIndex: newB };
      });

      return newTeams;
    });
  };

  const updatePlayerAbsences = (id: string, absences: number) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, absences } : p)),
    );
  };

  const updatePlayerName = (id: string, newName: string) => {
    if (!newName.trim()) return;
    const trimmedName = newName.trim();
    const currentPlayer = players.find((p) => p.id === id);
    if (!currentPlayer) return;

    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name: trimmedName } : p)),
    );
    setEditingPlayerId(null);
  };

  const updatePlayerStars = (id: string, stars: number) => {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, stars } : p)));
  };

  const updatePlayerPhoto = (id: string, photo: string) => {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, photo } : p)));
  };

  const addAvailablePlayersToTeams = () => {
    const availablePlayers = players.filter(
      (p) => !teams.some((t) => t.playerIds.includes(p.id)),
    );
    if (availablePlayers.length === 0) {
      setToast({
        message: "Não há mais jogadores para adicionar.",
        type: "warning",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setTeams((prevTeams) => {
      let currentTeams = [...prevTeams].map((t) => ({
        ...t,
        playerIds: [...t.playerIds],
      }));
      const limit = match.config.playersPerTeam;

      availablePlayers.forEach((player) => {
        let lastTeam = currentTeams[currentTeams.length - 1];
        if (lastTeam && lastTeam.playerIds.length < limit) {
          lastTeam.playerIds.push(player.id);
        } else {
          const nextLetter = String.fromCharCode(65 + currentTeams.length);
          const iconIdx = getNextTeamIconIdx(currentTeams);
          const color = getNextTeamColor(currentTeams);
          currentTeams.push({
            id: generateId(),
            name: `Time ${nextLetter}`,
            playerIds: [player.id],
            iconIdx,
            color,
          });
        }
      });
      return currentTeams;
    });
    setToast({
      message: `${availablePlayers.length} jogadores adicionados aos times!`,
      type: "info",
    });
    setTimeout(() => setToast(null), 3000);
  };

  const addTeam = () => {
    const nextLetter = String.fromCharCode(65 + teams.length);
    const iconIdx = getNextTeamIconIdx(teams);
    setTeams([
      ...teams,
      {
        id: generateId(),
        name: `Time ${nextLetter}`,
        playerIds: [],
        iconIdx,
        color: getNextTeamColor(teams),
      },
    ]);

    setToast({ message: `Novo time criado: Time ${nextLetter}`, type: "info" });

    // Scroll to bottom after state update
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollTo({
          top: mainRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const removeTeam = (index: number) => {
    if (
      match.isActive &&
      (index === match.teamAIndex || index === match.teamBIndex)
    ) {
      setToast({
        message: "Não é possível remover um time que está em campo.",
        type: "warning",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setTeams(teams.filter((_, i) => i !== index));
  };

  const moveTeam = (index: number, direction: "up" | "down") => {
    if (direction === "up" && index === 0) return;
    if (direction === "down" && index === teams.length - 1) return;

    const newIndex = direction === "up" ? index - 1 : index + 1;
    const newTeams = [...teams];
    const [movedTeam] = newTeams.splice(index, 1);
    newTeams.splice(newIndex, 0, movedTeam);

    // Update match indices to follow the teams
    let newTeamAIndex = match.teamAIndex;
    let newTeamBIndex = match.teamBIndex;

    if (match.teamAIndex === index) newTeamAIndex = newIndex;
    else if (match.teamAIndex === newIndex) newTeamAIndex = index;

    if (match.teamBIndex === index) newTeamBIndex = newIndex;
    else if (match.teamBIndex === newIndex) newTeamBIndex = index;

    setTeams(newTeams);
    setMatch((prev) => ({
      ...prev,
      teamAIndex: newTeamAIndex,
      teamBIndex: newTeamBIndex,
    }));
  };

  const randomizeTeams = (playersPerTeam: number) => {
    setFlashingTeamIds([]);
    const availablePlayers = players.filter((p) => p.isAvailable);
    if (playersPerTeam <= 0 || availablePlayers.length === 0) return;

    const shuffled = [...availablePlayers].sort(() => 0.5 - Math.random());

    // Update arrivedAt timestamps to match shuffled order
    const now = Date.now();
    setPlayers((prev) =>
      prev.map((p) => {
        const shuffleIdx = shuffled.findIndex((s) => s.id === p.id);
        if (shuffleIdx !== -1) {
          return { ...p, arrivedAt: now + shuffleIdx };
        }
        return p;
      }),
    );

    const newTeams: Team[] = [];

    // Create full teams
    let currentIndex = 0;
    let teamCount = 0;

    while (currentIndex + playersPerTeam <= shuffled.length) {
      const teamPlayers = shuffled.slice(
        currentIndex,
        currentIndex + playersPerTeam,
      );
      const teamLetter = String.fromCharCode(65 + teamCount);
      const iconIdx = getNextTeamIconIdx(newTeams);
      newTeams.push({
        id: generateId(),
        name: `Time ${teamLetter}`,
        playerIds: teamPlayers.map((p) => p.id),
        iconIdx,
        color: getNextTeamColor(newTeams),
      });
      currentIndex += playersPerTeam;
      teamCount++;
    }

    // Handle leftovers - "criará automaticamente outra caixa de time com o jogador que sobrou da divisão"
    if (currentIndex < shuffled.length) {
      const leftoverPlayers = shuffled.slice(currentIndex);
      const teamLetter = String.fromCharCode(65 + teamCount);
      const iconIdx = getNextTeamIconIdx(newTeams);
      newTeams.push({
        id: generateId(),
        name: `Time ${teamLetter}`,
        playerIds: leftoverPlayers.map((p) => p.id),
        iconIdx,
        color: getNextTeamColor(newTeams),
      });
    }

    // Ensure at least 2 teams for the match
    while (newTeams.length < 2) {
      const teamLetter = String.fromCharCode(65 + newTeams.length);
      const iconIdx = getNextTeamIconIdx(newTeams);
      newTeams.push({
        id: generateId(),
        name: `Time ${teamLetter}`,
        playerIds: [],
        iconIdx,
        color: getNextTeamColor(newTeams),
      });
    }

    const { newTeams: resolvedTeams } = resolveMultipleGoalkeepers(
      newTeams,
      players,
      match?.config?.playersPerTeam,
    );
    setTeams(resolvedTeams);
    setMatch((prev) => ({
      ...prev,
      teamAIndex: 0,
      teamBIndex: 1,
    }));
    setShowRandomizeModal(false);
  };

  const resetAllStats = () => {
    setPlayers((prev) => prev.map((p) => ({ ...p, goals: 0, assists: 0 })));
    setToast({ message: "🔄 Histórico resetado", type: "info" });
    setShowResetStatsConfirm(false);
  };

  const registerGoal = (
    team: "A" | "B",
    playerId: string,
    assistId?: string,
  ) => {
    const newEvent: MatchEvent = {
      id: generateId(),
      type: "goal",
      team,
      playerId,
      assistId,
      timestamp: match.config.duration * 60 - match.timeRemaining,
    };

    setMatch((prev) => {
      const newScoreA = team === "A" ? prev.scoreA + 1 : prev.scoreA;
      const newScoreB = team === "B" ? prev.scoreB + 1 : prev.scoreB;

      // Check goal limit
      const isFinished =
        (team === "A" && newScoreA >= prev.config.goalLimit) ||
        (team === "B" && newScoreB >= prev.config.goalLimit);

      return {
        ...prev,
        scoreA: newScoreA,
        scoreB: newScoreB,
        events: [...prev.events, newEvent],
        isPaused: isFinished ? true : prev.isPaused,
        timeRemaining: isFinished ? prev.timeRemaining : prev.timeRemaining,
      };
    });

    const hasWhatsAppPlayersInTeams = teams.some((t) =>
      t.playerIds.some((id) => {
        const p = players.find((p) => p.id === id);
        return p?.addedVia === "whatsapp";
      }),
    );

    // Update player stats
    if (!hasWhatsAppPlayersInTeams) {
      setPlayers((prev) =>
        prev.map((p) => {
          if (p.id === playerId) return { ...p, goals: p.goals + 1 };
          if (p.id === assistId) return { ...p, assists: p.assists + 1 };
          return p;
        }),
      );
    }

    playCheer();

    // Trigger Goal Animation
    const scorer = players.find((p) => p.id === playerId);
    const teamName =
      team === "A"
        ? teams[match.teamAIndex]?.name
        : teams[match.teamBIndex]?.name;

    if (scorer) {
      sounds.playGoal();
      setShowGoalAnimation({
        scorerName: scorer.name,
        teamName: teamName || (team === "A" ? "Time A" : "Time B"),
        scorerPhoto: scorer.photo,
      });

      setTimeout(() => {
        setShowGoalAnimation(null);
      }, 3000);
    }

    setShowEventModal(null);
    setSelectedScorerId(null);
  };

  function finalizeMatch(
    sA: number,
    sB: number,
    tAIdx: number,
    tBIdx: number,
    tieBreakerWinnerIndex?: number,
  ) {
    const scoreA = sA;
    const scoreB = sB;
    const teamAIndex = tAIdx;
    const teamBIndex = tBIdx;

    // Determine winner and loser for stats/history
    let winnerIndex = teamAIndex;
    let loserIndex = teamBIndex;

    if (tieBreakerWinnerIndex !== undefined) {
      winnerIndex = tieBreakerWinnerIndex;
      loserIndex =
        tieBreakerWinnerIndex === teamAIndex ? teamBIndex : teamAIndex;
    } else if (scoreB > scoreA) {
      winnerIndex = teamBIndex;
      loserIndex = teamAIndex;
    } else if (scoreA === scoreB) {
      // In case of draw, no clear winner/loser for colors
      winnerIndex = -1;
      loserIndex = -1;
    }

    // Determine who stays and who leaves for queue rotation
    let teamToStayIndex = teamAIndex;
    let teamToLeaveIndex = teamBIndex;

    if (tieBreakerWinnerIndex !== undefined) {
      teamToStayIndex = tieBreakerWinnerIndex;
      teamToLeaveIndex =
        tieBreakerWinnerIndex === teamAIndex ? teamBIndex : teamAIndex;
    } else if (scoreB > scoreA) {
      teamToStayIndex = teamBIndex;
      teamToLeaveIndex = teamAIndex;
    } else if (scoreA === scoreB) {
      teamToStayIndex = teamAIndex;
      teamToLeaveIndex = -1; // Draw: no one leaves automatically
    }

    const result: MatchResult = {
      id: generateId(),
      teamAName: teams[teamAIndex]?.name || "Time A",
      teamBName: teams[teamBIndex]?.name || "Time B",
      teamAColor:
        (fixedColors.enabled && fixedColors.teamA) ||
        teams[teamAIndex]?.color ||
        TEAM_COLORS[0],
      teamBColor:
        (fixedColors.enabled && fixedColors.teamB) ||
        teams[teamBIndex]?.color ||
        TEAM_COLORS[1],
      teamAId: teams[teamAIndex]?.id,
      teamBId: teams[teamBIndex]?.id,
      teamAPlayerIds: [...(teams[teamAIndex]?.playerIds || [])],
      teamBPlayerIds: [...(teams[teamBIndex]?.playerIds || [])],
      scoreA,
      scoreB,
      teamAIndex,
      teamBIndex,
      winnerIndex,
      loserIndex,
      winnerId: winnerIndex !== -1 ? teams[winnerIndex]?.id : null,
      loserId: loserIndex !== -1 ? teams[loserIndex]?.id : null,
      events: match.events,
      timestamp: Date.now(),
      tieBreakerWinnerId:
        tieBreakerWinnerIndex !== undefined
          ? teams[tieBreakerWinnerIndex]?.id
          : null,
      duration: match.config.duration,
    };

    setLastMatchResult(result);
    setMatchHistory((prev) => [result, ...prev].slice(0, 10));

    const hasWhatsAppPlayersInTeams = teams.some((t) =>
      t.playerIds.some((id) => {
        const p = players.find((p) => p.id === id);
        return p?.addedVia === "whatsapp";
      }),
    );

    // Update matchesPlayed and arrivedAt for all participants
    setPlayers((prev) => {
      const now = Date.now();
      const leavingTeamPlayerIds =
        teamToLeaveIndex !== -1 ? teams[teamToLeaveIndex]?.playerIds || [] : [];
      const stayingTeamPlayerIds =
        teamToStayIndex !== -1 ? teams[teamToStayIndex]?.playerIds || [] : [];
      const stayBase = now - 12 * 60 * 60 * 1000;

      return prev.map((p, idx) => {
        let updatedPlayer = { ...p };
        if (
          !hasWhatsAppPlayersInTeams &&
          (result.teamAPlayerIds.includes(p.id) ||
            result.teamBPlayerIds.includes(p.id))
        ) {
          updatedPlayer.matchesPlayed = (p.matchesPlayed || 0) + 1;
        }

        // If this player is in the staying team, move them to the very front of the queue
        if (stayingTeamPlayerIds.includes(p.id)) {
          updatedPlayer.arrivedAt = stayBase + idx;
        }

        // If this player is in the leaving team, move them to the end of the queue by updating arrivedAt
        // This ensures the autoCompleteTeams logic (which sorts by arrivedAt) respects the rotation
        if (leavingTeamPlayerIds.includes(p.id)) {
          updatedPlayer.arrivedAt = now + idx;
        }

        return updatedPlayer;
      });
    });

    setMatch((prev) => ({
      ...prev,
      isActive: false,
      isPaused: true,
      hasEnded: true,
    }));

    // Move leaving team to the end of the queue
    if (teamToLeaveIndex !== -1) {
      setTeams((prevTeams) => {
        let newTeams = [...prevTeams];
        const teamAId = newTeams[teamAIndex]?.id;
        const teamBId = newTeams[teamBIndex]?.id;

        newTeams = newTeams.map((t) => {
          if (t.id === teamAId)
            return {
              ...t,
              lastMatchStatus:
                scoreA === scoreB
                  ? "Empate"
                  : scoreA > scoreB
                    ? "Vencedor"
                    : "Derrota",
            };
          if (t.id === teamBId)
            return {
              ...t,
              lastMatchStatus:
                scoreA === scoreB
                  ? "Empate"
                  : scoreB > scoreA
                    ? "Vencedor"
                    : "Derrota",
            };
          return t;
        });

        // Set status based on tie breaker if it happened
        if (tieBreakerWinnerIndex !== undefined) {
          const winnerId = teams[tieBreakerWinnerIndex]?.id;
          const loserId =
            teams[
              tieBreakerWinnerIndex === teamAIndex ? teamBIndex : teamAIndex
            ]?.id;
          newTeams = newTeams.map((t) => {
            if (t.id === winnerId) return { ...t, lastMatchStatus: "Vencedor" };
            if (t.id === loserId) return { ...t, lastMatchStatus: "Derrota" };
            return t;
          });
        }

        const leavingTeam = newTeams.splice(teamToLeaveIndex, 1)[0];

        // --- GOALKEEPER FIXED LOGIC ---
        const activeGoalkeepers = players.filter(
          (p) => p.isGoalkeeper && p.isAvailable,
        );
        const totalGoalkeepers = activeGoalkeepers.length;

        const finalStayIndex =
          teamToStayIndex > teamToLeaveIndex
            ? teamToStayIndex - 1
            : teamToStayIndex;
        const nextTeamIndex = finalStayIndex === 0 ? 1 : 0;
        let finalLeavingTeam = { ...leavingTeam };

        let allTeamsNow = [...newTeams, { ...finalLeavingTeam }];

        const getGks = (team: Team) =>
          team?.playerIds.filter(
            (id) => players.find((p) => p.id === id)?.isGoalkeeper,
          ) || [];
        const getLinePlayers = (team: Team) =>
          team?.playerIds.filter(
            (id) => !players.find((p) => p.id === id)?.isGoalkeeper,
          ) || [];

        // Distribute GKs: A team cannot have > 1 GK if possible
        const { newTeams: resolvedTeams } = resolveMultipleGoalkeepers(
          allTeamsNow,
          players,
          match?.config?.playersPerTeam,
        );
        allTeamsNow = resolvedTeams;

        // Ensure active teams (finalStayIndex and nextTeamIndex) have a GK if available
        // According to instructions: if next team has no GK, pull from next available team below
        [finalStayIndex, nextTeamIndex].forEach((activeIdx) => {
          if (!allTeamsNow[activeIdx]) return;
          if (getGks(allTeamsNow[activeIdx]).length === 0) {
            // Find next team with GK starting from other teams
            for (let j = 0; j < allTeamsNow.length; j++) {
              if (j === activeIdx) continue;
              // Don't steal from the other playing team
              if (
                j ===
                (activeIdx === finalStayIndex ? nextTeamIndex : finalStayIndex)
              )
                continue;

              const queueGks = getGks(allTeamsNow[j]);
              if (queueGks.length > 0) {
                const gkToMove = queueGks[0];
                const activeLine = getLinePlayers(allTeamsNow[activeIdx]);
                if (activeLine.length > 0) {
                  const lineToSwap = activeLine[0];
                  // Move GK to active team (index 0)
                  allTeamsNow[activeIdx].playerIds = [
                    gkToMove,
                    ...allTeamsNow[activeIdx].playerIds.filter(
                      (id) => id !== lineToSwap,
                    ),
                  ];
                  // Move line player to source team
                  allTeamsNow[j].playerIds = allTeamsNow[j].playerIds.map(
                    (id) => (id === gkToMove ? lineToSwap : id),
                  );
                  break;
                } else if (
                  match?.config?.playersPerTeam !== undefined &&
                  allTeamsNow[activeIdx].playerIds.length <
                    match.config.playersPerTeam
                ) {
                  allTeamsNow[activeIdx].playerIds = [
                    gkToMove,
                    ...allTeamsNow[activeIdx].playerIds,
                  ];
                  allTeamsNow[j].playerIds = allTeamsNow[j].playerIds.filter(
                    (id) => id !== gkToMove,
                  );
                  break;
                }
              }
            }
          }
        });

        // Final sort for all teams to ensure GKs are at index 0
        allTeamsNow = allTeamsNow.map((t) => {
          const gks = getGks(t);
          const line = getLinePlayers(t);
          return { ...t, playerIds: [...gks, ...line] };
        });

        finalLeavingTeam = allTeamsNow.pop()!;
        newTeams = allTeamsNow;

        newTeams.push(finalLeavingTeam);

        // Identify which team just "subiu" to the match selection
        const joinedTeamId = newTeams[nextTeamIndex]?.id;

        if (joinedTeamId) {
          newTeams = newTeams.map((t) => {
            if (t.id === joinedTeamId && t.id !== teamAId && t.id !== teamBId) {
              return { ...t, lastMatchStatus: "Subiu" };
            }
            return t;
          });
        }

        return newTeams;
      });

      setMatch((prev) => {
        const newStayIndex =
          teamToStayIndex > teamToLeaveIndex
            ? teamToStayIndex - 1
            : teamToStayIndex;
        const nextTeamIndex = newStayIndex === 0 ? 1 : 0;
        return {
          ...prev,
          teamAIndex: newStayIndex,
          teamBIndex: nextTeamIndex,
        };
      });
    } else {
      // Draw case, neither leaves automatically, but we still need to set their status
      setTeams((prevTeams) => {
        let newTeams = [...prevTeams];
        const teamAId = newTeams[teamAIndex]?.id;
        const teamBId = newTeams[teamBIndex]?.id;

        newTeams = newTeams.map((t) => {
          if (t.id === teamAId || t.id === teamBId) {
            return { ...t, lastMatchStatus: "Empate" };
          }
          return t;
        });
        return newTeams;
      });
    }

    // Visual effects
    const winners: string[] = [];
    const teamA = teams[match.teamAIndex];
    const teamB = teams[match.teamBIndex];

    if (teamA && teamB) {
      if (tieBreakerWinnerIndex !== undefined) {
        winners.push(teams[tieBreakerWinnerIndex].id);
      } else if (scoreA > scoreB) {
        winners.push(teamA.id);
      } else if (scoreB > scoreA) {
        winners.push(teamB.id);
      }
      setFlashingTeamIds(winners);

      setTimeout(() => {
        setFlashingTeamIds([]);
      }, 10000);
    }

    // Scroll to teams list
    setTimeout(() => {
      const teamsList = document.getElementById("teams-list-section");
      if (teamsList) {
        teamsList.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (mainRef.current) {
        mainRef.current.scrollTo({
          top: mainRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 300);

    setTeamsTab("proximos");
    playWhistle();
  }

  function finishMatch() {
    sounds.playFinishMatch();
    const scoreA = match.scoreA;
    const scoreB = match.scoreB;
    const teamAIndex = match.teamAIndex;
    const teamBIndex = match.teamBIndex;

    // Check for draw to initiate tie breaker
    if (scoreA === scoreB) {
      setTieBreaker({
        showSelection: true,
        type: "none",
        penalties: {
          teamA: (teams[teamAIndex]?.playerIds || []).map((pid) => ({
            playerId: pid,
            success: null,
          })),
          teamB: (teams[teamBIndex]?.playerIds || []).map((pid) => ({
            playerId: pid,
            success: null,
          })),
          isFinished: false,
          winnerId: null,
        },
        lottery: {
          isSpinning: false,
          winnerId: null,
        },
      });
      return;
    }

    finalizeMatch(scoreA, scoreB, teamAIndex, teamBIndex);
  }

  const resetMatch = () => {
    setFlashingTeamIds([]);
    setMatch((prev) => ({
      ...prev,
      scoreA: 0,
      scoreB: 0,
      timeRemaining: prev.config.duration * 60,
      events: [],
      isPaused: true,
      isActive: true,
      hasEnded: false,
    }));
    setToast({ message: "🔄 Partida reiniciada", type: "info" });
    setTimeout(() => setToast(null), 3000);
  };

  const startNextMatch = (
    teamAIdx: number,
    teamBIdx: number,
    force: boolean = false,
  ) => {
    setFlashingTeamIds([]);
    if (teamAIdx === -1 || teamBIdx === -1) {
      setToast({
        message: "📋 Selecione os times do confronto",
        type: "warning",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }
    if (teamAIdx === teamBIdx) {
      setToast({ message: "❌ Escolha times diferentes!", type: "warning" });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    const teamA = teams[teamAIdx];
    const teamB = teams[teamBIdx];

    if (teamA.playerIds.length !== teamB.playerIds.length) {
      const targetIdx =
        teamA.playerIds.length < teamB.playerIds.length ? teamAIdx : teamBIdx;
      const otherIdx = targetIdx === teamAIdx ? teamBIdx : teamAIdx;
      setEqualizerData({
        targetTeamIndex: targetIdx,
        requiredCount: teams[otherIdx].playerIds.length,
        otherTeamIndex: otherIdx,
      });
      setShowEqualizerModal(true);
      return;
    }

    setTeams((prev) =>
      prev.map((team) => {
        const { lastMatchStatus, ...rest } = team;
        return rest;
      }),
    );

    setMatch((prev) => ({
      ...prev,
      isActive: true,
      isPaused: true,
      hasEnded: false,
      timeRemaining: prev.config.duration * 60,
      scoreA: 0,
      scoreB: 0,
      events: [],
      startTime: Date.now(),
      teamAIndex: teamAIdx,
      teamBIndex: teamBIdx,
    }));
    setShowMatchSettingsModal(false);
    setCurrentScreen("teams");
    setTeamsTab("historico");
  };

  const handleTieBreakerTypeSelect = (
    type: "penalties" | "lottery" | "none",
  ) => {
    setTieBreaker((prev) => ({ ...prev, type }));
  };

  const handlePenaltyToggle = (team: "A" | "B", index: number) => {
    setTieBreaker((prev) => {
      const nextPenalties = { ...prev.penalties };
      const list =
        team === "A" ? [...nextPenalties.teamA] : [...nextPenalties.teamB];

      // Cycle: null -> true -> false -> null
      const current = list[index].success;
      let next: boolean | null = null;
      if (current === null) next = true;
      else if (current === true) next = false;
      else next = null;

      list[index] = { ...list[index], success: next };

      if (team === "A") nextPenalties.teamA = list;
      else nextPenalties.teamB = list;

      return { ...prev, penalties: nextPenalties };
    });
  };

  const handleLotterySpin = () => {
    if (tieBreaker.lottery.isSpinning) return;

    setTieBreaker((prev) => ({
      ...prev,
      lottery: { ...prev.lottery, isSpinning: true },
    }));

    setTimeout(() => {
      const winnerIdx =
        Math.random() > 0.5 ? match.teamAIndex : match.teamBIndex;
      const winnerId = teams[winnerIdx]?.id;
      setTieBreaker((prev) => ({
        ...prev,
        lottery: { isSpinning: false, winnerId: winnerId || null },
      }));
    }, 3000);
  };

  const handleTieBreakerConfirm = () => {
    const scoreA = match.scoreA;
    const scoreB = match.scoreB;
    const teamAIndex = match.teamAIndex;
    const teamBIndex = match.teamBIndex;

    let winnerIndex: number | undefined = undefined;

    if (tieBreaker.type === "penalties") {
      const teamAGoals = tieBreaker.penalties.teamA.filter(
        (p) => p.success === true,
      ).length;
      const teamBGoals = tieBreaker.penalties.teamB.filter(
        (p) => p.success === true,
      ).length;
      if (teamAGoals > teamBGoals) winnerIndex = teamAIndex;
      else if (teamBGoals > teamAGoals) winnerIndex = teamBIndex;
      // If still equal, we don't finalize or let user decide?
      // The button is disabled if equal in the UI
    } else if (tieBreaker.type === "lottery") {
      if (tieBreaker.lottery.winnerId === teams[teamAIndex]?.id)
        winnerIndex = teamAIndex;
      else if (tieBreaker.lottery.winnerId === teams[teamBIndex]?.id)
        winnerIndex = teamBIndex;
    }

    setTieBreaker((prev) => ({ ...prev, showSelection: false }));
    finalizeMatch(scoreA, scoreB, teamAIndex, teamBIndex, winnerIndex);
  };

  const handleBothLeaveMatch = (firstToQueue: "A" | "B") => {
    const scoreA = match.scoreA;
    const scoreB = match.scoreB;
    const teamAIndex = match.teamAIndex;
    const teamBIndex = match.teamBIndex;

    const teamAId = teams[teamAIndex]?.id;
    const teamBId = teams[teamBIndex]?.id;

    if (!teamAId || !teamBId) return;

    // Create draw result
    const result = {
      id: generateId(),
      teamAName: teams[teamAIndex]?.name || "Time A",
      teamBName: teams[teamBIndex]?.name || "Time B",
      teamAColor:
        (fixedColors.enabled && fixedColors.teamA) ||
        teams[teamAIndex]?.color ||
        TEAM_COLORS[0],
      teamBColor:
        (fixedColors.enabled && fixedColors.teamB) ||
        teams[teamBIndex]?.color ||
        TEAM_COLORS[1],
      teamAId: teams[teamAIndex]?.id,
      teamBId: teams[teamBIndex]?.id,
      scoreA,
      scoreB,
      teamAIndex,
      teamBIndex,
      winnerIndex: -1,
      loserIndex: -1,
      winnerId: null,
      loserId: null,
      events: match.events,
      teamAPlayerIds: teams[teamAIndex]?.playerIds || [],
      teamBPlayerIds: teams[teamBIndex]?.playerIds || [],
      timestamp: Date.now(),
      tieBreakerWinnerId: null,
    };

    setLastMatchResult(result);
    setMatchHistory((prev) => [result, ...prev].slice(0, 10));

    const hasWhatsAppPlayersInTeams = teams.some((t) =>
      t.playerIds.some((id) => {
        const p = players.find((p) => p.id === id);
        return p?.addedVia === "whatsapp";
      }),
    );

    // Update matchesPlayed and arrivedAt for all participants
    setPlayers((prev) => {
      const now = Date.now();
      const tAPlayerIds = teams[teamAIndex]?.playerIds || [];
      const tBPlayerIds = teams[teamBIndex]?.playerIds || [];

      return prev.map((p, idx) => {
        let updatedPlayer = { ...p };
        if (tAPlayerIds.includes(p.id) || tBPlayerIds.includes(p.id)) {
          if (!hasWhatsAppPlayersInTeams) {
            updatedPlayer.matchesPlayed = (p.matchesPlayed || 0) + 1;
          }
          // In handleBothLeaveMatch, both teams go to the end of the line
          updatedPlayer.arrivedAt = now + idx;
        }
        return updatedPlayer;
      });
    });

    setMatch((prev) => ({
      ...prev,
      isActive: false,
      isPaused: true,
      hasEnded: true,
    }));

    setTeams((prevTeams) => {
      let newTeams = [...prevTeams];
      const tA = newTeams.find((t) => t.id === teamAId);
      const tB = newTeams.find((t) => t.id === teamBId);

      if (!tA || !tB) return prevTeams;

      // Update statuses
      newTeams = newTeams.map((t) => {
        if (t.id === teamAId || t.id === teamBId) {
          return { ...t, lastMatchStatus: "Empate" };
        }
        return t;
      });

      // Remove both
      newTeams = newTeams.filter((t) => t.id !== teamAId && t.id !== teamBId);

      // Add both to the end in the chosen order
      if (firstToQueue === "A") {
        newTeams.push(tA);
        newTeams.push(tB);
      } else {
        newTeams.push(tB);
        newTeams.push(tA);
      }

      // Mark the ones who moved up
      const joinedTeamAId = newTeams[0]?.id;
      const joinedTeamBId = newTeams[1]?.id;

      newTeams = newTeams.map((t) => {
        if (
          (t.id === joinedTeamAId || t.id === joinedTeamBId) &&
          t.id !== teamAId &&
          t.id !== teamBId
        ) {
          return { ...t, lastMatchStatus: "Subiu" };
        }
        return t;
      });

      return newTeams;
    });

    setMatch((prev) => ({
      ...prev,
      teamAIndex: 0,
      teamBIndex: 1,
    }));

    setTieBreaker((prev) => ({ ...prev, showSelection: false }));
    setToast({
      message: "Ambos os times foram para o fim da fila.",
      type: "success",
    });
  };

  const togglePayment = (playerId: string, field: string, amount: number) => {
    setPayments((prev) => {
      const existing = prev.find(
        (p) => p.playerId === playerId && p.year === selectedYear,
      );
      if (existing) {
        const newPayments = [...prev];
        const index = prev.indexOf(existing);
        const newMonths = { ...existing.months };
        newMonths[field] = newMonths[field] === amount ? 0 : amount;
        newPayments[index] = {
          ...existing,
          months: newMonths,
          monthlyFee: amount,
        };
        return newPayments;
      } else {
        const newRecord: PaymentRecord = {
          id: `${playerId}-${selectedYear}`,
          playerId,
          year: selectedYear,
          months: { [field]: amount },
          monthlyFee: amount,
        };
        return [...prev, newRecord];
      }
    });
  };

  const seedFinanceData = () => {
    const data = [
      { name: "Anastácio", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Anderson", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Bahia", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Fabiano", ref2025: 0, Jan: 0, Fev: 5, Mar: 5 },
      { name: "Fiuza", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Gabriel Silva", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Gabriel Alves", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Guilherme", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Gustavo Gralha", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Henrique", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Isaac", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Jadiel", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Leonardo", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Lenadro", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Lucas Silva", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Luiz", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Lukinhas", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Maranhão", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Marcelo", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Matheus Vieira", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Neto", ref2025: 25, Jan: 5, Fev: 5, Mar: 5 },
      { name: "PH", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
      { name: "Rodri", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Renato", ref2025: 0, Jan: 0, Fev: 5, Mar: 5 },
      { name: "Reni", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Rodolfo", ref2025: 0, Jan: 0, Fev: 0, Mar: 5 },
      { name: "Sales", ref2025: 0, Jan: 0, Fev: 5, Mar: 5 },
      { name: "Wanderson", ref2025: 0, Jan: 5, Fev: 5, Mar: 5 },
    ];

    const newPlayers = [...players];
    const newPayments = [...payments];

    data.forEach((item) => {
      let fPlayer = newPlayers.find((p) => p.name === item.name);
      if (!fPlayer) {
        fPlayer = {
          id: generateId(),
          name: item.name,
          level: 3,
          isGoalkeeper: false,
          goals: 0,
          assists: 0,
          isAvailable: true,
        };
        newPlayers.push(fPlayer);
      }

      const existingPaymentIdx = newPayments.findIndex(
        (p) => p.playerId === fPlayer!.id,
      );
      const paymentRecord: PaymentRecord = {
        id: `${fPlayer.id}-2026`,
        playerId: fPlayer.id,
        year: 2026,
        monthlyFee: 5,
        months: {
          Jan: item.Jan,
          Fev: item.Fev,
          Mar: item.Mar,
        },
      };

      if (existingPaymentIdx >= 0) {
        newPayments[existingPaymentIdx] = paymentRecord;
      } else {
        newPayments.push(paymentRecord);
      }
    });

    setPlayers(newPlayers);
    setPayments(newPayments);
    setToast({
      message: "Dados da imagem importados com sucesso!",
      type: "info",
    });
    setTimeout(() => setToast(null), 3000);
  };

  const addYear = () => {
    const nextYear = Math.max(...availableYears) + 1;
    setAvailableYears((prev) => [...prev, nextYear]);
    setSelectedYear(nextYear);
    setToast({ message: `Ano ${nextYear} adicionado!`, type: "info" });
    setTimeout(() => setToast(null), 2000);
  };

  const MONTHS = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  const isMatchTimePassed = useMemo(() => {
    if (orgProSettings.matchDayOfWeek === null || !orgProSettings.appliedDate)
      return false;
    const now = new Date();

    const applied = new Date(orgProSettings.appliedDate);
    const expirationDate = new Date(applied);

    let daysToAdd = orgProSettings.matchDayOfWeek - applied.getDay();
    if (daysToAdd < 0) {
      daysToAdd += 7;
    }

    // Expiration is at 23:59:59 of the match day
    expirationDate.setDate(expirationDate.getDate() + daysToAdd);
    expirationDate.setHours(23, 59, 59, 999);

    return now.getTime() > expirationDate.getTime();
  }, [orgProSettings.matchDayOfWeek, orgProSettings.appliedDate]);

  useEffect(() => {
    if (isMatchTimePassed) {
      setOrgProSettings((prev) => ({
        ...prev,
        maxAbsences: null,
        requirePaymentUpToDate: false,
        matchDayOfWeek: null,
        matchTime: "",
        appliedDate: null,
      }));
      setOrgProData({});
      setToast({
        message:
          "A data da pelada passou! As exigências e presenças foram redefinidas.",
        type: "info",
      });
      setTimeout(() => setToast(null), 3000);
    }
  }, [isMatchTimePassed]);

  // --- Memoized Computations for Performance ---
  const sortedPlayersByName = useMemo(
    () => [...players].sort((a, b) => a.name.localeCompare(b.name)),
    [players],
  );
  const sortedPlayersByAssists = useMemo(
    () => [...players].sort((a, b) => (b.assists || 0) - (a.assists || 0)),
    [players],
  );
  const sessionPlayersSorted = useMemo(() => {
    return players
      .filter((p) => sessionPlayerIds.includes(p.id))
      .sort((a, b) => {
        if (a.isAvailable && !b.isAvailable) return -1;
        if (!a.isAvailable && b.isAvailable) return 1;
        if (a.isAvailable && b.isAvailable)
          return (a.arrivedAt || 0) - (b.arrivedAt || 0);
        return a.name.localeCompare(b.name);
      });
  }, [players, sessionPlayerIds]);
  const sortedExpenses = useMemo(
    () => [...(expenses || [])].sort((a, b) => b.date - a.date),
    [expenses],
  );
  const sortedPlayersByTotal = useMemo(
    () =>
      [...players].sort((a, b) => b.goals + b.assists - (a.goals + a.assists)),
    [players],
  );
  const sortedRankingPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      if (rankingTab === "geral")
        return b.goals + b.assists - (a.goals + a.assists);
      if (rankingTab === "artilharia") return b.goals - a.goals;
      if (rankingTab === "assistencias") return b.assists - a.assists;
      return 0;
    });
  }, [players, rankingTab]);
  const sortedTeamAPlayers = useMemo(() => {
    const teamA = teams[match.teamAIndex];
    if (!teamA) return [];
    return [...teamA.playerIds].sort((a, b) => {
      const playerA = players.find((p) => p.id === a);
      const playerB = players.find((p) => p.id === b);
      if (playerA?.isGoalkeeper && !playerB?.isGoalkeeper) return -1;
      if (!playerA?.isGoalkeeper && playerB?.isGoalkeeper) return 1;
      return (playerA?.arrivedAt || 0) - (playerB?.arrivedAt || 0);
    });
  }, [teams, match.teamAIndex, players]);
  const sortedTeamBPlayers = useMemo(() => {
    const teamB = teams[match.teamBIndex];
    if (!teamB) return [];
    return [...teamB.playerIds].sort((a, b) => {
      const playerA = players.find((p) => p.id === a);
      const playerB = players.find((p) => p.id === b);
      if (playerA?.isGoalkeeper && !playerB?.isGoalkeeper) return -1;
      if (!playerA?.isGoalkeeper && playerB?.isGoalkeeper) return 1;
      return (playerA?.arrivedAt || 0) - (playerB?.arrivedAt || 0);
    });
  }, [teams, match.teamBIndex, players]);

  const activeMatch = useMemo(() => {
    return selectedMatchId ? scheduledMatches.find((m) => m.id === selectedMatchId) : null;
  }, [selectedMatchId, scheduledMatches]);

  const getMatchTimeDisplay = (m: ScheduledMatch) => {
    const today = new Date();
    const mDate = new Date(m.date);
    const isToday = today.getDate() === mDate.getDate() &&
                    today.getMonth() === mDate.getMonth() &&
                    today.getFullYear() === mDate.getFullYear();
    const timeStr = m.time || "20:00";
    if (isToday) {
      return `Hoje às ${timeStr}`;
    }
    const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    return `${daysOfWeek[mDate.getDay()]} às ${timeStr}`;
  };

  const formatMatchDateImageStyle = (timestamp: number, timeStr?: string) => {
    const d = new Date(timestamp);
    const weekdays = [
      "DOMINGO",
      "SEGUNDA-FEIRA",
      "TERÇA-FEIRA",
      "QUARTA-FEIRA",
      "QUINTA-FEIRA",
      "SEXTA-FEIRA",
      "SÁBADO",
    ];
    const months = [
      "JANEIRO",
      "FEVEREIRO",
      "MARÇO",
      "ABRIL",
      "MAIO",
      "JUNHO",
      "JULHO",
      "AGOSTO",
      "SETEMBRO",
      "OUTUBRO",
      "NOVEMBRO",
      "DEZEMBRO",
    ];
    const weekday = weekdays[d.getDay()];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const time = timeStr || "08:00";
    return `${weekday}, ${day} DE ${month} ÀS ${time}`;
  };

  const currentNetBalance = useMemo(() => {
    const totalRev = (payments || []).reduce(
      (acc: number, p: PaymentRecord) =>
        acc +
        Object.values(p?.months || {}).reduce(
          (mAcc: number, mVal) => mAcc + Number(mVal || 0),
          0,
        ),
      0,
    ) + manualAdjustment;
    const totalExp = (expenses || []).reduce(
      (acc: number, e) => acc + (e.amount || 0),
      0,
    );
    return totalRev - totalExp;
  }, [payments, manualAdjustment, expenses]);

  const visiblePlayers = useMemo(() => {
    const timePassed = isMatchTimePassed;
    const currentMonth = MONTHS[new Date().getMonth()];
    const currentYear = new Date().getFullYear();

    return players.filter((player) => {
      const isOrgPro = !!orgProData[player.id];

      if (isOrgPro && timePassed) return false;

      if (
        orgProSettings.maxAbsences !== null &&
        (player.absences || 0) > orgProSettings.maxAbsences
      ) {
        return false;
      }

      if (orgProSettings.requirePaymentUpToDate) {
        const record = payments.find(
          (p) => p.playerId === player.id && p.year === currentYear,
        );
        const isUpToDate = record && record.months[currentMonth] > 0;
        if (!isUpToDate) return false;
      }

      return true;
    });
  }, [players, orgProSettings, orgProData, payments, isMatchTimePassed]);

  // --- UI Components ---

  const NavItem = ({
    screen,
    icon: Icon,
    label,
  }: {
    screen: Screen;
    icon: any;
    label: string;
  }) => {
    const isActive = currentScreen === screen;
    const screens: Screen[] = ["players", "teams", "ranking", "finance"];
    return (
      <button
        onClick={() => {
          const currentIndex = screens.indexOf(currentScreen);
          const targetIndex = screens.indexOf(screen);
          if (currentIndex !== -1 && targetIndex !== -1) {
            setSwipeDirection(targetIndex > currentIndex ? -1 : 1);
          }
          setCurrentScreen(screen);
        }}
        className="flex flex-col items-center justify-center flex-1 py-1 transition-all duration-300 relative group"
      >
        <motion.div
          animate={isActive ? { scale: 1.1, y: -2 } : { scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
            isActive
              ? "text-zinc-900 dark:text-white"
              : "text-black/70 dark:text-white/60 hover:text-zinc-900 dark:text-white"
          }`}
        >
          <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
        </motion.div>
        <div className="flex justify-center w-full">
          <span
            className={`text-[7px] uppercase tracking-[0.2em] mt-1 font-black transition-all duration-300 relative z-10 text-center ${
              isActive
                ? "text-zinc-900 dark:text-white opacity-100"
                : "text-zinc-900 dark:text-white opacity-60 group-hover:opacity-100"
            }`}
          >
            {label}
          </span>
        </div>
      </button>
    );
  };

  if (isPresenceMode) {
    const orgParam = urlParams.get("org");
    let orgData: any = {};
    if (orgParam) {
      try {
        orgData = JSON.parse(atob(orgParam));
      } catch (e) {
        // ignore
      }
    }

    return (
      <div className="h-[100dvh] bg-brand-dark text-zinc-900 dark:text-white font-sans overflow-y-auto flex flex-col p-6 items-center justify-center">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-12 left-0 right-0 z-[200] flex justify-center px-6 pointer-events-none"
            >
              <motion.div
                className={`pointer-events-auto flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-xl transition-all group`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm dark:shadow-lg ${
                    toast.type === "success"
                      ? "bg-emerald-500/20 text-[#59b823] border border-emerald-500/20"
                      : toast.type === "warning"
                        ? "bg-amber-100 dark:bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/20"
                        : "bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10"
                  }`}
                >
                  {toast.type === "success" && <PiCheckCircleBold size={16} />}
                  {toast.type === "warning" && (
                    <PiWarningCircleBold size={16} />
                  )}
                  {toast.type === "gray" && <PiGearBold size={16} />}
                  {toast.type === "info" && <PiRocketBold size={16} />}
                </div>
                <div className="flex flex-col pr-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white leading-none mb-[1px]">
                    Notificação
                  </p>
                  <span className="text-[11px] font-medium text-black/70 dark:text-white/60 leading-tight max-w-[200px]">
                    {toast.message}
                  </span>
                </div>
                <button
                  onClick={() => setToast(null)}
                  className="ml-auto w-6 h-6 flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 rounded-full transition-colors shrink-0"
                >
                  <div className="opacity-40 group-hover:opacity-100 transition-opacity text-zinc-900 dark:text-white">
                    <PiXBold size={10} />
                  </div>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="bg-[#1E3D2F] w-full max-w-sm rounded-xl p-6 relative overflow-hidden border border-black/10 dark:border-white/10">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <GiCrown size={120} />
          </div>
          <h1 className="text-2xl font-black uppercase tracking-tighter mb-2 relative z-10">
            Marcar Presença
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-[#E3D39E]/80 font-bold mb-8 relative z-10">
            Confirme sua participação na pelada
          </p>

          {!presencePlayerId ? (
            <div className="space-y-4 relative z-10">
              <label className="text-[10px] font-black uppercase tracking-widest text-black/60 dark:text-white/50">
                Selecione seu nome
              </label>
              <div className="grid grid-cols-1 gap-2 max-h-80 overflow-y-auto custom-scrollbar pr-2">
                {sortedPlayersByName.map((p) => (
                  <button
                    key={`pres-${p.id}`}
                    onClick={() => {
                      setPresencePlayerId(p.id);
                      setPresenceCode("");
                    }}
                    className="p-3 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10 text-left hover:bg-black/10 dark:bg-white/10 transition-colors flex justify-between items-center"
                  >
                    <span className="font-bold text-sm tracking-tight">
                      {p.name}
                    </span>
                    {p.isAvailable && (
                      <span className="text-[8px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full uppercase font-black tracking-widest ml-2">
                        Confirmado
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 bg-black/5 dark:bg-white/5 p-3 rounded-xl border border-black/10 dark:border-white/10">
                <button
                  onClick={() => {
                    setPresencePlayerId("");
                    setPresenceCode("");
                  }}
                  className="w-8 h-8 flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-full hover:bg-black/50 dark:hover:bg-white/50 dark:bg-black/20 dark:bg-white/20 transition-all text-black/70 dark:text-white/60"
                >
                  <ChevronRight size={16} className="rotate-180" />
                </button>
                <div className="flex-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-black/60 dark:text-white/50 block">
                    Jogador selecionado
                  </label>
                  <span className="font-bold text-lg leading-tight uppercase tracking-tight">
                    {players.find((p) => p.id === presencePlayerId)?.name}
                  </span>
                </div>
              </div>

              {(() => {
                const currentMonth = MONTHS[new Date().getMonth()];
                const currentYear = new Date().getFullYear();
                const playerPayment = payments.find(
                  (p) =>
                    p.playerId === presencePlayerId && p.year === currentYear,
                );
                const isUpToDate =
                  playerPayment &&
                  (playerPayment.months[currentMonth] || 0) > 0;
                const requiresCode = !isUpToDate;
                const playerOrgCode =
                  orgData && orgData[presencePlayerId]
                    ? orgData[presencePlayerId]
                    : null;

                return (
                  <div className="space-y-4">
                    {requiresCode ? (
                      <div className="space-y-4">
                        <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl">
                          <label className="text-[9px] font-black uppercase tracking-widest text-amber-300 block mb-1">
                            Acesso Restrito
                          </label>
                          <p className="text-[10px] font-medium text-amber-200/80 leading-relaxed">
                            Parece que você não possui pagamentos recentes.
                            Digite sua Chave de Acesso para confirmar presença.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <input
                            type="text"
                            placeholder="Telefone ou PIN"
                            value={presenceCode}
                            onChange={(e) => setPresenceCode(e.target.value)}
                            className="w-full bg-black/50 dark:bg-white/50 dark:bg-black/20 border border-black/20 dark:border-white/20 rounded-xl px-4 py-4 text-sm font-bold text-zinc-900 dark:text-white focus:border-[#E3D39E] focus:ring-1 focus:ring-[#E3D39E] outline-none transition-all placeholder:font-normal placeholder:opacity-50"
                          />
                        </div>
                        <button
                          onClick={() => {
                            if (!playerOrgCode) {
                              setToast({
                                message:
                                  "Organização não definiu sua chave. Fale com um admin.",
                                type: "warning",
                              });
                              return;
                            }
                            if (presenceCode.trim() !== playerOrgCode) {
                              setToast({
                                message: "Chave incorreta!",
                                type: "warning",
                              });
                              return;
                            }
                            const now = Date.now();
                            supabase
                              .from("players")
                              .update({ is_available: true, arrived_at: now })
                              .eq("id", presencePlayerId)
                              .then(() => {
                                setPlayers((prev) =>
                                  prev.map((p) =>
                                    p.id === presencePlayerId
                                      ? {
                                          ...p,
                                          isAvailable: true,
                                          arrivedAt: now,
                                        }
                                      : p,
                                  ),
                                );
                                setToast({
                                  message: "Presença confirmada com sucesso!",
                                  type: "success",
                                });
                                setTimeout(() => setPresencePlayerId(""), 2000);
                              });
                          }}
                          className="w-full bg-[#E3D39E] text-black font-black uppercase tracking-widest py-4 rounded-xl shadow-lg hover:bg-white active:scale-95 transition-all text-xs"
                        >
                          Verificar e Confirmar
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6 text-center py-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                        <div className="w-16 h-16 bg-emerald-500/20 text-[#59b823] rounded-full flex items-center justify-center mx-auto shadow-inner shadow-emerald-500/20">
                          <IoCheckmarkCircle size={32} />
                        </div>
                        <div>
                          <p className="text-[#59b823] font-black uppercase tracking-widest text-[10px] mb-1">
                            Status Liberado
                          </p>
                          <p className="text-[10px] text-black/60 dark:text-white/50 uppercase tracking-widest font-bold">
                            Mensalidade em Dia
                          </p>
                        </div>
                        <div className="px-4 pb-4">
                          <button
                            onClick={() => {
                              const now = Date.now();
                              supabase
                                .from("players")
                                .update({ is_available: true, arrived_at: now })
                                .eq("id", presencePlayerId)
                                .then(() => {
                                  setPlayers((prev) =>
                                    prev.map((p) =>
                                      p.id === presencePlayerId
                                        ? {
                                            ...p,
                                            isAvailable: true,
                                            arrivedAt: now,
                                          }
                                        : p,
                                    ),
                                  );
                                  setToast({
                                    message: "Presença confirmada!",
                                    type: "success",
                                  });
                                  setTimeout(
                                    () => setPresencePlayerId(""),
                                    2000,
                                  );
                                });
                            }}
                            className="w-full bg-emerald-500 text-zinc-900 dark:text-white font-black uppercase tracking-widest py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all text-xs"
                          >
                            Confirmar Presença
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`h-[100dvh] ${isPrintMode ? "bg-white text-black" : "bg-white dark:bg-[#020510] text-zinc-900 dark:text-zinc-100"} font-sans overflow-hidden flex flex-col transition-colors duration-500 relative ${theme === "dark" ? "dark" : ""}`}
    >
      {/* Aurora Mesh Gradient Background Elements */}
      {!isPrintMode && theme === "dark" && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#1e3a8a]/20 blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#0ea5e9]/10 blur-[120px]" />
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#3b82f6]/10 blur-[90px]" />
        </div>
      )}

      {/* Logo Animation Overlay */}
      <AnimatePresence>
        {showLogoAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm flex flex-col items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-[280px] p-8 rounded-[24px] bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center space-y-6"
            >
              <SpinningBall size="lg" />
              <div className="text-center flex flex-col items-center">
                <h1 className="text-xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">
                  Sorteando
                </h1>
                <p className="text-[10px] font-bold text-black/60 dark:text-white/50 uppercase tracking-widest mt-1">
                  Aguarde...
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expense Modal */}
      <AnimatePresence>
        {showExpenseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            onClick={() => setShowExpenseModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="w-full max-w-[280px] rounded-[24px] overflow-hidden shadow-2xl bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-white dark:bg-white/[0.03] pt-8 pb-6 px-6 text-center relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />

                <button
                  onClick={() => setShowExpenseModal(false)}
                  className="absolute top-4 right-4 p-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-black/70 dark:text-white/60 hover:text-zinc-900 dark:text-white transition-all cursor-pointer"
                >
                  <X size={14} />
                </button>

                <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none relative z-10 mt-4">
                  Nova Despesa
                </h3>
                <p className="text-[8px] text-black/60 dark:text-white/50 font-black mt-1.5 uppercase tracking-[0.2em] relative z-10">
                  GESTÃO FINANCEIRA
                </p>
              </div>

              <div className="p-4 space-y-4 bg-white dark:bg-transparent">
                <div>
                  <label className="text-[8px] font-black uppercase tracking-[0.15em] text-black/60 dark:text-white/50 mb-1 block">
                    Nome da Despesa
                  </label>
                  <input
                    autoFocus
                    value={newExpense.name}
                    onChange={(e) =>
                      setNewExpense((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Aluguel da quadra"
                    className="w-full h-10 px-3 rounded-xl outline-none bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:border-[#34d399] focus:bg-black/10 dark:bg-white/10 transition-all text-xs"
                  />
                </div>
                <div>
                  <label className="text-[8px] font-black uppercase tracking-[0.15em] text-black/60 dark:text-white/50 mb-1 block">
                    Valor (R$)
                  </label>
                  <input
                    type="number"
                    value={newExpense.amount}
                    onChange={(e) =>
                      setNewExpense((prev) => ({
                        ...prev,
                        amount: e.target.value,
                      }))
                    }
                    placeholder="0.00"
                    className="w-full h-10 px-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl outline-none focus:border-[#34d399] focus:bg-black/10 dark:bg-white/10 transition-all text-xs text-zinc-900 dark:text-white"
                  />
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <button
                    onClick={() => {
                      if (!newExpense.name || !newExpense.amount) return;
                      setExpenses((prev) => [
                        ...prev,
                        {
                          id: generateId(),
                          name: newExpense.name,
                          amount: parseInt(newExpense.amount),
                          date: Date.now(),
                        },
                      ]);
                      setNewExpense({ name: "", amount: "" });
                      setShowExpenseModal(false);
                      setToast({
                        message: "Despesa adicionada!",
                        type: "success",
                      });
                      setTimeout(() => setToast(null), 3000);
                    }}
                    className="w-full h-10 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-lg shadow-blue-800/20 hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center"
                  >
                    Confirmar Despesa
                  </button>

                  <button
                    onClick={() => setShowExpenseModal(false)}
                    className="w-full h-10 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-black/10 dark:bg-white/10 active:scale-95 cursor-pointer flex items-center justify-center"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showArrivalStepGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setShowArrivalStepGuide(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="w-full max-w-[280px] rounded-[24px] overflow-hidden shadow-2xl bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden w-full bg-transparent">
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipeThreshold = 50;
                    if (offset.x < -swipeThreshold && arrivalCardIndex === 0) {
                      setArrivalCardIndex(1);
                    } else if (
                      offset.x > swipeThreshold &&
                      arrivalCardIndex === 1
                    ) {
                      setArrivalCardIndex(0);
                    }
                  }}
                  animate={{ x: arrivalCardIndex === 0 ? "0%" : "-50%" }}
                  transition={{ type: "spring", damping: 20, stiffness: 100 }}
                  className="flex w-[200%]"
                >
                  {/* Card 1 */}
                  <div className="w-1/2 flex flex-col">
                    <div className="bg-black/[0.03] dark:bg-white/[0.03] pt-8 pb-6 px-6 text-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />

                      <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none mb-1">
                        Próximo Passo
                      </h3>
                      <p className="text-[8px] text-[#34d399]/85 font-black tracking-[0.2em] uppercase">
                        Ordem de chegada (1/2)
                      </p>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="space-y-3 min-h-[60px] flex items-center">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#34d399]/10 border border-[#34d399]/20 text-[#34d399] flex items-center justify-center text-xs font-black shrink-0">
                            1
                          </div>
                          <p className="text-[11px] font-medium text-black/70 dark:text-white/70 leading-relaxed pt-0.5">
                            Toque nos jogadores para confirmar a presença deles
                            na pelada de hoje.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center gap-2 pb-1">
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all ${arrivalCardIndex === 0 ? "bg-[#34d399] w-3" : "bg-black/10 dark:bg-white/10"}`}
                        />
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all ${arrivalCardIndex === 1 ? "bg-[#34d399] w-3" : "bg-black/10 dark:bg-white/10"}`}
                        />
                      </div>

                      <button
                        onClick={() => setArrivalCardIndex(1)}
                        className="w-full py-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 text-zinc-900 dark:text-white border border-black/10 dark:border-white/10 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        Próximo
                      </button>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="w-1/2 flex flex-col">
                    <div className="bg-black/[0.03] dark:bg-white/[0.03] pt-8 pb-6 px-6 text-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />

                      <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none mb-1">
                        Próximo Passo
                      </h3>
                      <p className="text-[8px] text-[#34d399]/85 font-black tracking-[0.2em] uppercase">
                        Ordem de chegada (2/2)
                      </p>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="space-y-3 min-h-[60px] flex items-center">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#34d399]/10 border border-[#34d399]/20 text-[#34d399] flex items-center justify-center text-xs font-black shrink-0">
                            2
                          </div>
                          <p className="text-[11px] font-medium text-black/70 dark:text-white/70 leading-relaxed pt-0.5">
                            Você precisa de pelo menos o dobro de jogadores (ex:
                            2 times de {match.config.playersPerTeam}) para
                            prosseguir.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center gap-2 pb-1">
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all ${arrivalCardIndex === 0 ? "bg-[#34d399] w-3" : "bg-black/10 dark:bg-white/10"}`}
                        />
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-all ${arrivalCardIndex === 1 ? "bg-[#34d399] w-3" : "bg-black/10 dark:bg-white/10"}`}
                        />
                      </div>

                      <button
                        onClick={() => {
                          setShowArrivalStepGuide(false);
                          setArrivalCardIndex(0);
                        }}
                        className="w-full py-2.5 bg-[#34d399] hover:bg-[#34d399]/90 text-[#1e3d2f] rounded-xl font-black uppercase tracking-widest text-[9px] shadow-lg shadow-[#34d399]/20 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <CheckCircle2 size={12} />
                        OK, Entendi!
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showInsufficientPlayersModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setShowInsufficientPlayersModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="w-full max-w-[280px] p-6 rounded-[24px] bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl shadow-2xl relative flex flex-col items-center text-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 shadow-sm relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl" />
                <span className="text-amber-500 relative z-10">
                  <PiWarningCircleBold size={28} />
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
                  {scheduledMatches.length === 0
                    ? "Crie uma Pelada"
                    : "Ops! Quase lá..."}
                </h3>
                {scheduledMatches.length > 0 && (
                  <p className="text-[9px] font-medium leading-relaxed text-black/60 dark:text-white/50 uppercase tracking-widest mt-1">
                    JOGADORES INSUFICIENTES
                  </p>
                )}
              </div>

              <p className="text-[10px] font-bold text-black/70 dark:text-white/60 text-center leading-relaxed px-2">
                {scheduledMatches.length === 0
                  ? "Você precisa criar uma pelada no Painel de Controle para continuar."
                  : "Jogadores insuficientes para formar 2 times. Crie mais jogadores ou altere a quantidade de jogadores por time."}
              </p>

              <div className="w-full space-y-2 pt-2">
                <button
                  onClick={() => {
                    if (scheduledMatches.length === 0) {
                      setShowInsufficientPlayersModal(false);
                      setCurrentScreen("dashboard");
                      setShowScheduleModal(true);
                    } else {
                      setShowInsufficientPlayersModal(false);
                      setCurrentScreen("players");
                      setShowAddPlayerSection(true);
                    }
                  }}
                  className="w-full h-10 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  {scheduledMatches.length === 0 ? (
                    <Plus size={14} className="text-zinc-900 dark:text-white" />
                  ) : (
                    <User size={14} className="text-zinc-900 dark:text-white" />
                  )}
                  {scheduledMatches.length === 0
                    ? "Criar Pelada"
                    : "Cadastrar Jogadores"}
                </button>

                <button
                  onClick={() => {
                    setShowInsufficientPlayersModal(false);
                    if (scheduledMatches.length !== 0) {
                      setCurrentScreen("teams");
                      setTeamsTab("configuracao");
                      setIsFlashingConfig(true);
                    }
                  }}
                  className={`w-full h-10 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 border border-black/10 dark:border-white/10 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-black/10 dark:bg-white/10 hover:text-zinc-900 dark:text-white transition-all active:scale-95 shadow-sm ${scheduledMatches.length > 0 && players.length === 0 ? "hidden" : "block"}`}
                >
                  {scheduledMatches.length === 0
                    ? "OK, ENTENDIDO"
                    : "ALTERAR CONFIGURAÇÃO"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showGoalAnimation && (
          <GoalCelebration
            isOpen={!!showGoalAnimation}
            scorerName={showGoalAnimation.scorerName}
            teamName={showGoalAnimation.teamName}
            scorerPhoto={showGoalAnimation.scorerPhoto}
          />
        )}
      </AnimatePresence>

      <TieBreakerModal
        state={tieBreaker}
        onTypeSelect={handleTieBreakerTypeSelect}
        onPenaltyToggle={handlePenaltyToggle}
        onLotterySpin={handleLotterySpin}
        onConfirm={handleTieBreakerConfirm}
        onBothLeave={handleBothLeaveMatch}
        teamA={teams[match.teamAIndex]}
        teamB={teams[match.teamBIndex]}
        colorA={
          (fixedColors.enabled && fixedColors.teamA) ||
          teams[match.teamAIndex]?.color
        }
        colorB={
          (fixedColors.enabled && fixedColors.teamB) ||
          teams[match.teamBIndex]?.color
        }
        players={players}
        queueCount={teams.length - 2}
        fixedColors={fixedColors}
      />

      {/* Global Application Settings Modal handled below in sticky header */}

      {/* Not Enough Players Modal */}
      <AnimatePresence>
        {showNotEnoughPlayersModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-md p-8 rounded-lg bg-brand-card border border-brand-primary/20 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-brand-gradient rounded-lg flex items-center justify-center mb-6 shadow shadow-black/20">
                <Users size={40} className="text-black" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-brand-primary">
                Jogadores Insuficientes
              </h3>
              <p className="text-sm text-brand-text-secondary mb-8 leading-relaxed">
                Você não tem jogadores suficientes criados para formar no mínimo
                dois times com a quantidade configurada.
              </p>
              <div className="flex gap-4 w-full">
                <button
                  onClick={() => setShowNotEnoughPlayersModal(false)}
                  className={`flex-1 py-4 font-black uppercase tracking-widest text-xs rounded-md transition-all ${
                    theme === "light"
                      ? "bg-zinc-200 text-black hover:bg-zinc-300"
                      : "bg-brand-dark text-zinc-900 dark:text-white hover:bg-black/5 dark:bg-white/5"
                  }`}
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setShowNotEnoughPlayersModal(false);
                    setCurrentScreen("players");
                  }}
                  className="flex-1 py-4 bg-brand-gradient text-black font-black uppercase tracking-widest text-xs rounded-md shadow shadow-black/20 hover:opacity-90 transition-all active:scale-95"
                >
                  Criar mais jogadores
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 left-0 right-0 z-[200] flex justify-center px-6 pointer-events-none"
          >
            <motion.div className="pointer-events-auto flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-xl transition-all group">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm dark:shadow-lg ${
                  toast.type === "success"
                    ? "bg-emerald-500/20 text-[#59b823] border border-emerald-500/20"
                    : toast.type === "warning"
                      ? "bg-amber-100 dark:bg-amber-500/20 text-amber-500 dark:text-amber-400 border border-amber-500/20"
                      : "bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10"
                }`}
              >
                {toast.type === "success" && <PiCheckCircleBold size={16} />}
                {toast.type === "warning" && <PiWarningCircleBold size={16} />}
                {toast.type === "gray" && <PiGearBold size={16} />}
                {toast.type === "info" && <PiRocketBold size={16} />}
              </div>
              <div className="flex flex-col pr-1">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white leading-none mb-[1px]">
                  Notificação
                </p>
                <p className="text-[11px] font-medium text-black/70 dark:text-white/60 leading-tight">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => setToast(null)}
                className="ml-auto w-6 h-6 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 transition-all active:scale-90"
              >
                <div className="opacity-40 group-hover:opacity-100 transition-opacity text-zinc-900 dark:text-white">
                  <PiXBold size={10} />
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-screen flex flex-col overflow-hidden">
        {/* Sticky Header and Tabs Container */}
        <div
          className={`sticky top-0 z-50 bg-zinc-100/95 dark:bg-[#000000]/95 backdrop-blur-2xl ${isPrintMode ? "hidden" : ""}`}
        >
          {/* Header */}
          <AnimatePresence mode="wait">
            {match.isActive &&
            !match.isPaused &&
            !match.hasEnded &&
            teamsTab !== "historico" && (
              <header className="px-6 py-2.5 flex justify-between items-center bg-transparent relative transition-colors duration-300">
                <div className="flex items-center gap-3 overflow-hidden relative z-10 w-full">
                  <motion.div
                    key="mini-header-status"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => {
                      setCurrentScreen("teams");
                      setTeamsTab("historico");
                    }}
                  >
                    <div className="flex items-center gap-2 px-3 py-1.5">
                      <span
                        className={`text-[12px] font-black tracking-widest tabular-nums text-brand-primary ${match.timeRemaining <= 60 ? "animate-pulse text-red-500" : ""}`}
                      >
                        {Math.floor(match.timeRemaining / 60)
                          .toString()
                          .padStart(2, "0")}
                        :
                        {(match.timeRemaining % 60).toString().padStart(2, "0")}
                      </span>
                      <div className="h-3 w-px bg-black/10 dark:bg-white/10 mx-1" />
                      <div className="flex items-center gap-2 mt-0.5">
                        <div
                          style={{
                            color:
                              (fixedColors.enabled && fixedColors.teamA) ||
                              teams[match.teamAIndex]?.color ||
                              "#ffffff",
                          }}
                        >
                          {(() => {
                            const team = teams[match.teamAIndex];
                            const Icon = getTeamIcon(team, "A");
                            return <Icon size={12} />;
                          })()}
                        </div>
                        <span className="text-zinc-900 dark:text-white font-black text-xs tabular-nums">
                          {match.scoreA}
                        </span>
                        <span className="text-black/30 dark:text-white/30 text-[8px] font-bold mx-0.5">
                          x
                        </span>
                        <span className="text-zinc-900 dark:text-white font-black text-xs tabular-nums">
                          {match.scoreB}
                        </span>
                        <div
                          style={{
                            color:
                              (fixedColors.enabled && fixedColors.teamB) ||
                              teams[match.teamBIndex]?.color ||
                              "#ffffff",
                          }}
                        >
                          {(() => {
                            const team = teams[match.teamBIndex];
                            const Icon = getTeamIcon(team, "B");
                            return <Icon size={12} />;
                          })()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </header>
            )}
          </AnimatePresence>

          {/* Tabs for Teams */}
          {currentScreen === "teams" && (
            <div className="px-2 pt-1.5 pb-1.5">
              <div className="flex bg-black/5 dark:bg-white/10 backdrop-blur-sm p-0.5 rounded-lg mx-auto w-fit border border-black/5 dark:border-white/10">
                <button
                  onClick={() => navigateTeamsTab("configuracao")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${teamsTab === "configuracao" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    CONFIGURAÇÃO
                  </span>
                </button>
                <button
                  onClick={() => navigateTeamsTab("chegada")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${teamsTab === "chegada" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    PRESENÇA
                  </span>
                </button>
                <button
                  onClick={() => navigateTeamsTab("historico")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${teamsTab === "historico" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    CONFRONTOS
                  </span>
                </button>
                <button
                  onClick={() => navigateTeamsTab("proximos")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${teamsTab === "proximos" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    PRÓXIMOS
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Tabs for Ranking */}
          {currentScreen === "ranking" && (
            <div className="px-2 pt-1.5 pb-1.5">
              <div className="flex bg-black/5 dark:bg-white/10 backdrop-blur-sm p-0.5 rounded-lg mx-auto w-fit border border-black/5 dark:border-white/10">
                <button
                  onClick={() => setRankingTab("geral")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${rankingTab === "geral" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    Geral
                  </span>
                </button>
                <button
                  onClick={() => setRankingTab("artilharia")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${rankingTab === "artilharia" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    Artilharia
                  </span>
                </button>
                <button
                  onClick={() => setRankingTab("assistencias")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${rankingTab === "assistencias" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    Assistências
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Tabs for Finance */}
          {currentScreen === "finance" && !isPrintMode && (
            <div className="px-2 pt-1.5 pb-1.5">
              <div className="flex bg-black/5 dark:bg-white/10 backdrop-blur-sm p-0.5 rounded-lg mx-auto w-fit border border-black/5 dark:border-white/10">
                <button
                  onClick={() => setFinanceSubScreen("balanco")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${financeSubScreen === "balanco" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    Balanço
                  </span>
                </button>
                <button
                  onClick={() => setFinanceSubScreen("mensalidade")}
                  className={`px-2.5 py-1 flex items-center justify-center rounded-md transition-all ${financeSubScreen === "mensalidade" ? "bg-white text-zinc-900 shadow-sm" : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white font-medium"}`}
                >
                  <span
                    className={`text-[9px] font-black uppercase tracking-wider text-center w-full transition-colors font-roboto-flex`}
                  >
                    Mensalidade
                  </span>
                </button>
              </div>
            </div>
          )}
          <AnimatePresence>
            {showGlobalSettings && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-full right-0 w-screen h-[calc(100vh-100%)] bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[200] flex justify-end"
                onClick={() => setShowGlobalSettings(false)}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="w-full max-w-[320px] bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border-l border-black/10 dark:border-white/10 backdrop-blur-xl h-full shadow-2xl flex flex-col overflow-hidden text-zinc-900 dark:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="relative px-6 pt-6 pb-4 border-b border-black/10 dark:border-white/10 flex items-center justify-end overflow-hidden">
                    {selectedMatchId &&
                      scheduledMatches.find((m) => m.id === selectedMatchId)
                        ?.imageUrl && (
                        <div
                          className="absolute inset-0 z-0 opacity-30 blur-sm dark:opacity-20"
                          style={{
                            backgroundImage: `url(${scheduledMatches.find((m) => m.id === selectedMatchId)?.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                      )}
                    <button
                      onClick={() => setShowGlobalSettings(false)}
                      className="relative z-10 w-8 h-8 rounded-full shrink-0 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-black/70 dark:text-white/60 hover:text-zinc-900 dark:text-white hover:bg-black/10 dark:bg-white/10 active:scale-90 transition-all cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                    {/* General Tools Card */}
                    <div className="flex flex-col">
                      {((showAddPlayerSection && currentScreen === "players") ||
                        currentScreen === "teams" ||
                        currentScreen === "ranking" ||
                        currentScreen === "finance") && (
                        <button
                          onClick={() => {
                            setCurrentScreen("players");
                            setShowAddPlayerSection(false);
                            setSelectedMatchId(null);
                            setPlayersTab("configuracao");
                            setTeamsTab("configuracao");
                            setShowGlobalSettings(false);
                          }}
                          className="w-full flex items-center gap-4 p-4 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-all group cursor-pointer"
                        >
                          <div className="flex items-center gap-4 text-left w-full">
                            <div className="w-5 h-5 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                              <FaSquareWebAwesomeStroke size={20} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[14px] font-medium text-zinc-900 dark:text-white tracking-wide">
                                Painel de controle
                              </span>
                              <span className="text-[10px] text-black/50 dark:text-white/40 font-medium">
                                Voltar à tela principal
                              </span>
                            </div>
                          </div>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setShowEndPeladaConfirm(true);
                          setShowGlobalSettings(false);
                        }}
                        className="w-full flex items-center justify-between p-4 hover:bg-red-500/10 rounded-xl transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-4 text-left w-full">
                          <div className="w-5 h-5 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                            <GiCornerFlag size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-medium text-zinc-900 dark:text-white tracking-wide">
                              Fim da pelada
                            </span>
                            <span className="text-[10px] text-black/50 dark:text-white/40 font-medium">
                              Salvar e fechar pelada
                            </span>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="w-full flex items-center justify-between p-4 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-4 text-left w-full">
                          <div className="w-5 h-5 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                            {theme === "light" ? (
                              <Moon size={20} />
                            ) : (
                              <GiHolosphere size={20} />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-medium text-zinc-900 dark:text-white tracking-wide">
                              Tema Visual
                            </span>
                            <span className="text-[10px] text-black/50 dark:text-white/40 font-medium">
                              {theme === "light"
                                ? "Alternar para modo escuro"
                                : "Alternar para modo claro"}
                            </span>
                          </div>
                        </div>
                      </button>

                      <div
                        onClick={() => {
                          handleBackup();
                          setShowGlobalSettings(false);
                        }}
                        className="w-full flex items-center justify-between p-4 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-4 text-left w-full">
                          <div className="w-5 h-5 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                            <FiUploadCloud size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-medium text-zinc-900 dark:text-white tracking-wide">
                              Backup
                            </span>
                            <span className="text-[10px] text-black/50 dark:text-white/40 font-medium">
                              Gerar arquivo de dados
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        onClick={() => {
                          handleRestore();
                          setShowGlobalSettings(false);
                        }}
                        className="w-full flex items-center justify-between p-4 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-4 text-left w-full">
                          <div className="w-5 h-5 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                            <FaServer size={20} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-medium text-zinc-900 dark:text-white tracking-wide">
                              Restaurar Backup
                            </span>
                            <span className="text-[10px] text-black/50 dark:text-white/40 font-medium">
                              Importar arquivo de dados
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setShowSetupGuide(true);
                          setShowGlobalSettings(false);
                        }}
                        className="w-full flex items-center justify-between p-4 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-4 text-left w-full">
                          <div className="w-5 h-5 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:scale-110 transition-transform">
                            <GiFoldedPaper size={20} />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <span className="text-[14px] font-medium text-zinc-900 dark:text-white tracking-wide">
                              Guia Inicial
                            </span>
                            <span className="text-[10px] text-black/50 dark:text-white/40 font-medium">
                              Como usar o aplicativo
                            </span>
                          </div>
                          <ChevronRight
                            size={14}
                            className="text-black/30 dark:text-white/30 group-hover:text-zinc-900 dark:text-white group-hover:translate-x-0.5 transition-all"
                          />
                        </div>
                      </button>


                    </div>
                  </div>

                  {/* Close Button Footer */}
                  <div className="p-6 bg-black/5 dark:bg-white/5 border-t border-black/10 dark:border-white/10 backdrop-blur-md">
                    <button
                      onClick={() => setShowGlobalSettings(false)}
                      className="w-full py-3.5 bg-gradient-to-r from-zinc-800 to-zinc-900 text-zinc-900 dark:text-white rounded-xl font-bold text-[11px] uppercase tracking-widest active:scale-95 transition-all shadow-md border border-black/10 dark:border-white/10 cursor-pointer text-center hover:from-zinc-700 hover:to-zinc-800"
                    >
                      Fechar Menu
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Content */}
        <main
          ref={mainRef}
          onScroll={handleMainScroll}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className={`flex-1 overflow-y-auto flex flex-col ${currentScreen === "players" ? (showAddPlayerSection ? "pb-32" : "pb-20") : "pb-12"} touch-pan-y ${isPrintMode ? "p-0 pb-0 bg-white text-black" : "bg-transparent relative z-10"}`}
        >
          <AnimatePresence mode="wait">
            {currentScreen === "players" && !isPrintMode && (
              <motion.div
                key="players"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`p-3 sm:p-4 bg-transparent flex-1 flex flex-col ${!showAddPlayerSection ? "justify-center items-center my-auto" : "space-y-3"}`}
              >
                {/* Main View Switcher */}
                <AnimatePresence mode="wait">
                  {!showAddPlayerSection ? (
                    <motion.div
                      key="dashboard-view"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="w-full max-w-md flex flex-col space-y-3.5 bg-gradient-to-br from-[#144011] via-[#1b5017] to-[#0e2c0e] p-4 sm:p-5 rounded-[28px] shadow-xl border border-white/10 my-auto"
                    >
                      <div className="py-1.5 px-3 bg-gradient-to-r from-[#0e2c0e] via-[#133d10] to-[#0e2c0e] rounded-xl border border-emerald-500/20 shadow-sm flex items-center justify-center mb-0.5">
                        <FutQuinaLogo size="md" titleColorClass="text-white" />
                      </div>
                      <div className="flex items-center justify-between px-1 pt-1">
                        <div className="flex flex-col gap-0.5">
                          <h2 className="text-lg sm:text-xl font-normal font-roboto-flex tracking-tight text-white">
                            Painel de controle
                          </h2>
                          <p className="text-[11px] font-medium text-white/60 font-roboto-flex">
                            Gerencie suas peladas e jogadores de forma simples
                          </p>
                        </div>
                        <button
                          onClick={handleRestore}
                          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95 border border-white/10 flex items-center justify-center cursor-pointer shrink-0 shadow-sm"
                          title="Restaurar Backup"
                        >
                          <FaServer size={16} />
                        </button>
                      </div>

                      {/* CTA Banner */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        onClick={() => {
                          if (scheduledMatches.length >= 3) {
                            setToast({
                              message: "Limite atingido! Você só pode criar até 3 peladas.",
                              type: "warning",
                            });
                            setTimeout(() => setToast(null), 3000);
                          } else {
                            setShowScheduleModal(true);
                          }
                        }}
                        className="cursor-pointer relative overflow-hidden bg-gradient-to-r from-[#205b10] to-[#205b10] rounded-full p-[6px] shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
                      >
                        {/* Background pattern */}
                        <div className="absolute top-0 right-0 h-full w-2/3 opacity-15 mix-blend-overlay flex justify-end items-center pointer-events-none">
                          <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-black">
                            <GiSoccerBall size={180} />
                          </div>
                        </div>
                        {/* Light Sweep Effect */}
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            repeatDelay: 2,
                          }}
                          className="absolute inset-0 z-10 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none"
                        />
                        <div className="relative z-10 flex items-center">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-500 bg-[#111A13] flex items-center justify-center shrink-0 shadow-md">
                              <Plus size={24} className="text-white" />
                            </div>
                            <h3 className="text-[17px] sm:text-lg font-black tracking-tight uppercase text-white m-0 leading-none pb-0.5">
                              CRIE SUA PELADA
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                      {/* Matches Section */}
                      <div className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center justify-between px-1"
                        >
                          <h4 className="text-sm font-bold text-white/80 font-roboto leading-[21px] w-[102.875px]">
                            Suas peladas
                          </h4>
                        </motion.div>
                        <div className="space-y-4">
                          {scheduledMatches.length === 0 && (
                            <div className="relative w-full max-w-sm mx-auto h-[180px]">
                              <div className="absolute inset-0 rounded-2xl flex flex-col p-4 bg-gradient-to-br from-[#75c628]/20 to-white dark:from-[#25660e]/40 dark:to-[#111625]/90 border border-black/10 dark:border-white/10 backdrop-blur-xl overflow-hidden animate-pulse">
                                <div className="flex justify-between items-center mb-2.5 w-full">
                                  <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-full bg-black/10 dark:bg-white/10" />
                                    <div className="w-24 h-3 bg-black/10 dark:bg-white/10 rounded-full" />
                                  </div>
                                  <div className="w-7 h-7 rounded-full bg-black/10 dark:bg-white/10" />
                                </div>
                                <div className="text-center mb-2.5 flex flex-col items-center mt-4">
                                  <div className="w-20 h-2 bg-black/10 dark:bg-white/10 rounded-full mb-4" />
                                  <div className="w-32 h-6 bg-black/10 dark:bg-white/10 rounded-full mb-3" />
                                  <div className="w-24 h-3 bg-black/10 dark:bg-white/10 rounded-full" />
                                </div>
                                <div className="bg-black/5 dark:bg-white/5 rounded-xl p-2.5 border border-black/10 dark:border-white/10 mt-auto mb-2.5 h-[65px]" />
                                <div className="flex gap-1.5 w-full">
                                  <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10" />
                                  <div className="flex-1 h-8 rounded-xl bg-black/10 dark:bg-white/10" />
                                </div>
                              </div>
                            </div>
                          )}

                          {scheduledMatches.length === 0 && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: [1, 1.02, 1] }}
                              transition={{
                                opacity: { duration: 0.4 },
                                scale: {
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                },
                              }}
                              className="w-full max-w-sm mx-auto flex items-center justify-center gap-2 mt-4"
                            >
                              <AlertCircle
                                size={16}
                                className="text-white shrink-0"
                              />
                              <p className="text-[10px] font-bold text-white leading-tight tracking-wider">
                                Você precisa criar uma pelada no botão acima
                                para continuar.
                              </p>
                            </motion.div>
                          )}

                           {scheduledMatches.length > 0 && (
                            <div className="space-y-4">
                              {scheduledMatches.map((match) => {
                                return (
                                  <motion.div
                                    key={match.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="relative overflow-hidden rounded-2xl bg-black/20 border border-white/10 shadow-sm backdrop-blur-md p-2 sm:p-2.5 flex items-center justify-between cursor-pointer hover:bg-black/30 transition-all duration-200"
                                    onClick={() => {
                                      setSelectedMatchId(match.id);
                                      setCurrentScreen("players");
                                      setShowAddPlayerSection(true);
                                    }}
                                  >
                                    {/* Circle emblem matching card background */}
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/10 dark:bg-[#121623] border border-emerald-500/20 dark:border-white/10 shadow-inner flex items-center justify-center p-0.5 shrink-0 overflow-hidden relative">
                                        <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90 absolute inset-0">
                                          <defs>
                                            <linearGradient id={`gauge-match-${match.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                              <stop offset="0%" stopColor="#2ea625" />
                                              <stop offset="50%" stopColor="#34d399" />
                                              <stop offset="100%" stopColor="#59b823" />
                                            </linearGradient>
                                          </defs>
                                          <circle
                                            cx="60"
                                            cy="60"
                                            r="46"
                                            stroke="currentColor"
                                            strokeWidth="10"
                                            className="text-emerald-500/20 dark:text-white/15"
                                            fill="none"
                                          />
                                          <motion.circle
                                            cx="60"
                                            cy="60"
                                            r="46"
                                            stroke={`url(#gauge-match-${match.id})`}
                                            strokeWidth="10"
                                            strokeLinecap="round"
                                            fill="none"
                                            strokeDasharray={2 * Math.PI * 46}
                                            initial={{ strokeDashoffset: 2 * Math.PI * 46 }}
                                            animate={{ strokeDashoffset: 2 * Math.PI * 46 * 0.25 }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                          />
                                        </svg>
                                      </div>

                                      {/* Text column left aligned */}
                                      <div className="flex flex-col text-left min-w-0">
                                        <h4 className="text-white text-[14px] sm:text-[15px] font-extrabold tracking-tight leading-none truncate capitalize">
                                          {match.name || "Perna de Pau"}
                                        </h4>
                                        <p className="text-[7.5px] sm:text-[8.5px] font-bold tracking-tight text-zinc-300 mt-1 uppercase leading-snug">
                                          {formatMatchDateImageStyle(match.date, match.time)}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Buttons Column */}
                                    <div className="flex items-center gap-1 sm:gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setEditingMatchId(match.id);
                                          setNewMatchName(match.name);
                                          setNewMatchTime(match.time);
                                          setNewMatchImage(match.imageUrl || "");
                                          const days = [
                                            "Domingo",
                                            "Segunda",
                                            "Terça",
                                            "Quarta",
                                            "Quinta",
                                            "Sexta",
                                            "Sábado",
                                          ];
                                          const date = new Date(match.date);
                                          setNewMatchDay(days[date.getDay()]);
                                          setShowScheduleModal(true);
                                        }}
                                        className="p-1 text-white/80 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                                        title="Editar"
                                      >
                                        <TbEdit size={20} />
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setMatchToDelete(match);
                                        }}
                                        className="p-1 text-[#ff6b6b] hover:text-[#ff8787] hover:scale-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                                        title="Excluir"
                                      >
                                        <RiDeleteBinLine size={20} />
                                      </button>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Alert Banner / Tip */}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="management-view"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="p-3 sm:p-3.5 bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#2ea625] rounded-2xl border border-emerald-500/30 shadow-md flex flex-col gap-0.5 my-2">
                        <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-white leading-none">
                          GERENCIAMENTO
                        </h2>
                        <p className="text-[9px] font-medium text-emerald-100/80 leading-none">
                          Adicione e gerencie os jogadores da pelada
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 backdrop-blur-md p-2 rounded-2xl border border-black/10 dark:border-white/10 space-y-2 shadow-sm">
                          <div className="flex flex-col sm:flex-row gap-2">
                            <div className="flex-1 flex gap-2">
                              <input
                                type="text"
                                placeholder="Nome do jogador..."
                                className={`flex-1 px-3 sm:px-4 py-1.5 rounded-[14px] border border-black/5 dark:border-white/10 outline-none transition-all bg-white dark:bg-black/40 text-zinc-900 dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:ring-2 focus:ring-[#2ea625]/50 text-xs font-medium shadow-inner h-[36px]`}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    addPlayer(e.currentTarget.value);
                                    e.currentTarget.value = "";
                                  }
                                }}
                              />
                              <button
                                onClick={handleImportContacts}
                                className="w-[36px] h-[36px] bg-white dark:bg-black/40 text-[#2ea625] dark:text-white rounded-[14px] shadow-inner hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center border border-black/5 dark:border-white/10 shrink-0"
                                title="Importar dos Contatos"
                              >
                                <Contact size={16} strokeWidth={1.5} />
                              </button>
                              <button
                                onClick={() => {
                                  const input = document.querySelector(
                                    "input",
                                  ) as HTMLInputElement;
                                  if (input.value.trim()) {
                                    addPlayer(input.value);
                                    input.value = "";
                                  }
                                }}
                                className="w-[36px] h-[36px] bg-white dark:bg-black/40 text-[#2ea625] dark:text-white rounded-[14px] border border-black/5 dark:border-white/10 shadow-inner hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center shrink-0"
                              >
                                <Plus size={18} strokeWidth={1.5} />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Stats Jogadores & Saldo acima do botão Configurar Partida */}
                        <div className="grid grid-cols-2 gap-2 relative z-10 mt-2 mb-2">
                          {/* Jogadores Stat */}
                          <div className="bg-emerald-950/5 dark:bg-emerald-950/40 border border-emerald-500/20 rounded-xl px-3 py-2 flex items-center justify-between shadow-xs backdrop-blur-xs">
                            <div className="flex items-center gap-2">
                              <div className="text-[#2ea625] dark:text-emerald-400 flex items-center justify-center">
                                <Users size={14} />
                              </div>
                              <span className="text-[9px] font-black text-zinc-600 dark:text-emerald-200/70 uppercase tracking-wider">Jogadores</span>
                            </div>
                            <span className="text-[12px] font-black text-zinc-900 dark:text-white">{visiblePlayers.length}</span>
                          </div>

                          {/* Caixa Stat */}
                          <div className="bg-emerald-950/5 dark:bg-emerald-950/40 border border-emerald-500/20 rounded-xl px-3 py-2 flex items-center justify-between shadow-xs backdrop-blur-xs">
                            <div className="flex items-center gap-2">
                              <div className="text-[#2ea625] dark:text-emerald-400 flex items-center justify-center">
                                <Wallet size={14} />
                              </div>
                              <span className="text-[9px] font-black text-zinc-600 dark:text-emerald-200/70 uppercase tracking-wider">Saldo</span>
                            </div>
                            <span className="text-[12px] font-black text-zinc-900 dark:text-white">R$ {currentNetBalance}</span>
                          </div>
                        </div>

                        {/* Botão Configurar Partida */}
                        <div className="w-full mb-2">
                          <motion.button
                            onClick={() => {
                              setShouldPulseConfig(false);
                              setCurrentScreen("teams");
                              setTeamsTab("configuracao");
                              if (!firstSetupDone) {
                                setIsInitialSetupFlow(true);
                              }
                            }}
                            animate={
                              shouldPulseConfig
                                ? {
                                    scale: [1, 1.02, 1],
                                    boxShadow: [
                                      "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                      "0px 10px 15px -3px rgba(52, 211, 153, 0.3), 0px 4px 6px -2px rgba(52, 211, 153, 0.15)",
                                      "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                    ],
                                  }
                                : {}
                            }
                            transition={
                              shouldPulseConfig
                                ? { repeat: Infinity, duration: 1.5 }
                                : {}
                            }
                            className="w-full h-9 bg-[#2ea625] dark:bg-[#59b823] text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-sm hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span className="text-white flex items-center shrink-0">
                              <PiGearBold size={14} />
                            </span>
                            <span>CONFIGURAR PARTIDA</span>
                          </motion.button>
                        </div>

                        <section className="w-full relative pt-2">

                          {players.length === 0 ? (
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                              {Array.from({ length: 9 }).map((_, idx) => (
                                <div
                                  key={`skeleton-${idx}`}
                                  className="relative flex flex-col justify-center items-center rounded-xl border border-[#2ea625]/20 dark:border-[#59b823]/20 bg-[#2ea625]/5 dark:bg-[#59b823]/5 backdrop-blur-md shadow-sm animate-pulse overflow-hidden min-h-[135px] sm:min-h-[165px] w-full max-w-[150px] mx-auto"
                                >
                                  <div className="p-3.5 sm:p-5 flex flex-col items-center justify-center w-full">
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#2ea625]/10 dark:bg-[#59b823]/10 mb-2" />
                                    <div className="h-2 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-full w-2/3 mb-1" />
                                    <div className="h-1.5 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-full w-1/2" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : visiblePlayers.length === 0 ? (
                            <div className="min-h-[450px] flex flex-col items-center justify-center gap-8 w-full">
                              <div className="flex flex-col items-center gap-4 opacity-50 text-blue-200 text-xs">
                                <span className="font-bold uppercase tracking-widest text-[11px]">
                                  Nenhum jogador encontrado.
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-2">
                              {visiblePlayers.map((player) => (
                                <motion.div
                                  layout
                                  key={`player-list-dash-switch-${player.id}`}
                                  className="bg-white dark:bg-[#12151c] border border-black/5 dark:border-white/5 rounded-2xl flex flex-row items-center overflow-hidden shadow-sm relative cursor-pointer hover:scale-[1.02] active:scale-95 transition-all text-zinc-900 dark:text-white p-3 w-full mx-auto"
                                  onClick={() => {
                                    if (editingPlayerId !== player.id) {
                                      setPlayerManagementModal(player);
                                    }
                                  }}
                                >
                                  {/* Left section containing photo */}
                                  <div className="relative flex items-center justify-center shrink-0">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#2ea625]/40 dark:border-emerald-500/40 overflow-hidden bg-emerald-500/10 dark:bg-emerald-950/40 flex items-center justify-center shadow-xs">
                                      {player.photo ? (
                                        <img
                                          src={player.photo}
                                          alt={player.name}
                                          className="w-full h-full object-cover"
                                          referrerPolicy="no-referrer"
                                        />
                                      ) : (
                                        <span className="text-[#2ea625] dark:text-emerald-400 flex items-center justify-center">
                                          <IoIosPersonAdd size={16} />
                                        </span>
                                      )}
                                    </div>
                                    
                                    {/* Extra indicators over avatar (optional) */}
                                    {player.isGoalkeeper && (
                                      <span className="absolute -bottom-0.5 -right-0.5 bg-zinc-800 text-white dark:bg-zinc-700 p-0.5 rounded-full border border-emerald-500 text-[7px] flex items-center justify-center shadow-xs">
                                        <span className="animate-spin-slow flex items-center justify-center">
                                          <GiSoccerBall size={7} />
                                        </span>
                                      </span>
                                    )}
                                    {orgProData[player.id] && !player.isGoalkeeper && (
                                      <span className="absolute -top-0.5 -right-0.5 bg-yellow-500 text-white p-0.5 rounded-full border border-yellow-300 text-[7px] flex items-center justify-center shadow-xs">
                                        <span className="animate-bounce flex items-center justify-center">
                                          <GiCrown size={7} />
                                        </span>
                                      </span>
                                    )}
                                  </div>

                                  {/* Middle section containing name and position */}
                                  <div className="flex flex-col flex-1 ml-2.5 text-left justify-center overflow-hidden">
                                    <div className="flex items-center gap-1.5">
                                      {editingPlayerId === player.id ? (
                                        <input
                                          autoFocus
                                          defaultValue={player.name}
                                          className="w-full bg-black/10 dark:bg-white/10 border-b border-blue-500 outline-none text-[11px] font-medium py-0.5 px-1 rounded-none text-zinc-900 dark:text-white"
                                          onClick={(e) => e.stopPropagation()}
                                          onKeyDown={(e) => {
                                            if (e.key === "Enter")
                                              updatePlayerName(
                                                player.id,
                                                e.currentTarget.value,
                                              );
                                            if (e.key === "Escape")
                                              setEditingPlayerId(null);
                                          }}
                                          onBlur={(e) =>
                                            updatePlayerName(
                                              player.id,
                                              e.target.value,
                                            )
                                          }
                                        />
                                      ) : (
                                        <h4 className="text-sm font-semibold capitalize text-zinc-900 dark:text-white truncate max-w-[140px] leading-tight">
                                          {player.name.toLowerCase()}
                                        </h4>
                                      )}
                                    </div>

                                    {/* Position Tag / Subtitle */}
                                    <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 mt-0.5 leading-none">
                                      {player.isGoalkeeper ? "Goleiro" : "Jogador"}
                                    </span>

                                    {/* Compact Animated Bar Graph with FutQuina green theme */}
                                    <div className="w-full max-w-[110px] h-1.5 bg-zinc-200/80 dark:bg-emerald-950/60 border border-black/5 dark:border-emerald-500/10 rounded-full overflow-hidden mt-1 shadow-inner">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{
                                          width: `${Math.min(
                                            Math.max(
                                              (((player.matchesPlayed || 0) + (player.goals || 0) + (player.assists || 0)) /
                                                Math.max(
                                                  ...visiblePlayers.map(
                                                    (p) => (p.matchesPlayed || 0) + (p.goals || 0) + (p.assists || 0)
                                                  ),
                                                  1
                                                )) * 100,
                                              15
                                            ),
                                            100
                                          )}%`,
                                        }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-[#133d10] via-[#2ea625] to-[#75c628]"
                                      />
                                    </div>
                                  </div>

                                  {/* Stats Row */}
                                  <div className="flex items-center gap-2 sm:gap-4 shrink-0 pr-1 ml-2">
                                    <div className="flex flex-col items-center min-w-[28px]">
                                      <span className="text-xs font-bold text-zinc-900 dark:text-white leading-none">{player.matchesPlayed || 0}</span>
                                      <span className="text-[8px] text-zinc-500 dark:text-zinc-400 mt-1 leading-none uppercase font-semibold tracking-wider">Jogos</span>
                                    </div>
                                    <div className="flex flex-col items-center min-w-[28px]">
                                      <span className="text-xs font-bold text-zinc-900 dark:text-white leading-none">{player.goals || 0}</span>
                                      <span className="text-[8px] text-zinc-500 dark:text-zinc-400 mt-1 leading-none uppercase font-semibold tracking-wider">Gols</span>
                                    </div>
                                    <div className="flex flex-col items-center min-w-[28px]">
                                      <span className="text-xs font-bold text-zinc-900 dark:text-white leading-none">{player.assists || 0}</span>
                                      <span className="text-[8px] text-zinc-500 dark:text-zinc-400 mt-1 leading-none uppercase font-semibold tracking-wider">Assist.</span>
                                    </div>
                                  </div>

                                </motion.div>
                              ))}
                            </div>
                          )}
                        </section>

                        {players.length > 0 && (
                          <div className="flex justify-center pt-6 border-t border-black/10 dark:border-white/10">
                            {!showClearConfirm ? (
                              <button
                                onClick={() => setShowClearConfirm(true)}
                                className="flex items-center justify-center gap-1.5 text-red-500/70 hover:text-red-500 transition-colors active:scale-95 text-[9px] font-bold uppercase tracking-tight mt-2"
                              >
                                <Trash2 size={14} strokeWidth={2} />
                                Apagar todos
                              </button>
                            ) : (
                              <div className="flex flex-col sm:flex-row items-center gap-3 w-full animate-in fade-in zoom-in duration-200">
                                <button
                                  onClick={() => {
                                    setPlayers([]);
                                    setSessionPlayerIds([]);
                                    setShowClearConfirm(false);
                                  }}
                                  className="w-full px-8 py-4 bg-red-600/80 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-[0_0_15px_rgba(220,38,38,0.3)] active:scale-95 transition-all backdrop-blur-md"
                                >
                                  Confirmar Exclusão
                                </button>
                                <button
                                  onClick={() => setShowClearConfirm(false)}
                                  className="w-full px-8 py-4 bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/50 rounded-2xl font-black uppercase tracking-widest text-[10px] active:scale-95 transition-all border border-black/10 dark:border-white/10"
                                >
                                  Cancelar
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {currentScreen === "teams" && !isPrintMode && (
              <motion.div
                key="teams"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="px-2 sm:px-4 pb-6 pt-4 space-y-4 flex-1 bg-transparent flex flex-col text-zinc-900 dark:text-white"
              >
                <div id="teams-list-section" className="w-full space-y-4">
                  {!selectedMatchId ? (
                    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
                        <div className="text-black/30">
                          <IoInformationCircleOutline size={32} />
                        </div>
                      </div>
                      <span className="font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-500 text-[10px] mb-4 max-w-sm">
                        {scheduledMatches.length > 0
                          ? "Para iniciar, selecione a pelada que você criou no painel de controle."
                          : "Você precisa criar uma pelada no painel de controle para continuar."}
                      </span>
                      <button
                        onClick={() => {
                          setCurrentScreen("players");
                          setShowAddPlayerSection(false);
                        }}
                        className="px-4 py-2 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-lg hover:opacity-90 transition-all active:scale-95 w-32"
                      >
                        Ir
                      </button>
                    </div>
                  ) : teamsTab === "menu" ? (
                    <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4">
                      <div className="flex flex-col gap-4 w-full max-w-md">
                        {[
                          {
                            id: "configuracao",
                            label: "CONFIGURAÇÃO",
                            icon: PiGearBold,
                            subtitle: "Ajustes",
                            image: "/i1.png",
                          },
                          {
                            id: "chegada",
                            label: "PRESENÇA",
                            icon: PiCheckCircleBold,
                            subtitle: "Lista",
                            image: "/i2.png",
                          },
                          {
                            id: "historico",
                            label: "CONFRONTOS",
                            icon: Swords,
                            subtitle: "Placar",
                            image: "/i3.png",
                          },
                          {
                            id: "proximos",
                            label: "TIMES",
                            icon: PiCalendarBlankBold,
                            subtitle: "Equipes",
                            image: "/i4.png",
                          },
                        ].map((item, idx) => (
                          <motion.button
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => setTeamsTab(item.id as any)}
                            className="bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 rounded-none p-3 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.1)] flex items-center gap-5 border border-black/5 relative overflow-hidden group w-full"
                          >
                            {/* Decorative Glows - Adjusted for light theme */}
                            <div className="absolute -top-10 -right-10 w-48 h-48 bg-black/40 dark:bg-white/40 rounded-full blur-[60px] pointer-events-none group-hover:bg-white/60 transition-colors" />

                            <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-all duration-500 relative z-10 shrink-0">
                              <img
                                src={item.image}
                                alt={item.label}
                                className="w-14 h-14 object-contain relative z-20"
                                loading="eager"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="text-left space-y-0.5 relative z-10">
                              <p className="text-black/40 text-[8px] font-bold tracking-[0.3em] uppercase">
                                {item.subtitle}
                              </p>
                              <h3 className="text-zinc-900 text-sm font-medium uppercase tracking-widest">
                                {item.label}
                              </h3>
                            </div>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity pr-2">
                              <ChevronRight
                                size={24}
                                className="text-black/20"
                              />
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ) : teamsTab === "configuracao" ? (
                    <div className="space-y-6">
                      <div className="p-3 sm:p-3.5 bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#2ea625] rounded-2xl border border-emerald-500/30 shadow-md flex flex-col gap-0.5 my-2">
                        <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-white leading-none">
                          CONFIGURAÇÃO
                        </h3>
                        <p className="text-[9px] font-medium text-emerald-100/80 leading-none">
                          Defina as regras gerais da partida e tempo de jogo
                        </p>
                      </div>

                      <div className="space-y-6 pb-24">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          <div className="p-2 sm:p-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl flex flex-col items-center justify-between gap-1.5 shadow-sm hover:border-emerald-500/30 transition-all">
                            <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-black/60 dark:text-white/60 text-center leading-tight">
                              Tempo (Minutos)
                            </label>
                            <div className="w-full flex items-center justify-center bg-gradient-to-r from-[#0e2c0e]/10 via-[#1b5017]/20 to-[#2ea625]/10 dark:from-[#0e2c0e]/40 dark:via-[#1b5017]/50 dark:to-[#2ea625]/30 rounded-xl border border-emerald-500/30 p-1">
                              <input
                                type="number"
                                defaultValue={match.config.duration}
                                min={1}
                                id="tab-match-duration"
                                className="w-full h-8 outline-none font-black text-sm sm:text-base text-center bg-transparent text-[#1b5017] dark:text-emerald-400 [color-scheme:dark]"
                              />
                            </div>
                          </div>

                          <div className="p-2 sm:p-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl flex flex-col items-center justify-between gap-1.5 shadow-sm hover:border-emerald-500/30 transition-all">
                            <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-black/60 dark:text-white/60 text-center leading-tight">
                              Limite de Gols
                            </label>
                            <div className="w-full flex items-center justify-center bg-gradient-to-r from-[#0e2c0e]/10 via-[#1b5017]/20 to-[#2ea625]/10 dark:from-[#0e2c0e]/40 dark:via-[#1b5017]/50 dark:to-[#2ea625]/30 rounded-xl border border-emerald-500/30 p-1">
                              <input
                                type="number"
                                defaultValue={match.config.goalLimit}
                                min={1}
                                id="tab-match-goals"
                                className="w-full h-8 outline-none font-black text-sm sm:text-base text-center bg-transparent text-[#1b5017] dark:text-emerald-400 [color-scheme:dark]"
                              />
                            </div>
                          </div>

                          <div
                            className={`p-2 sm:p-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl flex flex-col items-center justify-between gap-1.5 shadow-sm hover:border-emerald-500/30 transition-all ${isFlashingConfig ? "animate-flash-highlight" : ""}`}
                          >
                            <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-black/60 dark:text-white/60 text-center leading-tight">
                              Jogadores / Time
                            </label>
                            <div className="w-full flex items-center justify-center bg-gradient-to-r from-[#0e2c0e]/10 via-[#1b5017]/20 to-[#2ea625]/10 dark:from-[#0e2c0e]/40 dark:via-[#1b5017]/50 dark:to-[#2ea625]/30 rounded-xl border border-emerald-500/30 p-1">
                              <input
                                type="number"
                                defaultValue={match.config.playersPerTeam}
                                min={1}
                                id="tab-match-players"
                                className="w-full h-8 outline-none font-black text-sm sm:text-base text-center bg-transparent text-[#1b5017] dark:text-emerald-400 [color-scheme:dark]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 sm:gap-4">
                          <div className="p-3 sm:p-4 bg-black/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 shadow-xl flex flex-col justify-between h-[140px] sm:h-[150px]">
                            <div className="flex items-start justify-between">
                              <div className="flex flex-col pr-2">
                                <div className="flex items-center gap-1.5 h-6">
                                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
                                    Fixar cores
                                  </span>
                                </div>
                                <p className="text-[9px] sm:text-[10px] text-black/60 dark:text-white/50 font-bold mt-0.5 leading-tight">
                                  Defina as cores permanentes.
                                </p>
                              </div>
                              <button
                                onClick={() =>
                                  setFixedColors((prev) => ({
                                    ...prev,
                                    enabled: !prev.enabled,
                                  }))
                                }
                                className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full p-1 transition-all relative shrink-0 cursor-pointer ${fixedColors.enabled ? "bg-[#2ea625] dark:bg-[#59b823]" : "bg-black/10 dark:bg-white/10"}`}
                              >
                                <div
                                  className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-transform ${fixedColors.enabled ? "translate-x-5 sm:translate-x-6 bg-white" : "translate-x-0 bg-white"} shadow-sm`}
                                />
                              </button>
                            </div>

                            {fixedColors.enabled && (
                              <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-1 animate-in fade-in slide-in-from-top-1 duration-300">
                                <div className="space-y-1">
                                  <label className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-black/60 dark:text-white/50 block text-center mb-1">
                                    Time A
                                  </label>
                                  <button
                                    onClick={() =>
                                      setShowColorPicker({
                                        teamIdx: -1,
                                        color:
                                          fixedColors.teamA || SHIRT_COLORS[8],
                                      })
                                    }
                                    className="w-full h-8 sm:h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:bg-white/10 hover:border-black/20 dark:border-white/20 transition-all cursor-pointer"
                                  >
                                    <div className="flex items-center justify-center scale-75 sm:scale-100">
                                      {(() => {
                                        const color =
                                          fixedColors.teamA || SHIRT_COLORS[8];
                                        const idx = SHIRT_COLORS.indexOf(color);
                                        const ShirtIcon =
                                          idx !== -1
                                            ? TEAM_ICONS[idx]
                                            : TEAM_ICONS[8];
                                        return (
                                          <ShirtIcon
                                            size={24}
                                            className="brightness-110 drop-shadow-md inline-block"
                                          />
                                        );
                                      })()}
                                    </div>
                                  </button>
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] text-black/60 dark:text-white/50 block text-center mb-1">
                                    Time B
                                  </label>
                                  <button
                                    onClick={() =>
                                      setShowColorPicker({
                                        teamIdx: -2,
                                        color:
                                          fixedColors.teamB || SHIRT_COLORS[7],
                                      })
                                    }
                                    className="w-full h-8 sm:h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:bg-white/10 hover:border-black/20 dark:border-white/20 transition-all cursor-pointer"
                                  >
                                    <div className="flex items-center justify-center scale-75 sm:scale-100">
                                      {(() => {
                                        const color =
                                          fixedColors.teamB || SHIRT_COLORS[7];
                                        const idx = SHIRT_COLORS.indexOf(color);
                                        const ShirtIcon =
                                          idx !== -1
                                            ? TEAM_ICONS[idx]
                                            : TEAM_ICONS[7];
                                        return (
                                          <ShirtIcon
                                            size={24}
                                            className="brightness-110 drop-shadow-md inline-block"
                                          />
                                        );
                                      })()}
                                    </div>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="p-3 sm:p-4 bg-black/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-black/10 dark:border-white/10 shadow-xl flex flex-col justify-between h-[140px] sm:h-[150px]">
                            <div className="flex items-start justify-between">
                              <div className="flex flex-col pr-2">
                                <div className="flex items-center gap-1 sm:gap-1.5 h-6">
                                  <span className="flex items-center justify-center border border-[#2ea625]/50 rounded-full w-4 h-4 sm:w-5 sm:h-5 text-[8px] sm:text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2ea625] to-[#59b823]">
                                    G
                                  </span>
                                  <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
                                    Goleiro fixo
                                  </span>
                                </div>
                                <p className="text-[9px] sm:text-[10px] text-black/60 dark:text-white/50 font-bold mt-0.5 leading-tight">
                                  Ativa a opção de definir goleiros.
                                </p>
                              </div>
                              <button
                                onClick={() =>
                                  setOrgProSettings((prev) => ({
                                    ...prev,
                                    allowFixedGoalkeeper:
                                      !prev.allowFixedGoalkeeper,
                                  }))
                                }
                                className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full p-1 transition-all relative shrink-0 cursor-pointer ${orgProSettings.allowFixedGoalkeeper !== false ? "bg-[#2ea625] dark:bg-[#59b823]" : "bg-black/10 dark:bg-white/10"}`}
                              >
                                <div
                                  className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-transform ${orgProSettings.allowFixedGoalkeeper !== false ? "translate-x-5 sm:translate-x-6 bg-white" : "translate-x-0 bg-white"} shadow-sm`}
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            const duration =
                              parseInt(
                                (
                                  document.getElementById(
                                    "tab-match-duration",
                                  ) as HTMLInputElement
                                ).value,
                              ) || 10;
                            const goals =
                              parseInt(
                                (
                                  document.getElementById(
                                    "tab-match-goals",
                                  ) as HTMLInputElement
                                ).value,
                              ) || 5;
                            const playersCount =
                              parseInt(
                                (
                                  document.getElementById(
                                    "tab-match-players",
                                  ) as HTMLInputElement
                                ).value,
                              ) || 5;

                            if (
                              duration <= 0 ||
                              goals <= 0 ||
                              playersCount <= 0
                            ) {
                              setToast({
                                message:
                                  "As configurações devem ser maiores que zero.",
                                type: "warning",
                              });
                              setTimeout(() => setToast(null), 3000);
                              return;
                            }

                            if (isInitialSetupFlow) {
                              if (players.length < playersCount * 2) {
                                setShowNotEnoughPlayersModal(true);
                                return;
                              }

                              // For first time setup, ensure everyone is absent
                              setPlayers((prev) =>
                                prev.map((p) => ({
                                  ...p,
                                  isAvailable: false,
                                  arrivedAt: undefined,
                                })),
                              );
                              setTeams([]); // Clear teams since everyone is now absent
                              setIsInitialSetupFlow(false);
                              setFirstSetupDone(true);
                              safeLocalStorage.setItem(
                                `futquina_first_setup_done_${groupId}`,
                                "true",
                              );
                              setShowSetupGuide(true);

                              setMatch((prev) => ({
                                ...prev,
                                config: {
                                  duration,
                                  goalLimit: goals,
                                  playersPerTeam: playersCount,
                                },
                                timeRemaining: duration * 60,
                                isActive: false,
                                isPaused: true,
                                hasEnded: false,
                                teamAIndex: -1,
                                teamBIndex: -1,
                                scoreA: 0,
                                scoreB: 0,
                                events: [],
                              }));
                              setTeamsTab("chegada");
                            } else {
                              if (players.length < playersCount * 2) {
                                setShowInsufficientPlayersModal(true);
                                return;
                              }

                              // Update config directly including playersPerTeam so it reflects dynamically in the active matches
                              setMatch((prev) => {
                                let newTimeRemaining = prev.timeRemaining;
                                if (
                                  !prev.isActive ||
                                  prev.hasEnded ||
                                  prev.isPaused
                                ) {
                                  newTimeRemaining = duration * 60;
                                } else if (duration !== prev.config.duration) {
                                  newTimeRemaining =
                                    prev.timeRemaining +
                                    (duration - prev.config.duration) * 60;
                                }
                                if (newTimeRemaining < 0) newTimeRemaining = 0;

                                return {
                                  ...prev,
                                  config: {
                                    ...prev.config,
                                    duration,
                                    goalLimit: goals,
                                    playersPerTeam: playersCount,
                                  },
                                  timeRemaining: newTimeRemaining,
                                };
                              });
                              const availableTotal = players.filter(
                                (p) => p.isAvailable,
                              ).length;
                              if (availableTotal >= playersCount * 2) {
                                // Re-sort players by arrival order to ensure consistency
                                const availablePlayers = [...players]
                                  .filter((p) => p.isAvailable)
                                  .sort(
                                    (a, b) =>
                                      (a.arrivedAt || 0) - (b.arrivedAt || 0),
                                  );

                                const uniquePlayerIds = availablePlayers.map(
                                  (p) => p.id,
                                );
                                const newTeams: Team[] = [];

                                for (
                                  let i = 0;
                                  i < uniquePlayerIds.length;
                                  i += playersCount
                                ) {
                                  const teamPlayers = uniquePlayerIds.slice(
                                    i,
                                    i + playersCount,
                                  );
                                  const teamLetter = String.fromCharCode(
                                    65 + Math.floor(i / playersCount),
                                  );
                                  newTeams.push({
                                    id: generateId(),
                                    name: `Time ${teamLetter}`,
                                    playerIds: teamPlayers,
                                    iconIdx: getNextTeamIconIdx(newTeams),
                                    color: getNextTeamColor(newTeams),
                                  });
                                }

                                setTeams(newTeams);
                                if (newTeams.length >= 2) {
                                  setMatch((prev) => ({
                                    ...prev,
                                    teamAIndex: 0,
                                    teamBIndex: 1,
                                    scoreA: 0,
                                    scoreB: 0,
                                    timeRemaining: prev.config.duration * 60,
                                    isActive: false,
                                    isPaused: true,
                                    hasEnded: false,
                                    events: [],
                                  }));
                                }

                                setTeamsTab("proximos");
                                setToast({
                                  message:
                                    "Configurações aplicadas e times formados!",
                                  type: "success",
                                });
                              } else {
                                setTeamsTab("chegada");
                                setShowArrivalStepGuide(true);
                                setArrivalCardIndex(0);
                                setToast({
                                  message: "Configurações aplicadas!",
                                  type: "success",
                                });
                              }
                              setTimeout(() => setToast(null), 3000);
                            }

                            // Sync session players without resetting isAvailable
                            setSessionPlayerIds(players.map((p) => p.id));
                          }}
                          className="w-full h-9 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          Aplicar Configurações
                        </button>
                      </div>
                    </div>
                  ) : teamsTab === "chegada" ? (
                    <div className="space-y-6 pb-24">
                      {firstSetupDone &&
                        players.filter((p) => sessionPlayerIds.includes(p.id))
                          .length > 0 && (
                          <div className="p-3 sm:p-3.5 bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#2ea625] rounded-2xl border border-emerald-500/30 shadow-md flex flex-row items-center justify-between gap-3 flex-wrap">
                            <div className="flex flex-col gap-0.5">
                              <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-white leading-none">
                                ORDEM DE CHEGADA
                              </h3>
                              <p className="text-[9px] font-medium text-emerald-100/80 leading-none">
                                Controle de quem chegou para jogar
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              {players.some(
                                (p) =>
                                  sessionPlayerIds.includes(p.id) &&
                                  !p.isAvailable,
                              ) && (
                                <button
                                  onClick={() => {
                                    const now = Date.now();

                                    setPlayers((prev) =>
                                      prev.map((pl, idx) => {
                                        if (sessionPlayerIds.includes(pl.id)) {
                                          return {
                                            ...pl,
                                            isAvailable: true,
                                            arrivedAt:
                                              pl.arrivedAt || now + idx,
                                          };
                                        }
                                        return pl;
                                      }),
                                    );

                                    setTeams((prevTeams) => {
                                      const playersInExistingTeams = new Set(
                                        prevTeams.flatMap((t) => t.playerIds),
                                      );
                                      const missingSessionPlayerIds =
                                        sessionPlayerIds.filter(
                                          (id) =>
                                            !playersInExistingTeams.has(id),
                                        );

                                      if (missingSessionPlayerIds.length === 0)
                                        return prevTeams;

                                      const playersPerTeam =
                                        match.config.playersPerTeam;
                                      const newAddedTeams: Team[] = [];

                                      for (
                                        let i = 0;
                                        i < missingSessionPlayerIds.length;
                                        i += playersPerTeam
                                      ) {
                                        const teamPlayers =
                                          missingSessionPlayerIds.slice(
                                            i,
                                            i + playersPerTeam,
                                          );
                                        const teamIndex =
                                          prevTeams.length +
                                          newAddedTeams.length;
                                        const teamLetter = String.fromCharCode(
                                          65 + (teamIndex % 26),
                                        );
                                        newAddedTeams.push({
                                          id: generateId(),
                                          name: `Time ${teamLetter}`,
                                          playerIds: teamPlayers,
                                          iconIdx: getNextTeamIconIdx([
                                            ...prevTeams,
                                            ...newAddedTeams,
                                          ]),
                                          color: getNextTeamColor([
                                            ...prevTeams,
                                            ...newAddedTeams,
                                          ]),
                                        });
                                      }
                                      return [...prevTeams, ...newAddedTeams];
                                    });
                                  }}
                                  className="px-2.5 h-7 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                                >
                                  <span>TODOS</span>
                                </button>
                              )}
                              {players.filter((p) => p.isAvailable).length >=
                                match.config.playersPerTeam * 2 && (
                                <button
                                  onClick={() => {
                                    if (
                                      teams.some((t) => t.playerIds.length > 0)
                                    ) {
                                      if (match.isActive) {
                                        setTeamsTab("historico");
                                      } else {
                                        // Ensure first two teams are selected if not already
                                        if (
                                          teams.length >= 2 &&
                                          (match.teamAIndex === -1 ||
                                            match.teamBIndex === -1)
                                        ) {
                                          setMatch((prev) => ({
                                            ...prev,
                                            teamAIndex: 0,
                                            teamBIndex: 1,
                                          }));
                                        }
                                        setTeamsTab("proximos");
                                      }
                                      return;
                                    }

                                    // Ensure teams are generated from all available players in arrival order
                                    const availablePlayers = [...players]
                                      .filter((p) => p.isAvailable)
                                      .sort(
                                        (a, b) =>
                                          (a.arrivedAt || 0) -
                                          (b.arrivedAt || 0),
                                      );

                                    const playersPerTeam =
                                      match.config.playersPerTeam;
                                    const minNeeded = playersPerTeam * 2;

                                    if (availablePlayers.length < minNeeded) {
                                      setShowInsufficientPlayersModal(true);
                                      return;
                                    }

                                    const updatedPlayerIds =
                                      availablePlayers.map((p) => p.id);
                                    const uniquePlayerIds: string[] = [];
                                    const seenIds = new Set<string>();
                                    updatedPlayerIds.forEach((id) => {
                                      if (!seenIds.has(id)) {
                                        uniquePlayerIds.push(id);
                                        seenIds.add(id);
                                      }
                                    });

                                    const newTeams: Team[] = [];

                                    for (
                                      let i = 0;
                                      i < uniquePlayerIds.length;
                                      i += playersPerTeam
                                    ) {
                                      const teamPlayers = uniquePlayerIds.slice(
                                        i,
                                        i + playersPerTeam,
                                      );
                                      const teamIndex = Math.floor(
                                        i / playersPerTeam,
                                      );
                                      const teamLetter = String.fromCharCode(
                                        65 + teamIndex,
                                      );
                                      newTeams.push({
                                        id: generateId(),
                                        name: `Time ${teamLetter}`,
                                        playerIds: teamPlayers,
                                        iconIdx: getNextTeamIconIdx(newTeams),
                                        color: getNextTeamColor(newTeams),
                                      });
                                    }

                                    setTeams(newTeams);

                                    // Pre-select first two complete teams for a match
                                    if (newTeams.length >= 2) {
                                      setMatch((prev) => ({
                                        ...prev,
                                        teamAIndex: 0,
                                        teamBIndex: 1,
                                        scoreA: 0,
                                        scoreB: 0,
                                        timeRemaining:
                                          prev.config.duration * 60,
                                        isActive: false,
                                        isPaused: true,
                                        hasEnded: false,
                                        events: [],
                                      }));
                                    }

                                    setTeamsTab("proximos");
                                  }}
                                  className="px-2.5 h-7 bg-[#2ea625] hover:brightness-110 border border-emerald-400/40 text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                                >
                                  <span>
                                    <CheckCircle2 size={13} className="text-white" />
                                  </span>
                                  <span>PRONTO</span>
                                </button>
                              )}
                            </div>
                          </div>
                        )}

                      {players.length > 0 && (
                        <div className="w-full bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-300 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 rounded-2xl border border-black/10 dark:border-white/10 mb-4 shadow-sm p-2.5">
                          <div className="flex items-center gap-4 overflow-x-auto scrollbar-none [::-webkit-scrollbar]:hidden px-1 py-1">
                            {/* Add button */}
                            <button
                              onClick={() => {
                                setCurrentScreen("players");
                                setShowAddPlayerSection(true);
                              }}
                              className="flex flex-col items-center gap-1 shrink-0 focus:outline-none group cursor-pointer"
                            >
                              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-black/25 dark:border-white/25 flex items-center justify-center bg-transparent group-hover:border-[#59b823] group-hover:bg-[#59b823]/5 transition-all duration-300">
                                <Plus
                                  size={14}
                                  className="text-black/40 dark:text-white/40 group-hover:text-[#59b823] transition-colors"
                                />
                              </div>
                              <span className="text-[9px] sm:text-[10px] font-bold text-black/50 dark:text-white/50 tracking-wide">
                                Novo
                              </span>
                            </button>

                            {/* Scrollable list of players */}
                            {players.map((player) => {
                              return (
                                <button
                                  key={`quick-presence-${player.id}`}
                                  onClick={() => {
                                    const isNowAvailable = !player.isAvailable;
                                    setPlayers((prev) =>
                                      prev.map((pl) =>
                                        pl.id === player.id
                                          ? {
                                              ...pl,
                                              isAvailable: isNowAvailable,
                                              arrivedAt: isNowAvailable
                                                ? Date.now()
                                                : undefined,
                                            }
                                          : pl,
                                      )
                                    );

                                    if (isNowAvailable) {
                                      setTeams((prevTeams) => {
                                        const allPlayerIds = prevTeams.flatMap(
                                          (t) => t.playerIds,
                                        );
                                        if (allPlayerIds.includes(player.id))
                                          return prevTeams;

                                        const updatedPlayerIds = [
                                          ...allPlayerIds,
                                          player.id,
                                        ];
                                        const newTeams: Team[] = [];
                                        const playersPerTeam =
                                          match.config.playersPerTeam;
                                        for (
                                          let i = 0;
                                          i < updatedPlayerIds.length;
                                          i += playersPerTeam
                                        ) {
                                          const teamPlayers =
                                            updatedPlayerIds.slice(
                                              i,
                                              i + playersPerTeam,
                                            );
                                          const teamIndex = Math.floor(
                                            i / playersPerTeam,
                                          );
                                          const teamLetter = String.fromCharCode(
                                            65 + teamIndex,
                                          );
                                          newTeams.push({
                                            id: generateId(),
                                            name: `Time ${teamLetter}`,
                                            playerIds: teamPlayers,
                                            iconIdx: getNextTeamIconIdx(newTeams),
                                            color: getNextTeamColor(newTeams),
                                          });
                                        }
                                        return newTeams;
                                      });
                                    } else {
                                      setTeams((prevTeams) => {
                                        const allPlayerIds = prevTeams.flatMap(
                                          (t) => t.playerIds,
                                        );
                                        const updatedPlayerIds =
                                          allPlayerIds.filter((id) => id !== player.id);
                                        const newTeams: Team[] = [];
                                        const playersPerTeam =
                                          match.config.playersPerTeam;
                                        for (
                                          let i = 0;
                                          i < updatedPlayerIds.length;
                                          i += playersPerTeam
                                        ) {
                                          const teamPlayers =
                                            updatedPlayerIds.slice(
                                              i,
                                              i + playersPerTeam,
                                            );
                                          const teamIndex = Math.floor(
                                            i / playersPerTeam,
                                          );
                                          const teamLetter = String.fromCharCode(
                                            65 + teamIndex,
                                          );
                                          newTeams.push({
                                            id: generateId(),
                                            name: `Time ${teamLetter}`,
                                            playerIds: teamPlayers,
                                            iconIdx: getNextTeamIconIdx(newTeams),
                                            color: getNextTeamColor(newTeams),
                                          });
                                        }
                                        return newTeams;
                                      });
                                    }
                                  }}
                                  className="flex flex-col items-center gap-1 shrink-0 focus:outline-none group cursor-pointer"
                                >
                                  <div
                                    className={`relative w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                                      player.isAvailable
                                        ? "ring-2 ring-[#59b823] ring-offset-2 ring-offset-white dark:ring-offset-zinc-950 scale-105 shadow-md"
                                        : "ring-1 ring-black/10 dark:ring-white/10 hover:scale-105"
                                    }`}
                                  >
                                    <div
                                      className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50 p-1 shadow-sm`}
                                    >
                                      {player.photo ? (
                                        <img
                                          src={player.photo}
                                          alt={player.name}
                                          className="w-full h-full object-cover rounded-full"
                                          referrerPolicy="no-referrer"
                                        />
                                      ) : (
                                        <span className="text-current opacity-80 flex items-center justify-center">
                                          <IoPersonCircleSharp size={22} />
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <span
                                    className={`text-[8px] sm:text-[9px] font-bold tracking-wide max-w-[50px] truncate text-center ${
                                      player.isAvailable
                                        ? "text-zinc-900 dark:text-white font-extrabold"
                                        : "text-black/50 dark:text-white/40"
                                    }`}
                                  >
                                    {player.name.split(" ")[0]}
                                  </span>
                                </button>
                              );
                            })}
                            {/* Empty spacer to ensure last circle has breathing room and isn't clipped */}
                            <div className="w-4 shrink-0 sm:hidden" />
                          </div>
                        </div>
                      )}

                      {players.filter((p) => p.isAvailable).length <
                        match.config.playersPerTeam * 2 &&
                        players.filter((p) => sessionPlayerIds.includes(p.id))
                          .length > 0 && (
                          <div className="bg-emerald-500/10 rounded-2xl p-4 flex items-center gap-4 border border-emerald-500/20 shadow-sm mb-4 backdrop-blur-md">
                            <div className="text-[#59b823] flex items-center justify-center shrink-0">
                              <IoMdDoneAll size={24} />
                            </div>
                            <div className="flex-1 flex flex-col">
                              <h5 className="text-[13px] font-medium text-zinc-900 dark:text-white border-black/10 leading-tight">
                                Marque os jogadores que já estão presentes na
                                pelada
                              </h5>
                            </div>
                          </div>
                        )}

                      {players.length === 0 || sessionPlayerIds.length === 0 ? (
                        <div className="w-full flex flex-col gap-8 pb-8">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                            {Array.from({ length: 5 }).map((_, idx) => (
                              <div
                                key={`skel-arrival-${idx}`}
                                className="h-16 flex items-center justify-between p-3 rounded-2xl border border-[#2ea625]/20 dark:border-[#59b823]/20 bg-[#2ea625]/5 dark:bg-[#59b823]/5 backdrop-blur-md shadow-sm relative overflow-hidden animate-pulse"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg]" />
                                <div className="flex items-center gap-3 w-full">
                                  <div className="w-10 h-10 rounded-full bg-[#2ea625]/10 dark:bg-[#59b823]/10 shrink-0" />
                                  <div className="flex-1 flex flex-col gap-1.5">
                                    <div className="w-24 h-3 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-full" />
                                    <div className="w-16 h-2 bg-[#2ea625]/5 dark:bg-[#59b823]/5 rounded-full" />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-center">
                            <button
                              onClick={() => {
                                if (players.length < 2) {
                                  setCurrentScreen("players");
                                  setPlayersTab("jogadores");
                                } else {
                                  setCurrentScreen("teams");
                                  setTeamsTab("configuracao");
                                }
                              }}
                              className="px-2.5 h-7 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                            >
                              {players.length < 2
                                ? "CRIAR JOGADORES"
                                : "CONFIGURAR PARTIDA"}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {sessionPlayersSorted.map((p) => (
                            <button
                              key={`arrival-player-below-${p.id}`}
                              onClick={() => {
                                const isNowAvailable = !p.isAvailable;
                                setPlayers((prev) =>
                                  prev.map((pl) =>
                                    pl.id === p.id
                                      ? {
                                          ...pl,
                                          isAvailable: isNowAvailable,
                                          arrivedAt: isNowAvailable
                                            ? Date.now()
                                            : undefined,
                                        }
                                      : pl,
                                  ),
                                );

                                if (isNowAvailable) {
                                  setTeams((prevTeams) => {
                                    // 1. Get all players currently in teams, deduplicated
                                    const allPlayerIds = prevTeams.flatMap(
                                      (t) => t.playerIds,
                                    );
                                    if (allPlayerIds.includes(p.id))
                                      return prevTeams;

                                    // 2. Add new player to the end
                                    const updatedPlayerIds = [
                                      ...allPlayerIds,
                                      p.id,
                                    ];
                                    // 3. Re-group into teams of N
                                    const newTeams: Team[] = [];
                                    const playersPerTeam =
                                      match.config.playersPerTeam;
                                    for (
                                      let i = 0;
                                      i < updatedPlayerIds.length;
                                      i += playersPerTeam
                                    ) {
                                      const teamPlayers =
                                        updatedPlayerIds.slice(
                                          i,
                                          i + playersPerTeam,
                                        );
                                      const teamIndex = Math.floor(
                                        i / playersPerTeam,
                                      );
                                      const teamLetter = String.fromCharCode(
                                        65 + teamIndex,
                                      );
                                      newTeams.push({
                                        id: generateId(),
                                        name: `Time ${teamLetter}`,
                                        playerIds: teamPlayers,
                                        iconIdx: getNextTeamIconIdx(newTeams),
                                        color: getNextTeamColor(newTeams),
                                      });
                                    }
                                    return newTeams;
                                  });
                                } else {
                                  setTeams((prevTeams) => {
                                    // 1. Get all players currently in teams
                                    const allPlayerIds = prevTeams.flatMap(
                                      (t) => t.playerIds,
                                    );
                                    // 2. Remove player
                                    const updatedPlayerIds =
                                      allPlayerIds.filter((id) => id !== p.id);
                                    // 3. Re-group into teams of N
                                    const newTeams: Team[] = [];
                                    const playersPerTeam =
                                      match.config.playersPerTeam;
                                    for (
                                      let i = 0;
                                      i < updatedPlayerIds.length;
                                      i += playersPerTeam
                                    ) {
                                      const teamPlayers =
                                        updatedPlayerIds.slice(
                                          i,
                                          i + playersPerTeam,
                                        );
                                      const teamIndex = Math.floor(
                                        i / playersPerTeam,
                                      );
                                      const teamLetter = String.fromCharCode(
                                        65 + teamIndex,
                                      );
                                      newTeams.push({
                                        id: generateId(),
                                        name: `Time ${teamLetter}`,
                                        playerIds: teamPlayers,
                                        iconIdx: getNextTeamIconIdx(newTeams),
                                        color: getNextTeamColor(newTeams),
                                      });
                                    }
                                    return newTeams;
                                  });
                                }
                              }}
                              className={`flex items-center gap-3 py-2 px-3 rounded-2xl border transition-all active:scale-[0.98] relative overflow-hidden ${
                                p.isAvailable
                                  ? "bg-black/5 dark:bg-white/5 backdrop-blur-md border-black/10 dark:border-white/10 text-zinc-900 dark:text-white shadow-sm"
                                  : "bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5 text-black/50 dark:text-white/40 opacity-60 hover:bg-black/10 dark:bg-white/10"
                              }`}
                            >
                              {p.isAvailable && (
                                <motion.div
                                  key={`sweep-${p.id}`}
                                  initial={{ x: "-200%", opacity: 0 }}
                                  animate={{ x: "200%", opacity: [0, 1, 1, 0] }}
                                  transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.8, 1],
                                  }}
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none z-20"
                                />
                              )}
                              <div
                                className={`w-10 h-10 rounded-full bg-transparent flex items-center justify-center overflow-hidden border transition-colors ${
                                  p.isAvailable
                                    ? "border-[#2ea625] dark:border-[#59b823]"
                                    : "border-black/10 dark:border-white/10"
                                }`}
                              >
                                {p.photo ? (
                                  <img
                                    src={p.photo}
                                    alt="P"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                ) : (
                                  <span
                                    className={
                                      (p.isAvailable
                                        ? "text-[#2ea625] dark:text-[#59b823]"
                                        : "text-black/50 dark:text-white/40") +
                                      " flex items-center shrink-0"
                                    }
                                  >
                                    <IoPersonOutline size={16} />
                                  </span>
                                )}
                              </div>
                              <div className="flex-1 text-left flex flex-col justify-center">
                                <div
                                  className={`text-sm font-normal tracking-tight capitalize leading-none ${p.isAvailable ? "text-zinc-900 dark:text-white" : "text-black/60 dark:text-white/50"}`}
                                >
                                  {p.name.toLowerCase()}
                                </div>
                              </div>
                              {p.isAvailable && (
                                <div className="bg-[#59b823] rounded-full flex items-center justify-center w-5 h-5 shrink-0">
                                  <Check size={12} strokeWidth={3} className="text-white" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : teamsTab === "historico" ? (
                    <div
                      className={`space-y-6 w-full ${match.isActive ? "pt-6 px-2 sm:px-6 pb-0 overflow-hidden" : "pb-24"}`}
                    >
                      {!match.isActive ? (
                        <div className="min-h-[450px] flex flex-col items-center justify-center gap-8 w-full">
                          {players.filter((p) => p.isAvailable).length === 0 ? (
                            <>
                              <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-2 space-y-4 bg-[#2ea625]/5 dark:bg-[#59b823]/5 p-6 rounded-xl border border-[#2ea625]/20 dark:border-[#59b823]/20 shadow-sm backdrop-blur-sm animate-pulse mt-4">
                                <div className="w-24 h-2 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-full mb-2" />
                                <div className="flex items-center justify-between gap-4 px-2 py-2 w-full">
                                  <div className="flex-1 flex flex-col items-center text-center space-y-1">
                                    <div className="w-10 h-10 rounded-full bg-[#2ea625]/10 dark:bg-[#59b823]/10 shrink-0" />
                                    <div className="w-12 h-10 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-md mt-2" />
                                  </div>
                                  <div className="text-sm font-black text-[#2ea625]/30 dark:text-[#59b823]/30 uppercase tracking-widest">
                                    vs
                                  </div>
                                  <div className="flex-1 flex flex-col items-center text-center space-y-1">
                                    <div className="w-10 h-10 rounded-full bg-[#2ea625]/10 dark:bg-[#59b823]/10 shrink-0" />
                                    <div className="w-12 h-10 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-md mt-2" />
                                  </div>
                                </div>
                                <div className="w-full h-12 bg-[#2ea625]/5 dark:bg-[#59b823]/5 rounded-lg border border-[#2ea625]/10 dark:border-[#59b823]/10 mt-4" />
                              </div>
                              <button
                                onClick={() => {
                                  if (players.length < 2) {
                                    setCurrentScreen("players");
                                    setPlayersTab("jogadores");
                                  } else {
                                    setTeamsTab("configuracao");
                                    if (!firstSetupDone) {
                                      setIsInitialSetupFlow(true);
                                    }
                                  }
                                }}
                                className="px-2.5 h-7 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                              >
                                {players.length < 2
                                  ? "CRIAR JOGADORES"
                                  : "CONFIGURAR PARTIDA"}
                              </button>
                            </>
                          ) : players.filter((p) => p.isAvailable).length <
                            match.config.playersPerTeam * 2 ? (
                            <>
                              <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
                                Faltam{" "}
                                {match.config.playersPerTeam * 2 -
                                  players.filter((p) => p.isAvailable)
                                    .length}{" "}
                                jogadores para iniciar
                              </p>
                              <button
                                onClick={() => setTeamsTab("chegada")}
                                className="px-4 py-2 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[10px] rounded-2xl shadow-lg hover:opacity-90 transition-all active:scale-95"
                              >
                                Confirmar Chegada
                              </button>
                            </>
                          ) : (
                            <>
                              {lastMatchResult ? (
                                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-2 space-y-3 bg-black/5 dark:bg-white/5 p-3 sm:p-4 rounded-2xl border border-black/10 dark:border-white/10 shadow-sm backdrop-blur-sm">
                                  {/* Compact App-Themed Result Header Card */}
                                  <div className="w-full p-3 sm:p-4 bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#2ea625] rounded-2xl border border-emerald-500/30 shadow-md text-white flex flex-col items-center justify-center space-y-2">
                                    <p className="text-[10px] sm:text-xs font-black text-emerald-100 uppercase tracking-widest">
                                      Última Partida
                                    </p>
                                    <div className="flex items-center justify-between gap-4 px-2 py-1 w-full">
                                      <div className="flex-1 flex flex-col items-center text-center space-y-1">
                                        <div
                                          className="w-10 h-10 flex items-center justify-center shrink-0 drop-shadow-md"
                                          style={{
                                            color:
                                              lastMatchResult.teamAColor ||
                                              teams[lastMatchResult.teamAIndex]
                                                ?.color ||
                                              TEAM_COLORS[0],
                                          }}
                                        >
                                          {(() => {
                                            let IconA =
                                              TEAM_ICONS[
                                                teams[lastMatchResult.teamAIndex]
                                                  ?.iconIdx ??
                                                  lastMatchResult.teamAIndex %
                                                    TEAM_ICONS.length
                                              ];
                                            if (
                                              fixedColors.enabled &&
                                              fixedColors.teamA &&
                                              lastMatchResult.teamAColor ===
                                                fixedColors.teamA
                                            ) {
                                              const idx = SHIRT_COLORS.indexOf(
                                                fixedColors.teamA,
                                              );
                                              if (idx !== -1)
                                                IconA = TEAM_ICONS[idx];
                                            } else if (
                                              lastMatchResult.teamAColor &&
                                              SHIRT_COLORS.indexOf(
                                                lastMatchResult.teamAColor,
                                              ) !== -1
                                            ) {
                                              const idx = SHIRT_COLORS.indexOf(
                                                lastMatchResult.teamAColor,
                                              );
                                              if (idx !== -1)
                                                IconA = TEAM_ICONS[idx];
                                            }
                                            return <IconA size={24} />;
                                          })()}
                                        </div>
                                        <div className="text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tighter leading-none mt-1">
                                          {lastMatchResult.scoreA}
                                        </div>
                                      </div>

                                      <div className="text-xs font-black text-emerald-200/80 uppercase tracking-widest">
                                        vs
                                      </div>

                                      <div className="flex-1 flex flex-col items-center text-center space-y-1">
                                        <div
                                          className="w-10 h-10 flex items-center justify-center shrink-0 drop-shadow-md"
                                          style={{
                                            color:
                                              lastMatchResult.teamBColor ||
                                              teams[lastMatchResult.teamBIndex]
                                                ?.color ||
                                              TEAM_COLORS[1],
                                          }}
                                        >
                                          {(() => {
                                            let IconB =
                                              TEAM_ICONS[
                                                teams[lastMatchResult.teamBIndex]
                                                  ?.iconIdx ??
                                                  lastMatchResult.teamBIndex %
                                                    TEAM_ICONS.length
                                              ];
                                            if (
                                              fixedColors.enabled &&
                                              fixedColors.teamB &&
                                              lastMatchResult.teamBColor ===
                                                fixedColors.teamB
                                            ) {
                                              const idx = SHIRT_COLORS.indexOf(
                                                fixedColors.teamB,
                                              );
                                              if (idx !== -1)
                                                IconB = TEAM_ICONS[idx];
                                            } else if (
                                              lastMatchResult.teamBColor &&
                                              SHIRT_COLORS.indexOf(
                                                lastMatchResult.teamBColor,
                                              ) !== -1
                                            ) {
                                              const idx = SHIRT_COLORS.indexOf(
                                                lastMatchResult.teamBColor,
                                              );
                                              if (idx !== -1)
                                                IconB = TEAM_ICONS[idx];
                                            }
                                            return <IconB size={24} />;
                                          })()}
                                        </div>
                                        <div className="text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tighter leading-none mt-1">
                                          {lastMatchResult.scoreB}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Timeline Chart */}
                                  {(() => {
                                    const events = [...(lastMatchResult.events || [])].sort(
                                      (a, b) => (a.timestamp || 0) - (b.timestamp || 0)
                                    );
                                    const maxTime =
                                      events.length > 0
                                        ? Math.max(...events.map((e) => e.timestamp || 0), 600)
                                        : 600;

                                    const dataPoints: {
                                      time: string;
                                      goals: number;
                                      scoreA: number;
                                      scoreB: number;
                                      info?: string;
                                    }[] = [];

                                    dataPoints.push({
                                      time: "00:00",
                                      goals: 0,
                                      scoreA: 0,
                                      scoreB: 0,
                                    });

                                    let currentA = 0;
                                    let currentB = 0;
                                    let total = 0;

                                    events.forEach((ev) => {
                                      if (ev.team === "A") currentA++;
                                      else if (ev.team === "B") currentB++;
                                      total++;

                                      const mins = Math.floor((ev.timestamp || 0) / 60);
                                      const secs = Math.floor((ev.timestamp || 0) % 60);
                                      const timeStr = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
                                      const scorer =
                                        players.find((p) => p.id === ev.playerId)?.name || "Gol";

                                      dataPoints.push({
                                        time: timeStr,
                                        goals: total,
                                        scoreA: currentA,
                                        scoreB: currentB,
                                        info: `${scorer} (${timeStr})`,
                                      });
                                    });

                                    const endMins = Math.floor(maxTime / 60);
                                    const endSecs = Math.floor(maxTime % 60);
                                    const endTimeStr = `${endMins.toString().padStart(2, "0")}:${endSecs.toString().padStart(2, "0")}`;
                                    if (dataPoints[dataPoints.length - 1].time !== endTimeStr) {
                                      dataPoints.push({
                                        time: endTimeStr,
                                        goals: total,
                                        scoreA: currentA,
                                        scoreB: currentB,
                                      });
                                    }

                                    if (dataPoints.length === 2 && total === 0) {
                                      dataPoints.splice(
                                        1,
                                        0,
                                        { time: "03:00", goals: 0, scoreA: 0, scoreB: 0 },
                                        { time: "06:00", goals: 0, scoreA: 0, scoreB: 0 }
                                      );
                                    }

                                    return (
                                      <div className="w-full my-2 p-3 bg-transparent dark:bg-[#111812] rounded-2xl border border-black/10 dark:border-white/10 shadow-sm">
                                        <div className="flex items-center justify-between mb-2 px-1">
                                          <span className="text-[10px] font-extrabold text-zinc-800 dark:text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                                            <span className="text-[#2ea625] dark:text-[#59b823] flex items-center shrink-0">
                                              <GiSoccerBall size={14} />
                                            </span>
                                            Linha do Tempo
                                          </span>
                                          <span className="text-[9px] font-semibold text-zinc-500 dark:text-white/50">
                                            {total} gol{total !== 1 ? "s" : ""}
                                          </span>
                                        </div>
                                        <div className="h-28 w-full">
                                          <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart
                                              data={dataPoints}
                                              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                                            >
                                              <defs>
                                                <linearGradient
                                                  id="lastMatchTimelineGrad"
                                                  x1="0"
                                                  y1="0"
                                                  x2="0"
                                                  y2="1"
                                                >
                                                  <stop
                                                    offset="5%"
                                                    stopColor="#59b823"
                                                    stopOpacity={0.5}
                                                  />
                                                  <stop
                                                    offset="95%"
                                                    stopColor="#59b823"
                                                    stopOpacity={0.0}
                                                  />
                                                </linearGradient>
                                              </defs>
                                              <CartesianGrid
                                                strokeDasharray="3 3"
                                                stroke="#88888825"
                                                vertical={false}
                                              />
                                              <XAxis
                                                dataKey="time"
                                                stroke="#88888840"
                                                tick={{ fontSize: 9, fill: "#888888" }}
                                                tickLine={false}
                                              />
                                              <YAxis
                                                stroke="#88888840"
                                                tick={{ fontSize: 9, fill: "#888888" }}
                                                tickLine={false}
                                                allowDecimals={false}
                                              />
                                              <Tooltip
                                                content={({ active, payload }) => {
                                                  if (active && payload && payload.length) {
                                                    const data = payload[0].payload;
                                                    return (
                                                      <div className="bg-white dark:bg-[#1a261c] border border-black/10 dark:border-white/20 p-2 rounded-lg shadow-lg text-[10px] text-zinc-900 dark:text-white">
                                                        <p className="font-bold text-[#2ea625] dark:text-[#59b823] mb-0.5">
                                                          {data.time}
                                                        </p>
                                                        <p className="font-medium">
                                                          Placar: {data.scoreA} x {data.scoreB}
                                                        </p>
                                                        {data.info && (
                                                          <p className="text-zinc-600 dark:text-white/70 text-[9px] mt-0.5">
                                                            {data.info}
                                                          </p>
                                                        )}
                                                      </div>
                                                    );
                                                  }
                                                  return null;
                                                }}
                                              />
                                              <Area
                                                type="monotone"
                                                dataKey="goals"
                                                stroke="#59b823"
                                                strokeWidth={2.5}
                                                fillOpacity={1}
                                                fill="url(#lastMatchTimelineGrad)"
                                                dot={(dotProps: any) => {
                                                  const { cx, cy, index } = dotProps;
                                                  if (cx === undefined || cy === undefined)
                                                    return <g key={`dot-${index}`} />;
                                                  return (
                                                    <foreignObject
                                                      key={`soccer-dot-${index}-${cx}-${cy}`}
                                                      x={cx - 7}
                                                      y={cy - 7}
                                                      width={14}
                                                      height={14}
                                                      style={{ overflow: "visible" }}
                                                    >
                                                      <div className="w-3.5 h-3.5 rounded-full bg-white dark:bg-[#111812] border border-[#2ea625] dark:border-[#59b823] flex items-center justify-center text-[#2ea625] dark:text-[#59b823] shadow-sm">
                                                        <GiSoccerBall size={10} />
                                                      </div>
                                                    </foreignObject>
                                                  );
                                                }}
                                                activeDot={(dotProps: any) => {
                                                  const { cx, cy, index } = dotProps;
                                                  if (cx === undefined || cy === undefined)
                                                    return <g key={`act-dot-${index}`} />;
                                                  return (
                                                    <foreignObject
                                                      key={`active-soccer-dot-${index}-${cx}-${cy}`}
                                                      x={cx - 9}
                                                      y={cy - 9}
                                                      width={18}
                                                      height={18}
                                                      style={{ overflow: "visible" }}
                                                    >
                                                      <div className="w-4.5 h-4.5 rounded-full bg-[#2ea625] dark:bg-[#59b823] text-white flex items-center justify-center shadow-md border border-white">
                                                        <GiSoccerBall size={12} />
                                                      </div>
                                                    </foreignObject>
                                                  );
                                                }}
                                              />
                                            </AreaChart>
                                          </ResponsiveContainer>
                                        </div>
                                      </div>
                                    );
                                  })()}

                                  {/* Scorers display */}
                                  <div className="w-full space-y-2 mt-2 pt-4 border-t border-black/10 dark:border-white/10">
                                    {(lastMatchResult.events || []).map(
                                      (event, idx) => {
                                        const p = players.find(
                                          (pl) => pl.id === event.playerId,
                                        );
                                        const a = event.assistId
                                          ? players.find(
                                              (pl) => pl.id === event.assistId,
                                            )
                                          : null;
                                        if (!p) return null;
                                        return (
                                          <div
                                            key={`last-game-event-${event.id || "e"}-${idx}`}
                                            className="flex items-center justify-between gap-2 p-1.5 rounded-lg border border-black/5 dark:border-white/5"
                                            style={{
                                              backgroundColor:
                                                (event.team === "A"
                                                  ? lastMatchResult.teamAColor ||
                                                    teams[
                                                      lastMatchResult.teamAIndex
                                                    ]?.color
                                                  : lastMatchResult.teamBColor ||
                                                    teams[
                                                      lastMatchResult.teamBIndex
                                                    ]?.color) === "#1a1a1a"
                                                  ? "#ffffff08"
                                                  : (event.team === "A"
                                                      ? lastMatchResult.teamAColor ||
                                                        teams[
                                                          lastMatchResult
                                                            .teamAIndex
                                                        ]?.color
                                                      : lastMatchResult.teamBColor ||
                                                        teams[
                                                          lastMatchResult
                                                            .teamBIndex
                                                        ]?.color ||
                                                        TEAM_COLORS[0]) + "10",
                                            }}
                                          >
                                            <div className="flex items-center gap-1.5 overflow-hidden">
                                              <div className="w-4 h-4 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10">
                                                {p.photo ? (
                                                  <img
                                                    src={p.photo}
                                                    className="w-full h-full object-cover rounded-full"
                                                    referrerPolicy="no-referrer"
                                                  />
                                                ) : (
                                                  <span className="text-black dark:text-zinc-300 flex items-center shrink-0">
                                                    <IoPersonOutline size={8} />
                                                  </span>
                                                )}
                                              </div>
                                              <div className="flex flex-col gap-0.5 min-w-0">
                                                <span className="text-xs font-normal tracking-tight capitalize truncate text-black/90 dark:text-white/90 leading-none">
                                                  {p.name.toLowerCase()}
                                                </span>
                                                <div className="flex gap-0.5">
                                                  {[1, 2, 3, 4, 5].map(
                                                    (star) => (
                                                      <Star
                                                        key={`star-h-${p.id}-${star}`}
                                                        size={6}
                                                        className={`${(p.stars || 3) >= star ? "fill-yellow-400 text-yellow-400" : "text-black/10 dark:text-white/10"}`}
                                                      />
                                                    ),
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                              {a && (
                                                <div
                                                  className="flex items-center gap-1 text-[8px] font-normal text-zinc-600 dark:text-zinc-400"
                                                  title={`Assistência: ${a.name}`}
                                                >
                                                  <Footprints size={8} />{" "}
                                                  <span>
                                                    {
                                                      a.name
                                                        .toLowerCase()
                                                        .split(" ")[0]
                                                    }
                                                  </span>
                                                </div>
                                              )}
                                              <div className="px-1.5 py-0.5 rounded-sm bg-black text-white text-[8px] font-black uppercase tracking-widest">
                                                GOL
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      },
                                    )}
                                  </div>
                                </div>
                              ) : (
                                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                                  Agora você está pronto para iniciar uma
                                  partida
                                </p>
                              )}
                              <button
                                onClick={() => {
                                  // Select first two teams if available
                                  if (teams.length >= 2) {
                                    setMatch((prev) => ({
                                      ...prev,
                                      teamAIndex: 0,
                                      teamBIndex: 1,
                                    }));
                                  }
                                  setTeamsTab("proximos");
                                }}
                                className="px-2.5 h-7 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <span>IR PARA PRÓXIMOS</span>
                              </button>
                            </>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-4 sm:space-y-6 relative pb-12">
                          {match.hasEnded && (
                            <div className="absolute inset-0 z-40 bg-black/10 backdrop-blur-[1px] rounded-2xl pointer-events-auto cursor-default" />
                          )}

                          {/* Match Momentum / Attack Pressure Graph */}
                          {match.isActive && (() => {
                            const totalDurationSeconds = (match.config.duration || 10) * 60;
                            const elapsedSeconds = Math.max(0, Math.min(totalDurationSeconds, totalDurationSeconds - match.timeRemaining));
                            
                            // Total bars across graph width
                            const numBars = 44;
                            const secondsPerBar = totalDurationSeconds / numBars;
                            const currentBarIndex = Math.min(numBars - 1, Math.floor(elapsedSeconds / secondsPerBar));
                            
                            const bars = Array.from({ length: numBars }).map((_, i) => {
                              const barStartTime = i * secondsPerBar;
                              const barEndTime = (i + 1) * secondsPerBar;
                              const isPastOrCurrent = barStartTime <= elapsedSeconds;
                              const isCurrent = i === currentBarIndex && !match.isPaused;
                              
                              if (!isPastOrCurrent) {
                                return { teamA: 0, teamB: 0, hasGoalA: false, hasGoalB: false, isPast: false, isCurrent: false };
                              }
                              
                              const eventsInBarA = (match.events || []).filter(
                                (e) => e.team === "A" && e.timestamp >= barStartTime && e.timestamp < barEndTime
                              );
                              const eventsInBarB = (match.events || []).filter(
                                (e) => e.team === "B" && e.timestamp >= barStartTime && e.timestamp < barEndTime
                              );
                              
                              const hasGoalA = eventsInBarA.length > 0;
                              const hasGoalB = eventsInBarB.length > 0;
                              
                              const seedA = Math.sin(i * 12.9898 + 1.2) * 43758.5453;
                              const noiseA = (seedA - Math.floor(seedA));
                              const waveA = 0.35 + 0.35 * Math.sin(i * 0.4) + noiseA * 0.25;
                              
                              const seedB = Math.sin(i * 78.233 + 3.4) * 43758.5453;
                              const noiseB = (seedB - Math.floor(seedB));
                              const waveB = 0.35 + 0.35 * Math.cos(i * 0.45) + noiseB * 0.25;
                              
                              let teamAVal = Math.min(0.95, Math.max(0.12, waveA));
                              let teamBVal = Math.min(0.95, Math.max(0.12, waveB));
                              
                              if (hasGoalA) teamAVal = 0.98;
                              if (hasGoalB) teamBVal = 0.98;
                              
                              if (isCurrent) {
                                teamAVal = Math.min(0.98, teamAVal + Math.sin(Date.now() / 200) * 0.15);
                                teamBVal = Math.min(0.98, teamBVal + Math.cos(Date.now() / 200) * 0.15);
                              }
                              
                              return {
                                teamA: teamAVal,
                                teamB: teamBVal,
                                hasGoalA,
                                hasGoalB,
                                isPast: true,
                                isCurrent
                              };
                            });
                            
                            const teamA = teams[match.teamAIndex];
                            const teamB = teams[match.teamBIndex];
                            const IconA = teamA ? getTeamIcon(teamA, "A") : Shirt;
                            const IconB = teamB ? getTeamIcon(teamB, "B") : Shirt;
                            
                            const colorA = (fixedColors.enabled && fixedColors.teamA) || teamA?.color || TEAM_COLORS[0];
                            const colorB = (fixedColors.enabled && fixedColors.teamB) || teamB?.color || TEAM_COLORS[1];

                            return (
                              <div className="w-full max-w-3xl mx-auto my-1 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-1.5 sm:p-2 shadow-sm relative overflow-hidden">
                                {/* Main Graph Box */}
                                <div className="relative w-full rounded-xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-[#080d14] flex flex-col">
                                  {/* Top Half: Team A (Green Background) */}
                                  <div className="relative h-10 sm:h-12 w-full bg-[#1b4323] flex items-end px-2 sm:px-3 pt-2 pb-0">
                                    {/* Team Badge Top Left */}
                                    <div className="absolute top-1 left-1.5 sm:left-2 z-20 flex items-center justify-center bg-black/60 backdrop-blur-md p-1 rounded-md border border-white/10 shadow-sm">
                                      <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0" style={{ color: colorA }}>
                                        <IconA size={11} />
                                      </div>
                                    </div>

                                    {/* Goal markers for Team A on top edge */}
                                    <div className="absolute top-0.5 left-2 sm:left-3 right-2 sm:right-3 h-3 pointer-events-none z-20 flex justify-between px-1">
                                      {bars.map((bar, idx) => (
                                        <div key={`goal-top-${idx}`} className="flex-1 flex justify-center items-center">
                                          {bar.hasGoalA && (
                                            <motion.div 
                                              initial={{ scale: 0 }} 
                                              animate={{ scale: 1 }} 
                                              className="w-3 h-3 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md border border-white shrink-0 -mt-0.5"
                                            >
                                              <GiSoccerBall size={8} />
                                            </motion.div>
                                          )}
                                        </div>
                                      ))}
                                    </div>

                                    {/* Vertical Middle Dividing Line */}
                                    <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/20 z-10 pointer-events-none" />

                                    {/* Bars Container for Team A (Extending UPWARDS) */}
                                    <div className="w-full h-full flex items-end justify-between gap-[1px] sm:gap-[2px] z-10 px-1">
                                      {bars.map((bar, idx) => (
                                        <div key={`bar-a-${idx}`} className="flex-1 h-full flex items-end justify-center">
                                          {bar.isPast ? (
                                            <div
                                              className={`w-full rounded-t-[1px] transition-all duration-300 ${
                                                bar.isCurrent 
                                                  ? "bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" 
                                                  : bar.hasGoalA 
                                                  ? "bg-[#4ade80] shadow-[0_0_4px_#4ade80]" 
                                                  : "bg-[#2ea625] dark:bg-[#59b823]"
                                              }`}
                                              style={{ height: `${Math.max(10, bar.teamA * 100)}%` }}
                                            />
                                          ) : (
                                            <div className="w-full h-[1px] bg-white/5 rounded-t-[1px]" />
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Center Horizontal Axis Line */}
                                  <div className="w-full h-[1px] bg-emerald-500/50 relative z-30 shadow-[0_0_3px_rgba(46,166,37,0.4)] flex justify-between items-center px-2">
                                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#090e17] border border-emerald-500/40 text-[5px] font-black tracking-widest text-emerald-400 px-1 rounded-full z-40">
                                      {Math.floor(match.config.duration / 2)}'
                                    </div>
                                  </div>

                                  {/* Bottom Half: Team B (Dark Blue/Indigo Background) */}
                                  <div className="relative h-10 sm:h-12 w-full bg-[#1b253b] flex items-start px-2 sm:px-3 pb-2 pt-0">
                                    {/* Team Badge Bottom Left */}
                                    <div className="absolute bottom-1 left-1.5 sm:left-2 z-20 flex items-center justify-center bg-black/60 backdrop-blur-md p-1 rounded-md border border-white/10 shadow-sm">
                                      <div className="w-3.5 h-3.5 flex items-center justify-center shrink-0" style={{ color: colorB }}>
                                        <IconB size={11} />
                                      </div>
                                    </div>

                                    {/* Goal markers for Team B on bottom edge */}
                                    <div className="absolute bottom-0.5 left-2 sm:left-3 right-2 sm:right-3 h-3 pointer-events-none z-20 flex justify-between px-1">
                                      {bars.map((bar, idx) => (
                                        <div key={`goal-bot-${idx}`} className="flex-1 flex justify-center items-center">
                                          {bar.hasGoalB && (
                                            <motion.div 
                                              initial={{ scale: 0 }} 
                                              animate={{ scale: 1 }} 
                                              className="w-3 h-3 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-md border border-white shrink-0 -mb-0.5"
                                            >
                                              <GiSoccerBall size={8} />
                                            </motion.div>
                                          )}
                                        </div>
                                      ))}
                                    </div>

                                    {/* Vertical Middle Dividing Line */}
                                    <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/20 z-10 pointer-events-none" />

                                    {/* Bars Container for Team B (Extending DOWNWARDS) */}
                                    <div className="w-full h-full flex items-start justify-between gap-[1px] sm:gap-[2px] z-10 px-1">
                                      {bars.map((bar, idx) => (
                                        <div key={`bar-b-${idx}`} className="flex-1 h-full flex items-start justify-center">
                                          {bar.isPast ? (
                                            <div
                                              className={`w-full rounded-b-[1px] transition-all duration-300 ${
                                                bar.isCurrent 
                                                  ? "bg-[#818cf8] shadow-[0_0_6px_#818cf8] animate-pulse" 
                                                  : bar.hasGoalB 
                                                  ? "bg-[#818cf8] shadow-[0_0_4px_#818cf8]" 
                                                  : "bg-[#6366f1]"
                                              }`}
                                              style={{ height: `${Math.max(10, bar.teamB * 100)}%` }}
                                            />
                                          ) : (
                                            <div className="w-full h-[1px] bg-white/5 rounded-b-[1px]" />
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })()}

                          <div className="sticky top-[-1px] z-40 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 p-4 sm:p-6 flex flex-row items-center justify-between gap-2 sm:gap-4 rounded-2xl w-full max-w-3xl mx-auto relative overflow-hidden shadow-lg">
                            <div className="flex-1 flex flex-col items-center text-center space-y-2 sm:space-y-4">
                              <button
                                className="w-10 h-10 sm:w-20 sm:h-20 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed drop-shadow-sm"
                                disabled={match.hasEnded}
                                onClick={() => {
                                  if (match.teamAIndex === -1) return;
                                  setShowColorPicker({
                                    teamIdx: match.teamAIndex,
                                    color:
                                      (fixedColors.enabled &&
                                        fixedColors.teamA) ||
                                      teams[match.teamAIndex]?.color ||
                                      TEAM_COLORS[0],
                                  });
                                }}
                              >
                                {(() => {
                                  const team = teams[match.teamAIndex];
                                  if (!team) return null;
                                  const Icon = getTeamIcon(team, "A");
                                  const color =
                                    (fixedColors.enabled &&
                                      fixedColors.teamA) ||
                                    team.color ||
                                    TEAM_COLORS[0];
                                  return (
                                    <div
                                      className="w-full h-full drop-shadow-md flex items-center justify-center"
                                      style={{ color }}
                                    >
                                      <Icon size={70} />
                                    </div>
                                  );
                                })()}
                              </button>
                              <div
                                className={`text-4xl sm:text-6xl font-black origin-center text-zinc-900 dark:text-white ${!match.isActive || match.isPaused ? "opacity-50" : ""} tabular-nums tracking-tighter leading-none flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20`}
                              >
                                {match.scoreA}
                              </div>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-2 sm:gap-6 min-w-[70px] sm:min-w-[140px]">
                              <FlipClock
                                clockId="scoreboard-primary"
                                time={match.timeRemaining}
                                size="xs"
                              />
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-2 sm:gap-3">
                                  <button
                                    disabled={
                                      !(
                                        match.teamAIndex !== -1 &&
                                        match.teamBIndex !== -1 &&
                                        teams[match.teamAIndex]?.playerIds
                                          ?.length ===
                                          match.config.playersPerTeam &&
                                        teams[match.teamBIndex]?.playerIds
                                          ?.length ===
                                          match.config.playersPerTeam
                                      ) ||
                                      match.scoreA >= match.config.goalLimit ||
                                      match.scoreB >= match.config.goalLimit
                                    }
                                    onClick={() => {
                                      setMatch((prev) => {
                                        const nextIsPaused = !prev.isPaused;
                                        if (nextIsPaused) {
                                          sounds.playPause();
                                        } else {
                                          sounds.playStartMatch();
                                        }
                                        return {
                                          ...prev,
                                          isPaused: nextIsPaused,
                                          isActive: true,
                                        };
                                      });
                                    }}
                                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all shadow-md bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white hover:opacity-90 disabled:opacity-20 disabled:cursor-not-allowed border border-black/5 dark:border-white/5`}
                                  >
                                    {match.isPaused ? (
                                      <Play
                                        size={16}
                                        className="sm:w-5 sm:h-5"
                                        fill="currentColor"
                                      />
                                    ) : (
                                      <Pause
                                        size={16}
                                        className="sm:w-5 sm:h-5"
                                        fill="currentColor"
                                      />
                                    )}
                                  </button>
                                  <AnimatePresence>
                                    {match.isActive && (
                                      <motion.button
                                        initial={{
                                          opacity: 0,
                                          scale: 0.5,
                                          x: -20,
                                        }}
                                        animate={{ opacity: 1, scale: 1, x: 0 }}
                                        exit={{
                                          opacity: 0,
                                          scale: 0.5,
                                          x: -20,
                                        }}
                                        disabled={
                                          !(
                                            match.teamAIndex !== -1 &&
                                            match.teamBIndex !== -1 &&
                                            teams[match.teamAIndex]?.playerIds
                                              ?.length ===
                                              match.config.playersPerTeam &&
                                            teams[match.teamBIndex]?.playerIds
                                              ?.length ===
                                              match.config.playersPerTeam
                                          ) ||
                                          match.scoreA >=
                                            match.config.goalLimit ||
                                          match.scoreB >= match.config.goalLimit
                                        }
                                        onClick={finishMatch}
                                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all bg-gradient-to-r from-[#dc2626] via-[#ef4444] to-[#991b1b] text-white shadow-md hover:opacity-90 disabled:opacity-20 disabled:cursor-not-allowed border border-black/5 dark:border-white/5"
                                        title="Finalizar Partida"
                                      >
                                        <Square
                                          size={16}
                                          className="sm:w-5 sm:h-5"
                                          fill="currentColor"
                                        />
                                      </motion.button>
                                    )}
                                  </AnimatePresence>
                                </div>
                              </div>
                            </div>

                            <div className="flex-1 flex flex-col items-center text-center space-y-2 sm:space-y-4">
                              <button
                                className="w-10 h-10 sm:w-20 sm:h-20 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed drop-shadow-sm"
                                disabled={match.hasEnded}
                                onClick={() => {
                                  if (match.teamBIndex === -1) return;
                                  setShowColorPicker({
                                    teamIdx: match.teamBIndex,
                                    color:
                                      (fixedColors.enabled &&
                                        fixedColors.teamB) ||
                                      teams[match.teamBIndex]?.color ||
                                      TEAM_COLORS[1],
                                  });
                                }}
                              >
                                {(() => {
                                  const team = teams[match.teamBIndex];
                                  if (!team) return null;
                                  const Icon = getTeamIcon(team, "B");
                                  const color =
                                    (fixedColors.enabled &&
                                      fixedColors.teamB) ||
                                    team.color ||
                                    TEAM_COLORS[1];
                                  return (
                                    <div
                                      className="w-full h-full drop-shadow-md flex items-center justify-center"
                                      style={{ color }}
                                    >
                                      <Icon size={70} />
                                    </div>
                                  );
                                })()}
                              </button>
                              <div
                                className={`text-4xl sm:text-6xl font-black origin-center text-zinc-900 dark:text-white ${!match.isActive || match.isPaused ? "opacity-50" : ""} tabular-nums tracking-tighter leading-none flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20`}
                              >
                                {match.scoreB}
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 bg-black/5 dark:bg-white/5 p-3 pt-4 rounded-xl border border-black/10 dark:border-white/10 mb-8 relative overflow-hidden">
                            {/* Team Color Top Bars */}
                            <div
                              className="absolute top-0 left-0 w-1/2 h-1 z-10"
                              style={{
                                backgroundColor:
                                  (fixedColors.enabled && fixedColors.teamA) ||
                                  teams[match.teamAIndex]?.color ||
                                  TEAM_COLORS[0],
                              }}
                            />
                            <div
                              className="absolute top-0 right-0 w-1/2 h-1 z-10"
                              style={{
                                backgroundColor:
                                  (fixedColors.enabled && fixedColors.teamB) ||
                                  teams[match.teamBIndex]?.color ||
                                  TEAM_COLORS[1],
                              }}
                            />
                            <div className="space-y-2 relative z-20">
                              {sortedTeamAPlayers.map((pid, idx) => {
                                const p = players.find((pl) => pl.id === pid);
                                if (!p) return null;
                                const matchGoals = match.events.filter(
                                  (e) =>
                                    e.type === "goal" && e.playerId === pid,
                                ).length;
                                const matchAssists = match.events.filter(
                                  (e) =>
                                    e.type === "goal" && e.assistId === pid,
                                ).length;
                                return (
                                  <button
                                    key={`partida-p-a-${pid}`}
                                    disabled={
                                      match.scoreA >= match.config.goalLimit ||
                                      match.scoreB >= match.config.goalLimit
                                    }
                                    onClick={() => {
                                      if (swappingPlayerId) {
                                        if (swappingPlayerId === pid) {
                                          setSwappingPlayerId(null);
                                          setToast({
                                            message: "Troca cancelada.",
                                            type: "info",
                                          });
                                          return;
                                        }

                                        handleGoalkeeperSwap(
                                          swappingPlayerId,
                                          pid,
                                        );
                                        setTeams((prev) => {
                                          const newTeams = [...prev].map(
                                            (team) => ({
                                              ...team,
                                              playerIds: [...team.playerIds],
                                            }),
                                          );
                                          let swapTeamIdx = -1;
                                          let currentTeamIdx = match.teamAIndex;

                                          for (
                                            let i = 0;
                                            i < newTeams.length;
                                            i++
                                          ) {
                                            if (
                                              newTeams[i].playerIds.includes(
                                                swappingPlayerId,
                                              )
                                            )
                                              swapTeamIdx = i;
                                          }

                                          if (
                                            swapTeamIdx !== -1 &&
                                            currentTeamIdx !== -1
                                          ) {
                                            const pAId = swappingPlayerId;
                                            const pBId = pid;
                                            if (
                                              swapTeamIdx === currentTeamIdx
                                            ) {
                                              newTeams[swapTeamIdx].playerIds =
                                                newTeams[
                                                  swapTeamIdx
                                                ].playerIds.map((id) => {
                                                  if (id === pAId) return pBId;
                                                  if (id === pBId) return pAId;
                                                  return id;
                                                });
                                            } else {
                                              newTeams[swapTeamIdx].playerIds =
                                                newTeams[
                                                  swapTeamIdx
                                                ].playerIds.map((id) =>
                                                  id === pAId ? pBId : id,
                                                );
                                              newTeams[
                                                currentTeamIdx
                                              ].playerIds = newTeams[
                                                currentTeamIdx
                                              ].playerIds.map((id) =>
                                                id === pBId ? pAId : id,
                                              );
                                            }
                                            setToast({
                                              message: "Jogadores trocados!",
                                              type: "success",
                                            });
                                          }
                                          return newTeams;
                                        });
                                        setSwappingPlayerId(null);
                                        return;
                                      }
                                      setShowPlayerActionsModal({
                                        teamIndex: match.teamAIndex,
                                        playerId: pid,
                                      });
                                    }}
                                    className={`w-full flex flex-row-reverse items-center p-1.5 rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 ${
                                      swappingPlayerId === pid
                                        ? "border-2 border-[#53B986] shadow-lg scale-105 relative z-10"
                                        : swappingPlayerId &&
                                            swappingPlayerId !== pid
                                          ? "border-2 border-[#53B986] shadow-sm animate-pulse shadow-[#53B986]/10"
                                          : "border border-black/5 dark:border-white/5 group"
                                    }`}
                                  >
                                    <div className="w-5 h-5 sm:w-4 sm:h-4 rounded-full bg-transparent flex items-center justify-center shrink-0 overflow-hidden ml-3">
                                      {p.isGoalkeeper ? (
                                        <div className="flex items-center justify-center rounded-full w-4 h-4 text-[9px] font-black leading-none text-blue-900 dark:text-blue-400">
                                          G
                                        </div>
                                      ) : p.photo ? (
                                        <img
                                          src={p.photo}
                                          className="w-full h-full object-cover rounded-full"
                                          referrerPolicy="no-referrer"
                                        />
                                      ) : (
                                        <span className="text-black/50 dark:text-white/40 flex items-center shrink-0">
                                          <IoPersonOutline size={10} />
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex flex-col items-end gap-0.5 overflow-hidden">
                                      <span className="text-xs font-normal tracking-tight capitalize truncate text-black/90 dark:text-white/90 leading-none text-right">
                                        {p.name.toLowerCase()}
                                      </span>
                                      <div className="flex flex-row-reverse gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <Star
                                            key={`star-${p.id}-${star}`}
                                            size={6}
                                            className={`${(p.stars || 3) >= star ? "fill-yellow-400 text-yellow-400" : "text-black/20 dark:text-white/20"}`}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1 mr-auto">
                                      {matchAssists > 0 && (
                                        <div className="flex items-center gap-0.5 text-[10px] font-bold text-black/60 dark:text-white/50">
                                          <Footprints size={10} />{" "}
                                          {matchAssists}
                                        </div>
                                      )}
                                      {matchGoals > 0 && (
                                        <div className="flex items-center gap-0.5 text-[10px] font-bold text-black/60 dark:text-white/50">
                                          <CircleDot size={10} /> {matchGoals}
                                        </div>
                                      )}
                                      {playerEvents[p.id] && (
                                        <div className="flex items-center justify-center shrink-0 w-5 h-5 bg-black/5 dark:bg-white/50 rounded-full shadow-sm ml-1">
                                          {playerEvents[p.id].type ===
                                            "swap" && (
                                            <span className="text-blue-500 animate-pulse">
                                              <IoMdSwap size={12} />
                                            </span>
                                          )}
                                          {playerEvents[p.id].type === "up" && (
                                            <span className="text-green-800 animate-bounce">
                                              <IoMdArrowUp size={12} />
                                            </span>
                                          )}
                                          {playerEvents[p.id].type ===
                                            "down" && (
                                            <span className="text-red-500 animate-bounce">
                                              <IoMdArrowDown size={12} />
                                            </span>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </button>
                                );
                              })}
                              {Array.from({
                                length: Math.max(
                                  0,
                                  match.config.playersPerTeam -
                                    (teams[match.teamAIndex]?.playerIds
                                      ?.length || 0),
                                ),
                              }).map((_, i) => (
                                <button
                                  key={`empty-a-${i}`}
                                  onClick={() => {
                                    if (
                                      movingPlayers &&
                                      isSelectingDestination
                                    ) {
                                      const sourceTeamIdx = teams.findIndex(
                                        (team) =>
                                          team.id === movingPlayers.teamId,
                                      );
                                      if (sourceTeamIdx === match.teamAIndex) {
                                        setToast({
                                          message:
                                            "Os jogadores já estão neste time.",
                                          type: "info",
                                        });
                                        setMovingPlayers(null);
                                        setIsSelectingDestination(false);
                                        return;
                                      }
                                      const availableSlots =
                                        match.config.playersPerTeam -
                                        (teams[match.teamAIndex]?.playerIds
                                          ?.length || 0);
                                      if (availableSlots <= 0) {
                                        setToast({
                                          message:
                                            "Este time já está completo.",
                                          type: "warning",
                                        });
                                        return;
                                      }
                                      const playersToMove =
                                        movingPlayers.playerIds.slice(
                                          0,
                                          availableSlots,
                                        );
                                      setTeams((prev) => {
                                        const newTeams = [...prev].map(
                                          (team) => ({
                                            ...team,
                                            playerIds: [...team.playerIds],
                                          }),
                                        );
                                        const sTeam = newTeams.find(
                                          (team) =>
                                            team.id === movingPlayers.teamId,
                                        );
                                        if (sTeam) {
                                          sTeam.playerIds =
                                            sTeam.playerIds.filter(
                                              (id) =>
                                                !playersToMove.includes(id),
                                            );
                                        }
                                        if (newTeams[match.teamAIndex]) {
                                          newTeams[
                                            match.teamAIndex
                                          ].playerIds.push(...playersToMove);
                                        }
                                        return newTeams.filter(
                                          (team) => team.playerIds.length > 0,
                                        );
                                      });

                                      if (
                                        playersToMove.length <
                                        movingPlayers.playerIds.length
                                      ) {
                                        setMovingPlayers((prev) =>
                                          prev
                                            ? {
                                                ...prev,
                                                playerIds:
                                                  prev.playerIds.slice(
                                                    availableSlots,
                                                  ),
                                              }
                                            : null,
                                        );
                                        setToast({
                                          message: `Apenas ${availableSlots} jogador(es) movido(s). Selecione outro time para o(s) restante(s).`,
                                          type: "info",
                                        });
                                      } else {
                                        setMovingPlayers(null);
                                        setIsSelectingDestination(false);
                                        setToast({
                                          message:
                                            "Jogador(es) movido(s) para o Time A!",
                                          type: "success",
                                        });
                                      }
                                    }
                                  }}
                                  className={`w-full flex items-center justify-center p-1.5 rounded-xl border border-dashed transition-all active:scale-95 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/20 dark:text-white/20 hover:bg-black/10 dark:bg-white/10 ${movingPlayers && isSelectingDestination ? "animate-pulse border-brand-primary" : ""}`}
                                >
                                  <Plus size={12} />
                                </button>
                              ))}
                            </div>
                            <div className="space-y-2">
                              {sortedTeamBPlayers.map((pid, idx) => {
                                const p = players.find((pl) => pl.id === pid);
                                if (!p) return null;
                                const matchGoals = match.events.filter(
                                  (e) =>
                                    e.type === "goal" && e.playerId === pid,
                                ).length;
                                const matchAssists = match.events.filter(
                                  (e) =>
                                    e.type === "goal" && e.assistId === pid,
                                ).length;
                                return (
                                  <button
                                    key={`partida-p-b-${pid}`}
                                    disabled={
                                      match.scoreA >= match.config.goalLimit ||
                                      match.scoreB >= match.config.goalLimit
                                    }
                                    onClick={() => {
                                      if (swappingPlayerId) {
                                        if (swappingPlayerId === pid) {
                                          setSwappingPlayerId(null);
                                          setToast({
                                            message: "Troca cancelada.",
                                            type: "info",
                                          });
                                          return;
                                        }

                                        handleGoalkeeperSwap(
                                          swappingPlayerId,
                                          pid,
                                        );
                                        setTeams((prev) => {
                                          const newTeams = [...prev].map(
                                            (team) => ({
                                              ...team,
                                              playerIds: [...team.playerIds],
                                            }),
                                          );
                                          let swapTeamIdx = -1;
                                          let currentTeamIdx = match.teamBIndex;

                                          for (
                                            let i = 0;
                                            i < newTeams.length;
                                            i++
                                          ) {
                                            if (
                                              newTeams[i].playerIds.includes(
                                                swappingPlayerId,
                                              )
                                            )
                                              swapTeamIdx = i;
                                          }

                                          if (
                                            swapTeamIdx !== -1 &&
                                            currentTeamIdx !== -1
                                          ) {
                                            const pAId = swappingPlayerId;
                                            const pBId = pid;
                                            if (
                                              swapTeamIdx === currentTeamIdx
                                            ) {
                                              newTeams[swapTeamIdx].playerIds =
                                                newTeams[
                                                  swapTeamIdx
                                                ].playerIds.map((id) => {
                                                  if (id === pAId) return pBId;
                                                  if (id === pBId) return pAId;
                                                  return id;
                                                });
                                            } else {
                                              newTeams[swapTeamIdx].playerIds =
                                                newTeams[
                                                  swapTeamIdx
                                                ].playerIds.map((id) =>
                                                  id === pAId ? pBId : id,
                                                );
                                              newTeams[
                                                currentTeamIdx
                                              ].playerIds = newTeams[
                                                currentTeamIdx
                                              ].playerIds.map((id) =>
                                                id === pBId ? pAId : id,
                                              );
                                            }
                                            setToast({
                                              message: "Jogadores trocados!",
                                              type: "success",
                                            });
                                          }
                                          return newTeams;
                                        });
                                        setSwappingPlayerId(null);
                                        return;
                                      }
                                      setShowPlayerActionsModal({
                                        teamIndex: match.teamBIndex,
                                        playerId: pid,
                                      });
                                    }}
                                    className={`w-full flex items-center p-1.5 rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 ${
                                      swappingPlayerId === pid
                                        ? "border-2 border-[#53B986] shadow-lg scale-105 relative z-10"
                                        : swappingPlayerId &&
                                            swappingPlayerId !== pid
                                          ? "border-2 border-[#53B986] shadow-sm animate-pulse shadow-[#53B986]/10"
                                          : "border border-black/5 dark:border-white/5 group"
                                    }`}
                                  >
                                    <div className="w-5 h-5 sm:w-4 sm:h-4 rounded-full bg-transparent flex items-center justify-center shrink-0 overflow-hidden mr-3">
                                      {p.isGoalkeeper ? (
                                        <div className="flex items-center justify-center rounded-full w-4 h-4 text-[9px] font-black leading-none text-blue-900 dark:text-blue-400">
                                          G
                                        </div>
                                      ) : p.photo ? (
                                        <img
                                          src={p.photo}
                                          className="w-full h-full object-cover rounded-full"
                                          referrerPolicy="no-referrer"
                                        />
                                      ) : (
                                        <span className="text-black/50 dark:text-white/40 flex items-center shrink-0">
                                          <IoPersonOutline size={10} />
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex flex-col gap-0.5 overflow-hidden">
                                      <span className="text-xs font-normal tracking-tight capitalize truncate text-black/90 dark:text-white/90 leading-none">
                                        {p.name.toLowerCase()}
                                      </span>
                                      <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <Star
                                            key={`star-b-${p.id}-${star}`}
                                            size={6}
                                            className={`${(p.stars || 3) >= star ? "fill-yellow-400 text-yellow-400" : "text-black/20 dark:text-white/20"}`}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1 ml-auto">
                                      {playerEvents[p.id] && (
                                        <div className="flex items-center justify-center shrink-0 w-5 h-5 bg-black/5 dark:bg-white/50 rounded-full shadow-sm mr-1">
                                          {playerEvents[p.id].type ===
                                            "swap" && (
                                            <span className="text-blue-500 animate-pulse">
                                              <IoMdSwap size={12} />
                                            </span>
                                          )}
                                          {playerEvents[p.id].type === "up" && (
                                            <span className="text-green-800 animate-bounce">
                                              <IoMdArrowUp size={12} />
                                            </span>
                                          )}
                                          {playerEvents[p.id].type ===
                                            "down" && (
                                            <span className="text-red-500 animate-bounce">
                                              <IoMdArrowDown size={12} />
                                            </span>
                                          )}
                                        </div>
                                      )}
                                      {matchGoals > 0 && (
                                        <div className="flex items-center gap-0.5 text-[10px] font-bold text-black/60 dark:text-white/50">
                                          <CircleDot size={10} /> {matchGoals}
                                        </div>
                                      )}
                                      {matchAssists > 0 && (
                                        <div className="flex items-center gap-0.5 text-[10px] font-bold text-black/60 dark:text-white/50">
                                          <Footprints size={10} />{" "}
                                          {matchAssists}
                                        </div>
                                      )}
                                    </div>
                                  </button>
                                );
                              })}
                              {Array.from({
                                length: Math.max(
                                  0,
                                  match.config.playersPerTeam -
                                    (teams[match.teamBIndex]?.playerIds
                                      ?.length || 0),
                                ),
                              }).map((_, i) => (
                                <button
                                  key={`empty-b-${i}`}
                                  onClick={() => {
                                    if (
                                      movingPlayers &&
                                      isSelectingDestination
                                    ) {
                                      const sourceTeamIdx = teams.findIndex(
                                        (team) =>
                                          team.id === movingPlayers.teamId,
                                      );
                                      if (sourceTeamIdx === match.teamBIndex) {
                                        setToast({
                                          message:
                                            "Os jogadores já estão neste time.",
                                          type: "info",
                                        });
                                        setMovingPlayers(null);
                                        setIsSelectingDestination(false);
                                        return;
                                      }
                                      const availableSlots =
                                        match.config.playersPerTeam -
                                        (teams[match.teamBIndex]?.playerIds
                                          ?.length || 0);
                                      if (availableSlots <= 0) {
                                        setToast({
                                          message:
                                            "Este time já está completo.",
                                          type: "warning",
                                        });
                                        return;
                                      }
                                      const playersToMove =
                                        movingPlayers.playerIds.slice(
                                          0,
                                          availableSlots,
                                        );
                                      setTeams((prev) => {
                                        const newTeams = [...prev].map(
                                          (team) => ({
                                            ...team,
                                            playerIds: [...team.playerIds],
                                          }),
                                        );
                                        const sTeam = newTeams.find(
                                          (team) =>
                                            team.id === movingPlayers.teamId,
                                        );
                                        if (sTeam) {
                                          sTeam.playerIds =
                                            sTeam.playerIds.filter(
                                              (id) =>
                                                !playersToMove.includes(id),
                                            );
                                        }
                                        if (newTeams[match.teamBIndex]) {
                                          newTeams[
                                            match.teamBIndex
                                          ].playerIds.push(...playersToMove);
                                        }
                                        return newTeams.filter(
                                          (team) => team.playerIds.length > 0,
                                        );
                                      });
                                      if (
                                        playersToMove.length <
                                        movingPlayers.playerIds.length
                                      ) {
                                        setMovingPlayers((prev) =>
                                          prev
                                            ? {
                                                ...prev,
                                                playerIds:
                                                  prev.playerIds.slice(
                                                    availableSlots,
                                                  ),
                                              }
                                            : null,
                                        );
                                        setToast({
                                          message: `Apenas ${availableSlots} jogador(es) movido(s). Selecione outro time para o(s) restante(s).`,
                                          type: "info",
                                        });
                                      } else {
                                        setMovingPlayers(null);
                                        setIsSelectingDestination(false);
                                        setToast({
                                          message:
                                            "Jogador(es) movido(s) para o Time B!",
                                          type: "success",
                                        });
                                      }
                                    }
                                  }}
                                  className={`w-full flex items-center justify-center p-1.5 rounded-xl border border-dashed transition-all active:scale-95 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-black/20 dark:text-white/20 hover:bg-black/10 dark:bg-white/10 ${movingPlayers && isSelectingDestination ? "animate-pulse border-brand-primary" : ""}`}
                                >
                                  <Plus size={12} />
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : teamsTab === "proximos" ? (
                    <div className="space-y-6 pb-24 relative overflow-visible w-full">
                      {firstSetupDone && teams.length >= 2 && (
                        <div className="sticky top-0 z-40 bg-white/80 dark:bg-[#111625]/80 backdrop-blur-md rounded-full p-1 mb-2 shadow-sm border border-black/10 dark:border-white/10 flex justify-between items-center">
                          <div className="flex items-center pl-2">
                            <button
                              onClick={() => {
                                const newState = !autoCompleteTeams;
                                setAutoCompleteTeams(newState);
                                if (newState) {
                                  setShowAutoCompleteModal(true);
                                } else {
                                  setToast({
                                    message: "Subida automática desativada",
                                    type: "info",
                                  });
                                }
                              }}
                              className={`w-9 h-5 rounded-full p-0.5 transition-all duration-300 relative shrink-0 ${autoCompleteTeams ? "bg-[#2ea625] dark:bg-[#59b823]" : "bg-black/20 dark:bg-white/20"}`}
                              title="Subir automaticamente"
                            >
                              <div
                                className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 transform ${autoCompleteTeams ? "translate-x-4" : "translate-x-0"}`}
                              />
                            </button>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => {
                                if (match.isActive && !match.hasEnded) return;
                                if (
                                  teams.filter(
                                    (t) =>
                                      t.playerIds.length ===
                                      match.config.playersPerTeam,
                                  ).length < 2
                                )
                                  return;

                                setShowLogoAnimation(true);
                                setTimeout(() => {
                                  randomizeTeams(match.config.playersPerTeam);
                                  setShowLogoAnimation(false);
                                  sounds.playDrawFinished();
                                  setToast({
                                    message: "Times sorteados com sucesso!",
                                    type: "success",
                                  });
                                }, 3000);
                              }}
                              disabled={
                                (match.isActive && !match.hasEnded) ||
                                teams.filter(
                                  (t) =>
                                    t.playerIds.length ===
                                    match.config.playersPerTeam,
                                ).length < 2
                              }
                              className="px-3.5 h-8 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full shadow-sm hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-95 flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <span className="text-zinc-900 dark:text-white">
                                <PiShuffleAngularBold size={14} />
                              </span>
                              <span className="text-[8px] font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                                Sortear
                              </span>
                            </button>
                            <button
                              onClick={() => {
                                if (match.isActive && !match.hasEnded) {
                                  setShowStartMatchConfirm(true);
                                  return;
                                }

                                if (
                                  match.teamAIndex !== -1 &&
                                  match.teamBIndex !== -1 &&
                                  teams[match.teamAIndex]?.playerIds?.length ===
                                    match.config.playersPerTeam &&
                                  teams[match.teamBIndex]?.playerIds?.length ===
                                    match.config.playersPerTeam
                                ) {
                                  startNextMatch(
                                    match.teamAIndex,
                                    match.teamBIndex,
                                  );
                                }
                              }}
                              disabled={
                                !(
                                  match.teamAIndex !== -1 &&
                                  match.teamBIndex !== -1 &&
                                  teams[match.teamAIndex]?.playerIds?.length ===
                                    match.config.playersPerTeam &&
                                  teams[match.teamBIndex]?.playerIds?.length ===
                                    match.config.playersPerTeam
                                )
                              }
                              className="px-2.5 h-7 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <span className="text-white">
                                <IoFootballOutline size={13} />
                              </span>
                              <span>INICIAR</span>
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        {teams.length < 2 ? (
                          <div className="w-full flex flex-col gap-8 pb-8 pt-4">
                            <div className="space-y-4">
                              {Array.from({ length: 2 }).map((_, idx) => (
                                <div
                                  key={`skel-team-${idx}`}
                                  className="p-4 rounded-2xl border transition-all relative min-h-[110px] flex flex-col justify-center overflow-hidden shadow-sm opacity-60 border-[#2ea625]/20 dark:border-[#59b823]/20 bg-[#2ea625]/5 dark:bg-[#59b823]/5 backdrop-blur-md animate-pulse"
                                >
                                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#2ea625]/10 dark:bg-[#59b823]/10" />
                                  <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-[#2ea625]/10 dark:bg-[#59b823]/10" />
                                  <div className="ml-10 flex flex-col gap-2">
                                    <div className="flex gap-2">
                                      {Array.from({ length: 5 }).map(
                                        (_, pIdx) => (
                                          <div
                                            key={`skel-player-${idx}-${pIdx}`}
                                            className="w-8 h-8 rounded-full bg-[#2ea625]/10 dark:bg-[#59b823]/10"
                                          />
                                        ),
                                      )}
                                    </div>
                                    <div className="w-32 h-3 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-full mt-2" />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-center">
                              <button
                                onClick={() => {
                                  if (
                                    players.filter((p) =>
                                      sessionPlayerIds.includes(p.id),
                                    ).length > 0
                                  ) {
                                    setTeamsTab("chegada");
                                  } else if (players.length < 2) {
                                    setCurrentScreen("players");
                                    setPlayersTab("jogadores");
                                  } else {
                                    setTeamsTab("configuracao");
                                    if (!firstSetupDone) {
                                      setIsInitialSetupFlow(true);
                                    }
                                  }
                                }}
                                className="px-2.5 h-7 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                              >
                                {players.filter((p) =>
                                  sessionPlayerIds.includes(p.id),
                                ).length > 0
                                  ? "CONFIRMAR CHEGADA"
                                  : players.length < 2
                                    ? "CRIAR JOGADORES"
                                    : "CONFIGURAR PARTIDA"}
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {/* Tie resolution info */}
                            {teams.some(
                              (t) => t.lastMatchStatus === "Empate",
                            ) && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl flex items-start gap-3 shadow-sm mb-4 cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 transition-colors group"
                                onClick={() => {
                                  setTeams((prev) =>
                                    prev.map((team) =>
                                      team.lastMatchStatus === "Empate"
                                        ? {
                                            ...team,
                                            lastMatchStatus: undefined,
                                          }
                                        : team,
                                    ),
                                  );
                                }}
                              >
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                  <Info
                                    size={16}
                                    className="text-emerald-500"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-0.5">
                                    Empate Resolvido Manualmente
                                  </span>
                                  <p className="text-[10px] text-black/70 dark:text-white/70 font-bold uppercase leading-tight tracking-wider">
                                    Desmarque o time que deve{" "}
                                    <span className="text-zinc-900 dark:text-white">
                                      descer na fila
                                    </span>
                                    . O time que permanecer selecionado jogará a
                                    próxima partida.
                                  </p>
                                </div>
                              </motion.div>
                            )}

                            {teams.map((t, tIdx) => {
                              const isCurrent =
                                tIdx === match.teamAIndex ||
                                tIdx === match.teamBIndex;
                              const isFlashing = flashingTeamIds.includes(t.id);

                              let teamColor = t.color || TEAM_COLORS[0];
                              if (fixedColors.enabled) {
                                if (
                                  match.teamAIndex === tIdx &&
                                  fixedColors.teamA
                                ) {
                                  teamColor = fixedColors.teamA;
                                } else if (
                                  match.teamBIndex === tIdx &&
                                  fixedColors.teamB
                                ) {
                                  teamColor = fixedColors.teamB;
                                } else {
                                  if (
                                    (fixedColors.teamA &&
                                      teamColor === fixedColors.teamA) ||
                                    (fixedColors.teamB &&
                                      teamColor === fixedColors.teamB)
                                  ) {
                                    const availableColors = TEAM_COLORS.filter(
                                      (c) =>
                                        c !== fixedColors.teamA &&
                                        c !== fixedColors.teamB,
                                    );
                                    if (availableColors.length > 0) {
                                      teamColor =
                                        availableColors[
                                          tIdx % availableColors.length
                                        ];
                                    }
                                  }
                                }
                              }

                              return (
                                <motion.div
                                  layout="position"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    layout: {
                                      type: "tween",
                                      ease: "circOut",
                                      duration: 0.4,
                                    },
                                    opacity: { duration: 0.3 },
                                    y: {
                                      type: "spring",
                                      stiffness: 200,
                                      damping: 25,
                                    },
                                  }}
                                  key={`team-card-${t.id}`}
                                  id={`team-card-${tIdx}`}
                                  onClick={(e) => {
                                    if (swappingPlayerId) return;
                                    if (
                                      movingPlayers &&
                                      isSelectingDestination
                                    ) {
                                      e.stopPropagation();
                                      const availableSlots =
                                        match.config.playersPerTeam -
                                        t.playerIds.length;
                                      if (availableSlots <= 0) {
                                        setToast({
                                          message:
                                            "Este time já está completo.",
                                          type: "warning",
                                        });
                                        return;
                                      }
                                      const playersToMove =
                                        movingPlayers.playerIds.slice(
                                          0,
                                          availableSlots,
                                        );
                                      setTeams((prev) => {
                                        const newTeams = [...prev].map(
                                          (team) => ({
                                            ...team,
                                            playerIds: [...team.playerIds],
                                          }),
                                        );
                                        const sourceTeam = newTeams.find(
                                          (team) =>
                                            team.id === movingPlayers.teamId,
                                        );
                                        if (sourceTeam) {
                                          sourceTeam.playerIds =
                                            sourceTeam.playerIds.filter(
                                              (id) =>
                                                !playersToMove.includes(id),
                                            );
                                        }
                                        const targetTeam = newTeams.find(
                                          (team) => team.id === t.id,
                                        );
                                        if (targetTeam) {
                                          targetTeam.playerIds.push(
                                            ...playersToMove,
                                          );
                                        }
                                        return newTeams.filter(
                                          (team) => team.playerIds.length > 0,
                                        );
                                      });
                                      if (
                                        playersToMove.length <
                                        movingPlayers.playerIds.length
                                      ) {
                                        setMovingPlayers((prev) =>
                                          prev
                                            ? {
                                                ...prev,
                                                playerIds:
                                                  prev.playerIds.slice(
                                                    availableSlots,
                                                  ),
                                              }
                                            : null,
                                        );
                                        setToast({
                                          message: `Apenas ${availableSlots} jogador(es) movido(s). Selecione outro time para o(s) restante(s).`,
                                          type: "info",
                                        });
                                      } else {
                                        setMovingPlayers(null);
                                        setIsSelectingDestination(false);
                                        setToast({
                                          message:
                                            "Jogador(es) movido(s) com sucesso!",
                                          type: "success",
                                        });
                                      }
                                      return;
                                    }
                                  }}
                                  className={`p-2.5 sm:p-3 rounded-2xl border transition-all relative min-h-0 flex flex-col justify-center overflow-hidden ${
                                    movingPlayers && isSelectingDestination
                                      ? "cursor-pointer hover:opacity-90"
                                      : "cursor-default"
                                  } ${
                                    isCurrent
                                      ? "shadow-2xl z-10 border-[#53B986] bg-black/5 dark:bg-white/5 backdrop-blur-md ring-4 ring-[#53B986]/10"
                                      : "shadow-sm opacity-60 border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md"
                                  } ${
                                    isFlashing ||
                                    (movingPlayers &&
                                      isSelectingDestination &&
                                      t.playerIds.length <
                                        match.config.playersPerTeam)
                                      ? "animate-pulse bg-brand-primary/10 !border-[#53B986]"
                                      : ""
                                  }`}
                                  style={{}}
                                >
                                  {/* Status Top Right (Winner/Loser/Draw) */}
                                  {t.lastMatchStatus && (
                                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                                      {t.lastMatchStatus === "Vencedor" ? (
                                        <div className="px-2 py-0.5 rounded-full bg-[#39FF14] text-black text-[8px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1">
                                          <Trophy
                                            size={8}
                                            fill="currentColor"
                                          />
                                          Venceu
                                        </div>
                                      ) : t.lastMatchStatus === "Empate" ? (
                                        <div className="px-2 py-0.5 rounded-full bg-zinc-500 text-black text-[8px] font-black uppercase tracking-widest shadow-sm">
                                          Empate
                                        </div>
                                      ) : t.lastMatchStatus === "Derrota" ? (
                                        <div className="px-2 py-0.5 rounded-full bg-red-500 text-black text-[8px] font-black uppercase tracking-widest shadow-sm">
                                          Perdeu
                                        </div>
                                      ) : (
                                        <div className="px-2 py-0.5 rounded-full bg-sky-500 text-black text-[8px] font-black uppercase tracking-widest shadow-sm animate-bounce">
                                          Subiu
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Jersey Icon Top Left */}
                                  <div
                                    className={`absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer z-50 ${isCurrent ? "" : "hover:scale-110"}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (
                                        match.isActive &&
                                        !match.hasEnded &&
                                        !match.isPaused
                                      ) {
                                        setToast({
                                          message:
                                            "Não é possível trocar times durante uma partida ativa.",
                                          type: "warning",
                                        });
                                        return;
                                      }

                                      if (isCurrent) {
                                        if (t.lastMatchStatus === "Empate") {
                                          const stayingTeamIdx =
                                            match.teamAIndex === tIdx
                                              ? match.teamBIndex
                                              : match.teamAIndex;
                                          const stayingTeamPlayerIds =
                                            stayingTeamIdx !== -1
                                              ? teams[stayingTeamIdx]?.playerIds || []
                                              : [];
                                          const leavingTeamPlayerIds = t.playerIds || [];

                                          setPlayers((prevPlayers) => {
                                            const now = Date.now();
                                            const stayBase = now - 12 * 60 * 60 * 1000;
                                            return prevPlayers.map((p, idx) => {
                                              let updated = { ...p };
                                              if (stayingTeamPlayerIds.includes(p.id)) {
                                                updated.arrivedAt = stayBase + idx;
                                              }
                                              if (leavingTeamPlayerIds.includes(p.id)) {
                                                updated.arrivedAt = now + idx;
                                              }
                                              return updated;
                                            });
                                          });

                                          setTeams((prevTeams) => {
                                            const newTeams = prevTeams.map(
                                              (team) => ({
                                                ...team,
                                                lastMatchStatus:
                                                  team.lastMatchStatus ===
                                                  "Empate"
                                                    ? undefined
                                                    : team.lastMatchStatus,
                                              }),
                                            );
                                            const deselectedTeam =
                                              newTeams.splice(tIdx, 1)[0];
                                            newTeams.push(deselectedTeam);

                                            setMatch((prevMatch) => {
                                              let newTeamAIndex =
                                                prevMatch.teamAIndex;
                                              let newTeamBIndex =
                                                prevMatch.teamBIndex;

                                              if (
                                                prevMatch.teamAIndex === tIdx
                                              ) {
                                                newTeamAIndex = -1;
                                              } else if (
                                                prevMatch.teamAIndex > tIdx
                                              ) {
                                                newTeamAIndex--;
                                              }

                                              if (
                                                prevMatch.teamBIndex === tIdx
                                              ) {
                                                newTeamBIndex = -1;
                                              } else if (
                                                prevMatch.teamBIndex > tIdx
                                              ) {
                                                newTeamBIndex--;
                                              }

                                              return {
                                                ...prevMatch,
                                                teamAIndex: newTeamAIndex,
                                                teamBIndex: newTeamBIndex,
                                              };
                                            });
                                            return newTeams;
                                          });
                                        } else {
                                          // Deselect normally
                                          if (match.teamAIndex === tIdx)
                                            setMatch((prev) => ({
                                              ...prev,
                                              teamAIndex: -1,
                                            }));
                                          else if (match.teamBIndex === tIdx)
                                            setMatch((prev) => ({
                                              ...prev,
                                              teamBIndex: -1,
                                            }));
                                        }
                                      } else {
                                        // Select
                                        if (match.teamAIndex === -1) {
                                          setMatch((prev) => ({
                                            ...prev,
                                            teamAIndex: tIdx,
                                          }));
                                        } else if (match.teamBIndex === -1) {
                                          const teamA = teams[match.teamAIndex];
                                          const teamB = teams[tIdx];
                                          if (
                                            teamA &&
                                            teamB &&
                                            teamA.playerIds.some((id) =>
                                              teamB.playerIds.includes(id),
                                            )
                                          ) {
                                            setToast({
                                              message:
                                                "Estes times possuem jogadores em comum.",
                                              type: "warning",
                                            });
                                            return;
                                          }
                                          setMatch((prev) => ({
                                            ...prev,
                                            teamBIndex: tIdx,
                                          }));
                                        } else {
                                          // Both selected, prioritize keeping the winner and removing the loser
                                          const isTeamALoser =
                                            lastMatchResult &&
                                            teams[match.teamAIndex]?.id ===
                                              lastMatchResult.loserId;
                                          const isTeamBLoser =
                                            lastMatchResult &&
                                            teams[match.teamBIndex]?.id ===
                                              lastMatchResult.loserId;

                                          let teamToReplaceIndex =
                                            match.teamAIndex;
                                          if (isTeamBLoser) {
                                            teamToReplaceIndex =
                                              match.teamBIndex;
                                          } else if (isTeamALoser) {
                                            teamToReplaceIndex =
                                              match.teamAIndex;
                                          }

                                          setTeams((prevTeams) => {
                                            const newTeams = [...prevTeams];
                                            const replacedTeam =
                                              newTeams[teamToReplaceIndex];
                                            const selectedTeam = newTeams[tIdx];

                                            const filteredTeams =
                                              newTeams.filter(
                                                (_, i) =>
                                                  i !== teamToReplaceIndex &&
                                                  i !== tIdx,
                                              );
                                            filteredTeams.splice(
                                              teamToReplaceIndex,
                                              0,
                                              selectedTeam,
                                            );
                                            filteredTeams.push(replacedTeam);

                                            const otherTeamIndex =
                                              teamToReplaceIndex ===
                                              match.teamAIndex
                                                ? match.teamBIndex
                                                : match.teamAIndex;
                                            const otherTeam =
                                              prevTeams[otherTeamIndex];

                                            const newSelectedTeamIndex =
                                              filteredTeams.findIndex(
                                                (team) =>
                                                  team.id === selectedTeam.id,
                                              );
                                            const newOtherTeamIndex =
                                              filteredTeams.findIndex(
                                                (team) =>
                                                  team.id === otherTeam.id,
                                              );

                                            setMatch((prev) => ({
                                              ...prev,
                                              teamAIndex:
                                                teamToReplaceIndex ===
                                                match.teamAIndex
                                                  ? newSelectedTeamIndex
                                                  : newOtherTeamIndex,
                                              teamBIndex:
                                                teamToReplaceIndex ===
                                                match.teamBIndex
                                                  ? newSelectedTeamIndex
                                                  : newOtherTeamIndex,
                                              scoreA: 0,
                                              scoreB: 0,
                                              timeRemaining:
                                                prev.config.duration * 60,
                                              isActive: false,
                                              isPaused: true,
                                              hasEnded: false,
                                              events: [],
                                            }));

                                            return filteredTeams;
                                          });
                                        }
                                      }
                                      // Reset match state when changing teams (handled inside setTeams for the replacement case)
                                      if (
                                        match.teamAIndex === -1 ||
                                        match.teamBIndex === -1 ||
                                        isCurrent
                                      ) {
                                        setMatch((prev) => ({
                                          ...prev,
                                          scoreA: 0,
                                          scoreB: 0,
                                          timeRemaining:
                                            prev.config.duration * 60,
                                          isActive: false,
                                          isPaused: true,
                                          hasEnded: false,
                                          events: [],
                                        }));
                                      }
                                    }}
                                  >
                                    {(() => {
                                      let Icon =
                                        TEAM_ICONS[
                                          t.iconIdx ?? tIdx % TEAM_ICONS.length
                                        ];
                                      if (fixedColors.enabled) {
                                        if (
                                          match.teamAIndex === tIdx &&
                                          fixedColors.teamA
                                        ) {
                                          const idx = SHIRT_COLORS.indexOf(
                                            fixedColors.teamA,
                                          );
                                          if (idx !== -1)
                                            Icon = TEAM_ICONS[idx];
                                        } else if (
                                          match.teamBIndex === tIdx &&
                                          fixedColors.teamB
                                        ) {
                                          const idx = SHIRT_COLORS.indexOf(
                                            fixedColors.teamB,
                                          );
                                          if (idx !== -1)
                                            Icon = TEAM_ICONS[idx];
                                        }
                                      }
                                      return (
                                        <div
                                          className="relative w-8 h-8 flex items-center justify-center transition-transform hover:scale-110 drop-shadow-lg"
                                          style={{ color: teamColor }}
                                        >
                                          <Icon size={24} />
                                        </div>
                                      );
                                    })()}
                                  </div>

                                  {/* Status Top Right removed */}
                                  <div className="absolute top-2 right-2"></div>

                                  {isCurrent &&
                                    t.playerIds.length <
                                      match.config.playersPerTeam && (
                                      <div className="flex flex-col items-center justify-center pt-6 pb-2 relative z-10 w-full px-4">
                                        <div className="w-6 h-6 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center mb-1">
                                          <Info
                                            className="text-black/80 dark:text-white/80"
                                            size={12}
                                          />
                                        </div>
                                        <h3 className="text-sm font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
                                          Time Incompleto!
                                        </h3>
                                        <p className="text-[8px] font-bold uppercase tracking-widest text-black/70 dark:text-white/70 leading-tight text-center mt-1">
                                          Times devem estar equilibrados.
                                          <br />
                                          <span className="text-amber-400 font-black">
                                            Toque em um jogador de outro time
                                          </span>{" "}
                                          para completar esta vaga.
                                        </p>
                                      </div>
                                    )}

                                  {!isCurrent &&
                                    t.playerIds.length <
                                      match.config.playersPerTeam && (
                                      <div className="absolute top-2 left-0 right-0 flex justify-center z-10 pointer-events-none">
                                        <div className="flex items-center gap-1.5 pointer-events-auto">
                                          <span className="text-[10px] font-bold text-black/50 dark:text-white/40 uppercase tracking-widest">
                                            Falta{" "}
                                            {match.config.playersPerTeam -
                                              t.playerIds.length}{" "}
                                            jogador
                                            {match.config.playersPerTeam -
                                              t.playerIds.length >
                                            1
                                              ? "es"
                                              : ""}
                                          </span>
                                          <button
                                            type="button"
                                            className="text-black/50 dark:text-white/40 hover:text-amber-400 cursor-pointer transition-all active:scale-90 hover:bg-black/5 dark:bg-white/5 p-1 rounded-full flex items-center justify-center pointer-events-auto"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              e.stopPropagation();
                                              const required =
                                                match.config.playersPerTeam -
                                                t.playerIds.length;
                                              let count = 0;
                                              setTeams((prev) => {
                                                const newTeams = prev.map(
                                                  (team) => ({
                                                    ...team,
                                                    playerIds: [
                                                      ...team.playerIds,
                                                    ],
                                                  }),
                                                );
                                                const currentTeam =
                                                  newTeams[tIdx];
                                                if (!currentTeam) return prev;

                                                for (
                                                  let i = tIdx + 1;
                                                  i < newTeams.length;
                                                  i++
                                                ) {
                                                  const sourceTeam =
                                                    newTeams[i];
                                                  while (
                                                    sourceTeam.playerIds
                                                      .length > 0 &&
                                                    count < required
                                                  ) {
                                                    const pId =
                                                      sourceTeam.playerIds.shift()!;
                                                    currentTeam.playerIds.push(
                                                      pId,
                                                    );
                                                    count++;
                                                  }
                                                  if (count >= required) break;
                                                }
                                                return newTeams;
                                              });
                                            }}
                                          >
                                            <div className="text-[#22c55e]">
                                              <BsArrowUpRightCircle size={16} />
                                            </div>
                                          </button>
                                        </div>
                                      </div>
                                    )}

                                  <div
                                    className={
                                      isCurrent &&
                                      t.playerIds.length <
                                        match.config.playersPerTeam
                                        ? "pt-0 relative z-20"
                                        : "pt-8 relative z-20"
                                    }
                                  >
                                    <motion.div
                                      layout
                                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
                                    >
                                      <AnimatePresence>
                                        {[...t.playerIds]
                                          .sort((a, b) => {
                                            const playerA = players.find(
                                              (p) => p.id === a,
                                            );
                                            const playerB = players.find(
                                              (p) => p.id === b,
                                            );
                                            if (
                                              playerA?.isGoalkeeper &&
                                              !playerB?.isGoalkeeper
                                            )
                                              return -1;
                                            if (
                                              !playerA?.isGoalkeeper &&
                                              playerB?.isGoalkeeper
                                            )
                                              return 1;
                                            return (
                                              (playerA?.arrivedAt || 0) -
                                              (playerB?.arrivedAt || 0)
                                            );
                                          })
                                          .map((pid, idx) => {
                                            const p = players.find(
                                              (pl) => pl.id === pid,
                                            );
                                            if (!p) return null;
                                            return (
                                              <motion.button
                                                layout
                                                layoutId={`player-card-${pid}`}
                                                initial={{
                                                  opacity: 0,
                                                  scale: 0.8,
                                                }}
                                                animate={{
                                                  opacity: 1,
                                                  scale: 1,
                                                }}
                                                exit={{
                                                  opacity: 0,
                                                  scale: 0.8,
                                                }}
                                                transition={{
                                                  layout: {
                                                    type: "tween",
                                                    ease: "circOut",
                                                    duration: 0.4,
                                                  },
                                                  opacity: { duration: 0.3 },
                                                  scale: { duration: 0.3 },
                                                }}
                                                key={`queue-player-${pid}`}
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  if (
                                                    movingPlayers &&
                                                    movingPlayers.teamId ===
                                                      t.id
                                                  ) {
                                                    setMovingPlayers((prev) => {
                                                      if (!prev) return null;
                                                      const pIds =
                                                        prev.playerIds.includes(
                                                          pid,
                                                        )
                                                          ? prev.playerIds.filter(
                                                              (id) =>
                                                                id !== pid,
                                                            )
                                                          : [
                                                              ...prev.playerIds,
                                                              pid,
                                                            ];
                                                      if (pIds.length === 0) {
                                                        setIsSelectingDestination(
                                                          false,
                                                        );
                                                        return null;
                                                      }
                                                      return {
                                                        ...prev,
                                                        playerIds: pIds,
                                                      };
                                                    });
                                                    return;
                                                  }
                                                  if (swappingPlayerId) {
                                                    if (
                                                      swappingPlayerId === pid
                                                    ) {
                                                      setSwappingPlayerId(null);
                                                      setToast({
                                                        message:
                                                          "Troca cancelada.",
                                                        type: "info",
                                                      });
                                                      return;
                                                    }
                                                    const targetTeamIdx =
                                                      teams.findIndex((tm) =>
                                                        tm.playerIds.includes(
                                                          swappingPlayerId,
                                                        ),
                                                      );
                                                    if (targetTeamIdx !== -1) {
                                                      scrollToTeam(
                                                        targetTeamIdx,
                                                      );
                                                    }

                                                    // Swap logic
                                                    handleGoalkeeperSwap(
                                                      swappingPlayerId,
                                                      pid,
                                                    );
                                                    setTeams((prev) => {
                                                      const newTeams = [
                                                        ...prev,
                                                      ].map((team) => ({
                                                        ...team,
                                                        playerIds: [
                                                          ...team.playerIds,
                                                        ],
                                                      }));
                                                      let swapTeamIdx = -1;
                                                      let currentTeamIdx = -1;

                                                      // Find teams of both players
                                                      for (
                                                        let i = 0;
                                                        i < newTeams.length;
                                                        i++
                                                      ) {
                                                        if (
                                                          newTeams[
                                                            i
                                                          ].playerIds.includes(
                                                            swappingPlayerId,
                                                          )
                                                        )
                                                          swapTeamIdx = i;
                                                        if (
                                                          newTeams[
                                                            i
                                                          ].playerIds.includes(
                                                            pid,
                                                          )
                                                        )
                                                          currentTeamIdx = i;
                                                      }

                                                      if (
                                                        swapTeamIdx !== -1 &&
                                                        currentTeamIdx !== -1
                                                      ) {
                                                        const pAId =
                                                          swappingPlayerId;
                                                        const pBId = pid;

                                                        if (
                                                          swapTeamIdx ===
                                                          currentTeamIdx
                                                        ) {
                                                          newTeams[
                                                            swapTeamIdx
                                                          ].playerIds =
                                                            newTeams[
                                                              swapTeamIdx
                                                            ].playerIds.map(
                                                              (id) => {
                                                                if (id === pAId)
                                                                  return pBId;
                                                                if (id === pBId)
                                                                  return pAId;
                                                                return id;
                                                              },
                                                            );
                                                        } else {
                                                          newTeams[
                                                            swapTeamIdx
                                                          ].playerIds =
                                                            newTeams[
                                                              swapTeamIdx
                                                            ].playerIds.map(
                                                              (id) =>
                                                                id === pAId
                                                                  ? pBId
                                                                  : id,
                                                            );
                                                          newTeams[
                                                            currentTeamIdx
                                                          ].playerIds =
                                                            newTeams[
                                                              currentTeamIdx
                                                            ].playerIds.map(
                                                              (id) =>
                                                                id === pBId
                                                                  ? pAId
                                                                  : id,
                                                            );
                                                        }
                                                      }
                                                      return newTeams;
                                                    });
                                                    setSwappingPlayerId(null);
                                                    setToast({
                                                      message:
                                                        "Jogadores trocados com sucesso!",
                                                      type: "success",
                                                    });
                                                  } else if (
                                                    fillingVacancyForTeam !==
                                                    null
                                                  ) {
                                                    // Move logic
                                                    setTeams((prev) => {
                                                      const newTeams = [
                                                        ...prev,
                                                      ].map((team) => ({
                                                        ...team,
                                                        playerIds: [
                                                          ...team.playerIds,
                                                        ],
                                                      }));
                                                      newTeams[tIdx].playerIds =
                                                        newTeams[
                                                          tIdx
                                                        ].playerIds.filter(
                                                          (id) => id !== pid,
                                                        );
                                                      newTeams[
                                                        fillingVacancyForTeam
                                                      ].playerIds.push(pid);
                                                      return newTeams;
                                                    });
                                                    const isMatchActive =
                                                      match.isActive &&
                                                      (fillingVacancyForTeam ===
                                                        match.teamAIndex ||
                                                        fillingVacancyForTeam ===
                                                          match.teamBIndex);
                                                    setFillingVacancyForTeam(
                                                      null,
                                                    );

                                                    if (isMatchActive) {
                                                      setTeamsTab("historico");
                                                      setToast({
                                                        message:
                                                          "✅ Jogador substituído! A partida pode continuar.",
                                                        type: "success",
                                                      });
                                                    } else {
                                                      setToast({
                                                        message:
                                                          "Jogador movido com sucesso!",
                                                        type: "success",
                                                      });
                                                    }
                                                  } else {
                                                    // Check if there's an incomplete selected team
                                                    const incompleteSelectedTeamIdx =
                                                      [
                                                        match.teamAIndex,
                                                        match.teamBIndex,
                                                      ].find(
                                                        (teamIdx) =>
                                                          teamIdx !== -1 &&
                                                          teamIdx !== tIdx && // Not the current team
                                                          (teams[teamIdx]
                                                            ?.playerIds
                                                            ?.length || 0) <
                                                            match.config
                                                              .playersPerTeam,
                                                      );

                                                    if (
                                                      incompleteSelectedTeamIdx !==
                                                      undefined
                                                    ) {
                                                      // Move player to the incomplete selected team
                                                      setTeams((prev) => {
                                                        const newTeams = [
                                                          ...prev,
                                                        ].map((team) => ({
                                                          ...team,
                                                          playerIds: [
                                                            ...team.playerIds,
                                                          ],
                                                        }));
                                                        newTeams[
                                                          tIdx
                                                        ].playerIds = newTeams[
                                                          tIdx
                                                        ].playerIds.filter(
                                                          (id) => id !== pid,
                                                        );
                                                        newTeams[
                                                          incompleteSelectedTeamIdx
                                                        ].playerIds.push(pid);
                                                        return newTeams.filter(
                                                          (team) =>
                                                            team.playerIds
                                                              .length > 0,
                                                        );
                                                      });
                                                      setToast({
                                                        message: `Jogador movido para o ${teams[incompleteSelectedTeamIdx].name}`,
                                                        type: "success",
                                                      });
                                                    } else {
                                                      setShowQueuePlayerModal({
                                                        teamIndex: tIdx,
                                                        playerId: pid,
                                                      });
                                                    }
                                                  }
                                                }}
                                                className={`w-full flex items-center justify-start gap-1.5 p-1.5 sm:p-2 rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${
                                                  swappingPlayerId === pid ||
                                                  movingPlayers?.playerIds.includes(
                                                    pid,
                                                  )
                                                    ? "bg-[#53B986]/20 text-zinc-900 dark:text-white border-2 border-[#53B986] shadow-lg scale-105"
                                                    : (swappingPlayerId &&
                                                          swappingPlayerId !==
                                                            pid) ||
                                                        fillingVacancyForTeam !==
                                                          null ||
                                                        [
                                                          match.teamAIndex,
                                                          match.teamBIndex,
                                                        ].some(
                                                          (targetTIdx) =>
                                                            targetTIdx !== -1 &&
                                                            targetTIdx !==
                                                              tIdx &&
                                                            (teams[targetTIdx]
                                                              ?.playerIds
                                                              ?.length || 0) <
                                                              match.config
                                                                .playersPerTeam,
                                                        )
                                                      ? "bg-[#53B986]/10 text-[#53B986] animate-pulse shadow-sm shadow-[#53B986]/10"
                                                      : `border group shadow-sm ${isCurrent ? "bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#2ea625] text-white border-emerald-500/30 shadow-md" : "text-zinc-900 dark:text-white bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 hover:bg-black/10 dark:bg-white/10 hover:border-black/20 dark:border-white/20"}`
                                                }`}
                                                style={{
                                                  backgroundColor: !(
                                                    (swappingPlayerId &&
                                                      swappingPlayerId !==
                                                        pid) ||
                                                    fillingVacancyForTeam !==
                                                      null ||
                                                    movingPlayers?.playerIds.includes(
                                                      pid,
                                                    ) ||
                                                    [
                                                      match.teamAIndex,
                                                      match.teamBIndex,
                                                    ].some(
                                                      (targetTIdx) =>
                                                        targetTIdx !== -1 &&
                                                        targetTIdx !== tIdx &&
                                                        (teams[targetTIdx]
                                                          ?.playerIds?.length ||
                                                          0) <
                                                          match.config
                                                            .playersPerTeam,
                                                    ) ||
                                                    swappingPlayerId === pid
                                                  )
                                                    ? undefined
                                                    : undefined,
                                                }}
                                              >
                                                <div
                                                  className={`w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full flex items-center justify-center shrink-0 overflow-hidden border ${isCurrent ? "border-white/30 bg-white/10 text-white shadow-inner" : "border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10"}`}
                                                >
                                                  {p.isGoalkeeper &&
                                                  orgProSettings.allowFixedGoalkeeper !==
                                                    false ? (
                                                    <div
                                                      className={`flex items-center justify-center shrink-0 rounded-full w-4.5 h-4.5 text-[8px] font-black leading-none ${isCurrent ? "text-white" : "text-black/50 dark:text-white/40"}`}
                                                    >
                                                      G
                                                    </div>
                                                  ) : p.photo ? (
                                                    <img
                                                      src={p.photo}
                                                      className="w-full h-full object-cover"
                                                      referrerPolicy="no-referrer"
                                                    ></img>
                                                  ) : (
                                                    <span
                                                      className={`flex items-center shrink-0 ${isCurrent ? "text-white" : "text-black/50 dark:text-white/40"}`}
                                                    >
                                                      <IoPersonOutline
                                                        size={12}
                                                      />
                                                    </span>
                                                  )}
                                                </div>
                                                <div className="flex flex-col items-start overflow-hidden">
                                                  <span
                                                    className={`text-[11px] font-bold tracking-tight capitalize truncate leading-none ${isCurrent ? "text-white" : "text-black/90 dark:text-white/90"}`}
                                                  >
                                                    {p.name.toLowerCase()}
                                                  </span>
                                                  <div className="flex gap-0 mt-0.5">
                                                    {[1, 2, 3, 4, 5].map(
                                                      (star) => (
                                                        <Star
                                                          key={`star-q-${p.id}-${star}`}
                                                          size={7}
                                                          className={`${(p.stars || 3) >= star ? "fill-yellow-400 text-yellow-400" : "text-black/20 dark:text-white/20"}`}
                                                        />
                                                      ),
                                                    )}
                                                  </div>
                                                </div>
                                                <div className="ml-auto flex items-center gap-1">
                                                  {playerEvents[p.id] && (
                                                    <div className="flex items-center justify-center shrink-0 w-5 h-5 bg-black/5 dark:bg-white/50 rounded-full shadow-sm">
                                                      {playerEvents[p.id]
                                                        .type === "swap" && (
                                                        <span className="text-blue-500 animate-pulse">
                                                          <IoMdSwap size={12} />
                                                        </span>
                                                      )}
                                                      {playerEvents[p.id]
                                                        .type === "up" && (
                                                        <span className="text-green-800 animate-bounce">
                                                          <IoMdArrowUp
                                                            size={12}
                                                          />
                                                        </span>
                                                      )}
                                                      {playerEvents[p.id]
                                                        .type === "down" && (
                                                        <span className="text-red-500 animate-bounce">
                                                          <IoMdArrowDown
                                                            size={12}
                                                          />
                                                        </span>
                                                      )}
                                                    </div>
                                                  )}
                                                </div>
                                              </motion.button>
                                            );
                                          })}
                                      </AnimatePresence>
                                    </motion.div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2 sm:gap-4">
                      {teams.map((team, tIndex) => (
                        <motion.div
                          key={`scoreboard-team-${team.id}-${tIndex}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ y: -5 }}
                          className={`group p-3 sm:p-4 rounded-none transition-all relative cursor-pointer flex flex-col border ${
                            match.teamAIndex === tIndex ||
                            match.teamBIndex === tIndex
                              ? "bg-emerald-900 border-[#53B986] shadow-[0_0_30px_rgba(83,185,134,0.2)]"
                              : "bg-gradient-to-br from-zinc-50 to-zinc-100 border-zinc-200 hover:border-zinc-400"
                          } ${flashingTeamIds.includes(team.id) ? "animate-flash" : ""}`}
                          onClick={() => {
                            if (swappingPlayerId) return;
                            setFlashingTeamIds([]);
                            setMatch((prev) => {
                              if (prev.teamAIndex === tIndex)
                                return { ...prev, teamAIndex: -1 };
                              if (prev.teamBIndex === tIndex)
                                return { ...prev, teamBIndex: -1 };
                              if (prev.teamAIndex === -1)
                                return { ...prev, teamAIndex: tIndex };
                              if (prev.teamBIndex === -1)
                                return { ...prev, teamBIndex: tIndex };
                              return { ...prev, teamBIndex: tIndex };
                            });
                          }}
                        >
                          {/* Selection Indicator */}
                          <div className="absolute top-6 right-6">
                            <div
                              className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 ${
                                match.teamAIndex === tIndex
                                  ? "bg-[#53B986] border-[#53B986]"
                                  : match.teamBIndex === tIndex
                                    ? "bg-[#53B986] border-[#53B986]"
                                    : "bg-transparent border-black/20 dark:border-white/20"
                              }`}
                            >
                              {(match.teamAIndex === tIndex ||
                                match.teamBIndex === tIndex) && (
                                <div className="w-2 h-2 rounded-full bg-black" />
                              )}
                            </div>
                          </div>

                          <div className="mb-6">
                            <div
                              className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${
                                match.teamAIndex === tIndex ||
                                match.teamBIndex === tIndex
                                  ? "text-black/60"
                                  : "text-brand-primary"
                              }`}
                            >
                              Club {tIndex + 1}
                            </div>
                            <input
                              value={team.name}
                              placeholder="NOME DO CLUB"
                              onClick={(e) => e.stopPropagation()}
                              onChange={(e) => {
                                if (
                                  match.isActive &&
                                  !match.isPaused &&
                                  (tIndex === match.teamAIndex ||
                                    tIndex === match.teamBIndex)
                                ) {
                                  setToast({
                                    message:
                                      "Não é possível renomear times com o cronômetro rodando.",
                                    type: "gray",
                                  });
                                  setTimeout(() => setToast(null), 3000);
                                  return;
                                }
                                const newTeams = [...teams];
                                newTeams[tIndex].name = e.target.value;
                                setTeams(newTeams);
                              }}
                              className={`bg-transparent font-black text-xl uppercase tracking-tight outline-none w-full placeholder:opacity-40 ${
                                match.teamAIndex === tIndex ||
                                match.teamBIndex === tIndex
                                  ? "text-black"
                                  : "text-zinc-900"
                              }`}
                            />
                          </div>

                          <div className="flex-1 space-y-2 pr-1 custom-scrollbar">
                            {[...team.playerIds]
                              .sort((a, b) => {
                                const pA = players.find((p) => p.id === a);
                                const pB = players.find((p) => p.id === b);
                                if (pA?.isGoalkeeper && !pB?.isGoalkeeper)
                                  return -1;
                                if (!pA?.isGoalkeeper && pB?.isGoalkeeper)
                                  return 1;
                                return (
                                  (pA?.arrivedAt || 0) - (pB?.arrivedAt || 0)
                                );
                              })
                              .map((pid, idx) => {
                                const p = players.find((pl) => pl.id === pid);
                                return p ? (
                                  <div
                                    key={`scoreboard-player-${team.id}-${pid}-${idx}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (
                                        swappingPlayerId &&
                                        swappingPlayerId !== pid
                                      ) {
                                        const targetTeamIdx = teams.findIndex(
                                          (t) =>
                                            t.playerIds.includes(
                                              swappingPlayerId,
                                            ),
                                        );
                                        if (targetTeamIdx !== -1) {
                                          scrollToTeam(targetTeamIdx);
                                        }

                                        // Complete swap logic
                                        handleGoalkeeperSwap(
                                          swappingPlayerId,
                                          pid,
                                        );
                                        setTeams((prev) => {
                                          const newTeams = [...prev].map(
                                            (team) => ({
                                              ...team,
                                              playerIds: [...team.playerIds],
                                            }),
                                          );
                                          let teamAIdx = -1;
                                          let teamBIdx = -1;

                                          for (
                                            let i = 0;
                                            i < newTeams.length;
                                            i++
                                          ) {
                                            if (
                                              newTeams[i].playerIds.includes(
                                                swappingPlayerId,
                                              )
                                            )
                                              teamAIdx = i;
                                            if (
                                              newTeams[i].playerIds.includes(
                                                pid,
                                              )
                                            )
                                              teamBIdx = i;
                                          }

                                          if (
                                            teamAIdx !== -1 &&
                                            teamBIdx !== -1
                                          ) {
                                            const pAId = swappingPlayerId;
                                            const pBId = pid;
                                            if (teamAIdx === teamBIdx) {
                                              newTeams[teamAIdx].playerIds =
                                                newTeams[
                                                  teamAIdx
                                                ].playerIds.map((id) => {
                                                  if (id === pAId) return pBId;
                                                  if (id === pBId) return pAId;
                                                  return id;
                                                });
                                            } else {
                                              newTeams[teamAIdx].playerIds =
                                                newTeams[
                                                  teamAIdx
                                                ].playerIds.map((id) =>
                                                  id === pAId ? pBId : id,
                                                );
                                              newTeams[teamBIdx].playerIds =
                                                newTeams[
                                                  teamBIdx
                                                ].playerIds.map((id) =>
                                                  id === pBId ? pAId : id,
                                                );
                                            }
                                          }
                                          return newTeams;
                                        });
                                        setSwappingPlayerId(null);
                                        setToast({
                                          message:
                                            "Jogadores trocados com sucesso!",
                                          type: "success",
                                        });
                                      } else if (swappingPlayerId === pid) {
                                        setSwappingPlayerId(null);
                                        setToast({
                                          message: "Seleção cancelada.",
                                          type: "info",
                                        });
                                      } else {
                                        setShowPlayerActionsModal({
                                          teamIndex: tIndex,
                                          playerId: pid,
                                        });
                                      }
                                    }}
                                    className={`flex justify-between items-center py-2 px-1 transition-all group/player cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                                      swappingPlayerId === pid
                                        ? "bg-[#53B986]/20 rounded-lg animate-pulse"
                                        : swappingPlayerId &&
                                            swappingPlayerId !== pid
                                          ? "bg-[#53B986]/10 rounded-lg"
                                          : "bg-transparent border-transparent"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 overflow-hidden">
                                      <div
                                        className={`w-6 h-6 rounded-full flex items-center justify-center overflow-hidden border shrink-0 ${match.teamAIndex === tIndex || match.teamBIndex === tIndex ? "border-black/10 bg-black/5" : "bg-gradient-to-br from-zinc-100 to-zinc-300 border-zinc-200"}`}
                                      >
                                        {p.photo ? (
                                          <img
                                            src={p.photo}
                                            alt={p.name}
                                            className="w-full h-full object-cover"
                                            referrerPolicy="no-referrer"
                                          />
                                        ) : (
                                          <span className="text-zinc-700 flex items-center shrink-0">
                                            <IoPersonOutline size={10} />
                                          </span>
                                        )}
                                      </div>
                                      <div className="flex flex-col min-w-0">
                                        <span
                                          className={`text-[11px] sm:text-xs font-bold tracking-tight transition-colors truncate leading-none ${
                                            swappingPlayerId === pid
                                              ? "text-[#53B986]"
                                              : "text-zinc-800"
                                          }`}
                                        >
                                          {p.name}
                                        </span>
                                        <div className="flex gap-0.5 mt-0.5">
                                          {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                              key={`star-pcard-${p.id}-${star}`}
                                              size={8}
                                              className={`${(p.stars || 3) >= star ? "fill-yellow-400 text-yellow-400" : "text-zinc-700 dark:text-zinc-300"}`}
                                            />
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      {swappingPlayerId === pid && (
                                        <div className="px-2 py-1 text-black bg-[#53B986]/20 border border-[#53B986]/50 rounded-sm text-[8px] font-black uppercase">
                                          Selecionado
                                        </div>
                                      )}
                                      {swappingPlayerId &&
                                        swappingPlayerId !== pid && (
                                          <div className="px-2 py-1 bg-[#53B986] text-black rounded-sm text-[8px] font-black uppercase">
                                            Trocar
                                          </div>
                                        )}
                                    </div>
                                  </div>
                                ) : null;
                              })}
                            {team.playerIds.length === 0 && (
                              <div className="h-full flex flex-col items-center justify-center opacity-20 py-8">
                                <Users size={32} />
                                <span className="text-[10px] font-bold mt-2">
                                  SEM JOGADORES
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="space-y-3 mt-6">
                            <div className="flex gap-3">
                              {teams.length > 2 && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeTeam(tIndex);
                                  }}
                                  className="p-3 rounded-md text-red-500 hover:bg-red-500/10 transition-all flex items-center justify-center"
                                  title="Excluir Time"
                                >
                                  <Trash2 size={18} />
                                </button>
                              )}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (
                                    match.isActive &&
                                    (tIndex === match.teamAIndex ||
                                      tIndex === match.teamBIndex)
                                  ) {
                                    setToast({
                                      message:
                                        "Não é possível adicionar jogadores a times em campo.",
                                      type: "gray",
                                    });
                                    setTimeout(() => setToast(null), 3000);
                                    return;
                                  }
                                  setShowQuickAddPlayerModal(tIndex);
                                }}
                                className={`flex-[2] py-3 rounded-md text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                                  match.teamAIndex === tIndex ||
                                  match.teamBIndex === tIndex
                                    ? "bg-transparent text-black hover:bg-black/50 dark:hover:bg-white/50 dark:bg-black/20"
                                    : "bg-transparent text-brand-text-primary hover:bg-black/10"
                                }`}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <button
                        onClick={addTeam}
                        className="p-6 rounded-xl border border-dashed border-zinc-300 hover:border-zinc-500 hover:bg-zinc-100 transition-all flex flex-col items-center justify-center gap-3 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all">
                          <Plus size={24} />
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {currentScreen === "ranking" && (
              <motion.div
                key="ranking"
                className={`p-2 sm:p-4 space-y-6 pb-24 ${isPrintMode ? "bg-white min-h-screen p-0" : ""}`}
              >
                {!isPrintMode ? (
                  <div className={`w-full overflow-hidden`}>
                    <div className="flex items-center justify-between pb-2 border-b border-dashed border-black/10 dark:border-white/10 mb-4 px-2">
                      <div className="flex items-center gap-1">
                        {/* Ranking print button removed */}
                      </div>
                      <div className="text-black/30 dark:text-white/30 text-xs font-bold font-mono tracking-tighter uppercase"></div>
                      <div
                        className={`flex gap-4 sm:gap-8 text-[10px] font-black uppercase tracking-widest text-blue-200/60 ${rankingTab === "artilharia" ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`w-12 text-center flex items-center justify-center gap-1 ${rankingTab !== "assistencias" ? "text-[#59b823]" : "opacity-0"}`}
                        >
                          <span className="text-[#59b823]">
                            <IoFootballOutline size={14} />
                          </span>{" "}
                          Gols
                        </div>
                        <div
                          className={`w-12 text-center flex items-center justify-center gap-1 ${rankingTab !== "artilharia" ? "text-blue-400" : "opacity-0"}`}
                        >
                          <span className="text-blue-400">
                            <GiSoccerKick size={14} />
                          </span>{" "}
                          Ass
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      {rankingTab === "geral" && sortedRankingPlayers.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                          {sortedRankingPlayers.slice(0, 3).map((player, index) => {
                            const place = index + 1;
                            return (
                              <div
                                key={`top-card-${player.id}`}
                                className="bg-[#f0f0f0] dark:bg-emerald-950/20 dark:backdrop-blur-xs border border-black/10 dark:border-emerald-500/20 rounded-2xl flex flex-col justify-between overflow-hidden shadow-xs text-center"
                              >
                                {/* Top part */}
                                <div className="p-1.5 sm:p-2.5 pb-1 flex flex-col items-center">
                                  {/* Avatar container with relative overlay */}
                                  <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center">
                                    {/* The avatar circle */}
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white dark:border-emerald-500/30 shadow-xs relative bg-[#e2e8f0] dark:bg-emerald-900/30 flex items-center justify-center z-10 shrink-0">
                                      {player.photo ? (
                                        <img
                                          src={player.photo}
                                          alt={player.name}
                                          className="w-full h-full object-cover"
                                          referrerPolicy="no-referrer"
                                        />
                                      ) : (
                                        <span className="text-zinc-600 dark:text-emerald-400/70 flex items-center justify-center">
                                          <IoPersonOutline size={16} />
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {/* Position number under avatar */}
                                  <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 dark:text-emerald-400/80 mt-0.5">
                                    {place}
                                  </span>

                                  {/* Name */}
                                  <h4 className="text-[9px] sm:text-[11px] font-black uppercase text-zinc-900 dark:text-white truncate max-w-full leading-none mt-0.5">
                                    {player.name}
                                  </h4>

                                  {/* Country style label */}
                                  <span className="text-[7px] sm:text-[8px] font-bold text-zinc-400 dark:text-emerald-200/60 uppercase tracking-wider mt-0.5">
                                    {place === 1 ? "1º Lugar" : place === 2 ? "2º Lugar" : "3º Lugar"}
                                  </span>
                                </div>

                                {/* Bottom stats split into 2 sections */}
                                <div className="border-t border-black/5 dark:border-emerald-500/10 grid grid-cols-2 bg-black/[0.01] dark:bg-emerald-950/40 text-center">
                                  <div className="p-1 flex flex-col items-center justify-center border-r border-black/5 dark:border-emerald-500/10">
                                    <span className="text-[10px] sm:text-xs font-black text-zinc-800 dark:text-white leading-none">
                                      {player.goals || 0}
                                    </span>
                                    <span className="text-[6px] sm:text-[7px] font-bold text-zinc-400 dark:text-emerald-300/60 uppercase tracking-widest mt-0.5">
                                      GOLS
                                    </span>
                                  </div>
                                  <div className="p-1 flex flex-col items-center justify-center">
                                    <span className="text-[10px] sm:text-xs font-black text-blue-500 dark:text-blue-400 leading-none">
                                      {player.assists || 0}
                                    </span>
                                    <span className="text-[6px] sm:text-[7px] font-bold text-zinc-400 dark:text-emerald-300/60 uppercase tracking-widest mt-0.5">
                                      ASS
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {(rankingTab === "geral" ? sortedRankingPlayers.slice(3) : sortedRankingPlayers).map((player, index) => {
                        const actualRank = rankingTab === "geral" ? index + 4 : index + 1;
                        return (
                          <motion.div
                            layout
                            transition={{
                              layout: {
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              },
                            }}
                            key={player.id}
                            className="flex items-center py-3 px-3 transition-colors rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:bg-white/10 shadow-sm"
                          >
                            <div className="flex items-center gap-2 mr-3">
                              <div className="w-5 text-sm font-black text-black/40 dark:text-white/40 text-center shrink-0">
                                {actualRank}
                              </div>

                            <div className="relative shrink-0">
                              <div
                                className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 relative z-10`}
                              >
                                {player.photo ? (
                                  <img
                                    src={player.photo}
                                    alt={player.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <span className="text-black/50 dark:text-white/40 flex items-center shrink-0">
                                    <IoPersonOutline size={20} />
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 text-xs text-zinc-900 dark:text-white tracking-tight truncate mr-4 font-normal capitalize flex flex-col gap-1 text-left">
                            <span className="leading-none font-bold text-zinc-900 dark:text-white text-[13px]">
                              {player.name.toLowerCase()}
                            </span>
                            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold leading-none mt-0.5">
                              {player.isGoalkeeper ? "Goleiro" : "Jogador"}
                            </span>
                            <div className="w-full max-w-[120px] h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden mt-1.5 shadow-inner">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{
                                  width: `${Math.min(
                                    (rankingTab === "artilharia"
                                      ? player.goals
                                      : rankingTab === "assistencias"
                                      ? player.assists
                                      : player.stars || 3) /
                                      (rankingTab === "artilharia"
                                        ? Math.max(...sortedRankingPlayers.map((p) => p.goals), 1)
                                        : rankingTab === "assistencias"
                                        ? Math.max(...sortedRankingPlayers.map((p) => p.assists), 1)
                                        : 5) *
                                      100,
                                    100
                                  )}%`,
                                }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full rounded-full bg-gradient-to-r from-green-600 via-green-500 to-lime-400"
                              />
                            </div>
                          </div>

                          <div
                            className={`flex gap-4 sm:gap-8 shrink-0 ${rankingTab === "artilharia" ? "flex-row-reverse" : ""}`}
                          >
                            <div
                              className={`w-12 text-center text-sm font-black text-[#59b823] ${rankingTab === "assistencias" ? "opacity-0" : ""}`}
                            >
                              {player.goals}
                            </div>
                            <div
                              className={`w-12 text-center text-sm font-black text-blue-400 ${rankingTab === "artilharia" ? "opacity-0" : ""}`}
                            >
                              {player.assists}
                            </div>
                          </div>
                        </motion.div>
                      )})}
                      {players.length === 0
                        ? Array.from({ length: 5 }).map((_, idx) => (
                            <div
                              key={`skel-ranking-${idx}`}
                              className="flex items-center py-3 px-3 rounded-2xl bg-[#2ea625]/5 dark:bg-[#59b823]/5 border border-[#2ea625]/20 dark:border-[#59b823]/20 animate-pulse w-full mt-2"
                            >
                              <div className="w-8 text-sm font-black text-[#2ea625]/30 dark:text-[#59b823]/30 text-center shrink-0"></div>
                              <div className="w-10 h-10 rounded-full bg-[#2ea625]/10 dark:bg-[#59b823]/10 shrink-0 border border-[#2ea625]/10 dark:border-[#59b823]/10 mr-4 shadow-sm ml-2"></div>
                              <div className="flex flex-col gap-2 flex-1">
                                <div className="h-3 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-2xl w-3/5 shadow-sm"></div>
                                <div className="h-2 bg-[#2ea625]/10 dark:bg-[#59b823]/10 rounded-2xl w-1/4 shadow-sm"></div>
                              </div>
                            </div>
                          ))
                        : sortedRankingPlayers.length === 0 && (
                            <div className="text-center text-black/60 dark:text-white/50 text-xs py-8">
                              Nenhum jogador encontrado.
                            </div>
                          )}
                    </div>
                  </div>
                ) : (
                  <div
                    key="ranking-print"
                    className="p-8 bg-[#dce3ee] min-h-screen text-black space-y-8"
                  >
                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                      <div className="flex items-center gap-2">
                        <Trophy size={16} className="text-black" />
                        <FutQuinaLogo
                          size="sm"
                          titleColorClass="text-[#484848]"
                        />
                        <span className="text-sm font-black opacity-10">|</span>
                        <span className="text-sm font-black tracking-tighter">
                          Ranking
                        </span>
                      </div>
                      <button
                        onClick={() => setIsPrintMode(false)}
                        className="print:hidden px-3 py-1.5 bg-brand-primary text-black rounded-sm text-[9px] font-bold uppercase hover:opacity-80 transition-colors"
                      >
                        Sair do Print
                      </button>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-base font-bold uppercase tracking-widest border-l-4 border-black pl-3">
                        Top Jogadores
                      </h2>
                      <div className="border border-black rounded-lg overflow-hidden">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-brand-primary text-black">
                              <th className="p-2 text-[10px] font-black uppercase">
                                Pos
                              </th>
                              <th className="p-2 text-[10px] font-black uppercase">
                                Jogador
                              </th>
                              <th className="p-2 text-[10px] font-black text-center !normal-case">
                                Gols
                              </th>
                              <th className="p-2 text-[10px] font-black text-center !normal-case">
                                Assistências
                              </th>
                              <th className="p-2 text-[10px] font-black uppercase text-center">
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {sortedPlayersByTotal
                              .slice(0, 15)
                              .map((player, index) => (
                                <tr
                                  key={`ranking-row-print-${player.id}-${index}`}
                                  className="border-b border-black/10"
                                >
                                  <td className="p-2 text-xs font-black">
                                    {index + 1}
                                  </td>
                                  <td className="p-2 text-xs font-bold">
                                    {player.name}
                                  </td>
                                  <td className="p-2 text-xs text-center">
                                    {player.goals}
                                  </td>
                                  <td className="p-2 text-xs text-center">
                                    {player.assists}
                                  </td>
                                  <td className="p-2 text-xs text-center font-black">
                                    {player.goals + player.assists}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="text-[8px] text-center opacity-50 uppercase font-bold">
                      Gerado em {new Date().toLocaleDateString("pt-BR")} •
                      FutQuina App
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {currentScreen === "finance" && (
              <motion.div
                key="finance"
                initial={isPrintMode ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`space-y-4 ${isPrintMode ? "space-y-0 bg-white text-black min-h-screen" : ""}`}
              >
                {financeSubScreen === "balanco" &&
                  (() => {
                    const totalRevenue =
                      (payments || []).reduce(
                        (acc: number, p: PaymentRecord) =>
                          acc +
                          Object.values(p?.months || {}).reduce(
                            (mAcc: number, mVal) => mAcc + Number(mVal || 0),
                            0,
                          ),
                        0,
                      ) + manualAdjustment;
                    const totalExpenses = (expenses || []).reduce(
                      (acc: number, e) => acc + (e.amount || 0),
                      0,
                    );
                    const netBalance = totalRevenue - totalExpenses;

                    return (
                      <div
                        className={`space-y-4 ${isPrintMode ? "bg-white min-h-screen text-black p-4 pb-12 font-mono" : "font-mono"}`}
                      >
                        {!isPrintMode && <div className="h-2" />}

                        {isPrintMode && (
                          <div className="pt-10 pb-6 text-center border-b border-zinc-300 mb-6 bg-[#dce3ee] flex flex-col items-center relative">
                            <h2 className="text-2xl font-black uppercase mb-1 text-black">
                              {isPrintPaymentsOnly
                                ? "Planilha de Pagamentos"
                                : "Relatório Financeiro"}
                            </h2>
                            <p className="text-[10px] font-bold uppercase opacity-60 text-black">
                              Competência: {MONTHS[new Date().getMonth()]} /{" "}
                              {new Date().getFullYear()}
                            </p>
                            <button
                              onClick={() => {
                                setIsPrintMode(false);
                                setIsPrintPaymentsOnly(false);
                              }}
                              className="absolute top-4 right-4 p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-800/10 rounded-full transition-colors"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        )}

                        <div
                          className={`px-2 sm:px-4 space-y-4 w-full sm:w-[98%] max-w-7xl mx-auto`}
                        >
                          {/* Summary Cards */}
                          {!isPrintPaymentsOnly && (
                            <>
                              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                {/* Saldo Líquido Card */}
                                <div
                                  className={`p-3.5 sm:p-4 transition-all col-span-2 lg:col-span-1 order-1 lg:order-none overflow-hidden relative ${
                                    isPrintMode
                                      ? "bg-white border-zinc-300 border rounded-none"
                                      : "bg-gradient-to-br from-white to-zinc-50 dark:from-[#25660e]/40 dark:to-[#111625]/90 border border-zinc-200 dark:border-white/10 rounded-2xl shadow-sm backdrop-blur-xl"
                                  }`}
                                >
                                  {!isPrintMode && (
                                    <>
                                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-[#34d399]/10 rounded-full blur-[40px] pointer-events-none" />
                                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] pointer-events-none" />
                                    </>
                                  )}
                                  <div className="flex flex-col gap-2 relative z-10 w-full">
                                    {/* Top Header Row with Title on Left and Eye Icon on Right */}
                                    <div className="flex items-center justify-between w-full">
                                      <div className="flex items-center gap-1.5">
                                        <p
                                          className={`text-[9px] font-black uppercase tracking-widest ${isPrintMode ? "text-zinc-600" : "text-black/60 dark:text-white/50"}`}
                                        >
                                          Saldo em Caixa
                                        </p>
                                        <TrendingUp size={14} className="text-[#2ea625] dark:text-[#34d399]" />
                                      </div>
                                      {!isPrintMode && (
                                        <button
                                          onClick={() => {
                                            if (players.filter((p) => p.addedVia !== "whatsapp").length === 0) {
                                              setToast({
                                                message:
                                                  "Adicione jogadores para detalhar despesas",
                                                type: "info",
                                              });
                                              setTimeout(
                                                () => setToast(null),
                                                3000,
                                              );
                                              return;
                                            }
                                            setIsPrintMode(true);
                                          }}
                                          className="text-black/50 dark:text-white/40 hover:text-[#34d399] transition-colors"
                                          title="Gerar Print"
                                        >
                                          <Eye size={14} />
                                        </button>
                                      )}
                                    </div>

                                    {/* Content Row: Circular Gauge on Left, Balance Number on Right */}
                                    {!isPrintMode ? (
                                      <div className="flex items-center gap-3.5 sm:gap-4 py-0.5">
                                        {/* Circular Gauge Graphic */}
                                        <div className="relative shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                                          <div className="absolute inset-0 rounded-full bg-emerald-500/10 dark:bg-[#121623] border border-emerald-500/20 dark:border-white/10 shadow-inner flex items-center justify-center p-0.5">
                                            <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
                                              <defs>
                                                <linearGradient id="gauge-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                  <stop offset="0%" stopColor="#2ea625" />
                                                  <stop offset="50%" stopColor="#34d399" />
                                                  <stop offset="100%" stopColor="#59b823" />
                                                </linearGradient>
                                              </defs>
                                              {/* Background ring */}
                                              <circle
                                                cx="60"
                                                cy="60"
                                                r="46"
                                                stroke="currentColor"
                                                strokeWidth="10"
                                                className="text-emerald-500/20 dark:text-white/15"
                                                fill="none"
                                              />
                                              {/* Animated Progress arc */}
                                              <motion.circle
                                                cx="60"
                                                cy="60"
                                                r="46"
                                                stroke="url(#gauge-ring-grad)"
                                                strokeWidth="10"
                                                strokeLinecap="round"
                                                fill="none"
                                                strokeDasharray={2 * Math.PI * 46}
                                                initial={{ strokeDashoffset: 2 * Math.PI * 46 }}
                                                animate={{ strokeDashoffset: 2 * Math.PI * 46 * 0.25 }}
                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                              />
                                            </svg>
                                          </div>
                                        </div>

                                        {/* Balance Number */}
                                        <div className="flex flex-col justify-center">
                                          <p
                                            className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight ${
                                              netBalance >= 0
                                                ? "text-[#2ea625] dark:text-[#34d399]"
                                                : "text-red-500 dark:text-red-400"
                                            }`}
                                          >
                                            R$ <AnimatedCounter value={netBalance} />,00
                                          </p>
                                        </div>
                                      </div>
                                    ) : (
                                      <p className="text-lg sm:text-xl font-black text-black mt-1">
                                        R$ <AnimatedCounter value={netBalance} />,00
                                      </p>
                                    )}
                                  </div>
                                </div>

                                {/* Arrecadação Card */}
                                <div
                                  onClick={() => {
                                    if (!isPrintMode && !isEditingTotal) {
                                      if (players.filter((p) => p.addedVia !== "whatsapp").length === 0) {
                                        setToast({
                                          message:
                                            "Adicione jogadores para ajustar arrecadação",
                                          type: "info",
                                        });
                                        setTimeout(() => setToast(null), 3000);
                                        return;
                                      }
                                      setTotalInput(
                                        manualAdjustment.toString(),
                                      );
                                      setIsEditingTotal(true);
                                    }
                                  }}
                                  className={`p-3.5 sm:p-4 transition-all order-2 lg:order-none overflow-hidden relative ${
                                    isPrintMode
                                      ? "bg-white border-zinc-300 border rounded-none text-black"
                                      : "bg-gradient-to-br from-white to-zinc-50 dark:from-[#25660e]/40 dark:to-[#111625]/90 border border-zinc-200 dark:border-white/10 rounded-2xl cursor-pointer hover:opacity-90 shadow-sm backdrop-blur-xl"
                                  }`}
                                >
                                  {!isPrintMode && (
                                    <>
                                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-[#34d399]/10 rounded-full blur-[40px] pointer-events-none" />
                                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#34d399]/5 rounded-full blur-[40px] pointer-events-none" />
                                      <div className="absolute inset-0 bg-gradient-to-br from-[#34d399]/5 to-transparent pointer-events-none" />
                                    </>
                                  )}
                                  <div className="flex justify-between items-center mb-1 relative z-10">
                                    <p
                                      className={`text-[9px] font-black uppercase tracking-widest ${
                                        isPrintMode
                                          ? "text-zinc-600"
                                          : "text-black/60 dark:text-white/50"
                                      }`}
                                    >
                                      Arrecadação
                                    </p>
                                    {!isPrintMode && (
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (!isEditingTotal) {
                                            if (players.filter((p) => p.addedVia !== "whatsapp").length === 0) {
                                              setToast({
                                                message:
                                                  "Adicione jogadores para ajustar arrecadação",
                                                type: "info",
                                              });
                                              setTimeout(
                                                () => setToast(null),
                                                3000,
                                              );
                                              return;
                                            }
                                            setTotalInput(
                                              manualAdjustment.toString(),
                                            );
                                            setIsEditingTotal(true);
                                          }
                                        }}
                                        className="p-1.5 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-md shadow-blue-800/20"
                                      >
                                        <Plus size={14} />
                                      </button>
                                    )}
                                  </div>
                                  <div className="flex items-baseline gap-2 relative z-10">
                                    {isEditingTotal ? (
                                      <div
                                        className="flex items-center gap-1 w-full"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <span
                                          className={`text-xs font-bold ${isPrintMode ? "opacity-60" : "text-black/70 dark:text-white/60"}`}
                                        >
                                          R$
                                        </span>
                                        <input
                                          autoFocus
                                          type="number"
                                          value={totalInput}
                                          onChange={(e) =>
                                            setTotalInput(e.target.value)
                                          }
                                          onBlur={() => {
                                            setManualAdjustment(
                                              Number(totalInput),
                                            );
                                            setIsEditingTotal(false);
                                          }}
                                          onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                              setManualAdjustment(
                                                Number(totalInput),
                                              );
                                              setIsEditingTotal(false);
                                            }
                                          }}
                                          className={`w-full bg-transparent border-b border-[#34d399] outline-none text-base sm:text-lg font-black ${
                                            isPrintMode
                                              ? "text-zinc-900"
                                              : "text-zinc-900 dark:text-white"
                                          }`}
                                        />
                                      </div>
                                    ) : (
                                      <div className="flex flex-col">
                                        <p
                                          className={`text-lg sm:text-xl font-black w-fit ${
                                            isPrintMode
                                              ? "text-black"
                                              : "text-[#2ea625] dark:text-[#59b823]"
                                          }`}
                                        >
                                          R$ {totalRevenue},00
                                        </p>
                                        {!isPrintMode && (
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setTotalInput(
                                                manualAdjustment.toString(),
                                              );
                                              setIsEditingTotal(true);
                                            }}
                                            className="text-[8px] font-black uppercase tracking-widest text-black/50 dark:text-white/40 flex items-center gap-1 hover:text-zinc-900 dark:text-white w-fit mt-1.5 transition-colors"
                                          >
                                            Ajustar Manual (R${" "}
                                            {manualAdjustment})
                                          </button>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>

                                {/* Despesas Card */}
                                <div
                                  onClick={() => {
                                    if (players.filter((p) => p.addedVia !== "whatsapp").length === 0) {
                                      setToast({
                                        message:
                                          "Adicione jogadores para detalhar despesas",
                                        type: "info",
                                      });
                                      setTimeout(() => setToast(null), 3000);
                                      return;
                                    }
                                    !isPrintMode && setShowExpenseModal(true);
                                  }}
                                  className={`p-3.5 sm:p-4 transition-all order-3 lg:order-none overflow-hidden relative ${
                                    isPrintMode
                                      ? "bg-white border-zinc-300 border rounded-none"
                                      : "bg-gradient-to-br from-white to-zinc-50 dark:from-[#25660e]/40 dark:to-[#111625]/90 border border-zinc-200 dark:border-white/10 rounded-2xl cursor-pointer hover:opacity-90 shadow-sm backdrop-blur-xl"
                                  }`}
                                >
                                  {!isPrintMode && (
                                    <>
                                      <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 dark:bg-red-500/10 rounded-full blur-[40px] pointer-events-none" />
                                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-[40px] pointer-events-none" />
                                    </>
                                  )}
                                  <div className="flex justify-between items-center mb-1 relative z-10">
                                    <p
                                      className={`text-[9px] font-black uppercase tracking-widest ${
                                        isPrintMode
                                          ? "text-zinc-600"
                                          : "text-red-500 dark:text-red-400"
                                      }`}
                                    >
                                      Despesas
                                    </p>
                                  </div>
                                  <p
                                    className={`text-lg sm:text-xl font-black mb-2 ${
                                      isPrintMode
                                        ? "text-black"
                                        : "text-red-500 dark:text-red-400"
                                    }`}
                                  >
                                    R$ {totalExpenses},00
                                  </p>
                                  <div className="space-y-1">
                                    <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-red-500 transition-all duration-1000"
                                        style={{
                                          width: `${Math.min(100, (totalExpenses / Math.max(1, totalRevenue)) * 100)}%`,
                                        }}
                                      />
                                    </div>
                                    <div className="flex justify-between text-[7px] font-bold uppercase tracking-wider opacity-60 text-black/60 dark:text-white/50">
                                      <span>Gasto Total</span>
                                      <span>
                                        {totalRevenue > 0
                                          ? Math.round(
                                              (totalExpenses / totalRevenue) *
                                                100,
                                            )
                                          : 0}
                                        %
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}

                          {/* Expenses List */}
                          {!isPrintPaymentsOnly && (
                            <div
                              className={`transition-all overflow-hidden ${
                                isPrintMode
                                  ? "bg-white border border-zinc-300 rounded-none"
                                  : "rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-zinc-100 to-white dark:from-[#25660e]/40 dark:to-[#111625]/90 backdrop-blur-xl shadow-sm"
                              }`}
                            >
                              <div
                                className={`flex justify-between items-center ${
                                  isPrintMode
                                    ? "border-b border-zinc-300 bg-zinc-100 p-2"
                                    : "p-3.5 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5"
                                }`}
                              >
                                <h3
                                  className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${
                                    isPrintMode
                                      ? "text-zinc-800"
                                      : "text-black/70 dark:text-white/70"
                                  }`}
                                >
                                  {isPrintMode ? (
                                    "DESPESAS DETALHADAS"
                                  ) : (
                                    <>Despesas Detalhadas</>
                                  )}
                                </h3>
                                {!isPrintMode && (
                                  <button
                                    onClick={() => {
                                      if (players.filter((p) => p.addedVia !== "whatsapp").length === 0) {
                                        setToast({
                                          message:
                                            "Adicione jogadores para detalhar despesas",
                                          type: "info",
                                        });
                                        setTimeout(() => setToast(null), 3000);
                                        return;
                                      }
                                      setShowExpenseModal(true);
                                    }}
                                    className="p-1.5 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white rounded-lg hover:opacity-90 active:scale-95 transition-all block cursor-pointer shadow-md shadow-blue-800/20"
                                  >
                                    <Plus size={14} />
                                  </button>
                                )}
                              </div>
                              <div
                                className={`divide-y ${isPrintMode ? "divide-zinc-200" : "divide-black/5 dark:divide-white/5"}`}
                              >
                                {(expenses || []).length === 0 ? (
                                  <div
                                    className={`text-center text-black/35 dark:text-white/35 text-[10px] font-medium uppercase tracking-widest ${isPrintMode ? "p-2" : "p-6"}`}
                                  >
                                    Nenhuma despesa registrada
                                  </div>
                                ) : (
                                  sortedExpenses.map((expense, idx) => (
                                    <div
                                      key={`expense-${expense.id}-${idx}`}
                                      className={`flex items-center justify-between group ${isPrintMode ? "p-2 bg-white" : "p-3 bg-transparent hover:bg-black/5 dark:bg-white/5 transition-all"}`}
                                    >
                                      <div>
                                        <p
                                          className={`text-xs uppercase tracking-tight ${
                                            isPrintMode
                                              ? "font-mono text-zinc-800"
                                              : "font-black text-zinc-900 dark:text-white font-mono"
                                          }`}
                                        >
                                          {expense.name}
                                        </p>
                                        <p
                                          className={`text-[8px] font-bold uppercase tracking-widest ${
                                            isPrintMode
                                              ? "text-zinc-500 dark:text-zinc-500"
                                              : "text-black/50 dark:text-white/40"
                                          }`}
                                        >
                                          {new Date(
                                            expense.date,
                                          ).toLocaleDateString("pt-BR")}
                                        </p>
                                      </div>
                                      <div className="flex items-center gap-4">
                                        <p
                                          className={`text-xs font-bold ${
                                            isPrintMode
                                              ? "text-zinc-900"
                                              : "font-black text-red-400 font-mono"
                                          }`}
                                        >
                                          R$ {expense.amount},00
                                        </p>
                                        {!isPrintMode && (
                                          <button
                                            onClick={() =>
                                              setExpenses((prev) =>
                                                prev.filter(
                                                  (e) => e.id !== expense.id,
                                                ),
                                              )
                                            }
                                            className="p-1 text-black/30 dark:text-white/30 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                                          >
                                            <Trash2 size={13} />
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  ))
                                )}
                              </div>
                            </div>
                          )}
                          {isPrintMode && (
                            <div className="pt-8 text-center opacity-40">
                              <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                                Gerado via App FutQuina •{" "}
                                {new Date().toLocaleDateString("pt-BR")}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                {financeSubScreen === "mensalidade" && (
                  <motion.div className="space-y-4">
                    {!isPrintMode && (
                      <div className="flex justify-end px-4">
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => {
                              if (players.filter((p) => p.addedVia !== "whatsapp").length === 0) {
                                setToast({
                                  message:
                                    "Adicione jogadores para gerar relatórios",
                                  type: "info",
                                });
                                setTimeout(() => setToast(null), 3000);
                                return;
                              }
                              setIsPrintMode(true);
                            }}
                            className="text-black/70 dark:text-white/60 hover:text-zinc-900 dark:text-white p-1.5 hover:bg-black/10 dark:bg-white/10 rounded-full border border-black/10 dark:border-white/10 transition-colors cursor-pointer"
                          >
                            <Eye size={18} />
                          </button>
                        </div>
                      </div>
                    )}

                    {!isPrintMode && (
                      <div className="grid grid-cols-2 gap-2 px-4 mb-4">
                        <div className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[8px] font-black text-black/60 dark:text-white/50 uppercase tracking-[0.15em]">
                              Mensalidade
                            </span>
                            {isEditingFee ? (
                              <input
                                autoFocus
                                type="number"
                                value={tempFee}
                                onChange={(e) => setTempFee(e.target.value)}
                                onBlur={() => {
                                  const val = parseInt(tempFee);
                                  if (!isNaN(val)) setMonthlyFee(val);
                                  setIsEditingFee(false);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    const val = parseInt(tempFee);
                                    if (!isNaN(val)) setMonthlyFee(val);
                                    setIsEditingFee(false);
                                  }
                                }}
                                className="w-16 bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-zinc-900 dark:text-white font-black text-xs rounded px-1.5 py-0.5 outline-none focus:border-[#34d399] focus:bg-white/15"
                              />
                            ) : (
                              <div
                                onClick={() => {
                                  setTempFee(monthlyFee.toString());
                                  setIsEditingFee(true);
                                }}
                                className="text-xs font-black text-zinc-900 dark:text-white cursor-pointer hover:text-[#34d399] transition-colors"
                              >
                                R$ {monthlyFee},00
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-1">
                            <button
                              onClick={() => setMonthlyFee((prev) => prev + 1)}
                              className="p-1 bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10 rounded hover:bg-black/10 dark:bg-white/10 transition-all cursor-pointer active:scale-95"
                            >
                              <Plus size={8} />
                            </button>
                            <button
                              onClick={() =>
                                setMonthlyFee((prev) => Math.max(0, prev - 1))
                              }
                              className="p-1 bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80 border border-black/10 dark:border-white/10 rounded hover:bg-black/10 dark:bg-white/10 transition-all cursor-pointer active:scale-95"
                            >
                              <Minus size={8} />
                            </button>
                          </div>
                        </div>

                        <div className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[8px] font-black text-black/60 dark:text-white/50 uppercase tracking-[0.15em]">
                              Ano Selecionado
                            </span>
                            <select
                              value={selectedYear}
                              onChange={(e) =>
                                setSelectedYear(parseInt(e.target.value))
                              }
                              className="bg-transparent text-xs font-black text-zinc-900 dark:text-white outline-none cursor-pointer [color-scheme:dark]"
                            >
                              {availableYears.map((y) => (
                                <option
                                  key={y}
                                  value={y}
                                  className="bg-[#f1f5f9] dark:bg-[#0b0e17] text-zinc-900 dark:text-white"
                                >
                                  {y}
                                </option>
                              ))}
                            </select>
                          </div>
                          <button
                            onClick={addYear}
                            className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-md shadow-blue-800/20"
                            title="Adicionar Novo Ano"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    )}

                    {isPrintMode && (
                      <div className="p-3 bg-[#dce3ee] text-zinc-800 flex justify-end items-center">
                        <button
                          onClick={() => setIsPrintMode(false)}
                          className="p-1.5 bg-black/10 rounded-sm cursor-pointer"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )}

                    <div
                      className={`${isPrintMode ? "overflow-visible" : "overflow-x-auto -mx-4 px-4 pb-2 custom-scrollbar"}`}
                    >
                      <div
                        className={`${isPrintMode ? "w-full" : "min-w-[800px]"}`}
                      >
                        <table
                          className={`w-full border-collapse ${isPrintMode ? "text-[10px]" : "text-[9px]"}`}
                        >
                          <thead>
                            <tr
                              className={`${isPrintMode ? "bg-zinc-100 text-zinc-900" : "bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white border-b border-black/10 dark:border-white/10"} font-black uppercase tracking-tighter`}
                            >
                              <th
                                className={`p-1.5 text-left border ${isPrintMode ? "border-zinc-300" : "border-black/10 dark:border-white/10 rounded-tl-xl sticky left-0 z-10 bg-white dark:bg-[#0c101b]"}`}
                              >
                                Nome
                              </th>
                              <th
                                className={`p-1.5 text-center border ${isPrintMode ? "border-zinc-300" : "border-black/10 dark:border-white/10"}`}
                                colSpan={12}
                              >
                                {selectedYear} (R$ {monthlyFee},00)
                              </th>
                              <th
                                className={`p-1.5 text-center border ${isPrintMode ? "border-zinc-300" : "border-black/10 dark:border-white/10 rounded-tr-xl"}`}
                              >
                                Dívida
                              </th>
                            </tr>
                            <tr
                              className={`${isPrintMode ? "bg-zinc-50 text-zinc-700" : "bg-black/5 dark:bg-white/5 text-black/80 dark:text-white/80"} font-bold uppercase tracking-tighter`}
                            >
                              <th
                                className={`border ${isPrintMode ? "border-zinc-300" : "border-black/10 dark:border-white/10 sticky left-0 z-10 bg-white dark:bg-[#0c101b]"}`}
                              ></th>
                              {MONTHS.map((month) => (
                                <th
                                  key={month}
                                  className={`p-0.5 border ${isPrintMode ? "border-zinc-300" : "border-black/10 dark:border-white/10"}`}
                                >
                                  {month}
                                </th>
                              ))}
                              <th
                                className={`border ${isPrintMode ? "border-zinc-300" : "border-black/10 dark:border-white/10"}`}
                              ></th>
                            </tr>
                          </thead>
                          <tbody
                            className={`${isPrintMode ? "bg-white text-black" : "text-zinc-900 dark:text-white bg-transparent"}`}
                          >
                            {players.filter((p) => p.addedVia !== "whatsapp").map((player, index) => {
                              const record = payments.find(
                                (p) =>
                                  p.playerId === player.id &&
                                  p.year === selectedYear,
                              ) || {
                                playerId: player.id,
                                year: selectedYear,
                                months: {},
                                monthlyFee: monthlyFee,
                              };

                              const totalDebt = 12 * monthlyFee;
                              const paidMonths = MONTHS.reduce(
                                (acc, month) =>
                                  acc +
                                  (record?.months?.[month] ? monthlyFee : 0),
                                0,
                              );
                              const remaining = totalDebt - paidMonths;

                              const rowBg =
                                index % 2 === 0
                                  ? "bg-black/5 dark:bg-white/5"
                                  : "bg-transparent";
                              const stickyBg =
                                index % 2 === 0
                                  ? "bg-[#f8fafc] dark:bg-[#141926]"
                                  : "bg-[#f1f5f9] dark:bg-[#0b0e17]";

                              return (
                                <tr
                                  key={`finance-row-${player.id}-${index}`}
                                  className={`${isPrintMode ? (index % 2 === 0 ? "bg-zinc-50" : "bg-white") : rowBg} ${!isPrintMode ? "hover:bg-black/10 dark:bg-white/10 transition-colors" : ""}`}
                                >
                                  <td
                                    className={`p-1 border ${isPrintMode ? "border-zinc-200" : "border-black/10 dark:border-white/10 font-bold sticky left-0 z-10"} ${isPrintMode ? "bg-inherit" : stickyBg}`}
                                  >
                                    <span className="p-0.5 font-bold">
                                      {player.name}
                                    </span>
                                  </td>
                                  {MONTHS.map((month) => {
                                    const isPaid =
                                      (record?.months?.[month] || 0) > 0;
                                    return (
                                      <td
                                        key={`month-cell-${player.id}-${month}`}
                                        className={`p-0.5 border ${isPrintMode ? "border-zinc-200" : "border-black/10 dark:border-white/10"} text-center`}
                                      >
                                        {isPrintMode ? (
                                          <span
                                            className={`font-bold ${isPaid ? "text-emerald-600" : "text-red-400 opacity-30"}`}
                                          >
                                            {isPaid ? "OK" : "-"}
                                          </span>
                                        ) : (
                                          <button
                                            onClick={() =>
                                              togglePayment(
                                                player.id,
                                                month,
                                                monthlyFee,
                                              )
                                            }
                                            className={`w-full py-1 text-[8px] tracking-tight rounded transition-all cursor-pointer ${isPaid ? "bg-[#34d399] text-[#1e3d2f] font-black hover:opacity-90" : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 text-black/50 dark:text-white/40 font-bold"}`}
                                          >
                                            {isPaid
                                              ? "PAGO"
                                              : `R$ ${monthlyFee}`}
                                          </button>
                                        )}
                                      </td>
                                    );
                                  })}
                                  <td
                                    className={`p-1 border ${isPrintMode ? "border-zinc-200" : "border-black/10 dark:border-white/10"} text-center font-black ${remaining > 0 ? (isPrintMode ? "text-red-600" : "text-red-400") : isPrintMode ? "text-emerald-700" : "text-[#34d399]"}`}
                                  >
                                    R$ {remaining}
                                  </td>
                                </tr>
                              );
                            })}
                            {players.length === 0 && (
                              <tr>
                                <td
                                  colSpan={14}
                                  className={`p-4 text-center italic normal-case ${isPrintMode ? "text-zinc-600 dark:text-zinc-400" : "text-black/50 dark:text-white/40 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"}`}
                                >
                                  Nenhum jogador cadastrado.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {!isPrintMode && (
                      <div className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl space-y-1 mt-4">
                        <div className="flex items-center gap-1.5 text-[#34d399]">
                          <Info size={12} />
                          <span className="text-[8px] font-black uppercase tracking-[0.15em]">
                            Dica
                          </span>
                        </div>
                        <p className="text-[9px] text-black/70 dark:text-white/60 leading-relaxed">
                          Clique no valor da mensalidade para editar. Use o
                          botão "+" para criar um novo ano de controle.
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          {showEqualizerModal && equalizerData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 dark:bg-[#060814]/85 backdrop-blur-sm z-[80] flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className={`w-full max-w-md p-8 rounded-lg bg-brand-card space-y-6`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-black uppercase tracking-tighter">
                    Completar Times
                  </h3>
                  <button
                    onClick={() => setShowEqualizerModal(false)}
                    className="p-2 glass-3d rounded-md"
                  >
                    <Plus size={20} className="rotate-45" />
                  </button>
                </div>

                <p className="text-xs text-brand-text-secondary uppercase font-bold tracking-widest leading-relaxed">
                  A partida só pode iniciar com times equilibrados. Selecione
                  jogadores de{" "}
                  <span className="text-brand-primary">outros times</span> para
                  completar o{" "}
                  <span className="text-brand-primary">
                    {teams[equalizerData.targetTeamIndex].name}
                  </span>
                  .
                  <br />
                  <span className="text-[10px] opacity-60 mt-1 block">
                    Faltam{" "}
                    {equalizerData.requiredCount -
                      (teams[equalizerData.targetTeamIndex]?.playerIds
                        ?.length || 0)}{" "}
                    jogador(es) para igualar ao{" "}
                    {teams[equalizerData.otherTeamIndex]?.name || "outro time"}.
                  </span>
                </p>

                <div className="max-h-60 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                  {players
                    .filter((p) => {
                      // Only show players who are NOT in the two selected teams AND are available
                      const isSelected =
                        (match.teamAIndex !== -1 &&
                          teams[match.teamAIndex]?.playerIds?.includes(p.id)) ||
                        (match.teamBIndex !== -1 &&
                          teams[match.teamBIndex]?.playerIds?.includes(p.id));
                      return !isSelected && p.isAvailable;
                    })
                    .map((player) => {
                      const currentTeam = teams.find((t) =>
                        t.playerIds.includes(player.id),
                      );
                      const isInOtherTeam =
                        equalizerData.otherTeamIndex !== -1 &&
                        teams[
                          equalizerData.otherTeamIndex
                        ]?.playerIds?.includes(player.id);
                      const isInAnyOtherTeam = teams.some(
                        (t, idx) =>
                          idx !== equalizerData.targetTeamIndex &&
                          t.playerIds?.includes(player.id),
                      );

                      return (
                        <button
                          key={`equalizer-player-choice-${player.id}`}
                          onClick={() => {
                            const newTeams = [...teams];

                            // Remove from any other team first
                            newTeams.forEach((t) => {
                              t.playerIds = t.playerIds.filter(
                                (id) => id !== player.id,
                              );
                            });

                            // Add to target team
                            if (newTeams[equalizerData.targetTeamIndex]) {
                              newTeams[
                                equalizerData.targetTeamIndex
                              ].playerIds.push(player.id);
                            }
                            setTeams(newTeams);
                          }}
                          className={`w-full p-4 rounded-lg text-left font-bold transition-all flex justify-between items-center glass-3d ${
                            isInOtherTeam
                              ? "bg-brand-primary/10 border border-brand-primary/20"
                              : isInAnyOtherTeam
                                ? "bg-zinc-500/5 opacity-60"
                                : "bg-brand-dark hover:bg-brand-primary/20"
                          }`}
                        >
                          <div className="flex flex-col">
                            <span
                              className={
                                isInOtherTeam ? "text-brand-primary" : ""
                              }
                            >
                              {player.name}
                            </span>
                            <span className="text-[8px] uppercase opacity-60">
                              {currentTeam
                                ? `Time: ${currentTeam.name}`
                                : "Sem Time"}
                            </span>
                          </div>
                          {isInOtherTeam ? (
                            <Shuffle size={16} className="text-brand-primary" />
                          ) : (
                            <Plus size={16} className="text-brand-primary" />
                          )}
                        </button>
                      );
                    })}
                  {players.filter(
                    (p) =>
                      p.isAvailable &&
                      !(
                        match.teamAIndex !== -1 &&
                        teams[match.teamAIndex]?.playerIds?.includes(p.id)
                      ) &&
                      !(
                        match.teamBIndex !== -1 &&
                        teams[match.teamBIndex]?.playerIds?.includes(p.id)
                      ),
                  ).length === 0 && (
                    <div className="text-center py-8 opacity-50 text-xs">
                      Não há jogadores disponíveis em outros times. <br />
                      Crie novos jogadores para equilibrar a partida.
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  {(teams[equalizerData.targetTeamIndex]?.playerIds?.length ||
                    0) === equalizerData.requiredCount ? (
                    <div className="w-full py-4" />
                  ) : (
                    <button
                      disabled
                      className="w-full py-4 bg-black/5 dark:bg-white/5 text-black/20 dark:text-white/20 rounded-lg font-black uppercase tracking-tighter cursor-not-allowed border border-black/5 dark:border-white/5 flex items-center justify-center gap-2"
                    >
                      Completar Times para Iniciar
                    </button>
                  )}

                  <button
                    onClick={() => setShowEqualizerModal(false)}
                    className="w-full py-3 text-brand-text-secondary text-[10px] font-black uppercase tracking-widest hover:text-zinc-900 dark:text-white transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Floating Multi-select Bar */}
          <AnimatePresence>
            {movingPlayers &&
              !isSelectingDestination &&
              movingPlayers.playerIds.length > 0 && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  className="fixed bottom-24 left-0 right-0 px-4 z-[100] flex justify-center pointer-events-none"
                >
                  <div className="bg-brand-card/95 backdrop-blur-md border border-brand-primary/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full p-2 flex items-center gap-3 pointer-events-auto">
                    <div className="px-4 text-sm font-bold text-brand-text-primary">
                      {movingPlayers.playerIds.length} selecionado
                      {movingPlayers.playerIds.length > 1 ? "s" : ""}
                    </div>
                    <button
                      onClick={() => {
                        setIsSelectingDestination(true);
                        setToast({
                          message:
                            "Selecione o time de destino (apenas times incompletos).",
                          type: "info",
                        });
                      }}
                      className="px-6 py-2 bg-brand-primary text-black rounded-full font-black uppercase text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow shadow-brand-primary/20"
                    >
                      <MoveRight size={16} /> Mover
                    </button>
                    <button
                      onClick={() => {
                        setMovingPlayers(null);
                        setIsSelectingDestination(false);
                      }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
          </AnimatePresence>
        </main>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {isRandomizing && <RouletteOverlay />}
        {showPlayerActionsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            onClick={() => setShowPlayerActionsModal(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className="w-full max-w-[320px] rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] bg-white/95 dark:bg-[#0f111a]/95 border border-white/20 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modern Header Banner */}
              <div className="w-full h-8 bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#144011] relative overflow-hidden flex items-center justify-between px-4 border-b border-white/10 shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3),transparent_70%)] pointer-events-none" />
              </div>

              {/* Header */}
              <div className="bg-white dark:bg-white/[0.03] pt-6 pb-5 px-6 text-center relative overflow-hidden flex flex-col items-center">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />

                <div className="w-20 h-20 mx-auto rounded-full bg-white dark:bg-[#1a1d29] flex items-center justify-center overflow-hidden border-2 border-emerald-500 shadow-md shadow-emerald-500/20 relative z-10 mb-3">
                  {players.find((p) => p.id === showPlayerActionsModal.playerId)
                    ?.photo ? (
                    <img
                      src={
                        players.find(
                          (p) => p.id === showPlayerActionsModal.playerId,
                        )?.photo
                      }
                      alt="Player"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-black/50 dark:text-white/40 flex items-center shrink-0">
                      <User size={28} />
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
                  {
                    players.find(
                      (p) => p.id === showPlayerActionsModal.playerId,
                    )?.name
                  }
                </h3>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={`star-action-${showPlayerActionsModal.playerId}-${star}`}
                      size={8}
                      className={`${(players.find((p) => p.id === showPlayerActionsModal.playerId)?.stars || 3) >= star ? "fill-yellow-400 text-yellow-400" : "text-black/10 dark:text-white/10"}`}
                    />
                  ))}
                </div>

                {/* Player Stats Chart */}
                <div className="flex items-center justify-center gap-6 mt-3 relative z-10 mx-2">
                  <StatCircularGauge
                    value={
                      players.find(
                        (p) => p.id === showPlayerActionsModal.playerId,
                      )?.goals || 0
                    }
                    label="Gols"
                    color="green"
                  />
                  <StatCircularGauge
                    value={
                      players.find(
                        (p) => p.id === showPlayerActionsModal.playerId,
                      )?.assists || 0
                    }
                    label="Assists"
                    color="amber"
                  />
                  <StatCircularGauge
                    value={
                      players.find(
                        (p) => p.id === showPlayerActionsModal.playerId,
                      )?.matchesPlayed || 0
                    }
                    label="Partidas"
                    color="blue"
                  />
                </div>
              </div>

              {/* Actions Section */}
              <div className="p-3 bg-white dark:bg-transparent">
                <div className="space-y-1.5">
                  {/* Primary Success Actions (Goal) */}
                  {!swappingPlayerId &&
                    (showPlayerActionsModal.teamIndex === match.teamAIndex ||
                      showPlayerActionsModal.teamIndex ===
                        match.teamBIndex) && (
                      <button
                        onClick={() => {
                          if (
                            !match.isActive ||
                            match.isPaused ||
                            match.scoreA >= match.config.goalLimit ||
                            match.scoreB >= match.config.goalLimit
                          )
                            return;
                          setShowAssistSelection({
                            teamIndex: showPlayerActionsModal.teamIndex,
                            scorerId: showPlayerActionsModal.playerId,
                          });
                          setShowPlayerActionsModal(null);
                        }}
                        disabled={
                          !match.isActive ||
                          match.isPaused ||
                          match.scoreA >= match.config.goalLimit ||
                          match.scoreB >= match.config.goalLimit
                        }
                        className="relative overflow-hidden w-full h-9 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-xl shadow-sm hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 px-4 cursor-pointer"
                      >
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            repeatDelay: 1.5,
                          }}
                          className="absolute inset-0 z-10 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none"
                        />
                        <span className="text-white shrink-0 flex items-center z-20">
                          <IoIosFootball size={16} />
                        </span>
                        <span className="z-20 text-white">GOOL</span>
                      </button>
                    )}

                  {/* Swap Confirmation (Contextual) */}
                  {swappingPlayerId &&
                    swappingPlayerId !== showPlayerActionsModal.playerId && (
                      <button
                        onClick={() => {
                          const playerAId = swappingPlayerId;
                          const playerBId = showPlayerActionsModal.playerId;

                          const targetTeamIdx = teams.findIndex((t) =>
                            t.playerIds.includes(playerAId),
                          );
                          if (targetTeamIdx !== -1) {
                            scrollToTeam(targetTeamIdx);
                          }

                          handleGoalkeeperSwap(playerAId, playerBId);
                          setTeams((prev) => {
                            const newTeams = prev.map((t) => ({
                              ...t,
                              playerIds: [...t.playerIds],
                            }));
                            let teamAIdx = -1;
                            let teamBIdx = -1;

                            newTeams.forEach((team, idx) => {
                              if (team.playerIds.includes(playerAId))
                                teamAIdx = idx;
                              if (team.playerIds.includes(playerBId))
                                teamBIdx = idx;
                            });

                            if (teamAIdx !== -1 && teamBIdx !== -1) {
                              if (teamAIdx === teamBIdx) {
                                newTeams[teamAIdx].playerIds = newTeams[
                                  teamAIdx
                                ].playerIds.map((id) => {
                                  if (id === playerAId) return playerBId;
                                  if (id === playerBId) return playerAId;
                                  return id;
                                });
                              } else {
                                newTeams[teamAIdx].playerIds = newTeams[
                                  teamAIdx
                                ].playerIds.map((id) =>
                                  id === playerAId ? playerBId : id,
                                );
                                newTeams[teamBIdx].playerIds = newTeams[
                                  teamBIdx
                                ].playerIds.map((id) =>
                                  id === playerBId ? playerAId : id,
                                );
                              }
                            }

                            return newTeams;
                          });
                          setSwappingPlayerId(null);
                          setShowPlayerActionsModal(null);
                        }}
                        className="w-full h-9 bg-amber-500 hover:bg-amber-600 text-black rounded-xl font-black uppercase text-[10px] tracking-wider flex items-center justify-between px-4 transition-all active:scale-95 shadow-md shadow-amber-500/20 group font-roboto-flex cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <RefreshCw
                            size={14}
                            className="group-hover:rotate-180 transition-transform duration-500"
                          />
                          <span className="tracking-widest">
                            Confirmar Troca
                          </span>
                        </div>
                        <Check size={12} className="opacity-50" />
                      </button>
                    )}

                  {/* Action Grid */}
                  {!swappingPlayerId &&
                    orgProSettings.allowFixedGoalkeeper !== false &&
                    (!teams[showPlayerActionsModal.teamIndex]?.playerIds.some(
                      (pid) => players.find((p) => p.id === pid)?.isGoalkeeper,
                    ) ||
                      players.find(
                        (p) => p.id === showPlayerActionsModal.playerId,
                      )?.isGoalkeeper) && (
                      <button
                        onClick={() => {
                          const pid = showPlayerActionsModal.playerId;
                          const targetTeamIndex =
                            showPlayerActionsModal.teamIndex;
                          const player = players.find((p) => p.id === pid);
                          const isBecomingGk = player
                            ? !player.isGoalkeeper
                            : false;

                          setPlayers((prev) =>
                            prev.map((p) =>
                              p.id === pid
                                ? { ...p, isGoalkeeper: !p.isGoalkeeper }
                                : p,
                            ),
                          );

                          if (isBecomingGk && targetTeamIndex !== -1) {
                            setTeams((prev) =>
                              prev.map((team, idx) => {
                                if (idx === targetTeamIndex) {
                                  const otherIds = team.playerIds.filter(
                                    (id) => id !== pid,
                                  );
                                  return {
                                    ...team,
                                    playerIds: [pid, ...otherIds],
                                  };
                                }
                                return team;
                              }),
                            );
                          }

                          setShowPlayerActionsModal(null);
                        }}
                        className="relative overflow-hidden w-full h-9 mt-1.5 rounded-xl font-bold text-[10px] uppercase tracking-widest bg-gradient-to-br from-[#75c628]/20 to-white dark:from-[#25660e]/40 dark:to-[#111625]/90 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 shadow-sm backdrop-blur-xl hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                      >
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            repeatDelay: 1.5,
                          }}
                          className="absolute inset-0 z-10 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none"
                        />
                        <div className="flex items-center gap-2 z-20">
                          <span className="flex items-center border border-black/20 dark:border-white/40 rounded-full w-4 h-4 justify-center text-[9px] font-bold leading-none text-black/80 dark:text-white bg-emerald-500/20">
                            G
                          </span>
                          <span className="tracking-widest text-black/80 dark:text-white">
                            {players.find(
                              (p) => p.id === showPlayerActionsModal.playerId,
                            )?.isGoalkeeper
                              ? "Desmarcar Goleiro"
                              : "Marcar Goleiro"}
                          </span>
                        </div>
                      </button>
                    )}
                  <div className="grid grid-cols-2 gap-2 mt-2 max-w-[240px] mx-auto">
                    {/* Substituir */}
                    {swappingPlayerId !== showPlayerActionsModal.playerId && (
                      <button
                        onClick={() => {
                          setSwappingPlayerId(showPlayerActionsModal.playerId);
                          setShowPlayerActionsModal(null);
                          setToast({
                            message:
                              "Selecione outro jogador para trocar de posição.",
                            type: "info",
                          });
                        }}
                        className="py-2.5 px-2 bg-[#0e2c0e]/10 dark:bg-[#1b5017]/30 hover:bg-[#1b5017]/20 dark:hover:bg-[#1b5017]/50 active:scale-95 text-[#1b5017] dark:text-emerald-400 border border-emerald-600/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                      >
                        <span className="group-hover:rotate-180 transition-transform duration-500 shrink-0">
                          <GiCycle size={22} />
                        </span>
                        <span className="text-xs font-medium tracking-wide">Substituir</span>
                      </button>
                    )}

                    {/* Mover */}
                    {!swappingPlayerId && (
                      <button
                        onClick={() => {
                          setMovingPlayers({
                            teamId: teams[showPlayerActionsModal.teamIndex].id,
                            playerIds: [showPlayerActionsModal.playerId],
                          });
                          setIsSelectingDestination(true);
                          setTeamsTab("proximos");
                          setShowPlayerActionsModal(null);
                          setToast({
                            message:
                              "Selecione o time de destino (apenas times incompletos).",
                            type: "info",
                          });
                        }}
                        className="py-2.5 px-2 bg-slate-800/10 dark:bg-slate-800/40 hover:bg-slate-800/20 dark:hover:bg-slate-800/60 active:scale-95 text-slate-700 dark:text-slate-300 border border-slate-600/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform shrink-0">
                          <GiPlayerNext size={22} />
                        </span>
                        <span className="text-xs font-medium tracking-wide">Mover</span>
                      </button>
                    )}

                    {/* Ausente */}
                    {!swappingPlayerId && (
                      <button
                        onClick={() => {
                          const isPlayerInActiveMatch =
                            match.isActive &&
                            [match.teamAIndex, match.teamBIndex].includes(
                              showPlayerActionsModal.teamIndex,
                            );

                          if (isPlayerInActiveMatch && !match.isPaused) {
                            setMatch((prev) => ({ ...prev, isPaused: true }));
                          }

                          setTeams((prev) => {
                            return prev
                              .map((t) => ({
                                ...t,
                                playerIds: t.playerIds.filter(
                                  (id) =>
                                    id !== showPlayerActionsModal.playerId,
                                ),
                              }))
                              .filter((t) => t.playerIds.length > 0);
                          });
                          setPlayers((prev) =>
                            prev.map((p) =>
                              p.id === showPlayerActionsModal.playerId
                                ? {
                                    ...p,
                                    isAvailable: false,
                                    arrivedAt: undefined,
                                  }
                                : p,
                            ),
                          );

                          if (isPlayerInActiveMatch) {
                            setFillingVacancyForTeam(
                              showPlayerActionsModal.teamIndex,
                            );
                            setTeamsTab("proximos");
                            setToast({
                              message:
                                "Selecione o jogador que entrará no lugar.",
                              type: "info",
                            });
                          } else {
                            setToast({
                              message: "Jogador movido para ausentes.",
                              type: "info",
                            });
                          }

                          setShowPlayerActionsModal(null);
                        }}
                        className="py-2.5 px-2 bg-amber-950/10 dark:bg-amber-950/40 hover:bg-amber-950/20 dark:hover:bg-amber-950/60 active:scale-95 text-amber-800 dark:text-amber-300 border border-amber-700/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                      >
                        <UserX size={22} className="group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-xs font-medium tracking-wide">Ausente</span>
                      </button>
                    )}

                    {/* Cancel Swap Call */}
                    {swappingPlayerId === showPlayerActionsModal.playerId && (
                      <button
                        onClick={() => {
                          setSwappingPlayerId(null);
                          setShowPlayerActionsModal(null);
                        }}
                        className="py-2.5 px-2 bg-zinc-800/10 dark:bg-zinc-800/40 hover:bg-zinc-800/20 dark:hover:bg-zinc-800/60 active:scale-95 text-zinc-700 dark:text-zinc-300 border border-zinc-600/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                      >
                        <span className="shrink-0">
                          <GiCancel size={22} />
                        </span>
                        <span className="text-xs font-medium tracking-wide">Cancelar</span>
                      </button>
                    )}

                    <button
                      onClick={() => setShowPlayerActionsModal(null)}
                      className="py-2.5 px-2 bg-zinc-800/10 dark:bg-zinc-800/40 hover:bg-zinc-800/20 dark:hover:bg-zinc-800/60 active:scale-95 text-zinc-700 dark:text-zinc-300 border border-zinc-600/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                    >
                      <span className="group-hover:rotate-90 transition-transform duration-300 shrink-0">
                        <GiCancel size={22} />
                      </span>
                      <span className="text-xs font-medium tracking-wide">Fechar</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showQueuePlayerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            onClick={() => setShowQueuePlayerModal(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className="w-full max-w-[320px] rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] bg-white/95 dark:bg-[#0f111a]/95 border border-white/20 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modern Header Banner */}
              <div className="w-full h-8 bg-gradient-to-r from-[#0e2c0e] via-[#1b5017] to-[#144011] relative overflow-hidden flex items-center justify-between px-4 border-b border-white/10 shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.3),transparent_70%)] pointer-events-none" />
              </div>

              {/* Header */}
              <div className="bg-white dark:bg-white/[0.03] pt-6 pb-5 px-6 text-center relative overflow-hidden flex flex-col items-center">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />

                <div className="w-20 h-20 mx-auto rounded-full bg-white dark:bg-[#1a1d29] flex items-center justify-center overflow-hidden border-2 border-emerald-500 shadow-md shadow-emerald-500/20 relative z-10 mb-3">
                  {players.find((p) => p.id === showQueuePlayerModal.playerId)
                    ?.photo ? (
                    <img
                      src={
                        players.find(
                          (p) => p.id === showQueuePlayerModal.playerId,
                        )?.photo
                      }
                      alt="Player"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-black/50 dark:text-white/40 flex items-center shrink-0">
                      <User size={28} />
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
                  {
                    players.find((p) => p.id === showQueuePlayerModal.playerId)
                      ?.name
                  }
                </h3>

                {/* Player Stats Chart */}
                <div className="flex items-center justify-center gap-6 mt-3 relative z-10 mx-2">
                  <StatCircularGauge
                    value={
                      players.find(
                        (p) => p.id === showQueuePlayerModal.playerId,
                      )?.goals || 0
                    }
                    label="Gols"
                    color="green"
                  />
                  <StatCircularGauge
                    value={
                      players.find(
                        (p) => p.id === showQueuePlayerModal.playerId,
                      )?.assists || 0
                    }
                    label="Assists"
                    color="amber"
                  />
                  <StatCircularGauge
                    value={
                      players.find(
                        (p) => p.id === showQueuePlayerModal.playerId,
                      )?.matchesPlayed || 0
                    }
                    label="Partidas"
                    color="blue"
                  />
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-transparent">
                <div className="space-y-2.5">
                  {!showQueuePlayerModal.showMoveOptions ? (
                    <div className="grid grid-cols-2 gap-2 mt-2 max-w-[240px] mx-auto">
                      {orgProSettings.allowFixedGoalkeeper !== false &&
                        (!teams[showQueuePlayerModal.teamIndex]?.playerIds.some(
                          (pid) =>
                            players.find((p) => p.id === pid)?.isGoalkeeper,
                        ) ||
                          players.find(
                            (p) => p.id === showQueuePlayerModal.playerId,
                          )?.isGoalkeeper) && (
                          <button
                            onClick={() => {
                              const pid = showQueuePlayerModal.playerId;
                              const targetTeamIndex =
                                showQueuePlayerModal.teamIndex;
                              const player = players.find((p) => p.id === pid);
                              const isBecomingGk = player
                                ? !player.isGoalkeeper
                                : false;

                              setPlayers((prev) =>
                                prev.map((p) =>
                                  p.id === pid
                                    ? { ...p, isGoalkeeper: !p.isGoalkeeper }
                                    : p,
                                ),
                              );

                              if (isBecomingGk && targetTeamIndex !== -1) {
                                setTeams((prev) =>
                                  prev.map((team, idx) => {
                                    if (idx === targetTeamIndex) {
                                      const otherIds = team.playerIds.filter(
                                        (id) => id !== pid,
                                      );
                                      return {
                                        ...team,
                                        playerIds: [pid, ...otherIds],
                                      };
                                    }
                                    return team;
                                  }),
                                );
                              }

                              setShowQueuePlayerModal(null);
                            }}
                            className="relative overflow-hidden col-span-2 w-full h-9 rounded-xl font-bold text-[10px] uppercase tracking-widest bg-gradient-to-br from-[#75c628]/20 to-white dark:from-[#25660e]/40 dark:to-[#111625]/90 border border-black/10 dark:border-white/10 text-black/80 dark:text-white/80 shadow-sm backdrop-blur-xl hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                          >
                            <motion.div
                              initial={{ x: "-100%" }}
                              animate={{ x: "200%" }}
                              transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut",
                                repeatDelay: 1.5,
                              }}
                              className="absolute inset-0 z-10 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] pointer-events-none"
                            />
                            <div className="flex items-center gap-2 z-20">
                              <span className="flex items-center border border-black/20 dark:border-white/40 rounded-full w-4 h-4 justify-center text-[9px] font-bold leading-none text-black/80 dark:text-white bg-emerald-500/20">
                                G
                              </span>
                              <span className="text-black/80 dark:text-white">
                                {players.find(
                                  (p) => p.id === showQueuePlayerModal.playerId,
                                )?.isGoalkeeper
                                  ? "Desmarcar Goleiro"
                                  : "Marcar Goleiro"}
                              </span>
                            </div>
                          </button>
                        )}
                      <button
                        onClick={() => {
                          setSwappingPlayerId(showQueuePlayerModal.playerId);
                          setShowQueuePlayerModal(null);
                          setToast({
                            message:
                              "Selecione outro jogador para trocar de posição.",
                            type: "info",
                          });
                        }}
                        className="py-2.5 px-2 bg-[#0e2c0e]/10 dark:bg-[#1b5017]/30 hover:bg-[#1b5017]/20 dark:hover:bg-[#1b5017]/50 active:scale-95 text-[#1b5017] dark:text-emerald-400 border border-emerald-600/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                      >
                        <span className="group-hover:rotate-180 transition-transform duration-500 shrink-0">
                          <GiCycle size={22} />
                        </span>
                        <span className="text-xs font-medium tracking-wide">Substituir</span>
                      </button>

                      <button
                        onClick={() => {
                          setMovingPlayers({
                            teamId: teams[showQueuePlayerModal.teamIndex].id,
                            playerIds: [showQueuePlayerModal.playerId],
                          });
                          setIsSelectingDestination(true);
                          setShowQueuePlayerModal(null);
                          setToast({
                            message:
                              "Selecione o time de destino (apenas times incompletos).",
                            type: "info",
                          });
                        }}
                        className="py-2.5 px-2 bg-slate-800/10 dark:bg-slate-800/40 hover:bg-slate-800/20 dark:hover:bg-slate-800/60 active:scale-95 text-slate-700 dark:text-slate-300 border border-slate-600/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform shrink-0">
                          <GiPlayerNext size={22} />
                        </span>
                        <span className="text-xs font-medium tracking-wide">Mover</span>
                      </button>

                      <button
                        onClick={() => {
                          setTeams((prev) => {
                            return prev
                              .map((t) => ({
                                ...t,
                                playerIds: t.playerIds.filter(
                                  (id) => id !== showQueuePlayerModal.playerId,
                                ),
                              }))
                              .filter((t) => t.playerIds.length > 0);
                          });
                          setPlayers((prev) =>
                            prev.map((p) =>
                              p.id === showQueuePlayerModal.playerId
                                ? {
                                    ...p,
                                    isAvailable: false,
                                    arrivedAt: undefined,
                                  }
                                : p,
                            ),
                          );
                          setShowQueuePlayerModal(null);
                          setToast({
                            message: "Jogador movido para ausentes.",
                            type: "info",
                          });
                        }}
                        className="py-2.5 px-2 bg-amber-950/10 dark:bg-amber-950/40 hover:bg-amber-950/20 dark:hover:bg-amber-950/60 active:scale-95 text-amber-800 dark:text-amber-300 border border-amber-700/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                      >
                        <UserX size={22} className="group-hover:scale-110 transition-transform shrink-0" />
                        <span className="text-xs font-medium tracking-wide">Ausente</span>
                      </button>

                      <button
                        onClick={() => setShowQueuePlayerModal(null)}
                        className="py-2.5 px-2 bg-zinc-800/10 dark:bg-zinc-800/40 hover:bg-zinc-800/20 dark:hover:bg-zinc-800/60 active:scale-95 text-zinc-700 dark:text-zinc-300 border border-zinc-600/30 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all group cursor-pointer"
                      >
                        <span className="group-hover:rotate-90 transition-transform duration-300 shrink-0">
                          <GiCancel size={22} />
                        </span>
                        <span className="text-xs font-medium tracking-wide">Fechar</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-[10px] font-black text-zinc-600 dark:text-zinc-400 uppercase tracking-widest text-center px-4">
                        Destino:
                      </div>
                      <div className="max-h-60 overflow-y-auto px-1 space-y-2 custom-scrollbar">
                        {teams.map((t, idx) => {
                          if (idx === showQueuePlayerModal.teamIndex)
                            return null;
                          return (
                            <button
                              key={`move-to-${t.id}`}
                              onClick={() => {
                                setTeams((prev) => {
                                  const newTeams = [...prev].map((team) => ({
                                    ...team,
                                    playerIds: [...team.playerIds],
                                  }));
                                  if (
                                    newTeams[showQueuePlayerModal.teamIndex]
                                  ) {
                                    newTeams[
                                      showQueuePlayerModal.teamIndex
                                    ].playerIds = newTeams[
                                      showQueuePlayerModal.teamIndex
                                    ].playerIds.filter(
                                      (id) =>
                                        id !== showQueuePlayerModal.playerId,
                                    );
                                  }
                                  if (newTeams[idx]) {
                                    newTeams[idx].playerIds.push(
                                      showQueuePlayerModal.playerId,
                                    );
                                  }
                                  return newTeams.filter(
                                    (team) => team.playerIds.length > 0,
                                  );
                                });
                                setShowQueuePlayerModal(null);
                                setToast({
                                  message: "Jogador movido com sucesso!",
                                  type: "success",
                                });
                              }}
                              className="w-full text-left px-5 py-4 text-xs font-black text-zinc-900 bg-zinc-50 hover:bg-brand-primary hover:text-black rounded-2xl transition-all border border-zinc-100 flex items-center justify-between group"
                            >
                              <span className="uppercase tracking-tight">
                                {t.name}
                              </span>
                              <ChevronRight
                                size={16}
                                className="opacity-30 group-hover:opacity-100 transition-opacity"
                              />
                            </button>
                          );
                        })}
                      </div>
                      <button
                        onClick={() =>
                          setShowQueuePlayerModal({
                            ...showQueuePlayerModal,
                            showMoveOptions: false,
                          })
                        }
                        className="w-full py-4 text-zinc-600 dark:text-zinc-400 text-[10px] font-black uppercase tracking-widest"
                      >
                        Voltar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showAssistSelection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-md z-[160] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-[280px] p-5 rounded-[20px] bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col items-center text-center space-y-3 p-3 bg-white dark:bg-zinc-900 rounded-[24px] border border-zinc-200 dark:border-zinc-800 shadow-xl">
                <div className="flex items-center justify-center shrink-0">
                  <span className="text-emerald-600 dark:text-emerald-400">
                    <IoIosFootball size={32} />
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-[8px] font-normal leading-relaxed text-black/60 dark:text-white/50 tracking-wide">
                    Gol de{" "}
                    {
                      players.find((p) => p.id === showAssistSelection.scorerId)
                        ?.name
                    }
                  </p>
                </div>

                <div className="w-full grid grid-cols-1 gap-1.5 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
                  <motion.button
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => {
                      const team =
                        showAssistSelection.teamIndex === match.teamAIndex
                          ? "A"
                          : "B";
                      registerGoal(team, showAssistSelection.scorerId);
                      setShowAssistSelection(null);
                    }}
                    className="w-full h-9 rounded-full border border-black/10 dark:border-white/10 transition-all text-center flex items-center justify-center bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 group shadow-sm shrink-0"
                  >
                    <span className="text-[9px] font-black uppercase tracking-widest text-black/70 dark:text-white/60 group-hover:text-zinc-900 dark:text-white">
                      Sem Assistência
                    </span>
                  </motion.button>

                  <div className="h-4 flex items-center gap-2 shrink-0">
                    <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
                    <span className="text-[8px] font-black text-black/30 dark:text-white/30 uppercase tracking-widest">
                      Jogadores do Time
                    </span>
                    <div className="h-px flex-1 bg-black/5 dark:bg-white/5"></div>
                  </div>

                  {teams[showAssistSelection.teamIndex].playerIds
                    .filter((pid) => pid !== showAssistSelection.scorerId)
                    .map((pid, idx) => {
                      const player = players.find((p) => p.id === pid);
                      return (
                        <motion.button
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          key={`assist-choice-modal-${pid}`}
                          onClick={() => {
                            const team =
                              showAssistSelection.teamIndex === match.teamAIndex
                                ? "A"
                                : "B";
                            registerGoal(
                              team,
                              showAssistSelection.scorerId,
                              pid,
                            );
                            setShowAssistSelection(null);
                          }}
                          className="w-full p-1.5 rounded-full border border-black/10 dark:border-[#1e2540] transition-all text-left group flex items-center gap-2 bg-black/5 dark:bg-[#0f1324] hover:bg-black/10 dark:hover:bg-[#151a30] shrink-0"
                        >
                          <div className="w-7 h-7 rounded-full flex items-center justify-center overflow-hidden border border-black/5 dark:border-zinc-700 bg-black/5 dark:bg-zinc-800 shrink-0 shadow-inner">
                            {player?.photo ? (
                              <img
                                src={player.photo}
                                alt={player.name}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <span className="text-black/20 dark:text-zinc-300">
                                  <IoPersonOutline size={12} />
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-black uppercase truncate text-zinc-900 dark:text-white group-hover:text-black dark:group-hover:text-white">
                              {player?.name}
                            </div>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-black/5 dark:bg-zinc-800 border border-black/10 dark:border-zinc-700 flex items-center justify-center text-black/50 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-all shrink-0">
                            <PiPlusBold size={8} />
                          </div>
                        </motion.button>
                      );
                    })}
                </div>

                <button
                  onClick={() => setShowAssistSelection(null)}
                  className="w-full py-3 mt-1 text-[9px] font-black uppercase tracking-widest transition-all bg-black/5 dark:bg-white/5 hover:bg-red-500/20 rounded-xl text-black/60 dark:text-white/50 hover:text-red-400 border border-black/5 dark:border-white/5 hover:border-red-500/30 text-center shadow-sm shrink-0"
                >
                  Cancelar Gol
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
        {showCloseWarningModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[110] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-md p-8 rounded-lg bg-brand-card border border-red-500/20 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-red-500 rounded-md flex items-center justify-center mb-6 shadow shadow-red-500/20">
                <AlertTriangle
                  size={40}
                  className="text-zinc-900 dark:text-white"
                />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-brand-primary">
                Atenção!
              </h3>
              <p className="text-sm text-brand-text-secondary mb-8">
                Se você fechar esta janela, todas as partidas terão que ser
                criadas novamente. Deseja continuar?
              </p>
              <button
                onClick={() => {
                  setShowCloseWarningModal(false);
                  setCurrentScreen("teams");
                  setTeamsTab(match.isActive ? "historico" : "proximos");
                }}
                className="w-full py-4 bg-red-500 text-white rounded-md font-black uppercase tracking-tighter shadow shadow-red-500/20 hover:bg-red-600 transition-all active:scale-95"
              >
                Continuar
              </button>
              <button
                onClick={() => setShowCloseWarningModal(false)}
                className="w-full py-4 mt-2 text-brand-text-secondary text-xs font-bold uppercase"
              >
                Voltar
              </button>
            </motion.div>
          </motion.div>
        )}

        {showMatchSettingsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 dark:bg-[#060814]/85 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-md p-6 rounded-lg bg-brand-card max-h-[90vh] flex flex-col`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black uppercase tracking-tighter">
                  Ajustes da Partida
                </h3>
                <button
                  onClick={() => setShowMatchSettingsModal(false)}
                  className="p-2 glass-3d rounded-md"
                >
                  <Plus size={20} className="rotate-45" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar">
                {/* Team Selection */}
                <section className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary">
                    Confronto Atual
                  </h4>
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-2">
                    {teams.map((t, idx) => (
                      <div
                        key={`settings-team-select-${t.id}-${idx}`}
                        className={`p-[1px] rounded-md ${match.teamAIndex === idx || match.teamBIndex === idx ? "bg-team-gradient" : "bg-transparent"}`}
                      >
                        <motion.button
                          animate={
                            match.teamAIndex === idx || match.teamBIndex === idx
                              ? {
                                  scale: [1, 1.03, 1],
                                  y: [0, -2, 0],
                                }
                              : {}
                          }
                          onClick={() => {
                            if (match.teamAIndex === idx) {
                              setMatch((prev) => ({ ...prev, teamAIndex: -1 }));
                            } else if (match.teamBIndex === idx) {
                              setMatch((prev) => ({ ...prev, teamBIndex: -1 }));
                            } else if (match.teamAIndex === -1) {
                              setMatch((prev) => ({
                                ...prev,
                                teamAIndex: idx,
                              }));
                            } else if (match.teamBIndex === -1) {
                              setMatch((prev) => ({
                                ...prev,
                                teamBIndex: idx,
                              }));
                            } else {
                              setMatch((prev) => ({
                                ...prev,
                                teamBIndex: idx,
                              }));
                            }
                          }}
                          className={`w-full p-3 rounded-[15px] text-xs font-black transition-all flex flex-col items-center gap-1 relative ${
                            match.teamAIndex === idx || match.teamBIndex === idx
                              ? "bg-white dark:bg-[#0D0D0D] border border-brand-primary text-zinc-900 dark:text-white shadow-xl"
                              : "bg-white dark:bg-[#0D0D0D] border border-black/5 dark:border-white/5 text-black/70 dark:text-white/60"
                          }`}
                        >
                          <div className="absolute top-2 left-2 z-10">
                            <div
                              className={`w-3 h-3 rounded-full border flex items-center justify-center transition-all duration-500 ${
                                match.teamAIndex === idx ||
                                match.teamBIndex === idx
                                  ? "bg-brand-primary border-[#0D0D0D]"
                                  : "bg-black/5 border-black/20"
                              }`}
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full ${
                                  match.teamAIndex === idx ||
                                  match.teamBIndex === idx
                                    ? "bg-white dark:bg-[#0D0D0D]"
                                    : "bg-black/10"
                                }`}
                              />
                            </div>
                          </div>
                          <span className="truncate w-full text-center">
                            {t.name}
                          </span>
                          <div className="flex flex-wrap justify-center gap-0.5 mt-1">
                            {t.playerIds.slice(0, 3).map((pid, pidx) => (
                              <span
                                key={`settings-team-player-badge-${t.id}-${pid}-${pidx}`}
                                className="text-[6px] opacity-60 bg-black/5 px-1 rounded-sm"
                              >
                                {
                                  players
                                    .find((p) => p.id === pid)
                                    ?.name.split(" ")[0]
                                }
                              </span>
                            ))}
                          </div>
                        </motion.button>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Manage Teams & Players */}
                <section className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary">
                    Gerenciar Times e Jogadores
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <AnimatePresence mode="popLayout">
                      {teams.map((team, tIdx) => (
                        <motion.div
                          key={`settings-team-manage-${team.id}-${tIdx}`}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          className={`p-4 rounded-lg border bg-brand-dark/50 transition-all duration-300 ${
                            tIdx === match.teamAIndex ||
                            tIdx === match.teamBIndex
                              ? "border-brand-primary shadow-[0_0_15px_rgba(198,255,0,0.15)]"
                              : "border-black/5 dark:border-white/5"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setShowIconPicker(tIdx)}
                                className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center hover:bg-black/50 dark:hover:bg-white/50 dark:bg-black/20 transition-all active:scale-95 border border-black/5"
                                style={{ color: team.color }}
                              >
                                {(() => {
                                  const Icon =
                                    TEAM_ICONS[
                                      team.iconIdx ?? tIdx % TEAM_ICONS.length
                                    ];
                                  return <Icon size={18} />;
                                })()}
                              </button>
                              <span className="text-sm font-black uppercase tracking-widest text-[#0D0D0D]">
                                {team.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-sm border border-black/10 dark:border-white/10">
                                <button
                                  onClick={() => moveTeam(tIdx, "up")}
                                  disabled={tIdx === 0}
                                  className="p-1.5 text-[#0D0D0D] hover:text-brand-primary disabled:opacity-20 transition-colors"
                                >
                                  <ChevronRight
                                    size={18}
                                    className="-rotate-90"
                                    strokeWidth={3}
                                  />
                                </button>
                                <div className="w-[1px] h-4 bg-black/10 mx-0.5" />
                                <button
                                  onClick={() => moveTeam(tIdx, "down")}
                                  disabled={tIdx === teams.length - 1}
                                  className="p-1.5 text-[#0D0D0D] hover:text-brand-primary disabled:opacity-20 transition-colors"
                                >
                                  <ChevronRight
                                    size={18}
                                    className="rotate-90"
                                    strokeWidth={3}
                                  />
                                </button>
                              </div>
                              <button
                                onClick={() => setShowQuickAddPlayerModal(tIdx)}
                                className="flex items-center gap-1 px-2 py-1 bg-brand-primary/10 hover:bg-brand-primary/20 border border-brand-primary/30 rounded-lg transition-all group ml-2"
                              >
                                <UserPlus
                                  size={10}
                                  className="text-brand-primary group-hover:scale-110 transition-transform"
                                />
                                <span className="text-[8px] font-black uppercase text-brand-primary tracking-widest">
                                  Adicionar ou Criar
                                </span>
                              </button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {[...team.playerIds]
                              .sort((a, b) => {
                                const pA = players.find((p) => p.id === a);
                                const pB = players.find((p) => p.id === b);
                                if (pA?.isGoalkeeper && !pB?.isGoalkeeper)
                                  return -1;
                                if (!pA?.isGoalkeeper && pB?.isGoalkeeper)
                                  return 1;
                                return (
                                  (pA?.arrivedAt || 0) - (pB?.arrivedAt || 0)
                                );
                              })
                              .map((pid, idx) => {
                                const player = players.find(
                                  (p) => p.id === pid,
                                );
                                if (!player) return null;
                                return (
                                  <div
                                    key={`settings-player-item-${team.id}-${pid}-${idx}`}
                                    className={`flex items-center justify-between p-2 rounded-md bg-brand-card/50`}
                                  >
                                    <div className="flex items-center gap-2 flex-1 min-w-0">
                                      {editingPlayerId === pid ? (
                                        <input
                                          autoFocus
                                          defaultValue={player.name}
                                          className="bg-transparent border-b border-brand-primary outline-none text-xs font-bold py-0.5 w-full"
                                          onKeyDown={(e) => {
                                            if (e.key === "Enter")
                                              updatePlayerName(
                                                pid,
                                                e.currentTarget.value,
                                              );
                                            if (e.key === "Escape")
                                              setEditingPlayerId(null);
                                          }}
                                          onBlur={(e) =>
                                            updatePlayerName(
                                              pid,
                                              e.target.value,
                                            )
                                          }
                                        />
                                      ) : (
                                        <span className="text-xs font-bold truncate text-[#0D0D0D]">
                                          {player.name}
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      {swappingPlayerId === pid ? (
                                        <div className="flex items-center gap-1 bg-brand-primary/20 p-1 rounded-sm border border-brand-primary/30">
                                          <button
                                            onClick={() =>
                                              setSwappingPlayerId(null)
                                            }
                                            className="p-1 text-xs font-bold text-[#0D0D0D] hover:text-brand-primary"
                                          >
                                            Cancelar
                                          </button>
                                        </div>
                                      ) : (
                                        <button
                                          onClick={() =>
                                            setSwappingPlayerId(pid)
                                          }
                                          className="p-1.5 text-brand-text-secondary hover:text-brand-primary flex items-center gap-1"
                                        >
                                          <RefreshCw
                                            size={12}
                                            className={
                                              swappingPlayerId
                                                ? "animate-spin"
                                                : ""
                                            }
                                          />
                                          <span className="text-[8px] font-black uppercase">
                                            Sub
                                          </span>
                                        </button>
                                      )}

                                      {swappingPlayerId &&
                                        swappingPlayerId !== pid && (
                                          <button
                                            onClick={() => {
                                              const playerAId =
                                                swappingPlayerId;
                                              const playerBId = pid;

                                              handleGoalkeeperSwap(
                                                playerAId,
                                                playerBId,
                                              );
                                              setTeams((prev) => {
                                                const newTeams = prev.map(
                                                  (t) => ({
                                                    ...t,
                                                    playerIds: [...t.playerIds],
                                                  }),
                                                );
                                                let teamAIdx = -1;
                                                let teamBIdx = -1;

                                                newTeams.forEach(
                                                  (team, idx) => {
                                                    if (
                                                      team.playerIds.includes(
                                                        playerAId,
                                                      )
                                                    )
                                                      teamAIdx = idx;
                                                    if (
                                                      team.playerIds.includes(
                                                        playerBId,
                                                      )
                                                    )
                                                      teamBIdx = idx;
                                                  },
                                                );

                                                if (
                                                  teamAIdx !== -1 &&
                                                  teamBIdx !== -1
                                                ) {
                                                  if (teamAIdx === teamBIdx) {
                                                    newTeams[
                                                      teamAIdx
                                                    ].playerIds = newTeams[
                                                      teamAIdx
                                                    ].playerIds.map((id) => {
                                                      if (id === playerAId)
                                                        return playerBId;
                                                      if (id === playerBId)
                                                        return playerAId;
                                                      return id;
                                                    });
                                                  } else {
                                                    newTeams[
                                                      teamAIdx
                                                    ].playerIds = newTeams[
                                                      teamAIdx
                                                    ].playerIds.map((id) =>
                                                      id === playerAId
                                                        ? playerBId
                                                        : id,
                                                    );
                                                    newTeams[
                                                      teamBIdx
                                                    ].playerIds = newTeams[
                                                      teamBIdx
                                                    ].playerIds.map((id) =>
                                                      id === playerBId
                                                        ? playerAId
                                                        : id,
                                                    );
                                                  }
                                                }

                                                return newTeams;
                                              });
                                              setSwappingPlayerId(null);
                                            }}
                                            className="p-1.5 bg-brand-primary text-[#0D0D0D] rounded-sm text-[8px] font-black uppercase"
                                          >
                                            Trocar
                                          </button>
                                        )}

                                      <button
                                        onClick={() => {
                                          setTeams((prev) => {
                                            const newTeams = prev.map((t) => ({
                                              ...t,
                                              playerIds: [...t.playerIds],
                                            }));
                                            newTeams[tIdx].playerIds = newTeams[
                                              tIdx
                                            ].playerIds.filter(
                                              (id) => id !== pid,
                                            );
                                            return newTeams;
                                          });
                                        }}
                                        className="p-1.5 text-brand-text-secondary hover:text-red-400"
                                      >
                                        <Trash2 size={12} />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </section>

                {/* Bench Players */}
                <section className="space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-text-secondary">
                    Banco de Reservas
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {players.filter(
                      (p) =>
                        p.isAvailable &&
                        !teams.some((t) => t.playerIds.includes(p.id)),
                    ).length === 0 ? (
                      <p className="text-[10px] text-brand-text-secondary italic opacity-50">
                        Nenhum reserva disponível
                      </p>
                    ) : (
                      players
                        .filter(
                          (p) =>
                            p.isAvailable &&
                            !teams.some((t) => t.playerIds.includes(p.id)),
                        )
                        .map((player, pIndex) => (
                          <div
                            key={`quick-add-player-${player.id}-${pIndex}`}
                            className="flex items-center justify-between p-2 rounded-md bg-brand-dark/30 border border-black/5 dark:border-white/5"
                          >
                            <span className="text-xs font-bold truncate text-[#0D0D0D]">
                              {player.name}
                            </span>
                            <div className="flex items-center gap-1">
                              {swappingPlayerId && (
                                <button
                                  onClick={() => {
                                    const playerInTeamId = swappingPlayerId;
                                    const playerFromBenchId = player.id;

                                    const targetTeamIdx = teams.findIndex((t) =>
                                      t.playerIds.includes(playerInTeamId),
                                    );
                                    if (targetTeamIdx !== -1) {
                                      scrollToTeam(targetTeamIdx);
                                    }

                                    handleGoalkeeperSwap(
                                      playerInTeamId,
                                      playerFromBenchId,
                                    );
                                    setTeams((prev) => {
                                      const newTeams = prev.map((t) => ({
                                        ...t,
                                        playerIds: [...t.playerIds],
                                      }));
                                      const teamIdx = newTeams.findIndex((t) =>
                                        t.playerIds.includes(playerInTeamId),
                                      );

                                      if (teamIdx !== -1) {
                                        newTeams[teamIdx].playerIds = newTeams[
                                          teamIdx
                                        ].playerIds.map((id) =>
                                          id === playerInTeamId
                                            ? playerFromBenchId
                                            : id,
                                        );
                                      }
                                      return newTeams;
                                    });
                                    setSwappingPlayerId(null);
                                  }}
                                  className="px-3 py-1 bg-brand-primary text-[#0D0D0D] rounded-sm text-[8px] font-black uppercase"
                                >
                                  Entrar
                                </button>
                              )}
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </section>
              </div>

              <button
                onClick={() => {
                  if (
                    match.hasEnded ||
                    match.timeRemaining === 0 ||
                    match.scoreA >= match.config.goalLimit ||
                    match.scoreB >= match.config.goalLimit
                  ) {
                    setMatch((prev) => ({
                      ...prev,
                      scoreA: 0,
                      scoreB: 0,
                      timeRemaining: prev.config.duration * 60,
                      events: [],
                      hasEnded: false,
                      isPaused: true,
                      isActive: true,
                    }));
                  }
                  setShowMatchSettingsModal(false);
                }}
                className="w-full py-4 mt-6 bg-brand-gradient text-black rounded-lg font-black uppercase tracking-tighter shadow-xl  glass-3d"
              >
                salvar
              </button>
            </motion.div>
          </motion.div>
        )}

        {showConfigMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={() => setShowConfigMenu(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-sm p-6 rounded-lg bg-brand-card space-y-4`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-black uppercase tracking-tighter text-center">
                Configuração
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => {
                    setShowConfigMenu(false);
                    setShowTimeEditModal(true);
                  }}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all bg-brand-dark hover:bg-brand-primary/20`}
                >
                  <Timer size={20} className="text-brand-primary" />
                  <span>Tempo da Partida</span>
                </button>
                <button
                  onClick={() => {
                    setShowConfigMenu(false);
                    setShowMatchSettingsModal(true);
                  }}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all bg-brand-dark hover:bg-brand-primary/20`}
                >
                  <motion.div
                    animate={{ rotate: [0, 180, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 8.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Settings
                      size={20}
                      className="text-zinc-500 dark:text-zinc-500"
                    />
                  </motion.div>
                  <span>Ajuste de Partida</span>
                </button>
              </div>
              <button
                onClick={() => setShowConfigMenu(false)}
                className={`w-full py-4 rounded-xl font-bold glass-3d bg-brand-dark text-brand-text-secondary`}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}

        {showTimeEditModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[110] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-sm p-8 rounded-lg bg-brand-card space-y-6 relative`}
            >
              <button
                onClick={() => setShowTimeEditModal(false)}
                className="absolute top-6 right-6 p-2 glass-3d rounded-xl text-brand-text-secondary hover:text-brand-primary transition-colors"
              >
                <Plus size={20} className="rotate-45" />
              </button>

              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Tempo da Partida
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-brand-text-secondary">
                    Duração (Minutos)
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={
                      match.config.duration === 0 ? "" : match.config.duration
                    }
                    onChange={(e) => {
                      const val =
                        e.target.value === "" ? 0 : parseInt(e.target.value);
                      if (!isNaN(val)) {
                        setMatch((prev) => ({
                          ...prev,
                          config: { ...prev.config, duration: val },
                          timeRemaining: val * 60,
                        }));
                      }
                    }}
                    className={`w-full p-4 rounded-lg outline-none font-bold bg-brand-dark`}
                  />
                </div>
              </div>
              <button
                onClick={() => setShowTimeEditModal(false)}
                className="w-full py-4 bg-brand-gradient text-black rounded-md font-black uppercase tracking-tighter shadow-xl  glass-3d"
              >
                Confirmar
              </button>
            </motion.div>
          </motion.div>
        )}

        {showIconPicker !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={() => setShowIconPicker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-sm p-6 rounded-lg bg-brand-card space-y-6`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-black uppercase tracking-tighter text-center">
                Escolher Escudo
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {TEAM_ICONS.map((Icon, idx) => (
                  <button
                    key={`team-icon-${idx}`}
                    onClick={() => {
                      const newTeams = [...teams];
                      newTeams[showIconPicker].iconIdx = idx;
                      setTeams(newTeams);
                      setShowIconPicker(null);
                    }}
                    className={`flex items-center justify-center p-3 rounded-lg transition-all hover:scale-110 active:scale-90 bg-brand-dark hover:bg-brand-primary/20`}
                  >
                    <Icon size={24} color={teams[showIconPicker]?.color} />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowIconPicker(null)}
                className={`w-full py-4 rounded-md font-bold glass-3d bg-brand-dark text-brand-text-secondary`}
              >
                Cancelar
              </button>
            </motion.div>
          </motion.div>
        )}

        {showTeamWarningModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[70] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-sm p-8 rounded-lg bg-brand-card space-y-6 text-center`}
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Times Incompletos
              </h3>
              <p className={`text-sm text-brand-text-secondary`}>
                Para iniciar uma partida, você precisa ter pelo menos 2 times
                com jogadores escalados.
              </p>

              <div className="space-y-3 pt-4">
                <button
                  onClick={() => {
                    setShowTeamWarningModal(false);
                    setShowFormationChoiceModal(true);
                  }}
                  className="w-full py-4 bg-brand-gradient text-black rounded-md font-bold shadow-xl  flex items-center justify-center gap-2 glass-3d"
                >
                  <Plus size={18} /> Formar Times
                </button>
                <button
                  onClick={() => setShowTeamWarningModal(false)}
                  className={`w-full py-4 rounded-lg font-bold glass-3d bg-brand-dark text-brand-text-secondary`}
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showFormationChoiceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[70] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-sm p-8 rounded-lg bg-brand-card space-y-6 text-center`}
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <LayoutGrid size={40} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Como deseja formar?
              </h3>
              <p className={`text-sm text-brand-text-secondary`}>
                Escolha o método de escalação para os seus times.
              </p>

              <div className="space-y-3 pt-4">
                <button
                  onClick={() => {
                    setShowFormationChoiceModal(false);
                    setShowRandomizeModal(true);
                  }}
                  className={`w-full py-4 rounded-lg font-bold shadow-xl flex items-center justify-center gap-2 glass-3d bg-brand-gradient text-[#0D0D0D] `}
                >
                  <Shuffle size={18} /> Aleatório
                </button>
                <button
                  onClick={() => {
                    setShowFormationChoiceModal(false);
                    setCurrentScreen("teams");
                    setTeamsTab(match.isActive ? "historico" : "proximos");
                  }}
                  className={`w-full py-4 rounded-lg font-bold glass-3d bg-brand-dark text-brand-text-secondary flex items-center justify-center gap-2`}
                >
                  <Plus size={18} /> Manual
                </button>
                <button
                  onClick={() => setShowFormationChoiceModal(false)}
                  className="w-full py-2 text-xs font-bold uppercase tracking-widest text-brand-text-secondary mt-2"
                >
                  Cancelar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showStartMatchConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="w-full max-w-[280px] rounded-[24px] overflow-hidden shadow-2xl bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-white dark:bg-white/[0.03] pt-8 pb-6 px-6 text-center relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />

                <button
                  onClick={() => setShowStartMatchConfirm(false)}
                  className="absolute top-4 right-4 p-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-black/70 dark:text-white/60 hover:text-zinc-900 dark:text-white transition-all cursor-pointer"
                >
                  <X size={14} />
                </button>

                <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none relative z-10 mt-4">
                  Partida em Andamento
                </h3>
                <p className="text-[8px] text-black/60 dark:text-white/50 font-black mt-1.5 uppercase tracking-[0.2em] relative z-10">
                  O que deseja fazer?
                </p>
              </div>

              <div className="p-4 space-y-3">
                <button
                  onClick={() => {
                    setShowStartMatchConfirm(false);
                    setTeamsTab("historico");
                  }}
                  className="w-full h-10 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-lg hover:opacity-90 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <PiPlay size={14} />
                  Continuar Partida
                </button>

                <button
                  onClick={() => {
                    setShowStartMatchConfirm(false);
                    if (
                      match.teamAIndex !== -1 &&
                      match.teamBIndex !== -1 &&
                      teams[match.teamAIndex]?.playerIds?.length ===
                        match.config.playersPerTeam &&
                      teams[match.teamBIndex]?.playerIds?.length ===
                        match.config.playersPerTeam
                    ) {
                      startNextMatch(match.teamAIndex, match.teamBIndex);
                    }
                  }}
                  className="w-full h-10 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-black/10 dark:bg-white/10 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="text-[#59b823] flex items-center justify-center">
                    <PiArrowClockwiseBold size={14} />
                  </span>
                  Nova Partida
                </button>

                <button
                  onClick={() => setShowStartMatchConfirm(false)}
                  className="w-full h-8 text-black/70 dark:text-white/60 text-[9px] font-black uppercase tracking-widest hover:text-zinc-900 dark:text-white transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showRandomizeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[60] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-sm p-8 rounded-lg bg-brand-card space-y-6`}
            >
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Sortear Jogadores
              </h3>
              <p className="text-xs text-brand-text-secondary uppercase font-bold tracking-widest">
                Quantos jogadores por time?
              </p>

              <input
                type="number"
                defaultValue={5}
                id="players-per-team-input"
                className={`w-full p-4 rounded-lg outline-none bg-brand-dark`}
              />

              <div className="flex gap-2">
                <button
                  onClick={() => setShowRandomizeModal(false)}
                  className="flex-1 py-4 bg-brand-dark text-brand-text-secondary rounded-lg font-bold glass-3d"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    const val = parseInt(
                      (
                        document.getElementById(
                          "players-per-team-input",
                        ) as HTMLInputElement
                      ).value,
                    );
                    randomizeTeams(val);
                  }}
                  className="flex-1 py-4 bg-brand-gradient text-black rounded-lg font-bold shadow-xl  glass-3d"
                >
                  Sortear
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showEventModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 dark:bg-[#060814]/85 backdrop-blur-sm z-[60] flex items-end justify-center"
            onClick={() => {
              setShowEventModal(null);
              setSelectedScorerId(null);
            }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`w-full max-w-lg p-8 rounded-t-2xl bg-brand-card max-h-[80vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1.5 bg-brand-dark rounded-full mx-auto mb-6" />

              {currentScreen === "teams" && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                      repeatDelay: 1.5
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent skew-x-12"
                  />
                )}
                {currentScreen === "teams" ? (
                <>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-6">
                    Adicionar ao{" "}
                    {teams[showEventModal.team as any]?.name || "Time"}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {players
                      .filter(
                        (p) =>
                          p.isAvailable &&
                          !teams.some((t) => t.playerIds.includes(p.id)),
                      )
                      .map((player, pIndex) => (
                        <button
                          key={`event-scorer-list-${player.id}-${pIndex}`}
                          onClick={() => {
                            const teamIdx = showEventModal.team as any;
                            const currentTeam = teams[teamIdx];

                            if (
                              currentTeam.playerIds.length >=
                              match.config.playersPerTeam
                            ) {
                              // Team is full, create new team
                              const nextLetter = String.fromCharCode(
                                65 + teams.length,
                              );
                              const iconIdx = getNextTeamIconIdx(teams);
                              const newTeam: Team = {
                                id: generateId(),
                                name: `Time ${nextLetter}`,
                                playerIds: [player.id],
                                iconIdx,
                                color: getNextTeamColor(teams),
                              };

                              setTeams([...teams, newTeam]);
                              setToast({
                                message: `O ${currentTeam.name} já está lotado. Criamos o ${newTeam.name} para este jogador.`,
                                type: "warning",
                              });
                              setTimeout(() => setToast(null), 7000);
                            } else {
                              const newTeams = [...teams];
                              newTeams[teamIdx].playerIds.push(player.id);
                              setTeams(newTeams);
                            }
                            setShowEventModal(null);
                          }}
                          className={`p-4 rounded-md text-left font-bold transition-all glass-3d bg-brand-dark`}
                        >
                          {player.name}
                        </button>
                      ))}
                    {players.filter(
                      (p) =>
                        p.isAvailable &&
                        !teams.some((t) => t.playerIds.includes(p.id)),
                    ).length === 0 && (
                      <div className="text-center py-8 opacity-50">
                        Todos os jogadores já estão em times.
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {!selectedScorerId ? (
                    <>
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-6">
                        Quem marcou o gol?
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {(showEventModal.team === "A"
                          ? teams[match.teamAIndex]?.playerIds || []
                          : teams[match.teamBIndex]?.playerIds || []
                        ).map((pid) => {
                          const player = players.find((p) => p.id === pid);
                          return player ? (
                            <button
                              key={`event-scorer-select-${showEventModal.team}-${pid}`}
                              onClick={() => setSelectedScorerId(pid)}
                              className={`w-full p-4 rounded-lg text-left font-bold transition-all flex justify-between items-center glass-3d bg-brand-dark`}
                            >
                              <span>{player.name}</span>
                              <ChevronRight
                                size={18}
                                className="text-brand-text-secondary"
                              />
                            </button>
                          ) : null;
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-black uppercase tracking-tighter mb-2 text-brand-primary">
                        Assistência?
                      </h3>
                      <p className="text-xs text-brand-text-secondary mb-6 uppercase font-bold tracking-widest">
                        GOL DE:{" "}
                        {players.find((p) => p.id === selectedScorerId)?.name}
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        <button
                          onClick={() =>
                            registerGoal(showEventModal.team, selectedScorerId)
                          }
                          className={`w-full p-4 rounded-lg text-left font-bold transition-all border-2 border-dashed border-black/10 dark:border-white/10 glass-3d hover:bg-brand-dark`}
                        >
                          Sem Assistência
                        </button>
                        {(showEventModal.team === "A"
                          ? teams[match.teamAIndex]?.playerIds || []
                          : teams[match.teamBIndex]?.playerIds || []
                        )
                          .filter((id) => id !== selectedScorerId)
                          .map((aid) => {
                            const assistPlayer = players.find(
                              (p) => p.id === aid,
                            );
                            return (
                              <button
                                key={`event-assist-select-${showEventModal.team}-${aid}`}
                                onClick={() =>
                                  registerGoal(
                                    showEventModal.team,
                                    selectedScorerId,
                                    aid,
                                  )
                                }
                                className={`p-4 rounded-lg text-left font-bold transition-all glass-3d bg-brand-dark`}
                              >
                                {assistPlayer?.name}
                              </button>
                            );
                          })}
                        <button
                          onClick={() => setSelectedScorerId(null)}
                          className="w-full py-4 text-brand-text-secondary text-xs font-bold uppercase mt-4 glass-3d rounded-lg"
                        >
                          Voltar
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        )}
        {showQuickAddPlayerModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[110] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className={`w-full max-w-sm p-8 rounded-lg bg-brand-card space-y-6 relative`}
            >
              <button
                onClick={() => setShowQuickAddPlayerModal(null)}
                className="absolute top-6 right-6 p-2 glass-3d rounded-xl text-brand-text-secondary hover:text-brand-primary transition-colors"
              >
                <Plus size={20} className="rotate-45" />
              </button>

              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Adicionar Jogador
              </h3>
              <p className="text-xs text-brand-text-secondary uppercase font-bold tracking-widest">
                Adicionar ao {teams[showQuickAddPlayerModal].name}
              </p>

              <div className="space-y-6">
                {/* Existing Players List */}
                <div className="space-y-3">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary">
                    Jogadores Disponíveis
                  </p>
                  <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                    {players.filter(
                      (p) =>
                        p.isAvailable &&
                        !teams.flatMap((t) => t.playerIds).includes(p.id),
                    ).length === 0 ? (
                      <div className="py-4 text-center border border-dashed border-black/10 dark:border-white/10 rounded-lg opacity-40">
                        <p className="text-xs font-bold normal-case">
                          Nenhum jogador livre
                        </p>
                      </div>
                    ) : (
                      players
                        .filter(
                          (p) =>
                            p.isAvailable &&
                            !teams.flatMap((t) => t.playerIds).includes(p.id),
                        )
                        .map((p, pIndex) => (
                          <button
                            key={`randomize-player-list-${p.id}-${pIndex}`}
                            onClick={() =>
                              addPlayerToTeam(p.id, showQuickAddPlayerModal)
                            }
                            className="w-full p-3 flex items-center justify-between rounded-lg bg-brand-dark border border-black/5 dark:border-white/5 hover:border-brand-primary/50 transition-all group"
                          >
                            <span className="text-sm font-bold text-[#0D0D0D]">
                              {p.name}
                            </span>
                            <Plus
                              size={14}
                              className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </button>
                        ))
                    )}
                  </div>
                </div>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-black/5 dark:border-white/5"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-brand-card px-2 text-[8px] font-black text-brand-text-secondary uppercase tracking-widest">
                      Ou crie um novo
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome do novo jogador..."
                    id="quick-player-name"
                    className={`w-full p-4 rounded-lg outline-none font-bold bg-brand-dark border border-black/5 dark:border-white/5 focus:border-brand-primary/30 transition-all`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        quickAddPlayer(
                          e.currentTarget.value,
                          showQuickAddPlayerModal,
                        );
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.getElementById(
                        "quick-player-name",
                      ) as HTMLInputElement;
                      quickAddPlayer(input.value, showQuickAddPlayerModal);
                    }}
                    className="w-full py-4 bg-brand-gradient text-black rounded-lg font-black uppercase tracking-tighter shadow-xl  glass-3d"
                  >
                    Criar e Adicionar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showCloseWarningModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-md p-8 rounded-lg bg-brand-card border border-brand-primary/20 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                <Info size={40} className="text-orange-500" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-orange-500">
                Atenção!
              </h3>
              <p className="text-sm text-brand-text-secondary mb-8 leading-relaxed">
                Se você fechar esta janela, todas as partidas terão que ser
                criadas novamente. Deseja continuar?
              </p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => setShowCloseWarningModal(false)}
                  className="flex-1 py-4 bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white rounded-md font-black uppercase tracking-tighter hover:bg-black/10 dark:bg-white/10 transition-all"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    setShowCloseWarningModal(false);
                    setCurrentScreen("scoreboard");
                  }}
                  className="flex-1 py-4 bg-brand-gradient text-black rounded-md font-black uppercase tracking-tighter shadow-xl  hover:opacity-90 transition-all"
                >
                  Sim, Sair
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {replacingPlayer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-md p-8 rounded-lg bg-brand-card border border-brand-primary/20 flex flex-col items-center"
            >
              <p className="text-xs text-brand-text-secondary mb-6 text-center">
                O time vencedor teve um jogador removido. Escolha um jogador de
                outro time para substituí-lo:
              </p>

              <div className="w-full max-h-60 overflow-y-auto space-y-2 pr-2 custom-scrollbar mb-6">
                {teams.map(
                  (t, tIdx) =>
                    tIdx !== (replacingPlayer?.teamIndex ?? -1) && (
                      <div
                        key={`summary-team-select-${t.id}-${tIdx}`}
                        className="space-y-1"
                      >
                        <p className="text-[8px] font-black uppercase tracking-widest text-brand-text-secondary ml-2">
                          {t.name}
                        </p>
                        {[...t.playerIds]
                          .sort((a, b) => {
                            const pA = players.find((p) => p.id === a);
                            const pB = players.find((p) => p.id === b);
                            if (pA?.isGoalkeeper && !pB?.isGoalkeeper)
                              return -1;
                            if (!pA?.isGoalkeeper && pB?.isGoalkeeper) return 1;
                            return (pA?.arrivedAt || 0) - (pB?.arrivedAt || 0);
                          })
                          .map((pid, idx) => (
                            <button
                              key={`summary-player-replace-${t.id}-${pid}-${idx}`}
                              onClick={() => {
                                scrollToTeam(replacingPlayer.teamIndex);
                                handleGoalkeeperSwap(
                                  replacingPlayer.removedPlayerId,
                                  pid,
                                );
                                setTeams((prev) => {
                                  const newTeams = prev.map((team) => ({
                                    ...team,
                                    playerIds: [...team.playerIds],
                                  }));
                                  // Remove from source team
                                  newTeams[tIdx].playerIds = newTeams[
                                    tIdx
                                  ].playerIds.filter((id) => id !== pid);
                                  // Replace in target team
                                  newTeams[
                                    replacingPlayer.teamIndex
                                  ].playerIds = newTeams[
                                    replacingPlayer.teamIndex
                                  ].playerIds.map((id) =>
                                    id === replacingPlayer.removedPlayerId
                                      ? pid
                                      : id,
                                  );
                                  return newTeams.filter(
                                    (team) => team.playerIds.length > 0,
                                  );
                                });
                                setPlayerEvents((prev) => ({
                                  ...prev,
                                  [pid]: {
                                    type: "swap",
                                    timestamp: Date.now(),
                                  },
                                }));
                                setReplacingPlayer(null);
                              }}
                              className="w-full p-3 flex items-center justify-between rounded-md bg-brand-dark border border-black/5 dark:border-white/5 hover:border-brand-primary/50 transition-all group"
                            >
                              <span className="text-sm font-bold text-[#0D0D0D]">
                                {players.find((p) => p.id === pid)?.name}
                              </span>
                              <Plus
                                size={14}
                                className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity"
                              />
                            </button>
                          ))}
                      </div>
                    ),
                )}
              </div>

              <button
                onClick={() => {
                  // If cancelled, just remove the player without replacement
                  setTeams((prev) => {
                    const newTeams = prev.map((team) => ({
                      ...team,
                      playerIds: [...team.playerIds],
                    }));
                    newTeams[replacingPlayer.teamIndex].playerIds = newTeams[
                      replacingPlayer.teamIndex
                    ].playerIds.filter(
                      (id) => id !== replacingPlayer.removedPlayerId,
                    );
                    return newTeams.filter((team) => team.playerIds.length > 0);
                  });
                  setReplacingPlayer(null);
                }}
                className="w-full py-4 bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white rounded-lg font-black uppercase tracking-tighter hover:bg-black/10 dark:bg-white/10 transition-all"
              >
                Remover sem substituir
              </button>
            </motion.div>
          </motion.div>
        )}

        <ColorPickerModal
          isOpen={!!showColorPicker}
          onClose={() => setShowColorPicker(null)}
          currentColor={showColorPicker?.color || ""}
          teamName={
            showColorPicker
              ? showColorPicker.teamIdx === -1
                ? "Time A (Fixo)"
                : showColorPicker.teamIdx === -2
                  ? "Time B (Fixo)"
                  : teams[showColorPicker.teamIdx]?.name || ""
              : ""
          }
          isFixed={fixedColors.enabled}
          onToggleFixed={(enabled) => {
            setFixedColors((prev) => {
              if (enabled && showColorPicker) {
                const idx = showColorPicker.teamIdx;
                const isTeamA = idx === -1 || idx === match.teamAIndex;
                return {
                  ...prev,
                  enabled,
                  teamA: isTeamA
                    ? showColorPicker.color
                    : prev.teamA ||
                      teams[match.teamAIndex]?.color ||
                      TEAM_COLORS[0],
                  teamB: !isTeamA
                    ? showColorPicker.color
                    : prev.teamB ||
                      teams[match.teamBIndex]?.color ||
                      TEAM_COLORS[1],
                };
              }
              return { ...prev, enabled };
            });
          }}
          onSelect={(color) => {
            if (!showColorPicker) return;
            const idx = showColorPicker.teamIdx;
            const isTeamA = idx === -1 || idx === match.teamAIndex;
            const isTeamB = idx === -2 || idx === match.teamBIndex;
            const iconIdx = SHIRT_COLORS.indexOf(color);

            if (idx === -1) {
              setFixedColors((prev) => ({ ...prev, teamA: color }));
              if (match.teamAIndex !== -1) {
                setTeams((prev) =>
                  prev.map((t, i) =>
                    i === match.teamAIndex ? { ...t, color, iconIdx } : t,
                  ),
                );
              }
            } else if (idx === -2) {
              setFixedColors((prev) => ({ ...prev, teamB: color }));
              if (match.teamBIndex !== -1) {
                setTeams((prev) =>
                  prev.map((t, i) =>
                    i === match.teamBIndex ? { ...t, color, iconIdx } : t,
                  ),
                );
              }
            } else if (fixedColors.enabled) {
              setFixedColors((prev) => ({
                ...prev,
                teamA: isTeamA ? color : prev.teamA,
                teamB: isTeamB ? color : prev.teamB,
              }));
              // Also update specific team
              setTeams((prev) =>
                prev.map((t, i) => (i === idx ? { ...t, color, iconIdx } : t)),
              );
            } else {
              setTeams((prev) => {
                const newTeams = [...prev];
                if (newTeams[idx]) {
                  newTeams[idx].color = color;
                  newTeams[idx].iconIdx = iconIdx;
                }
                return newTeams;
              });
            }
            setShowColorPicker(null);
          }}
        />

        <AssistModal
          isOpen={!!pendingAssist}
          onSelect={handleAssistSelection}
          teamPlayers={
            pendingAssist
              ? pendingAssist.team === "A"
                ? match.teamAIndex !== -1
                  ? teams[match.teamAIndex]?.playerIds || []
                  : []
                : match.teamBIndex !== -1
                  ? teams[match.teamBIndex]?.playerIds || []
                  : []
              : []
          }
          goalPlayerId={pendingAssist?.goalPlayerId || ""}
          players={players}
        />

        {/* Scorer Selection Modal */}
        <ScorerModal
          isOpen={showScorerModal}
          onSelect={(playerId) => {
            if (scorerTeam) {
              handlePlayerGoal(playerId, scorerTeam);
              setShowScorerModal(false);
              setScorerTeam(null);
            }
          }}
          teamPlayers={
            scorerTeam
              ? scorerTeam === "A"
                ? match.teamAIndex !== -1
                  ? teams[match.teamAIndex]?.playerIds || []
                  : []
                : match.teamBIndex !== -1
                  ? teams[match.teamBIndex]?.playerIds || []
                  : []
              : []
          }
          players={players}
          teamName={
            scorerTeam
              ? scorerTeam === "A"
                ? match.teamAIndex !== -1
                  ? teams[match.teamAIndex]?.name
                  : "Time A"
                : match.teamBIndex !== -1
                  ? teams[match.teamBIndex]?.name
                  : "Time B"
              : ""
          }
        />

        <PlayerManagementModalComponent
          player={
            playerManagementModal
              ? players.find((p) => p.id === playerManagementModal.id) ||
                playerManagementModal
              : null
          }
          isOpen={!!playerManagementModal}
          onClose={() => setPlayerManagementModal(null)}
          onUpdateName={updatePlayerName}
          onUpdatePhoto={updatePlayerPhoto}
          onUpdateStars={updatePlayerStars}
          onRemove={removePlayer}
          matchHistory={matchHistory}
        />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 50, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              onClick={() => {
                if (mainRef.current) {
                  mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="fixed bottom-36 right-5 z-[110] w-14 h-14 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/5 flex items-center justify-center cursor-pointer transition-all hover:scale-105 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp size={28} color="white" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Bottom Navigation */}
        {!(currentScreen === "players" && !showAddPlayerSection) && (
          <div
            className={`fixed bottom-0 left-0 right-0 z-[100] w-full ${isPrintMode ? "hidden" : ""}`}
          >
            <nav className="w-full bg-white dark:bg-[#111111] border-t border-black/5 dark:border-white/5 pt-1 pb-3 sm:pb-4 px-2 sm:px-6 flex items-center justify-around">
              <button
                disabled={showGlobalSettings}
                onClick={() => {
                  const screens: Screen[] = [
                    "players",
                    "teams",
                    "ranking",
                    "finance",
                  ];
                  const targetIndex = screens.indexOf("players");
                  const currentIndex = screens.indexOf(currentScreen);
                  setSwipeDirection(targetIndex > currentIndex ? -1 : 1);
                  setCurrentScreen("players");
                }}
                className={`flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all duration-300 rounded-2xl relative overflow-hidden ${
                  currentScreen === "players" && !showGlobalSettings
                    ? "text-[#166534] dark:text-[#75c628] bg-[#166534]/10 dark:bg-[#75c628]/10"
                    : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {currentScreen === "players" && !showGlobalSettings && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                      repeatDelay: 1.5
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12"
                  />
                )}
                {currentScreen === "players" && !showGlobalSettings ? (
                  <div className="mb-1 transition-transform duration-300 -translate-y-0.5">
                    <PiUserCirclePlusThin size={28} />
                  </div>
                ) : (
                  <div className="mb-1 transition-transform duration-300">
                    <PiUserCirclePlusThin size={24} />
                  </div>
                )}
                <span
                  className={`text-[11px] leading-none transition-all duration-300 font-roboto-flex ${currentScreen === "players" && !showGlobalSettings ? "opacity-100 translate-y-0" : "opacity-70"}`}
                >
                  Cadastrar
                </span>
              </button>
              <button
                disabled={showGlobalSettings}
                onClick={() => {
                  const screens: Screen[] = [
                    "players",
                    "teams",
                    "ranking",
                    "finance",
                  ];
                  const targetIndex = screens.indexOf("teams");
                  const currentIndex = screens.indexOf(currentScreen);
                  setSwipeDirection(targetIndex > currentIndex ? -1 : 1);
                  setCurrentScreen("teams");
                  // Reset PARTIDA tabs
                  setTeamsTab("historico");
                  setPlayersTab("configuracao");
                }}
                className={`flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all duration-300 rounded-2xl relative overflow-hidden ${
                  currentScreen === "teams" && !showGlobalSettings
                    ? "text-[#166534] dark:text-[#75c628] bg-[#166534]/10 dark:bg-[#75c628]/10"
                    : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {currentScreen === "teams" && !showGlobalSettings && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                      repeatDelay: 1.5
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12"
                  />
                )}
                {currentScreen === "teams" && !showGlobalSettings ? (
                  <div className="mb-1 transition-transform duration-300 -translate-y-0.5">
                    <GiSoccerField size={26} />
                  </div>
                ) : (
                  <div className="mb-1 transition-transform duration-300">
                    <GiSoccerField size={22} />
                  </div>
                )}
                <span
                  className={`text-[11px] leading-none transition-all duration-300 font-roboto-flex ${currentScreen === "teams" && !showGlobalSettings ? "opacity-100 translate-y-0" : "opacity-70"}`}
                >
                  Partida
                </span>
              </button>
              <button
                disabled={showGlobalSettings}
                onClick={() => {
                  const screens: Screen[] = [
                    "players",
                    "teams",
                    "ranking",
                    "finance",
                  ];
                  const targetIndex = screens.indexOf("ranking");
                  const currentIndex = screens.indexOf(currentScreen);
                  setSwipeDirection(targetIndex > currentIndex ? -1 : 1);
                  setCurrentScreen("ranking");
                }}
                className={`flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all duration-300 rounded-2xl relative overflow-hidden ${
                  currentScreen === "ranking" && !showGlobalSettings
                    ? "text-[#166534] dark:text-[#75c628] bg-[#166534]/10 dark:bg-[#75c628]/10"
                    : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {currentScreen === "ranking" && !showGlobalSettings && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                      repeatDelay: 1.5
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12"
                  />
                )}
                {currentScreen === "ranking" && !showGlobalSettings ? (
                  <div className="mb-1 transition-transform duration-300 -translate-y-0.5">
                    <GiTrophy size={26} />
                  </div>
                ) : (
                  <div className="mb-1 transition-transform duration-300">
                    <GiTrophy size={22} />
                  </div>
                )}
                <span
                  className={`text-[11px] leading-none transition-all duration-300 font-roboto-flex ${currentScreen === "ranking" && !showGlobalSettings ? "opacity-100 translate-y-0" : "opacity-70"}`}
                >
                  Ranking
                </span>
              </button>
              <button
                disabled={showGlobalSettings}
                onClick={() => {
                  const screens: Screen[] = [
                    "players",
                    "teams",
                    "ranking",
                    "finance",
                  ];
                  const targetIndex = screens.indexOf("finance");
                  const currentIndex = screens.indexOf(currentScreen);
                  setSwipeDirection(targetIndex > currentIndex ? -1 : 1);
                  setCurrentScreen("finance");
                  setFinanceSubScreen("balanco");
                }}
                className={`flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all duration-300 rounded-2xl relative overflow-hidden ${
                  currentScreen === "finance" && !showGlobalSettings
                    ? "text-[#166534] dark:text-[#75c628] bg-[#166534]/10 dark:bg-[#75c628]/10"
                    : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {currentScreen === "finance" && !showGlobalSettings && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                      repeatDelay: 1.5
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12"
                  />
                )}
                {currentScreen === "finance" && !showGlobalSettings ? (
                  <div className="mb-1 transition-transform duration-300 -translate-y-0.5">
                    <IoIosWallet size={26} />
                  </div>
                ) : (
                  <div className="mb-1 transition-transform duration-300">
                    <IoIosWallet size={22} />
                  </div>
                )}
                <span
                  className={`text-[11px] leading-none transition-all duration-300 font-roboto-flex ${currentScreen === "finance" && !showGlobalSettings ? "opacity-100 translate-y-0" : "opacity-70"}`}
                >
                  Financeiro
                </span>
              </button>

              <button
                onClick={() => setShowGlobalSettings(!showGlobalSettings)}
                className={`flex-1 flex flex-col items-center justify-center py-2 mx-1 transition-all duration-300 rounded-2xl relative overflow-hidden ${
                  showGlobalSettings
                    ? "text-[#166534] dark:text-[#75c628] bg-[#166534]/10 dark:bg-[#75c628]/10"
                    : "text-black/40 dark:text-white/40 hover:text-black/60 dark:hover:text-white/60 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {showGlobalSettings && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                      repeatDelay: 1.5
                    }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12"
                  />
                )}
                {showGlobalSettings ? (
                  <div className="mb-1 transition-transform duration-300 -translate-y-0.5">
                    <IoIosMenu size={26} />
                  </div>
                ) : (
                  <div className="mb-1 transition-transform duration-300">
                    <IoIosMenu size={22} />
                  </div>
                )}
                <span
                  className={`text-[11px] leading-none transition-all duration-300 font-roboto-flex ${showGlobalSettings ? "opacity-100 translate-y-0" : "opacity-70"}`}
                >
                  Menu
                </span>
              </button>
            </nav>
          </div>
        )}

        {/* Auto Complete Confirmation Modal */}
        {showAutoCompleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setShowAutoCompleteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              className="w-full max-w-[320px] rounded-[24px] overflow-hidden shadow-2xl bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#59b823]/10 dark:bg-[#75c628]/10 text-[#59b823] dark:text-[#75c628] flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#59b823]/20">
                  <CiSaveUp1 size={36} />
                </div>
                <h2 className="text-sm font-black text-center mb-2 uppercase tracking-widest text-zinc-900 dark:text-white">
                  Subida Automática
                </h2>
                <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8 text-[12px] leading-relaxed font-medium">
                  Os jogadores subirão na fila automaticamente
                  <br />
                  nos times.
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={() => setShowAutoCompleteModal(false)}
                    className="w-full h-12 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg shadow-emerald-500/20 hover:opacity-90 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={16} className="text-zinc-900 dark:text-white" />
                    <span>OK</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Reset Stats Confirm Modal */}
        {showResetStatsConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm z-[300] flex items-center justify-center p-4"
            onClick={() => setShowResetStatsConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-brand-dark border border-emerald-500/30 rounded-lg p-6 max-w-sm w-full shadow-2xl shadow-emerald-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                <RotateCcw size={32} />
              </div>
              <h2 className="text-xl font-black text-center mb-2 uppercase tracking-tighter text-zinc-900 dark:text-white">
                Zerar Estatísticas?
              </h2>
              <p className="text-center text-brand-text-secondary mb-6 text-sm">
                Deseja zerar todos os gols e assistências de todos os jogadores?
                Esta ação não pode ser desfeita.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowResetStatsConfirm(false)}
                  className="flex-1 py-3 bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-black/10 dark:bg-white/10 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={resetAllStats}
                  className="flex-1 py-3 bg-emerald-500 text-[#1e3d2f] rounded-xl font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-colors"
                >
                  Zerar Agora
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {showSetupGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-sm p-6 sm:p-7 rounded-[24px] bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
                    Guia
                  </h3>
                  <p className="text-[10px] font-medium leading-relaxed text-black/60 dark:text-white/50 max-w-[240px] mx-auto">
                    Siga estes passos simples:
                  </p>
                </div>

                <div className="w-full space-y-3.5 text-left py-2">
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#34d399]/10 border border-[#34d399]/20 text-black text-[11px] font-black flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      1
                    </div>
                    <p className="text-[10px] font-medium text-black/70 dark:text-white/60 leading-normal">
                      <span className="text-zinc-900 dark:text-white font-bold block mb-0.5 text-[11px]">
                        Crie sua Pelada
                      </span>
                      Clique no banner verde para definir nome, data e local.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#34d399]/10 border border-[#34d399]/20 text-black text-[11px] font-black flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      2
                    </div>
                    <p className="text-[10px] font-medium text-black/70 dark:text-white/60 leading-normal">
                      <span className="text-zinc-900 dark:text-white font-bold block mb-0.5 text-[11px]">
                        Acesse o Gerenciamento
                      </span>
                      Toque na pelada criada na sua lista para adicionar
                      jogadores.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-[#34d399]/10 border border-[#34d399]/20 text-black text-[11px] font-black flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      3
                    </div>
                    <p className="text-[10px] font-medium text-black/70 dark:text-white/60 leading-normal">
                      <span className="text-zinc-900 dark:text-white font-bold block mb-0.5 text-[11px]">
                        Organize as Partidas
                      </span>
                      Confirme presenças, registre gols e gerencie o financeiro.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowSetupGuide(false)}
                  className="w-full py-3 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg hover:opacity-90 active:scale-95 transition-all text-center cursor-pointer mt-1"
                >
                  Entendi, vamos lá!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Auth modal removed */}
      </AnimatePresence>

      {matchToDelete && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/85 dark:bg-[#060814]/92 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="w-full max-w-[280px] p-6 rounded-[24px] bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl shadow-2xl relative flex flex-col items-center text-center space-y-4"
          >
            <span className="text-red-500 shrink-0">
              <Trash2 size={32} />
            </span>

            <div className="space-y-1">
              <h3 className="text-lg font-normal uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
                EXCLUIR PELADA
              </h3>
              <p className="text-[10px] font-bold text-black/70 dark:text-white/60 leading-relaxed px-2 mt-2">
                Tem certeza que deseja excluir a pelada?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full pt-2">
              <button
                onClick={() => setMatchToDelete(null)}
                className="w-full h-10 rounded-xl font-black uppercase tracking-widest text-[9px] transition-all bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-black/10 dark:bg-white/10 hover:text-zinc-900 dark:text-white active:scale-95 border border-black/10 dark:border-white/10"
              >
                CANCELAR
              </button>
              <button
                onClick={() => {
                  setScheduledMatches((prev) =>
                    prev.filter((m) => m.id !== matchToDelete.id),
                  );
                  setToast({
                    message: "Pelada deletada com sucesso!",
                    type: "success",
                  });
                  setMatchToDelete(null);
                }}
                className="w-full h-10 rounded-xl font-black uppercase tracking-widest text-[9px] bg-red-500 hover:bg-red-600 text-zinc-900 dark:text-white shadow-lg shadow-red-500/20 transition-all active:scale-95"
              >
                EXCLUIR
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* WhatsApp Info Modal */}
      {showWhatsAppInfoModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-[320px] rounded-[24px] overflow-hidden shadow-2xl bg-[#f1f5f9] dark:bg-[#0b0e17] border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white"
          >
            <div className="bg-white dark:bg-white/[0.03] p-6 text-center border-b border-black/5 dark:border-white/5">
              <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#25D366]/20">
                <span className="text-[#25D366]">
                  <IoLogoWhatsapp size={32} />
                </span>
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight leading-none mb-2">
                Aviso de Jogadores
              </h3>
              <p className="text-[10px] text-black/60 dark:text-white/50 font-black uppercase tracking-widest leading-relaxed">
                Sobre a lista do WhatsApp
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="shrink-0 mt-0.5 text-amber-500">
                  <CiStopwatch size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 leading-snug">
                    Temporários (Lista WhatsApp)
                  </p>
                  <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                    Não aparecem no Financeiro e desaparecerão após a data da pelada.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="shrink-0 mt-0.5 text-blue-500">
                  <AiFillPushpin size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 leading-snug">
                    Fixos (Manual / Contatos)
                  </p>
                  <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                    Ficam salvos permanentemente e aparecem no Financeiro. O Ranking só salva se todos os jogadores em campo forem fixos.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowWhatsAppInfoModal(false)}
                className="w-full h-12 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-black uppercase tracking-widest text-[10px] shadow-lg shadow-black/10 active:scale-95 transition-all mt-4"
              >
                ENTENDI
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Schedule Match Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-[280px] rounded-[24px] overflow-hidden shadow-2xl bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-white dark:bg-white/[0.03] pt-8 pb-6 px-6 text-center relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />

              <button
                onClick={() => {
                  setShowScheduleModal(false);
                  setEditingMatchId(null);
                  setNewMatchName("");
                  setNewMatchDay("Segunda");
                  setNewMatchTime("08:00");
                  setNewMatchImage("");
                }}
                className="absolute top-4 right-4 p-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-black/70 dark:text-white/60 hover:text-zinc-900 dark:text-white transition-all cursor-pointer"
              >
                <X size={14} />
              </button>

              <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none relative z-10">
                {editingMatchId ? "Editar pelada" : "Criar pelada"}
              </h3>
              <p className="text-[8px] text-black/60 dark:text-white/50 font-black mt-1.5 uppercase tracking-[0.2em] relative z-10">
                Como vai se chamar a pelada?
              </p>
            </div>

            <div className="p-4 space-y-4 bg-white dark:bg-transparent">
              {/* Image Upload Area */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-14 h-14 rounded-full bg-black/5 dark:bg-white/5 border border-solid border-black/20 dark:border-white/20 flex items-center justify-center cursor-pointer overflow-hidden hover:border-[#34d399]/60 transition-all shadow-sm group relative"
                >
                  {newMatchImage ? (
                    <>
                      <img
                        src={newMatchImage}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/75 dark:bg-[#060814]/85 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <Camera
                          size={14}
                          className="text-zinc-900 dark:text-white"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Camera
                        size={16}
                        className="text-black/50 dark:text-white/40 group-hover:text-[#34d399]"
                      />
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <p className="text-[8px] font-black text-black/60 dark:text-white/50 uppercase tracking-widest">
                  {newMatchImage ? "Alterar foto" : "Foto da pelada"}
                </p>
                {newMatchImage && (
                  <button
                    onClick={() => setNewMatchImage("")}
                    className="text-[8px] font-bold text-red-400 hover:text-red-300 uppercase tracking-tight mt-0.5"
                  >
                    Remover
                  </button>
                )}
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  value={newMatchName}
                  onChange={(e) => setNewMatchName(e.target.value)}
                  placeholder="Nome da pelada"
                  className="w-full h-10 px-3 rounded-xl outline-none bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:border-[#34d399] focus:bg-black/10 dark:bg-white/10 transition-all text-center text-xs"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[8px] font-black text-black/60 dark:text-white/50 uppercase tracking-[0.15em] block text-center">
                    Dia da Semana
                  </label>
                  <select
                    value={newMatchDay}
                    onChange={(e) => setNewMatchDay(e.target.value)}
                    className="w-full h-10 bg-[#f1f5f9] dark:bg-[#0b0e17] border border-black/10 dark:border-white/10 rounded-xl font-bold text-center text-xs text-zinc-900 dark:text-white outline-none focus:border-[#34d399] shadow-sm cursor-pointer"
                  >
                    {[
                      "Segunda",
                      "Terça",
                      "Quarta",
                      "Quinta",
                      "Sexta",
                      "Sábado",
                      "Domingo",
                    ].map((day) => (
                      <option
                        key={day}
                        value={day}
                        className="bg-[#f1f5f9] dark:bg-[#0b0e17] text-zinc-900 dark:text-white"
                      >
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] font-black text-black/60 dark:text-white/50 uppercase tracking-[0.15em] block text-center">
                    Horário
                  </label>
                  <div className="flex items-center justify-center bg-[#f1f5f9] dark:bg-[#0b0e17] border border-black/10 dark:border-white/10 px-2 rounded-xl shadow-sm w-full h-10 overflow-hidden">
                    <input
                      type="time"
                      value={newMatchTime}
                      onChange={(e) => {
                        setNewMatchTime(e.target.value);
                      }}
                      className="bg-transparent font-bold text-center text-xs outline-none focus:text-[#34d399] cursor-pointer w-full text-zinc-900 dark:text-white [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <button
                  onClick={handleScheduleMatch}
                  disabled={!newMatchName.trim()}
                  className="w-full h-12 bg-gradient-to-r from-[#59b823] via-[#75c628] to-[#25660e] text-zinc-900 dark:text-white rounded-2xl shadow-lg font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 disabled:opacity-50 hover:opacity-90 cursor-pointer flex items-center justify-center"
                >
                  {editingMatchId ? "SALVAR" : "CRIAR"}
                </button>
                <button
                  onClick={() => {
                    setShowScheduleModal(false);
                    setEditingMatchId(null);
                    setNewMatchName("");
                    setNewMatchDay("Segunda");
                    setNewMatchTime("08:00");
                    setNewMatchImage("");
                  }}
                  className="w-full h-10 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-black/10 dark:bg-white/10 active:scale-95 cursor-pointer flex items-center justify-center"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* End Pelada Confirm Modal */}
      {showEndPeladaConfirm && (
        <div className="fixed inset-0 z-[310] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-[280px] rounded-[24px] overflow-hidden shadow-2xl bg-[#f1f5f9] dark:bg-[#0b0e17]/95 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white backdrop-blur-xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-white dark:bg-white/[0.03] pt-8 pb-6 px-6 text-center relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#34d399]/5 rounded-full -mr-8 -mt-8 blur-xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full -ml-8 -mb-8 blur-lg" />

              <button
                onClick={() => setShowEndPeladaConfirm(false)}
                className="absolute top-4 right-4 p-1.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-full text-black/70 dark:text-white/60 hover:text-zinc-900 dark:text-white transition-all cursor-pointer"
              >
                <X size={14} />
              </button>

              <div className="flex items-center justify-center mx-auto mb-2 relative z-10">
                <img
                  src="/atualizar.svg"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 object-contain"
                  alt="Fim da pelada"
                />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none relative z-10">
                ENCERRAR PELADA
              </h3>
            </div>

            <div className="p-4 space-y-4 bg-white dark:bg-transparent">
              <p className="text-xs font-medium text-black/70 dark:text-white/70 text-center leading-normal">
                {matchHistory.length > 0 ? (
                  <>
                    Isso irá salvar as informações de{" "}
                    <span className="font-black text-zinc-900 dark:text-white">
                      presença
                    </span>
                    ,{" "}
                    <span className="font-black text-zinc-900 dark:text-white">
                      confrontos
                    </span>{" "}
                    e{" "}
                    <span className="font-black text-zinc-900 dark:text-white">
                      próximos
                    </span>
                    .
                    <br />
                    Deseja continuar?
                  </>
                ) : (
                  <span className="text-red-400 font-bold block">
                    É necessário que pelo menos uma partida tenha ocorrido para
                    encerrar e salvar as informações.
                  </span>
                )}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => setShowEndPeladaConfirm(false)}
                  className="w-full h-9 rounded-lg font-bold uppercase tracking-wider text-[10px] transition-all bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 active:scale-95 cursor-pointer flex items-center justify-center"
                >
                  CANCELAR
                </button>
                <button
                  onClick={confirmEndPelada}
                  disabled={matchHistory.length === 0}
                  className="w-full h-9 bg-[#2ea625] dark:bg-[#59b823] text-white font-black uppercase tracking-wider text-[10px] rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
                >
                  CONFIRMAR
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Saving Overlay */}
      <AnimatePresence>
        {isSavingPeladaFlow && <SavingPeladaOverlay />}
      </AnimatePresence>
    </div>
  );
}

function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else if (isSignUp && !data?.session) {
      setError(
        "Cadastro realizado com sucesso! Se necessário, verifique sua caixa de entrada/spam para confirmar o e-mail antes de entrar.",
      );
      setIsSignUp(false);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 flex items-center justify-center p-6 bg-zinc-100 text-zinc-900">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center relative">
          <FutQuinaLogo size="lg" colorClass="text-zinc-900" />
          <p className="text-sm font-medium tracking-widest uppercase opacity-50 mt-4">
            Sua conta, suas peladas
          </p>
        </div>

        <form
          onSubmit={handleAuth}
          className="p-8 rounded-xl shadow-md flex flex-col gap-4 bg-white"
        >
          <div className="flex p-1 bg-black/5 rounded-xl mb-4">
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all ${!isSignUp ? "bg-white shadow-sm text-black" : "text-zinc-500 dark:text-zinc-500 hover:text-black"}`}
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2.5 text-[11px] font-black uppercase tracking-widest rounded-xl transition-all ${isSignUp ? "bg-white shadow-sm text-black" : "text-zinc-500 dark:text-zinc-500 hover:text-black"}`}
            >
              Cadastrar
            </button>
          </div>

          {error && (
            <div className="p-3 rounded-2xl bg-red-500/10 text-red-500 text-xs font-bold text-center">
              {error}
            </div>
          )}

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1 block">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/5 border border-black/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1 block">
              Senha
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/5 border border-black/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-2 rounded-xl bg-brand-gradient text-black font-black uppercase tracking-widest text-xs hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Aguarde..." : isSignUp ? "Criar Conta" : "Acessar"}
          </button>
        </form>
      </div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setDisplayValue(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  return <>{displayValue}</>;
}

// --- Main App Component ---
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Directly enter the control panel (no "Nova Partida" page)
  const [currentGroupId] = useState<string>(() => {
    const saved = safeLocalStorage.getItem("futquina_current_group_id_offline");
    if (saved) return saved;

    const savedGroups = safeLocalStorage.getItem("futquina_groups_offline");
    if (savedGroups) {
      try {
        const parsed = JSON.parse(savedGroups);
        if (parsed && parsed.length > 0) return parsed[0].id;
      } catch (e) {}
    }
    return "main"; // default main group ID
  });

  useEffect(() => {
    safeLocalStorage.setItem(
      "futquina_current_group_id_offline",
      currentGroupId,
    );
  }, [currentGroupId]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999]"
          >
            <SplashScreen onComplete={() => setShowSplash(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <GroupApp groupId={currentGroupId} onBackToHome={() => {}} />
    </>
  );
}
